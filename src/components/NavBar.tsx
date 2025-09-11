import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  NotebookPen,
  Dumbbell,
  Briefcase,
  Mail,
  Newspaper,
  Settings,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { pathname } = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const links = [
    { to: "/", label: "Home", icon: <Home size={20} /> },
    { to: "/blog", label: "Blog", icon: <NotebookPen size={20} /> },
    { to: "/sportif", label: "Sportif", icon: <Dumbbell size={20} /> },
    { to: "/pro", label: "Pro", icon: <Briefcase size={20} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={20} /> },
    { to: "/about", label: "News", icon: <Newspaper size={20} /> },
  ];

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white px-6 py-3 shadow-lg flex items-center justify-between">
      {/* Liens */}
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="relative group flex items-center gap-2"
          >
            {/* Icône seulement en mobile */}
            <div
              className={`p-2 rounded-md transition-colors hover:text-blue-400 block md:hidden ${
                pathname === link.to ? "text-blue-500" : "text-white"
              }`}
            >
              {link.icon}
            </div>

            {/* Texte seulement en grand écran */}
            <span
              className={`hidden md:inline transition-colors ${
                pathname === link.to ? "text-blue-500" : "text-white"
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Menu Settings */}
      <div className="relative" ref={menuRef}>
        <div
          className="p-2 rounded-md text-white hover:text-blue-400 transition-colors cursor-pointer"
          onClick={() => setSettingsOpen(!settingsOpen)}
        >
          <Settings size={22} />
        </div>

        {settingsOpen && (
          <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg py-2 w-44 flex flex-col gap-2 z-50">
            {/* Toggle Theme */}
            <button
              className="px-4 py-2 text-sm text-white hover:bg-gray-700 rounded flex items-center justify-between"
              onClick={() => setDarkMode(!darkMode)}
            >
              Thème
              <span className="ml-2">{darkMode ? "🌙" : "☀️"}</span>
            </button>

            {/* Choix de la langue */}
            <div className="flex justify-around px-4 py-2">
              <button
                className={`px-2 py-1 rounded text-sm ${
                  i18n.language === "fr" ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
                onClick={() => changeLanguage("fr")}
              >
                FR
              </button>
              <button
                className={`px-2 py-1 rounded text-sm ${
                  i18n.language === "en" ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
