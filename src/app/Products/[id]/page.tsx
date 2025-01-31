import { getProductById, getThumbnailImage } from "@/utils";

// import { ShoppingCartContext, useShoppingCart } from "@/context/cartContext";

import ProductCard from "@/components/ProductCard";
import Thumbnail from "@/components/Thumbnail";
import Button from "@/components/Button";
import QuantitySelector from "@/components/QuantitySelector";

import { colors } from "@/data/colors";
import { sizes } from "@/data/size";


type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  
  const { id } = await params;

  // const {addToCart} = useShoppingCart();

  const product = await getProductById(id);

  const images = await getThumbnailImage();

  const handleAddToCart = () => {
   
    const cartItem = {
        id:product.id,
        title:product.title,
        description:product.description,
        price:product.price,
        image:product.image,
        quantity:1,
    }

    // addToCart(cartItem);
    
  }

  return (
    <section className="flex justify-center items-center gap-8">
      <Thumbnail images={images} />

      <div className="product-detail">
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
          {/* COLORS */}
          <h4 className="text-sm"> Select Colors </h4>

          <div className="flex gap-2 my-4">
            {colors.map((color) => (
              <div key={color.name} className="w-6 h-6">
                <Button
                  key={color.name}
                  type="rounded"
                  color={color.hex}
                  fullWidth={true}
                  fullHeight={true}
                  text=""
                />
              </div>
            ))}
          </div>

          {/* SIZES */}
          <h4 className="text-sm"> Choose size </h4>

          <div className="flex gap-2 h-[35px] my-4">
            {sizes.map((size) => (
              <div key={size.name}>
                <Button
                  type="black"
                  text={size.description}
                  fullWidth={true}
                  fullHeight={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ADD TO CART */}
        <div className="flex gap-5 my-8">

          <QuantitySelector />

          <div className="w-[200px]">
            <Button
              type="transparent"
              text="Add to Cart"
              fullWidth={true}
              fullHeight={false}
              // onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
