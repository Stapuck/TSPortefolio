import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection.tsx";
import DownloadButton from "../components/DownloadBtn.tsx";
import CalendarSection from "../components/CalendarSection.tsx";
import SportObjectif from "../components/SportObjectif.tsx";
import EventList from "../components/EventList.tsx";
import AchievementRanking from "../components/AchievementRanking.tsx";
import TooltipPoint from "../components/ToolTipPoint.tsx";

import { useInView } from "react-intersection-observer";
import { useCountUp } from "../hooks/useCountUp"; // ton hook créé juste au-des

// import hikospraydeck from "../medias/images/budget/hiko_spraydeck.png";
// import hikolifejacket from "../medias/images/budget/hiko_lifejacket.png";
import racerst from "../medias/images/budget/racerst.png";
import kayakcrosshelmet from "../medias/images/budget/kayakcross_helmet.png";
import vadjahelmet from "../medias/images/budget/vajda_helmet.png";

import k1paddle from "../medias/images/budget/k1_paddle.png";
import c1paddle from "../medias/images/budget/c1_paddle.png";

import slalomboat from "../medias/images/budget/slalom_boat.png";
import kayakcrossboat from "../medias/images/budget/kayakcross_boat.png";

// import imagetest from "../medias/images/DSC04086.png"
import kayakCross from "../medias/images/budget/Foix_kayakCross.jpg";
import canoeslalom from "../medias/images/budget/Foix_slalom.jpg";

