import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                RealPartners
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/vendors"
              className="text-slate-700 hover:text-blue-600 font-medium"
            >
              Find Vendors
            </Link>
            <Link
              href="/cities"
              className="text-slate-700 hover:text-blue-600 font-medium"
            >
              Cities
            </Link>
            <Link
              href="/categories"
              className="text-slate-700 hover:text-blue-600 font-medium"
            >
              Categories
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
