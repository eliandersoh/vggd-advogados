"use client";

/* ———————— Reusable components ———————— */

import { useState, useEffect } from "react";
import { VGD } from "@/lib/data";

/* Small arrow */
export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* Star */
export function Star({ filled = true }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* Logo — VGD wordmark + subtitle, matching the original site */
export function Logo({ variant = "nav" }) {
  if (variant === "footer") {
    return (
      <a href="#top" className="vgd-logo vgd-logo-footer" aria-label="VGGD — Vieira, Gosch, Galindo & Dalazuana Advogados">
        <img className="vgd-logo-img" src="/assets/logo-lockup-teal.png" alt="VGGD Advogados" />
        <style>{`
          .vgd-logo-footer { display: block; }
          .vgd-logo-footer .vgd-logo-img { height: 52px; width: auto; display: block; }
        `}</style>
      </a>
    );
  }
  return (
    <a href="#top" className="vgd-logo" aria-label="VGGD — Vieira, Gosch, Galindo & Dalazuana Advogados">
      <img className="vgd-logo-img" src="/assets/logo-lockup-white.png" alt="VGGD Advogados" />
      <style>{`
        .vgd-logo { display: flex; align-items: center; flex-shrink: 0; }
        .vgd-logo .vgd-logo-img {
          height: 56px; width: auto; max-width: none; display: block;
          transition: filter .3s var(--ease-out, ease);
          /* over the dark hero: keep it white, same as the menu items */
          filter: none;
        }
        /* Scrolled over cream: tint the logo to the menu-item colour (ink) */
        .vgd-nav.scrolled .vgd-logo .vgd-logo-img {
          filter: brightness(0);
        }
        @media (max-width: 720px) {
          .vgd-logo .vgd-logo-img { height: 34px; }
        }
        @media (max-width: 560px) {
          .vgd-logo .vgd-logo-img { height: 28px; }
        }
      `}</style>
    </a>
  );
}

/* Navigation */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`vgd-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <Logo />
          <ul className="nav-links">
            {VGD.nav.map(n => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href={VGD.brand.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="nav-cta-full">Falar no WhatsApp</span>
            <span className="nav-cta-short">WhatsApp</span>
            <Arrow />
          </a>
        </div>
      </nav>
      <style>{`
        .vgd-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 40;
          padding: 20px 0; transition: all .25s;
          border-bottom: 1px solid transparent;
        }
        .vgd-nav.scrolled {
          background: color-mix(in srgb, var(--cream) 85%, transparent);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          padding: 14px 0;
          border-bottom: 1px solid var(--line-soft);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .nav-links { display: flex; gap: 32px; list-style: none; font-size: 13px; font-weight: 400; }
        .nav-links a { color: var(--ink); transition: color .2s; position: relative; }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta { font-size: 13px; padding: 12px 20px; }
        .nav-cta-short { display: none; }
        @media (max-width: 1080px) {
          .nav-links { display: none; }
        }
        @media (max-width: 900px) {
          .nav-inner { gap: 16px; }
        }
        @media (max-width: 560px) {
          .nav-cta-full { display: none; }
          .nav-cta-short { display: inline; }
          .nav-cta { font-size: 12px; padding: 10px 16px; }
        }
      `}</style>
    </>
  );
}

/* Section heading (eyebrow + title + intro) */
export function SectionHead({ eyebrow, title, intro, dark }) {
  return (
    <div className="sh" data-stagger="120">
      {eyebrow && <div className="eyebrow reveal reveal-up" style={{ color: dark ? "var(--gold-soft)" : "var(--gold)" }}>{eyebrow}</div>}
      <div className="sh-row">
        <h2 className="display sh-title reveal reveal-display">{title}</h2>
        {intro && <p className="sh-intro reveal reveal-up">{intro}</p>}
      </div>
      <style>{`
        .sh { display: flex; flex-direction: column; gap: 18px; margin-bottom: 40px; }
        .sh-row { display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: end; }
        .sh-title { font-size: clamp(40px, 5vw, 64px); margin-top: 8px; }
        .sh-intro {
          font-size: 16px; line-height: 1.6; color: var(--slate);
          max-width: 460px; padding-bottom: 6px;
        }
        @media (max-width: 900px) {
          .sh-row { grid-template-columns: 1fr; gap: 24px; }
          .sh { margin-bottom: 48px; }
        }
      `}</style>
    </div>
  );
}

/* Sociable portrait placeholder — renders a real photo when `photo` is given */
export function Portrait({ label, aspect = "3/4", style, tone, photo, objectPosition, zoom, transformOrigin }) {
  if (photo) {
    return (
      <div className="portrait-photo" style={{ aspectRatio: aspect, ...style }}>
        <img
          src={photo}
          alt={label}
          loading="lazy"
          style={{
            objectPosition: objectPosition || "center top",
            transform: zoom ? `scale(${zoom})` : undefined,
            transformOrigin: transformOrigin || "center top",
          }}
        />
        <style>{`
          .portrait-photo {
            border-radius: 2px; overflow: hidden; background-color: #D9D1C3;
            position: relative;
          }
          .portrait-photo img {
            width: 100%; height: 100%; object-fit: cover;
            display: block;
          }
        `}</style>
      </div>
    );
  }
  return (
    <div className="ph portrait-ph" data-label={label} style={{ aspectRatio: aspect, ...style }}>
      <style>{`
        .portrait-ph {
          border-radius: 2px;
          background-color: ${tone === "dark" ? "#1E252E" : "#D9D1C3"};
          background-image:
            radial-gradient(circle at 50% 38%, rgba(15,20,25,.08) 0 70px, transparent 70px),
            radial-gradient(ellipse at 50% 88%, rgba(15,20,25,.08) 0 110px, transparent 110px),
            repeating-linear-gradient(135deg, rgba(15,20,25,.03) 0 8px, transparent 8px 16px);
        }
        .portrait-ph::after {
          top: auto; bottom: 16px; left: 16px; right: auto;
          inset: auto auto 16px 16px;
          background: rgba(15,20,25,0.7); color: #EFE6D4; padding: 4px 10px;
          display: inline-block; border-radius: 2px;
          font-size: 10px;
          height: fit-content; place-items: start;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}

/* WhatsApp floating button */
export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={VGD.brand.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.11 3.23 5.12 4.53.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z M12 2a10 10 0 00-8.5 15.23L2 22l4.92-1.46A10 10 0 1012 2zm0 18.15a8.13 8.13 0 01-4.14-1.13l-.3-.18-3.07.8.82-2.99-.19-.31A8.15 8.15 0 1120.15 12 8.15 8.15 0 0112 20.15z"/></svg>
    </a>
  );
}

