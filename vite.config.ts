import { defineConfig } from 'vite'

export default defineConfig({
  // For local development, serve as a regular web app
  server: {
    port: 5173
  },
  build: {
    lib: {
      entry: './src/index.tsx',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: [
        'hono',
        'hono/jsx-renderer',
        'hono/jsx/jsx-runtime',
        'hono/cloudflare-workers',
        'nodemailer'
      ]
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})
