import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: './build',
  },
});
