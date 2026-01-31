import '../../styles/Navbar.css'
import { useHamburguer } from '../../hooks/useHamburguer.js'
import { Sun, SunMoon, Menu, X } from 'lucide-react'
import { NAV_ITEMS, PERSONAL_INFO } from '../../constants/data.js'
import { scrollToSection } from '../../utils/scrollTo.js'

const Navbar = ({ toggleTheme, isDark }) => {
  const { isMobile, isOpen, toggleMenu } = useHamburguer()

  const handleNavClick = (id) => {
    scrollToSection(id)
    if (isOpen) toggleMenu()
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <button
        className="logo"
        onClick={() => scrollToSection('home')}
        aria-label="Go to home"
      >
        {PERSONAL_INFO.shortName}
      </button>
      
      <div className="menu-cont">
        <ul className="menu" role="menubar">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id} role="none">
              <button
                className="menu-btn"
                onClick={() => handleNavClick(id)}
                role="menuitem"
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {isMobile && (
          <button 
            className="hamburguer-toggle" 
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={20} strokeWidth={1.25} />
            ) : (
              <Menu size={20} strokeWidth={1.25} />
            )}
          </button>
        )}

        {isOpen && (
          <ul className={`hamburguer ${isOpen ? 'open' : 'close'}`} role="menu">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id} role="none">
                <button
                  className="menu-btn"
                  onClick={() => handleNavClick(id)}
                  role="menuitem"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="theme">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? (
              <Sun size={20} strokeWidth={1.25} />
            ) : (
              <SunMoon size={20} strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
