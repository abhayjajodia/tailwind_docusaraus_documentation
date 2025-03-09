---
sidebar_position: 2
---

# Compatibility

Learn about browser support and compatibility with other tooling.

## Browser support

Tailwind CSS v4.0 is designed for and tested on modern browsers, and the core functionality of the framework specifically depends on these browser versions:

- Chrome 111 (released March 2023)
- Safari 16.4 (released March 2023)
- Firefox 128 (released July 2024)

Tailwind also includes support for many bleeding-edge platform features like `field-sizing: content`, `@starting-style`, and `text-wrap: balance` that have limited browser support. It's up to you if you want to use these modern features in your projects — if the browsers you're targeting don't support them, simply don't use those utilities and variants.

If you're unsure about the support for a modern platform feature, the Can I use database is a great resource.

### Sass, Less, and Stylus

Tailwind CSS v4.0 is a full-featured CSS build tool designed for a specific workflow, and is not designed to be used with CSS preprocessors like Sass, Less, or Stylus.

Think of Tailwind CSS itself as your preprocessor — you shouldn't use Tailwind with Sass for the same reason you wouldn't use Sass with Stylus.

Since Tailwind is designed for modern browsers, you actually don't need a preprocessor for things like nesting or variables, and Tailwind itself will do things like bundle your imports and add vendor prefixes.

### Build-time imports

Tailwind will automatically bundle other CSS files you include with `@import`, without the need for a separate preprocessing tool.

```CSS
@import "tailwindcss";
@import "./typography.css";
```

In this example, the `typography.css` file will be bundled into your compiled CSS for you by Tailwind, without any other tooling like Sass or `postcss-import`.

### Variables
All modern browsers support native CSS variables without the need for any sort of preprocessor:

```CSS
.typography {
  font-size: var(--text-base);
  color: var(--color-gray-700);
}
```

Tailwind relies on CSS variables heavily internally, so if you can use Tailwind in your project, you can use native CSS variables.

### Nesting
Under the hood Tailwind uses Lightning CSS to process nested CSS like this:

```CSS
.typography {
  p {
    font-size: var(--text-base);
  }
  img {
    border-radius: var(--radius-lg);
  }
}
```

Tailwind flattens that nested CSS for you so it can be understood by all modern browsers:

```CSS
.typography p {
  font-size: var(--text-base);
}
.typography img {
  border-radius: var(--radius-lg);
}
```

Native CSS nesting support is also very good these days, so you don't really need a preprocessor for nesting even if you aren't using Tailwind.

