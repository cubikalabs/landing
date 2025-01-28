import "./globals.css";
import { Lexend_Giga } from "next/font/google";

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cubika Labs",
  description: "Coming Soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexendGiga.className}>{children}</body>
    </html>
  );
}
