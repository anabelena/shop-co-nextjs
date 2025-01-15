import { FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";



export default function Header() {


  return (
    <header className="flex justify-around my-2 tablet:justify-center items-center gap-11 tablet:my-10 tablet:w-full">
      <div className="flex gap-5 items-center">
       
        <FaBars className="text-lg block tablet:hidden cursor-pointer" />
        
        
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
      <div className="hidden tablet:flex items-center bg-neutral200 gap-3 px-3 py-4 rounded-[62px] w-[550px]">
        <FaSearch className="text-gray-600 cursor-pointer text-xl" />
        <input
          className="border-none bg-neutral200 outline-none"
          type="text"
          placeholder="Search for products..."
        />
      </div>

      {/* ICONOS */}
      <div className="flex justify-center items-center gap-3 tablet:gap-5 ">
        <IconContext.Provider value={{ className: "cursor-pointer" }}>
          <FaSearch alt={"search"} className="block tablet:hidden " />
          <div className="relative">
            <FaShoppingCart
              alt={"carrito"}
              className="text-lg tablet:text-xl"
            />
           
              <span className="absolute bottom-4 left-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex justify-center items-center">
              
              </span>
            
          </div>
          <FaUser alt={"usuario"} className="text-lg tablet:text-xl" />
        </IconContext.Provider>
      </div>
    </header>
  );
}
