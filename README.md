<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Weightloss Professional Nutrition - Website Clone

Este proyecto es una recreación en alta fidelidad y código limpio de la interfaz de Weightloss Professional Nutrition.
Ha sido desarrollado utilizando **Vite** sin frameworks (Vanilla HTML/CSS/JS) para asegurar un rendimiento óptimo, código ligero, y una estética moderna (Premium, Glassmorphism, Micro-animaciones).

## Características principales
- Recreación estricta de secciones: Hero, Services, About, Store (Products), Contact y Footer.
- Integración de imágenes originales provistas en el dominio web.
- Arquitectura CSS Vanilla utilizando variables CSS para manejo sencillo de temas y estilos consistentes.
- Animaciones fluidas al hacer scroll (Scroll Reveal).
- Diseño completamente adaptable a móviles, tablets y desktops (Responsive Design).
- Rendimiento optimizado (100% libre del peso de plugins de WordPress o builders como Elementor).

## Requisitos Previos
- [Node.js](https://nodejs.org/) instalado en el sistema (idealmente la versión LTS).

## Instrucciones de Instalación y Ejecución Local

1. **Abre tu terminal** en el directorio raíz de este proyecto (`c:\xampp\htdocs\Wess\clone`).
2. **Instala las dependencias** ejecutando el siguiente comando:
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo** con:
   ```bash
   npm run dev
   ```
4. **Visualiza el proyecto**: Vite mostrará una URL (por defecto suele ser `http://localhost:5173/`). Haz clic en ella o cópiala en tu navegador.

## Instrucciones para Producción

Si deseas optimizar el código para subirlo a tu servidor final (Host, cPanel, etc.):

1. Ejecuta el comando de construcción:
   ```bash
   npm run build
   ```
2. Vite generará una carpeta `dist/` en la raíz de tu proyecto.
3. Copia el contenido de la carpeta `dist/` y súbelo a tu servidor. Estos archivos ya se encuentran minificados y optimizados.

## Estructura del Código

- `index.html`: Contiene toda la estructura semántica de la interfaz y las secciones.
- `src/style.css`: Estilos definidos y documentados por secciones con variables root principales arriba.
- `src/main.js`: Lógica ligera para el menú de navegación móvil y las animaciones de carga al hacer scroll (IntersectionObserver).
>>>>>>> 5459292 (Cambios ligeros)
