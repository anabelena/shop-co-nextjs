import { getProductById, getThumbnailImage } from "@/utils";
import ProductCard from "@/components/ProductCard";
import Thumbnail from "@/components/Thumbnail";
import { colors } from "@/data/colors";
import { sizes } from "@/data/size";
import Button from "@/components/Button";

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProductById(id);
  const images = await getThumbnailImage();

  return (
    <section className="flex justify-center items-center gap-8">
      <Thumbnail images={images} />

      <div>
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

        <div>
          <h4 className="text-sm"> Select Colors </h4>

          <div className="">
            {colors.map((color) => (
              <Button
                key={color.name}
                type="rounded"
                color={color.hex}
                text={color.hex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
