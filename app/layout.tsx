import { twMerge } from "tailwind-merge";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Cúbika Labs - Boutique Software Factory",
  description:
    "Cúbika Labs is a boutique software factory specializing in custom solutions, delivering efficient, robust, and scalable products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
