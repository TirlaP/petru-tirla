// Results Dashboard data file

export const results = [
  {
    id: "performance",
    title: "Performance Improvements",
    metrics: [
      {
        id: "load-time",
        title: "Site Load Time Reduction",
        value: 68,
        unit: "%",
        comparison: "Before: 4.5s, After: 1.4s",
        description: "Reduced average load time through code splitting, image optimization, and server-side rendering.",
        project: "E-commerce Website"
      },
      {
        id: "lighthouse",
        title: "Lighthouse Score Improvement",
        value: 95,
        unit: "/100",
        comparison: "Before: 62/100, After: 95/100",
        description: "Significantly improved overall Lighthouse score by addressing performance, accessibility, and SEO issues.",
        project: "Marketing Website"
      },
      {
        id: "conversion-rate",
        title: "Conversion Rate Increase",
        value: 32,
        unit: "%",
        comparison: "Before: 1.8%, After: 2.4%",
        description: "Enhanced user experience and site speed led to higher conversion rates.",
        project: "E-commerce Website"
      }
    ]
  },
  {
    id: "business",
    title: "Business Outcomes",
    metrics: [
      {
        id: "revenue",
        title: "Revenue Growth",
        value: 45,
        unit: "%",
        comparison: "Previous quarter vs. current quarter",
        description: "Improved user interface and experience contributed to significant revenue growth.",
        project: "E-commerce Website"
      },
      {
        id: "engagement",
        title: "User Engagement Increase",
        value: 78,
        unit: "%",
        comparison: "Before: 2.1 min, After: 3.7 min",
        description: "Redesigned UI and improved content organization led to higher user engagement and time on site.",
        project: "Sport Website"
      },
      {
        id: "retention",
        title: "Customer Retention Improvement",
        value: 25,
        unit: "%",
        comparison: "Year-over-year comparison",
        description: "Enhanced platform stability and performance contributed to better customer retention.",
        project: "SaaS Dashboard"
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Achievements",
    metrics: [
      {
        id: "bugs",
        title: "Bugs Resolved",
        value: 300,
        unit: "+",
        comparison: "Over 6-month period",
        description: "Systematically identified and resolved bugs to improve platform stability.",
        project: "CRM Application"
      },
      {
        id: "api-latency",
        title: "API Latency Reduction",
        value: 85,
        unit: "%",
        comparison: "Before: 750ms, After: 110ms",
        description: "Optimized database queries and implemented caching to significantly reduce API response times.",
        project: "AiFrontDesk"
      },
      {
        id: "code-coverage",
        title: "Test Coverage Increase",
        value: 92,
        unit: "%",
        comparison: "Before: 45%, After: 92%",
        description: "Implemented comprehensive testing strategy to ensure code quality and prevent regressions.",
        project: "HR Platform"
      }
    ]
  },
  {
    id: "satisfaction",
    title: "Client Satisfaction",
    metrics: [
      {
        id: "nps",
        title: "Net Promoter Score",
        value: 85,
        unit: "/100",
        comparison: "Industry average: 32",
        description: "High client satisfaction reflected in exceptional NPS score.",
        project: "All Projects"
      },
      {
        id: "repeat-business",
        title: "Repeat Business Rate",
        value: 80,
        unit: "%",
        comparison: "Industry average: 45%",
        description: "Majority of clients return for additional projects due to satisfaction with previous work.",
        project: "All Projects"
      },
      {
        id: "referrals",
        title: "Client Referrals",
        value: 65,
        unit: "%",
        comparison: "Year-over-year increase of 25%",
        description: "Significant portion of new business comes from satisfied client referrals.",
        project: "All Projects"
      }
    ]
  }
];

// Results Dashboard translations
export const resultsDashboardTranslations = {
  en: {
    heading: "Results Dashboard",
    subheading: "Measurable outcomes from selected projects",
    comparisonLabel: "Comparison",
    projectLabel: "Project",
    categoryFilterLabel: "Filter by Category"
  },
  ro: {
    heading: "Tablou de Rezultate",
    subheading: "Rezultate măsurabile din proiecte selectate",
    comparisonLabel: "Comparație",
    projectLabel: "Proiect",
    categoryFilterLabel: "Filtrează după Categorie"
  },
  fr: {
    heading: "Tableau de Résultats",
    subheading: "Résultats mesurables de projets sélectionnés",
    comparisonLabel: "Comparaison",
    projectLabel: "Projet",
    categoryFilterLabel: "Filtrer par Catégorie"
  },
  it: {
    heading: "Dashboard dei Risultati",
    subheading: "Risultati misurabili da progetti selezionati",
    comparisonLabel: "Confronto",
    projectLabel: "Progetto",
    categoryFilterLabel: "Filtra per Categoria"
  }
};