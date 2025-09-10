type HeroSectionProps = {
  currentPage: "sport" | "pro" | "contact" | "profile" | "blog"; 
};

const HeroSection: React.FC<HeroSectionProps> = ({ currentPage }) => {
  let bgColor = "bg-gray-700"; 
//   let showButton = false;

  switch (currentPage) {
    case "sport":
      bgColor = "bg-gray-600";
    //   showButton = true;
      break;
    case "pro":
      bgColor = "bg-blue-700";
    //   showButton = false; 
      break;
    case "profile":
      bgColor = "bg-teal-700";
      break;
    case "contact":
      bgColor = "bg-red-600";
      break;
    case "blog":
      bgColor = "bg-purple-600";
      break;
    // // Ajouter d'autres cas si nécessaire
    // case "about":
    //   bgColor = "bg-purple-600";
    //   break;
    // case "contact":
    //   bgColor = "bg-red-600";
    //   break;
  }

  return (
    // <section className={`relative ${bgColor} text-white h-[60vh] flex items-center justify-center`}>
    // <section className={`relative ${bgColor} text-white h-[20vh] flex items-center justify-center`}>
    <section className={`relative ${bgColor} text-white h-[10vh] flex items-center justify-center`}>
      {/* <div className="text-center px-4">
        {currentPage === "sport" && 
        <>
        <div className="text-6xl mb-4">🏄‍♂️ Terence Saramandif</div>
        <p className="text-xl mb-6">
          Professional Kayak Athlete | Racing the Waves
        </p>
        </>
        }
        {currentPage === "pro" && 
        <>
        <div className="text-6xl mb-4">🧑‍🎓 Terence Saramandif</div>
        <p className="text-xl mb-6">
          IT Engineering | Racing the Web
        </p>
        </>
        } */}
{/* 
        {showButton && (
          <a
            href="#calendar"
            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Voir le calendrier
          </a>
        )} */}
      {/* </div> */}
    </section>
  );
};

export default HeroSection;

