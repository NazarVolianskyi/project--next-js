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
        <body className={`${inter.className} bg-blue-50 text-gray-900`}>
        <header className="bg-indigo-600 text-white px-4 py-6 flex justify-between items-center shadow-md">
            <h1 className="text-3xl font-bold bg-yellow-300 px-3 py-2 rounded-lg">
                Author: Nazar Volianskyi, nr 120748
            </h1>
        </header>
        <main className="container mx-auto px-4 py-10 bg-white rounded-lg shadow-lg">
            {children}
        </main>
        <footer className="bg-indigo-700 text-white text-center py-4 mt-10">
            {new Date().getFullYear()}, Nazar Volianskyi
        </footer>
        </body>
        </html>
    );
}