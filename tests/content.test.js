import assert from 'node:assert/strict'
import test from 'node:test'
import {
  EXPERIENCES,
  NAV_ITEMS,
  PERSONAL_INFO,
  PROJECTS,
  SITE_URL,
} from '../src/constants/data.js'

test('professional information is current and complete', () => {
  assert.match(PERSONAL_INFO.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  assert.equal(PERSONAL_INFO.email, 'kevinmartinez0114@gmail.com')
  assert.ok(PERSONAL_INFO.linkedin.startsWith('https://'))
  assert.ok(PERSONAL_INFO.github.startsWith('https://'))
  assert.ok(SITE_URL.startsWith('https://'))
  assert.equal(EXPERIENCES[0].company, 'PrevalentWare S.A.S.')
  assert.ok(EXPERIENCES.every(({ dates }) => !/actualmente/i.test(dates)))
})

test('navigation and projects use unique stable identifiers', () => {
  assert.equal(new Set(NAV_ITEMS.map(({ id }) => id)).size, NAV_ITEMS.length)
  assert.equal(new Set(PROJECTS.map(({ id }) => id)).size, PROJECTS.length)
})

test('every project has evidence and secure public links', () => {
  for (const project of PROJECTS) {
    assert.ok(project.description.length > 80)
    assert.ok(project.highlights.length >= 2)
    assert.ok(project.stack.length >= 3)
    assert.ok(project.repository.startsWith('https://'))

    if (project.demo) assert.ok(project.demo.startsWith('https://'))
    if (project.secondaryRepository) {
      assert.ok(project.secondaryRepository.startsWith('https://'))
    }
  }
})
