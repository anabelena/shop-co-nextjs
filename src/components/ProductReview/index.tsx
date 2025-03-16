import { IReview } from "@/types/review";
import RatingStars from "../RatingStars";
import { CircleCheckBig } from "lucide-react";

export default function ProductReview({
  reviewerName,
  reviewerEmail,
  comment,
  date,
  rating,
}: IReview) {
  return (
    <div className="grid grid-cols-1 gap-y-2">
      <div className="flex gap-x-2 items-center">
        <p className="text-lg font-bold">{reviewerName}</p>
        <CircleCheckBig color="green" size={20} />
      </div>
      <p className="text-xs text-neutral-500">{reviewerEmail}</p>
      <RatingStars rating={rating} />
      <p className="text-lg">{comment}</p>
      <p className="text-sm text-gray-400">{date.slice(0,10)}</p>
    </div>
  );
}
