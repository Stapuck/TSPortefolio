// import { Link } from "react-router-dom";

// export default function NotFound() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Oups 😅 La page que vous cherchez n'existe pas.
//         </p>
//         <Link
//           to="/"
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
//         >
//           Retour à l’accueil
//         </Link>
//       </div>
//     </section>
//   );
// }


import { Link } from "react-router-dom";
import { Kayak, Code, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-50">
      <div className="text-center space-y-6">
        {/* Titre principal */}
        <h1 className="text-7xl font-extrabold text-blue-500">404</h1>

        {/* Illustration symbolique */}
        <div className="flex justify-center gap-6 text-blue-400">
          <Kayak size={64} />
          <Code size={64} />
        </div>

        {/* Texte d’accroche */}
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Oups 😅 Vous pagayez dans une zone inconnue du web.<br />
        
          {/* Pas de panique, reprenez la navigation vers l’accueil 🚣‍♂️💻 */}
        </p>

        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-xl shadow hover:bg-blue-600 transition"
        >
          <Home size={20} />
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
