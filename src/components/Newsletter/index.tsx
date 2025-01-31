import Button from "../Button";
import { FaEnvelope } from "react-icons/fa";

export default function Newsletter() {
  return (
    // <section className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl py-10 px-20 bg-black tablet:w-[1200px] flex justify-between items-center ">
    <section className="mx-auto  py-5 px-20 bg-black  flex justify-between items-center ">
      <p className="font-heading text-4xl text-neutral-100 text-pretty">
        STAY UPTO DATE ABOUT OUR <br /> LATEST OFFERS
      </p>

      <div className="grid grid-cols-1 gap-4 w-[310px] tablet:w-[380px]">
        <div className="flex gap-3 items-center bg-slate-100 w-full h-12 rounded-[62px] px-5 py-3">
          <FaEnvelope color="gray" size="18px" />
          <input
            type="text"
            placeholder="Enter your email address"
            className="text-neutral-500 text-sm w-full px-2 py-2 "
          />
        </div>

        <div className="w-full h-12">
          <Button
            type="white"
            text="Subscribe to Newsletter"
            fullWidth={true}
            fullHeight={true}
          />
        </div>
      </div>
    </section>
  );
}
