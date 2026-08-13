# VGGD Advogados — Site institucional

Site institucional do escritório **Vieira, Gosch, Galindo & Dalazuana — Sociedade de Advogados** (Curitiba/PR), construído com [Next.js](https://nextjs.org) (App Router).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Imagens

As fotos e logos estão em `public/assets/`. As fotos foram otimizadas para web (máx. 1600px, JPEG ~78% de qualidade).

## Estrutura

- `app/layout.jsx` — fontes (next/font), metadata SEO completa (Open Graph, Twitter, robots), viewport
- `app/page.jsx` — página única com JSON-LD (`LegalService` + `FAQPage`)
- `app/globals.css` — design tokens, sistema de motion/reveal, estilos globais
- `app/sitemap.js`, `app/robots.js`, `app/manifest.js` — gerados automaticamente pelo Next
- `components/ui.jsx` — Nav, Logo, SectionHead, Portrait, botão WhatsApp, efeitos de scroll
- `components/sections.jsx` — Hero, Sobre, Equipe, Áreas, Processo, Depoimentos, FAQ, Contato, Footer
- `lib/data.js` — todo o conteúdo do site (textos, áreas, equipe, depoimentos, FAQ)
- `next.config.mjs` — headers de segurança e cache imutável para `/assets`

## SEO incluído

- Metadata completa com `metadataBase`, canonical, Open Graph e Twitter Cards
- JSON-LD: `LegalService` (com avaliações, equipe e horários) e `FAQPage`
- `sitemap.xml`, `robots.txt` e Web App Manifest gerados pelo App Router
- Fontes servidas via `next/font` (sem requisições ao Google Fonts em runtime, zero layout shift)
- `prefers-reduced-motion` respeitado em todas as animações
- Headers de segurança (nosniff, frame-options, referrer-policy, permissions-policy)

> O domínio configurado é `https://vggdadvogados.com.br` — ajuste `SITE_URL` em `app/layout.jsx` e as URLs em `app/sitemap.js`/`app/robots.js` se o domínio final for outro.
