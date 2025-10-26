import { useEffect, useState } from "react";
import { Wrench, Code, RefreshCw, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Maintenance() {
const { t } = useTranslation();
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    document.title = "TS - Maintenance";
    window.scrollTo(0, 0);
  }, []);

  const revealEmail = () => {
    if (!showEmail) {
      const local = "terencepro";
      const domain = "saramandif";
      const ext = "com";
      const generatedEmail = `${local}@${domain}.${ext}`;
      setEmail(generatedEmail);
      setShowEmail(true);
    } else if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-sky-800 dark:to-sky-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300/20 dark:bg-orange-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/15 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        <div className="relative">
          <h1 className="text-5xl  md:text-7xl font-black bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent drop-shadow-sm">
            {t("Maintenance.title")}
          </h1>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl transform rotate-4 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300">
              <Wrench size={40} className="text-orange-600 animate-pulse" />
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl transform -rotate-4 group-hover:-rotate-12 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300">
              <Code size={40} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-slate-200">
            {t("Maintenance.subtitle")}
          </h2>
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-white/50 dark:bg-white/80 backdrop-blur-sm rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white/90 dark:bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
              <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed">
                {t("Maintenance.message")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-200">
          <Clock size={24} className="animate-pulse" />
          <span className="text-lg  sm:text-xl font-medium">
            {t("Maintenance.estimatedTime")}
          </span>
        </div>

        <div className="pt-4">
          <div className="flex justify-center items-center gap-2">
            <RefreshCw size={20} className="text-orange-500 animate-spin" />
            <span className="text-gray-600 dark:text-gray-200 text-lg  sm:text-xl">
              {t("Maintenance.working")}
            </span>
          </div>
        </div>

    
        <div className="pt-6">
          <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-300">
            {t("Maintenance.contact")}{" "}
            <button
              onClick={revealEmail}
              className="text-orange-600 dark:text-orange-400 hover:underline font-medium focus:outline-none"
            >
              {!showEmail ? t("Maintenance.contactUs") : email}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}