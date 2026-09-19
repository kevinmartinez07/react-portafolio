import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { NAV_ITEMS, PERSONAL_INFO } from '../../constants/data.js'
import { useTheme } from '../../hooks/useThemeContext.js'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            KM
          </span>
          <span>{PERSONAL_INFO.shortName}</span>
        </a>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          className={`navigation-panel ${isOpen ? 'is-open' : ''}`}
          id="primary-navigation"
        >
          <ul className="navigation-list">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
            title={isDark ? 'Tema claro' : 'Tema oscuro'}
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
