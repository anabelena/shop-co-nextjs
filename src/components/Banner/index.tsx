import { FaRegRectangleXmark } from "react-icons/fa6";

export default function Banner() {
  return (
    <section className="mx-auto max-w-[1440px] bg-black text-white grid grid-cols-6 py-2 ">
      <p className="underline text-xs sm:text-sm text-center col-span-5 justify-self-center cursor-pointer">
        Sign up and get 20% off to your first order. Sign Up Now!
      </p>
      <FaRegRectangleXmark className="h-4 w-4 sm:h-5 sm:w-5 justify-self-center cursor-pointer" />
    </section>
  );
}
