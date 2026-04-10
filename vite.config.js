import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        formations: resolve(__dirname, 'formations.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        legal: resolve(__dirname, 'legal.html'),
        cgu: resolve(__dirname, 'cgu.html'),
        cgv: resolve(__dirname, 'cgv.html'),
        f1: resolve(__dirname, 'formation-1.html'),
        f2: resolve(__dirname, 'formation-2.html'),
        f3: resolve(__dirname, 'formation-3.html'),
        f4: resolve(__dirname, 'formation-4.html'),
        f5: resolve(__dirname, 'formation-5.html'),
        f6: resolve(__dirname, 'formation-6.html'),
        f7: resolve(__dirname, 'formation-7.html'),
        f8: resolve(__dirname, 'formation-8.html'),
        f9: resolve(__dirname, 'formation-9.html'),
        f10: resolve(__dirname, 'formation-10.html'),
        f11: resolve(__dirname, 'formation-11.html'),
        f12: resolve(__dirname, 'formation-12.html'),
      }
    }
  }
});
