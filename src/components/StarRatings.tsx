import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRatings = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-500">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} />;
        } else if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} />;
        } else {
          return <FaRegStar key={star} />;
        }
      })}
    </div>
  );
};

export default StarRatings