// import { Link } from "react-router-dom";
// import { Kayak, Code, Home } from "lucide-react";
// import { useTranslation } from "react-i18next";

// export default function NotFound() {
//    const { t } = useTranslation();

//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-50">
//       <div className="text-center space-y-6">
//         {/* Titre principal */}
//         <h1 className="text-7xl font-extrabold text-blue-500">404</h1>

//         {/* Illustration symbolique */}
//         <div className="flex justify-center gap-6 text-blue-400">
//           <Kayak size={64} />
//           <Code size={64} />
//         </div>

//         {/* Texte d’accroche */}
//         <p className="text-lg text-gray-600 max-w-xl mx-auto">
//           {t('NotFound.oups')}
//           <br />
//         </p>

//         {/* Bouton retour */}
//         <Link
//           to="/"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-xl shadow hover:bg-blue-600 transition"
//         >
//           <Home size={20} />
//           {t('NotFound.retour')}
//         </Link>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Kayak, Code, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "TS - 404";
    window.scrollTo(0, 0);
  }, []);

  return (
    // <section className="relative min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 bg-gradient-to-b from-red-200 via-slate-300 to-gray-100 dark:from-red-300 dark:via-sky-700 dark:to-sky-950">
    <section className="relative min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-sky-800 dark:to-sky-950">
      {/* Particules de fond subtiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/15 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
            404
          </h1>
        </div>

        {/* Icônes flottantes */}
        <div className="flex justify-center items-center gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl transform rotate-4 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300">
              <Kayak size={48} className="text-blue-600" />
            </div>
          </div>

          {/* <div className="text-4xl text-gray-500 dark:text-gray-300 font-light">+</div> */}

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl transform -rotate-4 group-hover:-rotate-12 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300">
              <Code size={48} className="text-purple-600" />
            </div>
          </div>
        </div>

        {/* Message d'erreur */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200">
            {t("NotFound.title")}
          </h2>
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-white/50 dark:bg-white/80 backdrop-blur-sm rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white/90 dark:bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
              <p className="text-gray-600 leading-relaxed">
                {t("NotFound.oups")}
              </p>
            </div>
          </div>
        </div>

        {/* Bouton retour stylisé */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white text-lg font-medium rounded-xl shadow hover:bg-blue-600 dark:hover:bg-blue-800 transition"
          >
            <Home size={20} />
            {t("NotFound.retour")}
          </Link>
        </div>

        {/* Navigation rapide */}
        <div className="pt-1">
          <p className="text-gray-500 mb-4 dark:text-gray-100">
            {" "}
            {t("NotFound.or")} :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/sport"
              className="px-4 py-2 bg-white backdrop-blur-sm border border-white/40 rounded-xl text-gray-700 hover:bg-slate-200 dark:bg-slate-200 dark:hover:bg-slate-400 transition-all duration-300 text-sm font-medium"
            >
              Sport
            </Link>
            <Link
              to="/pro"
              className="px-4 py-2 bg-white backdrop-blur-sm border border-white/40 rounded-xl text-gray-700 hover:bg-slate-200 dark:bg-slate-200 dark:hover:bg-slate-400 transition-all duration-300 text-sm font-medium"
            >
              Pro
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 bg-white backdrop-blur-sm border border-white/40 rounded-xl text-gray-700 hover:bg-slate-200 dark:bg-slate-200 dark:hover:bg-slate-400 transition-all duration-300 text-sm font-medium"
            >
              Media
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-white backdrop-blur-sm border border-white/40 rounded-xl text-gray-700 hover:bg-slate-200 dark:bg-slate-200 dark:hover:bg-slate-400 transition-all duration-300 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
