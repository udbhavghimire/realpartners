import Image from "next/image";
import SearchBar from "./components/SearchBar";
import CategoryCard from "./components/CategoryCard";
import CityCard from "./components/CityCard";
import Link from "next/link";
import {
  CameraIcon,
  ScaleIcon,
  HomeIcon,
  BanknotesIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  SwatchIcon,
  BuildingOfficeIcon,
  UsersIcon,
  MapPinIcon,
  FolderIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import ReviewCard from "./components/ReviewCard";
import { StarIcon } from "@heroicons/react/20/solid";
import VendorCard from "./components/VendorCard";
import AnimatedNumber from "./components/AnimatedNumber";

const categories = [
  {
    name: "Photographers & Videographers",
    icon: CameraIcon,
    slug: "photographers",
    vendorCount: 150,
    description: "Professional real estate photography and virtual tours",
  },
  {
    name: "Real Estate Lawyers",
    icon: ScaleIcon,
    slug: "lawyers",
    vendorCount: 80,
    description: "Legal expertise for real estate transactions",
  },
  {
    name: "Home Staging",
    icon: HomeIcon,
    slug: "staging",
    vendorCount: 120,
    description: "Professional home staging and interior styling",
  },
  {
    name: "Mortgage Brokers",
    icon: BanknotesIcon,
    slug: "mortgage",
    vendorCount: 95,
    description: "Expert mortgage and financing solutions",
  },
  {
    name: "Home Inspectors",
    icon: MagnifyingGlassIcon,
    slug: "inspectors",
    vendorCount: 75,
    description: "Thorough home inspection services",
  },
  {
    name: "Property Appraisers",
    icon: ChartBarIcon,
    slug: "appraisers",
    vendorCount: 60,
    description: "Professional property valuation services",
  },
  {
    name: "Interior Designers",
    icon: SwatchIcon,
    slug: "designers",
    vendorCount: 110,
    description: "Creative interior design solutions",
  },
  {
    name: "Property Managers",
    icon: BuildingOfficeIcon,
    slug: "managers",
    vendorCount: 85,
    description: "Professional property management services",
  },
];

const featuredCities = [
  {
    name: "Toronto",
    image: "/cities/toronto.jpg",
    slug: "toronto",
    vendorCount: 250,
    description: "Canada's largest real estate market",
  },
  {
    name: "Vancouver",
    image: "/cities/vancouver.jpg",
    slug: "vancouver",
    vendorCount: 180,
    description: "West coast's premier property hub",
  },
  {
    name: "Edmonton",
    image: "/cities/edmonton.jpg",
    slug: "edmonton",
    vendorCount: 160,
    description: "Rich cultural heritage and modern living",
  },
  {
    name: "Calgary",
    image: "/cities/calgary.jpg",
    slug: "calgary",
    vendorCount: 140,
    description: "Dynamic market with strong growth",
  },
  {
    name: "Mississauga",
    image: "/cities/mississauga.jpg",
    slug: "mississauga",
    vendorCount: 120,
    description: "Capital city's thriving real estate",
  },
  {
    name: "Brampton",
    image: "/cities/brampton.jpg",
    slug: "brampton",
    vendorCount: 110,
    description: "Growing metropolitan market",
  },
];

const reviews = [
  {
    name: "Sarah Thompson",
    role: "Real Estate Agent",
    rating: 5,
    comment:
      "RealPartners has transformed how I connect with vendors. The photographers I've found through the platform have consistently delivered stunning property photos that help my listings stand out.",
    date: "March 2024",
    location: "Toronto",
    avatar:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    rating: 5,
    comment:
      "The quality of home staging professionals on this platform is exceptional. They've helped us maximize the appeal of our properties and accelerate sales.",
    date: "February 2024",
    location: "Vancouver",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    rating: 5,
    comment:
      "Finding reliable property maintenance vendors used to be a challenge. RealPartners has made it seamless to connect with trustworthy professionals who deliver quality work.",
    date: "March 2024",
    location: "Calgary",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Add new section for featured vendors
const featuredVendors = [
  {
    id: 1,
    name: "Elite Photography Studio",
    category: "Photographers & Videographers",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    rating: 4.9,
    reviewCount: 128,
    city: "Toronto",
    featured: true,
  },
  {
    id: 2,
    name: "Premier Legal Services",
    category: "Real Estate Lawyers",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    rating: 4.8,
    reviewCount: 93,
    city: "Vancouver",
    featured: true,
  },
  {
    id: 3,
    name: "Luxe Home Staging",
    category: "Home Staging",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    rating: 4.9,
    reviewCount: 156,
    city: "Calgary",
    featured: true,
  },
];

export const metadata = {
  title: "Find Trusted Real Estate Service Providers Across Canada",
  description:
    "Connect with top-rated real estate photographers, lawyers, home inspectors, and more. Discover verified vendors in your city for all your property needs.",
  keywords:
    "real estate services, property vendors, real estate professionals, home services, Canada",
  openGraph: {
    title:
      "Find Trusted Real Estate Service Providers Across Canada | RealPartners",
    description:
      "Connect with top-rated real estate photographers, lawyers, home inspectors, and more across Canada.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <Image
          src="/hero-image.jpg"
          alt="Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-center">
              Real Estate Community <br />
              <span className="text-blue-400 text-center">Hire the best</span>
            </h1>

            <SearchBar />

            {/* New: Quick category links */}
            <div className="mt-8 flex justify-center gap-6">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="text-sm">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated with icons and animations */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "1,200+",
                label: "Verified Vendors",
                icon: UsersIcon,
                color: "blue",
              },
              {
                number: "20+",
                label: "Major Cities",
                icon: MapPinIcon,
                color: "green",
              },
              {
                number: "8+",
                label: "Categories",
                icon: FolderIcon,
                color: "purple",
              },
              {
                number: "10,000+",
                label: "Happy Clients",
                icon: HeartIcon,
                color: "rose",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-${stat.color}-50`}
                >
                  <stat.icon className={`w-7 h-7 text-${stat.color}-500`} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  <AnimatedNumber value={stat.number} />
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Featured Vendors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Featured Vendors
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover our top-rated service providers who consistently deliver
              exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/vendors"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              View all vendors
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* New: How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Find and connect with the perfect vendor in just a few simple
              steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Search",
                description:
                  "Browse our extensive directory of verified vendors by category or location",
                icon: "search",
                step: "01",
              },
              {
                title: "Compare",
                description:
                  "Review profiles, ratings, and previous work to find your perfect match",
                icon: "compare",
                step: "02",
              },
              {
                title: "Connect",
                description:
                  "Reach out directly to vendors and start your project",
                icon: "connect",
                step: "03",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10">
                  <div className="absolute -top-6 left-8 text-7xl font-bold text-blue-100">
                    {step.step}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <StepIcon name={step.icon} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Updated with modern cards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Premium Service Categories
            </h2>
            <p className="text-lg text-slate-600">
              Discover carefully curated professionals for every aspect of your
              real estate journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section - Updated with modern design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Featured Locations
            </h2>
            <p className="text-lg text-gray-600">
              Explore premier vendors in Canada's most dynamic real estate
              markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Updated with modern design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              The RealPartners Advantage
            </h2>
            <p className="text-lg text-slate-600">
              Experience the difference of working with carefully vetted,
              top-performing vendors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Elite Professionals",
                description:
                  "Work with thoroughly vetted vendors who meet our strict quality standards",
                icon: "verify",
              },
              {
                title: "Seamless Connection",
                description:
                  "Connect instantly with the right service provider for your needs",
                icon: "connect",
              },
              {
                title: "Guaranteed Excellence",
                description:
                  "Experience consistently high-quality service from every vendor",
                icon: "star",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Latest Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest trends and tips in real estate
              services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Choose the Right Real Estate Photographer",
                category: "Photography",
                image:
                  "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
                date: "March 15, 2024",
              },
              {
                title: "The Impact of Professional Home Staging on Sale Price",
                category: "Home Staging",
                image:
                  "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
                date: "March 12, 2024",
              },
              {
                title: "Legal Considerations When Buying Investment Property",
                category: "Legal",
                image:
                  "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg",
                date: "March 10, 2024",
              },
            ].map((post, index) => (
              <Link key={index} href="/blog" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-black transition-colors">
                      {post.title}
                    </h3>
                    <div className="text-sm text-slate-600">{post.date}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Trusted by Real Estate Professionals
            </h2>
            <p className="text-lg text-slate-600">
              Join thousands of satisfied clients who have found their perfect
              vendors through RealPartners
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <div className="text-slate-900 font-semibold">4.9 out of 5</div>
              <div className="text-slate-600">based on 2,347 reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Real Estate Services?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Join our network of premium vendors or find the perfect service
              provider today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vendors/register"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join as Vendor
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300"
              >
                Find Vendors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for feature icons
function FeatureIcon({ name }) {
  switch (name) {
    case "verify":
      return (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "connect":
      return (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function StepIcon({ name }) {
  // Add implementation
}
