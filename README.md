# Edwin N. Quesnay — Personal Portfolio

[![Deploy](https://github.com/josedwin19/josedwin19.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/josedwin19/josedwin19.github.io/actions/workflows/deploy.yml)

Personal portfolio website built with React, Vite, and Tailwind CSS.

## 🌐 Live Site

**https://josedwin19.github.io/**

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — build tool
- **Tailwind CSS 3** — styling (emerald/teal theme)
- **react-router-dom** — routing (blog posts)
- **marked** + **gray-matter** — markdown blog with frontmatter
- **lucide-react** — icons
- **i18n** — EN/ES toggle (bilingual content)

## 📂 Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── index.html                      # HTML entry point
├── public/
│   ├── favicon.svg
│   └── photo.jpg                   # Profile photo
├── scripts/
│   └── generate-blog-index.mjs     # Pre-build: generates blog index
├── src/
│   ├── App.tsx                     # Main app + routing
│   ├── main.tsx                    # React entry
│   ├── index.css                    # Tailwind + custom styles
│   ├── i18n/                        # EN/ES translations
│   │   ├── index.tsx               # i18n context
│   │   ├── en.json
│   │   └── es.json
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Interests.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── posts/                       # Blog posts in Markdown
│       ├── ai-in-cryo-em.en.md
│       └── ia-en-criomicroscopia.es.md
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 💻 Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## ✍️ Writing a Blog Post

Create a new `.md` file in `src/posts/`. The build script reads all files and generates `blog-index.json`.

Filename convention: `<slug>.<lang>.md` (e.g., `my-post.es.md`).

Frontmatter format:

```yaml
---
title: "Post Title"
date: 2026-07-15
lang: es  # or en
excerpt: "Short description shown in the blog list."
tags: ["tag1", "tag2"]
---
```

## 🚀 Deployment

Deploy is automatic on push to `main` via GitHub Actions.
Settings → Pages → Source: **GitHub Actions**.

## 📄 License

MIT — see [LICENSE](LICENSE)