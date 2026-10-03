import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Tayyab Munir — Strategic Visual Designer",
    template: "%s | Tayyab Munir",
  },
  description:
    "Strategic visual designer helping brands, founders and professionals build clear, confident visual identities through branding, personal branding and digital design.",
  applicationName: "Tayyab Munir Portfolio",
  authors: [{ name: "Tayyab Munir" }],
  creator: "Tayyab Munir",
  openGraph: {
    title: "Tayyab Munir — Strategic Visual Designer",
    description:
      "Strategic visual designer helping brands, founders and professionals build clear, confident visual identities through branding, personal branding and digital design.",
    type: "website",
    locale: "en_US",
    siteName: "Tayyab Munir Portfolio",
    images: [{ url: "/images/profile/tayyab image new.jpg.jpeg", alt: "Tayyab Munir, strategic visual designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayyab Munir — Strategic Visual Designer",
    description:
      "Strategic visual designer helping brands, founders and professionals build clear, confident visual identities through branding, personal branding and digital design.",
    images: ["/images/profile/tayyab image new.jpg.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <CustomCursor />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
