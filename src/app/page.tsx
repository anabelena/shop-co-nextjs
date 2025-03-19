"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

// import { getProductsCategory } from "@/utils";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { getLimitProducts,getNewArrivals } from "@/utils";

export default function Home() {

  const { data:products, isLoading:loadingProducts, error:errorProducts } = useQuery({
    queryKey: ["products"],
    queryFn: getLimitProducts,
  });
  
  const { data: newArrivals, isLoading: loadingNewArrivals, error: errorNewArrivals } = useQuery({
    queryKey: ["new"],
    queryFn: getNewArrivals,
  });
  
  const isLoading = loadingProducts || loadingNewArrivals;
  const error = errorProducts || errorNewArrivals;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>Error fetching products</span>
      </div>
    );
  }

  return (
    <>
      <Hero />
      {/* LOGOS SECTION */}
      <section className="bg-neutral-800 flex flex-wrap items-center py-5 justify-around gap-5 ">
        <div className="w-[110px] md:w-[150px]">
          <Image
            src="/assets/images/versace.svg"
            width={166}
            height={33}
            alt="versace"
          />
        </div>
        <div className="w-[80px] md:w-[90px]">
          <Image
            src="/assets/images/zara.svg"
            width={90}
            height={33}
            alt="zara"
          />
        </div>
        <div className=" w-[110px] md:w-[150px]">
          <Image
            src="/assets/images/gucci.svg"
            width={156}
            height={32}
            alt="gucci"
          />
        </div>
        <div className="w-[110px] md:w-[150px]">
          <Image
            src="/assets/images/prada.svg"
            width={194}
            height={32}
            alt="prada"
          />
        </div>
        <div className="w-[110px] md:w-[150px]">
          <Image
            src="/assets/images/calvin.svg"
            width={200}
            height={33}
            alt="calvin"
          />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="">
        <h2 className="font-heading font-bold text-3xl text-center md:text-5xl my-10">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-2 gap-5 p-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:p-4">
          {newArrivals.map((item: IProduct) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* TOP SELLING */}
      <section className=" ">
        <h2 className="font-heading font-bold text-3xl text-center md:text-5xl my-10 ">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-2 gap-5 p-1 md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:p-4">
          {products.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </section>

      {/* BROWSE BY DRESS STYLE */}
      {/* <section className="bg-stone-200 border-1 rounded-3xl py-5">

        <h2 className="font-heading font-bold text-3xl text-center md:text-4xl lg:text-5xl my-8">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 justify-items-center md:flex md:justify-center md:items-center gap-5 mb-5">
          <div className="relative w-full h-28 md:w-[407px] md:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/casual-style.png"
              alt="Casual Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Casual </p>
          </div>

          <div className="relative w-full h-28 md:w-[684px] md:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/formal-style.png"
              alt="Formal Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Formal </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center md:flex md:justify-center md:items-center gap-6 mb-5">
          <div className="relative w-full h-28 md:w-[684px] md:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/party-style.png"
              alt="Party Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Party </p>
          </div>

          <div className="relative w-full h-28 md:w-[407px] md:h-[289px]">
            <Image
              className="rounded-md object-cover"
              src="/assets/images/gym-style.png"
              alt="Gym Style"
              fill
            />
            <p className="absolute top-6 left-9 font-bold text-4xl"> Gym </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
