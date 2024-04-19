import React, { Fragment } from "react";
import data from "../../../public/data.json";
import Image from "next/image";
import star from "@/public/assets/svg/star.svg";
import ImageContainer from "@/app/components/ImageContainer/ImageContainer";

const ProductDetails = ({ params }) => {
  const { id } = params || {};
  const product = data?.find((d) => d.id == id);
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    thumbnail,
    images,
  } = product || {};

  const discountPrice = Math.round(price - price * (discountPercentage / 100));
  let stars = [];
  for (let index = 0; index < Math.ceil(rating); index++) {
    stars.push(<Image src={star} alt="star" width={20} />);
  }
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <ImageContainer thumbnail={thumbnail} images={images} title={title} />
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>
            <span className="text-[#919090] my-3">{category}</span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {stars?.map((star, index) => (
                <Fragment key={index}>{star}</Fragment>
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${price}
                </span>
                <span className="font-bold text-2xl">${discountPrice}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${discountPrice}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
