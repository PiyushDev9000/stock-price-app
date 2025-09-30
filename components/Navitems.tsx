"use client";
import { navitems } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SearchCommand from "./SearchCommand";

const Navitems = ({
  initialStocks,
}: {
  initialStocks: StockWithWatchlistStatus[];
}) => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathName === "/";
    // console.log(pathName, "path");

    return pathName.startsWith(path);
  };
  return (
    <ul className="flex sm:flex-row p-2 gap-3 sm:gap-10 font-medium ">
      {navitems.map(({ href, label }) => {
        if (label === "Search")
          return (
            <SearchCommand
              key={label}
              renderAs="text"
              label="Search"
              initialStocks={initialStocks}
            />
          );
        return (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-yellow-500 transition-colors  ${
                isActive(href) ? "text-gray-100" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navitems;
