import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string>;

const en: Dict = {
  nav_classes: "Classes",
  nav_pricing: "Pricing",
  nav_rental: "Studio Rental",
  nav_about: "About",
  nav_visit: "Visit",
  nav_blog: "Guides",
  nav_book: "Book a Class",
  hero_title_a: "Where San Antonio comes to dance.",
  hero_title_b: "Donde San Antonio viene a bailar.",
  hero_sub: "Warm, welcoming partner-dance instruction for all ages. For 45+ years, River City Dance Studio has taught the rhythms that move our city — Tejano, Cumbia, Country Western, Latin, Swing, and more.",
  hero_cta_schedule: "View Schedule",
  hero_pill: "Beginner Public Classes: Tue & Fri @ 7:00 PM",
  styles_eyebrow: "What we teach",
  styles_title: "Styles rooted in South Texas",
  styles_sub: "From the dance halls of the West Side to the smooth ballroom standards, our instructors share the music and movement of San Antonio.",
  schedule_title: "Weekly schedule",
  schedule_sub: "Drop in any Tuesday or Friday. No partner required.",
  schedule_reserve: "Reserve a spot",
  schedule_pricing_link: "View pricing & pay",
  pricing_eyebrow: "Simple pricing",
  pricing_title: "Pay your way",
  pricing_sub: "All payments processed securely through Square. Cash also accepted at the door.",
  senior_title: "Built for the senior community",
  senior_body: "Our studio is a cherished home for San Antonio's senior dancers. We prioritize patient, low-impact instruction, a forgiving wood floor, and a social environment that feels like family.",
  senior_tag: "No partner required • Easy pace • Welcoming community",
  about_eyebrow: "Meet the owners",
  about_title: "Chi & Cristine Diaz",
  about_body: "River City Dance Studio has been part of San Antonio for over 45 years. Chi and Cristine — longtime instructors here — became co-owners to carry that legacy forward. Their joy is in the connections they make with every student who walks through the door.",
  rental_eyebrow: "Studio Rental",
  rental_title: "Host your event with us",
  rental_body: "Our hardwood-floor studio is available for private events, rehearsals, quinceañera practices, and photography. Centrally located on Fredericksburg Rd. Submit a request below and we'll get back to you with availability and rates.",
  rental_feature_1: "Sprung hardwood dance floor",
  rental_feature_2: "Full sound system with Bluetooth",
  rental_feature_3: "Easy parking on-site",
  rental_form_placeholder: "Studio rental request form",
  rental_form_note: "Replace this placeholder with your Google Form embed URL.",
  faq_title: "Common questions",
  blog_eyebrow: "From the dance floor",
  blog_title: "Guides for new dancers",
  blog_sub: "Stories and tips for anyone starting their dance journey in San Antonio — in English y en español.",
  blog_read_more: "Read More",
  blog_close: "Close article",
  blog_cta: "See Classes & Pricing",
  visit_title: "Visit the studio",
  visit_hours: "Class Hours",
  visit_payment_title: "Payments",
  visit_payment_body: "We use Square for all card transactions. Major credit cards, Apple Pay, Google Pay, and contactless taps welcome. Cash is also accepted at the door.",
  footer_tag: "San Antonio's home for partner dance since 1979.",
  footer_rights: "All rights reserved.",
  call: "Call",
  email: "Email",
  directions: "Get directions",
};

const es: Dict = {
  nav_classes: "Clases",
  nav_pricing: "Precios",
  nav_rental: "Renta del Estudio",
  nav_about: "Nosotros",
  nav_visit: "Visítanos",
  nav_blog: "Guías",
  nav_book: "Reservar Clase",
  hero_title_a: "Donde San Antonio viene a bailar.",
  hero_title_b: "Where San Antonio comes to dance.",
  hero_sub: "Clases de baile en pareja, cálidas y acogedoras, para todas las edades. Por más de 45 años, River City Dance Studio ha enseñado los ritmos de nuestra ciudad — Tejano, Cumbia, Country Western, Latin, Swing y más.",
  hero_cta_schedule: "Ver Horario",
  hero_pill: "Clases públicas para principiantes: Mar y Vie a las 7:00 PM",
  styles_eyebrow: "Lo que enseñamos",
  styles_title: "Estilos con raíces del sur de Texas",
  styles_sub: "Desde los salones del West Side hasta los estándares clásicos de salón, nuestros instructores comparten la música y el movimiento de San Antonio.",
  schedule_title: "Horario semanal",
  schedule_sub: "Ven cualquier martes o viernes. No necesitas pareja.",
  schedule_reserve: "Reservar lugar",
  schedule_pricing_link: "Ver precios y pagar",
  pricing_eyebrow: "Precios sencillos",
  pricing_title: "Paga a tu manera",
  pricing_sub: "Todos los pagos procesados de forma segura con Square. También aceptamos efectivo en la puerta.",
  senior_title: "Hecho para la comunidad de adultos mayores",
  senior_body: "Nuestro estudio es un hogar querido para los bailarines mayores de San Antonio. Priorizamos enseñanza paciente y de bajo impacto, un piso de madera amable con las rodillas, y un ambiente social que se siente como familia.",
  senior_tag: "Sin pareja necesaria • Ritmo cómodo • Comunidad acogedora",
  about_eyebrow: "Conoce a los dueños",
  about_title: "Chi & Cristine Diaz",
  about_body: "River City Dance Studio ha sido parte de San Antonio por más de 45 años. Chi y Cristine — instructores aquí desde hace mucho — se convirtieron en co-dueños para continuar este legado. Su alegría es la conexión que crean con cada estudiante.",
  rental_eyebrow: "Renta del Estudio",
  rental_title: "Organiza tu evento con nosotros",
  rental_body: "Nuestro estudio con piso de madera está disponible para eventos privados, ensayos, prácticas de quinceañera y fotografía. Ubicado en Fredericksburg Rd. Llena el formulario y te contactaremos con disponibilidad y precios.",
  rental_feature_1: "Piso de madera profesional",
  rental_feature_2: "Sistema de sonido con Bluetooth",
  rental_feature_3: "Estacionamiento accesible",
  rental_form_placeholder: "Formulario de renta del estudio",
  rental_form_note: "Reemplaza este placeholder con el URL de tu Google Form.",
  faq_title: "Preguntas frecuentes",
  blog_eyebrow: "Desde la pista de baile",
  blog_title: "Guías para nuevos bailarines",
  blog_sub: "Historias y consejos para quienes comienzan su camino en el baile en San Antonio — en inglés y en español.",
  blog_read_more: "Leer Más",
  blog_close: "Cerrar artículo",
  blog_cta: "Ver Clases y Precios",
  visit_title: "Visita el estudio",
  visit_hours: "Horario de Clases",
  visit_payment_title: "Pagos",
  visit_payment_body: "Usamos Square para todas las transacciones con tarjeta. Aceptamos tarjetas de crédito, Apple Pay, Google Pay y pagos sin contacto. También aceptamos efectivo en la puerta.",
  footer_tag: "El hogar del baile en pareja en San Antonio desde 1979.",
  footer_rights: "Todos los derechos reservados.",
  call: "Llamar",
  email: "Correo",
  directions: "Cómo llegar",
};

const dicts: Record<Lang, Dict> = { en, es };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof en) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("rcds-lang") as Lang | null) : null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    } else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("es")) {
      setLangState("es");
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("rcds-lang", l);
  };

  const t = (k: keyof typeof en) => dicts[lang][k] ?? en[k];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}