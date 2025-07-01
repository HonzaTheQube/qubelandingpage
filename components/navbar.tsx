"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { href: "#o-kurzu", label: "O kurzu" },
    { href: "#obsah", label: "Obsah" },
    { href: "#lektori", label: "Lektoři" },
    { href: "#harmonogram", label: "Harmonogram" },
    { href: "#cena", label: "Cena" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-dark/90 backdrop-blur-md py-2 md:py-3" : "py-3 md:py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo-q.png" alt="Qube AI" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end space-x-6 xl:space-x-8">
          <nav className="flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href.substring(1))}
                className="text-light/80 hover:text-light transition-colors text-sm xl:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="#cena"
            onClick={(e) => handleScrollToSection(e, "cena")}
            className="bg-primary hover:bg-primary/90 text-white py-2 px-4 xl:py-3 xl:px-6 rounded-md text-sm xl:text-base font-medium transition-all whitespace-nowrap"
          >
            Rezervovat místo – 9 997 Kč
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <a
            href="#cena"
            onClick={(e) => handleScrollToSection(e, "cena")}
            className="bg-primary hover:bg-primary/90 text-white py-2 px-3 rounded-md text-sm font-medium transition-all"
          >
            Rezervovat
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-light p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md border-t border-white/10">
          <nav className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href.substring(1))}
                className="block text-light/80 hover:text-light transition-colors py-2 text-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
