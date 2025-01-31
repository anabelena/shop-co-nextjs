"use client";

import { useState } from "react";
import Button from "../Button";

export default function QuantitySelector() {

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <div className="flex justify-center items-center w-[130px] gap-2 bg-baseBg rounded-full px-2 py-2">
      
      <Button
        type="transparent"
        text="-"
        fullWidth={true}
        fullHeight={true}
        onClick={handleDecrement}
      />

      <span>{quantity}</span>

      <Button
        type="transparent"
        text="+"
        fullWidth={true}
        fullHeight={true}
        onClick={handleIncrement}
      />
    </div>
  );
}
