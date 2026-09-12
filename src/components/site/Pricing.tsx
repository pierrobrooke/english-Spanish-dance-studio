import { useLang } from "@/lib/i18n";
import { STUDIO } from "./SiteData";
import { Deco, ICONS } from "./Icons";

export function Pricing() {
  const { t, lang } = useLang();

  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Senior callout */}
          <aside className="lg:w-1/3">
            <div className="bg-adobe/5 p-8 rounded-2xl ring-1 ring-adobe/15 sticky top-24">
              <Deco src={ICONS.couple} className="w-40 mb-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block">
                {lang === "es" ? "Comunidad" : "Community"}
              </span>
              <h2 className="font-display text-3xl mb-4 font-medium text-ink">{t("senior_title")}</h2>
              <p className="text-ink/70 text-pretty mb-5 leading-relaxed">{t("senior_body")}</p>
              <div className="flex items-start gap-2 text-sm font-medium text-adobe">
                <svg className="size-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("senior_tag")}</span>
              </div>
            </div>
          </aside>

          {/* Pricing cards */}
          <div className="lg:w-2/3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block">
              {t("pricing_eyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-3">{t("pricing_title")}</h2>
            <p className="text-ink/60 mb-10 max-w-[55ch]">{t("pricing_sub")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Featured: $145 bundle — 10-class starter pack */}
              <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-adobe to-adobe-deep text-parchment relative overflow-hidden ring-1 ring-adobe-deep">
                <div className="absolute top-5 right-5 bg-gold text-ink text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {lang === "es" ? "Mejor Valor" : "Best Value"}
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase opacity-80">
                  {lang === "es" ? "Paquete especial" : "Starter Bundle"}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-medium mt-2 mb-2">
                  {lang === "es" ? "El Paquete de $145" : "The $145 Starter Bundle"}
                </h3>
                <p className="opacity-90 text-pretty mb-5 max-w-xl">
                  {lang === "es"
                    ? "Un paquete de 10 clases para principiantes diseñado para construir habilidades fundamentales con un plan de estudios completo impartido por instructores expertos. Perfecto para individuos o parejas que buscan un aprendizaje flexible y económico adaptado a su horario."
                    : "A 10-pack of beginner classes designed to build foundational skills with a comprehensive curriculum led by expert instructors. Perfect for individuals or couples seeking flexible, affordable learning tailored to their schedule."}
                </p>
                <ul className="space-y-2 mb-6 max-w-xl">
                  {(lang === "es"
                    ? [
                        "Se puede compartir con hasta 2 personas.",
                        "No se necesita pareja.",
                        "¿No puedes asistir? Cancela dentro de 24 horas para recibir tu crédito de vuelta.",
                        "Trae a un amigo GRATIS a cualquier clase que asistas.",
                      ]
                    : [
                        "Can be shared with up to 2 individuals.",
                        "No partner needed.",
                        "Can't make class? Cancel within 24 hours to receive your credit back to your account.",
                        "Bring a friend for FREE for any single class you attend.",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm opacity-90">
                      <svg className="size-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-end gap-6">
                  <div>
                    <span className="font-display text-5xl md:text-6xl font-medium">$145</span>
                    <span className="block text-xs font-semibold tracking-widest uppercase opacity-70 mt-1">
                      {lang === "es" ? "10 clases · 10 hrs" : "10-class pack · 10 hrs"}
                    </span>
                  </div>
                  {STUDIO.square.bundle ? (
                    <a
                      href={STUDIO.square.bundle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-parchment text-adobe-deep py-3 px-6 rounded-full font-semibold hover:bg-sandstone transition-colors"
                    >
                      {lang === "es" ? "Reservar Ahora" : "Book Now"}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-parchment/30 text-parchment py-3 px-6 rounded-full font-semibold cursor-not-allowed">
                      {lang === "es" ? "Próximamente" : "Coming Soon"}
                    </span>
                  )}
                </div>
              </div>

              {/* Drop-in */}
              <div className="p-7 rounded-2xl ring-1 ring-ink/10 bg-white space-y-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-ink/40">
                  {lang === "es" ? "Sencilla" : "Drop-in"}
                </span>
                <h3 className="font-display text-2xl font-medium">
                  {lang === "es" ? "Clase pública" : "Public Class"}
                </h3>
                <p className="text-sm text-ink/60">
                  {lang === "es" ? "Viernes a las 7pm." : "Fridays at 7pm."}
                </p>
                <p className="font-display text-2xl text-adobe pt-2">
                  ${STUDIO.prices.publicClass}
                </p>
                <a
                  href={STUDIO.square.bookClass}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-adobe text-parchment py-2.5 px-5 rounded-full text-sm font-semibold hover:bg-adobe-deep transition-colors"
                >
                  {lang === "es" ? "Reservar Ahora" : "Book Now"}
                </a>
              </div>

              {/* Private single */}
              <div className="p-7 rounded-2xl ring-1 ring-ink/10 bg-white space-y-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-ink/40">
                  {lang === "es" ? "Privada" : "Private"}
                </span>
                <h3 className="font-display text-2xl font-medium">
                  {lang === "es" ? "Lección privada — Individual" : "Private Lesson — Single"}
                </h3>
                <p className="text-sm text-ink/60">
                  {lang === "es"
                    ? "Una hora de instrucción uno a uno a tu ritmo."
                    : "One hour of one-on-one instruction at your pace."}
                </p>
                <p className="font-display text-2xl text-adobe pt-2">
                  ${STUDIO.prices.privateSingle}
                </p>
                <a
                  href={STUDIO.square.privateSingle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-adobe text-parchment py-2.5 px-5 rounded-full text-sm font-semibold hover:bg-adobe-deep transition-colors"
                >
                  {lang === "es" ? "Reservar Ahora" : "Book Now"}
                </a>
              </div>

              {/* Private couple */}
              <div className="md:col-span-2 p-7 rounded-2xl ring-1 ring-ink/10 bg-white flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1 space-y-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-ink/40">
                    {lang === "es" ? "Pareja" : "Couple"}
                  </span>
                  <h3 className="font-display text-2xl font-medium">
                    {lang === "es" ? "Lección privada — Pareja" : "Private Lesson — Couple"}
                  </h3>
                  <p className="text-sm text-ink/60 max-w-prose">
                    {lang === "es"
                      ? "Ideal para bodas, aniversarios, o un nuevo pasatiempo juntos."
                      : "Perfect for weddings, anniversaries, or a new shared hobby."}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <p className="font-display text-2xl text-adobe">
                    ${STUDIO.prices.privateCouple}
                  </p>
                  <a
                    href={STUDIO.square.privateCouple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-adobe text-parchment py-2.5 px-5 rounded-full text-sm font-semibold hover:bg-adobe-deep transition-colors"
                  >
                    {lang === "es" ? "Reservar Ahora" : "Book Now"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}