/**
 * Internationalization Configuration
 * Sets up i18next with Portuguese and English support
 * Includes language detection and resource loading
 */

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Translation resources
const resources = {
  "pt-BR": {
    translation: {
      page: {
        about: "Sobre Mim",
        projects: "Ver Projetos",
        contact: "Contato",
        avaliable: "Disponível para novos projetos",
        role: "Desenvolvedor Full-Stack: Web, Mobile & Automação",
        aboutMe: "Desenvolvedor Full Stack especializado em soluções web, mobile e de automação."
      },
      skills: {
        automation: "Automações",
        automationDesc: "Bot inteligente de automação que coleta, organiza e atualiza dados em tempo real, além de automatizar fluxos manuais.",
        web: "Soluções seguras e responsivas de desenvolvimento web. Sites escaláveis com design responsivo e proteção única.",
        mobile: "Android ou IOS app, responsivo e seguro com experiência sem igual, segurança robusta e performance escalável."
      },
      projects: {
        featured: "Projetos em Destaque",
        resume: "Uma seleção dos meus trabalhos mais recentes, demonstrando expertise em desenvolvimento full-stack e design de interfaces.",
        carnavalnews: "Portal de notícias sobre o carnaval do Rio de Janeiro com sistema de categorização avançado, busca em tempo real e interface responsiva otimizada para leitura.",
        carnaval: "Aplicativo Android & IOS para acompanhamento do Carnaval do Rio, com agenda de blocos, ranking de escolas de samba e notícias em tempo real.",
        seeAll: "Ver todos os projetos"
      },
      Contact: {
        title: "Vamos trabalhar juntos!",
        description: "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.",
        info: "Informações de Contato",
        followUp: "Prefere entrar em contato diretamente? Você pode me encontrar através dos canais abaixo.",
        whatsapp: "Whatsapp"
      },
      Form: {
        name: "Seu Nome",
        email: "exemplo@email.com",
        messageTitle: "Mensagem",
        message: "Conte-me sobre seu projeto...",
        send: "Enviar Mensagem",
      }
    }
  },
  "en-US": {
    translation: {
      page: {
        about: "About me",
        projects: "Projects",
        contact: "Contact",
        avaliable: "Avaliable for new projects",
        role: "Full-Stack Developer: Web, Mobile & Automations",
        aboutMe: "Full Stack Developer specialized in web, mobile, and automation solutions."
      },
      skills: {
        automation: "Automation",
        automationDesc: "Smart automation bot that gathers, organizes, and updates real-time data and automates manual flows.",
        web: "Responsive and secure web development solution that delivers fast, scalable websites with modern design and built-in protection.",
        mobile: "Cross-platform, responsive, and secure app development solution that delivers seamless user experiences across devices with robust protection and scalable performance."
      },
      projects: {
        featured: "Featured Projects",
        resume: "A selection of my recent work, showcasing expertise in full-stack development and interface design.",
        carnavalnews: "Brazilian Carnival news portal with advanced categorization system, real-time search, and responsive interface optimized for reading.",
        carnaval: "Mobile app (Android & IOS) for following Rio's Carnival, with a block schedule, samba school rankings, and real-time news.",
        seeAll: "See all projects"
      },
      Contact: {
        title: "Let's work together!",
        description: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        info: "Contact Information",
        followUp: "Prefer to get in touch directly? You can find me through the channels below.",
        whatsapp: "Whatsapp"
      },
      Form: {
        name: "Your Name",
        email: "example@email.com",
        messageTitle: "Message",
        message: "Tell me about your project...",
        send: "Send Message",
      }
    }
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en-US",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  })

export default i18n
