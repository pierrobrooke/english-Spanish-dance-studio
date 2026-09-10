import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { STUDIO } from "./SiteData";
import logoAsset from "@/assets/river-city-logo.png.asset.json";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const link =
    "text-base md:text-sm font-medium text-ink/70 hover:text-adobe transition-colors";

  return (
    <nav className="sticky top-0 z-50 bg-parchment/85 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="River City Dance Studio — Where San Antonio Comes to Dance"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-7">
          <a href="#classes" className={link}>{t("nav_classes")}</a>
          <a href="#pricing" className={link}>{t("nav_pricing")}</a>
          <a href="#rental" className={link}>{t("nav_rental")}</a>
          <a href="#about" className={link}>{t("nav_about")}</a>
          <a href="#visit" className={link}>{t("nav_visit")}</a>
        </div>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language"
            className="flex bg-sandstone/40 rounded-full p-1 text-xs font-semibold"
          >
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "en" ? "bg-white shadow-sm text-ink" : "text-ink/50"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "es" ? "bg-white shadow-sm text-ink" : "text-ink/50"
              }`}
            >
              ES
            </button>
          </div>
          <a
            href={STUDIO.phoneHref}
            className="hidden sm:inline-flex items-center bg-adobe text-parchment px-4 py-2 rounded-full text-sm font-medium ring-1 ring-adobe hover:bg-adobe-deep transition-colors"
          >
            {t("nav_book")}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-2 -mr-2"
          >
            <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/5 bg-parchment">
          <div className="px-5 py-4 flex flex-col gap-4 text-base">
            <a href="#classes" onClick={() => setOpen(false)}>{t("nav_classes")}</a>
            <a href="#pricing" onClick={() => setOpen(false)}>{t("nav_pricing")}</a>
            <a href="#rental" onClick={() => setOpen(false)}>{t("nav_rental")}</a>
            <a href="#about" onClick={() => setOpen(false)}>{t("nav_about")}</a>
            <a href="#visit" onClick={() => setOpen(false)}>{t("nav_visit")}</a>
            <a
              href={STUDIO.phoneHref}
              className="inline-flex justify-center bg-adobe text-parchment px-4 py-3 rounded-full font-medium"
            >
              {t("nav_book")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}