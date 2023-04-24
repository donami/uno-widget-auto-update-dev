import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      renderLegacyChunks: false,
    }),
  ],
  build: {
    assetsDir: '',
    rollupOptions: {
      input: './index.js',
      output: {
        dir: 'dist',
        inlineDynamicImports: true,
        entryFileNames: 'index.js',
        format: 'es',
      },
    },
  },
});
