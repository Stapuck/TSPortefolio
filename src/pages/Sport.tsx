import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import CalendarSection from "../components/CalendarSection.tsx";
import SportObjectif from "../components/SportObjectif.tsx";
import EventList from "../components/EventList.tsx";
import AchievementRanking from "../components/AchievementRanking.tsx";

import { Maximize2, Minimize2, DollarSign, Users } from "lucide-react";
import BudgetMaterial from "../components/BudgetMaterial.tsx";

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
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Calendrier et Événements
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explorez mon calendrier sportif et professionnel de manière
              interactive. Cliquez sur un événement pour plus de détails.
            </p>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              Légende
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
              {[
                { type: "worldcup", color: "#F59E0B", label: "Coupe du Monde" },
                {
                  type: "worldchamp",
                  color: "#8B5CF6",
                  label: "Championnat du Monde",
                },
                {
                  type: "national",
                  color: "#3B82F6",
                  label: "Course Nationale",
                },
                { type: "training", color: "#10B981", label: "Stage" },
                { type: "pro", color: "#6B7280", label: "Professionnel" },
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-700">{item.label}</span>
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
            className={`bg-gray-200 rounded-lg grid gap-6 transition-all duration-300 ${
              expanded ? "grid-cols-1" : "md:grid-cols-2"
            }`}
          >
            <CalendarSection />
            <EventList />
          </div>
        </section>

        {/* Palmarès / Carrière */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center dark:text-white">
            {t("Sport.career")}
          </h2>
          <AchievementRanking />
        </section>
        <BudgetMaterial />
        <h3 className="text-2xl font-bold mb-2 text-center dark:text-white">
          {t("Sport.moreinfo")}
        </h3>
        <p className="text-gray-700 mb-4 text-center dark:text-white">
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

        <section>
          <h3 className="text-2xl font-bold mb-2 text-center dark:text-white">
            {t("Sport.join")}
          </h3>

          {/* faire card  */}
          {/* mettre fédé, MOC, Ministere Mauricien */}
        </section>

        <div className="mt-6 text-center text-gray-700 italic dark:text-slate-200">
          {t("Sport.citation")}
        </div>
      </main>
    </div>
  );
}
