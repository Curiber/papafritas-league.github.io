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

El récord acumula categorías ganadas, perdidas y empatadas (H2H Each Category), conforme a las capturas definitivas de ESPN. PJ cuenta cruces semanales; G/P/E cuenta categorías. La forma y el balance de cruces se conservan por separado. La tabla se ordena por porcentaje de categorías: `(ganadas + empatadas / 2) / categorías disputadas`. Las posiciones iguales se comparten; el power ranking editorial nunca desempata la clasificación. El procedimiento oficial de desempate sigue pendiente de confirmar. Si la captura no incluye hora, usa `updatedDate:'2026-10-26'` en lugar de inventar una marca horaria.

## Agregar una semana

Cada fecha dura 6 días (`end` = `start` + 5). Añadir un objeto a `schedule` con `week`, `label`, `start`, `end`, `featured` (id del cruce
destacado en portada) y sus `matchups`.

## Power ranking

Nueva edición: agregar un objeto al inicio de `rankings` y, en cada `entries[]`, poner en
`prev` la posición de la edición anterior para que aparezcan las flechas ▲▼.

## Crónicas parciales y actas individuales

`statisticsReports` conserva cada corte histórico con fecha, temporada, actas, fuentes, partidos jugados y totales individuales. Al recibir otro corte, añade un informe nuevo y enlázalo desde una nueva nota con `reportId`; conserva los informes anteriores para que las crónicas archivadas no cambien. Los bloques `['player-report','pilsens']` muestran una tabla desplegable del equipo dentro de la nota. `partial:true` la identifica como crónica parcial y `readingMinutes` informa el tiempo de lectura.

El corte del 23 de octubre de 2026 está respaldado por la captura en `assets/cortes/semana-1-2026-10-23.png` y por las actas públicas de ESPN. El horario es aproximado porque el participante indicó «hace tres minutos». Los 49 jugadores con acta localizada reproducen los totales de la captura; los otros tres mantienen `gp:null` y `stats:null`, sin atribuirles partidos, lesiones ni bajo rendimiento. Los posibles cambios de plantel de la crónica son opinión editorial: no modifican rosters ni registran trades.

El cierre del 25 de octubre añade el informe `semana-1-final-2026-10-25`, confirmado el 26, con cuatro capturas en `assets/cortes/semana-1-final-*.png`. Sus 50 jugadores visibles reconstruyen las 36 cifras de los cuatro equipos. `nbaGp` y `nbaGames` identifican partidos NBA; `gp` y `games` identifican las actas cuya suma coincide con el cómputo fantasy de la captura. Portis, Klay Thompson y Gafford jugaron tres partidos NBA, pero sus totales fantasy coinciden con dos; no se presupone el motivo de esa diferencia. Los dos jugadores ausentes de las capturas conservan cifras nulas y sus plazas en el roster. El informe incluye además una `watchlist` con datos NBA de siete candidatos, sin alterar ningún plantel.

Las notas del cierre y del mercado usan el mismo informe. Los bloques `['sources',[0,1]]` enlazan elementos de `sources` junto al análisis correspondiente. La nota de mercado distingue candidatos, encaje y movimientos confirmados, comprueba cupos y franquicias, y excluye del análisis los tres jugadores indicados por el participante. Los informes y publicaciones del corte anterior se conservan.

Comprobación de resultados parciales y definitivos: `node --test tests/partial-results.test.cjs`. No requiere instalar dependencias.

## Portadas de noticias

Las notas de cruces conservan los escudos de los equipos. Las noticias de mercado, draft y power ranking tienen ilustraciones propias en `assets/editorial/`, relacionadas con el tema concreto de cada artículo. Su campo `image` define `src`, `small`, dimensiones, texto alternativo y pie de imagen. La misma portada aparece en la tarjeta y al abrir el artículo; las tarjetas cargan las imágenes de forma diferida y el navegador elige entre dos tamaños WebP.

Para una nueva noticia que no trate de un cruce, preparar una portada acorde con sus protagonistas o tema y añadir su campo `image`. No usar los escudos como imagen de mercado, draft, reglas o análisis generales. Las ilustraciones se identifican en su pie y no se presentan como fotografías de un hecho real.

Los prompts completos están en `assets/editorial/prompts.json`. Las ilustraciones se crearon con la herramienta integrada de generación de imágenes; los WebP son versiones optimizadas de esos originales.

## Movimientos confirmados y planteles históricos

`transactionReports` conserva cada captura de actividad, las parejas de alta/baja, los importes de las pujas y las actas NBA utilizadas para el análisis. El registro del 26 de octubre tiene diez altas por waivers por un total de $104; la captura fuente está en `assets/movimientos/waivers-2026-10-26.png`. Se guarda la hora tal como aparece en ESPN, sin atribuirle una zona horaria no indicada.

Cada alta reemplaza a su baja asociada en el plantel actual. `rosterSnapshots` conserva la composición, los líderes y la radiografía editorial por fecha. `teamAt(id,date)` permite que los cruces cerrados y el power ranking de pretemporada mantengan los perfiles de su momento. Al incorporar un nuevo registro, conservar los snapshots anteriores y añadir el del plantel resultante; no reescribir actas ni resultados de semanas cerradas.

Las fichas actuales muestran los trece jugadores sin atribuirles puestos de alineación, titulares, banca o estado de IR que la captura de movimientos no confirma. La nueva nota utiliza `transactionReportId` y bloques `transaction-highlights` / `transaction-table` para presentar los destacados editoriales y la lista completa de incorporaciones. Las estadísticas anteriores a la adquisición sirven de contexto y no se añaden retroactivamente a los marcadores fantasy.
