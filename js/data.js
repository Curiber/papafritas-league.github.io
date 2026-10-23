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
     status: 'final'        // 'scheduled' | 'partial' | 'final' (live se admite como parcial legado)

   En TO gana quien tiene MENOS. Un cruce se gana por mayoría de categorías
   (criterio provisional hasta que el comisionado confirme empates).
   ===================================================================== */
window.LEAGUE_DATA = {
startDate: '2026-10-20',
commissioner: 'Patricio Uribe',
season: '2026 / 27',

/* Cortes históricos: conservar los informes anteriores sin modificarlos. */
statisticsReports: [
  {
    "id": "semana-1-corte-2026-10-23",
    "sourceImage": "./assets/cortes/semana-1-2026-10-23.png",
    "season": "2026-27",
    "from": "2026-10-20",
    "through": "2026-10-22",
    "updatedAt": "2026-10-23T10:21:00-03:00",
    "approximate": true,
    "source": "Actas públicas de ESPN de temporada regular 2026-27. La suma de los 49 jugadores con acta localizada reproduce los totales de los cuatro equipos de la captura. Tres jugadores no tienen acta localizada; no se les atribuye bajo rendimiento ni una ausencia por lesión.",
    "players": [
      {
        "name": "Shai Gilgeous-Alexander",
        "team": "shockers",
        "gp": 2,
        "minutes": 71.0,
        "stats": {
          "fgm": 19,
          "fga": 46,
          "ftm": 5,
          "fta": 6,
          "tpm": 6,
          "reb": 8,
          "ast": 7,
          "stl": 3,
          "blk": 4,
          "to": 2,
          "pts": 49
        },
        "games": [
          "401909090",
          "401909094"
        ],
        "remaining": 1
      },
      {
        "name": "Scottie Barnes",
        "team": "shockers",
        "gp": 1,
        "minutes": 26.0,
        "stats": {
          "fgm": 8,
          "fga": 19,
          "ftm": 6,
          "fta": 6,
          "tpm": 1,
          "reb": 6,
          "ast": 5,
          "stl": 0,
          "blk": 0,
          "to": 1,
          "pts": 23
        },
        "games": [
          "401909837"
        ],
        "remaining": 2
      },
      {
        "name": "Jayson Tatum",
        "team": "shockers",
        "gp": 1,
        "minutes": 38.0,
        "stats": {
          "fgm": 6,
          "fga": 23,
          "ftm": 1,
          "fta": 1,
          "tpm": 0,
          "reb": 4,
          "ast": 11,
          "stl": 0,
          "blk": 0,
          "to": 2,
          "pts": 13
        },
        "games": [
          "401909088"
        ],
        "remaining": 1
      },
      {
        "name": "Jaren Jackson Jr.",
        "team": "shockers",
        "gp": 1,
        "minutes": 28.0,
        "stats": {
          "fgm": 6,
          "fga": 10,
          "ftm": 1,
          "fta": 2,
          "tpm": 2,
          "reb": 5,
          "ast": 2,
          "stl": 1,
          "blk": 2,
          "to": 5,
          "pts": 15
        },
        "games": [
          "401909838"
        ],
        "remaining": 2
      },
      {
        "name": "Karl-Anthony Towns",
        "team": "shockers",
        "gp": 1,
        "minutes": 24.0,
        "stats": {
          "fgm": 6,
          "fga": 9,
          "ftm": 4,
          "fta": 7,
          "tpm": 3,
          "reb": 12,
          "ast": 1,
          "stl": 1,
          "blk": 2,
          "to": 4,
          "pts": 19
        },
        "games": [
          "401909089"
        ],
        "remaining": 2
      },
      {
        "name": "Amen Thompson",
        "team": "shockers",
        "gp": 1,
        "minutes": 33.0,
        "stats": {
          "fgm": 6,
          "fga": 12,
          "ftm": 3,
          "fta": 5,
          "tpm": 1,
          "reb": 10,
          "ast": 4,
          "stl": 1,
          "blk": 0,
          "to": 1,
          "pts": 16
        },
        "games": [
          "401909840"
        ],
        "remaining": 2
      },
      {
        "name": "Kon Knueppel",
        "team": "shockers",
        "gp": null,
        "minutes": null,
        "stats": null,
        "games": [],
        "remaining": null
      },
      {
        "name": "Dyson Daniels",
        "team": "shockers",
        "gp": 1,
        "minutes": 35.0,
        "stats": {
          "fgm": 8,
          "fga": 13,
          "ftm": 4,
          "fta": 6,
          "tpm": 0,
          "reb": 4,
          "ast": 3,
          "stl": 5,
          "blk": 0,
          "to": 2,
          "pts": 20
        },
        "games": [
          "401909834"
        ],
        "remaining": 2
      },
      {
        "name": "Cameron Boozer",
        "team": "shockers",
        "gp": 1,
        "minutes": 33.0,
        "stats": {
          "fgm": 2,
          "fga": 15,
          "ftm": 3,
          "fta": 4,
          "tpm": 0,
          "reb": 11,
          "ast": 5,
          "stl": 0,
          "blk": 0,
          "to": 1,
          "pts": 7
        },
        "games": [
          "401909838"
        ],
        "remaining": 2
      },
      {
        "name": "Daniel Gafford",
        "team": "shockers",
        "gp": 1,
        "minutes": 22.0,
        "stats": {
          "fgm": 0,
          "fga": 1,
          "ftm": 2,
          "fta": 4,
          "tpm": 0,
          "reb": 3,
          "ast": 1,
          "stl": 1,
          "blk": 2,
          "to": 1,
          "pts": 2
        },
        "games": [
          "401909840"
        ],
        "remaining": 2
      },
      {
        "name": "Herbert Jones",
        "team": "shockers",
        "gp": 1,
        "minutes": 17.0,
        "stats": {
          "fgm": 2,
          "fga": 4,
          "ftm": 0,
          "fta": 0,
          "tpm": 1,
          "reb": 2,
          "ast": 0,
          "stl": 1,
          "blk": 0,
          "to": 1,
          "pts": 5
        },
        "games": [
          "401909839"
        ],
        "remaining": 2
      },
      {
        "name": "Jalen Suggs",
        "team": "shockers",
        "gp": 1,
        "minutes": 32.0,
        "stats": {
          "fgm": 2,
          "fga": 8,
          "ftm": 2,
          "fta": 2,
          "tpm": 0,
          "reb": 3,
          "ast": 5,
          "stl": 2,
          "blk": 0,
          "to": 2,
          "pts": 6
        },
        "games": [
          "401909834"
        ],
        "remaining": 2
      },
      {
        "name": "Tari Eason",
        "team": "shockers",
        "gp": 1,
        "minutes": 3.0,
        "stats": {
          "fgm": 1,
          "fga": 2,
          "ftm": 0,
          "fta": 0,
          "tpm": 0,
          "reb": 1,
          "ast": 0,
          "stl": 1,
          "blk": 0,
          "to": 0,
          "pts": 2
        },
        "games": [
          "401909840"
        ],
        "remaining": 2
      },
      {
        "name": "Jalen Brunson",
        "team": "pilsens",
        "gp": 1,
        "minutes": 34.0,
        "stats": {
          "fgm": 6,
          "fga": 19,
          "ftm": 8,
          "fta": 8,
          "tpm": 1,
          "reb": 5,
          "ast": 3,
          "stl": 0,
          "blk": 0,
          "to": 2,
          "pts": 21
        },
        "games": [
          "401909089"
        ],
        "remaining": 2
      },
      {
        "name": "Dylan Harper",
        "team": "pilsens",
        "gp": 1,
        "minutes": 32.0,
        "stats": {
          "fgm": 7,
          "fga": 17,
          "ftm": 4,
          "fta": 4,
          "tpm": 0,
          "reb": 7,
          "ast": 5,
          "stl": 0,
          "blk": 0,
          "to": 2,
          "pts": 18
        },
        "games": [
          "401909090"
        ],
        "remaining": 2
      },
      {
        "name": "Jaylen Brown",
        "team": "pilsens",
        "gp": 2,
        "minutes": 73.0,
        "stats": {
          "fgm": 17,
          "fga": 34,
          "ftm": 3,
          "fta": 4,
          "tpm": 3,
          "reb": 16,
          "ast": 10,
          "stl": 2,
          "blk": 1,
          "to": 6,
          "pts": 40
        },
        "games": [
          "401909089",
          "401909093"
        ],
        "remaining": 2
      },
      {
        "name": "Keldon Johnson",
        "team": "pilsens",
        "gp": 1,
        "minutes": 20.0,
        "stats": {
          "fgm": 4,
          "fga": 8,
          "ftm": 1,
          "fta": 1,
          "tpm": 1,
          "reb": 4,
          "ast": 1,
          "stl": 2,
          "blk": 0,
          "to": 2,
          "pts": 10
        },
        "games": [
          "401909090"
        ],
        "remaining": 2
      },
      {
        "name": "Nikola Jokić",
        "team": "pilsens",
        "gp": 1,
        "minutes": 35.0,
        "stats": {
          "fgm": 5,
          "fga": 19,
          "ftm": 2,
          "fta": 4,
          "tpm": 1,
          "reb": 7,
          "ast": 5,
          "stl": 1,
          "blk": 1,
          "to": 2,
          "pts": 13
        },
        "games": [
          "401909094"
        ],
        "remaining": 1
      },
      {
        "name": "Anthony Edwards",
        "team": "pilsens",
        "gp": 1,
        "minutes": 33.0,
        "stats": {
          "fgm": 16,
          "fga": 29,
          "ftm": 4,
          "fta": 5,
          "tpm": 9,
          "reb": 10,
          "ast": 3,
          "stl": 2,
          "blk": 1,
          "to": 4,
          "pts": 45
        },
        "games": [
          "401909091"
        ],
        "remaining": 2
      },
      {
        "name": "Paolo Banchero",
        "team": "pilsens",
        "gp": 1,
        "minutes": 41.0,
        "stats": {
          "fgm": 10,
          "fga": 12,
          "ftm": 12,
          "fta": 16,
          "tpm": 3,
          "reb": 7,
          "ast": 10,
          "stl": 1,
          "blk": 0,
          "to": 6,
          "pts": 35
        },
        "games": [
          "401909834"
        ],
        "remaining": 2
      },
      {
        "name": "AJ Dybantsa",
        "team": "pilsens",
        "gp": null,
        "minutes": null,
        "stats": null,
        "games": [],
        "remaining": null
      },
      {
        "name": "Caleb Wilson",
        "team": "pilsens",
        "gp": 1,
        "minutes": 32.0,
        "stats": {
          "fgm": 7,
          "fga": 21,
          "ftm": 1,
          "fta": 2,
          "tpm": 1,
          "reb": 4,
          "ast": 0,
          "stl": 3,
          "blk": 1,
          "to": 9,
          "pts": 16
        },
        "games": [
          "401909837"
        ],
        "remaining": 2
      },
      {
        "name": "Sandro Mamukelashvili",
        "team": "pilsens",
        "gp": 1,
        "minutes": 22.0,
        "stats": {
          "fgm": 2,
          "fga": 5,
          "ftm": 1,
          "fta": 2,
          "tpm": 0,
          "reb": 4,
          "ast": 2,
          "stl": 2,
          "blk": 0,
          "to": 0,
          "pts": 5
        },
        "games": [
          "401909092"
        ],
        "remaining": 2
      },
      {
        "name": "Jalen Johnson",
        "team": "pilsens",
        "gp": 1,
        "minutes": 28.0,
        "stats": {
          "fgm": 7,
          "fga": 19,
          "ftm": 6,
          "fta": 7,
          "tpm": 0,
          "reb": 14,
          "ast": 6,
          "stl": 0,
          "blk": 0,
          "to": 2,
          "pts": 20
        },
        "games": [
          "401909834"
        ],
        "remaining": 2
      },
      {
        "name": "Jaylen Wells",
        "team": "pilsens",
        "gp": 1,
        "minutes": 28.0,
        "stats": {
          "fgm": 5,
          "fga": 10,
          "ftm": 1,
          "fta": 3,
          "tpm": 1,
          "reb": 5,
          "ast": 0,
          "stl": 4,
          "blk": 0,
          "to": 0,
          "pts": 12
        },
        "games": [
          "401909838"
        ],
        "remaining": 2
      },
      {
        "name": "Dillon Brooks",
        "team": "pilsens",
        "gp": 1,
        "minutes": 27.0,
        "stats": {
          "fgm": 4,
          "fga": 11,
          "ftm": 1,
          "fta": 2,
          "tpm": 1,
          "reb": 4,
          "ast": 0,
          "stl": 0,
          "blk": 0,
          "to": 2,
          "pts": 10
        },
        "games": [
          "401909841"
        ],
        "remaining": 1
      },
      {
        "name": "Cade Cunningham",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 35.0,
        "stats": {
          "fgm": 8,
          "fga": 18,
          "ftm": 5,
          "fta": 5,
          "tpm": 1,
          "reb": 4,
          "ast": 8,
          "stl": 1,
          "blk": 1,
          "to": 5,
          "pts": 22
        },
        "games": [
          "401909088"
        ],
        "remaining": 2
      },
      {
        "name": "Derrick White",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 36.0,
        "stats": {
          "fgm": 7,
          "fga": 13,
          "ftm": 0,
          "fta": 0,
          "tpm": 3,
          "reb": 1,
          "ast": 8,
          "stl": 1,
          "blk": 0,
          "to": 4,
          "pts": 17
        },
        "games": [
          "401909088"
        ],
        "remaining": 1
      },
      {
        "name": "Deni Avdija",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 23.0,
        "stats": {
          "fgm": 7,
          "fga": 16,
          "ftm": 2,
          "fta": 4,
          "tpm": 2,
          "reb": 10,
          "ast": 4,
          "stl": 2,
          "blk": 0,
          "to": 2,
          "pts": 18
        },
        "games": [
          "401909841"
        ],
        "remaining": 1
      },
      {
        "name": "Naz Reid",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 33.0,
        "stats": {
          "fgm": 8,
          "fga": 19,
          "ftm": 0,
          "fta": 1,
          "tpm": 4,
          "reb": 11,
          "ast": 7,
          "stl": 0,
          "blk": 0,
          "to": 1,
          "pts": 20
        },
        "games": [
          "401909836"
        ],
        "remaining": 2
      },
      {
        "name": "Victor Wembanyama",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 34.0,
        "stats": {
          "fgm": 1,
          "fga": 13,
          "ftm": 10,
          "fta": 12,
          "tpm": 0,
          "reb": 13,
          "ast": 3,
          "stl": 1,
          "blk": 6,
          "to": 4,
          "pts": 12
        },
        "games": [
          "401909090"
        ],
        "remaining": 2
      },
      {
        "name": "VJ Edgecombe",
        "team": "hipopotamos",
        "gp": 2,
        "minutes": 68.0,
        "stats": {
          "fgm": 8,
          "fga": 21,
          "ftm": 3,
          "fta": 5,
          "tpm": 1,
          "reb": 11,
          "ast": 7,
          "stl": 4,
          "blk": 0,
          "to": 2,
          "pts": 20
        },
        "games": [
          "401909089",
          "401909093"
        ],
        "remaining": 2
      },
      {
        "name": "Jaden McDaniels",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 29.0,
        "stats": {
          "fgm": 8,
          "fga": 11,
          "ftm": 0,
          "fta": 0,
          "tpm": 1,
          "reb": 8,
          "ast": 1,
          "stl": 3,
          "blk": 0,
          "to": 2,
          "pts": 17
        },
        "games": [
          "401909091"
        ],
        "remaining": 2
      },
      {
        "name": "Josh Giddey",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 24.0,
        "stats": {
          "fgm": 1,
          "fga": 10,
          "ftm": 0,
          "fta": 2,
          "tpm": 0,
          "reb": 7,
          "ast": 6,
          "stl": 0,
          "blk": 0,
          "to": 5,
          "pts": 2
        },
        "games": [
          "401909837"
        ],
        "remaining": 2
      },
      {
        "name": "Cason Wallace",
        "team": "hipopotamos",
        "gp": 2,
        "minutes": 43.0,
        "stats": {
          "fgm": 6,
          "fga": 16,
          "ftm": 0,
          "fta": 0,
          "tpm": 3,
          "reb": 4,
          "ast": 3,
          "stl": 5,
          "blk": 0,
          "to": 1,
          "pts": 15
        },
        "games": [
          "401909090",
          "401909094"
        ],
        "remaining": 1
      },
      {
        "name": "Bennett Stirtz",
        "team": "hipopotamos",
        "gp": 2,
        "minutes": 3.0,
        "stats": {
          "fgm": 0,
          "fga": 1,
          "ftm": 0,
          "fta": 0,
          "tpm": 0,
          "reb": 0,
          "ast": 0,
          "stl": 0,
          "blk": 0,
          "to": 0,
          "pts": 0
        },
        "games": [
          "401909090",
          "401909094"
        ],
        "remaining": 1
      },
      {
        "name": "Onyeka Okongwu",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 29.0,
        "stats": {
          "fgm": 3,
          "fga": 8,
          "ftm": 2,
          "fta": 2,
          "tpm": 0,
          "reb": 5,
          "ast": 7,
          "stl": 0,
          "blk": 0,
          "to": 2,
          "pts": 8
        },
        "games": [
          "401909834"
        ],
        "remaining": 2
      },
      {
        "name": "Toumani Camara",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 23.0,
        "stats": {
          "fgm": 6,
          "fga": 9,
          "ftm": 2,
          "fta": 2,
          "tpm": 4,
          "reb": 2,
          "ast": 3,
          "stl": 0,
          "blk": 0,
          "to": 1,
          "pts": 18
        },
        "games": [
          "401909841"
        ],
        "remaining": 1
      },
      {
        "name": "P.J. Washington",
        "team": "hipopotamos",
        "gp": 1,
        "minutes": 31.0,
        "stats": {
          "fgm": 4,
          "fga": 9,
          "ftm": 0,
          "fta": 2,
          "tpm": 2,
          "reb": 4,
          "ast": 2,
          "stl": 0,
          "blk": 1,
          "to": 4,
          "pts": 10
        },
        "games": [
          "401909840"
        ],
        "remaining": 2
      },
      {
        "name": "Luka Dončić",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 30.0,
        "stats": {
          "fgm": 7,
          "fga": 18,
          "ftm": 9,
          "fta": 9,
          "tpm": 5,
          "reb": 8,
          "ast": 7,
          "stl": 3,
          "blk": 0,
          "to": 6,
          "pts": 28
        },
        "games": [
          "401909092"
        ],
        "remaining": 2
      },
      {
        "name": "Donovan Mitchell",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 35.0,
        "stats": {
          "fgm": 11,
          "fga": 19,
          "ftm": 8,
          "fta": 11,
          "tpm": 2,
          "reb": 10,
          "ast": 3,
          "stl": 2,
          "blk": 1,
          "to": 5,
          "pts": 32
        },
        "games": [
          "401909093"
        ],
        "remaining": 1
      },
      {
        "name": "Brandon Miller",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 36.0,
        "stats": {
          "fgm": 7,
          "fga": 21,
          "ftm": 1,
          "fta": 2,
          "tpm": 3,
          "reb": 3,
          "ast": 1,
          "stl": 0,
          "blk": 1,
          "to": 3,
          "pts": 18
        },
        "games": [
          "401909836"
        ],
        "remaining": 2
      },
      {
        "name": "Giannis Antetokounmpo",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 30.0,
        "stats": {
          "fgm": 13,
          "fga": 19,
          "ftm": 9,
          "fta": 14,
          "tpm": 0,
          "reb": 6,
          "ast": 1,
          "stl": 1,
          "blk": 0,
          "to": 3,
          "pts": 35
        },
        "games": [
          "401909091"
        ],
        "remaining": 2
      },
      {
        "name": "Alperen Sengun",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 30.0,
        "stats": {
          "fgm": 9,
          "fga": 15,
          "ftm": 3,
          "fta": 4,
          "tpm": 2,
          "reb": 10,
          "ast": 5,
          "stl": 0,
          "blk": 0,
          "to": 4,
          "pts": 23
        },
        "games": [
          "401909840"
        ],
        "remaining": 2
      },
      {
        "name": "Payton Pritchard",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 28.0,
        "stats": {
          "fgm": 4,
          "fga": 9,
          "ftm": 7,
          "fta": 8,
          "tpm": 2,
          "reb": 4,
          "ast": 1,
          "stl": 0,
          "blk": 0,
          "to": 0,
          "pts": 17
        },
        "games": [
          "401909088"
        ],
        "remaining": 1
      },
      {
        "name": "OG Anunoby",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 32.0,
        "stats": {
          "fgm": 3,
          "fga": 12,
          "ftm": 3,
          "fta": 3,
          "tpm": 1,
          "reb": 5,
          "ast": 0,
          "stl": 1,
          "blk": 1,
          "to": 2,
          "pts": 10
        },
        "games": [
          "401909089"
        ],
        "remaining": 2
      },
      {
        "name": "Alex Sarr",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 24.0,
        "stats": {
          "fgm": 3,
          "fga": 9,
          "ftm": 0,
          "fta": 0,
          "tpm": 0,
          "reb": 9,
          "ast": 2,
          "stl": 0,
          "blk": 0,
          "to": 0,
          "pts": 6
        },
        "games": [
          "401909835"
        ],
        "remaining": 2
      },
      {
        "name": "Matas Buzelis",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 25.0,
        "stats": {
          "fgm": 2,
          "fga": 8,
          "ftm": 13,
          "fta": 16,
          "tpm": 0,
          "reb": 6,
          "ast": 0,
          "stl": 0,
          "blk": 2,
          "to": 3,
          "pts": 17
        },
        "games": [
          "401909837"
        ],
        "remaining": 2
      },
      {
        "name": "Bobby Portis",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 25.0,
        "stats": {
          "fgm": 3,
          "fga": 5,
          "ftm": 0,
          "fta": 0,
          "tpm": 1,
          "reb": 4,
          "ast": 1,
          "stl": 1,
          "blk": 1,
          "to": 2,
          "pts": 7
        },
        "games": [
          "401909091"
        ],
        "remaining": 2
      },
      {
        "name": "Malik Monk",
        "team": "pelafustanes",
        "gp": null,
        "minutes": null,
        "stats": null,
        "games": [],
        "remaining": null
      },
      {
        "name": "Royce O'Neale",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 17.0,
        "stats": {
          "fgm": 3,
          "fga": 6,
          "ftm": 0,
          "fta": 0,
          "tpm": 2,
          "reb": 4,
          "ast": 0,
          "stl": 1,
          "blk": 1,
          "to": 1,
          "pts": 8
        },
        "games": [
          "401909836"
        ],
        "remaining": 2
      },
      {
        "name": "Klay Thompson",
        "team": "pelafustanes",
        "gp": 1,
        "minutes": 16.0,
        "stats": {
          "fgm": 3,
          "fga": 6,
          "ftm": 1,
          "fta": 1,
          "tpm": 3,
          "reb": 1,
          "ast": 0,
          "stl": 0,
          "blk": 0,
          "to": 2,
          "pts": 10
        },
        "games": [
          "401909091"
        ],
        "remaining": 2
      }
    ],
    "games": [
      {
        "id": "401909088",
        "date": "2026-10-20T19:00Z",
        "name": "Boston Celtics at Detroit Pistons",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909088",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909088"
      },
      {
        "id": "401909089",
        "date": "2026-10-20T23:00Z",
        "name": "Philadelphia 76ers at New York Knicks",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909089",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909089"
      },
      {
        "id": "401909090",
        "date": "2026-10-21T01:50Z",
        "name": "Oklahoma City Thunder at San Antonio Spurs",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909090",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909090"
      },
      {
        "id": "401909834",
        "date": "2026-10-21T23:00Z",
        "name": "Atlanta Hawks at Orlando Magic",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909834",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909834"
      },
      {
        "id": "401909835",
        "date": "2026-10-21T23:00Z",
        "name": "Milwaukee Bucks at Washington Wizards",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909835",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909835"
      },
      {
        "id": "401909091",
        "date": "2026-10-21T23:30Z",
        "name": "Minnesota Timberwolves at Miami Heat",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909091",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909091"
      },
      {
        "id": "401909836",
        "date": "2026-10-21T23:30Z",
        "name": "Charlotte Hornets at Brooklyn Nets",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909836",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909836"
      },
      {
        "id": "401909837",
        "date": "2026-10-21T23:30Z",
        "name": "Chicago Bulls at Toronto Raptors",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909837",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909837"
      },
      {
        "id": "401909838",
        "date": "2026-10-22T00:00Z",
        "name": "Utah Jazz at Memphis Grizzlies",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909838",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909838"
      },
      {
        "id": "401909839",
        "date": "2026-10-22T00:00Z",
        "name": "Indiana Pacers at New Orleans Pelicans",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909839",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909839"
      },
      {
        "id": "401909840",
        "date": "2026-10-22T00:30Z",
        "name": "Dallas Mavericks at Houston Rockets",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909840",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909840"
      },
      {
        "id": "401909092",
        "date": "2026-10-22T02:00Z",
        "name": "Golden State Warriors at Los Angeles Lakers",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909092",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909092"
      },
      {
        "id": "401909841",
        "date": "2026-10-22T02:00Z",
        "name": "Phoenix Suns at Portland Trail Blazers",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909841",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909841"
      },
      {
        "id": "401909842",
        "date": "2026-10-22T02:30Z",
        "name": "Sacramento Kings at LA Clippers",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909842",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909842"
      },
      {
        "id": "401909093",
        "date": "2026-10-22T23:00Z",
        "name": "Cleveland Cavaliers at Philadelphia 76ers",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909093",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909093"
      },
      {
        "id": "401909094",
        "date": "2026-10-23T01:30Z",
        "name": "Denver Nuggets at Oklahoma City Thunder",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909094",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909094"
      }
    ],
    "upcoming": [
      {
        "id": "401909848",
        "date": "2026-10-23T20:00Z",
        "game": "Chicago Bulls at Milwaukee Bucks",
        "teams": [
          "15",
          "4"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909848"
      },
      {
        "id": "401909095",
        "date": "2026-10-23T23:00Z",
        "game": "New York Knicks at Boston Celtics",
        "teams": [
          "2",
          "18"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909095"
      },
      {
        "id": "401909843",
        "date": "2026-10-23T23:00Z",
        "game": "Atlanta Hawks at Charlotte Hornets",
        "teams": [
          "30",
          "1"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909843"
      },
      {
        "id": "401909844",
        "date": "2026-10-23T23:00Z",
        "game": "Dallas Mavericks at Indiana Pacers",
        "teams": [
          "11",
          "6"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909844"
      },
      {
        "id": "401909845",
        "date": "2026-10-23T23:00Z",
        "game": "Minnesota Timberwolves at Orlando Magic",
        "teams": [
          "19",
          "16"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909845"
      },
      {
        "id": "401909846",
        "date": "2026-10-23T23:00Z",
        "game": "Toronto Raptors at Washington Wizards",
        "teams": [
          "27",
          "28"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909846"
      },
      {
        "id": "401909847",
        "date": "2026-10-24T00:00Z",
        "game": "Detroit Pistons at Miami Heat",
        "teams": [
          "14",
          "8"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909847"
      },
      {
        "id": "401909096",
        "date": "2026-10-24T01:30Z",
        "game": "Houston Rockets at San Antonio Spurs",
        "teams": [
          "24",
          "10"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909096"
      },
      {
        "id": "401909849",
        "date": "2026-10-24T01:30Z",
        "game": "New Orleans Pelicans at Utah Jazz",
        "teams": [
          "26",
          "3"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909849"
      },
      {
        "id": "401909850",
        "date": "2026-10-24T02:00Z",
        "game": "Memphis Grizzlies at Golden State Warriors",
        "teams": [
          "9",
          "29"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909850"
      },
      {
        "id": "401909851",
        "date": "2026-10-24T02:00Z",
        "game": "LA Clippers at Los Angeles Lakers",
        "teams": [
          "13",
          "12"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909851"
      },
      {
        "id": "401909852",
        "date": "2026-10-24T02:00Z",
        "game": "Portland Trail Blazers at Sacramento Kings",
        "teams": [
          "23",
          "22"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909852"
      },
      {
        "id": "401909853",
        "date": "2026-10-24T22:00Z",
        "game": "Miami Heat at Charlotte Hornets",
        "teams": [
          "30",
          "14"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909853"
      },
      {
        "id": "401909854",
        "date": "2026-10-24T23:30Z",
        "game": "Brooklyn Nets at Cleveland Cavaliers",
        "teams": [
          "5",
          "17"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909854"
      },
      {
        "id": "401909855",
        "date": "2026-10-24T23:30Z",
        "game": "Milwaukee Bucks at Philadelphia 76ers",
        "teams": [
          "20",
          "15"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909855"
      },
      {
        "id": "401909857",
        "date": "2026-10-25T00:00Z",
        "game": "Washington Wizards at Chicago Bulls",
        "teams": [
          "4",
          "27"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909857"
      },
      {
        "id": "401909858",
        "date": "2026-10-25T00:00Z",
        "game": "San Antonio Spurs at Dallas Mavericks",
        "teams": [
          "6",
          "24"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909858"
      },
      {
        "id": "401909856",
        "date": "2026-10-25T00:30Z",
        "game": "Houston Rockets at Atlanta Hawks",
        "teams": [
          "1",
          "10"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909856"
      },
      {
        "id": "401909859",
        "date": "2026-10-25T01:00Z",
        "game": "New Orleans Pelicans at Denver Nuggets",
        "teams": [
          "7",
          "3"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909859"
      },
      {
        "id": "401909860",
        "date": "2026-10-25T02:00Z",
        "game": "Golden State Warriors at Phoenix Suns",
        "teams": [
          "21",
          "9"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909860"
      },
      {
        "id": "401909861",
        "date": "2026-10-25T21:00Z",
        "game": "Los Angeles Lakers at Utah Jazz",
        "teams": [
          "26",
          "13"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909861"
      },
      {
        "id": "401909862",
        "date": "2026-10-25T22:00Z",
        "game": "Indiana Pacers at Brooklyn Nets",
        "teams": [
          "17",
          "11"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909862"
      },
      {
        "id": "401909863",
        "date": "2026-10-25T23:00Z",
        "game": "Orlando Magic at New York Knicks",
        "teams": [
          "18",
          "19"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909863"
      },
      {
        "id": "401909864",
        "date": "2026-10-25T23:00Z",
        "game": "Toronto Raptors at Minnesota Timberwolves",
        "teams": [
          "16",
          "28"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909864"
      },
      {
        "id": "401909865",
        "date": "2026-10-25T23:00Z",
        "game": "LA Clippers at Oklahoma City Thunder",
        "teams": [
          "25",
          "12"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909865"
      },
      {
        "id": "401909866",
        "date": "2026-10-25T23:30Z",
        "game": "Detroit Pistons at Philadelphia 76ers",
        "teams": [
          "20",
          "8"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909866"
      },
      {
        "id": "401909867",
        "date": "2026-10-26T01:00Z",
        "game": "Memphis Grizzlies at Sacramento Kings",
        "teams": [
          "23",
          "29"
        ],
        "url": "https://www.espn.com/nba/game/_/gameId/401909867"
      }
    ]
  }
],

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
    initials: 'PS', colors: ['#3d8bff', '#c9d3e0'], logo: './assets/penalolen-shockers.webp',
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
      {
  "id": "w1-m1",
  "teams": [
    "hipopotamos",
    "pelafustanes"
  ],
  "status": "partial",
  "updatedAt": "2026-10-23T10:21:00-03:00",
  "updatedAtApproximate": true,
  "source": "Captura de ESPN Fantasy aportada por el participante.",
  "sourceImage": "./assets/cortes/semana-1-2026-10-23.png",
  "stats": {
    "hipopotamos": {
      "fgp": 0.4085,
      "ftp": 0.6857,
      "tpm": 21,
      "reb": 80,
      "ast": 59,
      "stl": 17,
      "blk": 8,
      "to": 33,
      "pts": 179
    },
    "pelafustanes": {
      "fgp": 0.4626,
      "ftp": 0.7941,
      "tpm": 21,
      "reb": 70,
      "ast": 21,
      "stl": 9,
      "blk": 7,
      "to": 31,
      "pts": 211
    }
  }
},
      {
  "id": "w1-m2",
  "teams": [
    "pilsens",
    "shockers"
  ],
  "status": "partial",
  "updatedAt": "2026-10-23T10:21:00-03:00",
  "updatedAtApproximate": true,
  "source": "Captura de ESPN Fantasy aportada por el participante.",
  "sourceImage": "./assets/cortes/semana-1-2026-10-23.png",
  "stats": {
    "pilsens": {
      "fgp": 0.4412,
      "ftp": 0.7586,
      "tpm": 21,
      "reb": 87,
      "ast": 45,
      "stl": 17,
      "blk": 4,
      "to": 37,
      "pts": 245
    },
    "shockers": {
      "fgp": 0.4074,
      "ftp": 0.7209,
      "tpm": 14,
      "reb": 69,
      "ast": 44,
      "stl": 16,
      "blk": 10,
      "to": 22,
      "pts": 177
    }
  }
}
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
{
  "id": "parciales-semana-1-23-octubre",
  "date": "2026-10-23",
  "category": "Crónicas",
  "partial": true,
  "title": "Pilsens toma ventaja; Hipopotamos y Mequetrefes empatan.",
  "excerpt": "Edwards marca la diferencia, Wembanyama sostiene la defensa y Shockers busca una reacción. El 7–2 de Cromwell y el 4–4 con una categoría empatada son parciales: el cierre del domingo sigue abierto.",
  "teams": [
    "pilsens",
    "shockers",
    "hipopotamos",
    "pelafustanes"
  ],
  "reportId": "semana-1-corte-2026-10-23",
  "source": "Marcadores: captura de ESPN Fantasy aportada el 23 de octubre de 2026, con corte horario aproximado informado por el participante. Actuaciones individuales: actas públicas de ESPN del inicio de la temporada regular 2026-27; partidos de las jornadas NBA del 20 al 22 de octubre. Las tablas distinguen partidos jugados de los que no tienen acta localizada. Proyecciones y posibles ajustes de plantilla son opinión editorial; no hay trades confirmados.",
  "body": [
    [
      "p",
      "El primer corte de Papafritas League deja dos escenarios: Cromwell Pilsens manda 7–2 ante Penalolen Shockers, mientras Los Hipopotamos Chuchetumare y Mequetrefes igualan 4–4, con los triples empatados. Los porcentajes, las pérdidas y varias ventajas mínimas explican tanto como los puntos. Quedan partidos hasta el domingo 25; todavía no corresponde repartir victorias."
    ],
    [
      "team-heading",
      "pilsens"
    ],
    [
      "p",
      "Anthony Edwards fue la actuación decisiva: 45 puntos, diez rebotes y nueve triples ante Miami. Paolo Banchero acompañó con 35 puntos, diez asistencias y 10/12 de campo. Jaylen Brown acumuló 40 puntos en dos partidos. Cromwell ganó volumen ofensivo sin necesitar una gran noche de Nikola Jokić, que abrió con 13 puntos y 5/19 de campo frente a Oklahoma City."
    ],
    [
      "p",
      "La sorpresa útil fue Jaylen Wells: cuatro robos y ninguna pérdida. Importa en un cruce donde Pilsens apenas aventaja 17–16 en robos. El foco de revisión es Caleb Wilson: sus nueve pérdidas y 7/21 de campo penalizaron dos categorías, aunque jugó 32 minutos. Si ese costo se repite, será una pieza a evaluar para un intercambio o reemplazo compatible con los tiers. Un partido todavía es una muestra pequeña."
    ],
    [
      "player-report",
      "pilsens"
    ],
    [
      "team-heading",
      "shockers"
    ],
    [
      "p",
      "Shai Gilgeous-Alexander sumó 49 puntos, seis triples y solo dos pérdidas en dos encuentros; su segundo partido, de 6/19 de campo, enfrió el arranque. Jayson Tatum aportó once asistencias, pero convirtió 6/23 y falló sus siete triples. Karl-Anthony Towns respondió con 19 puntos y doce rebotes; su 4/7 en libres también merece atención con FT% en desventaja."
    ],
    [
      "p",
      "Dyson Daniels dio una respuesta valiosa: 20 puntos, cinco robos y 8/13 de campo. Cameron Boozer entregó once rebotes y cinco asistencias, aunque su 2/15 de tiro pesó mucho. La primera revisión por minutos corresponde a Tari Eason, con apenas tres. Daniel Gafford anotó dos puntos, pero añadió dos tapones: juzgarlo solo por la anotación ignoraría una de las categorías que Shockers sí gana."
    ],
    [
      "player-report",
      "shockers"
    ],
    [
      "team-heading",
      "hipopotamos"
    ],
    [
      "p",
      "Victor Wembanyama dejó una línea de fuertes contrastes: 1/13 de campo, pero trece rebotes y seis tapones. Esa defensa resulta esencial en un margen de apenas 8–7 en BLK. Cade Cunningham sostuvo la creación con 22 puntos y ocho asistencias. Naz Reid destacó con 20 puntos, once rebotes, siete asistencias y cuatro triples; Toumani Camara agregó otros cuatro triples."
    ],
    [
      "p",
      "Josh Giddey quedó en deuda con dos puntos, 1/10 de campo y cinco pérdidas, compensadas parcialmente por siete rebotes y seis asistencias. Bennett Stirtz es el cupo que exige una revisión más inmediata: tres minutos y cero puntos entre dos partidos. Si esa participación persiste, una alternativa de mayor uso puede tener sentido dentro de las tres adquisiciones semanales. La decisión debería responder al rol y a las categorías que faltan."
    ],
    [
      "player-report",
      "hipopotamos"
    ],
    [
      "team-heading",
      "pelafustanes"
    ],
    [
      "p",
      "Mequetrefes recibió producción de sus figuras: Giannis Antetokounmpo anotó 35 puntos con 13/19 de campo; Donovan Mitchell, 32 con diez rebotes; Luka Dončić, 28 con cinco triples, ocho rebotes y siete asistencias. Luka acertó sus nueve libres, aunque registró seis pérdidas. La tensión entre volumen y control del balón sigue presente en un plantel que gana TO por solo dos."
    ],
    [
      "p",
      "Payton Pritchard aportó 17 puntos sin pérdidas y Klay Thompson convirtió tres triples en 16 minutos: producción especialmente útil con 3PM igualado. OG Anunoby necesita mejorar su 3/12 de campo, pero sus 32 minutos no justifican concluir que perdió protagonismo. Thompson sería una pieza negociable si Carlos busca más creación; moverlo solo por sus diez puntos ignoraría la categoría que hoy ayuda a disputar."
    ],
    [
      "player-report",
      "pelafustanes"
    ],
    [
      "h2",
      "Dónde puede cambiar el fin de semana"
    ],
    [
      "p",
      "Hipopotamos tiene ventaja de 38 asistencias, diez rebotes y ocho robos. Mequetrefes responde con 32 puntos más y mejores porcentajes. Los frentes inmediatos son los triples, empatados 21–21; los tapones, 8–7; y las pérdidas, 33–31, favorables a Carlos. Según el calendario consultado, Wembanyama, Cunningham, Giddey, Dončić y Giannis tienen dos encuentros programados antes del cierre. Una sola actuación puede cambiar varias categorías, siempre sujeta a disponibilidad y alineación."
    ],
    [
      "p",
      "Shockers debe atacar las ventajas de apenas una asistencia y un robo de Cromwell. Revertir ambas llevaría el parcial a 4–5: todavía necesitaría una tercera categoría para adelantarse, además de conservar tapones y pérdidas. Pilsens dispone de colchón en puntos y rebotes, pero no tiene asegurado el cruce. Edwards y Banchero tienen dos partidos programados; Jokić y Shai, uno cada uno. Ese reparto orienta la estrategia, no garantiza producción."
    ],
    [
      "p",
      "Los nombres bajo revisión son una lectura editorial de minutos, eficiencia y encaje. No hay información de conversaciones de trade. Antes de mover una pieza deben comprobarse el cupo de tier, la restricción por franquicia NBA y las reglas aplicables. A estas alturas, vender una estrella por una mala noche puede terminar reforzando al rival."
    ]
  ],
  "readingMinutes": 3
},
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
