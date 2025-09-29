import type { Metadata } from "next";
import { Geist, Geist_Mono, Cascadia_Code, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cascadiaCode = Cascadia_Code({
  variable: "--font-cascadia-code",
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ACM - Code. Compete. Conquer.",
  description: "Learn to code with ACM workshops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cascadiaCode.variable} ${montserrat.variable} antialiased min-h-screen bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(207,237,255,.5)_100%)]`}
      >
        <Providers>
          <main className="font-cascadia">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
