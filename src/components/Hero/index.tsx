import Button from "../Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-responsiveBg tablet:bg-baseBg tablet:flex tablet:items-center laptop:bg-hero tablet:bg-no-repeat tablet:bg-cover desktop:bg-cover">
      <div className="px-10 py-10 desktop:py-20 flex flex-col gap-8  ">
        {/* HERO INFO */}
        <div className=" grid grid-cols-1 gap-5 laptop:w-[600px]">
          {/* Title */}
          <h2 className="font-bold text-4xl leading-10 font-heading tablet:text-6xl desktop:text-7xl tablet:leading-[64px]">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h2>
          {/* Description */}
          <p className="leading-5 text-neutral-700 text-sm tablet:text-lg tablet:text-balance">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          {/* Button */}
          <Button 
          type="black" 
          text="Shop now!"
          fullHeight={false}
          fullWidth={false} />
        </div>

        {/* Adition Info */}
        <div className="grid grid-cols-1 justify-items-center items-center tablet:flex tablet:flex-row  tablet:gap-5 ">
          <div className="flex gap-5 ">
            <div>
              <span className="font-bold text-xl tablet:text-4xl"> 200 + </span>
              <p className="text-neutral-700 text-sm tablet:text-lg"> International Brands</p>
            </div>
            <Image
              src="/assets/icons/line.png"
              width={1}
              height={1}
              alt="linea"
              className=""
            />
            <div>
              <span className="font-bold text-xl tablet:text-4xl">2,000 +</span>
              <p className="text-neutral-700 text-sm tablet:text-lg">High-Quality Products</p>
            </div>
          </div>

          <div className="flex gap-5">
            <Image
              src="/assets/icons/line.png"
              alt="linea"
              width={1}
              height={1}
              className="hidden tablet:block"
            />
            <div>
              <span className="font-bold text-xl tablet:text-4xl">50,000 +</span>
              <p className="text-neutral-700 text-sm tablet:text-lg"> Happy Customers </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-hero-mobile bg-no-repeat bg-cover min-h-[440px]">
        
      </div>
    </section>
  );
}
