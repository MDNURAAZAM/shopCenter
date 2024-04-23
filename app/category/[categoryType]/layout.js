import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import NavBar from "@/app/components/NavBar/NavBar";
import React from "react";
export const metadata = {
    title: "Category",
    description: "Category List",
  };

const CategoryLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default CategoryLayout;
