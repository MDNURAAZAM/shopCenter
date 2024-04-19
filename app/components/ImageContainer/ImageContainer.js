"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageContainer = ({ thumbnail, images, title }) => {
  const [image, setImage] = useState(thumbnail);
  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Image
        height={500}
        width={400}
        src={image}
        className="w-[400px] h-[500px] mx-auto object-cover"
        alt={title}
      />

      <div className="flex gap-4 mt-4">
        {images?.map((img) => (
          <Image
            onClick={() => setImage(img)}
            width={100}
            height={100}
            key={img}
            src={img}
            className="mx-auto border object-cover"
            alt={title}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
