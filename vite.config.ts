import { defineConfig } from 'vite'

export default defineConfig({
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
