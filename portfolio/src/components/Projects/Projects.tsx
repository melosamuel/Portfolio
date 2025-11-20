import { ExternalLink, ArrowUpRight } from "lucide-react"
import { useTranslation } from "react-i18next";
import Carnavalnews from "../../assets/images/logo-site.webp";
import Carnavalapp from "../../assets/images/logo-app.webp";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Carnavalrio News",
      description: t("projects.carnavalnews"),
      image: Carnavalnews,
      tags: ["React", "TypeScript", "Tailwind CSS", "AWS S3 Bucket", "Django", "Postgresql", "Graphql"],
      link: "https://carnavalrio.app.br",
    },
    {
      title: "Carnaval Rio",
      description: t("projects.carnaval"),
      image: Carnavalapp,
      tags: ["React Native", "Typescript", "Postgresql", "UI/UX", "Django", "Celery", "AWS S3 Bucket"],
      link: "https://play.google.com/store/apps/details?id=com.infinixat.carnavalrio&hl=pt-BR",
    },
  ]

  return (
    <section id="projetos" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("projects.featured")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t("projects.resume")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={index} className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift">
              <div className="relative aspect-video overflow-hidden flex justify-center items-center bg-linear-to-r from-[#333] to-black h-[500px] w-[600px]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                  className=" group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <a
                    href={project.link}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label={`Ver projeto ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            {t("projects.seeAll")}
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
