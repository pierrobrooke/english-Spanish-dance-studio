import { useLang } from "@/lib/i18n";
import { STUDIO } from "./SiteData";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-parchment/70 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-display text-2xl text-parchment mb-3">{STUDIO.name}</p>
            <p className="text-sm leading-relaxed text-pretty max-w-xs">{t("footer_tag")}</p>
          </div>
          <div className="text-sm space-y-2">
            <p>{STUDIO.address}</p>
            <p>
              {STUDIO.city}, {STUDIO.region} {STUDIO.postal}
            </p>
            <p>
              <a href={STUDIO.phoneHref} className="hover:text-parchment">{STUDIO.phone}</a>
            </p>
            <p>
              <a href={STUDIO.emailHref} className="hover:text-parchment">{STUDIO.email}</a>
            </p>
          </div>
          <div className="flex md:justify-end items-start gap-4">
            <a href={STUDIO.social.instagram} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-parchment/15 inline-flex items-center justify-center hover:bg-parchment/5">
              <span className="text-xs font-semibold">IG</span>
            </a>
            <a href={STUDIO.social.facebook} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-parchment/15 inline-flex items-center justify-center hover:bg-parchment/5">
              <span className="text-xs font-semibold">FB</span>
            </a>
          </div>
        </div>
        <div className="border-t border-parchment/10 pt-6 flex flex-col md:flex-row gap-3 md:justify-between items-start md:items-center text-xs">
          <p>© {year} {STUDIO.name}. {t("footer_rights")}</p>
          <p className="text-parchment/40">San Antonio, Texas · EN / ES</p>
        </div>
      </div>
    </footer>
  );
}