// last version working with 24h before and after event + sport info display et pluralisation des labels et responsive

import { useEffect, useState } from "react";
import { next_date, type EventType } from "../medias/databases/index-global";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [nextEvent, setNextEvent] = useState<EventType | null>(null);
  const [countDate, setCountDate] = useState<number | null>(null);
  const [isNow, setIsNow] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showSportInfo, setShowSportInfo] = useState(false);
  const [showUpcomingMessage, setShowUpcomingMessage] = useState(false);

  const { t } = useTranslation();
  const lg = document.documentElement.lang || "fr";
  const navigate = useNavigate();

  useEffect(() => {
    // Recherche du prochain événement
    const findNextEvent = () => {
      const now = new Date().getTime();
      let closestDate: EventType | null = null;
      let closestTimeDiff = Infinity;

      (next_date as EventType[]).forEach((event: EventType) => {
        // Validation date_fin
        if (event.date_fin) {
          const start = new Date(event.date).getTime();
          const end = new Date(event.date_fin).getTime();
          if (end < start) {
            event.date_fin = "";
          }
        }

        const eventDate = new Date(event.date).getTime();
        const eventEnd = event.date_fin
          ? new Date(event.date_fin).getTime()
          : eventDate + 12 * 60 * 60 * 1000; // 12h si pas de date_fin

        if (eventEnd > now && eventDate - now < closestTimeDiff) {
          closestDate = event;
          closestTimeDiff = eventDate - now;
        }
      });

      if (closestDate) {
        setNextEvent(closestDate);
        setCountDate(new Date((closestDate as EventType).date).getTime());
      } else {
        setNextEvent(null);
        setCountDate(null);
      }
    };

    // todo : rajouter react toastify : https://chatgpt.com/share/68c01ab2-3834-8012-8069-26939887d70b

    findNextEvent();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      if (!nextEvent || !countDate) {
        findNextEvent();
        return;
      }

      // todo : revoir code doublons ici
      const eventEnd = nextEvent.date_fin
        ? new Date(nextEvent.date_fin).getTime()
        : countDate + 12 * 60 * 60 * 1000; // 12h si pas de date_fin

      // Mise à jour isNow selon la fin effective
      const nowActive = now >= countDate && now <= eventEnd;
      setIsNow(nowActive);

      // Si l'événement est terminé, chercher le prochain
      if (!nowActive) {
        findNextEvent();
      }

      // Affichage info sport si moins de 48h avant l'événement
      const gap = countDate - now;
      setShowSportInfo(
        nextEvent.type === "sport" && gap <= 48 * 60 * 60 * 1000 && gap > 0
      );

      // Affichage message "upcoming" si plus de 48h avant
      setShowUpcomingMessage(
        nextEvent.type === "sport" && gap > 48 * 60 * 60 * 1000
      );

      // Calcul du temps restant pour le compte à rebours
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      setTimeLeft({
        days: Math.floor(Math.max(gap, 0) / day),
        hours: Math.floor((Math.max(gap, 0) % day) / hour),
        minutes: Math.floor((Math.max(gap, 0) % hour) / minute),
        seconds: Math.floor((Math.max(gap, 0) % minute) / second),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent, countDate]);

  const getLabel = (value: number, singularKey: string, pluralKey: string) =>
    value === 0 || value === 1 ? t(singularKey) : t(pluralKey);

  const goToCalendar = () => {
    navigate("/sport#calendar");
  };

  return (
    <section
      className="relative px-4 py-8 bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: `url(${nextEvent?.photobg || ""})` }}
    >
      {/* Overlay noir */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/70 to-black/80 z-0 rounded-3xl"></div>

      <div className="relative text-center">
        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-200">
          {t("Countdown.title")}
        </h1>

        {nextEvent ? (
          <div className="flex flex-col items-center space-y-4">
            {/* Infos générales */}
            <div className="space-y-1">
              <div>
                <span className="font-bold text-slate-200">
                  {t("Countdown.location")}:
                </span>{" "}
                <span className="text-slate-200">
                  {lg === "en" ? nextEvent.lieu_en : nextEvent.lieu_fr}
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-200">
                  {t("Countdown.event")}:
                </span>{" "}
                <span className="text-slate-200">
                  {lg === "en" ? nextEvent.event_en : nextEvent.event_fr}
                </span>
              </div>
            </div>

            {/* Message avant 48h */}
            {showUpcomingMessage && (
              <p className="mt-2 text-yellow-300 text-sm sm:text-base">
                {t("Countdown.upcoming")}
              </p>
            )}

            {/* Compte à rebours */}
            {isNow ? (
              <p className="mt-4 text-yellow-300 text-lg sm:text-xl font-semibold">
                {nextEvent.type === "sport"
                  ? t("Countdown.now")
                  : t("Countdown.nowPro")}
              </p>
            ) : (
              <div className="flex flex-row flex-nowrap justify-center gap-6 mb-5 mt-4 overflow-x-auto">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-200">
                    {timeLeft.days}
                  </span>
                  <span className="text-sm text-slate-200">
                    {getLabel(timeLeft.days, "Countdown.day", "Countdown.days")}
                  </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-200">
                    {timeLeft.hours}
                  </span>
                  <span className="text-sm text-slate-200">
                    {getLabel(
                      timeLeft.hours,
                      "Countdown.hour",
                      "Countdown.hours"
                    )}
                  </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-200">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-sm text-slate-200">
                    {getLabel(
                      timeLeft.minutes,
                      "Countdown.minute",
                      "Countdown.minutes"
                    )}
                  </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-200">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-sm text-slate-200">
                    {getLabel(
                      timeLeft.seconds,
                      "Countdown.second",
                      "Countdown.seconds"
                    )}
                  </span>
                </div>
              </div>
            )}

            {(showSportInfo || isNow) && nextEvent.type === "sport" && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                <div className="bg-slate-800 border border-slate-500 rounded-xl p-4 text-center shadow">
                  <span className="block text-slate-300 font-semibold mb-2">
                    {t("Countdown.linkresult")}
                  </span>
                  {nextEvent.link_result ? (
                    <a
                      href={nextEvent.link_result}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-lg"
                    >
                      {t("Countdown.linkhere")}
                    </a>
                  ) : (
                    <span className="text-black font-bold text-lg dark:text-white">-</span>
                  )}
                </div>

                <div className="bg-slate-800 border border-slate-500 rounded-xl p-4 text-center shadow">
                  <span className="block text-slate-300 font-semibold mb-2">
                    {t("Countdown.linkvideo")}
                  </span>
                  {nextEvent.link_video ? (
                    <a
                      href={nextEvent.link_video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-lg"
                    >
                      {t("Countdown.linkhere")}
                    </a>
                  ) : (
                    <span className="text-slate-100 font-bold text-lg dark:text-white">-</span>
                  )}
                </div>

                <div className="bg-slate-800 border border-slate-500 rounded-xl p-4 text-center shadow">
                  <span className="block text-slate-300 font-semibold mb-2">
                    {t("Countdown.bibs")}
                  </span>
                  <span className="text-slate-100 font-bold text-lg dark:text-white">
                    {nextEvent.bibs || "-"}
                  </span>
                </div>

                <div className="bg-slate-800 border border-slate-500 rounded-xl p-4 text-center shadow">
                  <span className="block text-slate-300 font-semibold mb-2">
                    {t("Countdown.start")}
                  </span>
                  <span className="text-slate-100 font-bold text-lg dark:text-white">
                    {nextEvent.start || "-"}
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-slate-400">{t("Countdown.noevent")}</p>
        )}

        {nextEvent && (
          <div className="mt-8 flex flex-col sm:flex-col md:flex-row justify-center md:justify-between gap-3 lg:gap-4">
            <div className="text-center">
              <button
                onClick={goToCalendar}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-100 border border-slate-100 transition-colors duration-200 hover:bg-green-500 hover:text-white w-full md:w-auto"
              >
                {t("Countdown.linkCalendar")}
              </button>
            </div>

            {nextEvent.type === "sport" && (
              <a
                href="/sport"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-100 border border-slate-100 transition-colors duration-200 hover:bg-green-500 hover:text-white w-full md:w-auto"
              >
                {t("Countdown.linkPageSport")}
              </a>
            )}

            {nextEvent.type === "pro" && (
              <a
                href="/pro"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-100 border border-slate-100 transition-colors duration-200 hover:bg-blue-500 hover:text-white w-full md:w-auto"
              >
                {t("Countdown.linkPagePro")}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;
