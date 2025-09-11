// import { sportobjectif_en } from "../medias/databases/index-en";
// import { sportobjectif_fr } from "../medias/databases/index-fr";


const SportObjectif = () => {
// const initialLang = document.documentElement.lang || "fr";

// const sportobjectif = (initialLang === "fr" ? sportobjectif_fr : sportobjectif_en)
//  


return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* todo : mettre data dans index-fr et index-en  */}
      {/* todo : slider avec texte dans database et 3 afficher sur les 5 qui tourne, tourne doucement. comme louis sur son site web pour Karlo.  */}

      <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
        <h3 className="font-semibold text-lg mb-2">World Championship 2026</h3>
        <p>Objectif: Top 10 mondial et qualification pour la finale.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
        <h3 className="font-semibold text-lg mb-2">Youth Training Program</h3>
        <p>Lancer un programme pour former les jeunes kayakistes.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
        <h3 className="font-semibold text-lg mb-2">
          Eco-friendly Competitions
        </h3>
        <p>
          Participer et promouvoir des événements respectueux de
          l’environnement.
        </p>
      </div>

      {/* coach TIP, developpement en afrique, objectif sport : JO LA, Gagner une coupe du monde.  */}
    </div>
  );
};

export default SportObjectif;
