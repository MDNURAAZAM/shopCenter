"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Product = ({ product }) => {
  const router = useRouter();
  const {
    id,
    title,
    description,
    price,
    category,
    discountPercentage,
    thumbnail,
  } = product || {};

  const discountPrice = Math.round(price - price * (discountPercentage / 100));

  const handleClick = () => {
    router.push(`products/${id}`);
  };
  return (
    <div onClick={handleClick}>
      <div
        style={{ background: `url(${thumbnail})` }}
        className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
      ></div>
      <h2 className="text-sm lg:text-base mt-2">
        <a className="text-base font-bold" href="./productPage.html">
          {title}
        </a>
        <span className="text-[#919090]">
          <a href="./category.html">({category})</a>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${price}</span> $
        {discountPrice}
      </p>
    </div>
  );
};

export default Product;
