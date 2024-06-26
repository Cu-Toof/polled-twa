import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/polled-twa/',
  build: {
    outDir: 'docs'  // custom build dir
  }
});