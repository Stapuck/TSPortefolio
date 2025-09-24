import { useState, useEffect } from "react";
import { experiences, } from "../medias/databases/index-global.ts";
// import type { Experiences } from "../medias/databases/index-global.ts"; //todo revoir pour l'inclure  et deploy
import { useTranslation } from "react-i18next";

const Experiences = () => {
  // Langue initiale prise depuis <html lang="">
  const initialLang = document.documentElement.lang || "fr";
  const { t } = useTranslation();

  // état pour la langue courante
  const [lang, setLang] = useState(initialLang);
  // état pour l'expérience sélectionnée
  const [selected, setSelected] = useState(experiences[0]);

  // Observer les changements de l’attribut lang sur <html>
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newLang = document.documentElement.lang || "fr";
      setLang(newLang);
      setSelected(experiences[0]);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);

  // Récupération du bon texte en fonction de la langue
  const getTitle = (exp : any) => // : Experiences
    lang === "en" ? exp.title_en || exp.title_fr : exp.title_fr;
  const getEtab = (exp : any) =>// : Experiences
    lang === "en" ? exp.etablissement_en || exp.etablissement_fr : exp.etablissement_fr;
  const getPeriode = (exp : any) =>// : Experiences
    lang === "en" ? exp.periode_en || exp.periode_fr : exp.periode_fr;
  const getDetails = (exp : any) =>// : Experiences
    lang === "en"
      ? exp.details_en.filter(Boolean).length
        ? exp.details_en
        : exp.details_fr
      : exp.details_fr;

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="hidden xl:block shadow-lg">
        <div className="bg-white dark:bg-sky-900 rounded-2xl shadow-lg border border-gray-100 dark:border-sky-800 overflow-hidden">
          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-80 bg-gray-50 dark:bg-sky-800 border-r border-gray-200 dark:border-sky-700">
              <div className="p-6 border-b border-gray-200 dark:border-sky-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t("Experience.title")}
                </h2>
              </div>
              <div className="p-4 space-y-2 h-full overflow-y-auto custom-scrollbar">
                {experiences.map((exp, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(exp)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selected === exp
                        ? "bg-blue-800/80 text-white shadow-md"
                        : "hover:bg-white dark:hover:bg-sky-700 hover:shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-sky-600 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    <div className="font-medium text-sm mb-1">{getTitle(exp)}</div>
                    <div className="text-xs opacity-75">{getPeriode(exp)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contenu */}
            <div className="flex-1 p-8 bg-white dark:bg-sky-900">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-800/80 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full uppercase tracking-wide">
                    {selected.type === "formation"
                      ? t("Experience.formation")
                      : t("Experience.pro")}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {getEtab(selected)}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 font-medium">
                      {getPeriode(selected)}
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {getTitle(selected)}
                  </h4>

                  <div className="space-y-3">
                    {getDetails(selected).map((detail : any , idx : any) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
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
      {/* ---------- Tablet Layout (lg - xl) ---------- */}
      <div className="hidden lg:block xl:hidden">
        <div className="bg-white dark:bg-sky-900 rounded-2xl shadow-lg border border-gray-100 dark:border-sky-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t("Experience.title")}
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelected(exp)}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  selected === exp
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-50 dark:bg-sky-800 hover:bg-gray-100 dark:hover:bg-sky-700 border border-gray-200 dark:border-sky-700 text-gray-800 dark:text-gray-200"
                }`}
              >
                <div className="text-sm font-medium mb-1 line-clamp-1">
                  {getTitle(exp)}
                </div>
                <div className="text-xs opacity-75">{getPeriode(exp)}</div>
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-sky-800 rounded-xl p-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full uppercase tracking-wide">
                {selected.type === "formation"
                  ? t("Experience.formation")
                  : t("Experience.pro")}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {getEtab(selected)}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 font-medium">
                  {getPeriode(selected)}
                </p>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {getTitle(selected)}
              </h4>

              <div className="space-y-2">
                {getDetails(selected).map((detail : any, idx : any) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
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
        <div className="bg-white dark:bg-sky-900 rounded-2xl shadow-lg border border-gray-100 dark:border-sky-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t("Experience.title")}
          </h2>

          <div className="grid grid-cols-3 gap-2 mb-6">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelected(exp)}
                className={`p-3 rounded-lg text-left transition-all duration-200 ${
                  selected === exp
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 dark:bg-sky-800 hover:bg-gray-100 dark:hover:bg-sky-700 border border-gray-200 dark:border-sky-700 text-gray-800 dark:text-gray-200"
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

          <div className="bg-gray-50 dark:bg-sky-800 rounded-xl p-5">
            <div className="mb-3">
              <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full uppercase tracking-wide">
                {selected.type === "formation"
                  ? t("Experience.formation")
                  : t("Experience.pro")}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {getEtab(selected)}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm font-medium">
                {getPeriode(selected)}
              </p>
              <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {getTitle(selected)}
              </h4>

              <div className="space-y-2 mt-3">
                {getDetails(selected).map((detail : any, idx : any) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
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
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white px-1">
            {t("Experience.title")}
          </h2>

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white dark:bg-sky-900 rounded-xl shadow-md border border-gray-100 dark:border-sky-800 p-5 space-y-3"
            >
              <div className="flex items-start justify-between">
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full uppercase tracking-wide">
                  {exp.type === "formation"
                    ? t("Experience.formation")
                    : t("Experience.pro")}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {getEtab(exp)}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm font-medium">
                  {getPeriode(exp)}
                </p>
                <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                  {getTitle(exp)}
                </h4>
              </div>

              <div className="space-y-2">
                {getDetails(exp).map((detail : any, idx : any) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;