import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitest/config";

import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite";

const hashMe = Math.floor(Math.random() * 90000) + 10000;
const timestamp = new Date().getTime();

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    reporters: ["default", "html"],
    outputFile: "tests/coverage/html/coverage.html",
    coverage: {
      all: false,
      provider: "v8",
      reportsDirectory: "./tests/coverage",
      exclude: [
        "**types/**",
        "*.cjs",
        "**/*.d.ts",
        "**/*.test.ts",
        "**/*.spec.ts",
        "src/App.vue",
        "src/main.ts",
      ],
      reporter: [
        "html",
        ["lcov", { projectRoot: "./src" }],
        ["json", { file: "coverage.json" }],
      ],
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables"],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },
    }),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
    }),
    tailwindcss(),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: () => {
          return `[name]-` + timestamp + "-" + hashMe + `.js`;
        },
        chunkFileNames: `[name]-` + timestamp + "-" + hashMe + `.js`,
        assetFileNames: `[name]-` + timestamp + "-" + hashMe + `.[ext]`,
        // manualChunks: {
        //   lodash: ['lodash'],
        //   axios: ['axios'],
        //   'vue-router': ['vue-router'],
        //   pinia: ['pinia'],
        //   mitt: ['mitt'],
        // },
      },
    },
  },
  server: {
    port: 3060,
    host: "0.0.0.0",
  },
});
