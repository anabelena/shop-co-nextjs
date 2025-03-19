import Button from "../Button";

interface QuantitySelectorProps {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}
export default function QuantitySelector({
  quantity,
  handleIncrement,
  handleDecrement,
}: QuantitySelectorProps) {
  return (
    <div className="flex justify-center items-center w-[150px] gap-2 bg-base rounded-full px-2 py-2">
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
