import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cynaris - Innovative Technology Solutions",
    description:
        "Cynaris provides enterprise-grade technology solutions for digital transformation. Expert services in cloud computing, cybersecurity, AI, and custom development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow pt-16">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
