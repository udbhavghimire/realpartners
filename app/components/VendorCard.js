import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";

export default function VendorCard({ vendor }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48">
        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {vendor.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600">
            {vendor.category}
          </span>
          <div className="flex items-center gap-1">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-slate-700">
              {vendor.rating}
            </span>
            <span className="text-sm text-slate-500">
              ({vendor.reviewCount})
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {vendor.name}
        </h3>
        <div className="flex items-center text-slate-600 mb-4">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {vendor.city}
        </div>
        <Link
          href={`/vendors/${vendor.id}`}
          className="block w-full text-center bg-slate-900 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors duration-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
