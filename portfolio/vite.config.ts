import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // Cannot find module 'path' or its corresponding type declarations.ts(2307)
import { fileURLToPath } from 'url'; //Cannot find module 'url' or its corresponding type declarations.ts(2307)

const __filename = fileURLToPath(import.meta.url); //Property 'url' does not exist on type 'ImportMeta'.ts(2339)
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: "/Portfolio/",
});
