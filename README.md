# Papafritas League

Portal estático sin dependencias. Abre `index.html` en el navegador. CSS, JavaScript y contenido están incluidos; `assets/` contiene los SVG editables. Funciona sin conexión, excepto compartir por WhatsApp.

## Actualizar

Busca `const LEAGUE_DATA` en `index.html`. Centraliza equipos, publicaciones, cruces y ediciones del ranking.

- **Equipos:** edita `teams`: `id`, `name`, `owner`, `colors`, `logo`, `roster`, `leaders`, `strength` y `challenge`. `positions` define las ubicaciones de la captura inicial; actualízalo si cambia esa estructura.
- **Logos:** coloca PNG, WebP o SVG en `assets/` y asigna `logo:'./assets/shockers.webp'`. Si falta o falla, reaparecen las iniciales. `logo.svg` es horizontal; el texto tiene contorno para conservar contraste sobre fondos claros y oscuros. `favicon.svg` es compacto y tiene fondo propio.
- **Publicaciones:** añade al principio de `posts` un objeto con `id` único, `date:'AAAA-MM-DD'`, `category`, `title`, `excerpt`, `teams` (IDs) y `body`. Ejemplo de cuerpo: `body:[['p','Primer párrafo.'],['h2','Subtítulo'],['p','Otro párrafo.']]`. Usa texto plano. Categorías exactas: `Previas`, `Crónicas`, `Power Ranking`, `Trades`. El archivo y la portada ordenan por fecha descendente; en un empate conservan el orden del arreglo.
- **Resultados:** sustituye `result:null` del cruce por un texto confirmado con resultado y categorías decisivas. Usa `label` y `dateLabel` para identificar la jornada. Publica una crónica que registre fecha y fuente. No conviertas los ceros iniciales en un resultado.
- **Ranking:** inserta una nueva edición al principio de `rankings` con `id`, `date`, `title`, `label` y `entries:[{team:'shockers',analysis:'Argumento deportivo.'},…]`. Conserva las ediciones anteriores sin modificarlas. Una nota puede incluir `rankingId` para mostrar los argumentos de esa edición conservada. La vista principal usa la primera edición. Adapta los textos de `rankPage()` sobre primera edición y el enlace a su nota cuando haya nuevas ediciones; no inventes variaciones ni probabilidades.
- **Enlaces:** `#nota/apertura-temporada`, `#equipo/shockers`, `#ranking`, `#noticias` y `#equipos` admiten recarga y acceso directo sin configuración de servidor.

- **Identidad:** Mequetrefes es el nombre actual del equipo de Carlos Sanchez, antes Pelafustanes. Conserva el ID interno `pelafustanes` para mantener los enlaces y referencias anteriores. Su logo está en `assets/mequetrefes.png` y tiene fondo exterior transparente.

## Publicar en GitHub Pages

Sube `index.html`, `README.md` y `assets/` al repositorio. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**. Selecciona la rama con los archivos y `/ (root)`, y guarda. Las rutas relativas admiten Pages de usuario y proyecto. Editar localmente no publica: debes subir los cambios.

## Criterio editorial y comprobación

Fuente: los cinco documentos aportados, registro del 20 de octubre de 2026. Prevalecen las correcciones del encargo: inicio ese día; Cristóbal solo como dueño; Patricio creador y comisionado. Las valoraciones son proyecciones cualitativas sin estadísticas actuales ni disponibilidad supuesta. TO favorece menos pérdidas. Solo movimientos confirmados como ejecutados modifican los planteles.

Revisa portada, cuatro fichas, ranking, notas, filtros y recarga de enlaces directos. Comprueba ancho móvil y navegación por teclado. Copiar enlace utiliza el portapapeles con alternativa local; si ambas fallan, muestra la URL. WhatsApp abre un servicio externo. No existe administración, conexión con ESPN ni seguimiento en vivo. Los metadatos iniciales son generales: las redes pueden mostrar la descripción de portada al compartir un fragmento de artículo.
