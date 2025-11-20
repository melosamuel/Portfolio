import { Bot, Globe, Smartphone } from "lucide-react"
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const skills = [
    {
      icon: Bot,
      title: t("skills.automation"),
      description: t("skills.automationDesc"),
    },
    {
      icon: Globe,
      title: "Web",
      description: t("skills.web"),
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: t("skills.mobile"),
    }
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("page.about")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t("page.aboutMe")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
