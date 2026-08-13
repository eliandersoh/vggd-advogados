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

## ⚠️ Imagens (obrigatório antes do deploy)

As fotos e logos **não estão incluídas no repositório**. Copie os arquivos do projeto de design (Claude Design → pasta `assets/`) para `public/assets/`:

```
public/assets/
├── equipe-grupo.jpg      # foto da equipe (seção "O escritório" + Open Graph)
├── jamili.jpg            # retratos dos sócios
├── luan.jpg
├── flavia.jpg
├── guilherme.jpg
├── logo-lockup-white.png # logo do header (sobre o hero teal)
├── logo-lockup-teal.png  # logo do footer
└── mark-teal.png         # favicon / ícone PWA
```

Enquanto as imagens não existirem, o site funciona normalmente — apenas os retratos/logos aparecem quebrados.

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

> O domínio configurado é `https://vgdadvogados.com.br` — ajuste `SITE_URL` em `app/layout.jsx` e as URLs em `app/sitemap.js`/`app/robots.js` se o domínio final for outro.
