// import React, { useEffect } from "react";
// import HeroSection from "../components/HeroSection.tsx";

// import DownloadSection from "../components/DownloadSection.tsx";

// const Contact: React.FC = () => {
//   useEffect(() => {
//     document.title = "TS - Contact";
//   }, []);

//   return (
//     <>
//       <HeroSection currentPage={"contact"} />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
//         <DownloadSection />
//       </div>
//     </>
//   );
// };

// export default Contact;

import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection.tsx";
import DownloadSection from "../components/DownloadSection.tsx";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  // Twitter,
  MessageCircle,
  Clock,
  Globe,
  Users,
  Briefcase,
  Trophy,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "TS - Contact";
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Professionnel",
      value: "terence.saramandif@email.com",
      description: "Pour toute demande professionnelle, sponsoring ou collaboration",
      action: "mailto:terence.saramandif@email.com",
      gradient: "from-blue-500 to-blue-600",
      available: "Réponse sous 24h"
    },
    {
      icon: MessageCircle,
      title: "Email Sport",
      value: "sport.terence@email.com", 
      description: "Questions liées au canoë-kayak, entraînements et compétitions",
      action: "mailto:sport.terence@email.com",
      gradient: "from-green-500 to-green-600",
      available: "Réponse sous 48h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 XX XX XX XX",
      description: "Disponible pour les appels urgents ou rendez-vous",
      action: "tel:+33600000000",
      gradient: "from-purple-500 to-purple-600",
      available: "Lun-Ven 9h-18h"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@terence_saramandif",
      url: "https://instagram.com/terence_saramandif",
      description: "Suivez mon quotidien sportif et professionnel",
      gradient: "from-pink-500 to-purple-600",
      stats: "2.5k abonnés"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      handle: "Terence Saramandif",
      url: "https://linkedin.com/in/terence-saramandif",
      description: "Mon parcours professionnel et mes projets",
      gradient: "from-blue-600 to-blue-700",
      stats: "500+ connexions"
    },
    // {
    //   icon: Twitter,
    //   name: "Twitter",
    //   handle: "@terence_s_kayak",
    //   url: "https://twitter.com/terence_s_kayak",
    //   description: "Actualités sport et tech en temps réel",
    //   gradient: "from-sky-400 to-sky-600",
    //   stats: "1.2k followers"
    // }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      title: "Localisation",
      value: "Pula, Istrie, Croatie",
      description: "Base actuelle pour mes entraînements"
    },
    {
      icon: Clock,
      title: "Timezone",
      value: "CET (UTC+1)",
      // description: "Heure de référence pour nos échanges"
      description: "Référence pour nos échanges"
    },
    {
      icon: Globe,
      title: "Langues",
      value: "Français, Anglais",
      description: "Parfaitement bilingue"
    }
  ];

  const collaborationTypes = [
    {
      icon: Briefcase,
      title: "Opportunités Professionnelles",
      description: "Projets tech, développement, consulting",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Trophy,
      title: "Sponsoring Sportif",
      description: "Partenariats, équipements, événements",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Interventions & Coaching",
      description: "Conférences, formations, mentorat",
      gradient: "from-purple-500 to-purple-600"
    }
  ];



  return (
    // <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
    <div className=" min-h-screen">
      <HeroSection currentPage={"contact"} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Informations Pratiques */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              Informations Pratiques
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickInfo.map((info, idx) => (
              <div key={idx} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl transform rotate-2"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-semibold">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        

        {/* Méthodes de Contact Principales */}
        {/* todo mettre les réseaux, alias mail ?  */}
        {/*  todo : message non sérieux s'abstenir pour le mail, revoir sur les compte pro ( youtuber/ streamer) */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              Comment me Joindre
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}></div>
                
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300 h-full">
                  <div className="text-center space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center`}>
                      <method.icon size={32} className="text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {method.description}
                      </p>
                    </div>

                    <div className={`bg-gradient-to-r ${method.gradient} bg-opacity-10 rounded-xl p-4`}>
                      <p className="font-bold text-gray-800 text-lg mb-1">
                        {method.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {method.available}
                      </p>
                    </div>

                    <a
                      href={method.action}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      Me Contacter
                      <ChevronRight className="ml-2" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Réseaux Sociaux */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              Suivez-moi sur les Réseaux
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300`}></div>
                
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-200 hover:shadow-3xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center flex-shrink-0`}>
                      <social.icon size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-800">
                          {social.name}
                        </h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {social.stats}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 font-medium mb-1">
                        {social.handle}
                      </p>
                      
                      <p className="text-gray-600 text-sm mb-3">
                        {social.description}
                      </p>
                      
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                      >
                        Suivre
                        <ExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types de Collaborations */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              Types de Collaborations
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTypes.map((collab, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${collab.gradient} rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300`}></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${collab.gradient} flex items-center justify-center`}>
                    <collab.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {collab.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {collab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Section Download - Repositionnée */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              Ressources et Documents
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <DownloadSection />
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Prêt à Collaborer ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Chaque projet est une nouvelle aventure. Discutons ensemble de la façon dont nous pouvons créer quelque chose d'exceptionnel !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:terence.saramandif@email.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2" size={20} />
                  Envoyez un Email
                </a>
                <a
                  href="https://linkedin.com/in/terence-saramandif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="mr-2" size={20} />
                  Connectons-nous
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;