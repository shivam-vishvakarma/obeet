import { Review } from "@/lib/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-900 to-red-600 p-4 py-8 md:w-4/5 mx-auto rounded-lg text-white h-60 flex flex-col">
        <p className="font-medium line-clamp-5 text-justify">
          "{review.comment}"
        </p>
        <p className="text-xl font-bold mt-auto">{review.name}</p>
        <time dateTime={review.date} className="text-xs font-semibold">
          {review.date}
        </time>
      </div>
    </div>
  );
}
