import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description: "Architecture et déploiement d'applications sur AWS avec best practices.",
      link: "#"
    },
    {
      id: 2,
      title: "React Professional Certificate",
      issuer: "Meta",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
      description: "Maîtrise avancée de React, hooks, et développement d'applications modernes.",
      link: "#"
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      description: "Développement full-stack avec Node.js, Express, MongoDB et React.",
      link: "#"
    },
    {
      id: 4,
      title: "Kubernetes Administrator",
      issuer: "Linux Foundation",
      date: "2024",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      description: "Administration et orchestration de conteneurs avec Kubernetes.",
      link: "#"
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
    //   title_fr: "certification Designer responsable  ",
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
    //   title_fr: "Nasa 1",
    //   title_en: "",
    //   issuer_fr: "",
    //   issuer_en: "",
    //   date: "2025",
    //   image: "",
    //   description_fr: "",
    //   description_en: "",
    //   link: "#"
    // },
    // {
    //   id: 5,
    //   title_fr: "NAsa 2",
    //   title_en: "",
    //   issuer_fr: "",
    //   issuer_en: "",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 duration-300 group-hover:scale-110 transform transition-transform"
            />
            <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {cert.issuer}
                </p>
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                {cert.date}
              </span>
            </div>

            <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              {cert.description}
            </p>

            {/* Link */}
            <a
              href={cert.link}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group/link transition-colors"
            >
              Voir la certification
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;