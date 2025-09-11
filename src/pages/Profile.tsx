import { useEffect, useState } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "TS - Profil";
  }, []);


  
  const [years, setYears] = useState<number>(0);

  const fromDate = "2002-03-29T16:30:00";
  useEffect(() => {
    const targetDate = new Date(fromDate);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - targetDate.getTime();

      const diffInDays = diff / (1000 * 60 * 60 * 24);
      const diffInYears = diffInDays / 365.25;

      setYears(diffInYears);
    }, 1000);

    return () => clearInterval(interval);
  }, [fromDate]);
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
          <h2 className="text-xl font-semibold mb-3 flex justify-center">
            Infos rapides
          </h2>
          <ul className="text-gray-700 space-y-2">
            {/* <li><strong>Âge :</strong> 23 ans</li> */}
            <li>
              <strong>Âge :</strong> {years.toFixed(8)} ans{" "}
            </li>
            {/* revoir si utile ? ?  */}

            {/* <li>
              <strong>Âge :</strong>{" "}
              <TimeSince fromDate="2002-03-29T16:30:00" /> ans
            </li> */}

            {/* <li>
              <strong>Âge :</strong>{" "}
              <TimeSince fromDate="2002-03-29T16:30:00" /> ans
            </li> */}

            <li>
              <strong>Ville :</strong> Pau, France
            </li>
            <li>
              <strong>Études :</strong> Ingénierie Informatique
            </li>
            <li>
              <strong>Langues :</strong> Français, Anglais
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3 flex justify-center">
            Trouver quoi mettre{" "}
          </h2>
        </div>
      </div>

      {/* Sections détaillées */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-2">
            🎓 Parcours académique & pro
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Étudiant en ingénierie informatique, passionné par le développement
            web et l’intelligence artificielle. Projets réalisés : portfolio
            React, application mobile, etc.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">🚣 Carrière sportive</h2>
          <p className="text-gray-700 leading-relaxed">
            Athlète en canoë slalom depuis plus de 10 ans, avec titres régionaux
            et participations nationales. Le sport m’a appris discipline,
            résilience et esprit d’équipe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">🚀 Entrepreneuriat</h2>
          <p className="text-gray-700 leading-relaxed">
            Développement de projets mêlant tech et sport. Objectif : lancer mon
            propre projet entrepreneurial dans les prochaines années.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">✨ Autres passions</h2>
          <p className="text-gray-700 leading-relaxed">
            Ami Famille, music, jeux vidéo, rando et aventure
          </p>
        </section>
      </div>
      {/* todo : mettre la FAQ ici ?  */}

      {/* Citation finale */}
      <div className="text-center text-gray-600 italic mt-6">
        « Discipline, curiosité et persévérance guident chacun de mes projets. »
      </div>
    </div>
  );
}
