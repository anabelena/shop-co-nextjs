import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";
import RatingStars from "../RatingStars";

interface ProductCardProps extends IProduct {
  showImage?: boolean;
  showDescription?: boolean;
  titleSize?: "sm" | "md" | "lg";
}

export default function ProductCard({
  id,
  title,
  price,
  description,
  image,
  rating,
  showImage = true,
  showDescription = false,
  titleSize = "md",
}: ProductCardProps) {
  const Discount: number = 20;
  const priceDiscount: number = price - price * (Discount / 100);

  let titleClass = "text-[20px]";

  let titleSlice = 15;

  if (titleSize === "sm") {
    titleClass = "text-[24px]"; // Tamaño pequeño
  } else if (titleSize === "lg") {
    titleClass = "text-[40px] "; // Tamaño grande
    titleSlice = 25;
  }

  return (
    <div className="grid grid-cols-1 justify-items-center w-[150px] tablet:w-full">
      {showImage && (
        <div className="rounded-xl border-neutral-200 border-2 cursor-pointer">
          <Link href={`/products/${id}`} key={id}>
            <Image
              className="w-[150px] h-[200px] hover:shadow-xl mx-auto tablet:w-[200px] tablet:h-[200px]"
              src={image}
              alt={title.slice(0, 11)} //10 characters
              width={295}
              height={298}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      )}

      {/* Product Information */}
      <div className="grid grid-cols-1 gap-2">
        {/* Product Title */}
        <h3 className={`font-bold ${titleClass}`}>
          <Link href={`products/${id}`}> {title.slice(0, titleSlice)} </Link>
        </h3>
        {/* Product Rating */}
        <div className="flex items-center gap-1">
          <RatingStars rating={rating?.rate} />
          <p className="text-xs tablet:text-sm">
            {rating?.rate} <span className="text-neutral-500">/5</span>
          </p>
        </div>

        {/* Product Price */}
        <div className="flex items-center gap-4 text-sm tablet:text-lg">
          <span className="font-bold ">{`$${price}`}</span>
          <span className="font-bold  line-through text-neutral-600">
            {`$${priceDiscount}`}
          </span>
          <div className="text-red-400 font-semibold text-center rounded-lg px-3 bg-red-200">
            {` ${Discount} %`}
          </div>
        </div>
        {/* Product Description */}
        {showDescription && (
          <p className="text-neutral-700 text-justify my-2 text-balance">
            {description?.slice(0, 110)}
          </p>
        )}
      </div>
    </div>
  );
}
