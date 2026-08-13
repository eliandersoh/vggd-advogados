export default function manifest() {
  return {
    name: "VGGD Advogados",
    short_name: "VGGD",
    description:
      "Vieira, Gosch, Galindo & Dalazuana — Sociedade de Advogados. Advocacia humanizada em Curitiba (PR).",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#126579",
    icons: [
      {
        src: "/assets/mark-teal.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
