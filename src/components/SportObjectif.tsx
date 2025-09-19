import { useState, useEffect} from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// // import { sportobjectif_en } from "../medias/databases/index-en";
// // import { sportobjectif_fr } from "../medias/databases/index-fr";

import { sportobjectives } from "../medias/databases/index-global";
// todo :  mettre dans index global rajouter au mien

const SportObjectif = () => {
  const initialLang = document.documentElement.lang || "fr";
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();


  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sportobjectives.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [sportobjectives.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sportobjectives.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sportobjectives.length) % sportobjectives.length
    );
  };

  const getVisibleObjectives = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % sportobjectives.length;
      visible.push({ ...sportobjectives[index], index });
    }
    return visible;
  };

  return (
    <section className="py-4 px-6 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
            {t("Sport.myobjectif")}
          </h2>
          <div className="w-65 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-2xl mx-auto dark:text-slate-300">
            {t("Sport.myobjectiftxt")}
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
                  className={`group relative overflow-hidden transition-all duration-500 rounded-3xl ${
                    isCenter
                      ? "transform scale-105 z-10"
                      : "transform scale-95 opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${objective.color} rounded-3xl  opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Card Content */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 ${objective.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${objective.iconColor}`} />
                    </div>

                    {/* title_fr */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                      {initialLang === "fr"
                        ? objective.title_fr
                        : objective.title_en}
                    </h3>

                    {/* description_fr */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {initialLang === "fr"
                        ? objective.description_fr
                        : objective.description_en}
                    </p>

                    {/* Details */}
                    <p className="text-sm text-gray-500 italic">
                      {initialLang === "fr"
                        ? objective.details_fr
                        : objective.details_en}
                    </p>

                    {/* Progress Indicator (decorative) */}
                    <div className="mt-6">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className={`bg-gradient-to-r ${objective.color} h-1 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isCenter ? "75%" : "45%" }}
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
            {sportobjectives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
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
