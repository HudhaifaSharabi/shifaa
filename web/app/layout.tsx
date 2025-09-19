import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import { cn } from "../lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-kufi" });

export const metadata: Metadata = {
  title: "Shifaa | Humanitarian Relief & Empowerment",
  description:
    "Shifaa is a humanitarian NGO providing emergency relief, healthcare, education, and protection programs for displaced families across the region."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, tajawal.variable, "min-h-screen bg-white text-darkBlue antialiased dark:bg-[#060b1a]")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
