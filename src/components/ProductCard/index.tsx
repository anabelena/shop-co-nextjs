import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, title, price, description }) {
  const Discount = 20;
  const priceDiscount = price - price * (Discount / 100);

  return (
    <>
      <div>
        <div className="w-[295px] h-[298px]">
            {/* PRODUCT TITLE */}
          <Link href={`/products/${id}`}>
            <h4 className="text-xl font-bold"> {title} </h4>
          </Link>
            {/* PRODUCT IMAGE */}
          <Image
            src="/assets/images/tshirt-red.svg"
            alt="Red T-shirt"
            width={295}
            height={298}
            // fill
          />

          {/* PRODUCT PRICE */}
          <div className="flex items-center gap-4">
            <span className="font-bold ">{`$${price}`}</span>
            <span className="font-bold  line-through text-neutral-600">
              {`$${priceDiscount}`}
            </span>
            <div className="text-red100 font-semibold w-[50px] text-center rounded-lg py-1 bg-red200">
              {`-${Discount}`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
