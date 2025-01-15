import { FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around my-2 tablet:justify-center items-center gap-11 tablet:my-10 tablet:w-full">
      {/* LOGO */}
      <div className="flex gap-5 items-center">
        <FaBars className="text-lg block tablet:hidden cursor-pointer" />
        <Link href={"/"} className="text-xl tablet:text-3xl font-bold font-heading cursor-pointer">SHOP.CO</Link>
      </div>

      {/* MENU */}
      <div className="hidden laptop:flex justify-center items-center">
        <ul className="text-lg gap-5 flex justify-center items-center">
          <li>
            <a href="#shop" className="no-underline">
              Shop
            </a>
          </li>
          <li>
            <a href="#onsale" className="no-underline">
              On Sale
            </a>
          </li>
          <li>
            <a href="#newarrivals" className="no-underline">
              New Arrivals
            </a>
          </li>
          <li>
            <a href="#brands" className="no-underline">
              Brands
            </a>
          </li>
        </ul>
      </div>

      {/* SEARCH PRODUCTS */}
      <div className="hidden tablet:flex items-center bg-neutral-200 gap-3 px-3 py-4 rounded-[62px] w-[550px]">
        <FaSearch className="text-gray-600 cursor-pointer text-xl" />
        <input
          className="border-none bg-neutral-200 outline-none"
          type="text"
          placeholder="Search for products..."
        />
      </div>

      {/* ICONOS */}
      <div className="flex justify-center items-center gap-3 tablet:gap-5 ">
        <FaSearch className="block tablet:hidden cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="text-lg tablet:text-xl cursor-pointer" />
          <span className="absolute bottom-4 left-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex justify-center items-center">
            3
          </span>
        </div>
        <FaUser className="text-lg tablet:text-xl cursor-pointer" />
      </div>
    </header>
  );
}
