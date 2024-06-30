import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NitishDev",
  description: "Full Stack Alchemist | Crafting Digital Excellence at Digitlay | JavaScript Sorcerer | Turning Code into Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
      <div className="relative w-full flex items-center justify-center">
        <Navbar/>
        </div>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
