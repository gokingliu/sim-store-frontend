import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginChecker from 'vite-plugin-checker';
import vitePluginCompression from 'vite-plugin-compression';
import vitePluginProgress from 'vite-plugin-progress';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'https://120.48.44.102/http',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/http/, ''),
      },
    },
  },
  plugins: [
    react(),
    vitePluginChecker({ typescript: true }),
    vitePluginCompression({ threshold: 1024 * 10 }), // 对大于 10kb 的文件进行压缩
    vitePluginProgress(),
  ],
});
