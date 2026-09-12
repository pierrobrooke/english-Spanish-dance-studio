import { useLang } from "@/lib/i18n";
import { STUDIO } from "./SiteData";

export function Visit() {
  const { t, lang } = useLang();
  return (
    <section id="visit" className="py-20 md:py-24 bg-sandstone/20 border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block">
              {lang === "es" ? "Ubicación" : "Location"}
            </span>
            <h2 className="font-display text-3xl font-medium mb-5">{t("visit_title")}</h2>
            <address className="not-italic text-ink/70 leading-relaxed text-lg">
              {STUDIO.address}
              <br />
              {STUDIO.city}, {STUDIO.region} {STUDIO.postal}
            </address>
            <div className="flex flex-wrap gap-3 mt-5">
              <a href={STUDIO.phoneHref} className="text-sm font-semibold text-adobe hover:text-adobe-deep">
                {t("call")} {STUDIO.phone}
              </a>
              <a
                href={STUDIO.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-adobe hover:text-adobe-deep"
              >
                {t("directions")} →
              </a>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block">
              {t("visit_hours")}
            </span>
            <h3 className="sr-only">{t("visit_hours")}</h3>
            <dl className="text-ink/70 space-y-2 text-base">
              <div className="flex justify-between border-b border-ink/10 py-2">
                <dt>{lang === "es" ? "Viernes" : "Friday"}</dt>
                <dd>7:00 PM</dd>
              </div>
              <div className="flex justify-between border-b border-ink/10 py-2">
                <dt>{lang === "es" ? "Lecciones privadas" : "Private lessons"}</dt>
                <dd>{lang === "es" ? "Con cita" : "By appointment"}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt>{lang === "es" ? "Renta del estudio" : "Studio rental"}</dt>
                <dd>{lang === "es" ? "Por solicitud" : "On request"}</dd>
              </div>
            </dl>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block">
              {t("visit_payment_title")}
            </span>
            <h3 className="sr-only">{t("visit_payment_title")}</h3>
            <p className="text-ink/70 text-pretty leading-relaxed">{t("visit_payment_body")}</p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white ring-1 ring-ink/10 text-xs font-semibold text-ink/70">
              <span className="size-2 rounded-full bg-adobe" />
              {lang === "es" ? "Procesado con Square" : "Powered by Square"}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden ring-1 ring-ink/10">
          <iframe
            title="Map to River City Dance Studio"
            src="https://www.google.com/maps?q=3534+Fredericksburg+Rd+%2324+San+Antonio+TX+78201&output=embed"
            className="w-full h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}