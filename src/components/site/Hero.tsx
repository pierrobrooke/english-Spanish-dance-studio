import heroImg from "@/assets/hero-dance.jpg";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useLang();
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sandstone/50 border border-ink/5 rounded-full text-xs font-semibold tracking-wider uppercase text-ink/70 mb-6">
            <span className="size-1.5 rounded-full bg-adobe" />
            Est. 1979 · San Antonio, TX
          </div>
          <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-medium text-balance mb-6">
            {t("hero_title_a")}{" "}
            <span className="text-adobe italic block sm:inline">
              {t("hero_title_b")}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-ink/70 leading-relaxed text-pretty max-w-[58ch] mb-8">
            {t("hero_sub")}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 bg-adobe text-parchment py-3 px-5 rounded-full text-base font-medium ring-1 ring-adobe hover:bg-adobe-deep transition-colors"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25M3 18.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75M3 18.75v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              {t("hero_cta_schedule")}
            </a>
            <div className="flex items-center gap-2 px-4 py-3 bg-sandstone/30 rounded-full border border-ink/5 text-sm font-medium">
              <span className="size-2 rounded-full bg-adobe animate-pulse" />
              {t("hero_pill")}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-ink/5 shadow-2xl shadow-adobe/20">
            <img
              src={heroImg}
              alt={
                lang === "es"
                  ? "Pareja bailando en River City Dance Studio en San Antonio"
                  : "A couple ballroom dancing at River City Dance Studio in San Antonio"
              }
              width={1600}
              height={1200}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 md:-left-8 bg-parchment border border-ink/10 shadow-xl rounded-2xl p-5 max-w-[230px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-adobe mb-1">
              {lang === "es" ? "Esta noche · 7:00 PM" : "Tonight · 7:00 PM"}
            </p>
            <p className="font-display italic text-xl leading-tight">
              {lang === "es" ? "Clase pública para principiantes" : "Beginner public class"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}