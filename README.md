# Fons Bonitatis Foundation — rediseño en Astro

## Cómo correrlo en tu máquina

1. Instala Node.js 18+ si no lo tienes.
2. Abre una terminal en esta carpeta y corre:
   ```
   npm install
   npm run dev
   ```
3. Abre http://localhost:4321 en el navegador.

## Estructura

```
src/
  layouts/BaseLayout.astro    -> estructura HTML base (head, header, footer)
  components/
    Header.astro               -> navegación + botón "Donar ahora"
    Footer.astro                -> pie de página con contacto
    Hero.astro                  -> sección principal de la home
    ImpactStats.astro           -> franja de números de impacto
    StoryCard.astro              -> tarjeta reutilizable de historia
  pages/index.astro             -> ensambla la home
  styles/global.css            -> colores, tipografía, botones
public/images/                 -> reemplaza estas imágenes por fotos reales
```

## Imágenes pendientes por reemplazar

- `public/images/hero-placeholder.jpg` — foto del hero
- `public/images/story-1.jpg`, `story-2.jpg`, `story-3.jpg` — fotos de historias
- `public/images/logo-fbf.svg` — logo real de la fundación (ahora es un placeholder)

## Publicar en cPanel

1. Corre `npm run build` — genera la carpeta `dist/`.
2. Sube el CONTENIDO de `dist/` (no la carpeta en sí) a `public_html` (o a una subcarpeta si el sitio va en un subdominio) usando el Administrador de Archivos o FTP.
3. Listo, es HTML/CSS/JS estático — no necesita Node corriendo en el servidor.
