// Gera dist/sitemap.xml a partir das páginas estáticas produzidas pelo build.
// Roda depois do `astro build` (ver script "build" no package.json), então
// sempre reflete as rotas reais — inclusive projetos e notas novas — sem
// depender de plugin.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')
const baseURL = (process.env.SITE_URL || 'https://victorhugo.info').replace(
  /\/+$/,
  ''
)

function collectRoutes(dir, routes = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectRoutes(full, routes)
    } else if (entry.name === 'index.html') {
      const rel = path.relative(distDir, dir).split(path.sep).join('/')
      const route = rel === '' ? '/' : `/${rel}/`
      routes.push({ route, mtime: fs.statSync(full).mtime })
    }
  }
  return routes
}

if (!fs.existsSync(distDir)) {
  console.error('generate-sitemap: dist/ não encontrado (rode o build antes)')
  process.exit(0)
}

const routes = collectRoutes(distDir).sort((a, b) =>
  a.route.localeCompare(b.route)
)

const urls = routes
  .map(
    ({ route, mtime }) =>
      `  <url>\n    <loc>${baseURL}${route}</loc>\n    <lastmod>${mtime
        .toISOString()
        .slice(0, 10)}</lastmod>\n  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml)
console.log(`generate-sitemap: ${routes.length} rotas → sitemap.xml`)
