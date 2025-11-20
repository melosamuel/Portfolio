"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import LanguageSelector from "../LanguageSelector/LanguageSelector"

import Logo from "../../assets/images/dark-logo-nameless.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#sobre", label: t("page.about") },
    { href: "#projetos", label: t("page.projects") },
    { href: "#contato", label: t("page.contact") },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 hover-scale">
            <img
              src={Logo}
              alt="Logo"
              className="w-20 h-20 rounded-full"
            />
            <span className="text-white text-lg hidden sm:inline"><span className={`font-bold ${isScrolled ? "text-primary" : "text-white"}`}>NOVO</span><span className={`text-sm ${isScrolled ? "text-primary" : "text-white"}`}>CÓDIGO</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm hover:text-primary transition-colors duration-200 ${isScrolled ? "text-primary" : "text-white"} font-bold`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <LanguageSelector 
            currentLanguage="en-US"
            onLanguageChange={(lng) => i18n.changeLanguage(lng)}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
