import Link from "next/link";
import { ArrowRight, CuboidIcon as Cube, MenuIcon } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* NAV HEADER */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Logo />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <ul className="flex gap-4 items-center">
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#principles">Principles</Link>
                </li>
                <li>
                  <Link href="#approach">Approach</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                  Get started
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
