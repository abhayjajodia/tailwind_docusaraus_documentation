---
sidebar_position: 3
---
CORE CONCEPTS Styling with utility classes

Building complex components from a constrained set of primitive utilities.

## Overview

You style things with Tailwind by combining many single-purpose presentational classes (utility classes) directly in your markup:

![alt text](image-2.png)

```javaScript
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
```

For example, in the UI above we've used:

- The display and padding utilities (flex, shrink-0, and p-6) to control the overall layout
- The max-width and margin utilities (max-w-sm and mx-auto) to constrain the card width and center it horizontally
- The background-color, border-radius, and box-shadow utilities (bg-white, rounded-xl, and shadow-lg) to style the card's appearance
- The width and height utilities (size-12) to set the width and height of the logo image
- The gap utilities (gap-x-4) to handle the spacing between the logo and the text
- The font-size, color, and font-weight utilities (text-xl, text-black, font-medium, etc.) to style the card text

Styling things this way contradicts a lot of traditional best practices, but once you try it you'll quickly notice some really important benefits:

- You get things done faster — you don't spend any time coming up with class names, making decisions about selectors, or switching between HTML and CSS files, so your designs come together very fast.
- Making changes feels safer — adding or removing a utility class to an element only ever affects that element, so you never have to worry about accidentally breaking something another page that's using the same CSS.
- Maintaining old projects is easier — changing something just means finding that element in your project and changing the classes, not trying to remember how all of that custom CSS works that you haven't touched in six months.
- Your code is more portable — since both the structure and styling live in the same place, you can easily copy and paste entire chunks of UI around, even between different projects.
- Your CSS stops growing — since utility classes are so reusable, your CSS doesn't continue to grow linearly with every new feature you add to a project.
- These benefits make a big difference on small projects, but they are even more valuable for teams working on long-running projects at scale.