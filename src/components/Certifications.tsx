import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description:
        "Architecture et déploiement d'applications sur AWS avec best practices.",
      link: "#",
    },
    {
      id: 2,
      title: "React Professional Certificate",
      issuer: "Meta",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
      description:
        "Maîtrise avancée de React, hooks, et développement d'applications modernes.",
      link: "#",
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      description:
        "Développement full-stack avec Node.js, Express, MongoDB et React.",
      link: "#",
    },
    {
      id: 4,
      title: "Kubernetes Administrator",
      issuer: "Linux Foundation",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      description:
        "Administration et orchestration de conteneurs avec Kubernetes.",
      link: "#",
    },
    // {
    //   id: 1,
    //   title_fr: "CCNA 1 Cisco certification",
    //   title_en: "",
    //   issuer_fr: "",
    //   issuer_en: "",
    //   date: "2023",
    //   image: "",
    //   description_fr: "",
    //   description_en: "",
    //   link: "#"
    // },
    // {
    //   id: 2,
    //   title_fr: "Cyber security Cisco 2023",
    //   title_en: "",
    //   issuer_fr: "",
    //   issuer_en: "",
    //   date: "2023",
    //   image: "",
    //   description_fr: "",
    //   description_en: "",
    //   link: "#"
    // },
    // {
    //   id: 3,
    //   title_fr: "certification Designer responsable",
    //   title_en: "",
    //   issuer_fr: "Green compagnon",
    //   issuer_en: "",
    //   date: "2024",
    //   image: "",
    //   description_fr: "",
    //   description_en: "",
    //   link: "#"
    // },
    // {
    //   id: 4,
    //   title_fr: "",
    //   title_en: "",
    //   issuer_fr: "Nasa",
    //   issuer_en: "Nasa",
    //   date: "2025",
    //   image: "",
    //   description_fr: "",
    //   description_en: "",
    //   link: "#"
    // },
    // {
    //   id: 5,
    //   title_fr: "",
    //   title_en: "",
    //   issuer_fr: "Nasa",
    //   issuer_en: "Nasa",
    //   date: "2025",
    //   image: "",
    //   description_fr: "",
    //   description_en: "",
    //   link: "#"
    // },
  ];

  // CCNA 1 Cisco certification // année ? 2022 ou 2023
  // Cyber security Cisco 2023
  // certification Designer responsable certification Green compagnon // 2023 ou 2024
  //  Nasa *2  2025 both

  // python to do
  // javascript

  return (
    <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 mt-8">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Mobile & Tablet: Horizontal Layout */}
          <div className="flex md:flex-col h-auto md:h-auto">
            {/* Image */}
            <div className="hidden sm:block relative w-28 md:w-full md:h-48 flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 duration-300 group-hover:scale-110 transform transition-transform"
              />
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white dark:bg-slate-800 p-1.5 md:p-2 rounded-full shadow-lg">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <div className="flex-1 pr-2">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>

                <p className="hidden sm:block text-gray-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">
                  {cert.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Certifications;
