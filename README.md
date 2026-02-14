# Exportandes Web

Sitio corporativo de Exportandes -- trading de metales reciclados. Astro + Tailwind CSS, 100% estatico.

## Stack

- **Framework:** Astro 4 (SSG)
- **Estilos:** Tailwind CSS 3.4
- **Tipografia:** Montserrat, Inter, JetBrains Mono (Google Fonts)
- **Deploy:** GitHub Actions -> Cloudflare Pages / GitHub Pages

## Desarrollo

```bash
npm install
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera /dist
npm run preview    # preview del build
```

## Estructura

```
src/
  components/     # Componentes UI (Navbar, Hero, PriceTable, etc.)
  content/blog/   # Posts del blog en Markdown
  layouts/        # Layout principal
  pages/          # Paginas del sitio
  styles/         # CSS global
data/
  prices.json     # Tabla de precios (editable)
public/           # Assets estaticos
```

## Actualizar precios

Edita `data/prices.json`. Cada entrada tiene:

```json
{
  "id": "al-perf-limpio",
  "name": "Perfil de aluminio (limpio)",
  "price": 1900,
  "unit": "CLP/kg",
  "category": "aluminio",
  "conditions": "Sin tornillos ni plastico",
  "trend": "up"
}
```

Los precios se consumen en build time por `PriceTable.astro` y `PriceStrip.astro`.

## Deploy

El archivo `.github/workflows/deploy.yml` ejecuta:
1. `npm ci`
2. `npx astro build`
3. Upload a GitHub Pages (o Cloudflare Pages)

Para Cloudflare Pages: conecta el repo en el dashboard de Cloudflare, build command `npm run build`, output `dist`.

## SEO

- JSON-LD: LocalBusiness, FAQPage, Product, BreadcrumbList, Article
- Sitemap automatico via `@astrojs/sitemap`
- Meta tags y OG tags en cada pagina
- 12 blog posts SEO + 6 landing pages locales
- Schema FAQ en cada pagina principal

## Placeholder

Busca `[NOMBRE CEO]` en el codigo para completar con datos reales del CEO.
