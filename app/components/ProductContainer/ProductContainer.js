import React from "react";
import data from "@/public/data.json";
import Product from "../Product/Product";

const ProductContainer = ({ categoryType }) => {
  const filteredData =
    categoryType != "All"
      ? data?.filter((data) => data.category == categoryType)
      : data;
  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {filteredData?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductContainer;
