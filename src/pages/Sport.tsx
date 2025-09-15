import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import CalendarSection from "../components/CalendarSection.tsx";
import SportObjectif from "../components/SportObjectif.tsx";
import EventList from "../components/EventList.tsx";
import AchievementRanking from "../components/AchievementRanking.tsx";
// import TooltipPoint from "../components/ToolTipPoint.tsx";

import { Maximize2, Minimize2, DollarSign , Users } from "lucide-react";
import BudgetMaterial from "../components/BudgetMaterial.tsx";

// import { useInView } from "react-intersection-observer";
// import { useCountUp } from "../hooks/useCountUp"; // ton hook créé juste au-des

// import hikospraydeck from "../medias/images/budget/hiko_spraydeck.png";
// // import hikolifejacket from "../medias/images/budget/hiko_lifejacket.png";
// import racerst from "../medias/images/budget/racerst.png";
// import kayakcrosshelmet from "../medias/images/budget/kayakcross_helmet.png";
// import vadjahelmet from "../medias/images/budget/vajda_helmet.png";

// import k1paddle from "../medias/images/budget/k1_paddle.png";
// import c1paddle from "../medias/images/budget/c1_paddle.png";

// import slalomboat from "../medias/images/budget/slalom_boat.png";
// import kayakcrossboat from "../medias/images/budget/kayakcross_boat.png";

// // import imagetest from "../medias/images/DSC04086.png"
// import kayakCross from "../medias/images/budget/Foix_kayakCross.jpg";
// import canoeslalom from "../medias/images/budget/Foix_slalom.jpg";
// import canoeslalom from "../medias/images/Capture d'écran 2025-09-11 103259.png";

export default function Sport() {
  const { t } = useTranslation();
  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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

  //todo : gerer trad dans toute la page.  modal inclus
  // mettre dans index- global // revoir pour la traduction ? ou faire trad avec les 2 fichier index ??
  // const photos = [
  //   {
  //     src: canoeslalom,
  //     alt: "Canoe Slalom",
  //     tooltips: [
  //       {
  //         x: "45%",
  //         y: "38%",
  //         img: vadjahelmet,
  //         price: 240,
  //         text: t("Sport.budget.helmet"),
  //       },
  //       {
  //         x: "37%",
  //         y: "72%",
  //         img: c1paddle,
  //         price: 360,
  //         text: t("Sport.budget.c1paddle"),
  //       },
  //       {
  //         x: "65%",
  //         y: "68%",
  //         img: slalomboat,
  //         price: 2500,
  //         text: t("Sport.budget.slalomboat"),
  //       },
  //       {
  //         x: "50%",
  //         y: "60%",
  //         img: racerst,
  //         price: 320,
  //         text: t("Sport.budget.racerst"),
  //       },
  //     ],
  //   },
  //   {
  //     src: kayakCross,
  //     alt: "Kayak Cross",
  //     tooltips: [
  //       {
  //         x: "53%",
  //         y: "39%",
  //         img: kayakcrosshelmet,
  //         price: 120,
  //         text: t("Sport.budget.helmet"),
  //       },
  //       {
  //         x: "40%",
  //         y: "54%",
  //         img: k1paddle,
  //         price: 500,
  //         text: t("Sport.budget.k1paddle"),
  //       },
  //       {
  //         x: "30%",
  //         y: "70%",
  //         img: kayakcrossboat,
  //         price: 2000,
  //         text: t("Sport.budget.kayakcrossboat"),
  //       },
  //     ],
  //   },
  // ];

  // calculer les totaux par sport
  // const totals = photos.map((p) =>
  //   p.tooltips.reduce((sum, item) => sum + item.price, 0)
  // );

  // // total global
  // const globalTotal = totals.reduce((a, b) => a + b, 0);

  // const equipement = useCountUp(inView ? globalTotal : 0);
  // const deplacement = useCountUp(inView ? 14550 : 0);
  // const total = useCountUp(inView ? 20590 : 0);

  // const formatPrice = (val: number) =>
  //   new Intl.NumberFormat("fr-FR", {
  //     style: "currency",
  //     currency: "EUR",
  //     minimumFractionDigits: 0,
  //   }).format(val);

  return (
    <div className="">
      <HeroSection currentPage={"sport"} />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* Projects / Objectives */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Sport.projet&objectif")}
          </h2>
          <SportObjectif />
        </section>

        {/* Calendar / Events */}

        <section id="calendar" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Sport.incomingevent")}
          </h2>

          {/* Bouton d’agrandissement */}
          {/* revoir le placement du btn  */}
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition flex flex-row"
            >
              {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              {/* {expanded ? t('Sport.calendarreduce') : t('Sport.calendargrowth') } */}
            </button>
          </div>

          {/* <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            {expanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            {expanded ? "Réduire" : "Agrandir"}
          </button> */}

          {/* Layout responsive selon l’état */}
          <div
            className={`grid gap-8 shadow-md transition-all duration-300 ${
              expanded ? "grid-cols-1" : "md:grid-cols-2"
            }`}
          >
            <div
              className={`bg-gray-100 rounded-lg p-3 transition-all duration-300 ${
                expanded ? "col-span-1 w-full" : "w-full"
              }`}
            >
              <CalendarSection />
            </div>

            {/* En mode expanded, EventList passe en dessous */}
            <div className={`${expanded ? "col-span-1" : ""}`}>
              <EventList />
            </div>
          </div>
        </section>
        {/* Palmarès / Carrière */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t("Sport.career")}
          </h2>
          <AchievementRanking />
        </section>

        {/* Budget / Sponsorship */}
        {/* revoir responsiv telephone  */}
        <BudgetMaterial />

        {/* Call-to-action / téléchargement */}
        <h3 className="text-2xl font-bold mb-2 text-center">
          {t("Sport.moreinfo")}
        </h3>
        <p className="text-gray-700 mb-4 text-center">
          {t("Sport.moreinfotxt")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <DownloadButton
            fileChoice={"Budget"}
            title={"Budget"}
            description={"découvrer mes dépenses "}
            icon= {<DollarSign className="w-8 h-8 text-blue-600" />}
            variant={"primary"}
          />

          <DownloadButton
            fileChoice={"Sponsor"}
            title={"Sponsor"}
            description={"rejoignez l'aventure"}
            icon={<Users className="w-8 h-8 text-blue-600" />}
            variant={"primary"}
          />
        
        </div>

        <section>
          <h3 className="text-2xl font-bold mb-2 text-center">
            {t("Sport.join")}
          </h3>

          {/* faire card  */}

          {/* mettre fédé, MOC, Ministere Mauricien */}
        </section>

        <div className="mt-6 text-center text-gray-700 italic">
          {t("Sport.citation")}
        </div>

        {/* todo : revoir un truc avec motion framer pour au scroll afficher les différents equippement a droite et gauche de la photo plutot ?  */}

        {/* <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">
            Déjà dans l’aventure
          </h2>
        </section> */}
      </main>
    </div>
  );
}
