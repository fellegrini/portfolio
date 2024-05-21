import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).toString(),
    },
  },
});
