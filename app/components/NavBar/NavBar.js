import React from "react";
import logo from "../../assets/lws-logo-black.svg";
import menu from "../../assets/svg/menu.svg";
import avatar from "../../assets/svg/avatar.svg";
import cart from "../../assets/svg/shopping-Cart.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image src={menu} className="lg:hidden w-5 h-5" alt="" />
          <Link href="/">
            <Image src={logo} className="h-10" alt="" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={avatar}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        <Image src={cart} className="block w-5 h-5" alt="shopping cart icon" />
      </div>
    </nav>
  );
};

export default NavBar;
