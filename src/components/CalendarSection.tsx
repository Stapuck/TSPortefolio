"use client";

import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { useState } from "react";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { fr, enUS } from "date-fns/locale";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { next_date, type EventType } from "../medias/databases/index-global";
import {
  Calendar as CalendarIcon,
  MapPin,
  Trophy,
  Users,
  Plane,
  ExternalLink,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const locales = { fr, en: enUS };

const createLocalizer = (language: string) => {
  return dateFnsLocalizer({
    format: (date: Date, formatStr: string) => format(date, formatStr, { locale: locales[language as keyof typeof locales] || locales.fr }),
    parse: (str: string, formatStr: string) => parse(str, formatStr, new Date(), { locale: locales[language as keyof typeof locales] || locales.fr }),
    startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
    getDay,
    locales,
  });
};



// const localizer = dateFnsLocalizer({
//   format: (date: Date, formatStr: string) => format(date, formatStr, { locale: locales[language as keyof typeof locales] || locales.fr }),
//   parse: (str: string, formatStr: string) => parse(str, formatStr, new Date(), { locale: locales[language as keyof typeof locales] || locales.fr }),
//   // format,
//   // parse,
//   startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
//   getDay,
//   locales,
// });

export default function CalendarSection() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const initialLang = document.documentElement.lang || "fr";
  const { t } = useTranslation();

  const localizer = createLocalizer(initialLang);

  // Enhanced event mapping with better categorization
  const events = next_date.map((event) => {
    const eventType = event.type_event_en || event.type || "other";
    let color = "#3B82F6"; // Default blue

    // Color coding based on event type
    switch (eventType) {
      case "worldcup":
        color = "#F59E0B"; // Amber
        break;
      case "worldchamp":
        color = "#8B5CF6"; // Purple
        break;
      case "national":
        color = "#3B82F6"; // Blue
        break;
      case "training":
        color = "#10B981"; // Emerald
        break;
      case "pro":
        color = "#6B7280"; // Gray
        break;
      default:
        color = "#3B82F6";
    }

    return {
      title: initialLang === "fr" ? event.event_fr : event.event_en,
      start: new Date(event.date),
      end: event.date_fin ? new Date(event.date_fin) : new Date(event.date),
      allDay: !event.start,
      resource: event,
      style: {
        backgroundColor: color,
        borderColor: color,
        color: "white",
      },
    };
  });

  const onSelectEvent = (event: { resource: EventType }) => {
    setSelectedEvent(event.resource);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case "worldcup":
      case "worldchamp":
      case "national":
        return Trophy;
      case "training":
        return Users;
      case "pro":
        return Plane;
      default:
        return CalendarIcon;
    }
  };

  const getEventTypeLabel = (eventType: string) => {
    switch (eventType) {
      case "worldcup":
        return t("Calendar.worldcup");
      case "worldchamp":
        return t("Calendar.worldchamp");
      case "national":
        return t("Calendar.national");
      case "training":
        return t("Calendar.training");
      case "pro":
        return t("Calendar.pro");
      default:
        return t("Calendar.other");
    }
  };

  const customEventPropGetter = (event: any) => {
    return {
      style: event.style,
    };
  };
