import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const pjs = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aircraft Model Shop",
  description: "Your one-stop shop for diecast model airplanes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pjs.className} antialiased`}>
        <Navbar />
        <main className="container max-w-5xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
