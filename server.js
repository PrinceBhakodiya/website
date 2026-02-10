import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = parseInt(process.env.PORT || '5173', 10)
const PUBLIC_DIR = path.join(__dirname, 'public')

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)
  let pathname = parsedUrl.pathname

  if (pathname === '/') {
    pathname = '/index.html'
  }

  const filePath = path.join(PUBLIC_DIR, pathname)

  try {
    const stat = fs.statSync(filePath)
    const readPath = stat.isDirectory()
      ? (fs.existsSync(path.join(filePath, 'index.html')) ? path.join(filePath, 'index.html') : null)
      : filePath
    if (!readPath) {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('404 Not Found')
      return
    }
    const ext = path.extname(readPath).toLowerCase()
    const contentType = MIME_TYPES[ext] || 'application/octet-stream'
    const content = fs.readFileSync(readPath)
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(content)
  } catch {
    const indexPath = path.join(PUBLIC_DIR, 'index.html')
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath)
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content)
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('404 Not Found')
    }
  }
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log(`Serving from: ${PUBLIC_DIR}`)
})
