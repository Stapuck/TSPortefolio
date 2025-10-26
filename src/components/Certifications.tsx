import { Award } from "lucide-react";
import { certifications } from "../medias/index-global";


const Certifications = () => {
  const initialLang = localStorage.getItem("lang") || "fr";

  return (
    <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 mt-8">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Mobile & Tablet: Horizontal Layout */}
          <div className="flex md:flex-col h-auto md:h-auto">
            {/* Image */}
            <div className="hidden sm:block relative w-28 md:w-full md:h-48 flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
              <img
                src={cert.image}
                alt={initialLang === "fr" ? cert.title_fr : cert.title_en}
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 duration-300 group-hover:scale-110 transform transition-transform"
              />
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white dark:bg-slate-800 p-1.5 md:p-2 rounded-full shadow-lg">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <div className="flex-1 pr-2">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {initialLang === "fr" ? cert.title_fr : cert.title_en}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
                      {initialLang === "fr" ? cert.issuer_fr : cert.issuer_en}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>

                <p className="hidden sm:block text-gray-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">
                  {initialLang === "fr"
                    ? cert.description_fr
                    : cert.description_en}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Certifications;
