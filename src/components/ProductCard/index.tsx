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
  description,
  category,
  price,
  discountPercentage,
  rating,
  brand,
  sku,
  warrantyInformation,
  shippingInformation,
  thumbnail,
  tags,
  reviews,
  showImage = true,
  showDescription = false,
  titleSize = "md",
}: ProductCardProps) {
  let newPrice = 0;
  if (discountPercentage) {
    newPrice = price - price * (discountPercentage / 100);
  }

  let titleClass = "text-[20px]";

  if (titleSize === "sm") {
    titleClass = "text-[24px]"; // Tamaño pequeño
  } else if (titleSize === "lg") {
    titleClass = "text-[40px] "; // Tamaño grande
  }

  return (
    <div className="grid grid-cols-1 justify-items-center w-[150px] tablet:w-full">
      {showImage && (
        <div className="rounded-xl border-neutral-200 border-2 cursor-pointer">
          <Link href={`/products/${id}`} key={id}>
            <Image
              className="w-[150px] h-[200px] hover:shadow-xl mx-auto tablet:w-[200px] tablet:h-[200px]"
              src={thumbnail}
              alt={title}
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
          <Link href={`products/${id}`}> {title} </Link>
        </h3>
        <h2 className="font-bold"> {brand} </h2>
        <h2 className="font-bold"> {category} </h2>
        <h2 className="font-bold"> {sku}</h2>
        {/* Product Rating */}
        <div className="flex items-center gap-1">
          <RatingStars rating={rating} />
          <p className="text-xs tablet:text-sm">
            {rating} <span className="text-neutral-500">/5</span>
          </p>
        </div>

        <div>
          <span> </span>
        </div>

        {/* Product Price */}
        <div className="flex items-center gap-4 text-sm tablet:text-lg">
          <span className="font-bold ">{`$${price}`}</span>
          {newPrice && (
            <span className="font-bold  line-through text-neutral-600">
              {`$${newPrice}`}
            </span>
          )}

          <div className="text-red-400 font-semibold text-center rounded-lg px-3 bg-red-200">
            {` ${discountPercentage} %`}
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
