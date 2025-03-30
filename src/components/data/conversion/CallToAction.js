// Call-to-Action data file

export const ctaVariations = {
  primary: {
    id: "discuss-project",
    text: "Discuss Your Project",
    action: "/contact",
    type: "primary",
    icon: "chat",
    locations: ["hero", "services", "case-studies", "footer"]
  },
  secondary: {
    id: "view-work",
    text: "View My Work",
    action: "/projects",
    type: "secondary",
    icon: "portfolio",
    locations: ["hero", "about"]
  },
  tertiary: {
    id: "schedule-call",
    text: "Schedule a Call",
    action: "https://calendly.com/petru-tirla", // Replace with actual Calendly URL
    type: "tertiary",
    icon: "calendar",
    locations: ["contact", "case-studies", "services"]
  },
  quaternary: {
    id: "check-availability",
    text: "Check Availability",
    action: "/contact#availability",
    type: "quaternary",
    icon: "clock",
    locations: ["hero", "projects"]
  }
};

// CTA translations
export const ctaTranslations = {
  en: {
    "discuss-project": "Discuss Your Project",
    "view-work": "View My Work",
    "schedule-call": "Schedule a Call",
    "check-availability": "Check Availability"
  },
  ro: {
    "discuss-project": "Discută despre Proiectul Tău",
    "view-work": "Vezi Proiectele Mele",
    "schedule-call": "Programează un Apel",
    "check-availability": "Verifică Disponibilitatea"
  },
  fr: {
    "discuss-project": "Discuter de Votre Projet",
    "view-work": "Voir Mon Travail",
    "schedule-call": "Planifier un Appel",
    "check-availability": "Vérifier la Disponibilité"
  },
  it: {
    "discuss-project": "Discuti il Tuo Progetto",
    "view-work": "Visualizza il Mio Lavoro",
    "schedule-call": "Programma una Chiamata",
    "check-availability": "Controlla la Disponibilità"
  }
};