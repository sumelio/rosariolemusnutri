# CV Web — Rosario Lemus Barrera

Sitio web estático bilingüe (Español / Inglés) tipo CV/portafolio para Rosario Lemus Barrera, Nutricionista Dietista. Basado en el sitio original de Wix ([rosariolemusnutric.wixsite.com/rosariolemusnutri](https://rosariolemusnutric.wixsite.com/rosariolemusnutri)) y en su perfil de LinkedIn (`Profile.pdf`).

No usa frameworks ni build tools: **HTML + CSS + JavaScript puro**. Se puede publicar en cualquier hosting estático.

---

## 1. Estructura del proyecto

```
improve_cv/
├── index.html        # Estructura de la página (una sola página, secciones ancladas)
├── styles.css        # Todos los estilos (paleta, layout, responsive)
├── script.js         # Traducciones, datos del CV, render dinámico, formulario
├── Profile.pdf       # Perfil de LinkedIn (fuente del contenido)
├── README.md         # Este documento
└── assets/           # Imágenes (descargadas del sitio Wix original)
    ├── logo.png             # Logo "Rosario Lemus Nutrición Holística" (navbar + favicon)
    ├── portrait.png         # Foto profesional con bata blanca (hero)
    ├── photo-headset.jpeg   # Foto en consulta virtual (sección "Sobre mí")
    ├── photo-selfie.jpeg    # Foto con headset (sección "Contacto")
    ├── food-banner.png      # Banda de alimentos saludables (entre secciones)
    ├── illus-holistic.png   # Ilustración nutrición holística (sección "Sobre mí")
    ├── illus-session.png    # Ilustración de sesión virtual (sin usar actualmente)
    ├── illus-avatar.png     # Retrato ilustrado (sin usar actualmente)
    ├── diploma.png          # Diploma UNAL (sección "Educación")
    └── wes-badge.png        # Insignia WES (sección "Certificaciones")
```

## 2. Cómo ejecutar en local

No requiere instalación. Opciones:

```bash
# Opción A: servidor de Python (recomendado)
cd improve_cv
python3 -m http.server 8765
# Abrir http://127.0.0.1:8765

# Opción B: abrir index.html directamente en el navegador
# (funciona, pero localStorage y fetch se comportan mejor con servidor)
```

## 3. Arquitectura de la página

El menú de navegación replica el del sitio Wix con 4 entradas: **Home** (`#top`), **Conoce a Rosario Nutri** (`#conoce`), **Servicios** (`#servicios`) y **Contacto** (`#contact`).

`index.html` es una única página con estas secciones (en orden):

| Sección | ID / clase | En el menú | Contenido |
|---|---|---|---|
| Navbar | `.navbar` | — | Logo, links de navegación, switch de idioma EN/ES, menú móvil |
| Hero | `#top .hero` | Home | Nombre, título profesional, CTAs, badges, foto principal |
| Stats | `.stats` | — | 4 cifras destacadas (años, roles, títulos, idiomas) |
| Conoce a Rosario Nutri | `#conoce` | Conoce a Rosario Nutri | Bio (2 párrafos + lema), foto, ilustración, 3 tarjetas + bloque `.story` (historia personal, claves `story.*`) |
| Banda de comida | `.food-band` | — | Imagen decorativa a ancho completo |
| Experiencia | `#experience` | — | Timeline generado por JS desde `experience[]` |
| Educación | `#education` | — | Grid de tarjetas generado por JS desde `education[]` + diploma |
| Habilidades / Certificaciones | `#skills` | — | Chips y lista generados por JS + insignia WES |
| Servicios | `#servicios` | Servicios | 3 tarjetas generadas por JS desde `services[]` |
| Contacto | `#contact` | Contacto | Foto, links directos, redes sociales y formulario |
| Footer | `.footer` | — | Copyright (año automático) |

El bloque `.story` reproduce el contenido de la página Wix "Conoce a Rosario Nutri" (historia personal, lema y trayectoria de Colombia a Canadá) y la sección Servicios reproduce la página Wix "Servicios".

**Regla general:** los textos fijos viven en `translations` (script.js) y se inyectan vía atributos `data-i18n`; los contenidos repetitivos (experiencia, educación, skills, certificaciones) viven en arrays de datos y se renderizan con JS. **El HTML casi no contiene texto.**

## 4. Sistema de idiomas (i18n)

### Cómo funciona

1. Cada elemento traducible en el HTML lleva `data-i18n="clave"`:
   ```html
   <h2 data-i18n="about.heading"></h2>
   ```
2. En `script.js`, el objeto `translations` tiene las claves para `en` y `es`:
   ```js
   const translations = {
     en: { "about.heading": "Nutrition with science..." },
     es: { "about.heading": "Nutrición con ciencia..." },
   };
   ```
3. `setLang('en' | 'es')` re-renderiza todo y guarda la preferencia en `localStorage` (clave `lang`). Al cargar, se usa el idioma guardado o el del navegador.

### Modificar un texto fijo

Buscar la clave en `translations` (script.js) y editar el valor **en ambos idiomas** (`en` y `es`).

### Añadir un texto fijo nuevo

1. Añadir el elemento en `index.html` con `data-i18n="mi.clave"`.
2. Añadir `"mi.clave": "..."` dentro de `en: {...}` **y** `es: {...}` en script.js.

### Añadir un tercer idioma

1. Añadir el bloque completo (todas las claves) en `translations`, p. ej. `fr: {...}`.
2. Añadir versiones del nuevo idioma en los campos `{ en, es }` de `experience`, `education`, `skills` y `certs` (ver §5).
3. Añadir un botón en el navbar (index.html, junto a `#btn-en` / `#btn-es`):
   ```html
   <button id="btn-fr" class="lang-btn" onclick="setLang('fr')">FR</button>
   ```
4. En `setLang()`, añadir el toggle de la clase `active` para el nuevo botón.

## 5. Contenido del CV (datos en script.js)

### Experiencia — array `experience`

Cada entrada genera un ítem del timeline. Formato:

```js
{
  org: "Nombre de la empresa",
  role:   { en: "Job title",        es: "Cargo" },
  period: { en: "Jun 2024 – May 2026", es: "Jun 2024 – May 2026" },
  loc:    { en: "Remote",           es: "Remoto" },
  bullets: {
    en: ["Achievement 1.", "Achievement 2."],
    es: ["Logro 1.", "Logro 2."],
  },
},
```

- **Añadir un trabajo nuevo:** insertar el objeto **al inicio** del array (el orden del array = orden visual, de más reciente a más antiguo).
- **Eliminar:** borrar el objeto completo (cuidado con las comas).

### Educación — array `education`

```js
{
  icon: "🎓",                        // emoji mostrado en la tarjeta
  title: { en: "...", es: "..." },
  inst:  { en: "...", es: "..." },
  period: "2024 – 2025",             // string simple, "" si no aplica
  tag:   { en: "Degree", es: "Título" },  // etiqueta pequeña (Curso, Taller, etc.)
},
```

### Servicios — array `services`

Cada entrada genera una tarjeta en la sección `#servicios` (contenido tomado de la página "Servicios" del sitio Wix):

```js
{
  icon: "🥗",                          // emoji de la tarjeta
  featured: false,                     // true = tarjeta destacada (fondo verde claro)
  title: { en: "...", es: "..." },
  meta:  { en: "60 min · Online", es: "60 min · Online" },  // duración/modalidad
  bullets: {
    en: ["What's included 1", ...],
    es: ["Qué incluye 1", ...],
  },
},
```

El botón de cada tarjeta ("Agenda ahora" / "Book now", clave `services.cta`) enlaza a `#contact`. Los textos fijos de la sección usan las claves `services.*` en `translations`.

### Habilidades y certificaciones — `skills` y `certs`

Son objetos con dos listas paralelas:

```js
const skills = {
  en: ["Clinical Nutrition", ...],
  es: ["Nutrición Clínica", ...],
};
```

**Importante:** mantener el mismo número y orden de elementos en `en` y `es`.

### Estadísticas del hero (sección verde)

Los números están fijos en `index.html` (`.stat-num`: 8+, 10, 3, 2) y las etiquetas en `translations` (`stats.*`). Si se añade experiencia, actualizar los números a mano.

## 6. Estilos (styles.css)

### Paleta de colores (extraída del sitio Wix original)

Definida en variables CSS en `:root` (styles.css, inicio del archivo):

| Variable | Valor | Uso |
|---|---|---|
| `--green-700` | `#3F7753` | Color de marca principal (botones, links, acentos) |
| `--green-900` | `#24462f` | Verde oscuro (títulos, stats, footer) |
| `--green-600` | `#4c8a63` | Verde intermedio (hover, subtítulos) |
| `--green-100` | `#EAF5EC` | Verde claro (fondos suaves, chips) |
| `--green-50`  | `#f4faf5` | Fondo de secciones alternas e inputs |
| `--cream`     | `#FFFFFE` | Fondo general |
| `--ink` / `--muted` | `#20303c` / `#5f6360` | Texto principal / secundario |

Cambiar un color aquí lo actualiza en todo el sitio.

### Tipografías (Google Fonts, cargadas en index.html)

- **League Spartan** → títulos (`--font-head`)
- **Montserrat** → cuerpo (`--font-body`)

Para cambiarlas: editar el `<link>` de Google Fonts en `index.html` y las variables `--font-head` / `--font-body`.

### Responsive

Un solo breakpoint: `@media (max-width: 820px)` al final de styles.css. Ahí se colapsan los grids a una columna, se muestra el menú hamburguesa (`.menu-toggle`) y se reordena el hero.

### Animaciones

Los elementos con clase `.reveal` aparecen con fade-in al hacer scroll (IntersectionObserver en `observeReveals()`, script.js). Respeta `prefers-reduced-motion`.

## 7. Imágenes

- Todas viven en `assets/` con nombres descriptivos.
- Para **reemplazar una imagen**, sobrescribir el archivo manteniendo el nombre, o cambiar el `src` en index.html.
- La banda de comida es un `background-image` en CSS (`.food-band`), no un `<img>`.
- El logo también es el **favicon** (`<link rel="icon">` en index.html).
- Imágenes disponibles pero sin usar: `illus-session.png`, `illus-avatar.png`.

## 8. Formulario de contacto

Réplica del formulario del sitio Wix (Nombre, Apellido, Email, Celular, Pregunta o sugerencia, Enviar), en `index.html` (`#contact-form`) con lógica en `script.js` (bloque "Contact form (mailto)").

### Comportamiento actual (sin backend)

1. Valida nombre, email (regex) y mensaje. Los campos inválidos reciben la clase `.invalid` (borde rojo) y se muestra un mensaje de error traducido.
2. Si es válido, construye un enlace `mailto:` con asunto y cuerpo pre-armados y abre la app de correo del visitante.

### Cambiar el email de destino

Editar la constante en script.js:

```js
const CONTACT_EMAIL = "rosariolemusnutricionista@gmail.com";
```

(El email también aparece "en duro" en la tarjeta de contacto de index.html — actualizar ambos.)

### Migrar a envío real (Formspree, sin backend propio)

1. Crear un formulario en [formspree.io](https://formspree.io) y copiar el endpoint.
2. En `index.html`: `<form id="contact-form" action="https://formspree.io/f/XXXX" method="POST">`.
3. En `script.js`, reemplazar la construcción del `mailto:` por un `fetch(form.action, { method: "POST", body: new FormData(form) })` y mostrar `form.success` al resolver.

### Redes sociales

Los enlaces (Instagram, Facebook, LinkedIn, TikTok) están en la `.social-bar` de index.html con iconos SVG inline. Para añadir una red: duplicar un `<a>` y reemplazar `href`, `aria-label` y el `<path>` del SVG.

## 9. Enlaces y datos de contacto usados

| Dato | Valor | Dónde está |
|---|---|---|
| Email | rosariolemusnutricionista@gmail.com | index.html (tarjeta + form) y script.js |
| LinkedIn | linkedin.com/in/rosario-lemus-8621b5119 | index.html (social bar) |
| Instagram | @nutricionista.rosario.lemus | index.html (social bar) |
| TikTok | @rosariolemusnutri | index.html (social bar) |
| Facebook | profile.php?id=61577722395706 | index.html (social bar) |
| Sitio personal | rosariolemusnutri.my.canva.site | index.html (tarjeta) |

## 10. Publicación

Cualquier hosting estático sirve. Ejemplos:

- **GitHub Pages:** subir el repo → Settings → Pages → deploy desde la rama `main` (raíz).
- **Netlify / Vercel:** arrastrar la carpeta o conectar el repo; sin comando de build, directorio de publicación = raíz.

Requisitos: ninguno (no hay build). Solo asegurarse de subir `index.html`, `styles.css`, `script.js` y la carpeta `assets/` completa.

## 11. Tareas frecuentes (recetario)

| Quiero... | Dónde tocar |
|---|---|
| Corregir un texto | `translations` en script.js (en **ambos** idiomas) |
| Añadir/editar un trabajo | Array `experience` en script.js |
| Añadir un curso/título | Array `education` en script.js |
| Añadir/editar un servicio | Array `services` en script.js |
| Editar la historia personal | Claves `story.*` en `translations` (script.js) |
| Añadir una habilidad | `skills.en` y `skills.es` en script.js |
| Cambiar la foto principal | Reemplazar `assets/portrait.png` |
| Cambiar colores | Variables `:root` en styles.css |
| Cambiar email del formulario | `CONTACT_EMAIL` en script.js + tarjeta en index.html |
| Añadir sección nueva | HTML en index.html + claves `data-i18n` + traducciones + (opcional) estilos |
| Cambiar el orden de secciones | Mover los bloques `<section>` en index.html (los anclajes `#id` siguen funcionando) |
