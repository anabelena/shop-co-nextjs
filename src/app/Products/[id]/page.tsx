import Thumbnail from "@/components/Thumbnail";
import ProductSelector from "@/components/ProductSelector";
import ProductReview from "@/components/ProductReview";
import { getProductsById } from "@/utils";
import ProductCTA from "@/components/ProductFilter";
import { IReview } from "@/types/review";
import { reviews } from "@/data/reviews";

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProductsById(id);
  const price = product.price;
  const discount = product.discountPercentage;
  const hasDiscount = product.discountPercentage > 0;
  const newPrice = price - price * (discount / 100);
 
  const newReview = [...product.reviews,...reviews]

  return (
    <section className="product-page">
      <hr className="my-5" />

      <section className="grid grid-cols-1 gap-12 sm:flex justify-center  ">
        <Thumbnail images={product.images} />

        <div className="w-full sm:max-w-[450px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold "> {product.title} </h2>
            <h3 className="text-2xl flex gap-7 items-baseline ">
              {product.brand}
              <span className="text-xl text-neutral-400">
                {`SKU: ${product.sku}`}
              </span>
            </h3>
            <p className="text-balance text-lg"> {product.description}</p>
            <div className="text-xl sm:text-3xl font-bold flex gap-7 ">
              <span>{`$${newPrice.toFixed(2)}`}</span>
              {hasDiscount && (
                <span className="line-through text-neutral-400 ">
                  {" "}
                  {`$${price}`}{" "}
                </span>
              )}
              <span className="text-red-600 text-2xl border rounded-xl px-2 bg-red-200">{`-${discount}%`}</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-4">
            <h4 className="text-xl"> Dimensions </h4>
            <div>
              <ul className="list-disc pl-7  flex flex-col gap-2 ">
                <li>{`Width: ${product.dimensions.width}`}</li>
                <li>{`Height: ${product.dimensions.height}`}</li>
                <li>{`Depth: ${product.dimensions.depth}`}</li>
              </ul>
            </div>
          </div>

          <ProductSelector
            id={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        </div>
      </section>

      <hr className="my-5 md:my-8 " />

      <section className="mb-8">
        <div className="flex justify-around items-center">
          <h3 className="font-bold text-lg">
            All Reviews
            <span className="text-gray-400">
              {" "}
              {`( ${product.reviews.length} )`}{" "}
            </span>
          </h3>
          <ProductCTA />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 my-3 justify-items-center">
          {newReview.map((item: IReview,index:number) => (
            <div
               key={index}
              className="w-80 lg:w-[610px] border border-base rounded-xl py-5 px-7"
            >
              <ProductReview {...item} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
