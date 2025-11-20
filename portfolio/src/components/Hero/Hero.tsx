import { ArrowRight, Mail } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import Navbar from "../Navbar/Navbar"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <Navbar />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                {t("page.avaliable")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {t("page.role")}
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-pretty max-w-xl">
              {t("page.aboutMe")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 text-primary bg-white rounded-lg font-medium hover-scale hover:shadow-lg transition-all"
              >
                {t("page.projects")}
                <ArrowRight size={18} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/20 transition-all"
              >
                {t("page.contact")}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Novo-Codigo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all hover-scale"
                aria-label="GitHub"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/melosamuel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all hover-scale"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="mailto:novocodigo@proton.me"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all hover-scale"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative lg:order-last">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me.png-MfaRaIHgLkC6Spj9VXgB4Qs4UDGwaL.jpeg"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
