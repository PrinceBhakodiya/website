import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    devServer({
      adapter,
      entry: 'src/index.tsx'
    })
  ],
  build: {
    ssr: 'src/index.tsx',
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
})
