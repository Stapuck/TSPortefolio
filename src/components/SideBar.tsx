import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  // NotebookPen,
  Dumbbell,
  Briefcase,
  Mail,
  Newspaper,
  Settings,
  CircleUser,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false); // pour mobile
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const links = [
    { to: "/", label: "Home", icon: <Home size={24} /> },
    { to: "/pro", label: "Pro", icon: <Briefcase size={24} /> },
    { to: "/sport", label: "Sport", icon: <Dumbbell size={24} /> },
    { to: "/news", label: "News", icon: <Newspaper size={24} /> },
    { to: "/about", label: "Profile", icon: <CircleUser size={24} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={24} /> },
  ];

  // Fermer le menu si on clique en dehors (mobile et paramètres)
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
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

  // Trouver le lien actif (page courante)
  const activeLink = links.find((link) => link.to === pathname) || links[0];

  return (
    <>
      {/* Sidebar toujours visible pour md+ */}
      <aside className="hidden lg:flex bg-gray-900 dark:bg-gray-800 text-white w-16 py-4 px-2 rounded-2xl shadow-lg flex-col items-center justify-between fixed top-1/2 -translate-y-1/2 ml-3">
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative group flex items-center justify-center"
            >
              <div
                className={`p-2 rounded-md transition-colors hover:text-blue-400 ${
                  pathname === link.to ? "text-blue-500" : "text-white"
                }`}
              >
                {link.icon}
              </div>
              <span className="absolute left-14 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-gray-700 w-full mt-2"></div>

        <div
          className="relative flex flex-col items-center justify-center mt-2"
          ref={settingsRef}
        >
          <div
            className="p-2 rounded-md text-white hover:text-blue-400 transition-colors cursor-pointer"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <Settings size={24} />
          </div>

          {settingsOpen && (
            <div className="absolute left-16 mt-2 bg-gray-800 rounded-lg shadow-lg py-2 w-44 flex flex-col gap-2 z-50">
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
      </aside>

      {/* Bouton flottant + sidebar mobile */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        {!open && (
          <button
            className="w-14 h-14 rounded-full bg-gray-900 dark:bg-gray-800 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
            onClick={() => setOpen(true)}
          >
            {activeLink.icon}
          </button>
        )}

        {open && (
          <aside
            ref={menuRef}
            className="bg-gray-900 dark:bg-gray-800 text-white w-16 py-4 px-2 rounded-2xl shadow-lg flex flex-col items-center justify-between fixed top-1/2 -translate-y-1/2 ml-3"
          >
            {/* Bouton fermer */}
            <button
              className="mb-4 p-2 rounded-md hover:bg-gray-700"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>

            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="relative group flex items-center justify-center"
                >
                  <div
                    className={`p-2 rounded-md transition-colors hover:text-blue-400 ${
                      pathname === link.to ? "text-blue-500" : "text-white"
                    }`}
                  >
                    {link.icon}
                  </div>
                  <span className="absolute left-14 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="border-t border-gray-700 w-full mt-2"></div>

            <div
              className="relative flex flex-col items-center justify-center mt-2"
              ref={settingsRef}
            >
              <div
                className="p-2 rounded-md text-white hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => setSettingsOpen(!settingsOpen)}
              >
                <Settings size={24} />
              </div>

              {settingsOpen && (
                <div className="absolute left-16 mt-2 bg-gray-800 rounded-lg shadow-lg py-2 w-44 flex flex-col gap-2 z-50">
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
                        i18n.language === "fr"
                          ? "bg-blue-500"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={() => changeLanguage("fr")}
                    >
                      FR
                    </button>
                    <button
                      className={`px-2 py-1 rounded text-sm ${
                        i18n.language === "en"
                          ? "bg-blue-500"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={() => changeLanguage("en")}
                    >
                      EN
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}
      </div>
    </>
  );
}



// test blur
// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Home,
//   NotebookPen,
//   Dumbbell,
//   Briefcase,
//   Mail,
//   Newspaper,
//   Settings,
//   X,
// } from "lucide-react";
// import { useTranslation } from "react-i18next";

// export default function Sidebar() {
//   const { pathname } = useLocation();
//   const [open, setOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const menuRef = useRef<HTMLDivElement>(null);
//   const { i18n } = useTranslation();

//   const links = [
//     { to: "/", label: "Home", icon: <Home size={24} /> },
//     { to: "/blog", label: "Blog", icon: <NotebookPen size={24} /> },
//     { to: "/sportif", label: "Sportif", icon: <Dumbbell size={24} /> },
//     { to: "/pro", label: "Pro", icon: <Briefcase size={24} /> },
//     { to: "/contact", label: "Contact", icon: <Mail size={24} /> },
//     { to: "/about", label: "News", icon: <Newspaper size={24} /> },
//   ];

//   // Fermer le menu si on clique en dehors
//   useEffect(() => {
//     const handleClickOutside = (event: any) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOpen(false);
//         setSettingsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const changeLanguage = (code: string) => {
//     i18n.changeLanguage(code);
//     document.documentElement.lang = code;
//   };

//   // Trouver le lien actif (page courante)
//   const activeLink = links.find((link) => link.to === pathname) || links[0];

//   return (
//     <div className="fixed bottom-4 left-4 z-50">
//       {/* Bouton rond quand fermé */}
//       {!open && (
//         <button
//           className="w-14 h-14 rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center shadow-lg hover:scale-105 transition"
//           onClick={() => setOpen(true)}
//         >
//           {activeLink.icon}
//         </button>
//       )}

//       {/* Overlay blur quand sidebar ouverte */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
//       )}

//       {/* Sidebar originale quand ouverte */}
//       {open && (
//         <aside
//           ref={menuRef}
//           className="bg-gray-900 dark:bg-gray-800 text-white dark:text-white w-16 py-4 px-2 rounded-2xl shadow-lg flex flex-col items-center justify-between fixed top-1/2 -translate-y-1/2 ml-3 z-50"
//         >
//           {/* Bouton croix */}
//           <button
//             className="mb-4 p-2 rounded-md hover:bg-gray-700"
//             onClick={() => setOpen(false)}
//           >
//             <X size={20} />
//           </button>

//           <nav className="flex flex-col gap-6">
//             {links.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={() => setOpen(false)}
//                 className="relative group flex items-center justify-center"
//               >
//                 <div
//                   className={`p-2 rounded-md transition-colors hover:text-blue-400 ${
//                     pathname === link.to ? "text-blue-500" : "text-white"
//                   }`}
//                 >
//                   {link.icon}
//                 </div>
//                 <span className="absolute left-14 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                   {link.label}
//                 </span>
//               </Link>
//             ))}
//           </nav>

//           <div className="border-t border-gray-700 w-full mt-2"></div>

//           {/* Paramètres */}
//           <div className="relative flex flex-col items-center justify-center mt-2">
//             <div
//               className="p-2 rounded-md text-white hover:text-blue-400 transition-colors cursor-pointer"
//               onClick={() => setSettingsOpen(!settingsOpen)}
//             >
//               <Settings size={24} />
//             </div>

//             {settingsOpen && (
//               <div className="absolute left-16 mt-2 bg-gray-800 rounded-lg shadow-lg py-2 w-44 flex flex-col gap-2 z-50">
//                 {/* Toggle Theme */}
//                 <button
//                   className="px-4 py-2 text-sm text-white hover:bg-gray-700 rounded flex items-center justify-between"
//                   onClick={() => setDarkMode(!darkMode)}
//                 >
//                   Thème
//                   <span className="ml-2">{darkMode ? "🌙" : "☀️"}</span>
//                 </button>

//                 {/* Choix de la langue */}
//                 <div className="flex justify-around px-4 py-2">
//                   <button
//                     className={`px-2 py-1 rounded text-sm ${
//                       i18n.language === "fr" ? "bg-blue-500" : "hover:bg-gray-700"
//                     }`}
//                     onClick={() => changeLanguage("fr")}
//                   >
//                     FR
//                   </button>
//                   <button
//                     className={`px-2 py-1 rounded text-sm ${
//                       i18n.language === "en" ? "bg-blue-500" : "hover:bg-gray-700"
//                     }`}
//                     onClick={() => changeLanguage("en")}
//                   >
//                     EN
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </aside>
//       )}
//     </div>
//   );
// }
