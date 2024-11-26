import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: [
        'resources/js/app.js',  // Plik wejściowy Twojej aplikacji Vue
        'resources/css/app.css', // Opcjonalnie, jeśli używasz CSS
      ],
    }),
  ],
});
