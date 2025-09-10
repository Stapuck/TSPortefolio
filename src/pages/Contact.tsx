// import { useEffect } from "react";
// import HeroSection from "../components/HeroSection.tsx";

// export default function Contact() {
//   useEffect(() => {
//     document.title = "TS - Contact";
//   }, []);

//   return (
//      <div className="text-gray-800">
//       <HeroSection currentPage={"contact"} />
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
//       <h1 className="flex justify-center text-3xl font-bold">
//         📩 Page Contact
//       </h1>

//       <div>

//       </div>
//     </main>
//     </div>
//   );
// }

//todo revoir la 3D card et revoir si fonctionne vraiment

// import BusinessCard3D from "./../components/BusinessCard3D.tsx";

// const ContactPage: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Contactez-moi</h1>

//       {/* Carte de visite 3D */}
//       <BusinessCard3D />

//       {/* Formulaire de contact */}
//       <form className="mt-10 w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Nom</label>
//           <input
//             type="text"
//             className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Message</label>
//           <textarea
//             className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             rows={4}
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//         >
//           Envoyer
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

//test
import React, { useEffect, useState } from "react";
import DownloadButton from "../components/DownloadBtn";
import HeroSection from "../components/HeroSection.tsx";

//todo composant et mettre ça dans index-global
import CV from "../medias/images/CV.jpg";
import Budget from "../medias/images/budget.jpg";
import Sponsor from "../medias/images/sponsor-license.jpg";

// Liste des items
const items = [
  {
    label: "Sponsor",
    text: "Notre sponsor principal accompagne nos projets innovants 🚀",
    image: Sponsor,
    fileChoice: "Sponsor" as const,
  },
  {
    label: "Budget",
    text: "Découvrez notre budget transparent et détaillé 💰",
    image: Budget,
    fileChoice: "Budget" as const,
  },
  {
    label: "CV",
    text: "Téléchargez mon CV pour en savoir plus sur mon parcours 📄",
    image: CV,
    fileChoice: "CV" as const,
  },
];

const Contact: React.FC = () => {
  const [index, setIndex] = useState(0);

  // rotation auto toutes les 20s
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % items.length);
  //   }, 20000);
  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    document.title = "TS - Contact";
  }, []);

  const current = items[index];

  return (
    <>
      <HeroSection currentPage={"contact"} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <h1 className="flex justify-center text-3xl font-bold">
          📩 Page Contact
        </h1>

        {/* todo : faire component   */}
        {/* Onglets */}
        <div className="flex justify-center space-x-4">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`px-4 py-2 rounded-t-lg border-b-2 transition ${
                i === index
                  ? "border-black text-black font-semibold"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Zone de contenu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch bg-gray-50 rounded-2xl shadow overflow-hidden">
          {/* Image */} {/* todo : revoir pour que toutes les photos est le meme format / dimension  */}
          <div className="w-full h-full">
            <img
              src={current.image}
              alt={current.label}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texte + bouton */}
          <div className="flex flex-col items-center justify-center space-y-6 p-6 text-center">
            <p className="text-lg">{current.text}</p>
            <DownloadButton fileChoice={current.fileChoice} />
          </div>
        </div>

        {/* Petits points indicateurs */}
        {/* <div className="flex justify-center space-x-2 mt-4">
        {items.map((_, i) => (
          <span
          key={i}
          className={`w-3 h-3 rounded-full ${
            i === index ? "bg-black" : "bg-gray-400"
            }`}
            />
            ))}
            </div> */}
      </div>
    </>
  );
};

export default Contact;
