import Button from "../Button"

interface QuantitySelectorProps {
  quantity:number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantitySelector({quantity,setQuantity}:QuantitySelectorProps) {
  
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity <= 9 ? prevQuantity + 1 : quantity)
  }

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? quantity - 1 : 1))
  }

  return (
    
    <div className="flex justify-center items-center w-[130px] gap-2 bg-baseBg rounded-full px-2 py-2">
      
      <Button
        type="neutral"
        text="-"
        fullWidth={true}
        fullHeight={true}
        onClick={handleDecrement}
      />

      <span>{quantity}</span>

      <Button
        type="neutral"
        text="+"
        fullWidth={true}
        fullHeight={true}
        onClick={handleIncrement}
      />
      
    </div>
  );
}
