import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nazar Volianskyi",
  description: "120748",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-green-200`}>
      <header className="bg-gray-700 text-white px-4 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-3xl" style={{backgroundColor: '#460'}}>Author: Nazar Volianskyi, 120748</h1>
      </header>
      <main className="container mx-auto px-4 py-10 bg-gray-100 rounded-lg ">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        {new Date().getFullYear()}, Nazar Volianskyi
      </footer>
      </body>
      </html>
  );
}
