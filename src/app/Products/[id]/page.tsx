import ProductCard from "@/components/ProductCard";
import Thumbnail from "@/components/Thumbnail";
import ProductSelector from "@/components/ProductSelector";
import ProductReview from "@/components/ProductReview";
import { reviews } from "@/data/reviews";
import { getProductById, getThumbnailImage } from "@/utils";

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  
  const { id } = await params;
  
  const product = await getProductById(id);

  const images = await getThumbnailImage();

  const imagesArray = [product.image,...images]
  
  return (
    <section className="product-page">

      <hr  className="my-5"/>

      <section className="flex justify-around gap-8 mt-5">
        
        <Thumbnail images={imagesArray} />

        <div className="tablet:max-w-[500px] laptop:max-w-[600px]">
          
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
            showImage={false}
            showDescription={true}
            titleSize="lg"
          />

          <ProductSelector
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />

        </div>
      </section>

      <hr className="my-5 tablet:my-8 "/>

      <section className="mb-8">
        <h3 className="font-bold  text-lg"> All Reviews <span className="text-gray-500"> (410) </span> </h3>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-2 my-3 justify-items-center">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="w-80 laptop:w-[610px] border border-baseBg rounded-xl py-5 px-7"
            >
              <ProductReview
                name={item.name}
                review={item.review}
                date={item.date}
                star={item.star}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