/* ———————— Seletor de teste de fotos (temporário) ———————— */

const PHOTO_VARIANTS = [
  { id: "atual", label: "Atuais" },
  { id: "mesa", label: "Mesa" },
  { id: "marrom", label: "Fundo marrom" },
];

export function usePhotoVariant() {
  const [variant, setVariant] = useState("atual");
  useEffect(() => {
    const stored = window.localStorage.getItem("photoVariant");
    if (stored && PHOTO_VARIANTS.some(v => v.id === stored)) setVariant(stored);
    const onChange = (e) => setVariant(e.detail);
    window.addEventListener("photo:variant", onChange);
    return () => window.removeEventListener("photo:variant", onChange);
  }, []);
  return variant;
}

export function PhotoVariantPicker() {
  const variant = usePhotoVariant();
  const pick = (id) => {
    window.localStorage.setItem("photoVariant", id);
    window.dispatchEvent(new CustomEvent("photo:variant", { detail: id }));
  };

  return (
    <div className="pv-picker" role="group" aria-label="Teste de fotos da equipe">
      <span className="pv-label">Fotos:</span>
      {PHOTO_VARIANTS.map(v => (
        <button
          key={v.id}
          className={`pv-opt ${variant === v.id ? "active" : ""}`}
          onClick={() => pick(v.id)}
        >
          {v.label}
        </button>
      ))}
      <a className="pv-goto" href="#equipe">ver equipe ↓</a>
      <style>{`
        .pv-picker {
          position: fixed; top: 0; left: 50%; transform: translateX(-50%);
          z-index: 60;
          display: flex; align-items: center; gap: 6px;
          background: var(--ink); color: var(--cream);
          padding: 8px 14px; border-radius: 0 0 12px 12px;
          font-size: 12px;
          box-shadow: 0 12px 32px rgba(0,0,0,.25);
        }
        .pv-label { opacity: .6; text-transform: uppercase; letter-spacing: .1em; font-size: 10px; }
        .pv-opt {
          padding: 5px 12px; border-radius: 999px;
          background: rgba(255,255,255,0.08);
          font-size: 12px; transition: all .2s;
          border: 1px solid transparent;
        }
        .pv-opt:hover { background: rgba(255,255,255,0.16); }
        .pv-opt.active { background: var(--gold-soft); color: var(--ink); font-weight: 500; }
        .pv-goto { font-size: 11px; opacity: .7; margin-left: 6px; }
        .pv-goto:hover { opacity: 1; color: var(--gold-soft); }
        @media (max-width: 560px) {
          .pv-picker { width: 100%; border-radius: 0; justify-content: center; flex-wrap: wrap; }
        }
      `}</style>
    </div>
  );
}

