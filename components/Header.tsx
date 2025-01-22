import Link from "next/link"
import { CuboidIcon as Cube } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Cube className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Cúbika Labs</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#principles" className="text-gray-600 hover:text-blue-600">
                Principles
              </Link>
            </li>
            <li>
              <Link href="#approach" className="text-gray-600 hover:text-blue-600">
                Approach
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

