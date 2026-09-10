import ownersAsset from "@/assets/owners.png.asset.json";
const ownersImg = ownersAsset.url;
import { useLang } from "@/lib/i18n";
import { Deco, ICONS } from "./Icons";

export function About() {
  const { t, lang } = useLang();
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-24 bg-sandstone/15 border-y border-ink/5">
      <Deco
        src={ICONS.boot}
        className="absolute top-10 right-6 w-28 opacity-20 hidden lg:block rotate-6"
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[5/6] rounded-2xl overflow-hidden ring-1 ring-ink/5 shadow-xl">
            <img
              src={ownersImg}
              alt={lang === "es" ? "Chi y Cristine Diaz, dueños de River City Dance Studio" : "Chi and Cristine Diaz, owners of River City Dance Studio"}
              width={1000}
              height={1200}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gold/90 text-ink p-4 rounded-xl shadow-lg max-w-[180px]">
            <p className="font-display italic text-lg leading-tight">
              {lang === "es" ? "45+ años bailando con San Antonio" : "45+ years dancing with San Antonio"}
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block">
            {t("about_eyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-5">{t("about_title")}</h2>
          <p className="text-ink/70 text-lg leading-relaxed text-pretty">{t("about_body")}</p>
        </div>
      </div>
    </section>
  );
}