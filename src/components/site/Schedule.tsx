import { useLang } from "@/lib/i18n";
import { STUDIO } from "./SiteData";
import { Deco, ICONS } from "./Icons";

export function Schedule() {
  const { t, lang } = useLang();

  const rows = [
    {
      day: lang === "es" ? "MAR / TUE" : "TUE / MAR",
      time: "7:00 PM",
      title: lang === "es" ? "Clase pública para principiantes" : "Beginner Public Class",
      sub: lang === "es" ? "Sin pareja necesaria · Todos los niveles" : "No partner required · All levels",
    },
    {
      day: lang === "es" ? "VIE / FRI" : "FRI / VIE",
      time: "7:00 PM",
      title: lang === "es" ? "Clase pública para principiantes" : "Beginner Public Class",
      sub: lang === "es" ? "Sin pareja necesaria · Todos los niveles" : "No partner required · All levels",
    },
  ];

  return (
    <section id="schedule" className="relative overflow-hidden bg-ink text-parchment py-20 md:py-24">
      <Deco
        src={ICONS.shoes}
        className="absolute top-6 right-4 w-56 opacity-25 hidden md:block"
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3 block">
              {lang === "es" ? "Horario" : "Schedule"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium">{t("schedule_title")}</h2>
            <p className="text-parchment/60 mt-2">{t("schedule_sub")}</p>
          </div>
          <span className="font-mono text-xs text-parchment/40 uppercase tracking-widest">
            {STUDIO.address}
          </span>
        </div>
        <div className="divide-y divide-parchment/10 border-y border-parchment/10">
          {rows.map((r) => (
            <div
              key={r.day}
              className="py-6 md:py-8 grid grid-cols-2 md:grid-cols-[1fr_1fr_2fr_auto] items-center gap-4"
            >
              <span className="font-mono text-sm text-adobe">{r.day}</span>
              <span className="text-2xl md:text-3xl font-display">{r.time}</span>
              <div className="col-span-2 md:col-span-1">
                <p className="text-lg font-medium">{r.title}</p>
                <p className="text-sm text-parchment/50">{r.sub}</p>
              </div>
              <a
                href="#pricing"
                className="md:justify-self-end col-span-2 md:col-span-1 inline-flex justify-center text-xs font-semibold uppercase tracking-widest text-gold hover:text-parchment transition-colors"
              >
                {t("schedule_pricing_link")} ↓
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}