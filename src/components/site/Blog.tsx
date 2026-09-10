import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { Deco, ICONS } from "./Icons";
import { STUDIO } from "./SiteData";

type Article = {
  icon: string;
  title: string;
  summary: string;
  body: string[];
  keywords: string;
};

const articlesEn: Article[] = [
  {
    icon: ICONS.couple,
    title: "Never Danced Before? A Beginner's Guide to Dance Classes in San Antonio",
    summary:
      "Thinking about your first dance class in San Antonio? Here's exactly what to expect when you walk into River City Dance Studio — no partner, no experience, no problem.",
    keywords: "beginner dance classes San Antonio, first dance lesson, dance studio for adults San Antonio TX",
    body: [
      "If you've never taken a dance class in your life, you're exactly who we teach. River City Dance Studio has welcomed absolute beginners on San Antonio's West Side for over 45 years, and our beginner public classes every Tuesday and Friday at 7:00 PM are designed for people starting from zero.",
      "Here's what your first class actually looks like: you arrive at our studio at 3534 Fredericksburg Rd #24, park in our on-site lot, and step onto a sprung hardwood floor that's kind to knees and ankles. Instructors Chi and Cristine Diaz greet everyone by name. You don't need a partner — we rotate partners throughout class so everyone dances, and many students come solo. You don't need special shoes either; comfortable clothing and smooth-soled shoes are perfect, and cowboy boots are welcome.",
      "Worried about keeping up? Our pace is patient by design. We break every step down slowly, repeat it, and keep the mood social and low-pressure. Many of our students are seniors picking up dance for the first time in decades — or the first time ever.",
      "Ready to try? A single drop-in beginner class is $25, bookable online through Square. If you know you'll be back, the $145 Starter Bundle gives you 10 beginner classes (10 hours) that can be shared with up to 2 people, includes a free friend pass for any class you attend, and lets you cancel up to 24 hours ahead for a credit back. Prefer one-on-one attention? Private lessons are $100 for a single person or $150 for a couple.",
      "Classes are taught in English and Spanish. Come as you are — San Antonio has been dancing with us since 1979, and there's a spot on the floor with your name on it.",
    ],
  },
  {
    icon: ICONS.sun,
    title: "Dance for Seniors in San Antonio: Health, Friendship, and Fun After 50",
    summary:
      "Looking for low-impact exercise and real community in San Antonio? Discover why partner dancing is one of the best activities for adults over 50 — and how to start tonight.",
    keywords: "senior dance classes San Antonio, dancing for seniors Texas, low impact exercise seniors San Antonio",
    body: [
      "Staying active after 50 doesn't have to mean a gym. At River City Dance Studio in San Antonio, a large and beloved part of our community is senior dancers — and research consistently links partner dancing with better balance, sharper memory, stronger hearts, and lower loneliness.",
      "Why dancing works so well for older adults: it's low-impact but genuinely aerobic, it trains balance and coordination (key for fall prevention), and learning steps is a proven workout for the brain. Just as important, it's social. Our Tuesday and Friday 7:00 PM beginner classes feel more like a family gathering than a fitness class.",
      "We take senior comfort seriously. Our sprung hardwood floor is gentle on joints, our pace is patient, and no partner is ever required — we rotate so everyone dances. Instructors Chi and Cristine Diaz teach in both English and Spanish and have spent decades welcoming new dancers of every age and ability.",
      "Getting started is simple: drop in any Tuesday or Friday at 7:00 PM for a $25 beginner class, or pick up the $145 Starter Bundle — 10 beginner classes you can share with up to 2 people, with a 24-hour cancellation credit and a bring-a-friend-free pass. Many of our senior students also love private lessons ($100 single / $150 couple) to build confidence at their own pace before joining the group.",
      "You'll find us at 3534 Fredericksburg Rd #24, San Antonio, TX 78201, with easy on-site parking. Whether you're 55 or 85, it's never too late to dance.",
    ],
  },
  {
    icon: ICONS.music,
    title: "Tejano, Cumbia & Country Western: San Antonio's Dance Styles Explained",
    summary:
      "New to San Antonio or new to dancing? Learn the stories behind Tejano, Cumbia, Country Western, and the rhythms that move South Texas — and where to learn them locally.",
    keywords: "Tejano dance lessons San Antonio, cumbia classes San Antonio TX, country western dancing San Antonio",
    body: [
      "San Antonio doesn't just listen to music — it dances to it. From the conjunto dance halls of the West Side to honky-tonk two-stepping, partner dance is woven into this city's identity. If you're new to San Antonio, or new to dancing, here's a quick tour of the styles we teach at River City Dance Studio.",
      "Tejano: Born right here in South Texas, Tejano blends Mexican folk roots with accordion-driven conjunto rhythms. Tejano dancing is smooth, grounded, and social — the heartbeat of San Antonio family celebrations.",
      "Cumbia: A rhythm that traveled from Colombia through Mexico and became a staple at every San Antonio party. Cumbia's basic step is one of the easiest for true beginners to pick up, which is why it's often the first dance new students fall in love with.",
      "Country Western: Texas two-step, polka, waltz — the classics of the honky-tonk. Cowboy boots welcome. If you've ever watched couples glide around a dance hall and thought 'I could never do that,' you can. We teach it every week.",
      "You'll also find Latin ballroom and Swing on our floor, taught by bilingual instructors Chi and Cristine Diaz. Our beginner public classes run every Tuesday and Friday at 7:00 PM at 3534 Fredericksburg Rd #24 — $25 drop-in, no partner needed. The $145 Starter Bundle (10 classes, shareable with up to 2 people) is the best-value way to learn them all, and private lessons ($100 single / $150 couple) let you focus on your favorite style one-on-one.",
      "San Antonio's dance floor has been waiting for you. Ven a bailar — come dance with us.",
    ],
  },
];

