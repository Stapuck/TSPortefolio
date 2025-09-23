import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import CalendarSection from "../components/CalendarSection.tsx";
import SportObjectif from "../components/SportObjectif.tsx";
import EventList from "../components/EventList.tsx";
import AchievementRanking from "../components/AchievementRanking.tsx";

import { Maximize2, Minimize2, DollarSign, Users, Clock } from "lucide-react";
import BudgetMaterial from "../components/BudgetMaterial.tsx";
import BudgetEvent from "../components/BudgetEvent.tsx";
import BudgetRecap from "../components/BudgetRecap.tsx";

export default function Sport() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    document.title = "TS - Sport";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash === "#calendar") {
      const element = document.getElementById("calendar");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="">
      <HeroSection currentPage={"sport"} />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <SportObjectif />

        <section id="calendar" className="space-y-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">
              {t("Sport.calendarandevent")}
            </h2>
            <div className="w-65 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 max-w-xl mx-auto dark:text-slate-300">
              {t("Sport.calendartxt")}
            </p>
          </div>

          {/* Legend*/}
          <div
            className="bg-white dark:bg-sky-800/80 rounded-xl shadow-sm dark:shadow-slate-900/40 
                  border border-gray-100 dark:border-slate-700 p-5 transition-colors duration-300"
          >
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-4">
              {t("Sport.legend")} :
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
              {[
                {
                  type: "worldcup",
                  color: "#F59E0B",
                  label: t("Calendar.worldcup"),
                },
                {
                  type: "worldchamp",
                  color: "#8B5CF6",
                  label: t("Calendar.worldchamp"),
                },
                {
                  type: "national",
                  color: "#3B82F6",
                  label: t("Calendar.national"),
                },
                {
                  type: "training",
                  color: "#10B981",
                  label: t("Calendar.training"),
                },
                { type: "pro", color: "#6B7280", label: t("Calendar.pro") },
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full shrink-0 ring-2 ring-offset-1 ring-slate-800 "
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-700 dark:text-slate-300 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
          <div
            className={`bg-gray-200 dark:bg-sky-900 rounded-2xl grid gap-6 transition-all duration-300 ${
              expanded ? "grid-cols-1" : "md:grid-cols-2"
            }`}
          >
            <CalendarSection />
            {expanded ? (
              <>
                <div
                  className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100 dark:border-slate-700 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-slate-200 mb-4 flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                    <span>{t("Calendar.tips")}</span>
                  </h4>

                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-slate-300">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 transition-colors duration-300" />
                      <span>{t("Calendar.clickevent")}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 transition-colors duration-300" />
                      <span>{t("Calendar.changeday")}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 transition-colors duration-300" />
                      <span>{t("Calendar.color")}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            <EventList />
          </div>
        </section>

        {/* Palmarès / Carrière */}
        <section className="">
          <h2 className="text-3xl font-bold text-center dark:text-white mb-2">
            {t("Sport.career")}
          </h2>
          <div className="w-50 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <AchievementRanking />
        </section>

        {/* Header */}
        {/* todo : revoir l'agencement et l'espacement  */}
        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {t("Sport.budget.seasonbudget")}
            </h2>
            <div className="w-50 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>

            <p className="text-gray-600 dark:text-gray-200 mb-3">
              {t("Sport.budget.intro")}
            </p>
          </div>

          <BudgetMaterial />
          <BudgetEvent />
          <BudgetRecap />
        </section>

        <section className="text-center py-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Gradient derrière le card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1"></div>

            {/* Card principale */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-200 dark:bg-sky-900/90 dark:border-sky-700/50">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {t("Sport.moreinfo")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                {t("Sport.moreinfotxt")}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <DownloadButton
                  fileChoice={"Budget"}
                  title={"Budget"}
                  description={t("DownloadBtn.budgetdescription")}
                  icon={<DollarSign className="w-8 h-8 text-blue-600" />}
                  variant={"primary"}
                />

                <DownloadButton
                  fileChoice={"Sponsor"}
                  title={"Sponsor"}
                  description={t("DownloadBtn.sponsordescription")}
                  icon={<Users className="w-8 h-8 text-blue-600" />}
                  variant={"primary"}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* todo : faire partie sponsor ou participateur de l'aventure */}
          <h3 className="text-2xl font-bold mb-2 text-center dark:text-white">
            {t("Sport.join")}
            {/* todo : changer le texte  truc plus Participateur de l'aventure ?  */}
          </h3>

          {/* todo : faire card  double rotateur comme louis et ses comms  */}
          {/* mettre lunaar, safran, val d'indre, lycée grandmont, pole de tours  ? revori avec parent */}
          {/* mettre fédé, MOC, Ministere Mauricien */}
        </section>

        <div className="mt-6 text-center text-gray-700 italic dark:text-slate-200">
          {t("Sport.citation")}
        </div>
      </main>
    </div>
  );
}
