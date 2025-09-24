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

import LogoSliders from "../components/LogoSliders.tsx";

//faire un composant encore

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

  const logos = [
    {
      id: 1,
      name_fr: "Nike",
      name_en: "Nike",
      description_fr: "Marque de vêtements et équipements sportifs",
      description_en: "Sportswear and equipment brand",
      price: "€12 000",
      logo: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg",
    },
    {
      id: 2,
      name_fr: "Adidas",
      name_en: "Adidas",
      description_fr: "Entreprise allemande de vêtements de sport",
      description_en: "German sportswear company",
      price: "€10 000",
      logo: "https://images.pexels.com/photos/20772146/pexels-photo-20772146.jpeg",
    },
    {
      id: 3,
      name_fr: "Burger King",
      name_en: "Burger King",
      description_fr: "Chaîne de restauration rapide",
      description_en: "Fast food restaurant chain",
      price: "€8 000",
      logo: "https://images.pexels.com/photos/30830193/pexels-photo-30830193.jpeg",
    },
    {
      id: 4,
      name_fr: "FedEx",
      name_en: "FedEx",
      description_fr: "Entreprise de logistique et transport express",
      description_en: "Express shipping and logistics company",
      price: "€9 500",
      logo: "https://images.pexels.com/photos/20584482/pexels-photo-20584482.jpeg",
    },
    {
      id: 5,
      name_fr: "Quiksilver",
      name_en: "Quiksilver",
      description_fr: "Marque de surf et sports de glisse",
      description_en: "Surf and board sports brand",
      price: "€7 500",
      logo: "https://www.bing.com/images/search?view=detailV2&ccid=Hgq2f60s&id=F75A2E8C612240DDE11A5EFD0A829104FB807008&thid=OIP.Hgq2f60s73Rwzvbol_-LsgHaEK&mediaurl=https%3a%2f%2flogosmarcas.net%2fwp-content%2fuploads%2f2021%2f01%2fQuicksilver-Logo.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1e0ab67fad2cef7470cef6e897ff8bb2%3frik%3dCHCA%252bwSRggr9Xg%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=quicksilver+logo&FORM=IRPRST&ck=3EBD99BC9223DA8794AEA856F5C5650F&selectedIndex=0&itb=1",
    },
    {
      id: 6,
      name_fr: "Chanel",
      name_en: "Chanel",
      description_fr: "Maison de haute couture française",
      description_en: "French luxury fashion house",
      price: "€15 000",
      logo: "https://www.pexels.com/fr-fr/photo/des-roses-roses-dans-un-sac-en-papier-11155051/",
    },
    {
      id: 7,
      name_fr: "Gucci",
      name_en: "Gucci",
      description_fr: "Marque italienne de luxe (mode & accessoires)",
      description_en: "Italian luxury fashion brand",
      price: "€14 000",
      logo: "https://www.pexels.com/fr-fr/photo/mode-homme-debout-jeune-16379095/",
    },
    {
      id: 8,
      name_fr: "Starbucks",
      name_en: "Starbucks",
      description_fr: "Chaîne internationale de cafés",
      description_en: "International coffeehouse chain",
      price: "€11 000",
      logo: "https://www.pexels.com/fr-fr/photo/photo-en-gros-plan-du-gobelet-jetable-starbucks-2042606/",
    },
    {
      id: 9,
      name_fr: "McDonald’s",
      name_en: "McDonald’s",
      description_fr: "Chaîne de restauration rapide mondiale",
      description_en: "Global fast food restaurant chain",
      price: "€13 000",
      logo: "https://www.pexels.com/fr-fr/photo/building-batiment-immeuble-mur-11459428/",
    },
    {
      id: 10,
      name_fr: "Apple",
      name_en: "Apple",
      description_fr: "Entreprise technologique, matériel et logiciel",
      description_en: "Technology company (hardware & software)",
      price: "€20 000",
      logo: "https://www.pexels.com/fr-fr/photo/logo-apple-544295/",
    },
  ];

  // todo : rajouter lien internet et histoire dans la liste de logo. 
  // ou encore date de début et fin de partenariat
  {/* mettre lunaar, safran, val d'indre, lycée grandmont, pole de tours  ? revori avec parent */}
          {/* mettre fédé, MOC, Ministere Mauricien */}

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

          {/* Toggle Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
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

          <div
            className={`bg-sky-100 dark:bg-sky-900 rounded-2xl grid gap-6 transition-all duration-300 ${
              expanded ? "grid-cols-1" : "md:grid-cols-2"
            }`}
          >
            <CalendarSection />
            {expanded ? (
              <>
                <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100 dark:border-slate-700 transition-colors duration-300">
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
        <section >
          <h2 className="text-3xl font-bold text-center dark:text-white mb-2">
            {t("Sport.career")}
          </h2>
          <div className="w-50 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <AchievementRanking />
        </section>

        {/* Header */}
        <section>
          {/* todo : revoir bg ligh sky-100 ou 200 ?   */}
          <div className="min-h-screen bg-sky-100 dark:bg-sky-950 py-6  rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Section */}
              <section className="mb-16">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    {t("Sport.budget.seasonbudget")}
                  </h2>
                  <div className="w-50 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-8"></div>

                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    {t("Sport.budget.intro")}
                  </p>
                </div>
              </section>

              {/* Budget Components */}
              <div className="space-y-8">
                {/* Equipment Section */}
                <div className="w-full">
                  <BudgetMaterial />
                </div>

                {/* Training & Race Section */}
                <div className="w-full">
                  <BudgetEvent />
                </div>

                {/* Summary Section */}
                <div className="w-full">
                  <BudgetRecap />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Gradient derrière le card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1"></div>

            {/* Card principale */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 border border-gray-200  dark:border-sky-700/50">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {t("Sport.moreinfo")}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
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

        <section className="bg-sky-100 dark:bg-sky-900 py-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-2 text-center dark:text-white">
            {t("Sport.join")}
          {/* todo : faire partie sponsor ou participateur de l'aventure // Partenaire de l'aventure */}
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>

          <div className="bg-sky-100 dark:bg-sky-900 py-12 overflow-hidden rounded-3xl">
            <LogoSliders items={logos} speed={30} />
          </div>

          
        </section>

        <div className="mt-6 text-center text-gray-700 italic dark:text-slate-200">
          {t("Sport.citation")}
        </div>
      </main>
    </div>
  );
}
