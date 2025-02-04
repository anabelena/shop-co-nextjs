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
  const { addToCart } = useShoppingCart();

  const handleColor = (color: SetStateAction<string | null>) => {
    setSelectedColor(color);
  };

  const handleSize = (size: SetStateAction<string | null>) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id,
      title,
      price,
      image,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <>
      <section>
        <h3> Select a Color </h3>
        <div className="flex gap-2 my-4">
          {colorsData.map((colorItem) => (
            <div key={colorItem.name} className="relative w-6 h-6">
              <Button
                type="rounded"
                color={colorItem.hex}
                fullWidth={true}
                fullHeight={true}
                text=""
                onClick={() => handleColor(colorItem.hex)}
              />
              {selectedColor === colorItem.hex && (
                <Check className="absolute inset-0 m-auto text-white w-4 h-4" />
              )}
            </div>
          ))}
        </div>
        <div>{selectedColor}</div>
      </section>

      <hr className="mb-2" />

      <section>
        <h3> Select a size </h3>
        <div className="flex gap-2 h-[35px] my-4">
          {sizeData.map((size) => (
            <div key={size.name}>
              <Button
                type={selectedSize === size.name ? "black" : "neutral"}
                text={size.description}
                fullWidth={true}
                fullHeight={true}
                onClick={() => handleSize(size.name)}
              />
            </div>
          ))}
        </div>
        <div>{selectedSize}</div>
      </section>

      <div className="flex gap-5 my-8">
        <QuantitySelector />

        <div className="w-[200px]">
          <Button
            type="transparent"
            text="Add to Cart"
            fullWidth={true}
            fullHeight={false}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
}
