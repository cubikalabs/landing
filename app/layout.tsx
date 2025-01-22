import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cúbika Labs - Boutique Software Factory",
  description:
    "Cúbika Labs is a boutique software factory specializing in custom solutions, delivering efficient, robust, and scalable products.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

