import { useState } from "react";
import { useTranslation } from "react-i18next";

//  todo gerer les data ranger dans index global
// ou faire des index personaliser ?

const fakeProjects = [
  {
    id: 1,
    title_en: "E-Commerce Platform",
    title_fr: "E-Commerce Platform",
    subject_fr: "Plateforme de vente en ligne moderne",
    subject_en: "Plateforme de vente en ligne moderne",
    domain: "pro",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    description_fr:
      "Développement d'une plateforme e-commerce complète avec React, Node.js et MongoDB. Intégration de systèmes de paiement sécurisés et interface d'administration avancée.",
    description_en:
      "Développement d'une plateforme e-commerce complète avec React, Node.js et MongoDB. Intégration de systèmes de paiement sécurisés et interface d'administration avancée.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://demo-ecommerce.com",
    featured: true,
  },
  {
    id: 2,
    title_fr: "Task Management App",
    title_en: "Task Management App",
    subject_fr: "Application de gestion de tâches collaborative",
    subject_en: "Application de gestion de tâches collaborative",
    domain: "perso",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    description_fr:
      "Application web pour la gestion de projets en équipe avec fonctionnalités en temps réel, système de notifications et tableaux de bord interactifs.",
    description_en:
      "Application web pour la gestion de projets en équipe avec fonctionnalités en temps réel, système de notifications et tableaux de bord interactifs.",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager-demo.com",
    featured: false,
  },
  {
    id: 3,
    title_fr: "Portfolio Website",
    title_en: "Portfolio Website",
    subject_fr: "Site portfolio personnel responsive",
    subject_en: "Site portfolio personnel responsive",
    domain: "perso",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    description_fr:
      "Site portfolio moderne avec animations fluides, optimisation SEO et gestion multilingue. Intégration CMS headless pour la gestion de contenu.",
    description_en:
      "Site portfolio moderne avec animations fluides, optimisation SEO et gestion multilingue. Intégration CMS headless pour la gestion de contenu.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
    github: "https://github.com/username/portfolio",
    demo: "https://monportfolio.com",
    featured: true,
  },
  {
    id: 4,
    title_fr: "Weather Dashboard",
    title_en: "Weather Dashboard",
    subject_fr: "Dashboard météorologique interactif",
    subject_en: "Dashboard météorologique interactif",
    domain: "perso",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    description_fr:
      "Tableau de bord météorologique avec cartes interactives, prévisions détaillées et système d'alertes personnalisables.",
    description_en:
      "Tableau de bord météorologique avec cartes interactives, prévisions détaillées et système d'alertes personnalisables.",
    technologies: ["React", "D3.js", "OpenWeather API", "MapBox"],
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather-dashboard-demo.com",
    featured: false,
  },
  {
    id: 5,
    title_fr: "CRM System",
    title_en: "CRM System",
    subject_fr: "Système de gestion client",
    subject_en: "Système de gestion client",
    domain: "pro",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    description_fr:
      "Système CRM complet pour PME avec gestion des leads, suivi commercial, facturation automatisée et reporting avancé.",
    description_en:
      "Système CRM complet pour PME avec gestion des leads, suivi commercial, facturation automatisée et reporting avancé.",
    technologies: ["Angular", "NestJS", "MySQL", "Redis", "AWS"],
    github: "https://github.com/username/crm-system",
    demo: null,
    featured: true,
  },
  {
    id: 6,
    title_fr: "Mobile Fitness App",
    title_en: "Mobile Fitness App",
    subject_fr: "Application mobile de fitness",
    subject_en: "Application mobile de fitness",
    domain: "perso",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description_fr:
      "App mobile cross-platform pour le suivi d'entraînements avec programmes personnalisés, statistiques détaillées et communauté intégrée.",
    description_en:
      "App mobile cross-platform pour le suivi d'entraînements avec programmes personnalisés, statistiques détaillées et communauté intégrée.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com/username/fitness-app",
    demo: null,
    featured: false,
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projects] = useState(fakeProjects);
  const initialLang = document.documentElement.lang || "fr";


  const categories = [
    { id: "all", label: t("Pro.allproject") },
    { id: "pro", label: t("Pro.projectpro") },
    { id: "perso", label: t("Pro.projectperso") },
    { id: "featured", label: t("Pro.featured") },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "featured") return project.featured;
    return project.domain === selectedCategory;
  });

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t("Pro.project")}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t("Pro.projecttxt")}
        </p>
      </div>

      {/* Filtres */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48 bg-gray-100">
              <img
                src={project.image}
                alt={initialLang === "fr" ? project.title_fr : project.title_en}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Badge domaine */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.domain === "pro"
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {project.domain === "pro" ? "Professionnel" : "Personnel"}
                </span>
              </div>

              {/* Badge featured */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              )}

              {/* Overlay avec liens */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {initialLang === "fr" ? project.title_fr : project.title_en}
              </h3>

              <p className="text-sm text-blue-600 font-medium mb-3">
                {initialLang === "fr" ? project.subject_fr : project.subject_en}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {initialLang === "fr" ? project.description_fr : project.description_en}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg font-medium">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucun projet */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-gray-500">
            {t('Pro.noproject')}
          </p>
        </div>
      )}

      {/* Statistiques des projets */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              {projects.length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {t('Pro.projectnumber')}
              
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
              {projects.filter((p) => p.domain === "pro").length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {t('Pro.projectpro')}s
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
              {projects.filter((p) => p.domain === "perso").length}
            </div>
            <div className="text-sm text-gray-600 font-medium">{t('Pro.projectperso')}s</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
              {projects.filter((p) => p.featured).length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
               {t('Pro.featuredstat')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
