"use client"

/**
 * LanguageSelector Component
 * Handles language switching with visual feedback
 * Supports Portuguese and English
 */

import { BR, US } from 'country-flag-icons/react/3x2';

interface LanguageSelectorProps {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const languages = [
    { code: "pt-BR", flag: BR, label: "Português" },
    { code: "en-US", flag: US, label: "English" },
  ]

  return (
    <div className="flex justify-end p-4 lg:p-8 gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`p-2 rounded-lg hover-scale transition-all duration-180 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
            currentLanguage === lang.code ? "" : "hover:bg-surface/50"
          }`}
          aria-label={`Switch to ${lang.label}`}
          title={lang.label}
        >
          <span className="text-2xl" role="img" aria-label={lang.label}>
            <lang.flag className='w-6 h-6'/>
          </span>
        </button>
      ))}
    </div>
  )
}
