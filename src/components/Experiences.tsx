import { useState, useEffect } from "react";
import { experiences } from "../medias/databases/index-global.ts";
// import type { Experiences } from "../medias/databases/index-global.ts"; //todo revoir pour l'inclure  et deploy
import { useTranslation } from "react-i18next";

const Experiences = () => {
  const initialLang = document.documentElement.lang || "fr";
  const { t } = useTranslation();

  const [lang, setLang] = useState(initialLang);
  // const [selected, setSelected] = useState(experiences[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Observer les changements de l'attribut lang sur <html>
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newLang = document.documentElement.lang || "fr";
      setLang(newLang);
      setSelected(experiences[0]);
      setCurrentIndex(0);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);


  const itemsPerPage = 3 ;
  const maxIndex = Math.max(0, experiences.length - itemsPerPage);
  const lastIndex = experiences.length - 1;

  const visibleExperiences = experiences.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  const [selected, setSelected] = useState(visibleExperiences[0]);


  useEffect(() => {
  setSelected(visibleExperiences[0]);
}, [currentIndex]);

  // Scroll up (vers le haut)
  const scrollUp = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };
  // Scroll down (vers le bas)
  const scrollDown = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex + itemsPerPage -1 ));
  };
  // Aller au début
  const goToStart = () => setCurrentIndex(0);
  // Aller à la fin
  const goToEnd = () => setCurrentIndex(maxIndex + itemsPerPage -1);

  // Récupération du bon texte en fonction de la langue
  const getTitle = (
    exp: any // : Experiences
  ) => (lang === "en" ? exp.title_en || exp.title_fr : exp.title_fr);
  const getEtab = (
    exp: any // : Experiences
  ) =>
    lang === "en"
      ? exp.etablissement_en || exp.etablissement_fr
      : exp.etablissement_fr;
  const getPeriode = (
    exp: any // : Experiences
  ) => (lang === "en" ? exp.periode_en || exp.periode_fr : exp.periode_fr);
  const getDetails = (
    exp: any // : Experiences
  ) =>
    lang === "en"
      ? exp.details_en.filter(Boolean).length
        ? exp.details_en
        : exp.details_fr
      : exp.details_fr;


  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* ---------- Desktop Layout (xl+) ---------- */}
      <div className="hidden xl:block">
        <div className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden">
          <div className="flex min-h-[600px]">
            {/* Sidebar */}
            <div className="w-96 bg-gradient-to-b from-gray-50 to-gray-100/50 dark:from-slate-900/50 dark:to-slate-800/30 border-r border-gray-200/80 dark:border-slate-600/30">
              <div className="p-8 border-b border-gray-200/80 dark:border-slate-600/30 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    {t("Experience.title")}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                    {currentIndex + 1}-
                    {Math.min(currentIndex + itemsPerPage, experiences.length)}{" "}
                    sur {experiences.length}
                  </p>
                </div>

                {/* Contrôles de navigation */}
                <div className="flex flex-col space-y-2">
                  {/* Aller au début */}
                  <button
                    onClick={goToStart}
                    disabled={currentIndex === 0}
                    className="px-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600 dark:text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 11l5-5 5 5M7 17l5-5 5 5"
                      />
                    </svg>
                  </button>

                  {/* Scroll Up */}
                  <button
                    onClick={scrollUp}
                    disabled={currentIndex === 0}
                    className="py-1 px-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600 dark:text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>

                  {/* Scroll Down */}
                  <button
                    onClick={scrollDown}
                    disabled={currentIndex === lastIndex}
                    className="py-1 px-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600 dark:text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Aller à la fin */}
                  <button
                    onClick={goToEnd}
                    disabled={currentIndex >= maxIndex}
                    className=" px-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600 dark:text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 13l5 5 5-5M7 7l5 5 5-5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-3 h-full overflow-hidden">
                <div className="space-y-3 transition-all duration-300 ease-in-out">
                  {visibleExperiences.map((exp, i) => (
                    <button
                      key={currentIndex + i}
                      onClick={() => setSelected(exp)}
                      className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                        selected === exp
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transform scale-[1.02]"
                          : "bg-white/70 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg border border-gray-200/50 dark:border-slate-600/30 text-gray-800 dark:text-slate-200"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          selected !== exp
                            ? "bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10"
                            : ""
                        }`}
                      ></div>

                      <div className="relative">
                        <div className="font-semibold text-base mb-2 line-clamp-2">
                          {getTitle(exp)}
                        </div>
                        <div className="text-sm opacity-80 mb-1">
                          {getEtab(exp)}
                        </div>
                        <div className="text-xs opacity-70">
                          {getPeriode(exp)}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu principal */}
            <div className="flex-1 p-10 bg-gradient-to-br from-white to-gray-50/30 dark:from-slate-800/50 dark:to-slate-900/30">
              <div className="h-full flex flex-col max-w-3xl">
                <div className="mb-8">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-xl border border-blue-200/50 dark:border-blue-700/30">
                    {selected.type === "formation"
                      ? t("Experience.formation")
                      : t("Experience.pro")}
                  </span>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-100 leading-tight">
                      {getEtab(selected)}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {getPeriode(selected)}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/30 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-800/20">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-slate-200 mb-4">
                      {getTitle(selected)}
                    </h4>

                    <div className="space-y-4">
                      {getDetails(selected).map((detail: any, idx: any) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-4 group"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                          <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Tablet Layout (lg - xl) ---------- */}
      <div className="hidden lg:block xl:hidden">
        <div className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t("Experience.title")}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelected(exp)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${
                  selected === exp
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600/30 text-gray-800 dark:text-slate-200 hover:shadow-lg"
                }`}
              >
                <div className="text-sm font-semibold mb-2 line-clamp-1">
                  {getTitle(exp)}
                </div>
                <div className="text-xs opacity-80">{getEtab(exp)}</div>
                <div className="text-xs opacity-70 mt-1">{getPeriode(exp)}</div>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-slate-900/30 dark:to-slate-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-slate-600/30">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-xl">
                {selected.type === "formation"
                  ? t("Experience.formation")
                  : t("Experience.pro")}
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                  {getEtab(selected)}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {getPeriode(selected)}
                </p>
              </div>

              <h4 className="text-lg font-bold text-gray-800 dark:text-slate-200">
                {getTitle(selected)}
              </h4>

              <div className="space-y-3 mt-4">
                {getDetails(selected).map((detail: any, idx: any) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Layout (md - lg) ---------- */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t("Experience.title")}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelected(exp)}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  selected === exp
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                    : "bg-gray-50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600/30 text-gray-800 dark:text-slate-200"
                }`}
              >
                <div className="text-xs font-medium mb-1 line-clamp-2">
                  {getTitle(exp)}
                </div>
                <div className="text-xs opacity-75">
                  {getPeriode(exp).split("-")[0]}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-slate-900/30 rounded-xl p-6 border border-gray-200/50 dark:border-slate-600/30">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full uppercase tracking-wide">
                {selected.type === "formation"
                  ? t("Experience.formation")
                  : t("Experience.pro")}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100">
                {getEtab(selected)}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                {getPeriode(selected)}
              </p>
              <h4 className="text-base font-semibold text-gray-800 dark:text-slate-200">
                {getTitle(selected)}
              </h4>

              <div className="space-y-3 mt-4">
                {getDetails(selected).map((detail: any, idx: any) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Small Mobile Layout (sm - md) ---------- */}
      <div className="block md:hidden">
        <div className="space-y-6">
          <div className="px-2">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t("Experience.title")}
            </h2>
          </div>

          {/* Dropdown pour sélectionner l'expérience */}
          <div className="relative px-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 p-4 flex items-center justify-between text-left"
            >
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-slate-100 mb-1">
                  {getTitle(selected)}
                </div>
                <div className="text-sm text-gray-600 dark:text-slate-400">
               {getEtab(selected)}    {/* • {getPeriode(selected)} */}
                </div>
              </div>
              <div
                className={`transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Liste déroulante */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden">
                <div className="max-h-64 overflow-y-auto">
                  {experiences.map((exp, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelected(exp);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left p-4 border-b border-gray-100 dark:border-slate-700/50 last:border-b-0 transition-all duration-200 ${
                        selected === exp
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                          : "hover:bg-gray-50 dark:hover:bg-slate-700/50 text-gray-800 dark:text-slate-200"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-medium mb-1 line-clamp-1">
                            {getTitle(exp)}
                          </div>
                          <div className="text-sm opacity-80">
                            {getEtab(exp)}
                          </div>
                          <div className="text-xs opacity-70 mt-1">
                            {getPeriode(exp)}
                          </div>
                        </div>
                        {/* <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full uppercase tracking-wide ${
                            exp.type === "formation"
                              ? selected === exp
                                ? "bg-white/20 text-white"
                                : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                              : selected === exp
                              ? "bg-white/20 text-white"
                              : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                          }`}
                        >
                          {exp.type === "formation"
                            ? t("Experience.formation")
                            : t("Experience.pro")}
                        </span> */}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contenu de l'expérience sélectionnée */}
          <div className="px-2">
            <div className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 p-6 space-y-4">
              <div className="flex items-start justify-between">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full uppercase tracking-wide">
                  {selected.type === "formation"
                    ? t("Experience.formation")
                    : t("Experience.pro")}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100">
                  {getEtab(selected)}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {getPeriode(selected)}
                </p>
                <h4 className="text-base font-semibold text-gray-800 dark:text-slate-200">
                  {getTitle(selected)}
                </h4>
              </div>

              <div className="space-y-3">
                {getDetails(selected).map((detail: any, idx: any) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
