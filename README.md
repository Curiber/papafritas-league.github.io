# Papafritas League

Portal estático sin dependencias. Abre `index.html` en el navegador. CSS, JavaScript y contenido están incluidos; `assets/` contiene los SVG editables. Funciona sin conexión, excepto compartir por WhatsApp.

## Actualizar

Busca `const LEAGUE_DATA` en `index.html`. Centraliza equipos, publicaciones, cruces, reglas, draft y ediciones del ranking.

- **Equipos:** edita `teams`: `id`, `name`, `owner`, `colors`, `logo`, `roster`, `leaders`, `strength` y `challenge`. `positions` define las ubicaciones de la captura inicial; actualízalo si cambia esa estructura.
- **Logos:** coloca PNG, WebP o SVG en `assets/` y asigna `logo:'./assets/shockers.webp'`. Si falta o falla, reaparecen las iniciales. `logo.svg` es horizontal; el texto tiene contorno para conservar contraste sobre fondos claros y oscuros. `favicon.svg` es compacto y tiene fondo propio.
- **Publicaciones:** añade al principio de `posts` un objeto con `id` único, `date:'AAAA-MM-DD'`, `category`, `title`, `excerpt`, `teams` (IDs) y `body`. Ejemplo de cuerpo: `body:[['p','Primer párrafo.'],['h2','Subtítulo'],['p','Otro párrafo.']]`. Usa texto plano. Los bloques `['draft-order','']` y `['team-heading','pilsens']` muestran el orden inicial del draft y un encabezado de equipo con logo. Puedes indicar `source` para documentar la procedencia de una nota y `rulesLink:true` para enlazar el reglamento. Categorías exactas: `Previas`, `Crónicas`, `Power Ranking`, `Trades`. El archivo y la portada ordenan por fecha descendente; en un empate conservan el orden del arreglo.
- **Reglas y tiers:** `rules` contiene fecha y fuente, formato, adquisiciones semanales, nueve categorías, límites y lista completa de jugadores por tier. El directorio admite búsqueda con o sin tildes; las fichas muestran el tier y los cupos usados en el plantel inicial. Los jugadores no incluidos se consideran sin tier según el anexo. Los tiers son propios de esta liga y se mantienen fijos durante la temporada: no los actualices por cambios en rankings externos. `pending` conserva los puntos que aún faltan por confirmar; completa cada uno solo con información de la liga. No se valida automáticamente la restricción por franquicia NBA: no hay un registro confirmado de franquicias por jugador.
- **Draft:** `draft` registra la fecha de la fuente, las trece rondas y el orden inicial de selección. No es una clasificación deportiva.
- **Resultados:** sustituye `result:null` del cruce por un texto confirmado con resultado y categorías decisivas. Usa `label` y `dateLabel` para identificar la jornada. Publica una crónica que registre fecha y fuente. No conviertas los ceros iniciales en un resultado.
- **Ranking:** inserta una nueva edición al principio de `rankings` con `id`, `date`, `title`, `label` y `entries:[{team:'shockers',analysis:'Argumento deportivo.'},…]`. Conserva las ediciones anteriores sin modificarlas. Una nota puede incluir `rankingId` para mostrar los argumentos de esa edición conservada. La vista principal usa la primera edición. Adapta los textos de `rankPage()` sobre primera edición y el enlace a su nota cuando haya nuevas ediciones; no inventes variaciones ni probabilidades.
- **Enlaces:** `#nota/apertura-temporada`, `#equipo/shockers`, `#ranking`, `#noticias`, `#equipos`, `#reglas` y `#nota/analisis-draft-2026` admiten recarga y acceso directo sin configuración de servidor.

- **Identidad:** Mequetrefes es el nombre actual del equipo de Carlos Sanchez, antes Pelafustanes. Conserva el ID interno `pelafustanes` para mantener los enlaces y referencias anteriores. Su logo está en `assets/mequetrefes.png` y tiene fondo exterior transparente.

## Publicar en GitHub Pages

Sube `index.html`, `README.md` y `assets/` al repositorio. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**. Selecciona la rama con los archivos y `/ (root)`, y guarda. Las rutas relativas admiten Pages de usuario y proyecto. Editar localmente no publica: debes subir los cambios.

## Criterio editorial y comprobación

Fuente: los cinco documentos aportados, registro del 20 de octubre de 2026. Prevalecen las correcciones del encargo: inicio ese día; Cristóbal solo como dueño; Patricio creador y comisionado. Las valoraciones son proyecciones cualitativas sin estadísticas actuales ni disponibilidad supuesta. TO favorece menos pérdidas. Solo movimientos confirmados como ejecutados modifican los planteles. La versión del reglamento y el anexo de tiers recibidos del comisionado el 20 de octubre de 2026 confirman cuatro equipos, el formato H2H de nueve categorías, el snake draft, tres adquisiciones semanales por equipo y los límites de tiers. El reglamento principal se corta al comenzar la sección 2; los demás detalles pendientes están identificados en la página de reglas. El artículo del draft recibido ese día fue adaptado al tono editorial y publicado con fecha del 21 de octubre de 2026, conservando la procedencia de sus afirmaciones.

Revisa portada, cuatro fichas, ranking, notas, filtros, reglas y recarga de enlaces directos. Comprueba la búsqueda por nombre o apellido y los estados sin coincidencias del directorio de tiers. Comprueba ancho móvil y navegación por teclado. Copiar enlace utiliza el portapapeles con alternativa local; si ambas fallan, muestra la URL. WhatsApp abre un servicio externo. No existe administración, conexión con ESPN ni seguimiento en vivo. Los metadatos iniciales son generales: las redes pueden mostrar la descripción de portada al compartir un fragmento de artículo.
