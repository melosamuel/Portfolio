"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, Phone } from "lucide-react"
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact via Site - " + formData.name)
    const body = encodeURIComponent(formData.message)

    window.location.href = `mailto:novocodigo@proton.me?subject=${subject}&body=${body}`;
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "novocodigo@proton.me",
      href: "mailto:novocodigo@proton.me",
    },
    {
      icon: Phone,
      label: "Whatsapp",
      value: "+55 (21) 99883-7786",
      href: "tel:+5521998837786",
    }
  ]

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("Contact.title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t("Contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("Form.name")}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder={t("Form.name")}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder={t("Form.email")}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t("Form.messageTitle")}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder={t("Form.message")}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover-scale hover:shadow-lg transition-all"
            >
              {t("Form.send")}
              <Send size={18} />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 gradient-card rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">{t("Contact.info")}</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                {t("Contact.followUp")}
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
