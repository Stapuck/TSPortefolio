// import { useState, useEffect } from "react";

// import { experiences_fr } from "../medias/databases/index-fr.ts";
// import { experiences_en } from "../medias/databases/index-en.ts";
// import { useTranslation } from "react-i18next";

// const Experiences = () => {
//   const initialLang = document.documentElement.lang || "fr";
//   const { t } = useTranslation();

//   const [experiences, setExperiences] = useState(
//     initialLang === "en" ? experiences_en : experiences_fr
//   );
//   const [selected, setSelected] = useState(
//     initialLang === "en" ? experiences_en[0] : experiences_fr[0]
//   );

//   useEffect(() => {
//     // Met à jour le tableau des expériences quand la langue change
//     const observer = new MutationObserver(() => {
//       const lang = document.documentElement.lang;
//       const newExperiences = lang === "en" ? experiences_en : experiences_fr;
//       setExperiences(newExperiences);
//       setSelected(newExperiences[0]); // sélectionne la première expérience
//     });

//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["lang"],
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       {/* lg: sidebar + content */}
//       <div className="hidden lg:flex bg-gray-100 rounded-lg shadow-md">
//         {/* Sidebar */}
//         <div className="w-1/4 bg-gray-300 p-4 space-y-3 h-96 overflow-y-auto rounded-l-2xl">
//           {experiences.map((exp, i) => (
//             <button
//               key={i}
//               onClick={() => setSelected(exp)}
//               className={`w-full text-center p-2 rounded-md font-normal ${
//                 selected.etablissement === exp.etablissement &&
//                 selected.periode === exp.periode
//                   ? "bg-gray-600 text-white"
//                   : "hover:bg-gray-400"
//               }`}
//             >
//               <span className="text-sm font-bold">{exp.titre}</span> <br />
//               {exp.periode}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="w-3/4 p-6 flex flex-col justify-start bg-gray-200 rounded-r-2xl relative">
//           <span className="absolute top-6 left-6 text-teal-700 font-semibold text-xl uppercase">
//             {selected.type === "formation"
//               ? t("Experience.formation")
//               : t("Experience.pro")}
//           </span>

//           <div className="mt-10 text-center">
//             <h3 className="text-3xl font-bold text-gray-800">
//               {selected.etablissement}
//             </h3>
//             <p className="text-gray-500 mt-1">{selected.periode}</p>
//             <p className="mt-3 font-semibold text-lg text-gray-700">
//               {selected.titre}
//             </p>

//             <ul className="list-disc list-inside mt-4 space-y-2 text-left mx-auto max-w-xl text-gray-700">
//               {selected.details.map((d, idx) => (
//                 <li key={idx} className="text-sm">
//                   {d}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* md: grid avec boutons + contenu sélectionné */}
//       <div className="hidden md:flex lg:hidden flex-col gap-4">
//         {/* Grid boutons */}
//         <div className="grid grid-cols-3 gap-2">
//           {" "}
//           {/* + de colonnes pour en mettre plus */}
//           {experiences.map((exp, i) => (
//             <button
//               key={i}
//               onClick={() => setSelected(exp)}
//               className={`p-2 rounded-md shadow-md text-left text-xs font-medium transition ${
//                 selected.etablissement === exp.etablissement &&
//                 selected.periode === exp.periode
//                   ? "bg-gray-600 text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               <p className="font-semibold text-xs">{exp.periode}</p>
//               <p className="truncate">{exp.titre}</p>
//             </button>
//           ))}
//         </div>

//         {/* Contenu affiché quand un bouton est sélectionné */}
//         <div className="bg-gray-200 p-5 rounded-lg shadow-md ">
//           {/* todo revoir agencement  */}
//           <div className="text-blue-500 font-semibold text-xl uppercase">
//             {selected.type == "formation"
//               ? t("Experience.formation")
//               : t("Experience.pro")}
//           </div>
//           <h3 className="text-xl font-bold">{selected.etablissement}</h3>
//           <p className="text-gray-600">{selected.periode}</p>
//           <p className="mt-1 font-semibold">{selected.titre}</p>
//           <ul className="list-disc list-inside mt-3 space-y-1">
//             {selected.details.map((d, idx) => (
//               <li key={idx} className="text-sm">
//                 {d}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* sm: colonne simple */}
//       <div className="flex flex-col gap-4 md:hidden">
//         {experiences.map((exp, i) => (
//           <div
//             key={i}
//             className="bg-gray-200 p-4 rounded-lg shadow-md space-y-2"
//           >
//             <div className="text-blue-500 font-semibold text-md uppercase">
//               {selected.type == "formation"
//                 ? t("Experience.formation")
//                 : t("Experience.pro")}
//             </div>
//             <p className="font-semibold">{exp.etablissement}</p>
//             <p className="text-gray-600">{exp.periode}</p>
//             <p className="font-medium">{exp.titre}</p>
//             {exp.details.map((d, idx) => (
//               <p key={idx} className="text-sm">
//                 {d}
//               </p>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Experiences;


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
                  {t("Experience.title", "Expériences")}
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
            {t("Experience.title", "Expériences")}
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
            {t("Experience.title", "Expériences")}
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