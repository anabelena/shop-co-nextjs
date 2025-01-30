import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";

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

  const arrayStars: number[] = [];

  if (rating !== undefined) {
    const stars = Math.floor(rating?.rate);
    for (let i = 0; i < stars; i++) {
      arrayStars.push(i);
    }
  }

  let titleClass = "text-[20px]";

  let titleSlice = 15;

  if (titleSize === "sm") {
    titleClass = "text-[24px]"; // Tamaño pequeño
  } else if (titleSize === "lg") {
    titleClass = "text-[40px] "; // Tamaño grande
    titleSlice = 25;
  }

  return (
    <div className="grid grid-cols-1 gap-5 justify-items-center w-[150px] tablet:w-full">
      {showImage && (
        <div className="rounded-xl border-neutral-200 border-2 cursor-pointer">
          <Link href={`/products/${id}`} key={id}>
            <Image
              className="w-[150px] h-[200px] hover:shadow-xl mx-auto tablet:w-[300px] tablet:h-[300px]"
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
      <div className="grid grid-cols-1 gap-1">
        {/* Product Title */}
        <h3 className={`font-bold ${titleClass}`}>
          <Link href={`products/${id}`}> {title.slice(0,titleSlice)} </Link>
        </h3>
        {/* Product Rating */}
        <div className="flex items-center gap-1">
          {arrayStars.map((item) => (
            <Image
              key={item}
              src="/assets/icons/star.png"
              alt="Estrella"
              width={10}
              height={10}
            />
          ))}

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
          <div className="text-red100 font-semibold w-[50px] text-center rounded-lg py-1 bg-red-200">
            {`-${Discount}`}
          </div>
        </div>
        {/* Product Description */}
        {showDescription && (
          <p className="text-neutral-700 text-justify my-2">
            {description?.slice(0, 100)}
          </p>
        )}
      </div>
    </div>
  );
}
