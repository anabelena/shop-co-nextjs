import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      {/* LOGOS SECTION */}
      <section className="bg-neutral-800 grid grid-cols-3 justify-items-center items-center tablet:grid-cols-5 tablet:h-20">
        <div className="relative w-28 tablet:w-36 h-20">
          <Image
            src="/assets/images/versace.svg"
            layout="fill"
            objectFit="contain"
            alt="versace"
          />
        </div>
        <div className="relative w-28 h-7 tablet:w-36 tablet:h-10">
          <Image
            src="/assets/images/zara.svg"
            layout="fill"
            objectFit="contain"
            alt="zara"
          />
        </div>
        <div className="relative w-28 tablet:w-36 h-20">
          <Image
            src="/assets/images/gucci.svg"
            layout="fill"
            objectFit="contain"
            alt="gucci"
          />
        </div>
        <div className="relative w-28 tablet:w-36 h-20">
          <Image
            src="/assets/images/prada.svg"
            layout="fill"
            objectFit="contain"
            alt="prada"
          />
        </div>
        <div className="relative w-28 tablet:w-36 h-20">
          <Image
            src="/assets/images/calvin.svg"
            layout="fill"
            objectFit="contain"
            alt="calvin"
          />
        </div>
      </section>
    </>
  );
}
