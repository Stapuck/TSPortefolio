import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { FaStrava } from "react-icons/fa6";
import { LiaWikipediaW } from 'react-icons/lia';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} =useTranslation();
  return (
    <footer className="bg-gray-700/95 text-white mt-18 pt-2">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bloc gauche : identité */}
        <div>
          <h3 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">
              Terence
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
              Saramandif
            </span>
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            {t('Footer.txt')}
           
          </p>
        </div>

        {/* Bloc navigation */}
        <div className="flex flex-col space-y-2 text-slate-200">
          <h4 className="text-lg font-semibold "> {t('Footer.navigation')}</h4>
          <Link to="/pro" className="hover:text-blue-400 transition">
            Pro
          </Link>
          <Link to="/sport" className="hover:text-blue-400 transition">
            Sport
          </Link>
          <Link to="/blog" className="hover:text-blue-400 transition">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Bloc social */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-semibold "> {t('Footer.social')}</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/terence__srmndf/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://github.com/Stapuck"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition"
            >
              <LuGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/terence-saramandif-840a331a8/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <LuLinkedin size={22} />
            </a>
             <a
              href="https://en.wikipedia.org/wiki/Terence_Benjamin_Saramandif"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition"
            >
              <LiaWikipediaW size={22} />
            </a>
            <a
              href="https://www.youtube.com/@TerenceSCanoe"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <LuYoutube size={22} />
            </a>
            <a
              href="https://www.strava.com/athletes/26639044"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-600 transition"
            >
              <FaStrava size={22} />
            </a>
          </div>
        </div>
      </div>
      {/* Bas du footer */}
      <div className="border-t border-gray-600 py-4 text-center text-sm text-slate-400 space-y-1">
        <div>
          © {new Date().getFullYear()} Terence Saramandif —  {t('Footer.allrights')}
        </div>
        {/* revoir last update ou info up to date */}
        <div className="text-xs text-gray-500">V3.1.2 -  {t('Footer.lastupdate')}: 10/09/2025</div>
      </div>
    </footer>
  );
}
