import { useLang } from "@/lib/i18n";
import { Deco, ICONS } from "./Icons";

export function FAQ() {
  const { t, lang } = useLang();

  const items =
    lang === "es"
      ? [
          {
            q: "¿Dónde está el estudio?",
            a: "Estamos en 3534 Fredericksburg Rd #24, San Antonio, TX 78201. Estacionamiento accesible disponible.",
          },
          {
            q: "¿Cuándo son las clases públicas?",
            a: "Cada martes y viernes a las 7:00 PM. Son clases para principiantes — sin pareja necesaria y todos los niveles bienvenidos.",
          },
          {
            q: "¿Tienen clases para adultos mayores?",
            a: "Sí. Una gran parte de nuestra comunidad son bailarines mayores. Enseñamos a un ritmo paciente, en un piso de madera amable con las rodillas, y en un ambiente social.",
          },
          {
            q: "¿Necesito traer pareja?",
            a: "No. En las clases públicas rotamos parejas para que todos bailen. Las lecciones privadas son uno a uno o en pareja.",
          },
          {
            q: "¿Qué incluye el paquete de $145?",
            a: "Dos clases públicas de práctica más una lección privada. Es la forma más rápida de aprender los fundamentos.",
          },
          {
            q: "¿Cómo pago?",
            a: "Usamos Square para todas las transacciones con tarjeta — tarjetas de crédito, Apple Pay, Google Pay. También aceptamos efectivo en la puerta.",
          },
          {
            q: "¿Qué debo usar?",
            a: "Ropa cómoda y zapatos con suela lisa (evita suelas de goma adherentes). Las botas vaqueras funcionan muy bien para country y tejano.",
          },
          {
            q: "¿Puedo rentar el estudio?",
            a: "Sí. Nuestro estudio está disponible para eventos privados, ensayos, prácticas de quinceañera y fotografía. Llena el formulario de renta para más información.",
          },
        ]
      : [
          {
            q: "Where is River City Dance Studio located?",
            a: "We're at 3534 Fredericksburg Rd #24, San Antonio, TX 78201. Easy parking is available on-site.",
          },
          {
            q: "When are public classes?",
            a: "Every Tuesday and Friday at 7:00 PM. These are beginner public classes — no partner needed and all ages welcome.",
          },
          {
            q: "Do you have classes for seniors?",
            a: "Yes — a large part of our community is senior dancers. We teach at a patient pace on a wood floor that's easy on the joints, in a warm social environment.",
          },
          {
            q: "Do I need to bring a partner?",
            a: "No. We rotate partners during public classes so everyone gets to dance. Private lessons can be one-on-one or as a couple.",
          },
          {
            q: "What's included in the $145 bundle?",
            a: "Two drop-in public classes plus one private lesson — the fastest way to learn the fundamentals.",
          },
          {
            q: "How do I pay?",
            a: "We use Square for all card transactions — major credit cards, Apple Pay, and Google Pay. Cash is also accepted at the door.",
          },
          {
            q: "What should I wear?",
            a: "Comfortable clothing and shoes with a smooth sole (avoid grippy rubber soles). Cowboy boots work great for Country and Tejano classes.",
          },
          {
            q: "Can I rent the studio for an event?",
            a: "Yes. Our studio is available for private events, rehearsals, quinceañera practices, and photography. Submit the rental form above for availability and rates.",
          },
          {
            q: "Do you offer instruction in Spanish?",
            a: "Yes — our instructors are bilingual and can teach in English or Spanish. Sí, enseñamos en inglés y español.",
          },
        ];

  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-24">
      <Deco
        src={ICONS.conjunto}
        className="absolute -bottom-6 -left-10 w-80 opacity-10 hidden lg:block"
      />
      <div className="relative max-w-3xl mx-auto px-5 md:px-8">
        <Deco src={ICONS.hat} className="w-24 mx-auto mb-4 opacity-80" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-adobe mb-3 block text-center">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-center mb-12">
          {t("faq_title")}
        </h2>
        <div className="space-y-3">
          {items.map((it) => (
            <details
              key={it.q}
              className="group ring-1 ring-ink/10 rounded-xl bg-white open:bg-sandstone/20 transition-colors"
            >
              <summary className="list-none p-5 md:p-6 cursor-pointer flex justify-between items-center gap-4">
                <span className="font-medium text-base md:text-lg">{it.q}</span>
                <svg
                  className="size-4 text-adobe shrink-0 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-6 text-ink/70 leading-relaxed text-pretty">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSchema() {
  // English source for structured data (search-engine + LLM friendly).
  const faqs = [
    ["Where is River City Dance Studio located?", "3534 Fredericksburg Rd #24, San Antonio, TX 78201."],
    ["When are public classes?", "Beginner public classes are every Tuesday and Friday at 7:00 PM."],
    ["Do you have classes for seniors?", "Yes. We specialize in patient, low-impact instruction for the senior community in a warm social environment."],
    ["Do I need to bring a partner?", "No. We rotate partners during public classes so everyone gets to dance."],
    ["What is included in the $145 bundle?", "Two drop-in public classes plus one private lesson."],
    ["How do you accept payment?", "We use Square for all card transactions — credit cards, Apple Pay, Google Pay. Cash is also accepted."],
    ["Do you offer instruction in Spanish?", "Yes. Our instructors are bilingual and can teach in English or Spanish."],
    ["Can I rent the studio?", "Yes. The studio is available for private events, rehearsals, quinceañera practices, and photography."],
  ];
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}