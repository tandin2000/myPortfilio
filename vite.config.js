import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Update this line
    port: 3000,
    https: {
      key: path.resolve('C:/Users/TandinW/Downloads/tandin.key'),      // Replace 'your-key.pem' with your actual private key filename
      cert: path.resolve('C:/Users/TandinW/Downloads/tandin.crt'),    // Replace 'your-cert.pem' with your actual certificate filename
      // ca: path.resolve('C:/Users/TandinW/Downloads/your-ca.pem'),        // Replace 'your-ca.pem' with your actual certificate authority filename (optional)
      // ciphers: 'TLS_AES_128_GCM_SHA256', // Optionally, specify a specific cipher suite
    },    // Enable HTTPS
  },
});
