import Image from "next/image";

import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

import { getProductsCategory } from "@/utils";
import { IProduct } from "@/types/product";

export default async function Home() {
  const newArrivals = await getProductsCategory();

  return (
    <>
      <Hero />
      {/* LOGOS SECTION */}
      <section className="bg-neutral-800 flex flex-wrap items-center py-5 justify-around gap-5 ">
        <div className="w-[110px] tablet:w-[150px]">
          <Image
            src="/assets/images/versace.svg"
            width={166}
            height={33}
            alt="versace"
          />
        </div>
        <div className="w-[80px] tablet:w-[90px]">
          <Image
            src="/assets/images/zara.svg"
            width={90}
            height={33}
            alt="zara"
          />
        </div>
        <div className=" w-[110px] tablet:w-[150px]">
          <Image
            src="/assets/images/gucci.svg"
            width={156}
            height={36}
            alt="gucci"
          />
        </div>
        <div className="w-[110px] tablet:w-[150px]">
          <Image
            src="/assets/images/prada.svg"
            width={194}
            height={32}
            alt="prada"
          />
        </div>
        <div className="w-[110px] tablet:w-[150px]">
          <Image
            src="/assets/images/calvin.svg"
            width={200}
            height={33}
            alt="calvin"
          />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="grid grid-cols-1 gap-8 ">
        <h2 className="font-heading font-bold text-3xl  text-center tablet:text-4xl laptop:text-5xl tablet:my-10">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-2 gap-5 p-1 tablet:grid-cols-3 laptop:grid-cols-4 tablet:gap-10 tablet:p-4">
          {newArrivals.slice(0, 4).map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </section>

      <div className="my-10 flex justify-center items-center">
        <Image
          src={"assets/images/line.svg"}
          alt="line"
          width={1240}
          height={1}
        ></Image>
      </div>

      {/* TOP SELLING */}
      <section className="grid grid-cols-1 gap-8 ">
        <h2 className="font-heading font-bold text-3xl  text-center tablet:text-4xl laptop:text-5xl tablet:my-10">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-2 gap-5 p-1 tablet:grid-cols-3 laptop:grid-cols-4 tablet:gap-10 tablet:p-4">
          {newArrivals.slice(0, 4).map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </section>

      {/* BROWSE BY DRESS STYLE */}
      <section className="bg-stone-200 border-1 rounded-3xl py-5">

        <h2 className="font-heading font-bold text-3xl text-center tablet:text-4xl laptop:text-5xl my-8">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 justify-items-center tablet:flex tablet:justify-center tablet:items-center gap-5 mb-5">
          <div className="relative w-full h-28 tablet:w-[407px] tablet:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/casual-style.png"
              alt="Casual Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Casual </p>
          </div>

          <div className="relative w-full h-28 tablet:w-[684px] tablet:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/formal-style.png"
              alt="Formal Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Formal </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center tablet:flex tablet:justify-center tablet:items-center gap-6 mb-5">
          <div className="relative w-full h-28 tablet:w-[684px] tablet:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/party-style.png"
              alt="Party Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Party </p>
          </div>

          <div className="relative w-full h-28 tablet:w-[407px] tablet:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/gym-style.png"
              alt="Gym Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Gym </p>
          </div>
        </div>
      </section>
    </>
  );
}
