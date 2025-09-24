import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { LuGithub, LuLinkedin, LuYoutube } from "react-icons/lu";
import { FaStrava } from "react-icons/fa6";
import { LiaWikipediaW } from "react-icons/lia";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mt-24">
      {/* Bandeau haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Bloc Identité */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Terence
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              SARAMANDIF
            </span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {t("Footer.txt")}
          </p>
        </div>

        {/* Bloc Navigation */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t("Footer.navigation")}
          </h4>
          <nav className="flex flex-col space-y-2 text-gray-600 dark:text-gray-300 font-medium">
            {[
              { to: "/pro", label: "Pro" },
              { to: "/sport", label: "Sport" },
              { to: "/news", label: t("Footer.news") },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bloc Social */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t("Footer.social")}
          </h4>
          <div className="flex flex-wrap gap-5 text-gray-600 dark:text-gray-300">
            {[
              {
                href: "https://www.instagram.com/terence__srmndf/",
                icon: <FaInstagram size={24} />,
                color: "hover:text-pink-500",
              },
              {
                href: "https://github.com/Stapuck",
                icon: <LuGithub size={24} />,
                color: "hover:text-gray-800 dark:hover:text-gray-200",
              },
              {
                href: "https://www.linkedin.com/in/terence-saramandif-840a331a8/",
                icon: <LuLinkedin size={24} />,
                color: "hover:text-blue-600 dark:hover:text-blue-400",
              },
              {
                href: "https://en.wikipedia.org/wiki/Terence_Benjamin_Saramandif",
                icon: <LiaWikipediaW size={24} />,
                color: "hover:text-gray-700 dark:hover:text-gray-200",
              },
              {
                href: "https://www.youtube.com/@TerenceSCanoe",
                icon: <LuYoutube size={24} />,
                color: "hover:text-red-500",
              },
              {
                href: "https://www.strava.com/athletes/26639044",
                icon: <FaStrava size={24} />,
                color: "hover:text-orange-500",
              },
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`transition-transform duration-300 hover:scale-110 ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-6 text-center space-y-1 text-sm text-gray-500 dark:text-gray-400">
        <div>
          © {new Date().getFullYear()} Terence Saramandif — {t("Footer.allrights")}
        </div>
        <div className="text-xs">
          V3.1.2 — {t("Footer.lastupdate")} : 23/09/2025
        </div>
      </div>
    </footer>
  );
}