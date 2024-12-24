import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // base: '/frontend-dist/',
  build: {
    outDir: '../backend/public/frontend-dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
});
