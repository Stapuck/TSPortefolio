// // import { sportobjectif_en } from "../medias/databases/index-en";
// // import { sportobjectif_fr } from "../medias/databases/index-fr";


// const SportObjectif = () => {
// // const initialLang = document.documentElement.lang || "fr";

// // const sportobjectif = (initialLang === "fr" ? sportobjectif_fr : sportobjectif_en)
// //  


// return (
//     <div className="grid md:grid-cols-3 gap-6 mt-6">
//       {/* todo : mettre data dans index-fr et index-en  */}
//       {/* todo : slider avec texte dans database et 3 afficher sur les 5 qui tourne, tourne doucement. comme louis sur son site web pour Karlo.  */}

//       <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
//         <h3 className="font-semibold text-lg mb-2">World Championship 2026</h3>
//         <p>Objectif: Top 10 mondial et qualification pour la finale.</p>
//       </div>
//       <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
//         <h3 className="font-semibold text-lg mb-2">Youth Training Program</h3>
//         <p>Lancer un programme pour former les jeunes kayakistes.</p>
//       </div>
//       <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
//         <h3 className="font-semibold text-lg mb-2">
//           Eco-friendly Competitions
//         </h3>
//         <p>
//           Participer et promouvoir des événements respectueux de
//           l’environnement.
//         </p>
//       </div>

//       {/* coach TIP, developpement en afrique, objectif sport : JO LA, Gagner une coupe du monde.  */}
//     </div>
//   );
// };

// export default SportObjectif;

// import { useState, useEffect } from "react";
import { useState } from "react";
import { Target, Trophy, Users, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// // import { sportobjectif_en } from "../medias/databases/index-en";
// // import { sportobjectif_fr } from "../medias/databases/index-fr";


const SportObjectif = () => {
  const initialLang = document.documentElement.lang || "fr";
  const [currentSlide, setCurrentSlide] = useState(0);
  const {t} = useTranslation();

  // todo :  mettre dans index global rajouter au mien 
  const objectives = [
    {
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title_fr: "World Championship 2026",
      title_en: "World Championship 2026",
      description_fr: "Objectif: Top 10 mondial et qualification pour la finale.",
      description_en: "Objectif: Top 10 mondial et qualification pour la finale.",
      details_fr: "Me hisser parmi les meilleurs mondiaux et décrocher une place en finale",
      details_en: "Me hisser parmi les meilleurs mondiaux et décrocher une place en finale"
    },
    {
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title_fr: "Youth Training Program",
      title_en: "Youth Training Program",
      description_fr: "Lancer un programme pour former les jeunes kayakistes.",
      description_en: "Lancer un programme pour former les jeunes kayakistes.",
      details_fr: "Transmettre ma passion et développer la relève du canoë slalom",
      details_en: "Transmettre ma passion et développer la relève du canoë slalom"
    },
    {
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title_fr: "Eco-friendly Competitions",
      title_en: "Eco-friendly Competitions",
      description_fr: "Participer et promouvoir des événements respectueux de l'environnement.",
      description_en: "Participer et promouvoir des événements respectueux de l'environnement.",
      details_fr: "Allier performance sportive et respect de notre terrain de jeu : la nature",
      details_en: "Allier performance sportive et respect de notre terrain de jeu : la nature"
    },
    {
      icon: Target,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title_fr: "Coaching Development",
      title_en: "Coaching Development",
      description_fr: "Développer mes compétences d'entraîneur et partager mon expérience.",
      description_en: "Développer mes compétences d'entraîneur et partager mon expérience.",
      details_fr: "Former la prochaine génération d'athlètes avec une approche moderne",
      details_en: "Former la prochaine génération d'athlètes avec une approche moderne",
    },
    {
      icon: Trophy,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      title_fr: "African Development",
      title_en: "African Development",
      description_fr: "Contribuer au développement du canoë slalom en Afrique.",
      description_en: "Contribuer au développement du canoë slalom en Afrique.",
      details_fr: "Ouvrir de nouveaux horizons et démocratiser notre sport",
      details_en: "Ouvrir de nouveaux horizons et démocratiser notre sport"
    }
  ];

  // Auto-rotate slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % objectives.length);
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, [objectives.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % objectives.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + objectives.length) % objectives.length);
  };

  const getVisibleObjectives = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % objectives.length;
      visible.push({ ...objectives[index], index });
    }
    return visible;
  };

  return (
    <section className="py-4 px-6 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('Sport.myobjectif')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('Sport.myobjectiftxt')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Objectif précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Objectif suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-12">
            {getVisibleObjectives().map((objective, displayIndex) => {
              const Icon = objective.icon;
              const isCenter = displayIndex === 1;
              
              return (
                <div
                  key={objective.index}
                  className={`group relative overflow-hidden transition-all duration-500 ${
                    isCenter 
                      ? 'transform scale-105 z-10' 
                      : 'transform scale-95 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Gradient Background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  {/* Card Content */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div className={`inline-flex p-4 ${objective.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${objective.iconColor}`} />
                    </div>

                    {/* title_fr */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                      {initialLang === "fr" ? objective.title_fr : objective.title_en}
                    </h3>

                    {/* description_fr */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {initialLang === "fr" ? objective.description_fr : objective.description_en}
                    </p>

                    {/* Details */}
                    <p className="text-sm text-gray-500 italic">
                      {initialLang === "fr" ? objective.details_fr : objective.details_en}
                    </p>

                    {/* Progress Indicator (decorative) */}
                    <div className="mt-6">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div 
                          className={`bg-gradient-to-r ${objective.color} h-1 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isCenter ? '75%' : '45%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {objectives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à l'objectif ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">2026</div>
            <div className="text-gray-600">Prochains Mondiaux</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600">Projets en cours</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-gray-600">Motivation</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SportObjectif;