// import { Link } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa";
// import { LuGithub } from "react-icons/lu";
// import { LuLinkedin } from "react-icons/lu";
// import { LuYoutube } from "react-icons/lu";
// import { FaStrava } from "react-icons/fa6";
// import { LiaWikipediaW } from 'react-icons/lia';
// import { useTranslation } from "react-i18next";

// export default function Footer() {
//   const {t} =useTranslation();
//   return (
//     <footer className="bg-gray-700/95 text-white mt-18 pt-2">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Bloc gauche : identité */}
//         <div>
//           <h3 className="text-2xl font-bold">
//             <span className="bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">
//               Terence
//             </span>{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
//               Saramandif
//             </span>
//           </h3>
//           <p className="mt-3 text-sm text-slate-300">
//             {t('Footer.txt')}
           
//           </p>
//         </div>

//         {/* Bloc navigation */}
//         <div className="flex flex-col space-y-2 text-slate-200">
//           <h4 className="text-lg font-semibold "> {t('Footer.navigation')}</h4>
//           <Link to="/pro" className="hover:text-blue-400 transition">
//             Pro
//           </Link>
//           <Link to="/sport" className="hover:text-blue-400 transition">
//             Sport
//           </Link>
//           <Link to="/blog" className="hover:text-blue-400 transition">
//             Blog
//           </Link>
//           <Link to="/contact" className="hover:text-blue-400 transition">
//             Contact
//           </Link>
//         </div>

//         {/* Bloc social */}
//         <div className="flex flex-col space-y-3">
//           <h4 className="text-lg font-semibold "> {t('Footer.social')}</h4>
//           <div className="flex space-x-4">
//             <a
//               href="https://www.instagram.com/terence__srmndf/"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-pink-500 transition"
//             >
//               <FaInstagram size={22} />
//             </a>
//             <a
//               href="https://github.com/Stapuck"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-gray-400 transition"
//             >
//               <LuGithub size={22} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/terence-saramandif-840a331a8/"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-blue-400 transition"
//             >
//               <LuLinkedin size={22} />
//             </a>
//              <a
//               href="https://en.wikipedia.org/wiki/Terence_Benjamin_Saramandif"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-gray-400 transition"
//             >
//               <LiaWikipediaW size={22} />
//             </a>
//             <a
//               href="https://www.youtube.com/@TerenceSCanoe"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-red-500 transition"
//             >
//               <LuYoutube size={22} />
//             </a>
//             <a
//               href="https://www.strava.com/athletes/26639044"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-orange-600 transition"
//             >
//               <FaStrava size={22} />
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Bas du footer */}
//       <div className="border-t border-gray-600 py-4 text-center text-sm text-slate-400 space-y-1">
//         <div>
//           © {new Date().getFullYear()} Terence Saramandif —  {t('Footer.allrights')}
//         </div>
//         {/* revoir last update ou info up to date */}
//         <div className="text-xs text-gray-500">V3.1.2 -  {t('Footer.lastupdate')}: 10/09/2025</div>
//       </div>
//     </footer>
//   );
// }


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
          V3.1.2 — {t("Footer.lastupdate")}: 20/09/2025
        </div>
      </div>
    </footer>
  );
}