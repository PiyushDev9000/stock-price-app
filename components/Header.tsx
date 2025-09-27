import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navitems from "./Navitems";
import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
    <header className="header sticky top-0">
      <div className="container header-wrapper">
        <Link href="#">
          {" "}
          <Image
            src="/assets/icons/logo.svg"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
            alt="logo"
          />
        </Link>

        <nav className="hidden sm:block">
          <Navitems />
        </nav>

        <UserDropDown />
      </div>
    </header>
  );
};

export default Header;
