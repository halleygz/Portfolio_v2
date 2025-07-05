import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import ParticlesAnim from "@/components/Animation/ParticlesAnim";
import Nav from "@/components/Shared/Nav";
import Typewriter from "@/components/Animation/Typewriter";

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
      <body className="h-screen">
        <ParticlesAnim />
        <div className="min-h-full flex flex-col">
          <main
            className={`${geistMono.variable} antialiased border-gray-500 border-1 flex-1 relative m-8 p-4  flex flex-col justify-between gap-8`}
          >
            <div className="flex gap-24 justify-between">
              <div className="flex-1">{children}</div>

              <div className="flex flex-col items-end text-end">
                <Nav />
              </div>
            </div>
            <footer className="min-w-full">
              <Footer />
            </footer>
            <div className="w-full flex items-center justify-center text-center">
              <p className="text-center font-mono">© Halleluya Mulugeta</p>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
