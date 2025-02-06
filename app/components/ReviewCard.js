import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{review.name}</h4>
          <p className="text-sm text-slate-600">{review.role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? "text-yellow-400" : "text-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed mb-4">{review.comment}</p>
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span>{review.date}</span>
        <span>•</span>
        <span>{review.location}</span>
      </div>
    </div>
  );
}
