# North Forge — Legora Website

A full-stack React web application that replicates the [Legora](https://legora.com) legal technology marketing website. Built with a **Minimalist Elegance** design philosophy to showcase how AI-powered tools can modernise legal workflows.

---

## What Is This Project?

North Forge is a front-end-heavy marketing site for a fictional legal tech company. It demonstrates:

- A polished, responsive landing page aimed at law firms
- Rich UI component library usage (Radix UI / shadcn/ui)
- Modern React patterns (hooks, context, error boundaries)
- Lightweight Express back-end that serves the SPA and handles client-side routing

The selected design theme — **Minimalist Elegance** — pairs Playfair Display serif headlines with Inter sans-serif body text on an off-white canvas (#fffbf0), accented with deep forest green (#1a5f3f). See [`ideas.md`](./ideas.md) for the full design rationale.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 + TypeScript 5.6 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 4 |
| Routing | Wouter 3 |
| Animations | Framer Motion 12 |
| UI primitives | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Back-end | Express 4 (SPA host) |
| Package manager | pnpm 10 |

---

## Project Structure

```
north-forge/
├── client/
│   └── src/
│       ├── main.tsx            # Application entry point
│       ├── App.tsx             # Root component, routing, theme
│       ├── index.css           # Global styles & CSS variables
│       ├── pages/
│       │   ├── Home.tsx        # Landing page (hero, features, footer)
│       │   └── NotFound.tsx    # 404 page
│       ├── components/
│       │   ├── ui/             # 30+ shadcn/ui components
│       │   ├── ErrorBoundary.tsx
│       │   └── Map.tsx         # Google Maps integration
│       ├── contexts/
│       │   └── ThemeContext.tsx # Light / dark mode
│       ├── hooks/              # useMobile, useComposition, usePersistFn
│       └── lib/utils.ts        # cn() class-name helper
├── server/
│   └── index.ts               # Express server (serves dist/public)
├── shared/
│   └── const.ts               # Shared constants (session cookie)
├── vite-plugin/               # Custom Vite debug-collector plugin
├── ideas.md                   # Design brainstorm & rationale
├── components.json            # shadcn/ui configuration
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js 18+**
- **pnpm 10.4.1+** (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
# Opens at http://localhost:3000
```

### Build for production

```bash
pnpm build
# Client → dist/public/
# Server → dist/index.js
```

### Run the production build

```bash
pnpm start
# Serves the app on PORT (default 3000)
```

### Other scripts

| Script | Description |
|---|---|
| `pnpm check` | TypeScript type-check without emitting files |
| `pnpm format` | Format all files with Prettier |
| `pnpm preview` | Preview the production build locally |

---

## Key Features

- **Landing page** — sticky nav, hero section, client logo strip, feature cards, solutions showcase, CTA, and a multi-column footer.
- **Responsive layout** — mobile-first grid; navigation collapses on small screens.
- **Smooth animations** — Framer Motion for scroll-triggered fade/slide, hover scale transforms, and image zoom.
- **Google Maps integration** — lazy-loaded Maps API with support for markers, geocoding, directions, and layer overlays (see `Map.tsx`).
- **Theme management** — light/dark mode via React Context and CSS custom properties.
- **Error boundaries** — catches rendering errors and shows a user-friendly reload prompt.
- **30+ UI components** — buttons, dialogs, drawers, forms, carousels, data tables, and more.

---

## Environment Variables

Create a `.env` or `.env.local` file in the project root:

```env
# Google Maps (optional)
VITE_FRONTEND_FORGE_API_KEY=your_google_maps_api_key

# API base URL (optional)
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev

# Umami analytics (optional)
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your_website_id

# Server
PORT=3000
```

---

## License

MIT
