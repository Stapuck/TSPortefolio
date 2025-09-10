// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// // import HeroSection from "../components/HeroSection.tsx";

// export default function Profiles() {
//   const { t } = useTranslation();

//   useEffect(() => {
//     document.title = "TS - Profile";
//   }, [t]);

//   return (


//     <div className="max-w-5xl mx-auto p-6">
//       {/* Hero */}
//       <div className="flex flex-col items-center text-center mb-12">
//         <img
//           src="/images/profile.jpg"
//           alt="Photo de profil"
//           className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
//         />
//         <h1 className="text-3xl font-bold">Ton Nom</h1>
//         <p className="text-gray-600 mt-2">
//           Étudiant en ingénierie IT • Athlète en canoë slalom • Entrepreneur
//         </p>
//       </div>

//       {/* Infos rapides */}
//       <div className="grid sm:grid-cols-2 gap-6 mb-12">
//         <div className="bg-white shadow-md rounded-2xl p-6">
//           <h2 className="text-xl font-semibold mb-2">Infos rapides</h2>
//           <ul className="text-gray-700 space-y-2">
//             <li><strong>Âge :</strong> 22 ans</li>
//             <li><strong>Ville :</strong> Lyon, France</li>
//             <li><strong>Études :</strong> Ingénierie Informatique</li>
//             <li><strong>Langues :</strong> Français, Anglais</li>
//             <li><strong>Contact :</strong> ton.email@mail.com</li>
//           </ul>
//         </div>

//         <div className="bg-white shadow-md rounded-2xl p-6">
//           <h2 className="text-xl font-semibold mb-2">Liens utiles</h2>
//           <ul className="text-blue-600 space-y-2">
//             <li><a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li>
//             <li><a href="https://github.com" className="hover:underline">GitHub</a></li>
//             <li><a href="https://instagram.com" className="hover:underline">Instagram Sportif</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Sections */}
//       <div className="space-y-12">
//         <section>
//           <h2 className="text-2xl font-bold mb-4">🎓 Parcours académique & pro</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Étudiant en ingénierie informatique passionné par les nouvelles
//             technologies, le développement web et l’intelligence artificielle.
//             J’ai travaillé sur plusieurs projets scolaires et personnels, dont
//             un portfolio en React et une application mobile.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold mb-4">🚣 Carrière sportive</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Athlète en canoë slalom depuis plus de 10 ans, avec plusieurs titres
//             régionaux et participations à des compétitions nationales.
//             Le sport m’a appris la discipline, la résilience et le goût de
//             l’effort.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold mb-4">🚀 Entrepreneuriat</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Intéressé par l’innovation et la création de projets, je développe
//             des idées à la croisée de la tech et du sport. Je souhaite à terme
//             lancer mon propre projet entrepreneurial.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold mb-4">✨ Autres passions</h2>
//           <p className="text-gray-700 leading-relaxed">
//             En dehors de l’IT et du sport, je m’intéresse à la photographie, aux
//             voyages et à la musique. J’aime découvrir de nouvelles cultures et
//             repousser mes limites, autant sur l’eau que dans la vie.
//           </p>
//         </section>
//       </div>
//     </div>


    
//   );
// }


//     // <div className="text-gray-800">
//     //   <HeroSection currentPage={"profile"} />

//     //   <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
//     //     <h1 className="flex justify-center text-3xl font-bold">
//     //       {" "}
//     //       {t("Profile.profile_welcome")}
//     //     </h1>

//     //     <div>
//     //       <p>
//     //         mauritian paddler / grew up in France Tours / parler entreprenarial ici
//     //       </p>
//     //     </div>



    
//         {/* <div className="flex flex-col w-full h-full p-6 md:p-10"> */}
//         {/* Conteneur principal */}
//         {/* <div className="max-w-5xl w-full mx-auto border rounded-2xl p-6 shadow-md bg-white">
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="Profil"
//                 className="w-32 h-32 rounded-full object-cover shadow"
//               />

