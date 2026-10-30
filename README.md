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

Usar el período oficial de ESPN, sin asumir una duración fija: la primera semana va del 20 al 25 de octubre; la segunda, del 26 de octubre al 1 de noviembre. Añadir un objeto a `schedule` con `week`, `label`, `start`, `end`, `featured` (id del cruce
destacado en portada) y sus `matchups`.

## Actualización diaria desde ESPN

El workflow `.github/workflows/espn-results.yml` programa explícitamente las **07:00 con `timezone: America/Santiago`**, más respaldos a las 07:17 y 07:47, en los servidores de GitHub. La zona IANA contempla el horario de verano: no hay que compensar manualmente UTC ni adelantar varias horas para intentar corregir una demora de entrega. `scripts/espn-schedule-gate.cjs` impide consultas antes de las 07:00 de Chile y omite los respaldos cuando ya hubo una consulta y ejecución completas exitosas ese día. Una ejecución manual siempre puede volver a consultar. El resumen de cada run muestra objetivo, hora real de inicio, evento y expresión cron recibida, para distinguir programación de puntualidad.

El historial confirmó que el disparo automático del 28 de octubre llegó a las **13:28 de Chile**, después de una actualización manual correcta a las 09:09. No fue un fallo de ESPN: el evento llegó tarde. [GitHub advierte](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule) que los schedules pueden retrasarse u omitirse bajo carga, especialmente al inicio de hora. Los respaldos reducen la dependencia de un solo disparo; Actions no garantiza puntualidad ni entrega de cada evento. Este flujo no necesita el computador encendido ni Codex abierto. También permite **Actions → Actualizar resultados ESPN → Run workflow**. En repositorios públicos, GitHub puede desactivar los schedules tras 60 días sin actividad.

La opción manual `export_editorial` guarda durante un día un artifact `espn-editorial` con los planteles al corte y los identificadores NBA necesarios para contrastar el calendario de una crónica. No exporta miembros, credenciales, alineaciones ni la respuesta completa de ESPN; no modifica los planteles publicados ni atribuye estadísticas individuales al marcador fantasy.

