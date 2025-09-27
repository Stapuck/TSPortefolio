import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sportobjectives } from "../medias/databases/index-global";

const SportObjectif = () => {
  const initialLang = document.documentElement.lang || "fr";
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  // Auto-rotate slides 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sportobjectives.length);
    }, 5000);
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
    <section className="py-4 px-6 mb-16 bg-sky-100 dark:bg-sky-900 transition-colors duration-300 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white transition-colors duration-300">
            {t("Sport.myobjectif")}
          </h2>
          <div className="w-65 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-2xl mx-auto dark:text-slate-300 transition-colors duration-300">
            {t("Sport.myobjectiftxt")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Cachés sur sm, visibles sur md+ */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300 hover:scale-110 hidden md:block lg:block"
            aria-label="Objectif précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-slate-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300 hover:scale-110 hidden md:block lg:block"
            aria-label="Objectif suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-slate-300" />
          </button>

          {/* Cards Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4 md:px-8 lg:px-12">
            {/* Sur sm: affiche seulement la carte courante */}
            {/* Sur md: affiche 2 cartes */}
            {/* Sur lg: affiche 3 cartes (comportement actuel) */}
            {getVisibleObjectives().map((objective, displayIndex) => {
              const Icon = objective.icon;
              const isCenter = displayIndex === 1;

              // Logic d'affichage responsive
              const shouldShow =
                displayIndex === 0 || // Toujours afficher la première carte
                (displayIndex === 1 && window.innerWidth >= 768) || // 2ème carte sur md+
                (displayIndex === 2 && window.innerWidth >= 1024); // 3ème carte sur lg+

              return (
                <div
                  key={objective.index}
                  className={`
                  group relative overflow-hidden transition-all duration-500 rounded-3xl  
                  ${!shouldShow ? "hidden" : ""} 
                  sm:scale-100 
                  md:${ displayIndex === 0 ? "scale-105 z-10" : "scale-95 opacity-65 hover:opacity-100"}
                  lg:${ isCenter ? "scale-105 z-10" : "scale-95 opacity-75 hover:opacity-100"}`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${objective.color} rounded-3xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Card Content */}
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 dark:hover:shadow-slate-900/70 transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 sm:p-4 ${objective.bgColor} dark:opacity-90 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${objective.iconColor}`}
                      />
                    </div>

                    {/* title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 group-hover:text-gray-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                      {initialLang === "fr"
                        ? objective.title_fr
                        : objective.title_en}
                    </h3>

                    {/* description*/}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed transition-colors duration-300">
                      {initialLang === "fr"
                        ? objective.description_fr
                        : objective.description_en}
                    </p>

                    {/* Details */}
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 italic transition-colors duration-300">
                      {initialLang === "fr"
                        ? objective.details_fr
                        : objective.details_en}
                    </p>

                    {/* Progress Indicator (decorative) */}
                    <div className="mt-4 sm:mt-6">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1 transition-colors duration-300">
                        <div
                          className={`bg-gradient-to-r ${objective.color} h-1 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width:
                              window.innerWidth < 768
                                ? "75%" // Sur sm, toujours 75%
                                : window.innerWidth < 1024
                                ? displayIndex === 0
                                  ? "75%"
                                  : "45%"
                                : isCenter
                                ? "75%"
                                : "45%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation tactile pour sm */}
          <div className="flex justify-center mt-6 space-x-4 md:hidden">
            <button
              onClick={prevSlide}
              className="p-2 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300"
              aria-label="Objectif précédent"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-slate-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300"
              aria-label="Objectif suivant"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-slate-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {sportobjectives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 dark:bg-blue-500 scale-110"
                    : "bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500"
                }`}
                aria-label={`${t("Sport.goto")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportObjectif;
