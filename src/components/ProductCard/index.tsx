import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/product";

interface ProductCardProps extends IProduct {
  showImage?: boolean;
  showDescription?: boolean;
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
}: ProductCardProps) {
  const Discount = 20;
  const priceDiscount = price - price * (Discount / 100);

  return (
      <div className="grid grid-cols-1 gap-5 justify-items-center w-[180px] tablet:w-full">
        {showImage && (
          <div className="rounded-xl border-neutral-200 border-2 cursor-pointer">
            <Link href={`/products/${id}`}>
              <Image className="w-[172px] h-[174px] hover:shadow-xl mx-auto tablet:w-[300px] tablet:h-[300px]"
                src={image}
                alt={image.slice(0, 11)} //10 characters
                width={295}
                height={298}
                style={{objectFit: "contain"}}
               />
            </Link>
          </div>
        )}

        {/* Product Information */}
        <div className="grid grid-cols-1 gap-1">
          {/* Product Title */}
          <h3 className="font-bold">
            <Link href={`products/${id}`}> {title.slice(0, 25)} </Link>
          </h3>
          {/* Product Rating */}
          <div className="flex items-center gap-2">

            <Image
              src="/assets/icons/star.png"
              alt="icono estrella"
              width={10}
              height={10}
            />

            <p className="text-xs">
              {rating?.rate} <span className="text-neutral-500">/5</span>
            </p>
          </div>

          {/* Product Price */}
          <div className="flex items-center gap-4">
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
