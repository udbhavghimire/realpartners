import Image from "next/image";
import Link from "next/link";

export default function CityCard({ city }) {
  return (
    <Link href={`/cities/${city.slug}`}>
      <div className="group relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={city.image}
          alt={city.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
          <p className="text-slate-200 text-sm mb-4">{city.description}</p>
          <div className="flex items-center text-blue-300 text-sm">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {city.vendorCount} trusted vendors
          </div>
        </div>
      </div>
    </Link>
  );
}
