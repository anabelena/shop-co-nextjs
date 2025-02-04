import ProductCard from "@/components/ProductCard";
import Thumbnail from "@/components/Thumbnail";
import ProductSelector from "@/components/ProductSelector";

import { getProductById, getThumbnailImage } from "@/utils";

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {

  const { id } = await params;
  const product = await getProductById(id);
  const images = await getThumbnailImage();

  return (
    <section className="flex justify-center items-center gap-8">

      <Thumbnail 
        images={images} />

      <div className="">

        <ProductCard
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
          rating={product.rating}
          showImage={false}
          showDescription={true}
        />

        <ProductSelector
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      </div>

    </section>
  );
}
