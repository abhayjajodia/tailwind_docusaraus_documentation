---
sidebar_position: 5
---

# Responsive Design

Using responsive utility variants to build adaptive user interfaces.

### Overview

Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.

First, make sure you've added the viewport meta tag to the `<head>` of your document:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
Then to add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character:

```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

There are five breakpoints by default, inspired by common device resolutions:


| Breakpoint prefix | Minimum width      | CSS                      |
|-------------------|--------------------|--------------------------|
| sm                | 40rem (640px)      | @media (width >= 40rem)  |
| md                | 48rem (768px)      | @media (width >= 48rem)  |
| lg                | 64rem (1024px)     | @media (width >= 64rem)  |
| xl                | 80rem (1280px)     | @media (width >= 80rem)  |
| 2xl               | 96rem (1536px)     | @media (width >= 96rem)  | 

This works for every utility class in the framework, which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles.

Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens:

```html
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>
```

