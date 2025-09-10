// import

import {
  css,
  // docker,
  // figma,
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
  // threejs,
  github,
} from "../../medias";

// Next_date
export interface EventType {
  date: string;
  date_fin?: string;
  lieu_fr: string;
  lieu_en: string;
  event_en: string;
  event_fr: string;
  live_result?: string;
  live_video?: string;
  bibs?: string;
  start?: string;
  type: string;
  photobg?: string;
  type_event?: string;
}

// todo : renomme live_ ... into link
export const next_date: EventType[] = [
  {
    date: "July 05, 2026 12:00",
    date_fin: "July 07, 2026 18:00",
    lieu_fr: "Liptovsky Mikulas, Slovaquie",
    lieu_en: "Liptovsky Mikulas, Slovakia",
    event_en: "WorldChampionship U23",
    event_fr: "Championnat du monde U23",
    live_result: "link",
    live_video: "link",
    bibs: "18",
    start: "12h15",
    type: "pro",
    type_event: "exam",
    photobg:
      "https://images.pexels.com/photos/2231631/pexels-photo-2231631.jpeg",
  },
  {
    lieu_fr: "Ivrea, Italie",
    lieu_en: "Ivrea, Italy",
    date: "October 11, 2025 12:00",
    date_fin: "October 17, 2025 18:00",
    event_en: "WC",
    event_fr: "Coupe du monde",
    live_result: "link",
    live_video: "link",
    bibs: "18",
    start: "12h15",
    type: "sport",
    type_event: "worldcup",

    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
  {
    lieu_fr: "Seu d'Urgell, Espagne",
    lieu_en: "Seu d'Urgell, Spain",
    date: "September 19, 2024 12:00",
    date_fin: "September 27, 2024 18:00",
    event_en: "WC",
    event_fr: "Coupe du monde",
    live_result: "link1",
    live_video: "link2",
    bibs: "18",
    start: "12h15",
    type: "sport",
    type_event: "worldcup",
    photobg:
      "https://images.pexels.com/photos/2231631/pexels-photo-2231631.jpeg",
  },
  {
    lieu_fr: "Paris, France",
    lieu_en: "Paris, France",
    date: "September 06, 2025  20:00",
    date_fin: "September 08, 2025 08:37",
    event_en: "World Cup Final",
    event_fr: "Final du circuit coupe du monde",
    live_result:
      "https://www.canoeicf.com/canoe-slalom-world-cup/augsburg-2025/results",
    live_video:
      "https://www.ondemandcmo.com/app/uploads/2016/03/canstockphoto22402523-arcos-creator.com_.jpg",
    bibs: "18",
    start: "12h15",
    type: "sport",
    type_event: "worldchamp",
    photobg:
      "https://images.pexels.com/photos/2231631/pexels-photo-2231631.jpeg",
  },
  {
    lieu_fr: "Penrith, Australie",
    lieu_en: "Penrith, Australia",
    date: "September 21, 2025  08:15",
    date_fin: "October 03, 2025 16:05",
    event_en: "world championship Senior 2026",
    event_fr: "Championnat du monde senior 2026",
    live_result:
      "https://www.ondemandcmo.com/app/uploads/2016/03/canstockphoto22402523-arcos-creator.com_.jpg",
    live_video:
      "https://www.ondemandcmo.com/app/uploads/2016/03/canstockphoto22402523-arcos-creator.com_.jpg",
    bibs: "11",
    start: "11",
    type: "sport",
    type_event: "worldchamp",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
  {
    lieu_fr: "Augsburg, Allemagne",
    lieu_en: "Augsburg, Germany",
    date: "January 15, 2026  21:01",
    date_fin: "January 17, 2026 16:05",
    event_en: "World Cup Final test",
    event_fr: "Final du circuit coupe du monde test",
    live_result:
      "https://www.ondemandcmo.com/app/uploads/2016/03/canstockphoto22402523-arcos-creator.com_.jpg",
    live_video:
      "https://www.ondemandcmo.com/app/uploads/2016/03/canstockphoto22402523-arcos-creator.com_.jpg",
    bibs: "19",
    start: "11h49",
    type: "sport",
    type_event: "worldchamp",
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
    type: "pro",
    type_event: "Course",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
  {
    lieu_fr: "Pula, Croatie",
    lieu_en: "Pula, Croatia",
    date: "November 17, 2025 16:00",
    date_fin: "November 23, 2025 18:00",
    event_en: " Pula Internship",
    event_fr: " stage Pula",
    live_result: "link",
    live_video: "link",
    bibs: " 18",
    start: "12h15",
    type: "pro",
    type_event: "stage",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
  {
    lieu_fr: "Cesi, Pau",
    lieu_en: "Cesi, Pau",
    date: "March 05, 2026 16:00",
    date_fin: "March 05, 2026 18:00",
    event_en: "Graduation",
    event_fr: "diplome d'ingénieur",
    bibs: "00",
    start: "12h15",
    type: "sport",
    type_event: "national",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },

  {
    lieu_fr: "test world cup, Pau",
    lieu_en: "test world cup, Pau",
    date: "September 12, 2026 16:00",
    date_fin: "September 13, 2026 18:00",
    event_en: "Graduation",
    event_fr: "diplome d'ingénieur",
    bibs: "00",
    start: "12h15",
    type: "pro",
    type_event: "diplome",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },

  {
    lieu_fr: "Stage, Pau",
    lieu_en: "Stage, Pau",
    date: "April 25, 2026 16:00",
    date_fin: "April 30, 2026 18:00",
    event_en: "training camp",
    event_fr: "stage entrainement",
    live_result: "",
    live_video: "",
    bibs: "",
    start: "",
    type: "sport",
    type_event: "training",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },

  {
    lieu_fr: "test1, Pau",
    lieu_en: "test1, Pau",
    date: "April 20, 2026 16:00",
    date_fin: "April 21, 2026 18:00",
    event_en: "Graduation",
    event_fr: "diplome d'ingénieur",
    live_result: "link",
    live_video: "link",
    bibs: "00",
    start: "12h15",
    type: "sport",
    type_event: "national",
    photobg:
      "https://images.pexels.com/photos/30303725/pexels-photo-30303725.jpeg",
  },
];

// skills

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    color: "red",
  },
  {
    imageUrl: backend, //express
    name: "Express",
    type: "Backend",
    color: "green",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    color: "black",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    color: "pink",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    color: "yellow",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    color: "red",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    color: "red",
  },
  {
    imageUrl: backend, //motion,
    name: "Motion",
    type: "Animation",
    color: "red",
  },
  {
    imageUrl: backend, //mui
    name: "UX/UI",
    type: "Frontend",
    color: "orange",
  },
  {
    imageUrl: backend, //mui
    // imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    color: "blue",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    color: "red",
  },
  {
    imageUrl: reactjs,
    name: "React",
    type: "Frontend",
    color: "red",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    color: "red",
  },
  {
    imageUrl: backend, //sass
    name: "Sass",
    type: "Frontend",
    color: "red",
  },
  {
    imageUrl: tailwind,
    name: "Tailwind",
    type: "Frontend",
    color: "red",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    color: "red",
  },
];

// articles

import photo1 from "../images/news/articles/1.webp";
import photo2 from "../images/news/articles/2.webp";
import photo3 from "../images/news/articles/3.webp";
import photo4 from "../images/news/articles/4.jpg";
import photo5 from "../images/news/articles/5.jpg";
import photo6 from "../images/news/articles/6.webp";
import photo7 from "../images/news/articles/7.webp";
import photo8 from "../images/news/articles/8.jpg";
import photo9 from "../images/news/articles/9.webp";
import photo10 from "../images/news/articles/10.jpg";
import photo11 from "../images/news/articles/11.jpg";
import photo12 from "../images/news/articles/12.jpg";
import photo13 from "../images/news/articles/13.avif";
import photo14 from "../images/news/articles/14.jpg";
import photo15 from "../images/news/articles/15.jpg";
import photo16 from "../images/news/articles/16.jpg";
import photo17 from "../images/news/articles/17.webp";
import photo18 from "../images/news/articles/18.jpg";
import photo19 from "../images/news/articles/19.jpg";
import photo20 from "../images/news/articles/20.jpeg";
import photo21 from "../images/news/articles/21.png";
import photo22 from "../images/news/articles/22.jpg";
import photo23 from "../images/news/articles/23.jpg";
import photo24 from "../images/news/articles/24.webp";
import photo25 from "../images/news/articles/25.webp";
import photo26 from "../images/news/articles/26.webp";
import photo27 from "../images/news/articles/27.jpg";
import photo28 from "../images/news/articles/28.webp";
import photo29 from "../images/news/articles/29.jpg";
import photo30 from "../images/news/articles/30.jpg";
import photo31 from "../images/news/articles/31.png";
import photo32 from "../images/news/articles/32.jpg";
// import photo33 from "../images/news/articles/33.";
import photo34 from "../images/news/articles/34.jpg";
// import photo35 from "../images/news/articles/35.";
import photo36 from "../images/news/articles/36.jpg";

// revoir pour images
// import photo100 from "../images/news/blogs/100";
// import photo101 from "../images/news/blogs/101";
// import photo102 from "../images/news/blogs/102";

export const articles = [
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
  {
    id: 33,
    type: "media",
    title_fr: "Le JT des Sports - Interview de Terence SARAMANDIF",
    title_en: "Sports News - Interview with Terence SARAMANDIF",
    description_en: "Appearance on Val de Loire TV.",
    date_en: "2021-04-19",
    date_fr: "19/04/2021",
    description_fr: "Passage sur Val de Loire TV.",
    image: "photo33",
    link: "https://www.valdeloire.tv/video/qlz3vu5/",
    top_article: false,
    journal: "Val de Loire TV",
  },
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
  {
    id: 35,
    type: "media",
    title_fr: "Découvrir Doriane et Terence Saramandif",
    title_en: "Discover Doriane and Terence Saramandif",
    description_en: "Olympic TV documentary.",
    date_en: "2022-08-01",
    date_fr: "01/08/2022",
    description_fr: "Documentaire Olympic TV.",
    image: "photo35",
    link: "https://www.olympics.com/en/video/meet-the-history-making-siblings-from-mauritius",
    top_article: false,
    journal: "Olympic",
  },
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

  // blog
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

  // revoir 2 photo 33 et 35
  // changer photo pour incubateur.
];
