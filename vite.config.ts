import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name]-[hash].js`,
        chunkFileNames: `assets/js/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).toString(),
    },
  },
});