const articlesEs: Article[] = [
  {
    icon: ICONS.couple,
    title: "¿Nunca has bailado? Guía para principiantes en clases de baile en San Antonio",
    summary:
      "¿Piensas en tu primera clase de baile en San Antonio? Esto es exactamente lo que encontrarás en River City Dance Studio — sin pareja, sin experiencia, sin problema.",
    keywords: "clases de baile para principiantes San Antonio, primera clase de baile, estudio de baile adultos San Antonio",
    body: [
      "Si nunca has tomado una clase de baile, eres exactamente a quien enseñamos. River City Dance Studio ha recibido principiantes absolutos en el West Side de San Antonio por más de 45 años, y nuestras clases públicas para principiantes cada martes y viernes a las 7:00 PM están diseñadas para quienes empiezan desde cero.",
      "Así se ve tu primera clase: llegas a nuestro estudio en 3534 Fredericksburg Rd #24, estacionas en nuestro lote, y entras a un piso de madera profesional que es amable con las rodillas. Los instructores Chi y Cristine Diaz saludan a todos por su nombre. No necesitas pareja — rotamos parejas durante la clase para que todos bailen. Tampoco necesitas zapatos especiales; ropa cómoda y zapatos de suela lisa son perfectos, y las botas vaqueras son bienvenidas.",
      "¿Te preocupa no seguir el ritmo? Nuestro paso es paciente por diseño. Desglosamos cada paso lentamente, lo repetimos, y mantenemos un ambiente social y sin presión. Muchos de nuestros estudiantes son adultos mayores que bailan por primera vez en décadas — o por primera vez en su vida.",
      "¿Listo para intentarlo? Una clase individual cuesta $25 y se reserva en línea con Square. Si sabes que volverás, el Paquete Inicial de $145 te da 10 clases (10 horas) que puedes compartir con hasta 2 personas, incluye pase gratis para un amigo, y te permite cancelar hasta 24 horas antes para recibir tu crédito. ¿Prefieres atención personalizada? Las lecciones privadas cuestan $100 individual o $150 en pareja.",
      "Las clases se imparten en inglés y español. Ven como eres — San Antonio ha bailado con nosotros desde 1979, y hay un lugar en la pista con tu nombre.",
    ],
  },
  {
    icon: ICONS.sun,
    title: "Baile para adultos mayores en San Antonio: salud, amistad y diversión después de los 50",
    summary:
      "¿Buscas ejercicio de bajo impacto y comunidad real en San Antonio? Descubre por qué el baile en pareja es una de las mejores actividades para mayores de 50 — y cómo empezar hoy.",
    keywords: "clases de baile para adultos mayores San Antonio, baile para seniors Texas, ejercicio bajo impacto mayores San Antonio",
    body: [
      "Mantenerse activo después de los 50 no tiene que significar un gimnasio. En River City Dance Studio en San Antonio, una parte grande y querida de nuestra comunidad son los bailarines mayores — y los estudios relacionan el baile en pareja con mejor equilibrio, memoria más ágil, corazones más fuertes y menos soledad.",
      "Por qué el baile funciona tan bien para adultos mayores: es de bajo impacto pero verdaderamente aeróbico, entrena el equilibrio y la coordinación (clave para prevenir caídas), y aprender pasos es un ejercicio comprobado para el cerebro. Igual de importante, es social. Nuestras clases de martes y viernes a las 7:00 PM se sienten más como una reunión familiar que como una clase de ejercicio.",
      "Tomamos en serio la comodidad de nuestros bailarines mayores. Nuestro piso de madera profesional es suave con las articulaciones, nuestro ritmo es paciente, y nunca se necesita pareja — rotamos para que todos bailen. Chi y Cristine Diaz enseñan en inglés y español y han dedicado décadas a recibir bailarines nuevos de toda edad y habilidad.",
      "Empezar es sencillo: ven cualquier martes o viernes a las 7:00 PM a una clase de $25, o adquiere el Paquete Inicial de $145 — 10 clases que puedes compartir con hasta 2 personas, con crédito por cancelación de 24 horas y un pase gratis para un amigo. Muchos de nuestros estudiantes mayores también disfrutan las lecciones privadas ($100 individual / $150 pareja) para ganar confianza a su propio ritmo.",
      "Nos encuentras en 3534 Fredericksburg Rd #24, San Antonio, TX 78201, con estacionamiento accesible. Tengas 55 u 85 años, nunca es tarde para bailar.",
    ],
  },
  {
    icon: ICONS.music,
    title: "Tejano, Cumbia y Country Western: los estilos de baile de San Antonio explicados",
    summary:
      "¿Nuevo en San Antonio o nuevo en el baile? Conoce las historias detrás del Tejano, la Cumbia y el Country Western — y dónde aprenderlos localmente.",
    keywords: "clases de baile tejano San Antonio, clases de cumbia San Antonio TX, baile country western San Antonio",
    body: [
      "San Antonio no solo escucha música — la baila. Desde los salones de conjunto del West Side hasta el two-step de los honky-tonks, el baile en pareja es parte de la identidad de esta ciudad. Si eres nuevo en San Antonio o nuevo en el baile, aquí tienes un recorrido por los estilos que enseñamos en River City Dance Studio.",
      "Tejano: Nacido aquí mismo en el sur de Texas, el Tejano mezcla raíces folclóricas mexicanas con ritmos de conjunto con acordeón. El baile tejano es suave, conectado con la tierra y social — el corazón de las celebraciones familiares de San Antonio.",
      "Cumbia: Un ritmo que viajó de Colombia a México y se volvió esencial en cada fiesta de San Antonio. El paso básico de la cumbia es uno de los más fáciles para principiantes, por eso suele ser el primer baile del que se enamoran los estudiantes nuevos.",
      "Country Western: Texas two-step, polka, vals — los clásicos del honky-tonk. Las botas vaqueras son bienvenidas. Si alguna vez viste parejas deslizándose por un salón y pensaste 'yo nunca podría', sí puedes. Lo enseñamos cada semana.",
      "También encontrarás salón latino y Swing en nuestra pista, enseñados por los instructores bilingües Chi y Cristine Diaz. Nuestras clases públicas para principiantes son cada martes y viernes a las 7:00 PM en 3534 Fredericksburg Rd #24 — $25 por clase, sin pareja necesaria. El Paquete Inicial de $145 (10 clases, compartible con hasta 2 personas) es la mejor manera de aprenderlos todos, y las lecciones privadas ($100 individual / $150 pareja) te permiten enfocarte en tu estilo favorito.",
      "La pista de baile de San Antonio te ha estado esperando. Ven a bailar con nosotros.",
    ],
  },
];

