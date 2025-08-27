import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chhattisgarh Udyog Mahasangh - Premier Business Platform",
  description: "Comprehensive digital directory connecting industries, suppliers, government departments, and transporters across Chhattisgarh. Your single solution for business networking in Chhattisgarh.",
  keywords: ["Chhattisgarh", "Udyog Mahasangh", "Business Directory", "Industries", "Raipur", "Suppliers", "Transportation"],
  authors: [{ name: "Chhattisgarh Udyog Mahasangh" }],
  openGraph: {
    title: "Chhattisgarh Udyog Mahasangh",
    description: "Premier business platform connecting all industries in Chhattisgarh",
    type: "website",
    locale: "en_IN",
  },
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
        {children}
      </body>
    </html>
  );
}
