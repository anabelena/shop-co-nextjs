import Button from "../Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-neutral-200  tablet:bg-hero tablet:bg-cover tablet:bg-no-repeat tablet:min-h-[660px] tablet:flex tablet:items-center ">
      <div className="px-8 py-4 flex flex-col gap-8 max-w-[75%] tablet:ml-[100px] ">
        {/* HERO INFO */}
        <div className="tablet:max-w-[500px] grid grid-cols-1 gap-4">
          {/* Title */}
        <h2 className="text-4xl leading-9 font-heading text-balance tablet:text-6xl tablet:leading-[64px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        {/* Description */}
        <p className="leading-5 text-neutral-700 text-pretty tablet:text-balance">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        {/* Button */}
        <Button type="black" text="Shop now!" />
        </div>
        

        
        {/* Adition Info */}
        <div className="grid grid-cols-1 justify-items-center items-center tablet:flex tablet:flex-row  tablet:gap-5 ">
          <div className="flex gap-5 ">
            <div>
              <span className="font-bold text-4xl"> 200 + </span>
              <p className="text-neutral-700"> International Brands</p>
            </div>
            <Image src="/assets/icons/line.png" width={1} height={1}  alt="linea" />
            <div>
              <span className="font-bold text-4xl">2,000 +</span>
              <p className="text-neutral-700">High-Quality Products</p>
            </div>
          </div>

          <div className="flex gap-5">
            <Image src="/assets/icons/line.png"  alt="linea" width={1} height={1} className="hidden tablet:block" />
            <div>
              <span className="font-bold text-4xl">50,000 +</span>
              <p className="text-neutral-700"> Happy Customers </p>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-hero-mobile bg-no-repeat bg-cover min-h-[445px]">
      
      </div>
    </section>
  );
}
