"use client";

import { FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useShoppingCart } from "@/Hooks/useShoppingCart";

export default function Header() {
  const { count } = useShoppingCart();

  return (
    <header className="mx-auto max-w-[1440px] flex items-center justify-between pb-2 pt-4  px-5 md:px-[110px] ">
      {/* LOGO and MOBILE MENU */}
      <div className="flex gap-4 md:gap-6 lg:gap-7 items-center  ">
        <FaBars className="text-lg block xl:hidden cursor-pointer" />
        <Link
          href={"/"}
          className="text-xl md:text-2xl lg:text-3xl font-bold font-heading cursor-pointer"
        >
          {" "}
          SHOP.CO
        </Link>
      </div>

      {/* NAVIGATION MENU */}
      <nav className="hidden xl:flex  ">
        <ul className="xl:text-lg gap-5 flex items-center ">
          <li className="hover:font-semibold">
            <Link href={"/products"} className="no-underline">
              Shop
            </Link>
          </li>
          <li className="hover:font-semibold">
            <a href="#onsale" className="no-underline">
              On Sale
            </a>
          </li>
          <li className="hover:font-semibold">
            <a href="#newarrivals" className="no-underline">
              New Arrivals
            </a>
          </li>
          <li className="hover:font-semibold">
            <a href="#brands" className="no-underline">
              Brands
            </a>
          </li>
        </ul>
      </nav>

      {/* PRODUCT FILTER */}
      <div className="hidden md:flex items-center bg-baseBg gap-4 px-5 py-3 rounded-[62px] md:w-[400px] lg:w-[480px] xl:w-[520px]">
        <FaSearch className="text-gray-600 cursor-pointer text-xl" />
        <input
          className="border-none outline-none  bg-baseBg w-full"
          // value={"hola"}
          type="text"
          // onChange={""}
          placeholder="Search for products..."
        />
      </div>

      {/* SEARCH , CART , USER */}
      <div className="flex justify-center items-center gap-4 md:gap-6 ">
        <FaSearch className="block md:hidden cursor-pointer" />
        <Link href={count > 0 ? "/cart" : "#"}>
          <div className="relative">
            <FaShoppingCart className="text-lg md:text-xl cursor-pointer" />
            {count > 0 && (
              <span className="absolute bottom-4 left-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex justify-center items-center">
                {count}
              </span>
            )}
          </div>
        </Link>
        <FaUser className="text-lg md:text-xl cursor-pointer" />
      </div>
    </header>
  );
}
