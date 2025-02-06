import {
  CameraIcon,
  ScaleIcon,
  HomeIcon,
  BanknotesIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  SwatchIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

export const categories = [
  {
    name: "Photographers & Videographers",
    icon: CameraIcon,
    slug: "photographers",
    vendorCount: 150,
    description: "Professional real estate photography and virtual tours",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    popularServices: [
      "Professional Photography",
      "Aerial Drone Photos",
      "Virtual Tours",
      "Video Tours",
    ],
  },
  {
    name: "Real Estate Lawyers",
    icon: ScaleIcon,
    slug: "lawyers",
    vendorCount: 80,
    description: "Legal expertise for real estate transactions",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    popularServices: [
      "Contract Review",
      "Title Search",
      "Closing Services",
      "Legal Consultation",
    ],
  },
  {
    name: "Home Staging",
    icon: HomeIcon,
    slug: "staging",
    vendorCount: 120,
    description: "Professional home staging and interior styling",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    popularServices: [
      "Full Home Staging",
      "Furniture Rental",
      "Decor Consultation",
      "Virtual Staging",
    ],
  },
  {
    name: "Mortgage Brokers",
    icon: BanknotesIcon,
    slug: "mortgage",
    vendorCount: 95,
    description: "Expert mortgage and financing solutions",
    image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
    popularServices: [
      "Mortgage Pre-approval",
      "Rate Comparison",
      "Refinancing",
      "First-time Buyer Programs",
    ],
  },
  {
    name: "Home Inspectors",
    icon: MagnifyingGlassIcon,
    slug: "inspectors",
    vendorCount: 75,
    description: "Thorough home inspection services",
    image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg",
    popularServices: [
      "Full Home Inspection",
      "Pre-listing Inspection",
      "New Construction Inspection",
      "Specialty Inspections",
    ],
  },
  {
    name: "Property Appraisers",
    icon: ChartBarIcon,
    slug: "appraisers",
    vendorCount: 60,
    description: "Professional property valuation services",
    image: "https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg",
    popularServices: [
      "Residential Appraisal",
      "Commercial Appraisal",
      "Market Analysis",
      "Investment Property Valuation",
    ],
  },
  {
    name: "Interior Designers",
    icon: SwatchIcon,
    slug: "designers",
    vendorCount: 110,
    description: "Creative interior design solutions",
    image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg",
    popularServices: [
      "Full Interior Design",
      "Color Consultation",
      "Space Planning",
      "Furniture Selection",
    ],
  },
  {
    name: "Property Managers",
    icon: BuildingOfficeIcon,
    slug: "managers",
    vendorCount: 85,
    description: "Professional property management services",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    popularServices: [
      "Tenant Screening",
      "Rent Collection",
      "Property Maintenance",
      "Financial Reporting",
    ],
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}

export function searchCategories(query) {
  const searchTerm = query.toLowerCase();
  return categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm) ||
      category.description.toLowerCase().includes(searchTerm)
  );
}
