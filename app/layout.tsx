import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "./componnents/nav";
import "./globals.css"

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodieland",
  description: "Giving you access to healthy food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
