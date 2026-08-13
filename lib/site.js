/* URL base do site, resolvida por ambiente:
   1. NEXT_PUBLIC_SITE_URL — override manual (defina na Vercel quando o
      domínio oficial vggdadvogados.com.br estiver apontado)
   2. Domínio de produção do deploy na Vercel (ex.: vggd.vercel.app)
   3. Fallback: domínio oficial */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://vggdadvogados.com.br");
