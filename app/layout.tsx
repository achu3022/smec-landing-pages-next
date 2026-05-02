import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";

// Body font — clean, highly legible, industry standard
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

// Display / heading font — condensed, bold, industrial character
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

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
      className={`${inter.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
