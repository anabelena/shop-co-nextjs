"use client";

import { useState } from "react";
import { useShoppingCart } from "@/Hooks/useShoppingCart";
import { IProduct } from "@/types/product";
import QuantitySelector from "../QuantitySelector";
import Button from "../Button";

export default function ProductSelector({ id, title, price,thumbnail }: IProduct) {
  
  const [quantity, setQuantity] = useState<number>(1);

  const { addToCart } = useShoppingCart();

  const handleIncrement = () => {
    if (quantity <= 9) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id,
      title,
      price,
      quantity,
      thumbnail,
    };
    addToCart(cartItem);
  };

  return (
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
  );
}
