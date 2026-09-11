import { useLang } from "@/lib/i18n";
import { STUDIO } from "./SiteData";
import { Deco, ICONS } from "./Icons";

export function Rental() {
  const { t, lang } = useLang();
  return (
    <section id="rental" className="relative overflow-hidden py-20 md:py-24 bg-ink text-parchment">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3 block">
            {t("rental_eyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-6 leading-tight">
            {t("rental_title")}
          </h2>
          <p className="text-parchment/70 text-lg text-pretty leading-relaxed max-w-prose mb-8">
            {t("rental_body")}
          </p>
          <ul className="space-y-3 text-base text-parchment/80">
            <li className="flex items-center gap-3">
              <span className="size-1.5 bg-gold rounded-full" /> {t("rental_feature_1")}
            </li>
            <li className="flex items-center gap-3">
              <span className="size-1.5 bg-gold rounded-full" /> {t("rental_feature_2")}
            </li>
            <li className="flex items-center gap-3">
              <span className="size-1.5 bg-gold rounded-full" /> {t("rental_feature_3")}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={STUDIO.phoneHref}
              className="inline-flex items-center gap-2 bg-parchment text-ink px-5 py-3 rounded-full text-sm font-semibold hover:bg-sandstone transition-colors"
            >
              {lang === "es" ? "Llamar al estudio" : "Call the studio"} · {STUDIO.phone}
            </a>
          </div>
        </div>

        <div className="bg-parchment/5 rounded-2xl p-2 ring-1 ring-parchment/10">
          {STUDIO.rentalFormEmbedUrl ? (
            <iframe
              src={STUDIO.rentalFormEmbedUrl}
              title={t("rental_form_placeholder")}
              className="w-full h-[1206px] rounded-xl bg-parchment"
              loading="lazy"
            />
          ) : (
            <div className="aspect-[3/4] lg:aspect-auto lg:h-[600px] bg-parchment/5 rounded-xl flex flex-col items-center justify-center text-center p-10 border border-dashed border-parchment/15">
              <div className="size-14 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <svg className="size-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v12a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="font-display text-2xl text-parchment mb-2">{t("rental_form_placeholder")}</p>
              <p className="text-sm text-parchment/50 max-w-xs">{t("rental_form_note")}</p>
              <code className="mt-6 text-[11px] text-parchment/40 font-mono break-all">
                src/components/site/SiteData.ts → rentalFormEmbedUrl
              </code>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}