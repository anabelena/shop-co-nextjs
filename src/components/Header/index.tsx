import { FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-around my-3 w-full mx-auto tablet:my-5 tablet:max-w-[768px] laptop:max-w-[1024px] desktop:max-w-[1240px] ">
      {/* LOGO */}
      <div className="flex gap-4 tablet:gap-6 laptop:gap-7 items-center">
        <FaBars className="text-lg block desktop:hidden cursor-pointer" />
        <Link href={"/"} className="text-xl tablet:text-2xl laptop:text-3xl font-bold font-heading cursor-pointer"> SHOP.CO </Link>
      </div>

      {/* MENU */}
      <nav className="hidden desktop:flex flex-wrap justify-center items-center">
        <ul className="desktop:text-lg gap-7 flex justify-center items-center">
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
      </nav>

      {/* SEARCH PRODUCTS */}
      <div className="hidden tablet:flex items-center bg-baseBg gap-4 px-5 py-3 rounded-[62px] tablet:w-[400px] laptop:w-[480px] desktop:w-[520px]">
        <FaSearch className="text-gray-600 cursor-pointer text-xl" />
        <input
          className="border-none outline-none  bg-baseBg w-full"
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