/* ———————— Scroll effects (reveal / stagger / magnetic / parallax) ———————— */
export function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Scroll reveal */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          /* mark as revealed so we can restore `in` after React re-renders */
          e.target.dataset.revealIn = "1";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -10% 0px" });

    /* Magnetic buttons (subtle) — guarded so re-runs don't duplicate listeners */
    const initMagnetic = () => {
      if (reduce) return;
      document.querySelectorAll("[data-magnet], .btn-primary").forEach(el => {
        if (el.dataset.magnetInit) return;
        el.dataset.magnetInit = "1";
        const strength = 0.25;
        el.addEventListener("mousemove", (ev) => {
          const r = el.getBoundingClientRect();
          const x = (ev.clientX - r.left - r.width / 2) * strength;
          const y = (ev.clientY - r.top - r.height / 2) * strength;
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
        el.addEventListener("mouseleave", () => { el.style.transform = ""; });
      });
    };

    /* Index stagger children + observe every reveal element (idempotent) */
    const observeAll = () => {
      document.querySelectorAll("[data-stagger]").forEach(container => {
        const stagger = container.dataset.stagger || "80";
        container.style.setProperty("--stagger", stagger + "ms");
        Array.from(container.children).forEach((child, i) => {
          child.style.setProperty("--ri", i);
        });
      });
      document.querySelectorAll(".reveal, .reveal-display").forEach(el => {
        if (el.dataset.revealIn === "1") {
          el.classList.add("in");
        } else if (!el.classList.contains("in") && !el.dataset.revealObs) {
          el.dataset.revealObs = "1";
          io.observe(el);
        }
      });
      initMagnetic();
    };

    observeAll();

    /* React re-renders rewrite className (dropping `in`) and mount new nodes
       (tab panels, carousel slides). Watch the DOM and (a) restore `in` on
       already-revealed elements, (b) wire up anything new. */
    let scheduled = false;
    const mo = new MutationObserver((muts) => {
      let needsSweep = false;
      muts.forEach(m => {
        if (m.type === "attributes") {
          const el = m.target;
          if (el.dataset && el.dataset.revealIn === "1" && !el.classList.contains("in")) {
            el.classList.add("in");
          }
        } else if (m.type === "childList" && m.addedNodes.length) {
          needsSweep = true;
        }
      });
      if (needsSweep && !scheduled) {
        scheduled = true;
        requestAnimationFrame(() => { scheduled = false; observeAll(); });
      }
    });
    mo.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    /* Subtle parallax on [data-parallax] elements */
    let onScroll = null;
    if (!reduce) {
      let ticking = false;
      const update = () => {
        document.querySelectorAll("[data-parallax]").forEach(el => {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          if (rect.bottom < 0 || rect.top > vh) return;
          const progress = (vh - rect.top) / (vh + rect.height); // 0..1
          const speed = parseFloat(el.dataset.parallax) || 0.15;
          const y = (progress - 0.5) * speed * 100;
          el.style.setProperty("--py", y.toFixed(2) + "px");
        });
        ticking = false;
      };
      onScroll = () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    }

    return () => {
      io.disconnect();
      mo.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