export function Blog() {
  const { t, lang } = useLang();
  const articles = lang === "es" ? articlesEs : articlesEn;
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = open !== null ? articles[open] : null;

  return (
    <section id="blog" className="relative overflow-hidden py-20 md:py-24 bg-sandstone/30">
      <Deco src={ICONS.arch} className="absolute -top-8 -right-10 w-72 opacity-10 hidden lg:block" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <Deco src={ICONS.shoes} className="w-24 mx-auto mb-4 opacity-80" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block text-center">
          {t("blog_eyebrow")}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-center mb-4">
          {t("blog_title")}
        </h2>
        <p className="text-center text-ink/70 max-w-2xl mx-auto mb-12 text-pretty">
          {t("blog_sub")}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className="flex flex-col ring-1 ring-ink/10 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Deco src={a.icon} className="w-20 mb-4 opacity-90" />
              <h3 className="font-display text-xl font-medium leading-snug mb-3">{a.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-5 text-pretty">{a.summary}</p>
              <button
                onClick={() => setOpen(i)}
                className="mt-auto self-start text-adobe font-semibold text-sm hover:underline underline-offset-4"
                aria-haspopup="dialog"
              >
                {t("blog_read_more")} →
              </button>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpen(null)}
        >
          <article
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-parchment p-6 md:p-10 shadow-2xl ring-1 ring-ink/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 size-9 grid place-items-center rounded-full ring-1 ring-ink/15 text-ink/60 hover:bg-sandstone/40"
              aria-label={t("blog_close")}
            >
              ✕
            </button>
            <Deco src={active.icon} className="w-24 mb-4 opacity-90" />
            <h3 className="font-display text-2xl md:text-3xl font-medium leading-snug mb-6 pr-8">
              {active.title}
            </h3>
            <div className="space-y-4 text-ink/80 leading-relaxed text-pretty">
              {active.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <a
              href="#pricing"
              onClick={() => setOpen(null)}
              className="inline-block mt-8 bg-adobe text-white font-semibold px-6 py-3 rounded-full hover:bg-adobe/90 transition-colors"
            >
              {t("blog_cta")}
            </a>
          </article>
        </div>
      )}
    </section>
  );
}

export function BlogSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "River City Dance Studio Blog — San Antonio Dance Guide",
    inLanguage: ["en", "es"],
    blogPost: articlesEn.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.summary,
      keywords: a.keywords,
      inLanguage: "en",
      author: { "@type": "Organization", name: STUDIO.name },
      publisher: { "@type": "Organization", name: STUDIO.name },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
