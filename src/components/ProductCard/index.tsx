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
    <>
      <div className="grid grid-cols-1 gap-5 justify-items-center w-[180px] tablet:min-w-[300px] tablet:w-full">
        {showImage && (
          <div className="rounded-xl border-neutral400 border-2 cursor-pointer ">
            <Link href={`/products/${id}`}>
              <Image src={image} alt="Red T-shirt" width={295} height={298} />
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
            {/* <Image src='./assets/icons/star.png' alt="icono estrella"/> */}
            <p className="text-xs">
              {rating?.rate} <span className="text-neutral-500">/5</span>
            </p>
          </div>

          {/* Product Price */}
          <div className="flex items-center gap-4">
            <span className="font-bold ">{`$${price}`}</span>
            <span className="font-bold  line-through text-neutral600">
              {`$${priceDiscount}`}
            </span>
            <div className="text-red100 font-semibold w-[50px] text-center rounded-lg py-1 bg-red-200">
              {`-${Discount}`}
            </div>
          </div>
          {/* Product Description */}
          {showDescription && (
            <p className="text-neutral700 text-justify my-2">
              {description?.slice(0, 100)}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
