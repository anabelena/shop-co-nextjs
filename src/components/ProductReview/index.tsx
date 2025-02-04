import { reviews } from "@/data/reviews"
import { LucideStarHalf,LucideStar } from "lucide-react";

export default function ProductReview(){

    return(
        <div>
        <h2> All Reviews </h2>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-2 rounded-sm grid grid-cols-1 gap-3 p-4"
          >
            <div className="flex space-x-1">
              {Array.from({ length: review.star }).map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={StarIcon}
                  alt="Star"
                  className="w-4 h-4"
                />
              ))}
            </div>
  
            <p className="text-lg font-bold">{review.name}</p>
            <p className="text-sm font-extralight">{review.review}</p>
            <p className="text-xs text-gray-500">{review.date}</p>
      
          </div>
        ))}
      </div>
    );
}