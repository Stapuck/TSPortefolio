import { useState, useEffect } from "react";
import { experiences_fr } from "../medias/databases/index-fr.ts";
import { experiences_en } from "../medias/databases/index-en.ts";
import { useTranslation } from "react-i18next";

const Experiences = () => {
  const initialLang = document.documentElement.lang || "fr";
  const { t } = useTranslation();

  const [experiences, setExperiences] = useState(
    initialLang === "en" ? experiences_en : experiences_fr
  );
  const [selected, setSelected] = useState(
    initialLang === "en" ? experiences_en[0] : experiences_fr[0]
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const lang = document.documentElement.lang;
      const newExperiences = lang === "en" ? experiences_en : experiences_fr;
      setExperiences(newExperiences);
      setSelected(newExperiences[0]);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Desktop Layout (xl+) */}
      <div className="hidden xl:block">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-80 bg-gray-50 border-r border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {t("Experience.title")}
                </h2>
              </div>
              <div className="p-4 space-y-2 h-full overflow-y-auto">
                {experiences.map((exp, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(exp)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selected.etablissement === exp.etablissement &&
                      selected.periode === exp.periode
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200"
                    }`}
                  >
                    <div className="font-medium text-sm mb-1">{exp.titre}</div>
                    <div className="text-xs opacity-75">{exp.periode}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full uppercase tracking-wide">
                    {selected.type === "formation"
                      ? t("Experience.formation")
                      : t("Experience.pro")}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selected.etablissement}
                    </h3>
                    <p className="text-gray-500 font-medium">{selected.periode}</p>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800">
                    {selected.titre}
                  </h4>

                  <div className="space-y-3">
                    {selected.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (lg-xl) */}
      <div className="hidden lg:block xl:hidden">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t("Experience.title", "Expériences")}
          </h2>
          
          {/* Grid buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelected(exp)}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  selected.etablissement === exp.etablissement &&
                  selected.periode === exp.periode
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <div className="text-sm font-medium mb-1 line-clamp-1">{exp.titre}</div>
                <div className="text-xs opacity-75">{exp.periode}</div>
              </button>
            ))}
          </div>

          {/* Selected content */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full uppercase tracking-wide">
                {selected.type === "formation"
                  ? t("Experience.formation")
                  : t("Experience.pro")}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selected.etablissement}</h3>
                <p className="text-gray-500 font-medium">{selected.periode}</p>
              </div>

              <h4 className="text-lg font-semibold text-gray-800">{selected.titre}</h4>

              <div className="space-y-2">
                {selected.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (md-lg) */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t("Experience.title")}
          </h2>
          
          {/* Compact grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelected(exp)}
                className={`p-3 rounded-lg text-left transition-all duration-200 ${
                  selected.etablissement === exp.etablissement &&
                  selected.periode === exp.periode
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <div className="text-xs font-medium mb-1 line-clamp-2">{exp.titre}</div>
                <div className="text-xs opacity-75">{exp.periode.split(' - ')[0]}</div>
              </button>
            ))}
          </div>

          {/* Selected content */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="mb-3">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full uppercase tracking-wide">
                {selected.type === "formation"
                  ? t("Experience.formation")
                  : t("Experience.pro")}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{selected.etablissement}</h3>
              <p className="text-gray-500 text-sm font-medium">{selected.periode}</p>
              <h4 className="text-base font-semibold text-gray-800">{selected.titre}</h4>

              <div className="space-y-2 mt-3">
                {selected.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Mobile Layout (sm-md) */}
      <div className="block md:hidden">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 px-1">
            {t("Experience.title")}
          </h2>
          
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-5 space-y-3"
            >
              <div className="flex items-start justify-between">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full uppercase tracking-wide">
                  {exp.type === "formation"
                    ? t("Experience.formation")
                    : t("Experience.pro")}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">{exp.etablissement}</h3>
                <p className="text-gray-500 text-sm font-medium">{exp.periode}</p>
                <h4 className="text-base font-semibold text-gray-800">{exp.titre}</h4>
              </div>

              <div className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
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