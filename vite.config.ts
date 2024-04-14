import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ProxyOptions } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: '0.0.0.0',
    port: 3000,
    // open: true, // open in browser on server start
    proxy: {
      // proxy configuration
      '/coinAPI': {
        target: 'https://pro-api.coinmarketcap.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/coinAPI/, ''),
		secure :false
      },
	  
	  cors:false
    }
  }
//   ,
//   resolve: {
//     alias: {
//       // resolve aliases
//       '@': '/path/to/your/src'
//     }
//   }
});
