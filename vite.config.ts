import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, PluginOption } from "vite";

import sparkPlugin from "@github/spark/spark-vite-plugin";
import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin";
import { resolve } from "path";

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  base: "/", // serve assets from site root (correct for your apex custom domain)
  plugins: [
    react(),
    tailwindcss(),
    // DO NOT REMOVE
    createIconImportProxy() as PluginOption,
    sparkPlugin() as PluginOption,
  ],
  resolve: {
    alias: {
      "@": resolve(projectRoot, "src"),
    },
  },
  build: {
    outDir: "docs",     // <<-- write production files directly to docs/
    emptyOutDir: true,  // clear docs/ before build
  },
});
