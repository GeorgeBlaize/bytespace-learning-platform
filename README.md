# ByteSpace — Online Course Platform

A pixel-faithful, responsive implementation of the **ByteSpace New** Figma design, built with React, TypeScript and Tailwind CSS.

## Pages

| Route      | Page                                   |
| ---------- | -------------------------------------- |
| `/`        | Landing page (required)                |
| `/sign-in` | Sign In (bonus)                        |
| `/sign-up` | Sign Up / Create an Account (bonus)    |
| `*`        | 404 page (from the design, extra)      |

## Tech stack

- **React 19 + TypeScript** via **Vite**
- **Tailwind CSS v4** with design tokens defined in `@theme` (`src/index.css`)
- **React Router** for client-side routing (`vercel.json` rewrites all paths to the SPA)
- **lucide-react** icons, **clsx** for conditional classes

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build
npm run preview   # serve the production build
npm run lint      # oxlint
```

## Project structure

```
src/
├── components/
│   ├── auth/        # AuthLayout, SocialButtons, form validation helpers
│   ├── cards/       # CourseCard, CategoryCard, TestimonialCard, floating hero cards
│   ├── layout/      # Navbar, Footer, ScrollToTop
│   └── ui/          # Button, Chip, TextField, Logo, Rating, AvatarStack, ProgressBar, SectionHeading
├── data/content.ts  # All copy and list data (courses, categories, testimonials, footer links…)
├── hooks/           # useDocumentTitle
├── pages/           # Home, SignIn, SignUp, NotFound
└── sections/home/   # One component per landing-page section
```

Content lives in `src/data/content.ts`, so sections map over typed data instead of repeating markup.

## Implementation notes

- **Design grid:** the blue 120px grid is a CSS `bg-grid` utility that is anchored to the horizontal centre. It stays aligned with the artwork at every viewport width.
- **Hero artwork:** the 3D shapes and the hero photo sit on the design's 1440px canvas and scale as one unit at smaller breakpoints. The floating cards (UI/UX Design, Learning Progress, Happy Students) are real HTML components layered on top.
- **Imagery:** the photos and 3D shapes were exported from the design, with the blue background keyed out to transparency. Illustrations on the light sections use a feathered mask so they blend into the gradient backgrounds.
- **Forms:** Sign In and Sign Up have client-side validation, accessible error messages (`aria-invalid` / `aria-describedby`) and a show/hide password toggle. There is no backend: Sign In redirects home and Sign Up shows a confirmation.
- **Responsive:** tested from 390px to 1440px+, with a mobile menu below the `md` breakpoint.
- **Accessibility:** semantic landmarks, labelled inputs, `aria-current` in the nav, visible focus styles and decorative images hidden from assistive tech.

## Deployment

Deployed on Vercel as a static Vite build (`npm run build` → `dist/`).
