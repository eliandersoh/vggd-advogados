import { Fraunces, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const SITE_URL = "https://vgdadvogados.com.br";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VGGD Advogados — Advocacia humanizada em Curitiba (PR)",
    template: "%s · VGGD Advogados",
  },
  description:
    "Vieira, Gosch, Galindo & Dalazuana — Sociedade de Advogados. Advocacia humanizada em Curitiba (PR): Família e Sucessões, Previdenciário, Trabalhista e Cível/Médico. Atendimento on-line em todo o Brasil.",
  keywords: [
    "advogado Curitiba",
    "escritório de advocacia Curitiba",
    "advogado de família Curitiba",
    "advogado previdenciário Curitiba",
    "advogado trabalhista Curitiba",
    "direito médico",
    "inventário",
    "aposentadoria INSS",
    "VGGD Advogados",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "VGGD Advogados",
    title: "VGGD Advogados — Advocacia humanizada em Curitiba (PR)",
    description:
      "Advocacia humanizada, para resultados que alcancem objetivos e mudem vidas. Família e Sucessões, Previdenciário, Trabalhista e Cível/Médico.",
    images: [
      {
        url: "/assets/equipe-grupo.jpg",
        width: 1200,
        height: 630,
        alt: "Equipe VGGD Advogados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGGD Advogados — Advocacia humanizada em Curitiba (PR)",
    description:
      "Família e Sucessões, Previdenciário, Trabalhista e Cível/Médico. Atendimento on-line em todo o Brasil.",
    images: ["/assets/equipe-grupo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/mark-teal.png",
    apple: "/assets/mark-teal.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#126579",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${inter.variable} ${instrument.variable}`}>
        {children}
      </body>
    </html>
  );
}
