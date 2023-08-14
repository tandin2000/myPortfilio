import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Update this line
    port: 443,
    https: {
      key: path.resolve('/home/ubuntu/.cert/tandin.me.key'),
      cert: path.resolve('/home/ubuntu/.cert/tandin.me.cer'),
      
    },    // Enable HTTPS
  },
});
