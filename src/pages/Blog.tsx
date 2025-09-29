import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection.tsx";
import { articles } from "../medias/databases/index-global.ts";
import { useTranslation } from "react-i18next";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Blog() {
  const { t } = useTranslation();
  const lg = document.documentElement.lang || "fr";

  useEffect(() => {
    document.title = "TS - Blog";
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  // const [specialnews, setSpecialNews] = useState(false);
  const specialnews = false;

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date_en).getTime() - new Date(a.date_en).getTime()
  );

  const filtered = sortedArticles.filter(
    (a) => filter === "all" || a.type === filter
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginatedArticles = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const medias = articles.filter((e) => e.type === "media");
  const blogs = articles.filter((e) => e.type === "article");

  // Filtrer uniquement les articles
  const articlesOnly = sortedArticles.filter((item) => item.type === "article");

  // Récupérer le dernier article (si au moins 1 existe)
  const lastArticle = articlesOnly[0];

  // todo : revoir darkmode ( red & green)
  return (
    <div className="text-gray-800">
      <HeroSection currentPage={"blog"} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {/* Intro */}
        <section className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent dark:text-white">
              {t("Blog.blog_welcome")}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed dark:text-slate-200">
              {t("Blog.txtintro")}
            </p>
          </div>
        </section>

        {/* Special News */}
        {specialnews && (
          <section className="space-y-8 bg-green-100 dark:bg-green-900 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-center dark:text-slate-100">
              {t("Blog.specialnews")}{" "}
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/images/special-news.jpg"
                  // revoir en fonction du besoin
                  alt="News spéciale"
                  className="w-full md:w-1/3 h-48 object-cover rounded-2xl shadow"
                />
                <div className="md:w-2/3 space-y-2">
                  <h3 className="text-xl font-semibold dark:text-gray-100">
                    {t("Blog.important")}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-100">
                    {t("Blog.importanttxt")}
                  </p>
                  {/* revoir en fonction du besoin  */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    {t("Blog.readmore")}
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Top Articles Sportifs */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("Blog.topsportarticle")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {articles
              .filter((a) => a.top_article)
              .sort((a, b) => {
                const dateA = new Date(a.date_en).getTime();
                const dateB = new Date(b.date_en).getTime();
                return dateB - dateA;
              })
              .slice(0, 4)
              .map((a, idx) => (
                <div
                  key={a.id}
                  className={`group relative ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-80"></div>

                  <div className="relative bg-white dark:bg-red-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-300">
                    <div
                      className={`flex flex-col lg:flex-row items-center gap-8 ${
                        idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="lg:w-1/2">
                        <div className="relative group/img">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-3 group-hover/img:rotate-6 transition-transform duration-300"></div>
                          <img
                            src={a.image}
                            alt={lg === "fr" ? a.title_fr : a.title_en}
                            className="relative w-full h-72 object-cover rounded-2xl shadow-xl"
                          />
                        </div>
                      </div>
                      <div className="lg:w-1/2 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {lg === "fr" ? a.title_fr : a.title_en}
                        </h3>
                        <div className="flex items-center text-gray-500 dark:text-gray-300">
                          <Calendar size={16} className="mr-2" />
                          <p className="text-sm">
                            {lg === "fr" ? a.date_fr : a.date_en}
                          </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed dark:text-gray-200">
                          {lg === "fr" ? a.description_fr : a.description_en}
                        </p>
                        <a
                          href={a.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600  dark:to-purple-300  dark:from-blue-400 text-white font-semibold rounded-xl hover:from-blue-600 dark:hover:from-blue-400 dark:hover:to-purple-500 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          {t("Blog.readmore")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Dernier article */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("Blog.lastarticle")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          {lastArticle ? (
            <div className="rounded-2xl shadow-md overflow-hidden bg-white dark:bg-sky-700/60 hover:shadow-xl transition">
              <img
                src={lastArticle.image}
                alt={lg === "fr" ? lastArticle.title_fr : lastArticle.title_en}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-400 dark:text-gray-100">
                  {lg === "fr" ? lastArticle.title_fr : lastArticle.title_en}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  {lg === "fr" ? lastArticle.date_fr : lastArticle.date_en}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {lg === "fr"
                    ? lastArticle.description_fr
                    : lastArticle.description_en}
                </p>
                <a
                  href={lastArticle.link}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  {t("Blog.readmore")}
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 px-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-medium shadow-sm dark:border-gray-800 dark:bg-sky-900 dark:text-slate-200">
              {t("Blog.nomedia")}
            </div>
          )}
        </section>

        {/* Condensé global avec filtre */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center dark:text-white">{t("Blog.all")}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto dark:text-gray-200">
            {t("Blog.alltxt")}
          </p>

          {/* Filtres */}
          <div className="flex gap-3 justify-center mb-6">
            {[
              { key: "all", label: t("Blog.alls"), nbr: articles.length },
              { key: "media", label: t("Blog.medias"), nbr: medias.length },
              { key: "article", label: t("Blog.articles"), nbr: blogs.length },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setCurrentPage(1);
                }}
                disabled={f.nbr === 0}
                className={`px-4 py-2 rounded-full text-sm font-medium transition } ${
                  f.nbr === 0
                    ? "bg-gray-300 text-gray-400 dark:bg-gray-500  dark:text-gray-800 cursor-not-allowed" 
                    : filter === f.key
                    ? "bg-blue-600 text-white dark:bg-blue-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-black"
                }`}
              >
                {f.label} - {f.nbr}
              </button>
            ))}
          </div>

          {/* Grille globale avec pagination */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((a, idx) => (
              <div
                key={a.id}
                className="group relative"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>

                <div className="relative bg-white dark:bg-green-700 rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={a.image}
                      alt={a.title_fr}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2  dark:text-white">
                      {lg === "fr" ? a.title_fr : a.title_en}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-200/80">
                      <Calendar size={14} className="mr-2" />
                      <p className="text-sm">
                        {lg === "fr" ? a.date_fr : a.date_en}
                      </p>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 dark:text-gray-100">
                      {lg === "fr" ? a.description_fr : a.description_en}
                    </p>
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800  dark:text-indigo-200  dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      {t("Blog.readmore")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white border-2 border-gray-200 text-gray-700 dark:text-slate-300 hover:border-gray-300 dark:bg-slate-500 dark:border-gray-300 dark:hover:border-gray-400 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg scale-105"
                        : "bg-white border-2 border-gray-200 text-gray-700 dark:text-white hover:border-gray-400 dark:bg-sky-700 dark:border-gray-600 dark:hover:border-gray-800 "
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white border-2 border-gray-200 text-gray-700 dark:text-slate-300 hover:border-gray-300 dark:bg-slate-500 dark:border-gray-300 dark:hover:border-gray-400 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </section>
      </main>

      <style>{`
         @keyframes fadeInUp {
           from {
             opacity: 0;
             transform: translateY(30px);
           }
           to {
             opacity: 1;
             transform: translateY(0);
           }
         }

         .line-clamp-2 {
           display: -webkit-box;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
           overflow: hidden;
         }

         .line-clamp-3 {
           display: -webkit-box;
           -webkit-line-clamp: 3;
           -webkit-box-orient: vertical;
           overflow: hidden;
         }`}</style>
    </div>
  );
}