**Acceso verificado el 27 de octubre de 2026:** la consulta autenticada desde Actions terminó correctamente en la [prueba real](https://github.com/Curiber/papafritas-league.github.io/actions/runs/40519840276). Los marcadores coincidían con el último corte, por lo que no se creó un commit vacío. La publicación se comprobó también en una [ejecución independiente](https://github.com/Curiber/papafritas-league.github.io/actions/runs/40517901032). La liga es privada y devuelve HTTP 401 sin autenticación. Mantener estos dos **Repository secrets** en [Settings → Secrets and variables → Actions](https://github.com/Curiber/papafritas-league.github.io/settings/secrets/actions):

| Secret en GitHub | Valor |
| --- | --- |
| `ESPN_S2` | Valor de la cookie `espn_s2` de una sesión con acceso a la liga |
| `ESPN_SWID` | Valor de la cookie `SWID`, incluidas sus llaves |

En Chrome o Edge, abrir ESPN Fantasy con la sesión iniciada, pulsar F12 y buscar **Application → Storage → Cookies → dominio de ESPN**. Copiar únicamente el valor de cada cookie y pegarlo directamente en su secret de GitHub. Son credenciales de sesión: no pegarlas en el chat, archivos, comandos con valores literales, capturas ni logs. No hace falta guardar la contraseña de ESPN. Si ESPN responde 401 o 403 más adelante, renovar ambos secrets. La consulta usa cookies como la [biblioteca de referencia espn-api](https://github.com/cwendt94/espn-api/wiki); el endpoint de ESPN no tiene contrato público estable y puede cambiar.

El flujo ejecuta pruebas, consulta el acumulado oficial, valida los dos cruces y hace commit/push si cambian cifras o estado. Después solicita un build de Pages mediante su API y comprueba los archivos publicados, incluso si no cambiaron las cifras: así un respaldo puede reparar una publicación anterior fallida sin crear un commit vacío. Esa solicitud explícita es necesaria porque los pushes con `GITHUB_TOKEN` no activan por sí solos otro workflow de publicación. No se necesita un token personal de GitHub adicional. Desmarcar `refresh_results` al ejecutar manualmente permite probar solo las comprobaciones y la publicación del sitio actual, sin consultar ESPN. Los respaldos solo cuentan ejecuciones completas exitosas en las que la etapa de consulta de ESPN se ejecutó correctamente; las comprobaciones por push o las pruebas solo de publicación no consumen el corte diario. Si falla la consulta del historial de Actions, se intenta actualizar en vez de omitir el corte.

La tarea local previa **Actualizar parciales de Papafritas League** quedó desactivada después de la prueba real. La actualización diaria depende únicamente del cron de GitHub Actions y de los secretos de ESPN; puede ejecutarse con el computador apagado. La sesión del navegador de Codex no se transfiere a los servidores de GitHub.

### Fuente e importación

`scripts/fetch-espn-results.cjs` consulta la API de lectura de ESPN con los secrets solo en memoria. Obtiene `cumulativeScore.scoreByStat` y los resultados oficiales por categorías; no utiliza `totalPoints`, estadísticas de jugadores ni banca para reconstruir el marcador. Antes de cambiar de semana comprueba los parciales anteriores, exige un ganador confirmado y conserva todos los finales ya guardados. Un fallo de acceso, esquema o validación conserva los últimos resultados publicados. Solo se guardan cortes de resultados saneados; la respuesta completa, miembros y credenciales no se publican.

`config/espn.json` identifica liga, temporada y equipos. `config/espn-calendar.json` conserva las fechas de los 19 períodos, contrastadas con el selector Matchups de ESPN el 27 de octubre. El mapa `settings.scheduleSettings.matchupPeriods` se usa solo para elegir el identificador de cómputo: en esta liga devuelve `[2]` para la semana 2, no una lista de días. No convertir esos identificadores en fechas ni asumir semanas de siete días: el primer período es abreviado y el 18 abarca dos semanas. Si ESPN cambia el calendario, añade playoffs o comienza otra temporada, volver a contrastar las fechas y actualizar la configuración. Un período desconocido detiene la importación. Las pruebas del adaptador usan respuestas sintéticas con las cifras del corte contrastado; no sustituyen la prueba de autenticación real en Actions.

`config/espn.json` identifica liga, temporada y equipos. Abrir su `scoreboardUrl` con el navegador de la conversación y leer los **totales acumulados del período** seleccionado, sus fechas y el marcador de categorías. Los totales diarios del box score pueden estar vacíos antes de los partidos: no sustituir el acumulado por esos ceros. Usar la precisión disponible en el tooltip de FG% y FT% para evitar empates por redondeo. No reconstruir el cómputo fantasy sumando estadísticas NBA: banca y fechas de adquisición pueden excluir actuaciones.

Guardar la lectura como JSON con el mismo formato que `assets/cortes/espn/20261027T133752Z.json`. `capturedAt` debe ser la hora real de consulta, incluso si la tarea de las 07:00 se ejecutó con retraso. Luego ejecutar:

```powershell
node scripts/update-espn-results.cjs <ruta-del-corte.json>
node --test tests/*.test.cjs
node --check js/data.js
node --check js/app.js
git diff --check
```

El importador comprueba liga, temporada, identidad de los cuatro equipos, fechas, las 36 cifras y ambos marcadores, con TO a la baja. Actualiza exclusivamente el calendario, guarda un corte auditable sin credenciales y renueva la versión de los recursos. Sin cambios de cifras o estado, no escribe archivos ni modifica la hora publicada. Rechaza lecturas anteriores al último corte y correcciones de finales existentes. Las crónicas, planteles, actas y resultados anteriores se conservan.

Durante la semana, usar `status:"partial"`. Al cambiar de período, revisar primero cualquier semana anterior que siga parcial: solo cerrarla con `status:"final"` y `finalConfirmed:true` cuando ESPN confirme el cierre y haya pasado la fecha de término en Chile. Después leer la nueva semana. No inferir un final únicamente por la fecha ni inventar sus totales.

Revisar el diff, hacer commit y push de los archivos de resultados y comprobar que GitHub Pages publique ese commit. Ante un error de acceso o datos incompletos, conservar el último corte visible e informar el problema. Las 07:00 son la hora prevista de consulta, no una promesa de publicación instantánea ni una conexión en tiempo real.

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
