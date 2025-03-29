import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import "./../scss/index.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Include the required font weights
  display: "swap", // Font display option
});

export const metadata: Metadata = {
  title: "Find the Best Loan Rates | Trusted Bank & Credit Union Comparisons - LendMesh",
  description: "LendMesh makes loan comparison easy. Explore top-rated offers from banks and credit unions for personal, mortgage, auto, and student loans. Get real-time rates tailored to your needs—secure, fast, and user-friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
