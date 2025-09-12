import { useTranslation } from "react-i18next";
import TooltipPoint from "../components/ToolTipPoint.tsx";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "../hooks/useCountUp";

// import hikospraydeck from "../medias/images/budget/hiko_spraydeck.png";
// import hikolifejacket from "../medias/images/budget/hiko_lifejacket.png";
import racerst from "../medias/images/budget/racerst.png";
import kayakcrosshelmet from "../medias/images/budget/kayakcross_helmet.png";
import vadjahelmet from "../medias/images/budget/vajda_helmet.png";

import k1paddle from "../medias/images/budget/k1_paddle.png";
import c1paddle from "../medias/images/budget/c1_paddle.png";

import slalomboat from "../medias/images/budget/slalom_boat.png";
import kayakcrossboat from "../medias/images/budget/kayakcross_boat.png";

import kayakCross from "../medias/images/budget/Foix_kayakCross.jpg";
import canoeslalom from "../medias/images/budget/Foix_slalom.jpg";
// import canoeslalom from "../medias/images/Capture d'écran 2025-09-11 103259.png";

const BudgetMaterial = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

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

  const totals = photos.map((p) =>
    p.tooltips.reduce((sum, item) => sum + item.price, 0)
  );

  const globalTotal = totals.reduce((a, b) => a + b, 0);

  const equipement = useCountUp(inView ? globalTotal : 0);
  const deplacement = useCountUp(inView ? 14550 : 0);
  const total = useCountUp(inView ? 20590 : 0);

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(val);

  return (
    <section className="space-y-8 m text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold"> {t("Sport.budget.seasonbudget")}</h2>
      <h3 className="text-2xl font-bold"> {t("Sport.budget.material")}</h3>

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

      {/* todo : exmple de placement de logo pour les sponsors  */}
      {/*
          <div>
            <img src={imagetest} alt="pochette" />
             mettre texte ancien sponsor exemple  */}

      {/* mettre une photo de course ou on voit le sponsor 
          </div>*/}

      {/* nouvelle div full width pour infos stages / compétitions */}
      <h3 className="text-2xl font-bold my-4 text-center">
        {t("Sport.budget.training&race")}
      </h3>
      <div className="w-full bg-white rounded-2xl shadow-md p-6 mt-8">
        {/* Titre principal */}

        {/* Introduction */}
        <p className=" text-gray-700 text-center">
          1 saison se compose de 6 semaines de compétition international ( 5
          World cup et 1 Worldchampionship)
        </p>
        <p className=" text-gray-700 text-center">
          Il ya 1 semaines supplémentaire d'entrainement pour le championnat du
          monde + 2 semaines de camps d'entrainement par ans minimum
        </p>
        <p className=" text-gray-700 text-center">
          soit 9 semaines, uniquement pour les evenement internationaux, car il
          y a également 5 courses Nationales N1 ou N2.{" "}
        </p>
        <p className=" text-gray-700 text-center mb-4">
          + coût de l'entraînement quotidien
        </p>

        {/* Budget détaillé avec tooltip */}
        {/* todo : revoir la largeur et le positionnement du  tooltip  */}

        <ul className="space-y-4 text-gray-700">
          <li className="flex justify-center items-center">
            <strong>{t("Sport.deplacement.registrationfee")} :</strong>
            <span className="relative group cursor-pointer text-blue-600 font-semibold ml-3">
              1130€
              <span className="absolute bottom-full right-17.5 mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                130€ par coupe du monde (x5) + 240€ par mondiaux (x2)
              </span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <strong>{t("Sport.deplacement.coaching")} :</strong>
            <span className="relative group cursor-pointer text-blue-600 font-semibold ml-3">
              6420€
              <span className="absolute bottom-full right-17.5 mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                2571€ pour 4 semaines de compétition → 642€/semaine → 6420€ par
                saison
              </span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <strong>{t("Sport.deplacement.accomodation")} :</strong>
            <span className="relative group cursor-pointer text-blue-600 font-semibold ml-3">
              3150€
              <span className="absolute bottom-full right-17.5 mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                Airbnb 1260€ → moyenne par événement : 315€
              </span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <strong>{t("Sport.deplacement.food")} :</strong>
            <span className="relative group cursor-pointer text-blue-600 font-semibold ml-3">
              1400€
              <span className="absolute bottom-full right-17.5 mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                Repas équilibrés ~140€/semaine
              </span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <strong>{t("Sport.deplacement.transport")} :</strong>
            <span className="relative group cursor-pointer text-blue-600 font-semibold ml-3">
              800€
              <span className="absolute bottom-full right-17.5 mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                Dépend de la distance, mode de transport, prix essence
                (110-112-112)
              </span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <strong>{t("Sport.deplacement.other")} :</strong>
            <span className="relative group cursor-pointer text-blue-600 font-semibold ml-3">
              1200€
              <span className="absolute bottom-full right-17.5 mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                Séances 10-25€/séance, 1-2 séances/jour → ~120€/semaine → 1200€
                pour 10 semaines
              </span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <strong>Abonnement Pau structure d'entraînement :</strong>
            <span className="relative group cursor-pointer text-blue-600 font-semibold ml-3">
              1250€
              <span className="absolute bottom-full right-17.5 mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                Abonnement annuel
              </span>
            </span>
          </li>
        </ul>

        {/* Total */}
        <div className="mt-8 bg-gray-50 text-black text-center p-6 rounded-xl shadow">
          {/* <h3 className="text-lg font-bold">
            {t("Sport.budget.training&race")}
          </h3> */}
          <p className="text-2xl font-extrabold mt-2">
            {t("Sport.budget.total")} 14 550 €
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-6 mt-6">
        {t("Sport.budget.sum&info")}
      </h2>

      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
          <span className="text-4xl mb-2">🛶</span>
          <h3 className="text-lg font-semibold">
            {" "}
            {t("Sport.budget.equippement")}
          </h3>
          <p className="text-2xl font-bold mt-2">{formatPrice(equipement)}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
          <span className="text-4xl mb-2">✈️</span>
          <h3 className="text-lg font-semibold"> {t("Sport.budget.travel")}</h3>
          <p className="text-2xl font-bold mt-2">{formatPrice(deplacement)}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
          <span className="text-4xl mb-2">🗒️</span>
          <h3 className="text-lg font-semibold">
            {" "}
            {t("Sport.budget.totalglo")}
          </h3>
          <p className="text-2xl font-bold mt-2">{formatPrice(total)}</p>
        </div>
      </div>
      <p>
        au vu des mes impératifs pro et de ma capacité financiere, je ne peux
        pas me permettre de faire une saison complete, je choisi donc 3 world
        cup et les championnats du monde en plus des compétitions en france{" "}
      </p>
      <p>
        {" "}
        de meme point qu'un athlete pro change de bateau tous les ans, mon
        bateau fait 2-3 saison avant d'etre changer. pareil pour le reste du
        materiel d'ailleurs
      </p>
    </section>
    // todo : revoir et mettre le systeme des photos ici
    // todo : faire le composant.

    //  garder le tooltippoint ? ou un systeme de scroll ou tjrs afficher. // tester les 2 et voir avec papa
  );
};

export default BudgetMaterial;
