import React from "react";
import data from "@/public/data.json";
import Button from "../Button/Button";


const Sidebar = () => {
  const categories = data?.map((d) => d.category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Button text={"All"} />
      {uniqueCategories?.map((category) => (
        <Button key={category} text={category} />
      ))}
    </div>
  );
};

export default Sidebar;
