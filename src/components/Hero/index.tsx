import Button from "../Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-[1440px] bg-responsiveBg md:bg-baseBg md:flex md:items-center lg:bg-hero md:bg-no-repeat md:bg-cover xl:bg-cover">
      <div className="px-10 py-10 xl:py-20 flex flex-col gap-8  ">
        {/* HERO INFO */}
        <div className=" grid grid-cols-1 gap-5 lg:w-[600px]">
          {/* Title */}
          <h2 className="font-bold text-4xl leading-10 font-heading md:text-6xl xl:text-7xl md:leading-[64px]">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h2>
          {/* Description */}
          <p className="leading-5 text-neutral-700 text-sm md:text-lg md:text-balance">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          {/* Call to Action -> SHOP NOW! */}
          <Link href={"/products"}>
            <Button
              type="black"
              text="Shop now!"
              fullHeight={false}
              fullWidth={false}
            />
          </Link>
        </div>

        {/* Adition Info */}
        <div className="grid grid-cols-1 justify-items-center items-center md:flex md:flex-row  md:gap-5 ">
          <div className="flex gap-5 ">
            <div>
              <span className="font-bold text-xl md:text-4xl"> 200 + </span>
              <p className="text-neutral-700 text-sm md:text-lg">
                {" "}
                International Brands
              </p>
            </div>

            <div>
              <span className="font-bold text-xl md:text-4xl">2,000 +</span>
              <p className="text-neutral-700 text-sm md:text-lg">
                High-Quality Products
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <span className="font-bold text-xl md:text-4xl">50,000 +</span>
              <p className="text-neutral-700 text-sm md:text-lg">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-hero-mobile bg-no-repeat bg-cover min-h-[440px]"></div>
    </section>
  );
}
