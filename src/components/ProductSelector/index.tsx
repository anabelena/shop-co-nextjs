"use client";

import { SetStateAction, useState } from "react";
import { useShoppingCart } from "@/Hooks/useShoppingCart";
import { colorsData } from "@/data/colors";
import { sizeData } from "@/data/size";
import { Check } from "lucide-react";
import { IProduct } from "@/types/product";

import QuantitySelector from "../QuantitySelector";
import Button from "../Button";

export default function ProductSelector({ id, title, price, image }: IProduct) {
  
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const [quantity, setQuantity] = useState<number>(1);
  
  const { addToCart } = useShoppingCart();

  const handleColor = (color: SetStateAction<string | null>) => {
    setSelectedColor(color);
  };

  const handleSize = (size: SetStateAction<string | null>) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
      if (quantity<=9){
          setQuantity(quantity + 1)
      }
  }

  const handleDecrement = () => {
     if (quantity > 1){
        setQuantity(quantity - 1)
     }
  }
  
  const handleAddToCart = () => {
    const cartItem = {
      id,
      title,
      price,
      image,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };
    addToCart(cartItem);
  };

  return (
    <section>
      <hr className="my-2" />

      <section className="color">
        <h3> Select Colors </h3>
        <div className="flex gap-2 my-4">
          {colorsData.map((colorItem) => (
            <div key={colorItem.name} className="relative w-6 h-6">
              <Button
                type="rounded"
                color={colorItem.hex}
                fullWidth={true}
                fullHeight={true}
                text=""
                onClick={() => handleColor(colorItem.name)}
              />
              {selectedColor === colorItem.hex && (
                <Check className="absolute inset-0 m-auto text-white w-4 h-4" />
              )}
            </div>
          ))}
        </div>
        {selectedColor ? (
          <div className="text-xs text-gray-500">{`Color ${selectedColor} was selected`}</div>
        ) : (
          <div className="invisible text-xs "> &nbsp; </div>
        )}
      </section>

      <hr className="my-2" />

      <section className="size">
        <h3 className=" text-md"> Choose Size </h3>
        <div className="flex gap-1 tablet:gap-4 h-[25px] tablet:h-[35px] my-4">
          {sizeData.map((size) => (
            <div key={size.name}>
              <Button
                type={selectedSize === size.name ? "black" : "neutral"}
                text={size.name}
                fullWidth={true}
                fullHeight={true}
                onClick={() => handleSize(size.name)}
              />
            </div>
          ))}
        </div>
        {selectedSize ? (
          <div className="text-xs text-gray-500">{`Size ${selectedSize} was selected`}</div>
        ) : (
          <div className="invisible text-xs "> &nbsp; </div>
        )}
      </section>

      <hr className="my-2" />

      <section className="flex gap-7 mt-5">
        <QuantitySelector 
        quantity={quantity}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
         />
        <div className="w-full">
          <Button
            type="neutral"
            text="Add to Cart"
            fullWidth={true}
            fullHeight={false}
            onClick={handleAddToCart}
          />
        </div>
      </section>
    </section>
  );
}
