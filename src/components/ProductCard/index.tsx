import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";
import RatingStars from "../RatingStars";

export default function ProductCard({
  id,
  title,
  price,
  discountPercentage,
  rating,
  thumbnail,
}: IProduct) {

 const hasDiscount = discountPercentage > 0
 const newPrice = price - price * (discountPercentage/100)

  return (
    <div className="grid grid-cols-1 gap-y-4  md:w-full">
      {/* Product Image */}
      <div className="rounded-xl border-neutral-200 border-2 cursor-pointer hover:shadow-xl">
        <Link href={`/products/${id}`} key={id}>
          <Image className="mx-auto"
            src={thumbnail}
            alt={title}
            width={295}
            height={295}
          />
        </Link>
      </div>

      {/* Product Information */}
      <div className="grid grid-cols-1 pl-5 gap-y-2">

        {/* Product Title */}
        <h3 className="text-lg md:text-xl font-bold">
          <Link href={`products/${id}`}> {title} </Link>
        </h3>

        {/* Product Rating */}
        <div className="flex items-center gap-1">
          <RatingStars rating={rating} />
          <p className="text-xs md:text-sm">
            {rating} <span className="text-neutral-500">/ 5</span>
          </p>
        </div>

        {/* Product Price */}
        <div className="flex items-center font-bold text-xs md:text-lg gap-1 md:gap-3">
          <span className=" ">{`$${newPrice.toFixed(2)}`}</span>
          {hasDiscount && (
                <span className="line-through text-neutral-400 ">
                  {`$${price}`}
                </span>
              )}
          <div className="text-red-500 text-center rounded-md px-1 text-xs py-1 font-semibold bg-red-200">
            {`${discountPercentage}%`}
          </div>
        </div>
      </div>
    </div>
  );
}
