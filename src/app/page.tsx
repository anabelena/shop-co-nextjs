import Image from "next/image";

import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

import { getProductsCategory } from "@/utils";
import { IProduct } from "@/types/product";

export default async function Home() {

  const newArrivals = await getProductsCategory();

  console.log(newArrivals)

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

      <section className="max-w-[1440px] grid grid-cols-1 gap-8 mb-8">
        <h2 className="font-heading font-bold text-3xl  text-center tablet:text-4xl laptop:text-5xl tablet:my-10">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-2 gap-5 p-1 tablet:grid-cols-3 laptop:grid-cols-4 tablet:gap-10 tablet:p-4">
          {newArrivals.slice(0,4).map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
