'use strict';
/* =====================================================================
   PAPAFRITAS LEAGUE — DATOS DE LA LIGA
   Toda la información editorial y deportiva se actualiza en este archivo.
   ---------------------------------------------------------------------
   CÓMO CARGAR UN RESULTADO
   Cada cruce de `schedule[].matchups[]` tiene `stats`. Mientras sea null,
   el cruce aparece como "programado". Para informar un resultado, llenar
   los totales semanales de cada equipo (la web calcula quién gana cada
   categoría, el marcador y la tabla):

     stats: {
       hipopotamos: { fgp: .478, ftp: .812, tpm: 41, reb: 210, ast: 118, stl: 34, blk: 29, to: 58, pts: 512 },
       pelafustanes: { fgp: .465, ftp: .790, tpm: 48, reb: 198, ast: 131, stl: 30, blk: 18, to: 63, pts: 540 }
     },
     status: 'final'        // 'scheduled' | 'live' | 'final'

   En TO gana quien tiene MENOS. Un cruce se gana por mayoría de categorías
   (criterio provisional hasta que el comisionado confirme empates).
   ===================================================================== */
window.LEAGUE_DATA = {
startDate: '2026-10-20',
commissioner: 'Patricio Uribe',
season: '2026 / 27',

/* Categorías del formato H2H ------------------------------------------ */
categories: [
  { id: 'FG%', key: 'fgp', name: 'Porcentaje de tiros de campo', goal: 'Mayor porcentaje', pct: true },
  { id: 'FT%', key: 'ftp', name: 'Porcentaje de tiros libres',   goal: 'Mayor porcentaje', pct: true },
  { id: '3PM', key: 'tpm', name: 'Triples convertidos',          goal: 'Más triples' },
  { id: 'REB', key: 'reb', name: 'Rebotes',                      goal: 'Más rebotes' },
  { id: 'AST', key: 'ast', name: 'Asistencias',                  goal: 'Más asistencias' },
  { id: 'STL', key: 'stl', name: 'Robos',                        goal: 'Más robos' },
  { id: 'BLK', key: 'blk', name: 'Tapones',                      goal: 'Más tapones' },
  { id: 'TO',  key: 'to',  name: 'Pérdidas de balón',            goal: 'Menos pérdidas', lowerWins: true },
  { id: 'PTS', key: 'pts', name: 'Puntos',                       goal: 'Más puntos' }
],

/* Equipos --------------------------------------------------------------- */
teams: [
  { id: 'shockers', name: 'Penalolen Shockers', short: 'SHK', city: 'Peñalolén', owner: 'Patricio Uribe', ownerNote: 'Creador y comisionado',
    initials: 'PS', colors: ['#b4ff3a', '#0a0b0d'], logo: '',
    leaders: ['Shai Gilgeous-Alexander', 'Jayson Tatum', 'Karl-Anthony Towns'],
    roster: ['Shai Gilgeous-Alexander', 'Scottie Barnes', 'Jayson Tatum', 'Jaren Jackson Jr.', 'Karl-Anthony Towns', 'Amen Thompson', 'Kon Knueppel', 'Dyson Daniels', 'Cameron Boozer', 'Daniel Gafford', 'Herbert Jones', 'Jalen Suggs', 'Tari Eason'],
    strength: 'Gilgeous-Alexander, Tatum y Towns ofrecen distintas vías para construir PTS, FT% y 3PM. Barnes y Amen Thompson amplían las opciones de creación y rebote; Daniels, Jones y Jackson Jr. dan argumentos para disputar STL y BLK.',
    challenge: 'Perseguir REB y BLK con los interiores puede cambiar el perfil de FT%. AST y TO deben leerse juntos: acumular creación no garantiza eficiencia. FG% dependerá de cómo se reparta el volumen de tiro.' },
  { id: 'pilsens', name: 'Cromwell Pilsens', short: 'CRP', city: 'Cromwell, Nueva Zelanda', owner: 'Diego Alvarez, “el Rubio”', ownerNote: '',
    initials: 'CP', colors: ['#f5a623', '#20304e'], logo: './assets/cromwell-pilsens.webp',
    leaders: ['Nikola Jokić', 'Anthony Edwards', 'Jalen Brunson'],
    roster: ['Jalen Brunson', 'Dylan Harper', 'Jaylen Brown', 'Keldon Johnson', 'Nikola Jokić', 'Anthony Edwards', 'Paolo Banchero', 'AJ Dybantsa', 'Caleb Wilson', 'Sandro Mamukelashvili', 'Jalen Johnson', 'Jaylen Wells', 'Dillon Brooks'],
    strength: 'Jokić ofrece un eje para proyectar REB y AST sin depender exclusivamente de los bases. Brunson, Edwards y Brown aportan alternativas en PTS y 3PM. Banchero y Jalen Johnson suman creación desde el frente de ataque.',
    challenge: 'La construcción parece más cómoda en ataque que en BLK. Debe comprobar su respuesta en STL y vigilar TO al reunir varios generadores. FG% y FT% dependerán del volumen y las alineaciones.' },
  { id: 'hipopotamos', name: 'Los Hipopotamos Chuchetumare', short: 'LHC', city: 'Santiago', owner: 'Cristóbal Uribe', ownerNote: '',
    initials: 'LHC', colors: ['#d1261f', '#9a958a'], logo: './assets/los-hipopotamos-chuchetumare.webp',
    leaders: ['Victor Wembanyama', 'Cade Cunningham', 'Derrick White'],
    roster: ['Cade Cunningham', 'Derrick White', 'Deni Avdija', 'Naz Reid', 'Victor Wembanyama', 'VJ Edgecombe', 'Jaden McDaniels', 'Josh Giddey', 'Cason Wallace', 'Bennett Stirtz', 'Onyeka Okongwu', 'Toumani Camara', 'P.J. Washington'],
    strength: 'Wembanyama es el eje del planteamiento en BLK y REB. Cunningham y Giddey permiten proyectar una disputa en AST. White, McDaniels y Wallace ofrecen alternativas para orientar las alineaciones hacia la defensa y STL.',
    challenge: 'La carga de creación exige controlar TO. El aporte de 3PM y PTS más allá de sus figuras será una pregunta central. FG% y FT% requerirán seguimiento por volumen de intentos.' },
  { id: 'pelafustanes', name: 'Mequetrefes', short: 'MQT', city: 'Santiago', owner: 'Carlos Sanchez, “el Chino”', ownerNote: '',
    initials: 'MQ', colors: ['#ff2a2a', '#3a0d0d'], logo: './assets/mequetrefes.webp',
    leaders: ['Luka Dončić', 'Donovan Mitchell', 'Giannis Antetokounmpo'],
    roster: ['Luka Dončić', 'Donovan Mitchell', 'Brandon Miller', 'Giannis Antetokounmpo', 'Alperen Sengun', 'Payton Pritchard', 'OG Anunoby', 'Alex Sarr', 'Matas Buzelis', 'Bobby Portis', 'Malik Monk', "Royce O'Neale", 'Klay Thompson'],
    strength: 'Dončić y Mitchell permiten construir una propuesta en PTS, AST y 3PM. Antetokounmpo y Sengun dan peso al juego interior y REB. Anunoby y Sarr aportan alternativas para buscar STL y BLK.',
    challenge: 'La convivencia de varios jugadores con el balón obliga a vigilar TO. La apuesta interior puede tensionar FT%, mientras sumar especialistas en triples puede modificar FG%. Elegir qué categorías priorizar será determinante.' }
],

/* Calendario y resultados -----------------------------------------------
   Cada fecha dura 6 días: `end` = `start` + 5 (p. ej. 20 al 25 de octubre). */
schedule: [
  { week: 1, label: 'Semana 1', start: '2026-10-20', end: '2026-10-25', featured: 'w1-m1',
    matchups: [
      { id: 'w1-m1', teams: ['hipopotamos', 'pelafustanes'], status: 'scheduled', stats: null },
      { id: 'w1-m2', teams: ['pilsens', 'shockers'],         status: 'scheduled', stats: null }
    ] }
],

/* Power ranking ---------------------------------------------------------- */
rankings: [
  { id: 'pretemporada-2026', date: '2026-10-20', title: 'Power ranking de pretemporada', label: 'EDICIÓN 01', provisional: true,
    entries: [
      { team: 'shockers', prev: null, analysis: 'El primer lugar provisional reconoce la variedad de recursos del plantel: creación, tiro y defensores para disputar categorías distintas. Gilgeous-Alexander, Tatum y Towns forman un núcleo complementado por Daniels y Jackson Jr. El desafío será convertir esa amplitud en un plan semanal coherente.' },
      { team: 'pilsens', prev: null, analysis: 'La segunda posición premia un ataque articulado alrededor de Jokić, con Brunson y Edwards como apoyos. REB, AST y PTS ofrecen una base de discusión; queda por demostrar que el equilibrio en STL y BLK acompaña a la producción ofensiva.' },
      { team: 'hipopotamos', prev: null, analysis: 'El tercer puesto reconoce una identidad clara alrededor de Wembanyama y Cunningham. La proyección en BLK y AST resulta atractiva; el aporte de PTS y 3PM del resto del plantel deberá sostener esa apuesta sin descuidar TO.' },
      { team: 'pelafustanes', prev: null, analysis: 'El cuarto puesto evalúa el equilibrio entre categorías, no la calidad de sus estrellas. Dončić, Mitchell y Antetokounmpo dan potencial ofensivo; la tensión entre FT%, volumen de creación y TO exige una estrategia especialmente precisa.' }
    ] }
],

/* Reglamento ---------------------------------------------------------------- */
rules: {
  date: '2026-10-20',
  source: 'Reglamento y anexo de tiers remitidos por Patricio Uribe el 20 de octubre de 2026.',
  format: 'Head-to-Head (H2H)',
  teamCount: 4,
  weeklyAcquisitions: 3,
  draftFormat: 'Snake Draft',
  tiers: [
    { id: 'S', title: 'La mesa de los grandes', limit: 2,
      players: ['Tyrese Maxey', 'Jayson Tatum', 'Giannis Antetokounmpo', 'Luka Dončić', 'Nikola Jokić', 'Cade Cunningham', 'Victor Wembanyama', 'Shai Gilgeous-Alexander', 'Anthony Edwards'] },
    { id: 'A+', title: 'Estrellas con precio premium', limit: 2,
      players: ['Joel Embiid', 'Alperen Şengün', 'Donovan Mitchell', 'Scottie Barnes', 'LeBron James', 'Josh Giddey', 'Evan Mobley', 'James Harden', 'Jalen Johnson', 'Lauri Markkanen', 'Domantas Sabonis', 'Jalen Brunson', 'Karl-Anthony Towns', 'Austin Reaves', 'Cooper Flagg', 'Jamal Murray', 'Tyrese Haliburton', 'Kawhi Leonard', 'Kevin Durant', 'Devin Booker', 'Chet Holmgren', 'LaMelo Ball', 'Deni Avdija', 'Stephen Curry', 'Anthony Davis', 'Trae Young'] },
    { id: 'A', title: 'Titulares de alto valor', limit: 2,
      players: ['Jaylen Brown', 'Tyler Herro', 'Jarrett Allen', 'Derrick White', 'Darius Garland', 'Brandon Ingram', 'Nickeil Alexander-Walker', 'Bam Adebayo', 'Brandon Miller', 'Keyonte George', 'Jaren Jackson Jr.', 'OG Anunoby', 'Walker Kessler', 'Paolo Banchero', 'Franz Wagner', 'Desmond Bane', 'Kyrie Irving', 'Michael Porter Jr.', 'Julius Randle', 'Pascal Siakam', 'Zion Williamson', 'Trey Murphy III', 'Dejounte Murray', 'Jalen Duren', 'Amen Thompson', 'De’Aaron Fox', 'Stephon Castle', 'Onyeka Okongwu', 'Jalen Williams', 'Rudy Gobert', 'Ja Morant', 'Damian Lillard', 'Jimmy Butler'] },
    { id: 'B', title: 'Profundidad, potencial y apuestas estratégicas', limit: 3,
      players: ['Anfernee Simons', 'VJ Edgecombe', 'Kyle Kuzma', 'Myles Turner', 'Kevin Porter Jr.', 'Ryan Rollins', 'Jaime Jaquez Jr.', 'Kel’el Ware', 'Brayden Burries', 'Caleb Wilson', 'Norman Powell', 'Matas Buzelis', 'Nic Claxton', 'Paul George', 'Payton Pritchard', 'Keaton Wagler', 'Cameron Boozer', 'Ty Jerome', 'Jerami Grant', 'Cedric Coward', 'Zach Edey', 'CJ McCollum', 'Andrew Wiggins', 'Dyson Daniels', 'Kingston Flemings', 'Kon Knueppel', 'Coby White', 'Naz Reid', 'Grayson Allen', 'Darryn Peterson', 'Zach LaVine', 'Keegan Murray', 'Darius Acuff Jr.', 'Ben Simmons', 'Mikal Bridges', 'Josh Hart', 'Collin Sexton', 'Nikola Vučević', 'Anthony Black', 'Morez Johnson Jr.', 'Day’Ron Sharpe', 'Mikel Brown Jr.', 'Aaron Gordon', 'Ivica Zubac', 'Andrew Nembhard', 'Jordan Poole', 'Bennedict Mathurin', 'John Collins', 'Ausar Thompson', 'RJ Barrett', 'Immanuel Quickley', 'Jabari Smith Jr.', 'Reed Sheppard', 'Devin Vassell', 'Dylan Harper', 'Miles Bridges', 'Jalen Green', 'Ajay Mitchell', 'Isaiah Hartenstein', 'Aday Mara', 'Ayo Dosunmu', 'Jaden McDaniels', 'Scoot Henderson', 'Donovan Clingan', 'Brandin Podziemski', 'Yaxel Lendeborg', 'Alex Sarr', 'Kyshawn George', 'AJ Dybantsa'] }
  ],
  pending: [
    'Criterio exacto para registrar victorias y empates en la tabla general.',
    'Desempates, formato y calendario de playoffs.',
    'Configuración de alineaciones, IR y límites de plantilla más allá de los planteles iniciales documentados.',
    'Horarios de corte y mecánica de waivers: prioridad, presupuesto y plazos.',
    'Procedimiento de trades: aprobación, revisión, plazos y posibles vetos.',
    'Sanciones y atribuciones específicas del comisionado.'
  ]
},

/* Draft ------------------------------------------------------------------- */
draft: {
  date: '2026-10-20',
  rounds: 13,
  order: ['pilsens', 'hipopotamos', 'pelafustanes', 'shockers'],
  source: 'Artículo del draft enviado por Patricio Uribe el 20 de octubre de 2026.'
},

/* Publicaciones ------------------------------------------------------------- */
posts: [
  { id: 'analisis-draft-2026', date: '2026-10-21', category: 'Previas',
    title: 'El draft está cerrado. Ahora empieza la estrategia.',
    excerpt: 'Cuatro proyectos, trece rondas y un mercado condicionado por los tiers. Las selecciones de Edwards y Knueppel explican por qué administrar los cupos también fue parte del juego.',
    teams: ['pilsens', 'hipopotamos', 'pelafustanes', 'shockers'], rulesLink: true,
    source: 'Adaptación editorial del artículo del draft remitido por Patricio Uribe el 20 de octubre de 2026, contrastado con el anexo de tiers y las fichas iniciales. Orden de selección y rondas citadas según ese relato. El análisis es una proyección cualitativa: no incorpora estadísticas actuales ni presupone disponibilidad.',
    body: [
      ['p', 'El draft de Papafritas League dejó cuatro planteles de trece jugadores y una primera conclusión: el talento disponible no bastaba para decidir cada selección. En una competencia de nueve categorías, los límites de tiers y la restricción por franquicia NBA obligaron a pensar tanto en el jugador elegido como en las opciones que dejaban de estar disponibles.'],
      ['h2', 'El orden y el costo de cada decisión'],
      ['draft-order', ''],
      ['p', 'El orden inicial fue Cromwell Pilsens, Los Hipopotamos Chuchetumare, Mequetrefes y Penalolen Shockers. El formato snake invirtió la secuencia en cada ronda: los equipos de los extremos tuvieron selecciones consecutivas en los cambios de ronda; los dos del medio debieron administrar la espera entre turnos.'],
      ['p', 'Cada plantilla podía reunir como máximo dos jugadores S, dos A+, dos A y tres B. Además, solo un jugador con tier por franquicia NBA; los jugadores sin tier estaban exentos de esa restricción. Elegir un nombre implicaba consumir un cupo y, en ciertos casos, cerrar una vía para la siguiente selección. El orden dentro de cada tier no establece una jerarquía individual.'],
      ['team-heading', 'pilsens'],
      ['p', 'Diego Alvarez construyó un ataque alrededor de Nikola Jokić, acompañado por Jalen Brunson, Jaylen Brown y Paolo Banchero. La lectura editorial apunta a una base para disputar REB, AST y PTS con distintas fuentes de creación. Jalen Johnson agrega una alternativa versátil; el examen estará en convertir esa variedad en una ventaja semanal sin ceder eficiencia ni TO.'],
      ['p', 'El relato del draft sitúa a Anthony Edwards en la ronda 10 y explica que los otros equipos ya habían completado sus dos cupos S. Eso ayuda a entender su disponibilidad: la restricción redujo el número de rivales que podían elegirlo. La selección permite discutir valor y costo de oportunidad, aunque su ubicación tardía no garantiza un resultado deportivo.'],
      ['p', 'Dylan Harper, AJ Dybantsa y Caleb Wilson completan los tres cupos B del plantel. Sus aportes tendrán que medirse por producción y función en las alineaciones. El potencial sirve para elegir; las categorías son las que terminarán evaluando la apuesta.'],
      ['team-heading', 'hipopotamos'],
      ['p', 'Cristóbal Uribe eligió una estructura con Victor Wembanyama como referencia interior y Cade Cunningham como creador. El planteamiento permite proyectar una disputa en BLK, REB y AST. Josh Giddey y Deni Avdija amplían las vías para producir desde distintos puestos, mientras Derrick White y Onyeka Okongwu ocupan los dos cupos A.'],
      ['p', 'La construcción propone algo más que anotación: complementar el núcleo con asistencias, rebotes y defensa. White, Jaden McDaniels y Cason Wallace ofrecen perfiles para buscar aportes secundarios. La pregunta será cuánto de esa variedad se transforma en una producción sostenida.'],
      ['p', 'FG%, FT% y TO también forman parte del examen. Acumular creadores puede ampliar las asistencias y elevar las pérdidas; incorporar interiores puede cambiar el balance de los porcentajes. El tamaño del nombre del equipo no concede una categoría adicional.'],
      ['team-heading', 'pelafustanes'],
      ['p', 'Carlos Sanchez reúne a Luka Dončić y Giannis Antetokounmpo en los cupos S, con Donovan Mitchell y Alperen Sengun en A+. Es un núcleo que permite proyectar volumen en PTS, AST y REB, además de opciones de tiro exterior. Brandon Miller y OG Anunoby ocupan los cupos A y suman alternativas para complementar esa producción.'],
      ['p', 'El desafío está en el encaje: perseguir puntos y asistencias no resuelve por sí solo los porcentajes, las pérdidas ni la producción defensiva. En FT% importará quién asuma los intentos; en TO, el costo de concentrar varias fuentes de creación. Menos pérdidas sigue siendo el objetivo de esa categoría.'],
      ['p', 'Payton Pritchard, Matas Buzelis y Alex Sarr completan el Tier B. Bobby Portis, Malik Monk, Royce O’Neale y Klay Thompson quedan sin tier según el anexo recibido. La tarea será elegir qué fortalezas reforzar y qué debilidades compensar, antes de que la lista de nombres se convierta en una excusa demasiado cómoda.'],
      ['team-heading', 'shockers'],
      ['p', 'Patricio Uribe, creador y comisionado de la liga, parte con Shai Gilgeous-Alexander y Jayson Tatum como jugadores S. Scottie Barnes y Karl-Anthony Towns ocupan A+; Amen Thompson y Jaren Jackson Jr., A. La combinación reúne alternativas ofensivas y recursos para disputar categorías defensivas.'],
      ['p', 'La ronda 13 de Kon Knueppel es el otro caso que destaca el artículo original. Según ese relato, los demás equipos ya habían completado sus tres cupos B. Su disponibilidad tuvo una explicación reglamentaria, además de cualquier lectura individual. Una selección tardía puede abrir una oportunidad; el retorno dependerá de lo que produzca.'],
      ['p', 'Dyson Daniels y Cameron Boozer completan ese tier. El resto del plantel permite distintas combinaciones para buscar robos, tapones y apoyo ofensivo. La variedad explica su primer puesto en nuestro ranking provisional de pretemporada, una opinión editorial que todavía debe contrastarse con enfrentamientos reales. El cargo de comisionado organiza la liga; la alineación tendrá que hacer el resto.'],
      ['h2', 'Las nueve categorías ponen el criterio'],
      ['p', 'FG% y FT% exigen considerar aciertos e intentos. 3PM, REB, AST, STL, BLK y PTS premian contribuciones diferentes. TO invierte la lógica: gana quien pierde menos balones. El análisis del draft debe mirar cómo conviven esas nueve dimensiones, en lugar de reducir el valor de una plantilla a su anotación o a la fama de sus figuras.'],
      ['p', 'Los tiers permanecen fijos durante la temporada, según el anexo. Con un máximo de tres adquisiciones semanales por equipo, incluyendo agencia libre y waivers, cada ajuste tendrá que respetar tanto los cupos como la restricción por franquicia. La gestión continúa después de la última ronda.'],
      ['p', 'El draft establece el punto de partida. Todavía no hay resultados confirmados que permitan convertir estas proyecciones en conclusiones. Las primeras jornadas mostrarán quién construyó una identidad sostenible y quién necesita corregirla. Las explicaciones pueden esperar; los cupos conviene revisarlos desde ahora.']
    ] },
  { id: 'apertura-temporada', date: '2026-10-20', category: 'Previas',
    title: 'Se abre la cancha. Empieza la historia.',
    excerpt: 'Wembanyama frente al arsenal de Mequetrefes. Jokić ante el equipo del comisionado. La apertura se decide mucho más allá de los puntos.',
    teams: ['hipopotamos', 'pelafustanes', 'pilsens', 'shockers'],
    body: [
      ['p', 'Papafritas League comienza el 20 de octubre de 2026 con dos cruces que enfrentan formas distintas de construir un equipo. Los cuatro planteles documentados tienen figuras de primer orden, pero esta competencia exige algo más que reunir nombres: hay que encontrar ventajas en nueve categorías. Todavía no hay resultados informados.'],
      ['h2', 'Hipopotamos–Mequetrefes: defensa contra creación'],
      ['p', 'Cristóbal Uribe presenta a Victor Wembanyama y Cade Cunningham como pilares. La proyección de Los Hipopotamos Chuchetumare pasa por disputar BLK y REB desde el interior, sostener AST con Cunningham y Josh Giddey, y encontrar aportes complementarios en Derrick White y sus aleros. Es una identidad reconocible; falta verla competir.'],
      ['p', 'Carlos Sanchez responde con Luka Dončić, Donovan Mitchell y Giannis Antetokounmpo. Mequetrefes tiene argumentos para buscar PTS, AST y 3PM, además del juego interior de Alperen Sengun. La cuestión no es si hay talento, sino cómo se distribuye su impacto: FT% y TO merecen tanta atención como una noche de muchos puntos. Al Chino le sobran nombres para que las bromas del grupo duren menos que el calentamiento.'],
      ['h2', 'Pilsens–Shockers: un examen de equilibrio'],
      ['p', 'Diego Alvarez dirige desde Nueva Zelanda un Cromwell Pilsens organizado alrededor de Nikola Jokić. Jalen Brunson, Anthony Edwards y Jaylen Brown permiten imaginar un ataque con varias fuentes de producción. REB y AST son territorios de interés; BLK y STL plantean el examen del equilibrio. Vivir en el futuro ayuda con el calendario, pero todavía no entrega resultados.'],
      ['p', 'Penalolen Shockers, de Patricio Uribe, enfrenta esa propuesta con Shai Gilgeous-Alexander, Jayson Tatum y Karl-Anthony Towns. Jaren Jackson Jr., Dyson Daniels y Herbert Jones amplían las opciones defensivas. El creador y comisionado parte primero en nuestra evaluación editorial provisional: la variedad del plantel explica la elección, aunque organizar la competencia no suma una sola categoría.'],
      ['h2', 'Las nueve categorías, sin atajos'],
      ['p', 'FG% y FT% son porcentajes: importa el volumen de intentos detrás de cada acierto. 3PM, REB, AST, STL, BLK y PTS obligan a valorar contribuciones distintas. En TO gana quien registra menos pérdidas. Una alineación que agrega creación puede mejorar AST y, a la vez, complicar TO; un refuerzo interior puede modificar REB, BLK y los porcentajes. La lectura debe ser conjunta.'],
      ['p', 'Estas son proyecciones cualitativas basadas en los planteles entregados, no estadísticas de la temporada ni garantías de disponibilidad. Las reglas específicas de playoffs, desempates y waivers siguen pendientes de confirmación. La historia deportiva empieza ahora; los antecedentes entre amigos aportan contexto, no victorias.']
    ] },
  { id: 'ranking-pretemporada', date: '2026-10-20', category: 'Power Ranking',
    title: 'El equilibrio toma la primera posición.',
    excerpt: 'Shockers encabeza una evaluación provisional que mira las nueve categorías. El talento individual abre la discusión; la construcción del plantel la ordena.',
    teams: ['shockers', 'pilsens', 'hipopotamos', 'pelafustanes'], rankingId: 'pretemporada-2026',
    body: [
      ['p', 'Esta es una opinión editorial entre los cuatro equipos documentados. No representa una clasificación oficial, una simulación ni probabilidades de campeonato. Es la primera edición: no existen variaciones respecto de una entrega anterior.']
    ] }
]
};
