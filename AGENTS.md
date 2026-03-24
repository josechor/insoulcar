# AGENTS.md - InSoulCar

Proyecto web de **InSoulCar**, servicio de limpieza de coches a domicilio en Ourense.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3
- **Fonts**: Inter (Google Fonts)

## Comandos

```bash
npm run dev        # Desarrollo en localhost:3000
npm run build      # Build de producción
npm run lint       # ESLint
npm start          # Servidor de producción
```

No hay tests configurados en este proyecto.

## Estructura del Proyecto

```
src/
├── app/              # App Router (páginas y rutas)
│   ├── layout.tsx    # Layout raíz con Navbar y Footer
│   ├── page.tsx      # Homepage
│   ├── servicios/    # Páginas de servicios
│   ├── blog/         # Blog con artículos
│   ├── galeria/      # Galería de imágenes
│   ├── contacto/     # Formulario de contacto
│   ├── robots.ts     # Generación de robots.txt
│   ├── sitemap.ts    # Generación de sitemap.xml
│   └── not-found.tsx # Página 404
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Testimonials, CTASection
│   └── ui/           # ServiceCard, GalleryGrid, ContactForm
├── data/index.ts     # Datos globales (BUSINESS, SERVICES, etc.)
└── lib/seo.ts        # Utilidades SEO (metadata, JSON-LD)
```

## SEO y Rendimiento

Este proyecto prioriza el SEO y la carga rápida de páginas:

### Metadata
- Usar `generateSeoMetadata()` de `@/lib/seo` para metadata de cada página
- Incluir `path` para generar canonical URL correcta
- Cada página debe exportar `metadata` o generar desde `generateMetadata()`

### JSON-LD (Schema.org)
- **LocalBusiness**: incluido globalmente en `layout.tsx`
- **Service**: usar `serviceJsonLd()` en páginas de servicios individuales
- **BreadcrumbList**: usar `breadcrumbJsonLd()` para navegación
- **FAQPage**: usar `faqJsonLd()` para secciones de preguntas frecuentes
- Insertar con `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />`

### Sitemap y Robots
- `sitemap.ts` genera automáticamente las URLs estáticas + dinámicas de servicios y blog
- `robots.ts` bloquea `/api/`, `/_next/`, `/admin/`

### Imágenes
- Usar formato AVIF y WebP (configurado en `next.config.mjs`)
- Remote patterns permitidos: `images.unsplash.com`
- Siempre incluir `alt` descriptivo para accesibilidad

## Guías de Código

### TypeScript
- `strict: true` en tsconfig, tipar todos los props y funciones
- Usar `as const` para arrays de datos estáticos
- Prefijar props con interfaces: `interface ComponentProps { ... }`

### Imports
- Path alias `@/*` apunta a `./src/*`
- Orden: React/Next → bibliotecas → componentes → data → lib → styles

### Componentes
- `'use client'` solo cuando haya interactividad (useState, useEffect, onClick)
- Components en `components/ui/` son reutilizables
- Components en `components/sections/` son secciones de página específicas
- Components en `components/layout/` son estructura global

### Estilos Tailwind
- Colores: `brand-*` (azul corporativo), `neutral-*` (grises)
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Bordes redondeados: `rounded-xl` o `rounded-2xl` para cards
- Sombras: `shadow-sm` normal, `shadow-lg` hover, `shadow-brand-700/20` para destaque

### Datos
- Datos estáticos en `src/data/index.ts` como `const` con `as const`
- Business info: usar `BUSINESS.name`, `BUSINESS.phone`, etc.
- Servicios: iterar `SERVICES` array para listados

### Enlaces
- WhatsApp: `https://wa.me/{BUSINESS.whatsapp}?text=...`
- Teléfono: `tel:{BUSINESS.phone}`
- Usar componente `Link` de Next para navegación interna
- Enlaces externos: `target="_blank"` + `rel="noopener noreferrer"`

### Validación HTML
- Usar `<nav aria-label="...">` para navegaciones
- `aria-expanded` en botones con estado
- `<time dateTime="...">` con formato ISO para fechas
- Breadcrumbs con `<ol>` y aria-label

## Datos del Negocio

```typescript
BUSINESS.name       // "InSoulCar"
BUSINESS.siteUrl    // "https://www.insoulcar.es"
BUSINESS.phone      // "+34 600 000 000"
BUSINESS.whatsapp   // "+34600000000"
BUSINESS.address    // { city: "Ourense", ... }
BUSINESS.social     // { instagram, facebook }
```

### Servicios (3 niveles)
- `insoul-essential` - Desde 79€, 1h
- `insoul-select` - Desde 109€, 2h (featured/popular)
- `insoul-experience` - Desde 199€, 3-5h
