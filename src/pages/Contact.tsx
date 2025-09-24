import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection.tsx";
import DownloadSection from "../components/DownloadSection.tsx";
import { useTranslation } from "react-i18next";
// import ReCAPTCHA from "react-google-recaptcha";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Users,
  Briefcase,
  Trophy,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
const Contact: React.FC = () => {
  const { t } = useTranslation();
  const initialLang = document.documentElement.lang || "fr";
  useEffect(() => {
    document.title = "TS - Contact";
    window.scrollTo(0, 0);
  }, []);

  // const contactMethods = [
  const [methods, setMethods] = useState([
    {
      icon: Mail,
      title_fr: "Email Professionnel",
      title_en: "Professional Email",
      value: "tXXXXX@XXXX.com",
      realValue: "terencepro@saramandif.com",
      description_fr:
        "Pour toute demande professionnelle, sponsoring ou collaboration",
      description_en:
        "For professional inquiries, sponsorships, or collaborations",
      action: "mailto:terence.saramandif@email.com",
      gradient: "from-blue-500 to-blue-600",
      available_fr: "Réponse sous 24h",
      available_en: "Response within 24h",
      revealed: false,
      // captchaVerified: false,
    },

    {
      icon: Phone,
      title_fr: "Téléphone",
      title_en: "Phone Number",
      value: "+33 6 XX XX XX XX",
      realValue: "+33 6 72 25 32 84",
      description_fr: "Disponible pour les appels",
      description_en: "Available for calls",
      action: "tel:+33600000000",
      gradient: "from-purple-500 to-purple-600",
      available_fr: "Lun-Ven 10h-17h",
      available_en: "Mon-Fri 10am-5pm",
      revealed: false,
      // captchaVerified: false,
    },
  ]);

  const socialLinks = [
    {
      icon: FaInstagram,
      name: "Instagram",
      handle: "@terence_saramandif",
      url: "https://instagram.com/terence_saramandif",
      description_fr: "Suivez mon quotidien sportif et professionnel",
      description_en: "Follow my sports and professional routine",
      gradient: "from-pink-500 to-purple-600",
      stats: "1.2k",
    },
    {
      icon: LuLinkedin,
      name: "LinkedIn",
      handle: "Terence Saramandif",
      url: "https://linkedin.com/in/terence-saramandif",
      description_fr: "Mon parcours professionnel et mes projets",
      description_en: "My professional journey and projects",
      gradient: "from-blue-600 to-blue-700",
      stats: "300+",
    },
    // {
    //   icon: Twitter,
    //   name: "Twitter",
    //   handle: "@terence_s_kayak",
    //   url: "https://twitter.com/terence_s_kayak",
    //   description: "Actualités sport et tech en temps réel",
    //   gradient: "from-sky-400 to-sky-600",
    //   stats: "1.2k followers"
    // }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      title_fr: "Localisation",
      title_en: "Localisation",
      value_fr: "Pula, Istrie, Croatie",
      value_en: "Pula, Istrie, Croatie",
      description_fr: "Base actuelle pour mes entraînements",
      description_en: "Current base for my training",
    },
    {
      icon: Clock,
      title_fr: "Timezone",
      title_en: "Timezone",
      value_fr: "CET (UTC+1)",
      value_en: "CET (UTC+1)",
      // description: "Heure de référence pour nos échanges"
      description_fr: "Référence pour nos échanges",
      description_en: "Reference for our communications",
    },
    {
      icon: Globe,
      title_fr: "Langues",
      title_en: "Langues",
      value_fr: "Français, Anglais",
      value_en: "Français, Anglais",
      description_fr: "Parfaitement bilingue",
      description_en: "Fully bilingual",
    },
  ];

  const collaborationTypes = [
    {
      icon: Briefcase,
      title_fr: "Opportunités Professionnelles",
      title_en: "Professional Opportunities",
      description_fr: "Projets tech, développement, consulting",
      description_en: "Tech projects, development, consulting",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Trophy,
      title_fr: "Sponsoring Sportif",
      title_en: "Sport Sponsorship",
      description_fr: "Partenariats, équipements, événements",
      description_en: "Partnerships, gear, events",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title_fr: "Interventions & Coaching",
      title_en: "Workshops & Coaching",
      description_fr: "Conférences, formations, mentorat",
      description_en: "Talks, training, mentoring",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const revealInfo = (idx: number) => {
    setMethods((prev) =>
      prev.map((m, i) =>
        i === idx ? { ...m, value: m.realValue, revealed: true } : m
      )
    );
  };

  // const revealInfo = (idx: number) => {
  //   setMethods((prev) =>
  //     prev.map((m, i) =>
  //       i === idx && m.captchaVerified
  //         ? { ...m, value: m.realValue, revealed: true }
  //         : m
  //     )
  //   );
  // };

  // const onCaptchaChange = (idx: number, token: string | null) => {
  //   if (token) {
  //     setMethods((prev) =>
  //       prev.map((m, i) => (i === idx ? { ...m, captchaVerified: true } : m))
  //     );
  //   }
  // };

  return (
    // <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
    <div className=" min-h-screen">
      <HeroSection currentPage={"contact"} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* Informations Pratiques */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("Contact.info")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickInfo.map((info, idx) => (
              <div key={idx} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl transform rotate-2"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-200 dark:bg-sky-900/90 dark:border-sky-700/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 dark:from-cyan-700 dark:to-teal-700 flex items-center justify-center">
                      <info.icon
                        size={24}
                        className="text-white dark:text-slate-50"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 dark:text-slate-100">
                        {initialLang === "fr" ? info.title_fr : info.title_en}
                      </h3>
                      <p className="text-gray-800 font-semibold dark:text-slate-200">
                        {initialLang === "fr" ? info.value_fr : info.value_en}
                      </p>
                      <p className="text-gray-600 text-sm dark:text-slate-300">
                        {initialLang === "fr"
                          ? info.description_fr
                          : info.description_en}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Réseaux Sociaux */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("Contact.followme")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialLinks.map((social, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300`}
                ></div>

                <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-200 hover:shadow-3xl transition-all duration-300 dark:bg-sky-900/90 dark:border-sky-700/50">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <social.icon size={24} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          {social.name}
                        </h3>
                        <span className="text-xs text-gray-500 bg-gray-100 dark:text-slate-200 dark:bg-sky-700 px-2 py-1 rounded-full">
                          {social.stats}{" "}
                          {social.name === "Instagram"
                            ? t("Contact.followers")
                            : t("Contact.connexions")}
                        </span>
                      </div>

                      <p className="text-gray-600 font-medium mb-1 dark:text-slate-200">
                        {social.handle}
                      </p>

                      <p className="text-gray-600 text-sm mb-3 dark:text-slate-300">
                        {initialLang === "fr"
                          ? social.description_fr
                          : social.description_en}
                      </p>

                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 dark:text-blue-300 dark:hover:text-blue-500"
                      >
                        {t("Contact.follow")}

                        <ExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types de Collaborations */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("Contact.collab")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTypes.map((collab, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${collab.gradient} rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300`}
                ></div>

                <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center dark:bg-sky-900/90 dark:border-sky-700/50">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${collab.gradient} flex items-center justify-center`}
                  >
                    <collab.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-3">
                    {initialLang === "fr" ? collab.title_fr : collab.title_en}
                  </h3>

                  <p className="text-gray-600 dark:text-slate-200 leading-relaxed">
                    {initialLang === "fr"
                      ? collab.description_fr
                      : collab.description_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Méthodes de Contact Principales */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("Contact.contact")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed dark:text-slate-200 mt-4">
              {t("Contact.noserious")}
            </p>
          </div>

          {/* <div className="grid gap-6 md:grid-cols-2">
      {methods.map((method, idx) => (
        <div key={idx} className="group relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}
          />
          <div className="relative bg-white dark:bg-sky-900/90 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-sky-700/50">
            <div className="text-center space-y-6">
              <div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center`}
              >
                <method.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold dark:text-white">
                {initialLang === "fr" ? method.title_fr : method.title_en}
              </h3>

              <p className="text-gray-600 dark:text-slate-200 text-sm">
                {initialLang === "fr"
                  ? method.description_fr
                  : method.description_en}
              </p>

              <div
                className={`bg-gradient-to-r ${method.gradient} rounded-xl p-4`}
              >
                <p className="font-bold text-gray-800 dark:text-slate-100 text-lg">
                  {method.value}
                </p>
                <p className="text-gray-500 dark:text-slate-200 text-sm">
                  {initialLang === "fr"
                    ? method.available_fr
                    : method.available_en}
                </p>
              </div>

              {!method.revealed && (
                <ReCAPTCHA
                  sitekey="VOTRE_SITE_KEY" 
                  onChange={(token) => onCaptchaChange(idx, token)}
                />
              )}

              {method.revealed ? (
                <a
                  href={method.action}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  {t("Contact.contactme")}
                  <ChevronRight className="ml-2" size={18} />
                </a>
              ) : (
                <button
                  onClick={() => revealInfo(idx)}
                  disabled={!method.captchaVerified}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {t("Contact.getmy")}
                  {initialLang === "fr"
                    ? method.title_fr.toLowerCase()
                    : method.title_en.toLowerCase()}
                  <ChevronRight className="ml-2" size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div> */}

          <div className="grid gap-6 md:grid-cols-2">
            {methods.map((method, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}
                />
                <div className="relative bg-white dark:bg-sky-900/90 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-sky-700/50">
                  <div className="text-center space-y-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center`}
                    >
                      <method.icon size={32} className="text-white" />
                    </div>

                    <h3 className="text-xl font-bold dark:text-white">
                      {initialLang === "fr" ? method.title_fr : method.title_en}
                    </h3>

                    <p className="text-gray-600 dark:text-slate-200 text-sm">
                      {initialLang === "fr"
                        ? method.description_fr
                        : method.description_en}
                    </p>

                    <div
                      className={`bg-gradient-to-r ${method.gradient} rounded-xl p-4`}
                    >
                      <p className="font-bold text-gray-800 dark:text-slate-100 text-lg">
                        {method.value}
                      </p>
                      <p className="text-gray-500 dark:text-slate-200 text-sm">
                        {initialLang === "fr"
                          ? method.available_fr
                          : method.available_en}
                      </p>
                    </div>

                    {method.revealed ? (
                      <a
                        href={method.action}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        {t("Contact.contactme")}
                        <ChevronRight className="ml-2" size={18} />
                      </a>
                    ) : (
                      <button
                        onClick={() => revealInfo(idx)}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        {t("Contact.getmy")}
                        {initialLang === "fr"
                          ? method.title_fr.toLowerCase()
                          : method.title_en.toLowerCase()}
                        <ChevronRight className="ml-2" size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Download */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {t("Contact.ressourses")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-1"></div>
            {/* <div className="relative bg-gray-100 rounded-3xl shadow-2xl p-8 border border-gray-200"> */}
            <div className="relative bg-gray-100 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:bg-sky-900/95 dark:border-sky-700/50">
              <DownloadSection />
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-200 dark:bg-sky-900/90 dark:border-sky-700/50  ">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {t("Contact.readytocollab")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                {t("Contact.readytocollabtxt")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:terence.saramandif@email.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2" size={20} />
                  {t("Contact.sendemail")}
                </a>
                <a
                  href="https://linkedin.com/in/terence-saramandif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 dark:bg-sky-400/80 dark:border-sky-500 dark:hover:border-sky-600 hover:scale-105  hover:shadow-lg transition-all duration-300"
                >
                  <LuLinkedin className="mr-2" size={20} />
                  {t("Contact.connect")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
