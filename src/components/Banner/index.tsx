import { FaRegRectangleXmark } from "react-icons/fa6";

export default function Banner() {

    return (
      <section className="flex flex-row items-center justify-center relative bg-neutral-800 text-neutral-200 h-10">
        <p className="text-xs underline font-normal cursor-pointer tablet:text-sm tablet:font-bold hover:scale-110">
          Sign up and get 20% off to your first order. <span className="font-semibold"> Sign Up Now </span>
        </p>
        <div className="flex flex-row items-center justify-end absolute right-28">
          <FaRegRectangleXmark className="h-6 w-6 cursor-pointer hover:scale-110 "/>
        </div>
      </section>
    );
  }