---
sidebar_position: 2
---

# Hover,focus and other states

Using utilities to style elements on hover, focus, and more.

Every utility class in Tailwind can be applied conditionally by adding a variant to the beginning of the class name that describes the condition you want to target.

For example, to apply the **bg-sky-700** class on hover, use the **hover:bg-sky-700 class**:

![alt text](image-3.png)

```javaScript
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
```

Tailwind includes variants for just about everything you'll ever need, including:

- Pseudo-classes, like :hover, :focus, :first-child, and :required
- Pseudo-elements, like ::before, ::after, ::placeholder, and ::selection
- Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion
- Attribute selectors, like [dir="rtl"] and [open]
- Child selectors, like & > * and & *

These variants can even be stacked to target more specific situations, for example changing the background color in dark mode, at the medium breakpoint, on hover:

```javaScript
<button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
```
In this guide you'll learn about every variant available in the framework, how to use them with your own custom classes, and even how to create your own.