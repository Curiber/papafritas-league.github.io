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
semanales de cada equipo y cambiar `status` a `'partial'` durante el enfrentamiento o `'final'` únicamente cuando el resultado esté confirmado. `live` se acepta como estado parcial legado; no representa una conexión automática con ESPN. Añade `updatedAt` con la fecha y hora del corte y `updatedAtApproximate:true` si el horario es estimado:

```js
{ id: 'w1-m1', teams: ['hipopotamos', 'pelafustanes'], status: 'partial',
  updatedAt: '2026-10-23T10:21:00-03:00', updatedAtApproximate: true,
  stats: {
    hipopotamos:  { fgp: .4085, ftp: .6857, tpm: 21, reb: 80, ast: 59, stl: 17, blk: 8, to: 33, pts: 179 },
    pelafustanes: { fgp: .4626, ftp: .7941, tpm: 21, reb: 70, ast: 21, stl: 9, blk: 7, to: 31, pts: 211 }
  } }
```

La web calcula sola el ganador de cada categoría (en TO gana el menor), el marcador del
cruce y el ticker. Solo los cruces `final` con las nueve categorías completas modifican la tabla y el récord; un parcial no suma victorias ni derrotas. Los porcentajes se guardan como fracción (0.4085 = 40,85%). Los datos faltantes, negativos o no numéricos no se interpretan como ceros ni adjudican categorías. Las posiciones quedan sin número mientras no haya resultados definitivos.

## Agregar una semana

Cada fecha dura 6 días (`end` = `start` + 5). Añadir un objeto a `schedule` con `week`, `label`, `start`, `end`, `featured` (id del cruce
destacado en portada) y sus `matchups`.

## Power ranking

Nueva edición: agregar un objeto al inicio de `rankings` y, en cada `entries[]`, poner en
`prev` la posición de la edición anterior para que aparezcan las flechas ▲▼.

## Crónicas parciales y actas individuales

`statisticsReports` conserva cada corte histórico con fecha, temporada, actas, fuentes, partidos jugados y totales individuales. Al recibir otro corte, añade un informe nuevo y enlázalo desde una nueva nota con `reportId`; conserva los informes anteriores para que las crónicas archivadas no cambien. Los bloques `['player-report','pilsens']` muestran una tabla desplegable del equipo dentro de la nota. `partial:true` la identifica como crónica parcial y `readingMinutes` informa el tiempo de lectura.

El corte del 23 de octubre de 2026 está respaldado por la captura en `assets/cortes/semana-1-2026-10-23.png` y por las actas públicas de ESPN. El horario es aproximado porque el participante indicó «hace tres minutos». Los 49 jugadores con acta localizada reproducen los totales de la captura; los otros tres mantienen `gp:null` y `stats:null`, sin atribuirles partidos, lesiones ni bajo rendimiento. Los posibles cambios de plantel de la crónica son opinión editorial: no modifican rosters ni registran trades.

Comprobación de resultados parciales y definitivos: `node --test tests/partial-results.test.cjs`. No requiere instalar dependencias.
