# Tulas International School (TIS) - Homepage Redesign

An animated, responsive redesign of the TIS homepage, keeping the school's copy, contact details and brand colours (navy and yellow).

## Live Demo
- **Live URL:** https://anilnetpuppys-tis-homepage-redesign.vercel.app/


## Tech Stack
- Next.js 14 (App Router), React 18
- Tailwind CSS (CSS-variable colour tokens)
- Framer Motion, Lucide React
- Deployment: Vercel

## Standout Features (all four implemented)
1. **Custom cursor:** spring-driven ring (`CustomCursor`) that grows over links, buttons and inputs. Only mounts when `pointer: fine`, so it is hidden on touch devices.
2. **Scroll-triggered reveals:** `Reveal` uses `whileInView` with `once: true`, 0.5s duration, staggered by index.
3. **Animated theme switcher:** `ThemeToggle` with a sliding thumb. `useTheme` stores the choice in `localStorage`; an inline script in `layout.js` applies it before paint to avoid a flash.
4. **Scroll progress bar:** `useScroll` + `useSpring`, scaled on the X axis (GPU friendly).

Reduced-motion preferences are respected in `globals.css`.

## Getting Started
```bash
git clone https://github.com/aniljiA1/anilnetpuppys.git
cd tis-homepage-redesign
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy
Push to GitHub, import the repo in Vercel, and deploy with default Next.js settings.
**Live URL:** https://anilnetpuppys-tis-homepage-redesign.vercel.app/

## Architecture
- `src/components/ui/` - Button, Reveal
- `src/components/layout/` - Navbar, Footer
- `src/components/sections/` - Hero, About, Sports, Rankings, Testimonials, Enquiry
- `src/components/animation/` - ScrollProgress, CustomCursor, ThemeToggle
- `src/hooks/` - useTheme, useFinePointer
- `src/data/content.js` - all copy and contact data

## Notes
The enquiry form is front-end only (no OTP or backend); wire `onSubmit` in `Enquiry.jsx` to your API.
Copy and the hero image come from tis.edu.in.

## Author
**Anil Kumar**

