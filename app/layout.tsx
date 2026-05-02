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
  title: 'SMECLabs Kochi | Industrial Automation & AI Training',
  description: 'Join SMECLabs Kochi for professional diploma and certified engineer programmes in industrial automation with AI. Enrol today.',
  openGraph: {
    title: 'SMECLabs Kochi | Industrial Automation & AI Training',
    description: 'Professional industrial automation training with AI in Kochi. Two flagship programmes for freshers and working professionals.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
