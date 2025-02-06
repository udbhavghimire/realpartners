export const cities = [
  { name: "Toronto", slug: "toronto", province: "Ontario" },
  { name: "Montreal", slug: "montreal", province: "Quebec" },
  { name: "Vancouver", slug: "vancouver", province: "British Columbia" },
  { name: "Calgary", slug: "calgary", province: "Alberta" },
  { name: "Edmonton", slug: "edmonton", province: "Alberta" },
  { name: "Ottawa", slug: "ottawa", province: "Ontario" },
  { name: "Winnipeg", slug: "winnipeg", province: "Manitoba" },
  { name: "Quebec City", slug: "quebec-city", province: "Quebec" },
  { name: "Hamilton", slug: "hamilton", province: "Ontario" },
  { name: "Brampton", slug: "brampton", province: "Ontario" },
  { name: "Surrey", slug: "surrey-bc", province: "British Columbia" },
  { name: "Kitchener", slug: "kitchener", province: "Ontario" },
  { name: "Halifax", slug: "halifax", province: "Nova Scotia" },
  { name: "London", slug: "london-on", province: "Ontario" },
  { name: "Victoria", slug: "victoria-bc", province: "British Columbia" },
  { name: "Windsor", slug: "windsor-on", province: "Ontario" },
  { name: "Saskatoon", slug: "saskatoon", province: "Saskatchewan" },
  { name: "Regina", slug: "regina", province: "Saskatchewan" },
  { name: "Richmond", slug: "richmond-bc", province: "British Columbia" },
  { name: "Oakville", slug: "oakville", province: "Ontario" },
];

export function getCityBySlug(slug) {
  return cities.find((city) => city.slug === slug);
}

export function searchCities(query) {
  const searchTerm = query.toLowerCase();
  return cities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchTerm) ||
      city.province.toLowerCase().includes(searchTerm)
  );
}
