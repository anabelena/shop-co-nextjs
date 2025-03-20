import Button from "../Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-[1440px] bg-base bg-no-repeat md:bg-hero-mobile md:bg-cover md:bg-right-top md:flex items-center lg:bg-hero lg:bg-cover">
      <div className="px-10 py-5 xl:py-20 flex flex-col gap-8 max-w-[600px]  ">
        {/* HERO INFO */}
        <div className="grid grid-cols-1 gap-5 ">
          {/* Title */}
          <h2 className="font-bold leading-[45px] uppercase text-4xl font-heading md:text-6xl xl:text-7xl md:leading-[70px]">
            Find Products
            <br />
            That Match 
            <br />
            Your Style
          </h2>
          {/* Description */}
          <p className="leading-6 text-neutral-800 text-lg md:text-xl">
            Browse through our wide selection of products,from clothing to accessories, 
            <br />
            designed to highlight your unique style.
          </p>

          <div className="w-full sm:w-[300px]">
            {/* Call to Action -> SHOP NOW! */}
            <Link href={"/products"}>
              <Button
                type="black"
                text="Shop now!"
                fullHeight={false}
                fullWidth={true}
              />
            </Link>
          </div>
        </div>

        {/* Adition Info */}
        <div className="grid grid-cols-2 gap-2 justify-items-center sm:flex">
          <div className="text-center">
            <span className="font-bold text-xl md:text-4xl"> 200+ </span>
            <p className="text-neutral-700 text-sm md:text-lg">
              International Brands
            </p>
          </div>

          <div className="text-center">
            <span className="font-bold text-xl md:text-4xl"> 2,000+</span>
            <p className="text-neutral-700 text-sm md:text-lg">
              High-Quality Products
            </p>
          </div>

          <div className="col-span-2 place-self-center">
            <div className="text-center">
              <span className="font-bold text-xl md:text-4xl"> 50,000+</span>
              <p className="text-neutral-700 text-sm md:text-lg">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-hero-mobile bg-no-repeat bg-cover min-h-[450px]"></div>

    </section>
  );
}
