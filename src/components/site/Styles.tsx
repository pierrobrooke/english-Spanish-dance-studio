import tejano from "@/assets/style-tejano.jpg";
import cumbia from "@/assets/style-cumbia.jpg";
import country from "@/assets/style-country.jpg";
import latin from "@/assets/style-latin.jpg";
import swing from "@/assets/style-swing.jpg";
import occasions from "@/assets/style-occasions.jpg";
import { useLang } from "@/lib/i18n";

export function Styles() {
  const { t, lang } = useLang();

  const items = [
    {
      img: tejano,
      title: lang === "es" ? "Tejano & Conjunto" : "Tejano & Conjunto",
      desc:
        lang === "es"
          ? "El corazón del baile social de San Antonio. Pasos sencillos, música con alma."
          : "The heart of San Antonio social dancing. Simple steps, soulful music.",
    },
    {
      img: cumbia,
      title: "Cumbia",
      desc:
        lang === "es"
          ? "Rítmica y enérgica. Aprende los giros circulares y el juego de pies."
          : "Rhythmic and energetic. Learn the circular turns and footwork that fill any dance floor.",
    },
    {
      img: country,
      title: lang === "es" ? "Country Western Two-Step" : "Country Western Two-Step",
      desc:
        lang === "es"
          ? "El estándar de Texas. Deslices suaves y patrones para el salón."
          : "The Texas standard. Smooth glides and intricate patterns for the dance hall.",
    },
    {
      img: latin,
      title: lang === "es" ? "Latin — Salsa & Bachata" : "Latin — Salsa & Bachata",
      desc:
        lang === "es"
          ? "Música caribeña y conexión cercana. Para clubes y para casa."
          : "Caribbean rhythms and close connection. Great for the club or your living room.",
    },
    {
      img: swing,
      title: "Swing",
      desc:
        lang === "es"
          ? "Elegancia clásica del salón con un toque divertido."
          : "Classic ballroom elegance with a playful, joyful spirit.",
    },
    {
      img: occasions,
      title: lang === "es" ? "Ocasiones Especiales" : "Special Occasions",
      desc:
        lang === "es"
          ? "Coreografías para bodas, quinceañeras, aniversarios."
          : "Choreography for weddings, quinceañeras, anniversaries, and first dances.",
    },
  ];

  return (
    <section id="classes" className="py-20 md:py-24 bg-sandstone/15 border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block">
            {t("styles_eyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            {t("styles_title")}
          </h2>
          <p className="text-ink/60 text-pretty text-lg leading-relaxed">{t("styles_sub")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it) => (
            <article key={it.title} className="group space-y-4">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-ink/5 bg-sandstone/30">
                <img
                  src={it.img}
                  alt={it.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-xl font-medium">{it.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed text-pretty">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}