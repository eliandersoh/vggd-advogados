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
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
