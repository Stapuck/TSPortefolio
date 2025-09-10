import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection.tsx";
import { articles } from "../medias/databases/index-global.ts";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const lg = document.documentElement.lang || "fr";

  useEffect(() => {
    document.title = "TS - Blog";
  }, []);

  const [filter, setFilter] = useState("all");

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

  return (
    <div className="text-gray-800">
      <HeroSection currentPage={"blog"} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {/* Intro */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold">{t("Blog.blog_welcome")}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ici je partage mes expériences entre sport de haut niveau et études
            en informatique. Vous trouverez des passages médias, mes articles
            personnels et des réflexions sur mon parcours.
          </p>
        </section>

        {/* Special News */}
        <section className="space-y-8 bg-yellow-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-center">⚡ News Spéciales</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/images/special-news.jpg"
                alt="News spéciale"
                className="w-full md:w-1/3 h-48 object-cover rounded-2xl shadow"
              />
              <div className="md:w-2/3 space-y-2">
                <h3 className="text-xl font-semibold">Annonce Importante</h3>
                <p className="text-gray-600">
                  Une nouvelle excitante concernant ma prochaine compétition
                  internationale ! Plus de détails arrivent bientôt.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  {t("Blog.readmore")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Top Articles Sportifs */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">
            ⭐ Top Articles Sportifs
          </h2>
          <div className="space-y-12">
            {articles
              .filter((a) => a.top_article) // on garde seulement les top
              .slice(0, 4) // max 4
              .map((a, idx) => (
                <div
                  key={a.id}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src={a.image}
                    alt={lg === "fr" ? a.title_fr : a.title_en}
                    className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-md"
                  />
                  <div className="md:w-1/2 space-y-3">
                    <h3 className="text-xl font-semibold">
                      {lg === "fr" ? a.title_fr : a.title_en}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {lg === "fr" ? a.date_fr : a.date_en}
                    </p>
                    <p className="text-gray-700">
                      {lg === "fr" ? a.description_fr : a.description_en}
                    </p>
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {t("Blog.readmore")}
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Dernier article */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">🆕 Dernier Article</h2>
          <div className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition">
            <img
              src={sortedArticles[0].image}
              alt={
                lg === "fr"
                  ? sortedArticles[0].title_fr
                  : sortedArticles[0].title_en
              }
              className="w-full h-72 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">
                {sortedArticles[0].title_fr}
              </h3>
              <p className="text-sm text-gray-500">
                {lg === "fr"
                  ? sortedArticles[0].date_fr
                  : sortedArticles[0].date_en}
              </p>
              <p className="text-gray-700">
                {lg === "fr"
                  ? sortedArticles[0].description_fr
                  : sortedArticles[0].description_en}
              </p>
              <a
                href={sortedArticles[0].link}
                className="text-blue-600 font-medium hover:underline"
              >
                {t("Blog.readmore")}
              </a>
            </div>
          </div>
        </section>

        {/* Condensé global avec filtre */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">
            📚 Tous mes Articles & Médias
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Parcourez l’ensemble de mes contenus, filtrez par type ou découvrez
            dans l’ordre chronologique.
          </p>

          {/* Filtres */}
          <div className="flex gap-3 justify-center mb-6">
            {[
              { key: "all", label: "Tous", nbr: articles.length },
              { key: "media", label: "Médias", nbr: medias.length },
              { key: "article", label: "Articles", nbr: blogs.length },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === f.key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {f.label} - {f.nbr}
              </button>
            ))}
          </div>

          {/* Grille globale avec pagination */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((a) => (
              <div
                key={a.id}
                className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition"
              >
                <img
                  src={a.image}
                  alt={a.title_fr}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {lg === "fr" ? a.title_fr : a.title_en}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {lg === "fr" ? a.date_fr : a.date_en}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {lg === "fr" ? a.description_fr : a.description_en}
                  </p>
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {t("Blog.readmore")}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
