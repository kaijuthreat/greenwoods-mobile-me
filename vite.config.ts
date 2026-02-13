import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, PluginOption } from "vite";

import sparkPlugin from "@github/spark/spark-vite-plugin";
import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin";
import { resolve } from "path";

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  // For GitHub Pages repo site use: base: '/greenwoods-mobile-me/'
  // If you're using a custom apex domain (greenwoodmobilemechanic.com) keep base: '/' or use base: './' for relative assets.
  base: "/",
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
    outDir: "docs",     // write production files directly to docs/ so GitHub Pages can serve them
    emptyOutDir: true,  // clear docs/ before build (backup any manual files if necessary)
  },
});