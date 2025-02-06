import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RealPartners</h3>
            <p className="text-gray-400 text-sm">
              Connecting real estate professionals with trusted vendors across
              Canada.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/vendors"
                  className="text-gray-400 hover:text-white"
                >
                  Find Vendors
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-gray-400 hover:text-white">
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-400 hover:text-white"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/photographers"
                  className="text-gray-400 hover:text-white"
                >
                  Photographers
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/lawyers"
                  className="text-gray-400 hover:text-white"
                >
                  Real Estate Lawyers
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/staging"
                  className="text-gray-400 hover:text-white"
                >
                  Home Staging
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@realpartners.ca</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} RealPartners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
