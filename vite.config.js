import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Update this line
    port: 3000,
    https: true,    // Enable HTTPS
  },
});
