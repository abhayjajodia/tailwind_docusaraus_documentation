---
sidebar_position: 1
---
INSTALLATION
# Get Started with Tailwind CSS

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It;s fast,flexible, and reliable - with zero-runtime.

## Installation

### Using Vite

Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

- #### Install Tailwind CSS
  - Install `'tailwindcss'` and '@tailwindscss/vite' via npm

```bash
npm install tailwindcss @tailwindcss/vite
```


- #### Configure the Vite plugin
  - Add the `'@tailwindcss/vite'` plugin to your Vite configuration.

```javaScript 
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

- #### Import Tailwind CSS
  - Add an `'@import'` to your CSS file that imports Tailwind CSS.

```javaScript
@import "tailwindcss";
```

- #### Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.

```bash
npm run dev
```

- #### Start using Tailwind in yout HTML
Make sure your compiled CSS is included in the `<head>` (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.

```HTML
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```



