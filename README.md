# 💼 Portfolio - Kevin Martinez

Portafolio profesional de **Kevin Santiago Martinez Molina**, Desarrollador Full Stack especializado en React, Next.js, .NET, Spring Boot y soluciones geográficas corporativas.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](http://localhost:5174/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite)](https://vitejs.dev/)

## 🚀 Características

- ⚡ **React 19** con Vite para desarrollo ultrarrápido
- 🎨 **Sistema de diseño** con componentes reutilizables
- 🌓 **Tema claro/oscuro** con persistencia en localStorage
- 📱 **100% Responsive** - Mobile-first approach
- ♿ **Accesible** - ARIA labels y navegación por teclado
- 🎭 **Animaciones fluidas** con CSS moderno
- 🚀 **Lazy Loading** para optimización de performance
- 📦 **Context API** para gestión de estado global
- 🎯 **SEO Optimizado** con semántica HTML5

## 🛠️ Tecnologías

- **React 19** - Framework principal
- **Vite 6.3** - Build tool y dev server
- **Lucide React** - Iconografía moderna
- **CSS Modules** - Estilos con scope local
- **Context API** - Gestión de estado
- **Custom Hooks** - Lógica reutilizable

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/kevinmartinez07/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Imágenes e iconos
├── components/
│   ├── common/          # Componentes reutilizables (Button, Card, Section)
│   ├── Navbar/
│   ├── ContactForm/
│   ├── ProjectElement/
│   ├── SkillsElement/
│   └── ExperienceElement/
├── pages/               # Páginas principales
│   ├── Home/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   └── Contact/
├── context/             # Context providers (Theme)
├── hooks/               # Custom hooks
├── constants/           # Datos centralizados
├── utils/               # Funciones auxiliares
└── styles/              # Estilos globales
```

## 🎨 Sistema de Diseño

### Componentes Reutilizables

#### Button
```jsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Texto
</Button>
```
**Variantes:** `primary`, `outline`, `ghost`  
**Tamaños:** `small`, `medium`, `large`

#### Card
```jsx
<Card hover={true} padding="medium">
  Contenido
</Card>
```

#### Section
```jsx
<Section id="about" title="Sobre Mí" subtitle="Conoce más">
  Contenido
</Section>
```

### Variables CSS

Sistema completo de tokens de diseño:
- **Colores:** Paletas para tema claro/oscuro
- **Espaciado:** Sistema de 8px (xs, sm, md, lg, xl, 2xl, 3xl)
- **Border Radius:** 4 niveles de redondeo
- **Transiciones:** 3 velocidades (fast, base, slow)
- **Sombras:** 4 niveles de elevación

## 🎯 Personalización Rápida

### 1. Actualizar Información Personal
Edita `src/constants/data.js`:
```javascript
export const PERSONAL_INFO = {
  name: 'Tu Nombre Completo',
  shortName: 'Tu Nombre',
  title: 'Tu Título Profesional',
  linkedin: 'tu-linkedin-url',
  github: 'tu-github-url',
  cvPath: '/Documents/tu-cv.pdf'
}
```

### 2. Cambiar Colores de Marca
Edita `src/App.css` (líneas 17-22):
```css
--primary-color: #3b82f6;     /* Tu color principal */
--primary-hover: #2563eb;     /* Versión hover */
--accent-color: #8b5cf6;      /* Color de acento */
```

### 3. Agregar Nueva Sección
1. Crea componente en `src/pages/TuSeccion/`
2. Importa en `App.jsx` con lazy loading
3. Agrega entrada en `NAV_ITEMS` en `constants/data.js`

## 📱 Responsive Breakpoints

- **Mobile:** < 500px
- **Tablet:** 501px - 900px
- **Desktop:** 901px - 1919px
- **Large Desktop:** 1920px - 2249px
- **Extra Large:** ≥ 2250px

## ♿ Accesibilidad

- ✅ ARIA labels en todos los elementos interactivos
- ✅ Navegación por teclado completa
- ✅ Estados de focus visibles
- ✅ Contraste WCAG AA
- ✅ Semántica HTML5

## 🚀 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter ESLint
```

## 🔧 Arquitectura

### Context API
```jsx
// Uso del tema
import { useTheme } from './hooks/useThemeContext'

const { theme, isDark, toggleTheme } = useTheme()
```

### Custom Hooks
- `useTheme` - Gestión de tema
- `useHamburguer` - Menú responsive
- `useProjectElement` - Gestión de proyectos
- `useSkillElement` - Gestión de habilidades

### Utilidades
```javascript
import { scrollToSection, openInNewTab } from './utils/scrollTo'

scrollToSection('about')
openInNewTab('https://ejemplo.com')
```

## 📊 Performance

- ⚡ Lazy loading de páginas
- 🎯 Code splitting automático
- 📦 Build optimizado con Vite
- 🖼️ Imágenes en formato WebP

## 🎓 Buenas Prácticas Implementadas

1. ✅ **Context API** para estado global
2. ✅ **Lazy Loading** de componentes
3. ✅ **Custom Hooks** para lógica reutilizable
4. ✅ **Constantes centralizadas** en lugar de hardcoded
5. ✅ **CSS Variables** para theming consistente
6. ✅ **Componentes pequeños y enfocados** (SRP)
7. ✅ **Naming conventions** claras
8. ✅ **Animaciones CSS** para performance
9. ✅ **Mobile-first** approach
10. ✅ **Accesibilidad** como prioridad

## 🚀 Deploy

Este proyecto puede ser desplegado en:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- Cualquier hosting estático

```bash
npm run build
# La carpeta dist/ contiene el sitio listo
```

## 📧 Contacto

- **LinkedIn:** [Kevin Santiago Martinez Molina](http://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166)
- **GitHub:** [kevinmartinez07](https://github.com/kevinmartinez07)
- **Email:** Disponible en el portafolio

## 📄 Licencia

Este proyecto es personal y de código abierto. Siéntete libre de usarlo como plantilla, pero recuerda personalizar la información con tus propios datos, proyectos y redes sociales.

## 🙏 Créditos

Desarrollado con 💙 por Kevin Martinez para demostrar habilidades en desarrollo frontend.
