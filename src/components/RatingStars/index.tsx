import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
    rating?:number;
}

export default function RatingStars({ rating }: RatingStarsProps) {

  const arrayStars = [];

  if (rating !== undefined) {
    const stars = Math.floor(rating);
    const decimal = rating - stars;
    // Agregar estrellas completas
    for (let i = 0; i < stars; i++) {
      arrayStars.push(<Star color="gold" size={18} key={`full-${i}`} fill="gold" />);
    }
    // Agregar media estrella si el decimal es >= 0.5
    if (decimal >= 0.5) {
      arrayStars.push(<StarHalf color="gold" size={18} key="half" fill="gold" />);
    }
  }

 return(
    <div className="flex gap-1">
        {arrayStars}
    </div>
 )
}
