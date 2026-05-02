# Ethan Xing Portfolio

Personal portfolio site built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Overview

This project contains a single portfolio application in the `portfolio/` directory and a small root wrapper `package.json` that forwards common scripts.

The site includes:
- A smooth-scroll top navigation (`me`, `projects`, `experience`, `resume`)
- A custom projects carousel with depth effects, hover media, and modal project details
- Experience timeline and contact links
- Static assets (images, videos, resume PDF) served from `portfolio/public`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Project Structure

```text
.
├── package.json                # root script wrappers
├── netlify.toml                # Netlify build config (base = portfolio)
└── portfolio/
    ├── package.json            # app dependencies + scripts
    ├── src/app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── components/
    │       ├── top-nav.tsx
    │       └── projects-carousel.tsx
    └── public/                 # logos, project media, resume, icons
```

## Getting Started

### 1. Install dependencies

From the repo root:

```bash
npm install
cd portfolio && npm install
```

### 2. Run the development server

From the repo root:

```bash
npm run dev
```

The app runs on `http://127.0.0.1:3001`.

## Available Scripts

From the repo root:

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - run ESLint

These commands proxy into the `portfolio/` app.

## Deployment

Netlify is configured in `netlify.toml`:
- `base = "portfolio"`
- `command = "npm run build"`
- `publish = ".next"`
- plugin: `@netlify/plugin-nextjs`

## Notes

- Main page content and section data live in `portfolio/src/app/page.tsx`.
- Project card/popup behavior is implemented in `portfolio/src/app/components/projects-carousel.tsx`.
- Resume link in the navbar points to `portfolio/public/EthanXingResume.pdf`.
