import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exchange Rate Calculator",
  description: "Exchange rate calculator that takes the value of a currency and converts it to a different currency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-gray-900 content-center px-4'}>{children}</body>
    </html>
  );
}
