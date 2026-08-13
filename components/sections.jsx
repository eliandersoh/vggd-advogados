"use client";

/* ———————— Sections ———————— */

import { useState, useEffect } from "react";
import { VGD } from "@/lib/data";
import { Arrow, Star, Logo, SectionHead, Portrait, usePhotoVariant } from "./ui";

/* ============ HERO ============ */
export function Hero() {
  const headline = VGD.headline;

  return (
    <section id="top" className="hero hero-split">
      <div className="container">
        <div className="hero-split-grid">
          <div className="hero-col-main" data-stagger="120">
            <div className="eyebrow reveal reveal-up">Curitiba · PR — Atendimento em todo o Brasil</div>
            <h1 className="display h-hero reveal reveal-display">{headline}</h1>
            <div className="hero-main-foot reveal reveal-up">
              <p className="hero-lede">
                Somos um escritório de advocacia preparado para oferecer soluções jurídicas especializadas, prestando serviços de forma comprometida, ética, transparente e sempre em busca da excelência.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={VGD.brand.whatsapp} target="_blank" rel="noopener noreferrer">
                  Agendar uma conversa <Arrow />
                </a>
                <a className="btn btn-ghost" href="#areas">Ver áreas</a>
              </div>
            </div>
          </div>
          <aside className="hero-col-aside reveal reveal-right" style={{ "--rd": "300ms" }}>
            <p className="hero-aside-note">
              Oferecemos atuação consultiva e contenciosa nas áreas cível, família, previdenciária e trabalhista.
            </p>
            <p className="hero-aside-sub">
              Atendimento sempre com horário marcado — presencial em Curitiba (PR) ou on-line em todo o Brasil e exterior.
            </p>
          </aside>
        </div>

        {/* meta row */}
        <div className="hero-meta reveal reveal-up" data-stagger="80">
          <div className="hm-cell reveal reveal-up">
            <span className="hm-label">OAB/PR</span>
            <span className="hm-val">18.172</span>
          </div>
          <div className="hm-cell reveal reveal-up">
            <span className="hm-label">Sede</span>
            <span className="hm-val">Curitiba · Paraná</span>
          </div>
          <div className="hm-cell reveal reveal-up">
            <span className="hm-label">Atendimento</span>
            <span className="hm-val">On-line, com horário marcado</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero { padding: 128px 0 64px; position: relative; overflow: hidden; }
        .h-hero { font-size: clamp(34px, 4.2vw, 58px); max-width: 19ch; line-height: 1.12; text-wrap: balance; }

        /* Split */
        .hero-split-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
          gap: 88px;
          align-items: end;
        }
        .hero-col-main { display: flex; flex-direction: column; }
        .hero-col-main .eyebrow { margin-bottom: 24px; }
        .hero-col-main .h-hero { margin-bottom: 40px; }
        .hero-main-foot {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 48px;
          align-items: end;
          max-width: 820px;
        }
        .hero-main-foot .hero-lede { max-width: 52ch; }
        .hero-lede { font-size: 18px; line-height: 1.6; color: rgba(245, 240, 232, 0.85); }
        .hero-ctas { display: flex; gap: 10px; flex-wrap: wrap; }

        /* Aside */
        .hero-col-aside {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding-bottom: 8px;
          border-left: 1px solid rgba(245, 240, 232, 0.18);
          padding-left: 40px;
        }
        .hero-aside-note {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: 22px;
          line-height: 1.4;
          letter-spacing: -0.01em;
          color: var(--cream);
          max-width: 30ch;
        }
        .hero-aside-sub {
          margin-top: 20px; padding-top: 20px;
          border-top: 1px solid rgba(245, 240, 232, 0.18);
          font-size: 13px; line-height: 1.6;
          color: rgba(245, 240, 232, 0.65);
          max-width: 34ch;
        }

        /* Meta */
        .hero-meta {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 64px; padding-top: 28px;
          border-top: 1px solid var(--line);
        }
        .hm-cell { display: flex; flex-direction: column; gap: 6px; }
        .hm-label { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--slate-muted); }
        .hm-val { font-size: 13px; color: var(--ink); font-weight: 500; }

        @media (max-width: 1080px) {
          .hero-split-grid { gap: 56px; }
          .hero-main-foot { grid-template-columns: 1fr; gap: 28px; align-items: start; }
          .hero-col-aside { padding-left: 32px; }
        }

        @media (max-width: 900px) {
          .hero { padding: 110px 0 40px; }
          .hero-split-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-col-main .h-hero { margin-bottom: 32px; }
          .hero-col-aside { padding-left: 0; border-left: none; border-top: 1px solid rgba(245, 240, 232, 0.18); padding-top: 32px; }
          .hero-meta { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  );
}

