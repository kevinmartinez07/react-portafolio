# Portafolio profesional - Kevin Martinez

Portafolio de **Kevin Santiago Martinez Molina**, Full-Stack Engineer con experiencia en React, Angular, Next.js, .NET, Java, Node.js, PostgreSQL, AWS y Azure.

[Ver portafolio](https://react-portafolio-beige.vercel.app/) · [LinkedIn](https://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166) · [GitHub](https://github.com/kevinmartinez07)

## Objetivo

Presentar experiencia profesional y proyectos mediante casos breves que expliquen contexto, contribuciones y decisiones técnicas. El sitio prioriza legibilidad, navegación accesible, rendimiento y mantenimiento sencillo.

## Características

- Diseño responsive con temas claro y oscuro.
- Experiencia profesional organizada cronológicamente.
- Proyectos con contexto, evidencias, tecnologías y enlaces verificados.
- Datos profesionales centralizados en `src/constants/data.js`.
- HTML semántico, navegación por teclado y soporte para movimiento reducido.
- Metadatos SEO, Open Graph, Twitter Cards y JSON-LD.
- `robots.txt`, sitemap y headers de seguridad para Vercel.
- Pruebas automáticas de contenido y SEO con `node:test`.
- Pipeline de calidad con GitHub Actions.

## Tecnologías

- React 19
- Vite
- Lucide React
- CSS moderno sin framework de estilos
- ESLint
- Node Test Runner

## Desarrollo local

Requisitos: Node.js 22 y npm.

```bash
git clone https://github.com/kevinmartinez07/react-portafolio.git
cd react-portafolio
npm ci
npm run dev
```

## Validación

```bash
npm run check
```

El comando ejecuta, en orden:

1. ESLint.
2. Pruebas automatizadas.
3. Build de producción.

Comandos individuales:

```bash
npm run lint
npm run test
npm run build
npm run preview
```

## Estructura principal

```text
src/
├── components/
│   ├── ContactForm/
│   └── Navbar/
├── constants/
│   └── data.js
├── context/
├── hooks/
├── pages/
│   ├── About/
│   ├── Contact/
│   ├── Experience/
│   ├── Home/
│   ├── Projects/
│   └── Skills/
├── App.css
├── App.jsx
└── main.jsx
```

## Actualizar el contenido

La experiencia, proyectos, enlaces y habilidades se mantienen en:

```text
src/constants/data.js
```

Antes de publicar cambios se recomienda ejecutar `npm run check` y comprobar que los enlaces externos continúen disponibles.

## Despliegue

El proyecto está configurado para Vercel mediante `vercel.json` y utiliza npm como único gestor de dependencias.

```bash
npm ci
npm run build
```

La salida de producción se genera en `dist/`.

## Regenerar el CV

El PDF publicado se puede reconstruir de forma reproducible:

```bash
python3 -m pip install -r scripts/requirements-cv.txt
python3 scripts/generate_cv.py
```

El archivo resultante reemplaza `public/Documents/CV_Kevin_Martinez.pdf`.

## Licencia

Distribuido bajo la licencia MIT. Consulta [LICENSE](LICENSE).
