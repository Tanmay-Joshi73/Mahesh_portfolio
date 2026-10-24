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
  title: "Mahesh — Film & Commercial Video Editor | Director's Portfolio",
  description:
    "Award-winning video editor and visual storyteller crafting commercial films, music videos, and festival narratives that make people feel something. Specializing in Premiere Pro, DaVinci Resolve ACES color, and sound design.",
  keywords: [
    "Video Editor",
    "Commercial Film Editor",
    "Music Video Editor",
    "DaVinci Resolve Colorist",
    "Premiere Pro",
    "Film Post-Production",
    "Mahesh Young Editor"
  ],
  openGraph: {
    title: "Mahesh YOUNG — Cinematic Video Editor Portfolio",
    description: "I make every frame mean something. Explore selected commercial, music video, and festival cuts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f5f3ef] font-sans selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
