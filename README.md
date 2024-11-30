# Vue 3 + TypeScript + Vite Template

This template provides a starting point for developing Vue 3 applications with TypeScript and Vite. It includes:

- **Vue 3**: The progressive JavaScript framework.
- **Vite**: A fast build tool and development server.
- **TypeScript**: Static type checking for enhanced developer experience.
- **Pinia**: A state management library that serves as an alternative to Vuex.
- **SCSS**: A preprocessor for CSS, offering variables, nesting, and more.

## Recommended IDE Setup

- **Visual Studio Code (VS Code)**: A versatile code editor.
- **Volar**: A VS Code extension that provides enhanced Vue 3 support. It's recommended to disable Vetur to prevent conflicts.
- **TypeScript Vue Plugin (Volar)**: Ensures the TypeScript language service recognizes `.vue` file types.

## Type Support for `.vue` Imports in TypeScript

By default, TypeScript may not infer types for `.vue` imports. To address this, consider enabling Volar's Take Over Mode:

1. **Disable the Built-in TypeScript Extension**:
   - Open the command palette in VS Code and select `Extensions: Show Built-in Extensions`.
   - Locate `TypeScript and JavaScript Language Features`, right-click, and choose `Disable (Workspace)`.
2. **Reload VS Code**:
   - Execute `Developer: Reload Window` from the command palette.

For more details, refer to Volar's [Take Over Mode documentation](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode).

## Project Setup

1. **Install Dependencies**:

   ```bash
   pnpm install
   ```

2. **Compile and Hot-Reload for Development**:

   ```bash
   pnpm dev
   ```

3. **Type-Check, Compile, and Minify for Production**:
   ```bash
   pnpm build
   ```

## Project Structure

The template is organized as follows:

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Module assets (e.g., images, styles)
│   ├── components/      # Vue components
│   ├── stores/          # Pinia stores
│   ├── App.vue          # Root component
│   └── main.ts          # Entry point
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Pinia Documentation](https://pinia.vuejs.org/)

## License

This project is licensed under the [MIT License](LICENSE.md).
