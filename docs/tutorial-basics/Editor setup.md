---
sidebar_position: 1
---
GETTING STARTED
# Editor Setup

Tooling to improve the developer experience when working with Tailwind CSS.

### Syntax support

Tailwind CSS uses custom CSS syntax like `@theme`, `@variant`, and `@source`, and in some editors this can trigger warnings or errors where these rules aren't recognized.

If you're using VS Code, our official **Tailwind CSS IntelliSense** plugin includes a dedicated Tailwind CSS language mode that has support for all of the custom at-rules and functions Tailwind uses.

In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.

### IntelliSense for VS Code

The official **Tailwind CSS IntelliSense** extension for Visual Studio Code enhances the Tailwind development experience by providing users with advanced features such as autocomplete, syntax highlighting, and linting.

![alt text](image-1.png)

- Autocomplete — providing intelligent suggestions for utility classes, as well as CSS functions and directives.
- Linting — highlighting errors and potential bugs in both your CSS and your markup.
- Hover previews — revealing the complete CSS for utility classes when you hover over them.
- Syntax highlighting — so that Tailwind features that use custom CSS syntax are highlighted correctly.

Check out the project on GitHub to learn more, or add it to Visual Studio Code to get started now.

### Class sorting with Prettier

We maintain an official Prettier plugin for Tailwind CSS that automatically sorts your classes following our recommended class order.

![alt text](image.png)

It works seamlessly with custom Tailwind configurations, and because it’s just a Prettier plugin, it works anywhere Prettier works—including every popular editor and IDE, and of course on the command line.

```HTML
<!-- Before -->
<button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button>
<!-- After -->
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>
```

Check out the plugin on GitHub to learn more and get started.

### JetBrains IDEs

JetBrains IDEs like WebStorm, PhpStorm, and others include support for intelligent Tailwind CSS completions in your HTML.