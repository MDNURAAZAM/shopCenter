"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Button = ({ text }) => {
  const router = useRouter();
  const pathname = usePathname();
  const category = pathname?.split("/")[2];
  const isActive = category == text;
  const handleClick = () => {
    router.push(`/category/${text}`);
  };
  return (
    <button
      onClick={handleClick}
      style={{ borderBottom: isActive ? "2px solid black" : "" }}
      className={`hover:border-b border-black block h-6 box-border mt-4`}
    >
      {capitalizeFirstLetter(text)}
    </button>
  );
};

export default Button;
