import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { PERSONAL_INFO } from './constants/data.js'

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </p>
        <a href="#home">Volver al inicio</a>
      </footer>
    </div>
  )
}

export default App
