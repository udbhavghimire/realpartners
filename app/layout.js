import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "RealPartners - Find Trusted Real Estate Vendors in Canada",
    template: "%s | RealPartners",
  },
  description:
    "Connect with verified real estate photographers, lawyers, home inspectors, and more across Canada. Find top-rated local vendors for your property needs.",
  keywords:
    "real estate vendors, property services, real estate professionals, Canada",
  openGraph: {
    title: "RealPartners - Find Trusted Real Estate Vendors in Canada",
    description:
      "Connect with verified real estate photographers, lawyers, home inspectors, and more across Canada.",
    type: "website",
    locale: "en_CA",
    siteName: "RealPartners",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
