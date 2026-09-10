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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <LocalBusinessSchema />
      <FAQSchema />
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
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
