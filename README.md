# North Forge — Legora Website

A Next.js web application that replicates the [Legora](https://legora.com) legal technology marketing website. Built with a **Minimalist Elegance** design philosophy to showcase how AI-powered tools can modernise legal workflows.

---

## What Is This Project?

North Forge is a marketing site for a fictional legal tech company. It demonstrates:

- A polished, responsive landing page aimed at law firms
- Rich UI component library usage (Radix UI / shadcn/ui)
- Modern React patterns (hooks, error boundaries, server/client components)
- Next.js App Router for file-based routing and server-side rendering

The selected design theme — **Minimalist Elegance** — pairs Playfair Display serif headlines with Inter sans-serif body text on an off-white canvas (#fffbf0), accented with deep forest green (#1a5f3f). See [`ideas.md`](./ideas.md) for the full design rationale.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI library | React 19 + TypeScript 5.6 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| UI primitives | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Theme | next-themes |
| Package manager | pnpm 10 |

---

## Project Structure

```
north-forge/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx            # Landing page (hero, features, solutions, footer)
│   │   ├── not-found.tsx       # 404 page
│   │   ├── providers.tsx       # ThemeProvider, TooltipProvider, Toaster
│   │   └── globals.css         # Global styles & CSS variables
│   ├── components/
│   │   ├── ui/                 # 50+ shadcn/ui components
│   │   └── ErrorBoundary.tsx
│   ├── hooks/                  # useMobile, useComposition, usePersistFn
│   └── lib/utils.ts            # cn() class-name helper
├── ideas.md                    # Design brainstorm & rationale
├── components.json             # shadcn/ui configuration
├── next.config.ts
└── tsconfig.json
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
# Output → .next/
```

### Run the production build

```bash
pnpm start
# Serves the app on http://localhost:3000
```

### Other scripts

| Script | Description |
|---|---|
| `pnpm check` | TypeScript type-check without emitting files |
| `pnpm format` | Format all files with Prettier |

---

## Key Features

- **Landing page** — sticky nav, announcement bar, hero section, client logo strip, feature cards, solutions showcase, CTA, and a multi-column footer.
- **Responsive layout** — mobile-first grid; navigation collapses on small screens.
- **Smooth animations** — Framer Motion for hover scale transforms and image zoom.
- **Theme management** — light/dark mode via `next-themes` and CSS custom properties.
- **Error boundaries** — catches rendering errors and shows a user-friendly reload prompt.
- **50+ UI components** — buttons, dialogs, drawers, forms, carousels, data tables, and more.

---

## License

MIT
