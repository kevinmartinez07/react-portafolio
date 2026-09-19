import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('index includes essential SEO and social metadata', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8')

  assert.match(html, /<html lang="es">/)
  assert.match(html, /name="description"/)
  assert.match(html, /rel="canonical"/)
  assert.match(html, /property="og:title"/)
  assert.match(html, /name="twitter:card"/)
  assert.match(html, /application\/ld\+json/)
})

test('search engine support files point to the production site', async () => {
  const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8')
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8')

  assert.match(robots, /Sitemap: https:\/\//)
  assert.match(sitemap, /<loc>https:\/\//)
})
