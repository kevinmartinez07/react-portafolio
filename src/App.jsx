import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { useTheme } from './hooks/useThemeContext.js'
import { Code } from 'lucide-react'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home/Home.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Skills = lazy(() => import('./pages/Skills/Skills.jsx'))
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))

// Loading component
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    fontSize: '1.5rem',
    color: 'var(--text-muted)'
  }}>
    Cargando...
  </div>
)

function App() {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Suspense fallback={<PageLoader />}>
          <section id="home">
            <Home isDark={isDark} />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects isDark={isDark} />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
      <footer>
        <p>Coded by Kevin</p>
        <Code size={20} strokeWidth={3} className="footer-icon" />
      </footer>
    </div>
  )
}

export default App
