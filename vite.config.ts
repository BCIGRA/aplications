import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
// import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aplications', // Base URL untuk GitHub Pages
  plugins: [
    react(), // Plugin untuk React
    tsconfigPaths(), // Memungkinkan penggunaan compilerOptions.paths dari tsconfig.json
    // basicSsl(), // Aktifkan untuk HTTPS di dev server, jika diperlukan
  ],
  publicDir: './public', // Direktori publik untuk aset statis
  build: {
    outDir: 'build', // Ubah folder output menjadi 'build'
  },
  server: {
    host: true, // Membuka server pengembangan untuk perangkat di jaringan yang sama
  },
});
