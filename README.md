# Papafritas League

Sitio de la liga de fantasy basketball (H2H, 9 categorías, 4 equipos). Publicado con GitHub Pages:
https://curiber.github.io/papafritas-league.github.io/

## Estructura

```
index.html        Estructura de la página (header, ticker, main, footer)
css/styles.css    Diseño "broadcast" oscuro
js/data.js        TODO el contenido: equipos, calendario, resultados, ranking, reglas, notas
js/app.js         Router por hash y renderizado de vistas
assets/           Escudos (WebP), logo, favicon, imagen OG y fuentes (Barlow, licencia OFL)
```

No hay build ni dependencias: se edita `js/data.js` y se hace push.

## Cómo cargar un resultado

En `js/data.js`, dentro de `schedule[].matchups[]`, completar `stats` con los totales
semanales de cada equipo y cambiar `status` a `'final'` (o `'live'` mientras se juega):

```js
{ id: 'w1-m1', teams: ['hipopotamos', 'pelafustanes'], status: 'final',
  stats: {
    hipopotamos:  { fgp: .478, ftp: .812, tpm: 41, reb: 210, ast: 118, stl: 34, blk: 29, to: 58, pts: 512 },
    pelafustanes: { fgp: .465, ftp: .790, tpm: 48, reb: 198, ast: 131, stl: 30, blk: 18, to: 63, pts: 540 }
  } }
```

La web calcula sola el ganador de cada categoría (en TO gana el menor), el marcador del
cruce, la tabla de posiciones, el récord de cada equipo y el ticker.

## Agregar una semana

Añadir un objeto a `schedule` con `week`, `label`, `start`, `end`, `featured` (id del cruce
destacado en portada) y sus `matchups`.

## Power ranking

Nueva edición: agregar un objeto al inicio de `rankings` y, en cada `entries[]`, poner en
`prev` la posición de la edición anterior para que aparezcan las flechas ▲▼.
