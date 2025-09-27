// import :

import {
  //skills
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  backend,
  github,

  //image, next_event pour countdown  :

  //articles
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
  photo34,
  photo35,
  photo36,
  photo37,
  photo38,

  //blog

  //other
} from "../../medias";
import { Target, Trophy, Users, Leaf } from "lucide-react";

//interface :

// Next_date
export interface EventType {
  date: string;
  date_fin?: string;
  lieu_fr: string;
  lieu_en: string;
  event_en: string;
  event_fr: string;
  link_result?: string;
  link_video?: string;
  bibs?: string;
  start?: string;
  type: string;
  photobg?: string;
  type_event_en?: string;
  type_event_fr?: string;
}
// Experiences
export interface Experiences {
  etablissement_fr: string;
  etablissement_en: string;
  title_fr: string;
  title_en: string;
  periode_fr: string;
  periode_en: string;
  details_fr: string[];
  details_en: string[];
  type: string;
}

// skills
export interface Skills {
  name: string;
  imageUrl: string;
  category: string;
  category_fr: string;
  level: string;
}

// Liste :

// todo : revoir telecharger image d'event
export const next_date: EventType[] = [
  //2028
  //2027
  // 2026
  {
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    date: "October 10, 2026 16:00",
    date_fin: "October 10, 2026 18:00",
    event_en: "Graduation",
    event_fr: "diplome d'ingénieur",
    type: "pro",
    type_event_en: "graduation",
    type_event_fr: "diplome",

    photobg:
      "https://la-rochelle.cesi.fr/wp-content/uploads/sites/12/2024/04/RDD-LR-2024-1.jpg",
  },
  {
    date: "September 11, 2026 08:00",
    date_fin: "September 13, 2026 18:00",
    type: "sport",
    lieu_fr: "Seu d'Urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2026 ICF Canoe Slalom World Cup Final La Seu",
    event_fr: "Coupe du Monde Final 2026 à La Seu",
    link_result: "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-2026",
    type_event_en: "worldcup",
    type_event_fr: "Coupe du monde",
  },
  {
    date: "September 04, 2026 08:00",
    date_fin: "September 09, 2026 18:00",
    type: "sport",
    lieu_fr: "Paris, France",
    lieu_en: "Paris, France",
    event_en: "2026 ICF Canoe Slalom World Cup Vaires-sur-Marne",
    event_fr: "Coupe du monde 4 à Vaires-sur-Marne",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/vaires-sur-marne-2026",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "July 21, 2026 08:00",
    date_fin: "July 26, 2026 18:00",
    type: "sport",
    lieu_fr: "Oklahoma City, USA",
    lieu_en: "Oklahoma City, USA",
    event_en: "2026 ICF Canoe Slalom World Championships Senior",
    event_fr: "Championnat du monde Sénior 2026",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/oklahoma-city-2026",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "June 12, 2026 08:00",
    date_fin: "June 14, 2026 18:00",
    type: "sport",
    lieu_fr: "Augsburg, Allemagne",
    lieu_en: "Augsburg, Germany",
    event_en: "2026 ICF Canoe Slalom World Cup Augsburg",
    event_fr: "Coupe du monde 3 à Augsburg",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/augsburg-2026",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "June 05, 2026 08:00",
    date_fin: "June 07, 2026 18:00",
    type: "sport",
    lieu_fr: "Prague, République tchèque",
    lieu_en: "Prague, Czech Republic",
    event_en: "2026 ICF Canoe Slalom World Cup Prague",
    event_fr: "Coupe du monde 2 à Prague",
    link_result: "https://www.canoeicf.com/canoe-slalom-world-cup/prague-2026",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "May 29, 2026 08:00",
    date_fin: "May 31, 2026 18:00",
    type: "sport",
    lieu_fr: "Tacen, Slovénie",
    lieu_en: "Tacen, Slovenia",
    event_en: "2026 ICF Canoe Slalom World Cup Tacen",
    event_fr: "Coupe du monde 1 à Tacen",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/ljubljana-tacen-2026",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },

  // 2025

  {
    lieu_fr: "Toulouse, France",
    lieu_en: "Toulouse, France",
    date: "November 02, 2025  8:00",
    date_fin: "November 02, 2025 12:00",
    event_en: "2025 Toulouse Marathon",
    event_fr: "Marathon de Toulouse 2025",
    type: "other",
    type_event_en: "Course",
    type_event_fr: "Race",
    // bibs: "651",
    // link_result: "",
    photobg:
      "https://tse1.mm.bing.net/th/id/OIP.ld8GvX4Lf4y3PbUDLG_IOAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    lieu_fr: "Pula, Croatie",
    lieu_en: "Pula, Croatia",
    date: "September 20, 2025  19:50",
    date_fin: "September 20, 2025 22:0",
    event_en: "Pula semi Marathon",
    event_fr: "Semi Marathon de Pula",
    type: "other",
    type_event_en: "Course",
    type_event_fr: "Race",
    bibs: "651",
    link_result: "https://www.utrka.com/utrke/xica/2025/rezultati/",
  },
  {
    date: "August 29, 2025 08:00",
    date_fin: "August 31, 2025 18:00",
    type: "sport",
    lieu_fr: "Tacen, Slovénie",
    lieu_en: "Tacen, Slovenia",
    event_en: "2025 ICF Canoe Slalom World Cup Tacen",
    event_fr: "4e Coupe du monde 2025",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/ljubljana-2025/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    lieu_fr: "Prague, République tchèque",
    lieu_en: "Praha, czech Republic",
    date: "August 17, 2025  19:00",
    date_fin: "August 25, 2025 16:00",
    event_en: "training camp",
    event_fr: "Camp d'entrainement",
    type: "sport",
    type_event_en: "training",
    type_event_fr: "entrainement",
  },
  {
    date: "July 08, 2025 08:00",
    date_fin: "July 13, 2025 18:00",
    type: "sport",
    lieu_fr: "Foix, France",
    lieu_en: "Foix, France",
    event_en: "2025 ICF Junior & U23 Canoe Slalom World Championships",
    event_fr: "Championnat du monde U23 2026",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/foix-2025/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  // {
  //   lieu_fr: "Pula, Croatie",
  //   lieu_en: "Pula, Croatia",
  //   date: "June 21, 2025 08:00",
  //   date_fin: "October 17, 2025 18:00",
  //   event_en: " Pula Internship",
  //   event_fr: " stage Pula",
  //   type: "pro",
  //   type_event_en: "internship",
  //   type_event_fr: "stage",
  // },
  {
    date: "June 13, 2025 08:00",
    date_fin: "June 15, 2025 18:00",
    type: "sport",
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    event_en: "2025 ICF Canoe Slalom World Cup Pau",
    event_fr: "2e Coupe du monde 2025",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/pau-2025/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "June 06, 2025 08:00",
    date_fin: "June 08, 2025 18:00",
    type: "sport",
    lieu_fr: "Seu d'urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "African Reference Race",
    event_fr: "Course Africaine de Référence ",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-durgell-2025/african-reference-race",
    type_event_en: "continental",
    type_event_fr: "course continentale",
    // todo : revoir pour type_event
  },
  {
    date: "June 06, 2025 08:00",
    date_fin: "June 08, 2025 18:00",
    type: "sport",
    lieu_fr: "Seu d'urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2025 ICF Canoe Slalom World Cup La Seu",
    event_fr: "1er Coupe du monde 2025",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-durgell-2025/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },

  // 2024
  {
    date: "September 19, 2024 08:00",
    date_fin: "September 22, 2024 18:00",
    type: "sport",
    lieu_fr: "Seu d'urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2024 ICF Canoe Slalom World Cup Final La Seu",
    event_fr: "Final du circuit coupe du monde 2024",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-2024/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "September 12, 2024 08:00",
    date_fin: "September 15, 2024 18:00",
    type: "sport",
    lieu_fr: "Ivréa, Italie",
    lieu_en: "Ivrea, Italy",
    event_en: "2024 ICF Canoe Slalom World Cup Ivrea",
    event_fr: "4e Coupe du monde 2024",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/ivrea-2024/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "July 02, 2024 08:00",
    date_fin: "July 07, 2024 18:00",
    type: "sport",
    lieu_fr: "Liptovsky Mikulas, Slovaquie",
    lieu_en: "Liptovsky Mikulas, Slovakia",
    event_en: "2024 ICF Junior & U23 Canoe Slalom World Championships",
    event_fr: "Championnat du monde U23 2024",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/liptovsky-mikulas-2024/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "February 09, 2024 08:00",
    date_fin: "February 11, 2024 18:00",
    type: "sport",
    lieu_fr: " Île de la Reunion, France",
    lieu_en: "Reunion Island, France",
    event_en: "Olympic Qualifier",
    event_fr: "Championnat d'Afrique &Qualification Olympique",
    type_event_en: "continental",
    type_event_fr: "course continentale",
    //todo : revoir event_type
  },
  // 2023
  {
    date: "September 19, 2023 08:00",
    date_fin: "September 24, 2023 18:00",
    type: "sport",
    lieu_fr: "Londre, Angleterre",
    lieu_en: "London, England",
    event_en: "2023 ICF Canoe Slalom World Championships",
    event_fr: "Championnat du Monde 2023",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/lee-valley-2023/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "August 31, 2023 08:00",
    date_fin: "September 03, 2023 18:00",
    type: "sport",
    lieu_fr: "Seu d'urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2023 ICF Canoe Slalom World Cup La Seu",
    event_fr: "4e Coupe du monde 2023",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-d-urgell-2023/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "August 15, 2023 08:00",
    date_fin: "August 20, 2023 18:00",
    type: "sport",
    lieu_fr: "Cracovie, Pologne",
    lieu_en: "Krakow, Poland",
    event_en: "2023 ICF Junior & U23 Canoe Slalom World Championships",
    event_fr: "Championnat du monde Junior & U23 2023",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/krakow-2023/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  // 2022
  {
    date: "August 26, 2022 08:00",
    date_fin: "August 28, 2022 18:00",
    type: "sport",
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    event_en: "2022 ICF Canoe Slalom World Cup Pau",
    event_fr: "3e Coupe du Monde 2022",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/pau-2022/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "September 02, 2022 08:00",
    date_fin: "September 04, 2022 18:00",
    type: "sport",
    lieu_fr: "Seu d'urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2022 ICF Canoe Slalom World Cup Final La Seu",
    event_fr: "Final du circuit Coupe du monde 2022",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-2022/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "July 26, 2022 08:00",
    date_fin: "July 31, 2022 18:00",
    type: "sport",
    lieu_fr: "Augsburg, Allemagne",
    lieu_en: "Augsburg, Germany",
    event_en: "2022 ICF Canoe Slalom World Championships",
    event_fr: "Championnat du monde Sénior 2022",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/augsburg-2022/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "July 05, 2022 08:00",
    date_fin: "July 07, 2022 18:00",
    type: "sport",
    lieu_fr: "Ivréa, Italie",
    lieu_en: "Ivrea, Italy",
    event_en: "2022 ICF Junior & U23 Canoe Slalom World Championships",
    event_fr: "Championnat du monde Junior & U23 2022",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/ivrea-2022/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "June 17, 2022 08:00",
    date_fin: "June 19, 2022 18:00",
    type: "sport",
    lieu_fr: "Cracovie, Pologne",
    lieu_en: "Krakow, Poland",
    event_en: "2022 ICF Canoe Slalom World Cup Krakow",
    event_fr: "2e Coupe du monde 2022",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/krakow-2022/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "June 10, 2022 08:00",
    date_fin: "June 12, 2022 18:00",
    type: "sport",
    lieu_fr: "Prague, République tchèque",
    lieu_en: "Prague, Czech Republic",
    event_en: "2022 ICF Canoe Slalom World Cup Prague",
    event_fr: "1er Coupe du monde 2022",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/prague-2022/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  // 2021
  {
    date: "September 10, 2021 08:00",
    date_fin: "September 12, 2021 18:00",
    type: "sport",
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    event_en: "2021 ICF Canoe Slalom World Cup Final Pau",
    event_fr: "Final du circuit Coupe du monde 2021",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/pau-2021/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "September 03, 2021 08:00",
    date_fin: "September 05, 2021 18:00",
    type: "sport",
    lieu_fr: "Seu d'urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2021 ICF Canoe Slalom World Cup La Seu",
    event_fr: "4e Coupe du monde 2021",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-2021/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "June 20, 2021 08:00",
    date_fin: "June 25, 2021 18:00",
    type: "sport",
    lieu_fr: "Bourg saint maurice, France",
    lieu_en: "Bourg-Saint-Maurice, France",
    event_en: "French Championship",
    event_fr: "Championnat de France 2021",
    type_event_en: "national",
    type_event_fr: "national",
  },
  {
    date: "July 06, 2021 08:00",
    date_fin: "July 11, 2021 18:00",
    type: "sport",
    lieu_fr: "Tacen, Slovénie",
    lieu_en: "Tacen, Slovenia",
    event_en: "2021 ICF Junior & U23 Canoe Slalom World Championships",
    event_fr: "Championnat du monde Junior & U23 2021",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/ljubljana-tacen-2021/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "June 11, 2021 08:00",
    date_fin: "June 13, 2021 18:00",
    type: "sport",
    lieu_fr: "Prague, République tchèque",
    lieu_en: "Prague, Czech Republic",
    event_en: "2021 ICF Canoe Slalom World Cup Prague",
    event_fr: "3e Coupe du Monde 2021",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/prague-2021/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  // 2020
  {
    date: "November 06, 2020 08:00",
    date_fin: "November 08, 2020 18:00",
    type: "sport",
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    event_en: "2020 ICF Canoe Slalom World Cup Pau",
    event_fr: "2e Coupe du monde 2020",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/pau-2020/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "August 23, 2020 08:00",
    date_fin: "August 27, 2020 18:00",
    type: "sport",
    lieu_fr: "Argentiere, France",
    lieu_en: "Argentiere, France",
    event_en: "French Championship",
    event_fr: "Championnat de France",
    type_event_en: "national",
    type_event_fr: "course nationale",
  },

  // 2019
  {
    date: "October 25, 2019 08:00",
    date_fin: "October 27, 2019 18:00",
    type: "sport",
    lieu_fr: "Tokyo, Japon",
    lieu_en: "Tokyo, Japan",
    event_en: "2019 Canoe Slalom Olympic Test Event",
    event_fr: "Evenement test pour les JO 2020",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-olympic-test-event/tokyo-2019/results",
    type_event_en: "national",
    type_event_fr: "course nationale",
  },
  {
    date: "October 18, 2019 08:00",
    date_fin: "October 20, 2019 18:00",
    type: "sport",
    lieu_fr: "Tokyo, Japon",
    lieu_en: "Tokyo, Japan",
    event_en: "NHK Cup",
    event_fr: "Coupe NHK",
    type_event_en: "national",
    type_event_fr: "course nationale",
  },
  {
    date: "September 25, 2019 08:00",
    date_fin: "September 27, 2019 18:00",
    type: "sport",
    lieu_fr: "Seu d'urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2019 ICF Canoe Slalom World Championships",
    event_fr: "Championnat du monde Sénior 2019",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/la-seu-d-urgell-2019/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "July 16, 2019 08:00",
    date_fin: "July 21, 2019 18:00",
    type: "sport",
    lieu_fr: "Cracovie, Pologne",
    lieu_en: "Krakow, Poland",
    event_en: "2019 ICF Junior & U23 Canoe Slalom World Championships",
    event_fr: "Championnat du monde junior & U23 2019",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/krakow-2019/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "June 28, 2019 08:00",
    date_fin: "June 30, 2019 18:00",
    type: "sport",
    lieu_fr: "Tacen, Slovénie",
    lieu_en: "Tacen, Slovenia",
    event_en: "2019 ICF Canoe Slalom World Cup 3",
    event_fr: "3e Coupe du monde 2019",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/ljubljana-2019/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "June 21, 2019 08:00",
    date_fin: "June 23, 2019 18:00",
    type: "sport",
    lieu_fr: "Bratislava, Slovaquie",
    lieu_en: "Bratislava, Slovakia",
    event_en: "2019 ICF Canoe Slalom World Cup 2",
    event_fr: "2e Coupe du monde 2019",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/bratislava-2019/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  {
    date: "June 14, 2019 08:00",
    date_fin: "June 16, 2019 18:00",
    type: "sport",
    lieu_fr: "Londre, Angleterre",
    lieu_en: "London, England",
    event_en: "2019 ICF Canoe Slalom World Cup 1",
    event_fr: "1er Coupe du monde 2019",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/lee-valley-2019/results",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },
  // 2018
  {
    date: "October 12, 2018 08:00",
    date_fin: "October 13, 2018 18:00",
    type: "sport",
    lieu_fr: "Buenos Aires, Argentine",
    lieu_en: "Buenos Aires, Argentina",
    event_en: "2018 Youth Olympic Games - Canoe Sprint & Slalom",
    event_fr: "Jeux Olympique de la jeunesse CEL et SL",
    link_result:
      "https://www.canoeicf.com/canoe-sprint-olympics/buenos-aires-2018/results",
    type_event_en: "olympics",
    type_event_fr: "olympiques",
    // todo : revoir pour type_event
  },
  {
    date: "July 23, 2018 08:00",
    date_fin: "July 27, 2018 18:00",
    type: "sport",
    lieu_fr: "Alger, Algérie",
    lieu_en: "Algiers, Algeria",
    event_en: "YAG",
    event_fr: "Jeux African de la jeunesse",
    type_event_en: "continental",
    type_event_fr: "course continentale",
    //todo : revoir pour type_event
  },
  {
    date: "July 17, 2018 08:00",
    date_fin: "July 22, 2018 18:00",
    type: "sport",
    lieu_fr: "Ivréa, Italie",
    lieu_en: "Ivrea, Italy",
    event_en: "2018 ICF Junior & U23 Canoe Slalom World Championships",
    event_fr: "Championnat du monde Junior & U23 2018",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/ivrea-2018/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  // 2017
  {
    date: "Septembre 26, 2017 08:00",
    date_fin: "October 01, 2017 18:00",
    type: "sport",
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    event_en: "2017 Canoe Slalom World Championship Slalom & Downriver",
    event_fr: "Championnat du monde de Slalom et descente 2017",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/pau-2017/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "July 18, 2017 08:00",
    date_fin: "July 23, 2017 18:00",
    type: "sport",
    lieu_fr: "Bratislava, Slovaquie",
    lieu_en: "Bratislava, Slovakia",
    event_en: "2017 ICF Canoe Slalom Junior & U23 World Championship",
    event_fr: "Championnat du monde Junior & U23 2017",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/bratislava-2017/results",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
];

// skill
export const skills = [
  {
    name: "CSS",
    imageUrl: css,
    category: "Frontend",
    category_fr: "Frontend",
    level: "5",
  },
  {
    name: "Express",
    imageUrl: backend,
    category: "Backend",
    category_fr: "Backend",
    level: "5",
  },
  {
    name: "Git",
    imageUrl: git,
    category: "Version Control",
    category_fr: "Controle de Version",
    level: "5",
  },
  {
    name: "GitHub",
    imageUrl: github,
    category: "Version Control",
    category_fr: "Controle de Version",
    level: "5",
  },
  {
    name: "HTML",
    imageUrl: html,
    category: "Frontend",
    category_fr: "Frontend",
    level: "5",
  },
  {
    name: "JavaScript",
    imageUrl: javascript,
    category: "Frontend",
    category_fr: "Frontend",
    level: "5",
  },
  {
    name: "MongoDB",
    imageUrl: mongodb,
    category: "Database",
    category_fr: "Base de donnée",

    level: "5",
  },
  {
    name: "Motion",
    imageUrl: backend,
    category: "Animation",
    category_fr: "Animation",
    level: "5",
  },
  {
    name: "UX/UI",
    imageUrl: backend,
    category: "Frontend",
    category_fr: "Frontend",
    level: "5",
  },
  {
    name: "Next.js",
    imageUrl: backend,
    category_fr: "Frontend",
    category: "Frontend",
    level: "5",
  },
  {
    name: "Node.js",
    imageUrl: nodejs,
    category_fr: "Backend",
    category: "Backend",
    level: "5",
  },
  {
    name: "React",
    imageUrl: reactjs,
    category_fr: "Frontend",
    category: "Frontend",
    level: "5",
  },
  {
    name: "Redux",
    imageUrl: redux,
    category_fr: "Gestion des status",
    category: "State Management",
    level: "5",
  },
  {
    name: "Sass",
    imageUrl: backend,
    category_fr: "Frontend",
    category: "Frontend",
    level: "5",
  },
  {
    name: "Tailwind",
    imageUrl: tailwind,
    category_fr: "Frontend",
    category: "Frontend",
    level: "5",
  },
  {
    name: "TypeScript",
    imageUrl: typescript,
    category_fr: "Frontend",
    category: "Frontend",
    level: "5",
  },
];

// articles et blog

export const articles = [
  //1
  {
    id: 1,
    type: "media",
    title_fr: "Veigné en eaux jeunes",
    title_en: "Veigné in young waters",
    date_en: "2014-04-15",
    date_fr: "15/04/2015",
    description_fr: "Challenge jeunes à Veigné.",
    description_en: "Youth Challenge in Veigné.",
    image: photo1,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/veigne-en-eaux-jeunes",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //2
  {
    id: 2,
    type: "media",
    title_fr: "Les minimes du Vick et du CKCT prennent date",
    title_en: "The Vick and CKCT youngsters make their mark",
    description_fr: "Championnat de France Course en Ligne.",
    description_en: "French Championships - Sprint Racing.",
    date_en: "2015-07-02",
    date_fr: "02/07/2015",
    image: photo2,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/les-minimes-du-vick-et-du-ckct-prennent-date",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //3
  {
    id: 3,
    type: "media",
    title_fr: "Deux médailles pour les Tourangeaux",
    title_en: "Two medals for the Tourangeaux",
    description_fr: "Championnat de France CeL.",
    description_en: "French Championships - Sprint Racing.",
    date_en: "2016-07-25",
    date_fr: "25/07/2016",
    image: photo3,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/deux-medailles-pour-les-tourangeaux",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //4
  {
    id: 4,
    type: "media",
    title_fr: 'Le Vick en pleine "Bourg"?',
    title_en: "The Vick in full 'Bourg'?",
    description_fr: "Championnat de France SLA.",
    description_en: "French Championships - Slalom.",
    date_en: "2016-07-26",
    date_fr: "26/07/2016",
    image: photo4,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/le-vick-en-pleine-bourg",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //5
  {
    id: 5,
    type: "media",
    title_fr: '"C\'est ouf quand même!"',
    title_en: '"It’s crazy, isn’t it!"',
    description_fr: "Retour sur le World Senior.",
    description_en: "Looking back at the World Senior.",
    date_en: "2017-09-27",
    date_fr: "27/09/2017",
    image: photo5,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/c-est-ouf-quand-meme",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //6
  {
    id: 6,
    type: "media",
    title_fr: "Terence Saramandif ira aux JO de la Jeunesse",
    title_en: "Terence Saramandif will go to the Youth Olympic Games",
    description_fr: "Qualification aux Youth Olympic Games.",
    description_en: "Qualification for the Youth Olympic Games.",
    date_en: "2018-04-17",
    date_fr: "17/04/2018",
    image: photo6,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/terence-saramandif-ira-aux-jo-de-la-jeunesse",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //7
  {
    id: 7,
    type: "media",
    title_fr: "Le Vick vise au moins deux médailles",
    title_en: "The Vick aims for at least two medals",
    description_fr: "Championnat de France.",
    description_en: "French Championships.",
    date_en: "2018-07-25",
    date_fr: "25/07/2018",
    image: photo7,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/le-vick-vise-au-moins-deux-medailles",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //8
  {
    id: 8,
    type: "media",
    title_fr:
      "Jeux d’Afrique de la Jeunesse : L’or et la qualification olympique pour Saramandif",
    title_en:
      "African Youth Games: Gold and Olympic qualification for Saramandif",
    description_fr: "Qualification olympique lors des YOG.",
    description_en: "Olympic qualification at the Youth Olympic Games.",
    date_en: "2018-07-31",
    date_fr: "31/07/2018",
    image: photo8,
    link: "https://www.lemauricien.com/featured/jeux-dafrique-de-la-jeunesse-lor-et-la-qualification-olympique-pour-saramandif/221168/",
    top_article: false,
    journal: "Le Mauricien",
  },
  //9
  {
    id: 9,
    type: "media",
    title_fr:
      "Saramandif sera ambitieux lors des Jeux Olympiques de la jeunesse",
    title_en: "Saramandif will be ambitious at the Youth Olympic Games",
    description_fr: "Objectifs pour les YOG.",
    description_en: "Goals for the Youth Olympic Games.",
    date_en: "2018-08-01",
    date_fr: "01/08/2018",
    image: photo9,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/saramandif-sera-ambitieux-lors-des-jeux-olympiques-de-la-jeunesse",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //10
  {
    id: 10,
    type: "media",
    title_fr: "Terence Saramandif, jeune olympien qui pagaie",
    title_en: "Terence Saramandif, young Olympian paddler",
    description_fr: "Portrait autour des YOG.",
    description_en: "Portrait around the Youth Olympic Games.",
    date_en: "2018-09-12",
    date_fr: "12/09/2018",
    image: photo10,
    link: "https://www.renaissancelochoise.com/actualite-1217-terence-saramandif-jeune-olympien-qui-pagaie",
    top_article: false,
    journal: "Renaissance Lochoise",
  },
  //11
  {
    id: 11,
    type: "media",
    title_fr:
      "Jeux Olympiques de la Jeunesse : Terence Saramandif offre la première médaille d’or à Maurice",
    title_en:
      "Youth Olympic Games: Terence Saramandif wins Mauritius' first gold medal",
    description_fr: "Résultat historique YOG.",
    description_en: "Historic result at the Youth Olympic Games.",
    date_en: "2018-10-16",
    date_fr: "16/10/2018",
    image: photo11,
    link: "https://defimedia.info/jeux-olympiques-de-la-jeunesse-terence-saramandif-offre-la-premiere-medaille-dor-maurice?fb_action_ids=10156685786913349&fb_action_types=og.likes&fbclid=IwAR1EKSsKgW09E1uPhBkqTpsnoQ2qNe5rfq8oIVOdeyaxkhFVQhh_Y1_OV38",
    top_article: false,
    journal: "Defimedia",
  },
  //12
  {
    id: 12,
    type: "media",
    title_fr: "Ile Maurice gagne l'or en canoë au JOJ 2018",
    title_en: "Mauritius wins YOG2018 canoe gold",
    description_fr: "ICF met en avant la victoire de Maurice.",
    description_en: "ICF highlights Mauritius' victory.",
    date_en: "2018-10-16",
    date_fr: "16/10/2018",
    image: photo12,
    link: "https://www.canoeicf.com/news/minnow-becomes-mighty-mauritius-wins-yog2018-canoe-gold",
    top_article: false,
    journal: "ICF",
  },
  //13
  {
    id: 13,
    type: "media",
    title_fr: "Saramandif écrit l'Histoire",
    title_en: "Mauritius’s Saramandif makes history",
    description_fr: "Olympic News - Médaille historique YOG.",
    description_en: "Olympic News - Historic Youth Olympic Games medal.",
    date_en: "2018-10-15",
    date_fr: "15/10/2018",
    image: photo13,
    link: "https://www.olympics.com/ioc/news/mauritius-s-saramandif-makes-history-slovakia-s-luknarova-in-a-class-of-her-own?esi=true",
    top_article: true,
    journal: "Olympic",
  },
  //14
  {
    id: 14,
    type: "media",
    title_fr:
      "[Vidéo] Terence Saramandif goûte l’or au canoë-kayak aux JO de la jeunesse",
    title_en:
      "[Video] Terence Saramandif tastes gold in canoe slalom at the Youth Olympics",
    description_fr: "Reportage vidéo sur la victoire YOG.",
    description_en: "Video report on the Youth Olympics victory.",
    date_en: "2018-10-15",
    date_fr: "15/10/2018",
    image: photo14,
    link: "https://ionnews.mu/video-terence-saramandif-goute-lor-au-canoe-kayak-aux-jo-de-la-jeunesse-161018/",
    top_article: false,
    journal: "Ionnews.mu",
  },
  //15
  {
    id: 15,
    type: "media",
    title_fr:
      "Terence Saramandif premier champion olympique de l’histoire du sport mauricien",
    title_en:
      "Terence Saramandif, first Olympic champion in Mauritius' sporting history",
    description_fr: "Le Mauricien célèbre l’or aux YOG.",
    description_en: "Le Mauricien celebrates the Youth Olympic Games gold.",
    date_en: "2018-10-16",
    date_fr: "16/10/2018",
    image: photo15,
    link: "https://www.lemauricien.com/featured/buenos-aires-canoe-terence-saramandif-premier-champion-olympique-de-lhistoire-du-sport-mauricien/237876/",
    top_article: false,
    journal: "Le Mauricien",
  },
  //16
  {
    id: 16,
    type: "media",
    title_fr:
      "Questions à…Terence Saramandif : «Pas de mot pour décrire ce que je ressens»",
    title_en:
      "Questions to…Terence Saramandif: 'No words to describe what I feel'",
    description_fr: "Interview après la médaille YOG.",
    description_en: "Interview after the Youth Olympic medal.",
    date_en: "2018-10-07",
    date_fr: "07/10/2018",
    image: photo16,
    link: "https://sport.defimedia.info/node/19655",
    top_article: false,
    journal: "Defimedia",
  },
  //17
  {
    id: 17,
    type: "media",
    title_fr: "Canoë : la fierté en or du Vindinien Terence Saramandif",
    title_en: "Canoeing: the golden pride of Vindinien Terence Saramandif",
    description_fr: "NR revient sur la victoire YOG.",
    description_en: "NR looks back on the Youth Olympic Games victory.",
    date_en: "2018-10-19",
    date_fr: "19/10/2018",
    image: photo17,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/canoe-la-fierte-en-or-du-vindinien-terence-saramandif",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //18
  {
    id: 18,
    type: "media",
    title_fr:
      "Canoë-kayak (slalom): le Mauricien Terence Saramandif décroche l’or et entre dans l’histoire",
    title_en:
      "Canoe slalom: Mauritian Terence Saramandif wins gold and makes history",
    description_fr: "L'Express Maurice relate l’exploit YOG.",
    description_en: "L'Express Maurice covers the Youth Olympics achievement.",
    date_en: "2018-10-17",
    image: photo18,
    date_fr: "17/10/2018",
    link: "https://lexpress.mu/article/341210/canoe-kayak-slalom-mauricien-terence-saramandif-decroche-lor-et-entre-dans-lhistoire",
    top_article: false,
    journal: "L'Express Maurice",
  },
  //19
  {
    id: 19,
    type: "media",
    title_fr:
      "TERENCE SARAMANDIF, PORTRAIT D’UN CHAMPION OLYMPIQUE DE LA JEUNESSE",
    title_en: "TERENCE SARAMANDIF, PORTRAIT OF A YOUTH OLYMPIC CHAMPION",
    description_fr: "Portrait publié par le VICK.",
    description_en: "Portrait published by the VICK.",
    date_en: "2018-10-15",
    date_fr: "15/10/2018",
    image: photo19,
    link: "https://www.levick.fr/articles/30483-terence-a-l-honneur-dans-les-medias",
    top_article: false,
    journal: "Le Vick",
  },
  //20
  {
    id: 20,
    type: "media",
    title_fr:
      "Sportif de l’année 2018 – Terence Saramandif : le petit prince de la pagaie",
    title_en:
      "Athlete of the Year 2018 – Terence Saramandif: the little prince of the paddle",
    description_fr: "Titre de sportif de l’année à Maurice.",
    description_en: "Named Athlete of the Year in Mauritius.",
    date_en: "2018-12-15",
    date_fr: "15/12/2018",
    image: photo20,
    link: "https://www.mbcradio.tv/article/vid%C3%A9o-jeux-olympiques-de-la-jeunesse-une-m%C3%A9daille-dor-pour-terence-saramandif",
    top_article: false,
    journal: "Le Mauricien",
  },
  //21
  {
    id: 21,
    type: "media",
    title_fr: "Sportif de l’année: Terence Saramandif, un jeune homme en or",
    title_en: "Athlete of the Year: Terence Saramandif, a young man of gold",
    description_en: "Portrait of a Youth Olympic champion.",
    date_en: "2018-12-18",
    date_fr: "18/12/2018",
    description_fr: "PORTRAIT D’UN CHAMPION OLYMPIQUE DE LA JEUNESSE",
    image: photo21,
    link: "https://www.levick.fr/articles/30866-terence-saramandif-portrait-dun-champion-olympique-de-la-jeunesse",
    top_article: true,
    journal: "Le Vick",
  },
  //22
  {
    id: 22,
    type: "media",
    title_fr:
      "Sportif de l’année 2018 – Terence Saramandif : le petit prince de la pagaie",
    title_en:
      "Athlete of the Year 2018 – Terence Saramandif: the little prince of the paddle",
    description_en: "National recognition in Mauritius.",
    date_en: "2018-12-15",
    date_fr: "15/12/2018",
    description_fr: "Reconnaissance nationale à Maurice.",
    image: photo22,
    link: "https://www.lemauricien.com/featured/sportif-de-lannee-2018-terence-saramandif-le-petit-prince-de-la-pagaie/249954/",
    top_article: false,
    journal: "Le Mauricien",
  },
  //23
  {
    id: 23,
    type: "media",
    title_fr: "Sportif de l’année: Terence Saramandif, un jeune homme en or",
    title_en: "Athlete of the Year: Terence Saramandif, a young man in gold",
    description_en: "National recognition in Mauritius.",
    date_en: "2019-01-01",
    date_fr: "01/01/2019",
    description_fr: "Reconnaissance nationale à Maurice.",
    image: photo23,
    link: "https://lexpress.mu/s/article/345316/sportif-lannee-terence-saramandif-un-jeune-homme-en-or",
    top_article: false,
    journal: "L'Express Maurice",
  },
  //24
  {
    id: 24,
    type: "media",
    title_fr: "Canoë-kayak : Saramandif continue à grandir",
    title_en: "Canoeing: Saramandif continues to grow",
    description_en: "Progress in N2.",
    date_en: "2019-03-12",
    date_fr: "12/03/2019",
    description_fr: "Progression en N2.",
    image: photo24,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/canoe-kayak-saramandif-continue-a-grandir",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //25
  {
    id: 25,
    type: "media",
    title_fr: "Le Vick fait le plein de points à domicile",
    title_en: "The Vick scores big at home",
    description_en: "Results in N3.",
    date_en: "2019-04-23",
    date_fr: "23/04/2019",
    description_fr: "Résultats en N3.",
    image: photo25,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/le-vick-fait-le-plein-de-points-a-domicile",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //26
  {
    id: 26,
    type: "media",
    title_fr: "Canoë-kayak : Terence Saramandif, la tête et les jambes",
    title_en: "Canoeing: Terence Saramandif, the head and the legs",
    description_en: "World Cup – outstanding performance.",
    date_en: "2019-06-19",
    date_fr: "19/06/2019",
    description_fr: "World Cup - performance remarquée.",
    image: photo26,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/canoe-kayak-terence-saramandif-la-tete-et-les-jambes",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //27
  {
    id: 27,
    type: "media",
    title_fr: "Canoë-Kayak : un Vick ambitieux",
    title_en: "Canoeing: an ambitious Vick",
    description_en: "French Championship.",
    date_en: "2019-07-24",
    date_fr: "24/07/2019",
    description_fr: "Championnat de France.",
    image: photo27,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/un-vick-ambitieux",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //28
  {
    id: 28,
    type: "media",
    title_fr: "France de slalom : quatre médailles pour le Vick",
    title_en: "Slalom Nationals: four medals for the Vick",
    description_en: "French Championship.",
    date_en: "2019-07-30",
    date_fr: "30/07/2019",
    description_fr: "Championnat de France",
    image: photo28,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/france-de-slalom-quatre-medailles-pour-le-vick",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //29
  {
    id: 29,
    type: "media",
    title_fr:
      "Avec six montées en N1 l'an prochain, un cru exceptionnel pour le Vick",
    title_en:
      "With six promotions to N1 next year, an exceptional season for the Vick",
    description_en: "Promotions to N1.",
    date_en: "2019-11-13",
    date_fr: "13/11/2019",
    description_fr: "Montées en N1.",
    image: photo29,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/canoe-kayak-avec-six-montees-en-n1-l-an-prochain-un-cru-exceptionnel-pour-le-vick",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //30
  {
    id: 30,
    type: "media",
    title_fr:
      "Canoë-kayak : Terence Saramandif performant en Coupe du monde de slalom à Pau",
    title_en:
      "Canoeing: Terence Saramandif shines at the Slalom World Cup in Pau",
    description_en: "Performance at the World Cup in Pau.",
    date_en: "2020-11-09",
    date_fr: "09/11/2020",
    description_fr: "Performance en World Cup à Pau.",
    image: photo30,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/canoe-kayak-terence-saramandif-performant-en-coupe-du-monde-de-slalom-a-pau",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //31
  {
    id: 31,
    type: "media",
    title_fr: "Une première promotion d’athlètes pour leur incubateur",
    title_en: "A first promotion of athletes for their incubator",
    description_en: "ESS2024 | Paris 2024 & AFD.",
    date_en: "2021-02-10",
    date_fr: "10/02/2021",
    description_fr: "ESS2024 | Paris 2024 & AFD.",
    image: photo31,
    link: "https://ess2024.org/2021/02/10/paris-2024-afd-une-premiere-promotion-dathletes-pour-leur-incubateur/",
    top_article: false,
    journal: "ESS 2024",
  },
  //32
  {
    id: 32,
    type: "media",
    title_fr: "JO : Un sur deux pour le Val de l’Indre Canoë-Kayak",
    title_en: "Olympics: One out of two for Val de l’Indre Canoe-Kayak",
    description_en: "Tokyo qualification.",
    date_en: "2021-03-31",
    date_fr: "31/03/2021",
    description_fr: "Qualification Tokyo.",
    image: photo32,
    link: "https://www.renaissancelochoise.com/actualite-2057-jo-un-sur-deux-pour-le-val-de-l-indre-canoe-kayak",
    top_article: false,
    journal: "Renaissance Lochoise",
  },
  //33
  {
    id: 33,
    type: "media",
    title_fr: "Le JT des Sports - Interview de Terence SARAMANDIF",
    title_en: "Sports News - Interview with Terence SARAMANDIF",
    description_en: "Appearance on Val de Loire TV.",
    date_en: "2021-04-19",
    date_fr: "19/04/2021",
    description_fr: "Passage sur Val de Loire TV.",
    image: photo33,
    link: "https://www.valdeloire.tv/video/qlz3vu5/",
    top_article: false,
    journal: "Val de Loire TV",
  },
  //34
  {
    id: 34,
    type: "media",
    title_fr:
      "Canoë-kayak : Terence Saramandif et Thomas Ukalovic aux Mondiaux U23 de slalom",
    title_en:
      "Canoeing: Terence Saramandif and Thomas Ukalovic at the U23 Slalom Worlds",
    description_en: "U23 Worlds in Tacen.",
    date_en: "2021-07-06",
    date_fr: "06/07/2021",
    description_fr: "Mondiaux U23 à Tacen.",
    image: photo34,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/canoe-kayak-terence-saramandif-et-thomas-ukalovic-aux-mondiaux-u23-de-slalom",
    top_article: false,
    journal: "La Nouvelle République",
  },
  //35
  {
    id: 35,
    type: "media",
    title_fr: "Découvrir Doriane et Terence Saramandif",
    title_en: "Discover Doriane and Terence Saramandif",
    description_en: "Olympic TV documentary.",
    date_en: "2022-08-01",
    date_fr: "01/08/2022",
    description_fr: "Documentaire Olympic TV.",
    image: photo35,
    link: "https://www.olympics.com/en/video/meet-the-history-making-siblings-from-mauritius",
    top_article: false,
    journal: "Olympic",
  },
  //36
  {
    id: 36,
    type: "media",
    title_fr: "L'Interview de Terence Saramandif, champion de canoë-kayak !",
    title_en: "Interview with Terence Saramandif, canoe-kayak champion!",
    description_en: "Interview by CESI.",
    date_en: "2024-03-13",
    date_fr: "13/03/2024",
    description_fr: "Interview par le CESI.",
    image: photo36,
    link: "https://pau.cesi.fr/fr/actualites/interview-terence-saramandif-champion-canoe-kayak/",
    top_article: true,
    journal: "CESI",
  },
  //37
  {
    id: 37,
    type: "media",
    title_fr:
      "Canoë-kayak : Thomas Ukalovic et Terence Saramandif ambitieux pour leurs derniers Mondiaux U23",
    title_en:
      "Canoe-kayak : Thomas Ukalovic and Terence Saramandif ambitious for their last U23 world championship",
    description_en: "U23 world in Foix",
    date_en: "2025-07-07",
    date_fr: "07/07/2025",
    description_fr: "Championnat du monde U23 Foix",
    image: photo37,
    link: "https://www.lanouvellerepublique.fr/indre-et-loire/commune/veigne/canoe-kayak-thomas-ukalovic-et-terence-saramandif-ambitieux-pour-leurs-derniers-mondiaux-u23-1751911788",
    top_article: false,
    journal: "NR",
  },
  //38
  {
    id: 38,
    type: "media",
    title_fr:
      "Célébrer le kayak africain lors de l'événement spécial Course Kayak Cross continental",
    title_en:
      "Celebrating African paddling at the special Kayak Cross continental racing event",
    description_en: "Kayak Cross Africa Race",
    date_en: "2025-06-08",
    date_fr: "08/06/2025",
    description_fr: "Championnat de kayak cross Africain",
    image: photo38,
    link: "https://www.youtube.com/watch?v=GViXMLPtJh0", //course
    // link: "https://www.youtube.com/watch?v=6MwnOIMZMz0" //interview
    top_article: true,
    journal: "ICF",
  },

  //39
  //40
  //41
  //42
  //43
  //44

  // blog
  // 100
  // {
  //   id: 100,
  //   type: "article",
  //   title_fr: "Comment je gère études et sport de haut niveau",
  //   title_en: "How I manage studies and high-level sport",
  //   description_en: "A personal account balancing IT and canoeing.",
  //   date_en: "2025-04-20",
  //   date_fr: "20/04/2025",
  //   description_fr: "Un retour d’expérience entre IT et canoë.",
  //   image: "photo101",
  //   link: "/blog/etudes-et-sport",
  //   top_article: false,
  //   journal: "Blog Personnel",
  // },
  // //101
  // {
  //   id: 101,
  //   type: "article",
  //   title_fr: "Retour sur la Coupe du Monde à Pau",
  //   title_en: "Review of the World Cup in Pau",
  //   description_en: "Analysis of my performance and the event’s atmosphere.",
  //   date_en: "2025-06-02",
  //   date_fr: "02/06/2025",
  //   description_fr: "Analyse de ma performance et ambiance de l’événement.",
  //   image: "photo101",
  //   link: "/blog/coupe-du-monde-pau",
  //   top_article: false,
  //   journal: "Blog Personnel",
  // },
  // //102
  // {
  //   id: 102,
  //   type: "article",
  //   title_fr: "Mes astuces pour rester motivé à l’entraînement",
  //   title_en: "My tips to stay motivated during training",
  //   description_en: "How I keep a strong mindset despite difficulties.",
  //   date_en: "2025-02-10",
  //   date_fr: "10/02/2025",
  //   description_fr: "Comment je garde un mental fort malgré les difficultés.",
  //   image: "photo102",
  //   link: "/blog/motivation",
  //   top_article: false,
  //   journal: "Blog Personnel",
  // },

  //103
  //104
  //105
  //106
  //107

  // revoir 2 photo 33 et 35
  // changer photo pour incubateur.
];

//sportobjectives
// todo : revoir en fonction de public remettre dans le composant 
export const sportobjectives = [
  {
    icon: Target,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    title_fr: "Championnat du monde Sénior 2026",
    title_en: "World Championship 2026",
    description_fr: "Objectif: Top 10 mondial et qualification pour la finale.",
    description_en: "Objectif: Top 15 and qualification for the final.",
    details_fr:
      "Me hisser parmi les meilleurs mondiaux et décrocher une place en finale",
    details_en: "Fight with the best and get a spot in the precious final ",
  },
  {
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title_fr: "Programme d'entrainement pour Jeune",
    title_en: "Youth Training Program",
    description_fr: "Lancer un programme pour former les jeunes kayakistes.",
    description_en:
      "Launch a program to help young paddler to develop their skills",
    details_fr:
      "Transmettre ma passion et développer la relève du canoë slalom",
    details_en: "Share my passion and develop the next gen of canoe slalom",
  },
  {
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    title_fr: "Compétition Ecolo",
    title_en: "Eco-friendly Competitions",
    description_fr:
      "Participer et promouvoir des événements respectueux de l'environnement.",
    description_en: "Take part and promote green & eco-frendly event.",
    details_fr:
      "Allier performance sportive et respect de notre terrain de jeu : la nature",
    details_en:
      "Join performance and respect of the environment / water our playground",
  },
  {
    icon: Trophy,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    title_fr: "Développement du sport sur le continent africain",
    title_en: "African Development",
    description_fr: "Contribuer au développement du canoë slalom en Afrique.",
    description_en:
      "Being an actor in the development of the sport in Africa .",
    details_fr: "Ouvrir de nouveaux horizons et démocratiser notre sport",
    details_en: "Open new horizon and help the sport growth",
  },
];

//accordiondata
//todo revoir avec papa 4 question à mettre
export const accordionData = [
  {
    title_fr: "D'où viens tu ? ",
    text_fr:
      "Avec des origines Mauriciennes, je vis en France depuis toujours, d'abord de Tours où j'ai passé mes années lycée ainsi que mon bac et ensuite dans le sud, sur Pau pour continuer ma pratique sportive et mes études.",
    title_en: "Where are you from ? ",
    text_en: "Mauritius baby ",
  },
  {
    title_fr:
      "Si tu devais choisir un autre sport que la Canoë-Kayak, lequel choisirais-tu ? ",
    text_fr:
      "Je pense que je me serais tourné vers la course à pied / trail pour le coté dépassement de soi, sinon le surf ou le hockey sur glace.",
    title_en:
      "If you had to choose an other sport, which one would you choose ? ",
    text_en: "Running for sur ",
  },

  {
    title_fr: "Qu'est ce qui te pousse à te lever le matin",
    text_fr:
      "Les plaisirs de la vie que ça soit dans le quotidien, la famille, les amis. Ou encore l'évolution perpetuelle, devenir une meilleur personne (sportif et pro). Repousser mes limites. ou juste connaitre à l'avance le repas du soir suffit parfois ;)",
    title_en: "What make you go out of your bed the morning",
    text_en: "Only one think does, the alarm on my phone. ",
  },

  {
    title_fr: "La clès de la réussite selon toi ? ",
    text_fr:
      "Dans mon cas, je dirais la polyvalence et la résilience. Mais la réussite est tellement subjectif et peut varier d'un jour à l'autre que juste se sentir épanouie sera ma réponse finale.",
    title_en: "The key of success in your opinion ? ",
    text_en:
      "Having close people supporting you, Loving the Day and trusting the process",
  },
];

//experience
export const experiences = [
  {
    etablissement_fr: "Safran Helicopter Engines",
    etablissement_en: "Safran Helicopter Engines",
    title_fr: "Alternance Développeur Web",
    title_en: "Web Developer Apprenticeship",
    periode_fr: "10/2023 - Maintenant",
    periode_en: "10/2023 - Now",
    details_fr: [
      "Création d’interface et développement de nouvelles fonctionnalités au sein de l’application",
      "Collaboration avec les clients pour connaitre leur besoin et améliorer leur qualité de vie dans l'environnement de travail",
      "Gestion de projet",
    ],
    details_en: [
      "Creating interfaces and developing new features within the application",
      "Collaborating with customers to understand their needs and improve their quality of life in the workplace",
      "Project management",
    ],
    type: "experiencepro",
  },
  {
    etablissement_fr: "CESI, Pau",
    etablissement_en: "CESI, Pau",
    title_fr: "Cycle ingénieur",
    title_en: "Engineer Cycle",
    periode_fr: "09/2023 - Maintenant ",
    periode_en: "09/2023 - Now",
    details_fr: [
      "Acquérir les connaissances de base dans un panel de domaine lié à l'informatique",
      "Connaitre les bases dans le domaine de management",
      "Adopter une méthodologie de pensée critique et de conception pour aboutir à la solution.",
      "Education CESI complété par une alternance chez Safran",
    ],
    details_en: [
      "Acquire basic knowledge in a range of IT-related fields",
      "Learn the fundamentals of management",
      "Adopt a critical thinking and design methodology to arrive at the solution",
      "CESI education supplemented by a work-study programme at Safran",
    ],
    type: "formation",
  },
  {
    etablissement_fr: "Université Juraj Dobrila,  Pula",
    etablissement_en: "Juraj Dobrila university, Pula",
    title_fr: "Stagaire developpement d'application en python",
    title_en: "application development Intern in python",
    periode_fr: "06/2025 - 10/2025",
    periode_en: "06/2025 - 10/2025",
    details_fr: [
      "Developpement à partir de zéro d'une application python",
      "Découverte culturel de nouvelles méthodes de travail",
      "Usinage à commande numérique par ordinateur",
      "Géneration de code G-code pour optimiser les machines CNC",
    ],
    details_en: [
      "Developing a Python application from scratch",
      "Cultural discovery of new working method",
      "Computer numerical control machining",
      "Generating G-code to optimise CNC machines",
    ],
    type: "experiencepro",
  },
  {
    etablissement_fr: "Octopeek (part of Mazars)",
    etablissement_en: "Octopeek (part of Mazars)",
    title_fr: "stagiaire Data Analyst",
    title_en: "Intern Data Analyst",
    periode_fr: "04/2023 - 07/2023",
    periode_en: "04/2023 - 07/2023",
    details_fr: [
      "Récolte et analyse de donnée de sportif biologique et technique (nageur, kayakiste)",
      "Analyse de données sur l’explicabilité des performances dans le sport",
      "Relation client pour améliorer l’utilisation des données collectées",
    ],
    details_en: [
      "Collection and analysis of biological and technical data on athletes (swimmers, kayakers)",
      "Data analysis on performance explainability in sports",
      "Client relations to improve the use of collected data",
    ],
    type: "experiencepro",
  },
  {
    etablissement_fr: "Acteur du Luxe Français , Paris ",
    etablissement_en: "French Luxury Industry Actor, Paris",
    title_fr: "Prestataire de service, Développeur Full-stack",
    title_en: "Full-stack Developer Contractor",
    periode_fr: "04/2023 - 07/2023",
    periode_en: "04/2023 - 07/2023",
    details_fr: [
      "Développement Web et Application de bureau",
      "Travail au sein d’une équipe de développeurs expérimentés",
      "Projet de developpement avec gestion de données",
      "Développeur full-stack (PHP Symfony)",
    ],
    details_en: [
      "Web and desktop application development",
      "Working within a team of experienced developers",
      "Project developpement with data management",
      "Full-stack developer (PHP Symfony)",
    ],
    type: "experiencepro",
  },
  {
    etablissement_fr: "Fédération Canadienne de Kayak",
    etablissement_en: "Canadian Kayak Federation",
    title_fr: "Coach équipe jeune",
    title_en: "Youth Team Coach",
    periode_fr: "02/2023 - 04/2023",
    periode_en: "02/2023 - 04/2023",
    details_fr: [
      "Partage de ma passion et de mes connaissances avec des jeunes pagayeurs",
      "Organisation et gestion de séances quotidiennes (musculation, kayak et retour vidéo)",
      "Coaching de l’équipe jeune",
      "En Paralleles de mes études d'ingénieur",
    ],
    details_en: [
      "Sharing my passion and knowledge with young paddlers",
      "Organizing and managing daily sessions (strength training, kayaking, and video feedback)",
      "Coaching the youth team",
      "Alongside my engineering studies",
    ],
    type: "experiencepro",
  },
  {
    etablissement_fr: "CESI, Pau",
    etablissement_en: "CESI, Pau",
    title_fr: "Cycle préparatoire",
    title_en: "Preparatory Cycle",
    periode_fr: "09/2021 - 07/2023",
    periode_en: "09/2021 - 07/2023",
    details_fr: [
      "Consolidation des bases scientifiques : mathématiques, physique et informatique.",
      "Développement d'une méthodologie d'ingénierie axée sur l'analyse et la résolution de problèmes.",
      "Participation à des projets collaboratifs renforçant le travail en équipe et la gestion de projet.",
      "Retour dans le système éducatif après une année de césure, avec un objectif de préparation au cycle d'ingénieur.",
    ],
    details_en: [
      "Consolidation of scientific foundations: mathematics, physics and computer science.",
      "Development of an engineering methodology focused on problem analysis and resolution.",
      "Participation in collaborative projects reinforcing teamwork and project management.",
      "Return to the education system after a gap year, with the aim of preparing for engineering studies.",
    ],
    type: "formation",
  },
  {
    etablissement_fr: "",
    etablissement_en: "",
    title_fr: "Année de césure",
    title_en: "Gap Year",
    periode_fr: "09/2020 - 09/2021",
    periode_en: "09/2020 - 09/2021",
    details_fr: [
      "Expériences professionnelles variées en emploi saisonnier, développant autonomie et gestion du temps.",
      "Pratique sportive intensive à plein temps, renforçant discipline, tentative de qualification Olympique",
      "Inscription en 1re année de Licence LEA, approfondissant mes compétences en langues et communication.",
    ],
    details_en: [
      "Varied professional experience in seasonal employment, developing independence and time management skills.",
      "Intensive full-time sports training, reinforcing discipline, Olympic qualification attempt",
      "Enrolment in the first year of a Bachelor's degree in Applied Foreign Languages, furthering my language and communication skills.",
    ],
    type: "experiencepro",
  },
  {
    etablissement_fr: "Lycée Grandmont",
    etablissement_en: "Lycée Grandmont",
    title_fr: "Années Lycée",
    title_en: "High School Years",
    periode_fr: "09/2017 - 04/2020",
    periode_en: "09/2017 - 04/2020",
    details_fr: [
      "Suivi d’un cursus scientifique approfondi (Bac S), développant rigueur et esprit analytique.",
      "En section sportive, béneficiant donc d'un emploie du temps condensé pour laisser place à mes entrainements de kayak.",
      "Acquisition de compétences transversales en organisation et gestion du temps.",
    ],
    details_en: [
      "Completed a rigorous scientific curriculum (Bac S), developing analytical skills and precision.",
      "In the sports section, I therefore benefit from a condensed timetable to make room for my kayaking training sessions.",
      "Developed transversal skills in organization and time management.",
    ],
    type: "formation",
  },
  {
    etablissement_fr: "Scalway",
    etablissement_en: "Scalway",
    title_fr: "Stage de 3e",
    title_en: "9th Grade Internship",
    periode_fr: "10/2016 - 11/2016",
    periode_en: "",
    details_fr: [
      "Premiers pas dans le monde professionnel, découvrant le fonctionnement d’une entreprise.",
      "Découverte du domaine informatique et de l’hébergement web sous différents aspects.",
      "Observation des pratiques professionnelles et initiation à la résolution de problèmes concrets.",
    ],
    details_en: [
      "First experience in a professional environment, learning how a company operates.",
      "Introduction to the IT and web hosting sector from multiple perspectives.",
      "Gained initial exposure to professional practices and problem-solving tasks.",
    ],
    type: "experiencepro",
  },
];

// TravelExpenses
export const travelExpenses = [
  {
    key: "registrationfee",
    label_fr: "Frais d'inscription",
    label_en: "Registration fee",
    amount: 1130,
    tooltip_fr: "130€ par coupe du monde (x5) + 240€ par mondiaux (x2)",
    tooltip_en: "130€ for 5 world cups + 240€ for 2 world championships",
  },
  {
    key: "coaching",
    label_fr: "Coaching",
    label_en: "Coaching",
    amount: 6420,
    tooltip_fr:
      "Environ 650€ par semaine → 6500€ par saison",
    tooltip_en:
      "Approximatly 650€ per week → 6500€ per season",
  },
  {
    key: "accommodation",
    label_fr: "Hébergement",
    label_en: "Accommodation",
    amount: 3150,
    tooltip_fr: "moyenne par événement : 315€",
    tooltip_en: "average per event: 315€",
  },
  {
    key: "food",
    label_fr: "Repas",
    label_en: "Food",
    amount: 1200,
    tooltip_fr: "Repas équilibrés ~120€/semaine",
    tooltip_en: "Meals ~120€/week",
  },
  {
    key: "transport",
    label_fr: "Transport",
    label_en: "Transport",
    amount: 800,
    tooltip_fr: "Dépend de la distance, mode de transport, prix essence",
    tooltip_en: "Depends on distance, mode of transport, fuel price",
  },
  {
    key: "other",
    label_fr: "Autres",
    label_en: "Other",
    amount: 1200,
    tooltip_fr: "Le prix d'une séances est de 10-25€, avec 1-2 séances/jour → ~120€/semaine",
    tooltip_en: "Sessions' price is 10-25, with 1-2 sessions/day → ~120€/week",
  },
  {
    key: "subscription",
    label_fr: "Abonnement Pau structure d'entraînement",
    label_en: "Pau training structure subscription",
    amount: 1250,
    tooltip_fr: "Abonnement annuel, accès à la salle, coaching et prépation physique",
    tooltip_en: "annual subscription, acces to the gym, coaching and physical preparation",
  },
  {
    key: "Daily",
    label_fr: "Vie quotidienne",
    label_en: "Daily life",
    amount: 8500,
    tooltip_fr: "Loyer, Course, Essence, Frais de santé, ...",
    tooltip_en: "Rent, Groceries, Fuel, Health fee, ...",
  },
];

// achivement
export const achievements = [
  {
    year: "2025",
    event_fr: "Course de Référence Africaine KX1 H2H",
    event_en: "Continental Championship KX1 H2H",
    medal: "Gold",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    year: "2025",
    event_fr: "Course de Référence Africaine KX1 Timetrial",
    event_en: "Continental Championship KX1 time trial",
    medal: "Gold",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    year: "2025",
    event_fr: "Championnat continental C1 slalom",
    event_en: "Continental Championship C1 slalom",
    medal: "Bronze",
    color: "from-amber-600 to-amber-800",
  },
  {
    year: "2024",
    event_fr: "Championnat continental C1 slalom",
    event_en: "Continental Championship C1 slalom",
    medal: "Bronze",
    color: "from-amber-600 to-amber-800",
  },
  {
    year: "2018",
    event_fr: "Jeux Olympique de la Jeunesse C1 slalom",
    event_en: "Youth Olympics game C1 slalom",
    medal: "Gold",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    year: "2018",
    event_fr: "Jeux Africain de la Jeunesse C1 slalom",
    event_en: "Youth Africa Games C1 slalom",
    medal: "Gold",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    year: "2018",
    event_fr: "Jeux Africain de la Jeunesse C1 course en ligne",
    event_en: "Youth Africa Games C1 sprint",
    medal: "Bronze",
    color: "from-amber-600 to-amber-800",
  },
];

// projects
// todo : mettre du vrai projet

//pro: powerjoular, cnc,  safran, hermes,  // revoir avec papa pour code manquant et ou python pula 
//perso: portefolion * 2, pokedex, angular, metéo api, money watcher, +3 

//school : intershop , cesieat, CesiOP, Easysave, arduino , big data powerbi 

//total : 15 + incomming 
export const projects = [
  {
    id: 1,
    title_en: "",
    title_fr: "",
    subject_fr: "",
    subject_en: "",
    domain: "",
    image: "",
    description_fr: "",
    description_en: "",
    technologies: ["", ".", "", "", ""],
    github: "",
    demo: "",
    featured: true,
  },
];
