import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Styles } from "@/components/site/Styles";
import { Schedule } from "@/components/site/Schedule";
import { Pricing } from "@/components/site/Pricing";
import { About } from "@/components/site/About";
import { Rental } from "@/components/site/Rental";
import { FAQ, FAQSchema } from "@/components/site/FAQ";
import { Blog, BlogSchema } from "@/components/site/Blog";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";
import { LocalBusinessSchema } from "@/components/site/LocalBusinessSchema";

const SITE = "https://sanantoniodancestudio.com";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dance Classes in San Antonio, TX | River City Dance Studio" },
      {
        name: "description",
        content:
          "Beginner dance classes every Friday at 7pm in San Antonio. Tejano, Cumbia, Country Western, Latin & Swing. Bilingual, senior-friendly, no partner needed.",
      },
      { property: "og:title", content: "Dance Classes in San Antonio, TX | River City Dance Studio" },
      {
        property: "og:description",
        content:
          "Beginner classes Fri at 7pm. Private lessons, a $145 10-class bundle, and studio rental. Bilingual instruction on Fredericksburg Rd.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE + "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE + "/" }],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <LocalBusinessSchema />
      <FAQSchema />
      <BlogSchema />
      <div className="min-h-screen bg-parchment text-ink selection:bg-adobe/20">
        <Nav />
        <main>
          <Hero />
          <Styles />
          <Schedule />
          <Pricing />
          <About />
          <Rental />
          <FAQ />
          <Visit />
          <Blog />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
