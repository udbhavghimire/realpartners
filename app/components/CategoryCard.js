import Link from "next/link";

export default function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 bg-blue-100 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
          <div className="relative w-full h-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">
          {category.name}
        </h3>
        <p className="text-slate-600 text-sm text-center mb-4">
          {category.description}
        </p>
        <div className="text-sm text-blue-600 font-medium text-center">
          {category.vendorCount} vendors
        </div>
      </div>
    </Link>
  );
}
