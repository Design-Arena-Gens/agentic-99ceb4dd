import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precision Rewind Solutions | Industrial Motor Rewinding & Repair",
  description:
    "Precision Rewind Solutions keeps critical operations online with fast industrial motor rewinding, repair, and preventive maintenance services across the Southwest.",
  metadataBase: new URL("https://agentic-99ceb4dd.vercel.app"),
  openGraph: {
    title: "Precision Rewind Solutions | Industrial Motor Rewinding & Repair",
    description:
      "Full-service motor rewinding, testing, balancing, and emergency response for plants across Arizona.",
    url: "https://agentic-99ceb4dd.vercel.app",
    siteName: "Precision Rewind Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Rewind Solutions",
    description:
      "Industrial motor rewinding and rotating equipment repair specialists serving the Southwest.",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-100 text-zinc-900 antialiased`}
      >
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
