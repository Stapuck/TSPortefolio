// import global avec index.ts

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

//  todo : mettre la semaine à Prague et tacen de cette année.
// revoir les dates de coupe du monde si mettre lundi ou si rajouter stage d'entrainement à chaque fois ?
// revoir les liens
// revoir pour les info starts, bibs, ...
//revoir telecharger image d'event
export const next_date: EventType[] = [
  {
    lieu_fr: "Penrith, Australie",
    lieu_en: "Penrith, Australia",
    date: "September 25, 2025  08:15",
    date_fin: "October 03, 2025 16:05",
    event_en: "world championship Senior 2025",
    event_fr: "Championnat du monde senior 2025",
    link_result:
      "https://www.canoeicf.com/canoe-slalom-world-championships/sydney-2025/results",
    type: "sport",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",

    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
  {
    lieu_fr: "Pula, Croatie",
    lieu_en: "Pula, Croatia",
    date: "September 20, 2025  19:00",
    date_fin: "September 20, 2025 21:00",
    event_en: "Pula semi Marathon",
    event_fr: "Semi Marathon de Pula",
    type: "other",
    type_event_en: "Course",
    type_event_fr: "Race",

    photobg:
      "https://sup-passion.com/wp-content/uploads/2016/01/Stade_dEaux_Vives_Pau_Pyr%C3%A9n%C3%A9es.jpg",
  },
  {
    lieu_fr: "Pula, Croatie",
    lieu_en: "Pula, Croatia",
    // todo changer date
    date: "November 17, 2025 16:00",
    date_fin: "November 23, 2025 18:00",
    event_en: " Pula Internship",
    event_fr: " stage Pula",
    type: "pro",
    type_event_en: "internship",
    type_event_fr: "stage",

    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
  {
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    date: "September 12, 2026 16:00",
    date_fin: "September 13, 2026 18:00",
    event_en: "Graduation",
    event_fr: "diplome d'ingénieur",
    type: "pro",
    type_event_en: "graduation",
    type_event_fr: "diplome",

    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
  {
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    date: "April 25, 2026 16:00",
    date_fin: "April 30, 2026 18:00",
    event_en: "training camp",
    event_fr: "stage entrainement",
    type: "sport",
    type_event_en: "training",
    type_event_fr: "entrainement",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
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

    photobg:
      "https://sup-passion.com/wp-content/uploads/2016/01/Stade_dEaux_Vives_Pau_Pyr%C3%A9n%C3%A9es.jpg",
  },
  //  ranger au dessus apres
  // todo : revoir les quelque probleme de type et rajouter les autres caractéristique // revoir les liens
  // YOG et YAG type = other à faire

  // 2026
  {
    date: "September 11, 2026 08:00",
    date_fin: "September 13, 2026 18:00",
    type: "sport",
    lieu_fr: "Seu d'Urgel, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    event_en: "2026 ICF Canoe Slalom World Cup Final La Seu",
    event_fr: "Coupe du Monde Final 2026 à La Seu",
    link_result:
      "https://www.canoeicf.com/2026-icf-canoe-slalom-world-cup-final-la-seu",
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
      "https://www.canoeicf.com/2026-icf-canoe-slalom-world-cup-vaires-sur-marne",
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
      "https://www.canoeicf.com/2026-icf-canoe-slalom-world-championships",
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
      "https://www.canoeicf.com/2026-icf-canoe-slalom-world-cup-augsburg",
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
    link_result:
      "https://www.canoeicf.com/2026-icf-canoe-slalom-world-cup-prague",
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
      "https://www.canoeicf.com/2026-icf-canoe-slalom-world-cup-tacen",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
  },

  // 2025
  {
    date: "August 29, 2025 08:00",
    date_fin: "August 31, 2025 18:00",
    type: "sport",
    lieu_fr: "Tacen, Slovénie",
    lieu_en: "Tacen, Slovenia",
    event_en: "2025 ICF Canoe Slalom World Cup Tacen",
    event_fr: "4e Coupe du monde 2025",
    link_result:
      "https://www.canoeicf.com/2025-icf-canoe-slalom-world-cup-tacen",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
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
      "https://www.canoeicf.com/2025-icf-junior-u23-canoe-slalom-world-championships",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
  {
    date: "June 13, 2025 08:00",
    date_fin: "June 15, 2025 18:00",
    type: "sport",
    lieu_fr: "Pau, France",
    lieu_en: "Pau, France",
    event_en: "2025 ICF Canoe Slalom World Cup Pau",
    event_fr: "2e Coupe du monde 2025",
    link_result: "https://www.canoeicf.com/2025-icf-canoe-slalom-world-cup-pau",
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
    link_result: "https://www.canoeicf.com/african-reference-race",
    type_event_en: "worldcup",
    type_event_fr: "coupe du monde",
    // todo : revoir pour type_event continental
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
      "https://www.canoeicf.com/2025-icf-canoe-slalom-world-cup-la-seu",
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
      "https://www.canoeicf.com/2024-icf-canoe-slalom-world-cup-final-la-seu",
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
      "https://www.canoeicf.com/2024-icf-canoe-slalom-world-cup-ivrea",
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
      "https://www.canoeicf.com/2024-icf-junior-u23-canoe-slalom-world-championships",
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
    type_event_en: "national",
    type_event_fr: "course nationale",
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
      "https://www.canoeicf.com/2023-icf-canoe-slalom-world-championships",
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
      "https://www.canoeicf.com/canoe-slalom-world-cup/la-seu-d-urgell-2023",
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
      "https://www.canoeicf.com/2023-icf-junior-u23-canoe-slalom-world-championships",
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
    link_result: "https://www.canoeicf.com/2022-icf-canoe-slalom-world-cup-pau",
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
      "https://www.canoeicf.com/2022-icf-canoe-slalom-world-cup-final-la-seu",
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
      "https://www.canoeicf.com/2022-icf-canoe-slalom-world-championships",
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
      "https://www.canoeicf.com/2022-icf-junior-u23-canoe-slalom-world-championships",
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
      "https://www.canoeicf.com/2022-icf-canoe-slalom-world-cup-krakow",
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
      "https://www.canoeicf.com/2022-icf-canoe-slalom-world-cup-prague",
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
      "https://www.canoeicf.com/2021-icf-canoe-slalom-world-cup-final-pau",
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
      "https://www.canoeicf.com/2021-icf-canoe-slalom-world-cup-la-seu",
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
      "https://www.canoeicf.com/2021-icf-junior-u23-canoe-slalom-world-championships",
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
      "https://www.canoeicf.com/2021-icf-canoe-slalom-world-cup-prague",
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
    link_result: "https://www.canoeicf.com/2020-icf-canoe-slalom-world-cup-pau",
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
      "https://www.canoeicf.com/2019-canoe-slalom-olympic-test-event",
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
      "https://www.canoeicf.com/2019-icf-canoe-slalom-world-championships",
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
      "https://www.canoeicf.com/2019-icf-junior-u23-canoe-slalom-world-championships",
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
    link_result: "https://www.canoeicf.com/2019-icf-canoe-slalom-world-cup-3",
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
    link_result: "https://www.canoeicf.com/2019-icf-canoe-slalom-world-cup-2",
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
    link_result: "https://www.canoeicf.com/2019-icf-canoe-slalom-world-cup-1",
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
      "https://www.canoeicf.com/2018-youth-olympic-games-canoe-sprint",
    type_event_en: "worldchamp",
    type_event_fr: "Jeux Olympique de la Jeunesse",
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
    type_event_en: "national",
    type_event_fr: "course nationale",
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
      "https://www.canoeicf.com/2018-icf-junior-u23-canoe-slalom-world-championships",
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
      "https://www.canoeicf.com/2017-canoe-slalom-world-championship-france",
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
      "https://www.canoeicf.com/2017-icf-canoe-slalom-junior-u23-world-championship",
    type_event_en: "worldchamp",
    type_event_fr: "championnat du monde",
  },
];

// skills

export interface Skills {
  name: string;
  imageUrl: string;
  category: string;
  level: string;
}
export const skills = [
  {
    name: "CSS",
    imageUrl: css,
    category: "Frontend",
    level: "5",
  },
  {
    name: "Express",
    imageUrl: backend,
    category: "Backend",
    level: "5",
  },
  {
    name: "Git",
    imageUrl: git,
    category: "Version Control",
    level: "5",
  },
  {
    name: "GitHub",
    imageUrl: github,
    category: "Version Control",
    level: "5",
  },
  {
    name: "HTML",
    imageUrl: html,
    category: "Frontend",
    level: "5",
  },
  {
    name: "JavaScript",
    imageUrl: javascript,
    category: "Frontend",
    level: "5",
  },
  {
    name: "MongoDB",
    imageUrl: mongodb,
    category: "Database",
    level: "5",
  },
  {
    name: "Motion",
    imageUrl: backend,
    category: "Animation",
    level: "5",
  },
  {
    name: "UX/UI",
    imageUrl: backend,
    category: "Frontend",
    level: "5",
  },
  {
    name: "Next.js",
    imageUrl: backend,
    category: "Frontend",
    level: "5",
  },
  {
    name: "Node.js",
    imageUrl: nodejs,
    category: "Backend",
    level: "5",
  },
  {
    name: "React",
    imageUrl: reactjs,
    category: "Frontend",
    level: "5",
  },
  {
    name: "Redux",
    imageUrl: redux,
    category: "State Management",
    level: "5",
  },
  {
    name: "Sass",
    imageUrl: backend,
    category: "Frontend",
    level: "5",
  },
  {
    name: "Tailwind",
    imageUrl: tailwind,
    category: "Frontend",
    level: "5",
  },
  {
    name: "TypeScript",
    imageUrl: typescript,
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
  {
    id: 100,
    type: "article",
    title_fr: "Comment je gère études et sport de haut niveau",
    title_en: "How I manage studies and high-level sport",
    description_en: "A personal account balancing IT and canoeing.",
    date_en: "2025-04-20",
    date_fr: "20/04/2025",
    description_fr: "Un retour d’expérience entre IT et canoë.",
    image: "photo101",
    link: "/blog/etudes-et-sport",
    top_article: false,
    journal: "Blog Personnel",
  },
  //101
  {
    id: 101,
    type: "article",
    title_fr: "Retour sur la Coupe du Monde à Pau",
    title_en: "Review of the World Cup in Pau",
    description_en: "Analysis of my performance and the event’s atmosphere.",
    date_en: "2025-06-02",
    date_fr: "02/06/2025",
    description_fr: "Analyse de ma performance et ambiance de l’événement.",
    image: "photo101",
    link: "/blog/coupe-du-monde-pau",
    top_article: false,
    journal: "Blog Personnel",
  },
  //102
  {
    id: 102,
    type: "article",
    title_fr: "Mes astuces pour rester motivé à l’entraînement",
    title_en: "My tips to stay motivated during training",
    description_en: "How I keep a strong mindset despite difficulties.",
    date_en: "2025-02-10",
    date_fr: "10/02/2025",
    description_fr: "Comment je garde un mental fort malgré les difficultés.",
    image: "photo102",
    link: "/blog/motivation",
    top_article: false,
    journal: "Blog Personnel",
  },

  //103
  //104
  //105
  //106
  //107

  // revoir 2 photo 33 et 35
  // changer photo pour incubateur.
];
