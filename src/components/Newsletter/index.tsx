import Button from "../Button";
import { FaEnvelope } from "react-icons/fa";

export default function Newsletter() {
  return (
    <>
      <div className="max-w-[350px] laptop:max-w-[1240px] flex justify-center items-center gap-32 rounded-xl py-10 bg-black">
        
        <p className="font-heading text-4xl text-neutral-100 whitespace-pre-line  text-justify">
          STAY UPTO DATE ABOUT OUR <br /> LATEST OFFERS
        </p>

        <div className="grid grid-cols-1 gap-4 tablet:w-[350px]">

          <div className="flex gap-3 items-center bg-slate-100 w-full h-12 rounded-[62px] px-5 py-3">
            
            <FaEnvelope color="gray" size="18px" />

            <input
              type="text"
              placeholder="Enter your email address"
              className="text-neutral-500 text-sm w-full "
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
      </div>
    </>
  );
}
