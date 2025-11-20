import type React from "react"
import { Inter, Roboto_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata = {
  title: "Portfolio | Developer & Designer",
  description: "Portfólio minimalista e tecnológico focado em experiências digitais elegantes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${robotoMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}