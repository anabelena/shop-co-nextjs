import RatingStars from "../RatingStars";
import { CircleCheckBig } from "lucide-react";

interface ProductReviewProps {
  name: string;
  review: string;
  date: string;
  star: number;
}

export default function ProductReview({
  name,
  review,
  date,
  star,
}: ProductReviewProps) {
  return (
    <div className="grid grid-cols-1 gap-1">
      <RatingStars rating={star} />
      <div className="flex gap-2 items-center">
        <p className="text-lg font-bold">{name}</p>
        <CircleCheckBig color="green" size={20}  />
      </div>
      <p className="text-lg">{review}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}
