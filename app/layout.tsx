import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import ParticlesAnim from "@/components/Animation/ParticlesAnim";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halle Mulugeta | Software Engineer & Web Developer",
  description:
    "Portfolio of Halle Mulugeta, a software engineer specializing in web development, JavaScript, TypeScript, React, and Next.js. View projects, skills, and experience.",
  keywords: [
    "Halleluya Mulugeta",
    "Halle Mulugeta",
    "portfolio",
    "software engineer",
    "web developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "frontend",
    "projects",
    "skills",
    "experience",
  ],
  authors: [{ name: "Halleluya Mulugeta", url: "https://halley.dev" }],
  creator: "Halleluya Mulugeta",
  openGraph: {
    title: "Halle Mulugeta | Software Engineer & Web Developer",
    description:
      "Portfolio of Halle Mulugeta, a software engineer specializing in web development, JavaScript, TypeScript, React, and Next.js.",
    url: "https://halley.dev",
    siteName: "Halle Mulugeta Portfolio",
    images: [
      {
        url: "/file.svg",
        width: 1200,
        height: 630,
        alt: "Halle Mulugeta Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halle Mulugeta | Software Engineer & Web Developer",
    description:
      "Portfolio of Halle Mulugeta, a software engineer specializing in web development, JavaScript, TypeScript, React, and Next.js.",
    creator: "@halleydev",
    images: ["/file.svg"],
  },
  metadataBase: new URL("https://halley.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <ParticlesAnim/>
        <main
          className={`${geistMono.variable} antialiased border-gray-500 border-2 h-screen m-8 p-4`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
