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
    // Met à jour le tableau des expériences quand la langue change
    const observer = new MutationObserver(() => {
      const lang = document.documentElement.lang;
      const newExperiences = lang === "en" ? experiences_en : experiences_fr;
      setExperiences(newExperiences);
      setSelected(newExperiences[0]); // sélectionne la première expérience
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* lg: sidebar + content */}
      <div className="hidden lg:flex bg-gray-100 rounded-lg shadow-md">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-300 p-4 space-y-3 h-96 overflow-y-auto rounded-l-2xl">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setSelected(exp)}
              className={`w-full text-center p-2 rounded-md font-normal ${
                selected.etablissement === exp.etablissement &&
                selected.periode === exp.periode
                  ? "bg-gray-600 text-white"
                  : "hover:bg-gray-400"
              }`}
            >
              <span className="text-sm font-bold">{exp.titre}</span> <br />
              {exp.periode}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="w-3/4 p-6 flex flex-col justify-start bg-gray-200 rounded-r-2xl relative">
          <span className="absolute top-6 left-6 text-blue-500 font-semibold text-xl uppercase">
            {selected.type === "formation"
              ? t("Experience.formation")
              : t("Experience.pro")}
          </span>

          <div className="mt-10 text-center">
            <h3 className="text-3xl font-bold text-gray-800">
              {selected.etablissement}
            </h3>
            <p className="text-gray-500 mt-1">{selected.periode}</p>
            <p className="mt-3 font-semibold text-lg text-gray-700">
              {selected.titre}
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-left mx-auto max-w-xl text-gray-700">
              {selected.details.map((d, idx) => (
                <li key={idx} className="text-sm">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* md: grid avec boutons + contenu sélectionné */}
      <div className="hidden md:flex lg:hidden flex-col gap-4">
        {/* Grid boutons */}
        <div className="grid grid-cols-3 gap-2">
          {" "}
          {/* + de colonnes pour en mettre plus */}
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setSelected(exp)}
              className={`p-2 rounded-md shadow-md text-left text-xs font-medium transition ${
                selected.etablissement === exp.etablissement &&
                selected.periode === exp.periode
                  ? "bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <p className="font-semibold text-xs">{exp.periode}</p>
              <p className="truncate">{exp.titre}</p>
            </button>
          ))}
        </div>

        {/* Contenu affiché quand un bouton est sélectionné */}
        <div className="bg-gray-200 p-5 rounded-lg shadow-md ">
          {/* todo revoir agencement  */}
          <div className="text-blue-500 font-semibold text-xl uppercase">
            {selected.type == "formation"
              ? t("Experience.formation")
              : t("Experience.pro")}
          </div>
          <h3 className="text-xl font-bold">{selected.etablissement}</h3>
          <p className="text-gray-600">{selected.periode}</p>
          <p className="mt-1 font-semibold">{selected.titre}</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            {selected.details.map((d, idx) => (
              <li key={idx} className="text-sm">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* sm: colonne simple */}
      <div className="flex flex-col gap-4 md:hidden">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-gray-200 p-4 rounded-lg shadow-md space-y-2"
          >
            <div className="text-blue-500 font-semibold text-md uppercase">
              {selected.type == "formation"
                ? t("Experience.formation")
                : t("Experience.pro")}
            </div>
            <p className="font-semibold">{exp.etablissement}</p>
            <p className="text-gray-600">{exp.periode}</p>
            <p className="font-medium">{exp.titre}</p>
            {exp.details.map((d, idx) => (
              <p key={idx} className="text-sm">
                {d}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;
