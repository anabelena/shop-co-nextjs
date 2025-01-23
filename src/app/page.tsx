
import Hero from "@/components/Hero";
import Image from "next/image";

import ProductCard from "@/components/ProductCard";

export default function Home() {

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
            layout="responsive"
            alt="versace"
          />
        </div>
        <div className="w-[80px] tablet:w-[90px]">
          <Image
            src="/assets/images/zara.svg"
            width={90}
            height={33}
            layout="responsive"
            alt="zara"
          />
        </div>
        <div className=" w-[110px] tablet:w-[150px]">
          <Image
            src="/assets/images/gucci.svg"
            width={156}
            height={36}
            layout="responsive"
            alt="gucci"
          />
        </div>
        <div className="w-[110px] tablet:w-[150px]">
          <Image
            src="/assets/images/prada.svg"
            width={194}
            height={32}
            layout="responsive"
            alt="prada"
          />
        </div>
        <div className="w-[110px] tablet:w-[150px]">
          <Image
            src="/assets/images/calvin.svg"
            width={200}
            height={33}
            layout="responsive"
            alt="calvin"
          />
        </div>
      </section>

      <section>
        <h2 className="font-heading font-bold text-3xl text-center tablet:text-4xl laptop:text-5xl tablet:my-10">
          NEW ARRIVALS
        </h2>
        <ProductCard/>
      </section>
    </>
  );
}
