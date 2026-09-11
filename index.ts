import { defineInstructions, type Instructions } from "@liolocs/powerups-sdk";

const instructions: Instructions = {
  name: "astro-personal-website",
  type: "single-use",
  description: "Personal website boilerplate with brutalism style",
  variables: {
    required: ["projectName", "name", "siteDescription"],
    optional: [
      "twitterHandle",
      "linkedinHandle",
      "youtubeHandle",
      "githubHandle",
      "email",
      "profileImage",
      "umamiWebsiteId",
    ],
    defaults: {
      siteDescription: "Welcome to my website!",
    },
  },
  intent: ["Create a personal static website with astro"],
  steps: [
   {
    "type": "create",
    "name": "create-.agents-skills-astro-SKILL",
    "file": "src/create/.agents/skills/astro/SKILL.md",
    "outputPath": ".agents/skills/astro/SKILL.md"
  },
  {
    "type": "create",
    "name": "create-",
    "file": "src/create/.gitignore",
    "outputPath": ".gitignore"
  },
  {
    "type": "create",
    "name": "create-.mcp",
    "file": "src/create/.mcp.json",
    "outputPath": ".mcp.json"
  },
  {
    "type": "create",
    "name": "create--2",
    "file": "src/create/.prettierignore",
    "outputPath": ".prettierignore"
  },
  {
    "type": "create",
    "name": "create--3",
    "file": "src/create/.prettierrc",
    "outputPath": ".prettierrc"
  },
  {
    "type": "create",
    "name": "create-README",
    "file": "src/create/README.md",
    "outputPath": "README.md"
  },
  {
    "type": "create",
    "name": "create-astro.config",
    "file": "src/create/astro.config.mjs",
    "outputPath": "astro.config.mjs"
  },
  {
    "type": "create",
    "name": "create-components",
    "file": "src/create/components.json",
    "outputPath": "components.json"
  },
  {
    "type": "create",
    "name": "create-eslint.config",
    "file": "src/create/eslint.config.js",
    "outputPath": "eslint.config.js"
  },
  {
    "name": "create-package",
    "type": "dynamic-create",
    "outputPath": "package.json",
    "template": "src/dynamic-create/package.json.njk"
  },
  {
    "type": "create",
    "name": "create-public-favicon",
    "file": "src/create/public/favicon.ico",
    "outputPath": "public/favicon.ico"
  },
  {
    "type": "create",
    "name": "create-public-favicon-svg",
    "file": "src/create/public/favicon.svg",
    "outputPath": "public/favicon.svg"
  },
  {
    "type": "create",
    "name": "create-public-site",
    "file": "src/create/public/site.webmanifest",
    "outputPath": "public/site.webmanifest"
  },
  {
    "name": "create-src-components-BaseHead",
    "type": "dynamic-create",
    "outputPath": "src/components/BaseHead.astro",
    "template": "src/dynamic-create/src/components/BaseHead.astro.njk"
  },
  {
    "type": "create",
    "name": "create-src-components-ModeToggle",
    "file": "src/create/src/components/ModeToggle.tsx",
    "outputPath": "src/components/ModeToggle.tsx"
  },
  {
    "type": "create",
    "name": "create-src-components-buttons-social-button",
    "file": "src/create/src/components/buttons/social-button.astro",
    "outputPath": "src/components/buttons/social-button.astro"
  },
  {
    "type": "create",
    "name": "create-src-components-icons-social-icons",
    "file": "src/create/src/components/icons/social-icons.tsx",
    "outputPath": "src/components/icons/social-icons.tsx"
  },
  {
    "type": "create",
    "name": "create-src-components-typography-heading",
    "file": "src/create/src/components/typography/heading.astro",
    "outputPath": "src/components/typography/heading.astro"
  },
  {
    "type": "create",
    "name": "create-src-components-ui-button",
    "file": "src/create/src/components/ui/button.tsx",
    "outputPath": "src/components/ui/button.tsx"
  },
  {
    "type": "create",
    "name": "create-src-components-ui-dropdown-menu",
    "file": "src/create/src/components/ui/dropdown-menu.tsx",
    "outputPath": "src/components/ui/dropdown-menu.tsx"
  },
  {
    "type": "create",
    "name": "create-src-components-ui-separator",
    "file": "src/create/src/components/ui/separator.tsx",
    "outputPath": "src/components/ui/separator.tsx"
  },
  {
    "name": "create-src-consts",
    "type": "dynamic-create",
    "outputPath": "src/consts.ts",
    "template": "src/dynamic-create/src/consts.ts"
  },
  {
    "type": "create",
    "name": "create-src-content.config",
    "file": "src/create/src/content.config.ts",
    "outputPath": "src/content.config.ts"
  },
  {
    "name": "create-src-content-pages-home",
    "type": "dynamic-create",
    "outputPath": "src/content/pages/home.mdx",
    "template": "src/dynamic-create/src/content/pages/home.mdx.ts"
  },
  {
    "type": "create",
    "name": "create-src-hooks-use-mobile",
    "file": "src/create/src/hooks/use-mobile.ts",
    "outputPath": "src/hooks/use-mobile.ts"
  },
  {
    "type": "create",
    "name": "create-src-layouts-main",
    "file": "src/create/src/layouts/main.astro",
    "outputPath": "src/layouts/main.astro"
  },
  {
    "type": "create",
    "name": "create-src-lib-utils",
    "file": "src/create/src/lib/utils.ts",
    "outputPath": "src/lib/utils.ts"
  },
  {
    "name": "create-src-pages-index",
    "type": "dynamic-create",
    "outputPath": "src/pages/index.astro",
    "template": "src/dynamic-create/src/pages/index.astro.ts"
  },
  {
    "type": "create",
    "name": "create-src-styles-global",
    "file": "src/create/src/styles/global.css",
    "outputPath": "src/styles/global.css"
  },
  {
    "type": "create",
    "name": "create-tsconfig",
    "file": "src/create/tsconfig.json",
    "outputPath": "tsconfig.json"
  }
],
};

export default defineInstructions(instructions, import.meta.url);
