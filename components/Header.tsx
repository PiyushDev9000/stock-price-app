import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navitems from "./Navitems";
import UserDropDown from "./UserDropDown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
  const initialStocks = await searchStocks();

  return (
    <header className="header sticky top-0">
      <div className="container header-wrapper">
        <Link href="/">
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
          <Navitems initialStocks={initialStocks} />
        </nav>

        <UserDropDown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  );
};

export default Header;
