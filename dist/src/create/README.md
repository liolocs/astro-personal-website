# Personal Website

A personal website boilerplate — brutalism style. Built with
[Astro](https://astro.build) + React + Tailwind CSS v4 + shadcn/ui, deployed to
[Cloudflare Workers](https://developers.cloudflare.com/workers/).

> Scaffolded by the `astro-personal-website` powerup.

## Getting started

```sh
npm install
npm run setup   # authenticate with Cloudflare (runs `wrangler login`)
npm run dev     # dev server at http://localhost:4321
```

## Production site URL

The sitemap integration requires a `site` URL at build time. Set `SITE_URL`
once your Cloudflare domain (or `*.workers.dev` URL) is known, then build:

```sh
SITE_URL=https://your-domain.example npm run build
```

Dev builds fall back to `http://localhost:4321`, so no setup is needed locally.

## Deploying

Deploying uses [wrangler](https://developers.cloudflare.com/workers/), which is
authenticated by `npm run setup`. Create your own `wrangler.jsonc` (or
`wrangler.toml`) in the project root for your Worker, then:

```sh
npm run deploy   # astro build && wrangler deploy
```

## Make it yours

Personal bits are applied at powerup-apply time via variables. To change them
afterwards:

| What                          | Where                              |
| ----------------------------- | ---------------------------------- |
| Site title & description      | `src/consts.ts`                    |
| Name, profile image, socials  | `src/pages/index.astro`            |
| Home content page             | `src/content/pages/home.mdx`       |
| Analytics (Umami)             | `src/components/BaseHead.astro`    |
| Favicons                      | `public/favicon.svg`, `public/favicon.ico` |

Social buttons only render for handles you provided; add more like:

```astro
<SocialButton type="github" handle="your-handle">Github @your-handle</SocialButton>
```

To use your own profile picture, drop an image into `public/` and pass it to
the `Heading` component: `image={{ src: "/your-photo.png", alt: "Profile Picture" }}`.
Without it, a generic placeholder is shown.

## Project structure

```text
├── public/               # static assets (favicons, webmanifest)
├── src/
│   ├── components/       # Astro + React + shadcn/ui components
│   ├── content/pages/    # MDX content pages (home)
│   ├── layouts/          # main layout, incl. <BaseHead /> meta tags
│   ├── pages/            # routes (index.astro)
│   ├── styles/           # Tailwind + global styles
│   └── consts.ts         # site title & description
└── wrangler.jsonc        # your own Cloudflare config (create after `npm run setup`)
```

## Commands

| Command                     | Action                                            |
| :-------------------------- | :------------------------------------------------ |
| `npm run setup`             | Authenticate with Cloudflare (`wrangler login`)   |
| `npm run dev`               | Start local dev server at `localhost:4321`        |
| `npm run build`             | Build your production site to `./dist/`           |
| `npm run preview`           | Preview your build locally, before deploying      |
| `npm run deploy`            | Build and deploy to Cloudflare Workers            |
| `npm run astro ...`         | Run CLI commands like `astro add`, `astro check`  |
| `npm run lint` / `format`   | ESLint / Prettier                                 |
| `npm run typecheck`         | `astro check`                                     |
| `npm run cf-typegen`        | Generate Cloudflare types (`wrangler types`)      |

## Learn more

- [Astro docs](https://docs.astro.build)
- [Cloudflare Workers docs](https://developers.cloudflare.com/workers/)
- [Tailwind CSS docs](https://tailwindcss.com/docs)