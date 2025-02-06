/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-blue-50",
    "bg-green-50",
    "bg-purple-50",
    "bg-rose-50",
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    "text-rose-500",
  ],
  theme: {
    extend: {
      // ... your existing theme extensions
    },
  },
  plugins: [],
};