/* ============ SOBRE ============ */
export function About() {
  return (
    <section id="escritorio" className="sec about">
      <div className="container">
        <SectionHead
          eyebrow="O escritório"
          title="Soluções jurídicas com ética, técnica e proximidade."
          intro="Preparado para oferecer soluções jurídicas especializadas, prestando serviços humanizados de forma comprometida, ética e transparente."
        />

        <div className="about-grid">
          <div className="about-left reveal reveal-left">
            <div className="about-img" style={{ aspectRatio: "4/5" }}>
              <img src="/assets/equipe-grupo.jpg" alt="Equipe VGGD Advogados" loading="lazy" />
            </div>
          </div>
          <div className="about-right reveal reveal-right">
            <div className="about-values" data-stagger="100">
              {[
                ["Atendimento humanizado", "Você fala com o advogado responsável pelo seu caso — sem intermediários."],
                ["Linguagem clara", "Sem juridiquês. Explicamos tudo de forma que você entenda e decida bem."],
                ["Horário marcado", "O atendimento sempre ocorre com horário agendado, presencial ou on-line."],
                ["Atuação nacional", "Sede em Curitiba (PR), com atendimento on-line em todo o Brasil e no exterior."],
                ["Retornos constantes", "Você acompanha cada etapa do seu caso, com atualizações frequentes e proativas."],
              ].map(([t, d]) => (
                <div key={t} className="av-row reveal reveal-up">
                  <div className="av-title">{t}</div>
                  <div className="av-desc">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sec { padding: 48px 0; }
        .about-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 72px; align-items: center; }
        .about-img { border-radius: 2px; background-color: #D9D1C3; overflow: hidden; }
        .about-img img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; display: block; }
        .about-values { display: flex; flex-direction: column; }
        .av-row { display: grid; grid-template-columns: 220px 1fr; gap: 40px; padding: 32px 0; border-top: 1px solid var(--line); }
        .av-row:last-child { border-bottom: 1px solid var(--line); }
        .av-title { font-family: var(--font-display); font-size: 20px; color: var(--ink); }
        .av-desc { font-size: 15px; color: var(--slate); line-height: 1.7; }

        @media (max-width: 900px) {
          .sec { padding: 80px 0; }
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
          .av-row { grid-template-columns: 1fr; gap: 6px; }
        }
      `}</style>
    </section>
  );
}

/* ============ ÁREAS (tabs) ============ */
export function Areas() {
  const [active, setActive] = useState(0);
  const area = VGD.areas[active];

  return (
    <section id="areas" className="sec areas" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <SectionHead
          eyebrow="Áreas de atuação"
          title="Especialização e dedicação nas áreas de atuação de nossos profissionais."
          intro="Atuação consultiva e contenciosa nas áreas de cível, família, consumidor, sucessões, previdenciária e trabalhista, de acordo com a melhor solução para o caso. Nossa sede está localizada em Curitiba (PR) e atendemos on-line em todo o Brasil e exterior."
        />

        <div className="areas-tabs reveal reveal-up" data-stagger="80">
          {VGD.areas.map((a, i) => (
            <button
              key={a.id}
              className={`areas-tab reveal reveal-up ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="tab-num">{a.kicker.split("/")[0].trim()}</span>
              <span className="tab-label">{a.title}</span>
            </button>
          ))}
        </div>

        <div className="areas-content" key={area.id}>
          <div className="ac-left">
            <div className="eyebrow">{area.kicker}</div>
            <h3 className="display ac-title">{area.short}</h3>
            <p className="ac-long">{area.long}</p>
            <div className="ac-owner">
              <div className="eyebrow" style={{ marginBottom: 6 }}>Responsável</div>
              <div className="ac-owner-name">{area.owner}</div>
            </div>
            <a className="btn btn-primary" href={VGD.brand.whatsapp} target="_blank" rel="noopener noreferrer">
              Falar sobre o meu caso <Arrow />
            </a>
          </div>
          <div className="ac-right">
            <div className="eyebrow" style={{ marginBottom: 20 }}>O que fazemos</div>
            <ul className="ac-items">
              {area.items.map(it => (
                <li key={it}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .areas-tabs {
          display: flex; gap: 0; margin-bottom: 64px;
          border-bottom: 1px solid var(--line);
        }
        .areas-tab {
          display: flex; align-items: baseline; gap: 14px;
          padding: 20px 32px 20px 0; margin-right: 32px;
          color: var(--slate-muted);
          border-bottom: 2px solid transparent; margin-bottom: -1px;
          transition: all .25s;
          text-align: left;
        }
        .areas-tab:hover { color: var(--ink); }
        .areas-tab.active { color: var(--ink); border-bottom-color: var(--gold); }
        .tab-num { font-family: var(--font-display); font-size: 14px; color: var(--gold); }
        .tab-label { font-family: var(--font-display); font-size: 20px; font-weight: 400; letter-spacing: -0.01em; }

        .areas-content {
          display: grid; grid-template-columns: 1.15fr 1fr; gap: 80px;
          animation: fadeIn .5s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        .ac-title { font-size: clamp(28px, 3vw, 40px); margin: 16px 0 24px; }
        .ac-long { font-size: 16px; line-height: 1.7; color: var(--slate); max-width: 520px; margin-bottom: 32px; }
        .ac-owner { padding: 20px 0; margin-bottom: 28px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .ac-owner-name { font-family: var(--font-display); font-size: 18px; color: var(--ink); }

        .ac-items { list-style: none; display: flex; flex-direction: column; gap: 16px; }
        .ac-items li {
          display: grid; grid-template-columns: 20px 1fr; align-items: center; gap: 14px;
          padding: 16px 0; border-bottom: 1px solid var(--line-soft);
          font-size: 15px; color: var(--ink);
        }
        .ac-items li svg { color: var(--gold); }

        @media (max-width: 900px) {
          .areas-tabs { flex-direction: column; gap: 0; border: none; }
          .areas-tab { border-bottom: 1px solid var(--line); padding: 16px 0; margin: 0; }
          .areas-content { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}

/* ============ EQUIPE ============ */
export function Team() {
  const variant = usePhotoVariant();
  const photoFor = (p) =>
    variant === "mesa" ? p.photoMesa || p.photo
    : variant === "marrom" ? p.photoMarrom || p.photo
    : p.photo;

  return (
    <section id="equipe" className="sec team">
      <div className="container">
        <SectionHead
          eyebrow="Quem somos"
          title="Quatro sócios, quatro especialidades."
          intro="Cada sócio conduz a sua área de especialidade — para que você sempre fale com quem realmente conhece o seu caso."
        />

        <div className="team-grid" data-stagger="100">
          {VGD.team.map((p) => (
            <article key={p.slug} className="tm-card reveal reveal-up">
              <Portrait
                label={p.portrait}
                photo={photoFor(p)}
                objectPosition={variant === "atual" ? p.pos : "center top"}
                zoom={variant === "atual" ? p.zoom : undefined}
                transformOrigin={variant === "atual" ? p.origin : undefined}
              />
              <div className="tm-badge">{p.role.split(" — ")[1]}</div>
              <div className="tm-body">
                <h4 className="display tm-name">{p.name}</h4>
                <div className="tm-oab">{p.oab}</div>
                <p className="tm-bio">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
        @media (max-width: 1200px) { .team-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
        .tm-card { position: relative; display: flex; flex-direction: column; gap: 24px; transition: transform 420ms cubic-bezier(.16,1,.3,1); }
        .tm-card:hover { transform: translateY(-4px); }
        .tm-card:hover .portrait-ph { transform: scale(1.02); }
        .portrait-ph { transition: transform 520ms cubic-bezier(.16,1,.3,1); }
        .tm-badge {
          position: absolute; top: 16px; left: 16px;
          background: rgba(15,20,25,0.85); color: var(--cream);
          padding: 6px 12px; border-radius: 2px;
          font-size: 10px; letter-spacing: .18em; text-transform: uppercase;
        }
        .tm-name { font-size: 24px; margin-bottom: 4px; }
        .tm-oab { font-size: 12px; color: var(--gold); letter-spacing: 0.08em; margin-bottom: 12px; }
        .tm-bio { font-size: 14px; line-height: 1.6; color: var(--slate); }

        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/* ============ PROCESSO ============ */
export function Process() {
  return (
    <section id="processo" className="sec process" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="container">
        <div className="sh" style={{ marginBottom: 72 }}>
          <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Como trabalhamos</div>
          <div className="sh-row">
            <h2 className="display" style={{ fontSize: "clamp(40px,5vw,64px)", color: "var(--cream)" }}>Do primeiro contato ao último andamento</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(242,235,221,0.7)", maxWidth: 460 }}>
              Boa advocacia começa com uma boa conversa inicial. Nosso processo foi desenhado para você sempre saber onde o seu caso está e o que vem pela frente.
            </p>
          </div>
        </div>

        <div className="proc-grid" data-stagger="110">
          {VGD.process.map((p) => (
            <div key={p.step} className="proc-card reveal reveal-up">
              <div className="proc-step display">{p.step}</div>
              <h4 className="display proc-title">{p.title}</h4>
              <p className="proc-text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process .eyebrow { color: var(--gold-soft); }
        .proc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .proc-card {
          padding: 32px 28px 40px 0;
          border-top: 1px solid rgba(242,235,221,0.15);
          padding-right: 28px;
          position: relative;
        }
        .proc-card:not(:last-child)::after {
          content: ""; position: absolute; top: 0; right: 0; bottom: 0;
          width: 1px; background: rgba(242,235,221,0.1);
        }
        .proc-card:not(:first-child) { padding-left: 28px; }
        .proc-step { font-size: 48px; color: var(--gold-soft); margin-bottom: 32px; }
        .proc-title { font-size: 22px; margin-bottom: 12px; color: var(--cream); }
        .proc-text { font-size: 14px; line-height: 1.6; color: rgba(242,235,221,0.7); }

        @media (max-width: 900px) {
          .proc-grid { grid-template-columns: 1fr; }
          .proc-card { padding: 24px 0; }
          .proc-card:not(:last-child)::after { display: none; }
          .proc-card:not(:first-child) { padding-left: 0; }
        }
      `}</style>
    </section>
  );
}

/* ============ DEPOIMENTOS ============ */
export function Testimonials() {
  const [i, setI] = useState(0);
  const total = VGD.testimonials.length;
  const t = VGD.testimonials[i];

  useEffect(() => {
    const timer = setInterval(() => setI(x => (x + 1) % total), 7000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="depoimentos" className="sec tst">
      <div className="container">
        <SectionHead
          eyebrow="Depoimentos · Google Reviews"
          title="O que dizem nossos clientes."
          intro="Avaliações públicas deixadas por clientes no Google. Elas refletem o grau de satisfação do nosso serviço."
        />

        <div className="tst-stage reveal">
          <div className="tst-left">
            <div className="tst-quote display">&ldquo;</div>
            <blockquote className="tst-text display" key={i}>
              {t.text}
            </blockquote>
            <div className="tst-meta">
              <div className="tst-stars">
                {[...Array(5)].map((_, k) => <Star key={k} />)}
              </div>
              <div className="tst-author-block">
                <div className="tst-author">{t.author}</div>
                <div className="tst-date">{t.date} · Área: {t.area}</div>
              </div>
            </div>

            <div className="tst-controls">
              <button className="tst-btn" onClick={() => setI((i - 1 + total) % total)} aria-label="Anterior">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>
              </button>
              <div className="tst-pag">
                <span className="tst-curr">{String(i + 1).padStart(2, "0")}</span>
                <span className="tst-sep">/</span>
                <span className="tst-tot">{String(total).padStart(2, "0")}</span>
              </div>
              <button className="tst-btn" onClick={() => setI((i + 1) % total)} aria-label="Próximo">
                <Arrow size={16} />
              </button>
            </div>
          </div>

          <div className="tst-right">
            <div className="tst-g-card">
              <div className="tst-g-head">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>Google</div>
                  <div style={{ fontSize: 11, color: "var(--slate-muted)" }}>31 avaliações verificadas</div>
                </div>
              </div>
              <div className="tst-score display">5,0</div>
              <div className="tst-stars tst-stars-lg">
                {[...Array(5)].map((_, k) => <Star key={k} />)}
              </div>
              <a className="tst-g-link" href="https://www.google.com/search?q=VGD+Advogados+Curitiba" target="_blank" rel="noopener noreferrer">
                Ver todas as avaliações <Arrow />
              </a>
            </div>

            <div className="tst-dots">
              {VGD.testimonials.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`tst-dot ${k === i ? "active" : ""}`} aria-label={`Depoimento ${k + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tst-stage {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 80px; align-items: center;
        }
        .tst-quote {
          font-size: 80px; line-height: 0.8; color: var(--gold);
          margin-bottom: -16px;
        }
        .tst-text {
          font-size: clamp(22px, 2.2vw, 30px); line-height: 1.4;
          color: var(--ink); margin: 24px 0;
          animation: fadeIn .6s ease;
          min-height: 210px;
        }
        .tst-meta { display: flex; align-items: center; gap: 20px; padding-top: 20px; border-top: 1px solid var(--line); }
        .tst-stars { color: var(--gold); display: flex; gap: 2px; }
        .tst-author { font-family: var(--font-display); font-size: 17px; }
        .tst-date { font-size: 12px; color: var(--slate-muted); margin-top: 2px; }

        .tst-controls { display: flex; align-items: center; gap: 20px; margin-top: 32px; }
        .tst-btn { width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 50%; display:grid;place-items:center; transition: all .2s; }
        .tst-btn:hover { background: var(--ink); color: var(--cream); border-color: var(--ink); }
        .tst-pag { font-family: var(--font-display); font-size: 18px; color: var(--slate-muted); }
        .tst-curr { color: var(--ink); }

        .tst-right { display: flex; flex-direction: column; gap: 32px; padding-top: 20px; }
        .tst-g-card { border: 1px solid var(--line); padding: 32px; border-radius: 2px; background: var(--cream); }
        .tst-g-head { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .tst-score { font-size: 72px; line-height: 1; color: var(--ink); }
        .tst-stars-lg { margin-top: 8px; }
        .tst-stars-lg svg { width: 18px; height: 18px; }
        .tst-g-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 24px; font-size: 13px; font-weight: 500; padding-top: 20px; border-top: 1px solid var(--line); width: 100%; }

        .tst-dots { display: flex; gap: 8px; }
        .tst-dot { width: 20px; height: 3px; background: var(--line); transition: all .2s; cursor: pointer; }
        .tst-dot.active { background: var(--ink); }

        @media (max-width: 900px) {
          .tst-stage { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}

/* ============ FAQ ============ */
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="sec faq" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <SectionHead
          eyebrow="Perguntas frequentes"
          title="O que perguntam antes de começar."
          intro="Se você está pensando em falar com um advogado pela primeira vez, é provável que tenha alguma dessas dúvidas. Se tiver outra, manda uma mensagem — respondemos rápido."
        />

        <div className="faq-list">
          {VGD.faq.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-qtext display">{f.q}</span>
                <span className="faq-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d={open === i ? "M5 12h14" : "M12 5v14M5 12h14"}/>
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-list { max-width: 880px; margin: 0 auto; }
        .faq-item { border-top: 1px solid var(--line); }
        .faq-item:last-child { border-bottom: 1px solid var(--line); }
        .faq-q {
          display: grid; grid-template-columns: 48px 1fr 32px;
          align-items: center; gap: 24px;
          width: 100%; text-align: left; padding: 28px 0;
          transition: opacity .2s;
        }
        .faq-q:hover { opacity: .75; }
        .faq-num { font-family: var(--font-display); font-size: 14px; color: var(--gold); }
        .faq-qtext { font-size: clamp(18px, 1.6vw, 22px); color: var(--ink); }
        .faq-icon { color: var(--slate); transition: transform 520ms cubic-bezier(.16,1,.3,1); }
        .faq-item.open .faq-icon { transform: rotate(180deg); }
        .faq-q { transition: background 300ms ease; }
        .faq-item:hover .faq-qtext { color: var(--gold); transition: color 300ms ease; }

        .faq-a {
          display: grid; grid-template-rows: 0fr;
          transition: grid-template-rows 520ms cubic-bezier(.16,1,.3,1);
        }
        .faq-item.open .faq-a { grid-template-rows: 1fr; }
        .faq-a-inner {
          overflow: hidden;
          font-size: 15px; line-height: 1.7; color: var(--slate);
          max-width: 680px; padding-left: 72px;
        }
        .faq-item.open .faq-a-inner { padding-bottom: 28px; }

        @media (max-width: 720px) {
          .faq-q { grid-template-columns: 32px 1fr 24px; gap: 14px; padding: 22px 0; }
          .faq-a-inner { padding-left: 46px; }
        }
      `}</style>
    </section>
  );
}

/* ============ CONTATO ============ */
export function Contact() {
  return (
    <section id="contato" className="sec contact" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Contato</div>
            <h2 className="display contact-title">Vamos conversar sobre o seu caso.</h2>
            <p className="contact-intro">
              Manda uma mensagem rápida — ou chama direto no WhatsApp. Costumamos responder no mesmo dia útil.
            </p>
            <div className="hero-ctas">
              <a className="btn cf-submit" href={VGD.brand.whatsapp} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp <Arrow />
              </a>
            </div>
          </div>

          <div className="contact-right reveal">
            <div className="contact-info">
              <div className="ci-row">
                <div className="ci-label">WhatsApp</div>
                <a className="ci-val" href={VGD.brand.whatsapp} target="_blank" rel="noopener noreferrer">{VGD.brand.phone}</a>
              </div>
              <div className="ci-row">
                <div className="ci-label">E-mail</div>
                <a className="ci-val" href={`mailto:${VGD.brand.email}`}>{VGD.brand.email}</a>
              </div>
              <div className="ci-row">
                <div className="ci-label">Endereço</div>
                <div className="ci-val">Curitiba — Paraná, Brasil</div>
              </div>
              <div className="ci-row">
                <div className="ci-label">Horário</div>
                <div className="ci-val">Seg — Sex · 09h às 18h · com horário marcado</div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={VGD.brand.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={VGD.brand.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={`mailto:${VGD.brand.email}`}>E-mail</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact { padding: 48px 0; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .contact-title { font-size: clamp(36px, 4vw, 56px); color: var(--cream); margin: 20px 0 24px; }
        .contact-intro { font-size: 16px; color: rgba(242,235,221,0.7); max-width: 420px; line-height: 1.6; margin-bottom: 32px; }
        .contact-info { display: flex; flex-direction: column; margin-bottom: 32px; }
        .ci-row { display: grid; grid-template-columns: 120px 1fr; gap: 20px; padding: 18px 0; border-top: 1px solid rgba(242,235,221,0.14); align-items: center; }
        .ci-row:last-child { border-bottom: 1px solid rgba(242,235,221,0.14); }
        .ci-label { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: rgba(242,235,221,0.55); }
        .ci-val { color: var(--cream); font-size: 15px; }
        .ci-val:hover { color: var(--gold-soft); }
        .contact-socials { display: flex; gap: 20px; font-size: 13px; }
        .contact-socials a { color: rgba(242,235,221,0.7); border-bottom: 1px solid rgba(242,235,221,0.2); padding-bottom: 2px; }
        .contact-socials a:hover { color: var(--gold-soft); }
        .cf-submit { background: var(--gold-soft); color: var(--ink); }
        .cf-submit:hover { background: var(--cream); }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          .ci-row { grid-template-columns: 100px 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}

/* ============ FOOTER ============ */
export function Footer() {
  return (
    <footer className="vgd-footer">
      <div className="container">
        <div className="ft-top">
          <Logo variant="footer" />
          <p className="ft-tag">Vieira, Gosch, Galindo & Dalazuana<br/>Sociedade de Advogados — OAB/PR 18.172</p>
        </div>

        <div className="ft-grid">
          <div>
            <div className="ft-label">Navegação</div>
            <ul>
              {VGD.nav.map(n => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="ft-label">Áreas</div>
            <ul>
              <li><a href="#areas">Família & Sucessões</a></li>
              <li><a href="#areas">Previdenciário</a></li>
              <li><a href="#areas">Trabalhista</a></li>
              <li><a href="#areas">Cível & Médico</a></li>
            </ul>
          </div>
          <div>
            <div className="ft-label">Contato</div>
            <ul>
              <li><a href={VGD.brand.whatsapp}>WhatsApp</a></li>
              <li><a href={`mailto:${VGD.brand.email}`}>{VGD.brand.email}</a></li>
              <li>Curitiba — PR</li>
            </ul>
          </div>
          <div>
            <div className="ft-label">Redes</div>
            <ul>
              <li><a href={VGD.brand.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={VGD.brand.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .vgd-footer { padding: 80px 0 40px; border-top: 1px solid var(--line); background: var(--cream); }
        .ft-top { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 48px; border-bottom: 1px solid var(--line); margin-bottom: 48px; }
        .ft-tag { font-size: 13px; color: var(--slate-muted); text-align: right; line-height: 1.6; }

        .ft-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-bottom: 64px; }
        .ft-label { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
        .ft-grid ul { list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; }
        .ft-grid a { color: var(--slate); }
        .ft-grid a:hover { color: var(--ink); }

        @media (max-width: 720px) {
          .ft-top { flex-direction: column; gap: 20px; }
          .ft-tag { text-align: left; }
          .ft-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  );
}
