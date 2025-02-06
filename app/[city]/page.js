import { getCityBySlug } from "../data/cities";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import VendorCard from "../components/VendorCard";
import ReviewCard from "../components/ReviewCard";
import { StarIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

export async function generateMetadata({ params }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {
      title: "City Not Found",
      description: "The requested city page could not be found.",
    };
  }

  return {
    title: `Top Real Estate Vendors in ${city.name}, ${city.province}`,
    description: `Find verified real estate photographers, lawyers, home inspectors, and more in ${city.name}. Connect with trusted local vendors for your property needs.`,
    keywords: `${city.name} real estate vendors, ${city.name} property services, ${city.province} real estate professionals, ${city.name} home services`,
    openGraph: {
      title: `Top Real Estate Vendors in ${city.name}, ${city.province} | RealPartners`,
      description: `Find verified real estate photographers, lawyers, home inspectors, and more in ${city.name}. Local experts you can trust.`,
    },
  };
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  // Mock data for vendors
  const cityVendors = [
    {
      id: 1,
      name: "Elite Photography Studio",
      category: "Photographers & Videographers",
      image:
        "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
      rating: 4.9,
      reviewCount: 128,
      city: city.name,
      featured: true,
    },
    {
      id: 2,
      name: "Premier Home Inspection",
      category: "Home Inspectors",
      image:
        "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg",
      rating: 4.7,
      reviewCount: 93,
      city: city.name,
      featured: false,
    },
    {
      id: 3,
      name: "Legal Eagles Real Estate",
      category: "Real Estate Lawyers",
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
      rating: 4.8,
      reviewCount: 156,
      city: city.name,
      featured: true,
    },
  ];

  // Mock reviews data
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      rating: 5,
      comment:
        "Found amazing vendors through this platform. The photographer we hired captured our new home perfectly!",
      date: "2 weeks ago",
      location: city.name,
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 4,
      comment:
        "Great selection of professional services. The legal team I found here made my property purchase smooth and hassle-free.",
      date: "1 month ago",
      location: city.name,
    },
    {
      name: "Emma Wilson",
      role: "First-time Seller",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      comment:
        "The home staging service I found here transformed my property. Sold above asking price!",
      date: "3 weeks ago",
      location: city.name,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enhanced SEO Header */}
      <div className="mb-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-black mb-4">
          Top Real Estate Service Providers in {city.name}, {city.province}
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Connect with verified real estate professionals, photographers, home
          inspectors, and more in {city.name}. Our trusted network helps you
          find the best local services for your property needs.
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            "Verified Vendors",
            "Local Experts",
            "Quick Response",
            "Quality Service",
          ].map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full"
            >
              <CheckCircleIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-black mb-6">
          Popular Services in {city.name}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Photography", count: "25+" },
            { name: "Home Inspection", count: "18+" },
            { name: "Legal Services", count: "15+" },
            { name: "Home Staging", count: "12+" },
            { name: "Mortgage Services", count: "20+" },
            { name: "Property Management", count: "16+" },
            { name: "Interior Design", count: "14+" },
            { name: "Real Estate Agents", count: "30+" },
          ].map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-lg font-semibold text-slate-900">
                {service.name}
              </div>
              <div className="text-sm text-blue-600">
                {service.count} Providers
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vendors Section with enhanced header */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">
              Top Rated Vendors
            </h2>
            <p className="text-slate-600">
              Highly reviewed professionals in {city.name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-700">4.8 Average Rating</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cityVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-black mb-6">
          Why Choose Our Vendors in {city.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Verified Professionals",
              description:
                "All vendors undergo thorough verification and background checks",
            },
            {
              title: "Local Expertise",
              description: `Deep understanding of ${city.name}'s real estate market and requirements`,
            },
            {
              title: "Quality Guaranteed",
              description:
                "Consistently high-rated services backed by client reviews",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Reviews Section with enhanced header */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">
            Client Success Stories
          </h2>
          <p className="text-slate-600">
            Real experiences from property owners in {city.name}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </section>

      {/* Quick Stats with enhanced design */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Active Vendors", value: "50+" },
              { label: "Average Rating", value: "4.8" },
              { label: "Reviews", value: "500+" },
              { label: "Service Categories", value: "10+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="mb-16">
        <div className="prose max-w-none text-slate-600">
          <h2 className="text-2xl font-bold text-black mb-4">
            Professional Real Estate Services in {city.name}
          </h2>
          <p className="mb-4">
            Looking for reliable real estate service providers in {city.name},{" "}
            {city.province}? Our platform connects you with experienced
            professionals who understand the local market and deliver
            exceptional results. From professional photography that makes your
            property stand out, to thorough home inspections that give buyers
            confidence, our verified vendors provide comprehensive services for
            all your real estate needs.
          </p>
          <p>
            Whether you're buying, selling, or managing property in {city.name},
            our network of trusted professionals is here to help. Each vendor is
            carefully selected and maintains high service standards, ensuring
            you receive quality assistance throughout your real estate journey.
          </p>
        </div>
      </section>
    </div>
  );
}