// todo : darkmode
  // Custom toolbar
  const CustomToolbar = ({ label, onNavigate, onView }: any) => (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <h3 className="text-xl font-bold text-gray-900">{label}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onNavigate("PREV")}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate("TODAY")}
            className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
           { t("Calendar.today")}
          </button>
          <button
            onClick={() => onNavigate("NEXT")}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {["month", "week", "day"].map((viewType) => (
          <button
            key={viewType}
            onClick={() => onView(viewType)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              view === viewType
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {viewType === "month"
              ? t("Calendar.month")
              : viewType === "week"
              ? t("Calendar.week")
              : t("Calendar.day")}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-4  pt-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Calendar Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* todo : voir comment mettre la traduction sur les mois ( anglais uniquement pour le moment ) */}
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            onSelectEvent={onSelectEvent}
            popup
            date={date}
            view={view}
            onNavigate={(newDate) => setDate(newDate)}
            onView={(newView) => setView(newView)}
            eventPropGetter={customEventPropGetter}
            components={{
              toolbar: CustomToolbar,
            }}
            messages={{
              next: t("next"),
              previous: t("previous"),
              today: t("today"),
              month: t("month"),
              week: t("week"),
              day: t("day"),
              agenda: t("agenda"),
              date: t("date"),
              time: t("time"),
              event: t("event"),
              noEventsInRange: t("noEventsInRange"),
              showMore: (total) => `+${total} ${t("showMore")}`,
            }}
            // className="dark:bg-gray-300"  // todo revoir darkmode
          />
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    {(() => {
                      const Icon = getEventIcon(
                        selectedEvent.type_event_en || selectedEvent.type || ""
                      );
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      {initialLang === "fr"
                        ? selectedEvent.event_fr
                        : selectedEvent.event_en}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {getEventTypeLabel(
                        selectedEvent.type_event_en || selectedEvent.type || ""
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Date & Time */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {selectedEvent.date}
                      {selectedEvent.date_fin &&
                        selectedEvent.date_fin !== selectedEvent.date &&
                        ` - ${selectedEvent.date_fin}`}
                    </p>
                    {selectedEvent.start && (
                      <p className="text-sm text-gray-600">
                        {t("Calendar.starttime")}: {selectedEvent.start}
                      </p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {initialLang === "fr"
                        ? selectedEvent.lieu_fr
                        : selectedEvent.lieu_en}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("Calendar.place")}
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                {selectedEvent.bibs && (
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {t("Calendar.bibs")}: {selectedEvent.bibs}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("Calendar.participationnumber")}
                      </p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  {selectedEvent.link_result && (
                    <a
                      href={selectedEvent.link_result}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t("Calendar.results")}</span>
                    </a>
                  )}
                  {selectedEvent.link_video && (
                    <a
                      href={selectedEvent.link_video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors shadow-sm"
                    >
                      <Play className="w-4 h-4" />
                      <span>{t("Calendar.video")}</span>
                    </a>
                  )}
                </div>

                {/* Event Description */}
                {(selectedEvent.type_event_en || selectedEvent.type) && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("Calendar.eventdetail")}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedEvent.type_event_en === "worldcup" &&
                        t("Calendar.worldcuptxt")}
                      {selectedEvent.type_event_en === "worldchamp" &&
                        t("Calendar.worldchamptxt")}
                      {selectedEvent.type_event_en === "national" &&
                        t("Calendar.nationaltxt")}
                      {selectedEvent.type_event_en === "training" &&
                        t("Calendar.trainingtxt")}
                      {selectedEvent.type === "pro" && t("Calendar.protxt")}
                      {!selectedEvent.type_event_en &&
                        selectedEvent.type !== "pro" &&
                        t("Calendar.othertxt")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// test 1 darkmode : 
// "use client";

// import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
// import { useState } from "react";
// import { format, parse, startOfWeek, getDay } from "date-fns";
// import { fr, enUS } from "date-fns/locale";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { next_date, type EventType } from "../medias/databases/index-global";
// import {
//   Calendar as CalendarIcon,
//   MapPin,
//   Trophy,
//   Users,
//   Plane,
//   ExternalLink,
//   Play,
//   X,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useTranslation } from "react-i18next";

// const locales = { fr, en: enUS };

// // Fonction pour créer le localizer en fonction de la langue
// const createLocalizer = (language: string) => {
//   return dateFnsLocalizer({
//     format: (date: Date, formatStr: string) => format(date, formatStr, { locale: locales[language as keyof typeof locales] || locales.fr }),
//     parse: (str: string, formatStr: string) => parse(str, formatStr, new Date(), { locale: locales[language as keyof typeof locales] || locales.fr }),
//     startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
//     getDay,
//     locales,
//   });
// };

// export default function CalendarSection() {
//   const [date, setDate] = useState(new Date());
//   const [view, setView] = useState<View>("month");
//   const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
//   const initialLang = document.documentElement.lang || "fr";
//   const { t } = useTranslation();

//   // Créer le localizer avec la langue appropriée
//   const localizer = createLocalizer(initialLang);

//   // Enhanced event mapping with better categorization
//   const events = next_date.map((event) => {
//     const eventType = event.type_event_en || event.type || "other";
//     let color = "#3B82F6"; // Default blue

//     // Color coding based on event type
//     switch (eventType) {
//       case "worldcup":
//         color = "#F59E0B"; // Amber
//         break;
//       case "worldchamp":
//         color = "#8B5CF6"; // Purple
//         break;
//       case "national":
//         color = "#3B82F6"; // Blue
//         break;
//       case "training":
//         color = "#10B981"; // Emerald
//         break;
//       case "pro":
//         color = "#6B7280"; // Gray
//         break;
//       default:
//         color = "#3B82F6";
//     }

//     return {
//       title: initialLang === "fr" ? event.event_fr : event.event_en,
//       start: new Date(event.date),
//       end: event.date_fin ? new Date(event.date_fin) : new Date(event.date),
//       allDay: !event.start,
//       resource: event,
//       style: {
//         backgroundColor: color,
//         borderColor: color,
//         color: "white",
//       },
//     };
//   });

//   const onSelectEvent = (event: { resource: EventType }) => {
//     setSelectedEvent(event.resource);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   const getEventIcon = (eventType: string) => {
//     switch (eventType) {
//       case "worldcup":
//       case "worldchamp":
//       case "national":
//         return Trophy;
//       case "training":
//         return Users;
//       case "pro":
//         return Plane;
//       default:
//         return CalendarIcon;
//     }
//   };

//   const getEventTypeLabel = (eventType: string) => {
//     switch (eventType) {
//       case "worldcup":
//         return t("Calendar.worldcup");
//       case "worldchamp":
//         return t("Calendar.worldchamp");
//       case "national":
//         return t("Calendar.national");
//       case "training":
//         return t("Calendar.training");
//       case "pro":
//         return t("Calendar.pro");
//       default:
//         return t("Calendar.other");
//     }
//   };

//   const customEventPropGetter = (event: any) => {
//     return {
//       style: event.style,
//     };
//   };

//   // Custom toolbar with dark mode
//   const CustomToolbar = ({ label, onNavigate, onView }: any) => (
//     <div className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
//       <div className="flex items-center space-x-4 mb-4 md:mb-0">
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{label}</h3>
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => onNavigate("PREV")}
//             className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <button
//             onClick={() => onNavigate("TODAY")}
//             className="px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-300"
//           >
//            {t("Calendar.today")}
//           </button>
//           <button
//             onClick={() => onNavigate("NEXT")}
//             className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center space-x-2">
//         {["month", "week", "day"].map((viewType) => (
//           <button
//             key={viewType}
//             onClick={() => onView(viewType)}
//             className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
//               view === viewType
//                 ? "bg-blue-600 dark:bg-blue-500 text-white"
//                 : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700"
//             }`}
//           >
//             {viewType === "month"
//               ? t("Calendar.month")
//               : viewType === "week"
//               ? t("Calendar.week")
//               : t("Calendar.day")}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-4 pt-6 px-6   rounded-2xl">
//       <div className="max-w-7xl mx-auto">
//         {/* Calendar Container */}
//         <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden transition-colors duration-300">
//           <div className="calendar-container dark:bg-slate-800">
//             <Calendar
//               localizer={localizer}
//               events={events}
//               startAccessor="start"
//               endAccessor="end"
//               style={{ height: 600 }}
//               onSelectEvent={onSelectEvent}
//               popup
//               date={date}
//               view={view}
//               onNavigate={(newDate) => setDate(newDate)}
//               onView={(newView) => setView(newView)}
//               eventPropGetter={customEventPropGetter}
//               components={{
//                 toolbar: CustomToolbar,
//               }}
//               messages={{
//                 next: t("next"),
//                 previous: t("previous"),
//                 today: t("today"),
//                 month: t("month"),
//                 week: t("week"),
//                 day: t("day"),
//                 agenda: t("agenda"),
//                 date: t("date"),
//                 time: t("time"),
//                 event: t("event"),
//                 noEventsInRange: t("noEventsInRange"),
//                 showMore: (total) => `+${total} ${t("showMore")}`,
//               }}
//             />
//           </div>
//         </div>

//         {/* Event Detail Modal */}
//         {selectedEvent && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//             <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden transition-colors duration-300">
//               {/* Modal Header */}
//               <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 <div className="flex items-start space-x-4">
//                   <div className="p-3 bg-white/20 rounded-xl">
//                     {(() => {
//                       const Icon = getEventIcon(
//                         selectedEvent.type_event_en || selectedEvent.type || ""
//                       );
//                       return <Icon className="w-6 h-6" />;
//                     })()}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-2">
//                       {initialLang === "fr"
//                         ? selectedEvent.event_fr
//                         : selectedEvent.event_en}
//                     </h3>initialLang
//                     <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
//                       {getEventTypeLabel(
//                         selectedEvent.type_event_en || selectedEvent.type || ""
//                       )}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Modal Content */}
//               <div className="p-6 space-y-6">
//                 {/* Date & Time */}
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg transition-colors duration-300">
//                     <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
//                       {selectedEvent.date}
//                       {selectedEvent.date_fin &&
//                         selectedEvent.date_fin !== selectedEvent.date &&
//                         ` - ${selectedEvent.date_fin}`}
//                     </p>
//                     {selectedEvent.start && (
//                       <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
//                         {t("Calendar.starttime")}: {selectedEvent.start}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg transition-colors duration-300">
//                     <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
//                       {initialLang === "fr"
//                         ? selectedEvent.lieu_fr
//                         : selectedEvent.lieu_en}
//                     </p>
//                     <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
//                       {t("Calendar.place")}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Additional Info */}
//                 {selectedEvent.bibs && (
//                   <div className="flex items-center space-x-3">
//                     <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg transition-colors duration-300">
//                       <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
//                         {t("Calendar.bibs")}: {selectedEvent.bibs}
//                       </p>
//                       <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
//                         {t("Calendar.participationnumber")}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Actions */}
//                 <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-slate-600 transition-colors duration-300">
//                   {selectedEvent.link_result && (
//                     <a
//                       href={selectedEvent.link_result}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors shadow-sm"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       <span>{t("Calendar.results")}</span>
//                     </a>
//                   )}
//                   {selectedEvent.link_video && (
//                     <a
//                       href={selectedEvent.link_video}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600 dark:bg-red-500 text-white font-medium rounded-xl hover:bg-red-700 dark:hover:bg-red-400 transition-colors shadow-sm"
//                     >
//                       <Play className="w-4 h-4" />
//                       <span>{t("Calendar.video")}</span>
//                     </a>
//                   )}
//                 </div>

//                 {/* Event Description */}
//                 {(selectedEvent.type_event_en || selectedEvent.type) && (
//                   <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-4 transition-colors duration-300">
//                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
//                       {t("Calendar.eventdetail")}
//                     </h4>
//                     <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
//                       {selectedEvent.type_event_en === "worldcup" &&
//                         t("Calendar.worldcuptxt")}
//                       {selectedEvent.type_event_en === "worldchamp" &&
//                         t("Calendar.worldchamptxt")}
//                       {selectedEvent.type_event_en === "national" &&
//                         t("Calendar.nationaltxt")}
//                       {selectedEvent.type_event_en === "training" &&
//                         t("Calendar.trainingtxt")}
//                       {selectedEvent.type === "pro" && t("Calendar.protxt")}
//                       {!selectedEvent.type_event_en &&
//                         selectedEvent.type !== "pro" &&
//                         t("Calendar.othertxt")}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Styles CSS pour le dark mode du calendrier */}
//         <style >{`
//           :global(.dark .calendar-container .rbc-calendar) {
//             background-color: rgb(30 41 59) !important;
//             color: white !important;
//           }
          
//           :global(.dark .calendar-container .rbc-month-view) {
//             background-color: rgb(30 41 59) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-header) {
//             background-color: rgb(51 65 85) !important;
//             color: white !important;
//             border-bottom: 1px solid rgb(71 85 105) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-date-cell) {
//             color: rgb(203 213 225) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-date-cell.rbc-off-range) {
//             color: rgb(100 116 139) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-date-cell.rbc-current) {
//             color: rgb(59 130 246) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-month-row) {
//             border-bottom: 1px solid rgb(71 85 105) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-day-bg) {
//             background-color: rgb(30 41 59) !important;
//             border-right: 1px solid rgb(71 85 105) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-day-bg.rbc-today) {
//             background-color: rgb(51 65 85) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-event) {
//             color: white !important;
//           }
          
//           :global(.dark .calendar-container .rbc-show-more) {
//             background-color: rgb(51 65 85) !important;
//             color: white !important;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }



// test 2

// "use client";

// import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
// import { useState } from "react";
// import { format, parse, startOfWeek, getDay } from "date-fns";
// import { fr, enUS } from "date-fns/locale";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { next_date, type EventType } from "../medias/databases/index-global";
// import {
//   Calendar as CalendarIcon,
//   MapPin,
//   Trophy,
//   Users,
//   Plane,
//   ExternalLink,
//   Play,
//   X,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useTranslation } from "react-i18next";

// const locales = { fr, en: enUS };

// // Fonction pour créer le localizer en fonction de la langue
// const createLocalizer = (language: string) => {
//   return dateFnsLocalizer({
//     format: (date: Date, formatStr: string) => format(date, formatStr, { locale: locales[language as keyof typeof locales] || locales.fr }),
//     parse: (str: string, formatStr: string) => parse(str, formatStr, new Date(), { locale: locales[language as keyof typeof locales] || locales.fr }),
//     startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
//     getDay,
//     locales,
//   });
// };

// export default function CalendarSection() {
//   const [date, setDate] = useState(new Date());
//   const [view, setView] = useState<View>("month");
//   const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
//   const initialLang = document.documentElement.lang || "fr";
//   const { t } = useTranslation();

//   // Créer le localizer avec la langue appropriée
//   const localizer = createLocalizer(initialLang);

//   // Enhanced event mapping with better categorization
//   const events = next_date.map((event) => {
//     const eventType = event.type_event_en || event.type || "other";
//     let color = "#3B82F6"; // Default blue

//     // Color coding based on event type
//     switch (eventType) {
//       case "worldcup":
//         color = "#F59E0B"; // Amber
//         break;
//       case "worldchamp":
//         color = "#8B5CF6"; // Purple
//         break;
//       case "national":
//         color = "#3B82F6"; // Blue
//         break;
//       case "training":
//         color = "#10B981"; // Emerald
//         break;
//       case "pro":
//         color = "#6B7280"; // Gray
//         break;
//       default:
//         color = "#3B82F6";
//     }

//     return {
//       title: initialLang === "fr" ? event.event_fr : event.event_en,
//       start: new Date(event.date),
//       end: event.date_fin ? new Date(event.date_fin) : new Date(event.date),
//       allDay: !event.start,
//       resource: event,
//       style: {
//         backgroundColor: color,
//         borderColor: color,
//         color: "white",
//       },
//     };
//   });

//   const onSelectEvent = (event: { resource: EventType }) => {
//     setSelectedEvent(event.resource);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   const getEventIcon = (eventType: string) => {
//     switch (eventType) {
//       case "worldcup":
//       case "worldchamp":
//       case "national":
//         return Trophy;
//       case "training":
//         return Users;
//       case "pro":
//         return Plane;
//       default:
//         return CalendarIcon;
//     }
//   };

//   const getEventTypeLabel = (eventType: string) => {
//     switch (eventType) {
//       case "worldcup":
//         return t("Calendar.worldcup");
//       case "worldchamp":
//         return t("Calendar.worldchamp");
//       case "national":
//         return t("Calendar.national");
//       case "training":
//         return t("Calendar.training");
//       case "pro":
//         return t("Calendar.pro");
//       default:
//         return t("Calendar.other");
//     }
//   };

//   const customEventPropGetter = (event: any) => {
//     return {
//       style: event.style,
//     };
//   };

//   // Custom toolbar with dark mode
//   const CustomToolbar = ({ label, onNavigate, onView }: any) => (
//     <div className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
//       <div className="flex items-center space-x-4 mb-4 md:mb-0">
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{label}</h3>
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => onNavigate("PREV")}
//             className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <button
//             onClick={() => onNavigate("TODAY")}
//             className="px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-300"
//           >
//            {t("Calendar.today")}
//           </button>
//           <button
//             onClick={() => onNavigate("NEXT")}
//             className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center space-x-2">
//         {["month", "week", "day"].map((viewType) => (
//           <button
//             key={viewType}
//             onClick={() => onView(viewType)}
//             className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
//               view === viewType
//                 ? "bg-blue-600 dark:bg-blue-500 text-white"
//                 : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700"
//             }`}
//           >
//             {viewType === "month"
//               ? t("Calendar.month")
//               : viewType === "week"
//               ? t("Calendar.week")
//               : t("Calendar.day")}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-4 pt-6 px-6 bg-gray-50 dark:bg-sky-950 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto">
//         {/* Calendar Container */}
//         <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden transition-colors duration-300">
//           <div className="calendar-container dark:bg-slate-800">
//             <Calendar
//               localizer={localizer}
//               events={events}
//               startAccessor="start"
//               endAccessor="end"
//               style={{ height: 600 }}
//               onSelectEvent={onSelectEvent}
//               popup
//               date={date}
//               view={view}
//               onNavigate={(newDate) => setDate(newDate)}
//               onView={(newView) => setView(newView)}
//               eventPropGetter={customEventPropGetter}
//               components={{
//                 toolbar: CustomToolbar,
//               }}
//               messages={{
//                 next: t("next"),
//                 previous: t("previous"),
//                 today: t("today"),
//                 month: t("month"),
//                 week: t("week"),
//                 day: t("day"),
//                 agenda: t("agenda"),
//                 date: t("date"),
//                 time: t("time"),
//                 event: t("event"),
//                 noEventsInRange: t("noEventsInRange"),
//                 showMore: (total) => `+${total} ${t("showMore")}`,
//               }}
//             />
//           </div>
//         </div>

//         {/* Event Detail Modal */}
//         {selectedEvent && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//             <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden transition-colors duration-300">
//               {/* Modal Header */}
//               <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 <div className="flex items-start space-x-4">
//                   <div className="p-3 bg-white/20 rounded-xl">
//                     {(() => {
//                       const Icon = getEventIcon(
//                         selectedEvent.type_event_en || selectedEvent.type || ""
//                       );
//                       return <Icon className="w-6 h-6" />;
//                     })()}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-2">
//                       {initialLang === "fr"
//                         ? selectedEvent.event_fr
//                         : selectedEvent.event_en}
//                     </h3>
//                     <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
//                       {getEventTypeLabel(
//                         selectedEvent.type_event_en || selectedEvent.type || ""
//                       )}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Modal Content */}
//               <div className="p-6 space-y-6">
//                 {/* Date & Time */}
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg transition-colors duration-300">
//                     <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
//                       {selectedEvent.date}
//                       {selectedEvent.date_fin &&
//                         selectedEvent.date_fin !== selectedEvent.date &&
//                         ` - ${selectedEvent.date_fin}`}
//                     </p>
//                     {selectedEvent.start && (
//                       <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
//                         {t("Calendar.starttime")}: {selectedEvent.start}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg transition-colors duration-300">
//                     <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
//                       {initialLang === "fr"
//                         ? selectedEvent.lieu_fr
//                         : selectedEvent.lieu_en}
//                     </p>
//                     <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
//                       {t("Calendar.place")}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Additional Info */}
//                 {selectedEvent.bibs && (
//                   <div className="flex items-center space-x-3">
//                     <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg transition-colors duration-300">
//                       <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
//                         {t("Calendar.bibs")}: {selectedEvent.bibs}
//                       </p>
//                       <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
//                         {t("Calendar.participationnumber")}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Actions */}
//                 <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-slate-600 transition-colors duration-300">
//                   {selectedEvent.link_result && (
//                     <a
//                       href={selectedEvent.link_result}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors shadow-sm"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       <span>{t("Calendar.results")}</span>
//                     </a>
//                   )}
//                   {selectedEvent.link_video && (
//                     <a
//                       href={selectedEvent.link_video}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600 dark:bg-red-500 text-white font-medium rounded-xl hover:bg-red-700 dark:hover:bg-red-400 transition-colors shadow-sm"
//                     >
//                       <Play className="w-4 h-4" />
//                       <span>{t("Calendar.video")}</span>
//                     </a>
//                   )}
//                 </div>

//                 {/* Event Description */}
//                 {(selectedEvent.type_event_en || selectedEvent.type) && (
//                   <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-4 transition-colors duration-300">
//                     <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
//                       {t("Calendar.eventdetail")}
//                     </h4>
//                     <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
//                       {selectedEvent.type_event_en === "worldcup" &&
//                         t("Calendar.worldcuptxt")}
//                       {selectedEvent.type_event_en === "worldchamp" &&
//                         t("Calendar.worldchamptxt")}
//                       {selectedEvent.type_event_en === "national" &&
//                         t("Calendar.nationaltxt")}
//                       {selectedEvent.type_event_en === "training" &&
//                         t("Calendar.trainingtxt")}
//                       {selectedEvent.type === "pro" && t("Calendar.protxt")}
//                       {!selectedEvent.type_event_en &&
//                         selectedEvent.type !== "pro" &&
//                         t("Calendar.othertxt")}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Styles CSS pour le dark mode du calendrier */}
//         <style>{`
//           :global(.dark .calendar-container .rbc-calendar) {
//             background-color: rgb(51 65 85) !important;
//             color: rgb(248 250 252) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-month-view) {
//             background-color: rgb(51 65 85) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-header) {
//             background-color: rgb(71 85 105) !important;
//             color: rgb(248 250 252) !important;
//             border-bottom: 1px solid rgb(100 116 139) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-date-cell) {
//             color: rgb(226 232 240) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-date-cell.rbc-off-range) {
//             color: rgb(148 163 184) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-date-cell.rbc-current) {
//             color: rgb(96 165 250) !important;
//             font-weight: 600 !important;
//           }
          
//           :global(.dark .calendar-container .rbc-month-row) {
//             border-bottom: 1px solid rgb(100 116 139) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-day-bg) {
//             background-color: rgb(51 65 85) !important;
//             border-right: 1px solid rgb(100 116 139) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-day-bg.rbc-today) {
//             background-color: rgb(71 85 105) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-event) {
//             color: white !important;
//           }
          
//           :global(.dark .calendar-container .rbc-show-more) {
//             background-color: rgb(71 85 105) !important;
//             color: rgb(248 250 252) !important;
//           }
          
//           :global(.dark .calendar-container .rbc-off-range-bg) {
//             background-color: rgb(45 55 72) !important;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }