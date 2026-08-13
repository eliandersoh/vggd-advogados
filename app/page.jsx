import { VGD } from "@/lib/data";
import { Nav, WhatsAppFloat, Effects } from "@/components/ui";
import {
  Hero,
  About,
  Team,
  Areas,
  Process,
  Testimonials,
  Faq,
  Contact,
  Footer,
} from "@/components/sections";

/* JSON-LD structured data — LegalService schema for rich results */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: VGD.brand.name,
    alternateName: VGD.brand.full,
    description:
      "Escritório de advocacia em Curitiba (PR) com atuação em Direito de Família e Sucessões, Previdenciário, Trabalhista e Cível/Médico. Atendimento on-line em todo o Brasil.",
    url: "https://vgdadvogados.com.br",
    email: VGD.brand.email,
    telephone: "+55-41-99822-4539",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    sameAs: [VGD.brand.instagram, VGD.brand.facebook],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "31",
    },
    employee: VGD.team.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.role,
      description: p.bio,
    })),
    areaServed: "BR",
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: VGD.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <Hero />
        <About />
        <Team />
        <Areas />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Effects />
    </>
  );
}
