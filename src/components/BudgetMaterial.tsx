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
import kayakcrossdeck from "../medias/images/budget/KayakCross_spraydeck.png";

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
          {
          x: "53%",
          y: "65%",
          img: kayakcrossdeck,
          price: 120,
          text: t("Sport.budget.kayakcrossdeck"),
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
                {/* Abonnement annuel des séances, coaching, accès salle de muscul */}
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

// import { useTranslation } from "react-i18next";
// import { useInView } from "react-intersection-observer";
// import { useCountUp } from "../hooks/useCountUp";
// import { Calculator, Zap, Plane, Receipt, MapPin, Clock } from "lucide-react";

// // Import images
// import racerst from "../medias/images/budget/racerst.png";
// import kayakcrossdeck from "../medias/images/budget/KayakCross_spraydeck.png";
// import kayakcrosshelmet from "../medias/images/budget/kayakcross_helmet.png";
// import vadjahelmet from "../medias/images/budget/vajda_helmet.png";
// import k1paddle from "../medias/images/budget/k1_paddle.png";
// import c1paddle from "../medias/images/budget/c1_paddle.png";
// import slalomboat from "../medias/images/budget/slalom_boat.png";
// import kayakcrossboat from "../medias/images/budget/kayakcross_boat.png";
// import kayakCross from "../medias/images/budget/Foix_kayakCross.jpg";
// import canoeslalom from "../medias/images/budget/Foix_slalom.jpg";

// const BudgetMaterial = () => {
//   const { t } = useTranslation();
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   const equipmentData = [
//     {
//       title: "Canoe Slalom",
//       image: canoeslalom,
//       items: [
//         { name: t("Sport.budget.helmet"), price: 240, image: vadjahelmet },
//         { name: t("Sport.budget.c1paddle"), price: 360, image: c1paddle },
//         { name: t("Sport.budget.slalomboat"), price: 2500, image: slalomboat },
//         { name: t("Sport.budget.racerst"), price: 320, image: racerst },
//       ]
//     },
//     {
//       title: "Kayak Cross",
//       image: kayakCross,
//       items: [
//         { name: t("Sport.budget.helmet"), price: 120, image: kayakcrosshelmet },
//         { name: t("Sport.budget.k1paddle"), price: 500, image: k1paddle },
//         { name: t("Sport.budget.kayakcrossboat"), price: 2000, image: kayakcrossboat },
//         { name: t("Sport.budget.kayakcrossdeck"), price: 200, image: kayakcrossdeck },
//       ]
//     }
//   ];

//   const travelExpenses = [
//     {
//       key: "registrationfee",
//       label: t("Sport.deplacement.registrationfee"),
//       amount: 1130,
//       tooltip: "130€ par coupe du monde (x5) + 240€ par mondiaux (x2)"
//     },
//     {
//       key: "coaching",
//       label: t("Sport.deplacement.coaching"),
//       amount: 6420,
//       tooltip: "2571€ pour 4 semaines de compétition → 642€/semaine → 6420€ par saison"
//     },
//     {
//       key: "accommodation",
//       label: t("Sport.deplacement.accomodation"),
//       amount: 3150,
//       tooltip: "Airbnb 1260€ → moyenne par événement : 315€"
//     },
//     {
//       key: "food",
//       label: t("Sport.deplacement.food"),
//       amount: 1400,
//       tooltip: "Repas équilibrés ~140€/semaine"
//     },
//     {
//       key: "transport",
//       label: t("Sport.deplacement.transport"),
//       amount: 800,
//       tooltip: "Dépend de la distance, mode de transport, prix essence"
//     },
//     {
//       key: "other",
//       label: t("Sport.deplacement.other"),
//       amount: 1200,
//       tooltip: "Séances 10-25€/séance, 1-2 séances/jour → ~120€/semaine"
//     },
//     {
//       key: "subscription",
//       label: "Abonnement Pau structure d'entraînement",
//       amount: 1250,
//       tooltip: "Abonnement annuel"
//     }
//   ];

//   const totalEquipment = equipmentData.reduce((total, category) => 
//     total + category.items.reduce((sum, item) => sum + item.price, 0), 0
//   );

//   const totalTravel = travelExpenses.reduce((sum, expense) => sum + expense.amount, 0);
//   const globalTotal = totalEquipment + totalTravel;

//   const equipmentCount = useCountUp(inView ? totalEquipment : 0);
//   const travelCount = useCountUp(inView ? totalTravel : 0);
//   const totalCount = useCountUp(inView ? globalTotal : 0);

//   const formatPrice = (val: number) =>
//     new Intl.NumberFormat("fr-FR", {
//       style: "currency",
//       currency: "EUR",
//       minimumFractionDigits: 0,
//     }).format(val);

//   return (
//     <section className="py-16 px-6 bg-gray-50 rounded-3xl">
//     {/*  <section className="py-16 px-6"> */}
//     {/* todo : redispacher le composant en plusieurs composant ?  */}
//       <div className="max-w-6xl mx-auto space-y-16">
//         {/* Header */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             {t("Sport.budget.seasonbudget")}
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Découvrez le budget nécessaire pour une saison complète de compétition internationale
//           </p>
//         </div>

//         {/* Equipment Section */}
//         <div className="space-y-8">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">
//               {t("Sport.budget.material")}
//             </h3>
//             {/* todo : mettre un btn pour passer de tooltip à liste  */}
//             <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {equipmentData.map((category, index) => {
//               const categoryTotal = category.items.reduce((sum, item) => sum + item.price, 0);
              
//               return (
//                 <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
//                   {/* Category Image */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={category.image}
//                       alt={category.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                     <div className="absolute bottom-4 left-4 text-white">
//                       <h4 className="text-xl font-bold">{category.title}</h4>
//                     </div>
//                   </div>

//                   {/* Equipment List */}
//                   <div className="p-6">
//                     <div className="space-y-4 mb-6">
//                       {category.items.map((item, itemIndex) => (
//                         <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                           <div className="flex items-center space-x-3">
//                             <img
//                               src={item.image}
//                               alt={item.name}
//                               className="w-12 h-12 object-cover rounded-lg"
//                             />
//                             <span className="font-medium text-gray-700">{item.name}</span>
//                           </div>
//                           <span className="font-bold text-blue-600">{formatPrice(item.price)}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Category Total */}
//                     <div className="bg-blue-50 p-4 rounded-xl text-center">
//                       <p className="text-sm text-blue-600 font-medium mb-1">Budget {category.title}</p>
//                       <p className="text-2xl font-bold text-blue-700">{formatPrice(categoryTotal)}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Travel & Training Section */}
//         <div className="space-y-8">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">
//               {t("Sport.budget.training&race")}
//             </h3>
//             <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
//           </div>

//           <div className="bg-white rounded-3xl shadow-lg p-8">
//             {/* Introduction */}
//             <div className="bg-green-50 p-6 rounded-2xl mb-8">
//               <div className="grid md:grid-cols-3 gap-4 text-center">
//                 <div className="flex items-center justify-center space-x-2">
//                   <MapPin className="w-5 h-5 text-green-600" />
//                   <span className="text-sm text-gray-700">6 semaines de compétition internationale</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2">
//                   <Clock className="w-5 h-5 text-green-600" />
//                   <span className="text-sm text-gray-700">3 semaines de camps d'entraînement</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2">
//                   <Zap className="w-5 h-5 text-green-600" />
//                   <span className="text-sm text-gray-700">5 courses nationales N1/N2</span>
//                 </div>
//               </div>
//             </div>

//             {/* Expenses Grid */}
//             <div className="grid md:grid-cols-2 gap-6">
//               {travelExpenses.map((expense, index) => (
//                 <div key={index} className="group relative">
//                   <div className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors cursor-help">
//                     <div className="flex justify-between items-center">
//                       <h4 className="font-semibold text-gray-800">{expense.label}</h4>
//                       <span className="font-bold text-green-600 text-lg">{formatPrice(expense.amount)}</span>
//                     </div>
                    
//                     {/* Tooltip */}
//                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-72 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-xl z-10">
//                       {expense.tooltip}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Travel Total */}
//             <div className="mt-8 bg-green-50 p-6 rounded-xl text-center">
//               <p className="text-sm text-green-600 font-medium mb-1">
//                 {t("Sport.budget.training&race")}
//               </p>
//               <p className="text-2xl font-bold text-green-700">{formatPrice(totalTravel)}</p>
//             </div>
//           </div>
//         </div>

//         {/* Summary Section */}
//         <div ref={ref} className="space-y-8">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">
//               {t("Sport.budget.sum&info")}
//             </h3>
//             <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full" />
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
//               <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
//                 <Calculator className="w-8 h-8 text-blue-600" />
//               </div>
//               <h4 className="text-lg font-semibold text-gray-800 mb-2">
//                 {t("Sport.budget.equippement")}
//               </h4>
//               <p className="text-3xl font-bold text-blue-600">{formatPrice(equipmentCount)}</p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
//               <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
//                 <Plane className="w-8 h-8 text-green-600" />
//               </div>
//               <h4 className="text-lg font-semibold text-gray-800 mb-2">
//                 {t("Sport.budget.travel")}
//               </h4>
//               <p className="text-3xl font-bold text-green-600">{formatPrice(travelCount)}</p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
//               <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
//                 <Receipt className="w-8 h-8 text-purple-600" />
//               </div>
//               <h4 className="text-lg font-semibold text-gray-800 mb-2">
//                 {t("Sport.budget.totalglo")}
//               </h4>
//               <p className="text-3xl font-bold text-purple-600">{formatPrice(totalCount)}</p>
//             </div>
//           </div>

//           {/* Additional Info */}
//           <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
//             <div className="flex items-start space-x-3">
//               <div className="p-2 bg-yellow-100 rounded-lg">
//                 <Receipt className="w-5 h-5 text-yellow-600" />
//               </div>
//               <div className="text-sm text-yellow-800">
//                 <p className="font-medium mb-2">Réalité budgétaire :</p>
//                 <p className="mb-2">
//                   Compte tenu de mes impératifs professionnels et de ma capacité financière, 
//                   je ne peux pas me permettre une saison complète. Je choisis donc 3 World Cup 
//                   et les championnats du monde en plus des compétitions en France.
//                 </p>
//                 <p>
//                   De même, contrairement à un athlète professionnel qui change de bateau chaque année, 
//                   mon matériel fait 2-3 saisons avant d'être renouvelé.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BudgetMaterial;



//todo : prendre version claude, mais permettre d'avoir les tools type dans un premier temps. 