//               <div className="flex flex-wrap justify-center md:justify-start gap-4 flex-1">
//                 <div className="bg-gray-100 rounded-xl p-4 w-40 text-center shadow">
//                   <p className="font-bold text-lg">5+</p>
//                   <p className="text-sm text-gray-600">Années d’expérience</p>
//                 </div>
//                 <div className="bg-gray-100 rounded-xl p-4 w-40 text-center shadow">
//                   <p className="font-bold text-lg">🏆</p>
//                   <p className="text-sm text-gray-600">Palmarès sportif</p>
//                 </div>
//                 <div className="bg-gray-100 rounded-xl p-4 w-40 text-center shadow">
//                   <p className="font-bold text-lg">💼</p>
//                   <p className="text-sm text-gray-600">Projets réalisés</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow">
//               <h2 className="text-xl font-semibold mb-2">À propos de moi</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 Je suis un passionné de sport et de performance, avec un
//                 parcours mêlant compétition et développement professionnel.
//                 Toujours motivé par les défis, j’aime partager mes expériences
//                 et inspirer les autres à se dépasser.
//               </p>
//             </div>

//             <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow">
//               <h2 className="text-xl font-semibold mb-2">Parcours</h2>
//               <p className="text-gray-700 leading-relaxed">
//                 Depuis plusieurs années, j’évolue dans le domaine du sport et du
//                 management, en combinant rigueur, esprit d’équipe et
//                 persévérance. Mon objectif est de mettre mon énergie et mes
//                 compétences au service de projets ambitieux.
//               </p>
//             </div>
//           </div> */}
//         {/* </div> */}
//     //   </main>
//     // </div>


import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "TS - Profil";
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Hero */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/profile.jpg"
          alt="Photo de profil"
          className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
        />
        <h1 className="text-3xl font-bold">Ton Nom</h1>
        <p className="text-gray-600 mt-2">
          Étudiant en ingénierie IT • Athlète Canoë Slalom • Entrepreneur
        </p>
      </div>

      {/* Stats rapides */}
      <div className="grid sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <p className="font-bold text-2xl">5+</p>
          <p className="text-gray-600 mt-1">Années d’expérience</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <p className="font-bold text-2xl">🏆</p>
          <p className="text-gray-600 mt-1">Palmarès sportif</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <p className="font-bold text-2xl">💼</p>
          <p className="text-gray-600 mt-1">Projets réalisés</p>
        </div>
      </div>

      {/* Infos & Liens */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">Infos rapides</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Âge :</strong> 22 ans</li>
            <li><strong>Ville :</strong> Lyon, France</li>
            <li><strong>Études :</strong> Ingénierie Informatique</li>
            <li><strong>Langues :</strong> Français, Anglais</li>
            <li><strong>Contact :</strong> ton.email@mail.com</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">Liens utiles</h2>
          <ul className="text-blue-600 space-y-2">
            <li><a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com" className="hover:underline">GitHub</a></li>
            <li><a href="https://instagram.com" className="hover:underline">Instagram Sportif</a></li>
          </ul>
        </div>
      </div>

      {/* Sections détaillées */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-2">🎓 Parcours académique & pro</h2>
          <p className="text-gray-700 leading-relaxed">
            Étudiant en ingénierie informatique, passionné par le développement web et l’intelligence artificielle. Projets réalisés : portfolio React, application mobile, etc.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">🚣 Carrière sportive</h2>
          <p className="text-gray-700 leading-relaxed">
            Athlète en canoë slalom depuis plus de 10 ans, avec titres régionaux et participations nationales. Le sport m’a appris discipline, résilience et esprit d’équipe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">🚀 Entrepreneuriat</h2>
          <p className="text-gray-700 leading-relaxed">
            Développement de projets mêlant tech et sport. Objectif : lancer mon propre projet entrepreneurial dans les prochaines années.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">✨ Autres passions</h2>
          <p className="text-gray-700 leading-relaxed">
            Photographie, voyages, musique. Toujours curieux de découvrir de nouvelles cultures et repousser mes limites.
          </p>
        </section>
      </div>

      {/* Citation finale */}
      <div className="text-center text-gray-600 italic mt-6">
        « Discipline, curiosité et persévérance guident chacun de mes projets. »
      </div>
    </div>
  );
}