export default function Sport() {
  const { t } = useTranslation();
  // const [currentPhoto, setCurrentPhoto] = useState(0);
  useEffect(() => {
    document.title = "TS - Sport";
    window.scrollTo(0, 0);
  }, []);


  //todo : gerer trad dans toute la page.  modal inclus 
  // mettre dans index- global // revoir pour la traduction ? ou faire trad avec les 2 fichier index ??
  const photos = [
    {
      src: canoeslalom,
      alt: "Canoe Slalom",
      tooltips: [
        {
          x: "45%",
          y: "38%",
          img: vadjahelmet,
          price: 240,
          text: t("Sport.budget.helmet"),
        },
        {
          x: "37%",
          y: "72%",
          img: c1paddle,
          price: 360,
          text: t("Sport.budget.c1paddle"),
        },
        {
          x: "65%",
          y: "68%",
          img: slalomboat,
          price: 2500,
          text: t("Sport.budget.slalomboat"),
        },
        {
          x: "50%",
          y: "60%",
          img: racerst,
          price: 320,
          text: t("Sport.budget.racerst"),
        },
      ],
    },
    {
      src: kayakCross,
      alt: "Kayak Cross",
      tooltips: [
        {
          x: "53%",
          y: "39%",
          img: kayakcrosshelmet,
          price: 120,
          text: t("Sport.budget.helmet"),
        },
        {
          x: "40%",
          y: "54%",
          img: k1paddle,
          price: 500,
          text: t("Sport.budget.k1paddle"),
        },
        {
          x: "30%",
          y: "70%",
          img: kayakcrossboat,
          price: 2000,
          text: t("Sport.budget.kayakcrossboat"),
        },
      ],
    },
  ];

  // calculer les totaux par sport
  const totals = photos.map((p) =>
    p.tooltips.reduce((sum, item) => sum + item.price, 0)
  );

  // total global
  const globalTotal = totals.reduce((a, b) => a + b, 0);

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(val);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const equipement = useCountUp(inView ? globalTotal : 0);
  const deplacement = useCountUp(inView ? 14550 : 0);
  const total = useCountUp(inView ? 20590 : 0);

  return (
    <div className="text-gray-800">
      <HeroSection currentPage={"sport"} />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* Projects / Objectives */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            🎯 Projets & Objectifs
          </h2>
          <SportObjectif />
        </section>

        {/* Calendar / Events */}
        {/* prendre en compte la langue pour calendrier et menu pour afficher title_fr ou title_en en fonction */}
        <section id="calendar" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            📅 Evenements à venir !
          </h2>

          <div className="grid md:grid-cols-2 gap-8 shadow-md">
            {/* Calendar Section */}
            <div className="bg-gray-100 rounded-lg p-3">
              <CalendarSection />
            </div>
            {/* List of events with dropdown menus */}
            <EventList />
          </div>
        </section>

        {/* Palmarès / Carrière */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            🏆 Palmarès & Carrière
          </h2>
          <AchievementRanking />
        </section>

        {/* Budget / Sponsorship */}
        {/* revoir responsiv telephone  */}
        <section className="space-y-8 m text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold">💰 Budget de saison</h2>

          {/* grid avec les 2 photos */}
          <div className="grid md:grid-cols-2 gap-8">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative p-4 rounded-2xl shadow-lg bg-white flex flex-col items-center"
              >
                {/* image + tooltips */}
                {/* bug sur le tooltip de casque qui est tt le temps visible  */}
                <div className="relative flex justify-center w-full">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="rounded-xl shadow-lg w-full"
                  />
                  {photo.tooltips.map((tooltip, j) => (
                    <TooltipPoint
                      key={j}
                      x={tooltip.x}
                      y={tooltip.y}
                      img={tooltip.img}
                      price={formatPrice(tooltip.price)}
                      text={tooltip.text}
                    />
                  ))}
                </div>

                {/* bloc infos */}
                <div className="mt-6 bg-gray-50 text-black text-center p-4 rounded-xl shadow">
                  <h3 className="text-lg font-bold">{photo.alt}</h3>
                  <p className="text-2xl font-extrabold mt-2">
                    Total : {formatPrice(totals[i])}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/*
          <div>
            <img src={imagetest} alt="pochette" />
             mettre texte ancien sponsor exemple  */}

          {/* mettre une photo de course ou on voit le sponsor 
          </div>*/}

          {/* nouvelle div full width pour infos stages / compétitions */}
          <div className="w-full bg-white rounded-2xl shadow-md p-6 mt-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Infos Stages & Compétitions
            </h3>
            <p>
              7 semaine de compétition + 3 semaines de stage, 1 saison = 10
              semaines + cout entrainement quotidien
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Frais d'inscription :</strong> 130€ par coupe du monde
                (x5) // 240€ par mondiaux (x2) : 650 + 480 = 1130€
              </li>
              <li>
                <strong>Coaching :</strong> 2571€ pour 4 semaines de compétition
                soit 642€par semaine de compétition / entrainement ( 7 semaines
                de coméptition + 3semaine d'entrainement) soit 6420€ par saison
              </li>
              <li>
                <strong>Hébergement :</strong> airbnb 1260 // moyenne par
                evenement : 315€ = 3150€
              </li>
              <li>
                <strong>Food :</strong> Repas équilibrés ~ 140€ / semaines
              </li>
              <li>
                <strong>Transport :</strong> depend de la distance, mode de
                transport, prix de l'essence (110 - 112 - 112) : 800€
              </li>
              <li>
                <strong>Autres :</strong> prix des séances entre 10€ et 25€ par
                séance ( 1-2 seances par jours ou 8 seances/semaine en moyenne)
                8*15 = 120 /semaine *10 = 1200€
              </li>

              <li>
                <strong>abonnement Pau structure d'entrainement :</strong> 1250€
              </li>
            </ul>

            <div className="mt-6 bg-gray-50 text-black text-center p-4 rounded-xl shadow">
              <h3 className="text-lg font-bold">Stage et compétition </h3>
              <p className="text-2xl font-extrabold mt-2">
                Total : 1130 + 6420 + 3500 + 1400 +1200 + 1250 = 14 550 €
              </p>
            </div>
          </div>

          {/* montant global */}
          {/* <div className="text-center mt-10">
            <h3 className="text-2xl font-bold">
              Total equippement : {formatPrice(globalTotal)}
            </h3>
            <h3 className="text-2xl font-bold">Total deplacement : 14 550 €</h3>
            <h3 className="text-2xl font-bold">Total global : 20 590€</h3>
          </div> */}

          <h2 className="text-3xl font-bold text-center mb-6 mt-6">
            📊 Récapitulatif & Infos
          </h2>

          {/* Totaux en cards côte à côte */}
          {/* <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
              <span className="text-4xl mb-2">🛶</span>
              <h3 className="text-lg font-semibold">Équipement</h3>
              <p className="text-2xl font-bold mt-2">
                {formatPrice(globalTotal)}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
              <span className="text-4xl mb-2">✈️</span>
              <h3 className="text-lg font-semibold">Déplacement</h3>
              <p className="text-2xl font-bold mt-2">14 550 €</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
              <span className="text-4xl mb-2">🏆</span>
              <h3 className="text-lg font-semibold">Total Global</h3>
              <p className="text-2xl font-bold mt-2">20 590 €</p>
            </div>
          </div> */}

          <div ref={ref} className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
              <span className="text-4xl mb-2">🛶</span>
              <h3 className="text-lg font-semibold">Équipement</h3>
              <p className="text-2xl font-bold mt-2">
                {formatPrice(equipement)}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
              <span className="text-4xl mb-2">✈️</span>
              <h3 className="text-lg font-semibold">Déplacement</h3>
              <p className="text-2xl font-bold mt-2">
                {formatPrice(deplacement)}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
              <span className="text-4xl mb-2">🏆</span>
              <h3 className="text-lg font-semibold">Total Global</h3>
              <p className="text-2xl font-bold mt-2">{formatPrice(total)}</p>
            </div>

          </div>
            <p>au vu des mes impératifs pro et de ma capacité financiere, je ne peux pas me permettre de faire une saison complete, je choisi donc 3 world cup et les championnats du monde en plus des compétitions en france </p>
            <p> de meme point qu'un athlete pro change de bateau tous les ans, mon bateau fait 2-3 saison avant d'etre changer. pareil pour le reste du materiel d'ailleurs</p>
          {/* Séparateur visuel */}
          <div className="my-6 border-t border-gray-300"></div>

          {/* Call-to-action / téléchargement */}
          {/* <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">
              📂 Pour plus d'informations
            </h3>
            <p>Consultez nos fichiers budget et sponsoring :</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
              <DownloadButton fileChoice={"Budget"} />
              <DownloadButton fileChoice={"Sponsor"} />
            </div>
          </div> */}

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">
              📂 Pour plus d'informations
            </h3>
            <p className="text-gray-700 mb-4">
              Téléchargez nos fichiers budget et sponsoring pour tout savoir :
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* Card Budget */}
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 w-40 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl mb-2">💰</span>
                <p className="font-semibold mb-2">Budget</p>
                <DownloadButton fileChoice={"Budget"} />
              </div>

              {/* Card Sponsor */}
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 w-40 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl mb-2">🤝</span>
                <p className="font-semibold mb-2">Sponsoring</p>
                <DownloadButton fileChoice={"Sponsor"} />
              </div>
            </div>
          </div>

          {/* Petit texte informatif ou citation */}
          <div className="mt-6 text-center text-gray-700 italic">
            « La performance commence par une bonne préparation et un budget
            maîtrisé. »
          </div>

          {/* ici modif */}
          {/* <h2 className="text-xl font-semibold">Pour plus d'information :</h2>
          <div className="flex flex-rox gap-3">
            <DownloadButton fileChoice={"Budget"} />
            <DownloadButton fileChoice={"Sponsor"} />
          </div> */}
        </section>

        {/* Budget / Sponsorship */}
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
