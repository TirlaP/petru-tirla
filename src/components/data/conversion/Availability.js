// Availability data file

// This would typically be managed through a CMS or admin interface
// For this implementation, we'll use a static object
export const availability = {
  status: "Limited Availability", // "Available", "Limited Availability", "Booked"
  nextAvailableDate: "April 15, 2025", // Next available start date
  typicalResponseTime: "Within 24 hours", // Response time for inquiries
  workingHours: "9:00 AM - 6:00 PM EET (GMT+2)", // Working hours
  timeZone: "Eastern European Time (EET)",
  currentWorkload: 70, // Percentage of capacity filled
  preferredContactMethods: ["Email", "Contact Form"],
  schedulingUrl: "https://calendly.com/petru-tirla", // Hypothetical Calendly link
};

// Availability & Response Time Indicators translations
export const availabilityTranslations = {
  en: {
    availabilityLabel: "Current Status",
    nextAvailableLabel: "Next Availability",
    responseTimeLabel: "Response Time",
    workingHoursLabel: "Working Hours",
    timeZoneLabel: "Time Zone",
    workloadLabel: "Current Workload",
    contactMethodsLabel: "Preferred Contact",
    scheduleMeetingButton: "Schedule a Meeting",
    notifyButton: "Get Notified When Available",
    statuses: {
      "Available": "Available",
      "Limited Availability": "Limited Availability",
      "Booked": "Fully Booked"
    }
  },
  ro: {
    availabilityLabel: "Stare Curentă",
    nextAvailableLabel: "Disponibilitate Următoare",
    responseTimeLabel: "Timp de Răspuns",
    workingHoursLabel: "Program de Lucru",
    timeZoneLabel: "Fus Orar",
    workloadLabel: "Încărcare Curentă",
    contactMethodsLabel: "Contact Preferat",
    scheduleMeetingButton: "Programează o Întâlnire",
    notifyButton: "Primește Notificare Când Devine Disponibil",
    statuses: {
      "Available": "Disponibil",
      "Limited Availability": "Disponibilitate Limitată",
      "Booked": "Complet Rezervat"
    }
  },
  fr: {
    availabilityLabel: "Statut Actuel",
    nextAvailableLabel: "Prochaine Disponibilité",
    responseTimeLabel: "Temps de Réponse",
    workingHoursLabel: "Heures de Travail",
    timeZoneLabel: "Fuseau Horaire",
    workloadLabel: "Charge de Travail Actuelle",
    contactMethodsLabel: "Contact Préféré",
    scheduleMeetingButton: "Planifier une Réunion",
    notifyButton: "Être Notifié Quand Disponible",
    statuses: {
      "Available": "Disponible",
      "Limited Availability": "Disponibilité Limitée",
      "Booked": "Entièrement Réservé"
    }
  },
  it: {
    availabilityLabel: "Stato Attuale",
    nextAvailableLabel: "Prossima Disponibilità",
    responseTimeLabel: "Tempo di Risposta",
    workingHoursLabel: "Orario di Lavoro",
    timeZoneLabel: "Fuso Orario",
    workloadLabel: "Carico di Lavoro Attuale",
    contactMethodsLabel: "Contatto Preferito",
    scheduleMeetingButton: "Programma un Incontro",
    notifyButton: "Ricevi Notifica Quando Disponibile",
    statuses: {
      "Available": "Disponibile",
      "Limited Availability": "Disponibilità Limitata",
      "Booked": "Completamente Prenotato"
    }
  }
};