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
   La clasificación acumula categorías ganadas, perdidas y empatadas, según ESPN.
   ===================================================================== */
window.LEAGUE_DATA = {
startDate: '2026-10-20',
commissioner: 'Patricio Uribe',
season: '2026 / 27',

/* Cortes históricos: conservar los informes anteriores sin modificarlos. */
statisticsReports: [
{
  "id": "semana-1-final-2026-10-25",
  "status": "final",
  "season": "2026-27",
  "from": "2026-10-20",
  "through": "2026-10-25",
  "updatedDate": "2026-10-26",
  "source": "Resultados definitivos y totales semanales de ESPN Fantasy aportados en cuatro capturas. Los 50 jugadores visibles reproducen las nueve categorías de cada equipo. Sus actuaciones se contrastaron con las actas públicas de ESPN del 20 al 25 de octubre: Portis, Klay Thompson y Gafford tienen tres partidos NBA, pero sus cifras fantasy coinciden con dos actas; las capturas no permiten determinar el motivo de la diferencia. Kon Knueppel y AJ Dybantsa no aparecen en estas capturas: se conservan en los planteles, con cifras sin informar. La lista de candidatos recoge actuaciones NBA, no confirma su disponibilidad en la liga.",
  "sourceImages": [
    {
      "title": "Los Hipopotamos Chuchetumare",
      "url": "./assets/cortes/semana-1-final-hipopotamos.png"
    },
    {
      "title": "Mequetrefes",
      "url": "./assets/cortes/semana-1-final-mequetrefes.png"
    },
    {
      "title": "Penalolen Shockers",
      "url": "./assets/cortes/semana-1-final-shockers.png"
    },
    {
      "title": "Cromwell Pilsens",
      "url": "./assets/cortes/semana-1-final-pilsens.png"
    }
  ],
  "teamTotals": {
    "hipopotamos": {
      "fgp": 0.4475,
      "ftp": 0.7021,
      "tpm": 59,
      "reb": 207,
      "ast": 127,
      "stl": 32,
      "blk": 32,
      "to": 70,
      "pts": 483
    },
    "pelafustanes": {
      "fgp": 0.4416,
      "ftp": 0.8118,
      "tpm": 58,
      "reb": 180,
      "ast": 99,
      "stl": 26,
      "blk": 17,
      "to": 89,
      "pts": 574
    },
    "shockers": {
      "fgp": 0.4509,
      "ftp": 0.8167,
      "tpm": 34,
      "reb": 233,
      "ast": 117,
      "stl": 53,
      "blk": 27,
      "to": 78,
      "pts": 536
    },
    "pilsens": {
      "fgp": 0.4565,
      "ftp": 0.7484,
      "tpm": 54,
      "reb": 200,
      "ast": 133,
      "stl": 42,
      "blk": 16,
      "to": 76,
      "pts": 642
    }
  },
  "players": [
    {
      "name": "P.J. Washington",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 100,
      "stats": {
        "fgm": 16,
        "fga": 32,
        "ftm": 6,
        "fta": 11,
        "tpm": 4,
        "reb": 21,
        "ast": 4,
        "stl": 0,
        "blk": 4,
        "to": 6,
        "pts": 42
      },
      "games": [
        "401909840",
        "401909844",
        "401909858"
      ],
      "nbaGames": [
        "401909840",
        "401909844",
        "401909858"
      ],
      "nbaTeam": "Dallas Mavericks"
    },
    {
      "name": "Derrick White",
      "team": "hipopotamos",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 69,
      "stats": {
        "fgm": 12,
        "fga": 24,
        "ftm": 0,
        "fta": 0,
        "tpm": 5,
        "reb": 5,
        "ast": 14,
        "stl": 2,
        "blk": 0,
        "to": 5,
        "pts": 29
      },
      "games": [
        "401909088",
        "401909095"
      ],
      "nbaGames": [
        "401909088",
        "401909095"
      ],
      "nbaTeam": "Boston Celtics"
    },
    {
      "name": "Bennett Stirtz",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 14,
      "stats": {
        "fgm": 1,
        "fga": 4,
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
        "401909090",
        "401909094",
        "401909865"
      ],
      "nbaGames": [
        "401909090",
        "401909094",
        "401909865"
      ],
      "nbaTeam": "Oklahoma City Thunder"
    },
    {
      "name": "Toumani Camara",
      "team": "hipopotamos",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 50,
      "stats": {
        "fgm": 13,
        "fga": 21,
        "ftm": 2,
        "fta": 2,
        "tpm": 9,
        "reb": 5,
        "ast": 4,
        "stl": 2,
        "blk": 0,
        "to": 1,
        "pts": 37
      },
      "games": [
        "401909841",
        "401909852"
      ],
      "nbaGames": [
        "401909841",
        "401909852"
      ],
      "nbaTeam": "Portland Trail Blazers"
    },
    {
      "name": "Jaden McDaniels",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 90,
      "stats": {
        "fgm": 20,
        "fga": 35,
        "ftm": 2,
        "fta": 2,
        "tpm": 4,
        "reb": 20,
        "ast": 7,
        "stl": 3,
        "blk": 5,
        "to": 6,
        "pts": 46
      },
      "games": [
        "401909091",
        "401909845",
        "401909864"
      ],
      "nbaGames": [
        "401909091",
        "401909845",
        "401909864"
      ],
      "nbaTeam": "Minnesota Timberwolves"
    },
    {
      "name": "Victor Wembanyama",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 95,
      "stats": {
        "fgm": 19,
        "fga": 52,
        "ftm": 18,
        "fta": 25,
        "tpm": 4,
        "reb": 33,
        "ast": 7,
        "stl": 2,
        "blk": 12,
        "to": 8,
        "pts": 60
      },
      "games": [
        "401909090",
        "401909096",
        "401909858"
      ],
      "nbaGames": [
        "401909090",
        "401909096",
        "401909858"
      ],
      "nbaTeam": "San Antonio Spurs"
    },
    {
      "name": "Cason Wallace",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 49,
      "stats": {
        "fgm": 8,
        "fga": 20,
        "ftm": 0,
        "fta": 0,
        "tpm": 3,
        "reb": 7,
        "ast": 4,
        "stl": 7,
        "blk": 0,
        "to": 3,
        "pts": 19
      },
      "games": [
        "401909090",
        "401909094",
        "401909865"
      ],
      "nbaGames": [
        "401909090",
        "401909094",
        "401909865"
      ],
      "nbaTeam": "Oklahoma City Thunder"
    },
    {
      "name": "VJ Edgecombe",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 98,
      "stats": {
        "fgm": 13,
        "fga": 34,
        "ftm": 5,
        "fta": 7,
        "tpm": 6,
        "reb": 24,
        "ast": 9,
        "stl": 5,
        "blk": 2,
        "to": 2,
        "pts": 37
      },
      "games": [
        "401909089",
        "401909093",
        "401909855"
      ],
      "nbaGames": [
        "401909089",
        "401909093",
        "401909855"
      ],
      "nbaTeam": "Philadelphia 76ers"
    },
    {
      "name": "Deni Avdija",
      "team": "hipopotamos",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 61,
      "stats": {
        "fgm": 15,
        "fga": 32,
        "ftm": 11,
        "fta": 16,
        "tpm": 3,
        "reb": 17,
        "ast": 10,
        "stl": 3,
        "blk": 0,
        "to": 5,
        "pts": 44
      },
      "games": [
        "401909841",
        "401909852"
      ],
      "nbaGames": [
        "401909841",
        "401909852"
      ],
      "nbaTeam": "Portland Trail Blazers"
    },
    {
      "name": "Naz Reid",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 95,
      "stats": {
        "fgm": 24,
        "fga": 51,
        "ftm": 0,
        "fta": 1,
        "tpm": 12,
        "reb": 26,
        "ast": 9,
        "stl": 1,
        "blk": 2,
        "to": 9,
        "pts": 60
      },
      "games": [
        "401909836",
        "401909843",
        "401909853"
      ],
      "nbaGames": [
        "401909836",
        "401909843",
        "401909853"
      ],
      "nbaTeam": "Charlotte Hornets"
    },
    {
      "name": "Cade Cunningham",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 98,
      "stats": {
        "fgm": 22,
        "fga": 45,
        "ftm": 14,
        "fta": 19,
        "tpm": 6,
        "reb": 14,
        "ast": 24,
        "stl": 4,
        "blk": 6,
        "to": 16,
        "pts": 64
      },
      "games": [
        "401909088",
        "401909847",
        "401909866"
      ],
      "nbaGames": [
        "401909088",
        "401909847",
        "401909866"
      ],
      "nbaTeam": "Detroit Pistons"
    },
    {
      "name": "Josh Giddey",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 79,
      "stats": {
        "fgm": 7,
        "fga": 26,
        "ftm": 2,
        "fta": 4,
        "tpm": 1,
        "reb": 19,
        "ast": 25,
        "stl": 1,
        "blk": 0,
        "to": 6,
        "pts": 17
      },
      "games": [
        "401909837",
        "401909848",
        "401909857"
      ],
      "nbaGames": [
        "401909837",
        "401909848",
        "401909857"
      ],
      "nbaTeam": "Chicago Bulls"
    },
    {
      "name": "Onyeka Okongwu",
      "team": "hipopotamos",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 77,
      "stats": {
        "fgm": 9,
        "fga": 24,
        "ftm": 6,
        "fta": 7,
        "tpm": 2,
        "reb": 15,
        "ast": 10,
        "stl": 1,
        "blk": 1,
        "to": 3,
        "pts": 26
      },
      "games": [
        "401909834",
        "401909843",
        "401909856"
      ],
      "nbaGames": [
        "401909834",
        "401909843",
        "401909856"
      ],
      "nbaTeam": "Atlanta Hawks"
    },
    {
      "name": "Giannis Antetokounmpo",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 88,
      "stats": {
        "fgm": 32,
        "fga": 56,
        "ftm": 20,
        "fta": 30,
        "tpm": 1,
        "reb": 24,
        "ast": 9,
        "stl": 4,
        "blk": 1,
        "to": 9,
        "pts": 85
      },
      "games": [
        "401909091",
        "401909847",
        "401909853"
      ],
      "nbaGames": [
        "401909091",
        "401909847",
        "401909853"
      ],
      "nbaTeam": "Miami Heat"
    },
    {
      "name": "Matas Buzelis",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 77,
      "stats": {
        "fgm": 11,
        "fga": 30,
        "ftm": 21,
        "fta": 25,
        "tpm": 2,
        "reb": 16,
        "ast": 5,
        "stl": 1,
        "blk": 3,
        "to": 8,
        "pts": 45
      },
      "games": [
        "401909837",
        "401909848",
        "401909857"
      ],
      "nbaGames": [
        "401909837",
        "401909848",
        "401909857"
      ],
      "nbaTeam": "Chicago Bulls"
    },
    {
      "name": "Royce O'Neale",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 45,
      "stats": {
        "fgm": 5,
        "fga": 13,
        "ftm": 0,
        "fta": 0,
        "tpm": 4,
        "reb": 7,
        "ast": 0,
        "stl": 2,
        "blk": 1,
        "to": 1,
        "pts": 14
      },
      "games": [
        "401909836",
        "401909843",
        "401909853"
      ],
      "nbaGames": [
        "401909836",
        "401909843",
        "401909853"
      ],
      "nbaTeam": "Charlotte Hornets"
    },
    {
      "name": "Donovan Mitchell",
      "team": "pelafustanes",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 70,
      "stats": {
        "fgm": 18,
        "fga": 34,
        "ftm": 14,
        "fta": 17,
        "tpm": 4,
        "reb": 15,
        "ast": 7,
        "stl": 3,
        "blk": 2,
        "to": 9,
        "pts": 54
      },
      "games": [
        "401909093",
        "401909854"
      ],
      "nbaGames": [
        "401909093",
        "401909854"
      ],
      "nbaTeam": "Cleveland Cavaliers"
    },
    {
      "name": "Alex Sarr",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 72,
      "stats": {
        "fgm": 10,
        "fga": 20,
        "ftm": 2,
        "fta": 2,
        "tpm": 1,
        "reb": 15,
        "ast": 10,
        "stl": 2,
        "blk": 3,
        "to": 3,
        "pts": 23
      },
      "games": [
        "401909835",
        "401909846",
        "401909857"
      ],
      "nbaGames": [
        "401909835",
        "401909846",
        "401909857"
      ],
      "nbaTeam": "Washington Wizards"
    },
    {
      "name": "Payton Pritchard",
      "team": "pelafustanes",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 58,
      "stats": {
        "fgm": 5,
        "fga": 14,
        "ftm": 8,
        "fta": 10,
        "tpm": 3,
        "reb": 5,
        "ast": 5,
        "stl": 0,
        "blk": 0,
        "to": 2,
        "pts": 21
      },
      "games": [
        "401909088",
        "401909095"
      ],
      "nbaGames": [
        "401909088",
        "401909095"
      ],
      "nbaTeam": "Boston Celtics"
    },
    {
      "name": "Bobby Portis",
      "team": "pelafustanes",
      "gp": 2,
      "nbaGp": 3,
      "minutes": 52,
      "stats": {
        "fgm": 7,
        "fga": 15,
        "ftm": 3,
        "fta": 3,
        "tpm": 3,
        "reb": 12,
        "ast": 1,
        "stl": 3,
        "blk": 1,
        "to": 3,
        "pts": 20
      },
      "games": [
        "401909091",
        "401909853"
      ],
      "nbaGames": [
        "401909091",
        "401909847",
        "401909853"
      ],
      "nbaTeam": "Miami Heat"
    },
    {
      "name": "Klay Thompson",
      "team": "pelafustanes",
      "gp": 2,
      "nbaGp": 3,
      "minutes": 43,
      "stats": {
        "fgm": 8,
        "fga": 18,
        "ftm": 1,
        "fta": 1,
        "tpm": 7,
        "reb": 4,
        "ast": 0,
        "stl": 1,
        "blk": 0,
        "to": 3,
        "pts": 24
      },
      "games": [
        "401909091",
        "401909853"
      ],
      "nbaGames": [
        "401909091",
        "401909847",
        "401909853"
      ],
      "nbaTeam": "Miami Heat"
    },
    {
      "name": "Malik Monk",
      "team": "pelafustanes",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 24,
      "stats": {
        "fgm": 3,
        "fga": 14,
        "ftm": 0,
        "fta": 0,
        "tpm": 0,
        "reb": 2,
        "ast": 4,
        "stl": 1,
        "blk": 0,
        "to": 3,
        "pts": 6
      },
      "games": [
        "401909852",
        "401909867"
      ],
      "nbaGames": [
        "401909852",
        "401909867"
      ],
      "nbaTeam": "Sacramento Kings"
    },
    {
      "name": "Luka Dončić",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 105,
      "stats": {
        "fgm": 32,
        "fga": 69,
        "ftm": 24,
        "fta": 27,
        "tpm": 15,
        "reb": 22,
        "ast": 24,
        "stl": 5,
        "blk": 1,
        "to": 21,
        "pts": 103
      },
      "games": [
        "401909092",
        "401909851",
        "401909861"
      ],
      "nbaGames": [
        "401909092",
        "401909851",
        "401909861"
      ],
      "nbaTeam": "Los Angeles Lakers"
    },
    {
      "name": "Brandon Miller",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 95,
      "stats": {
        "fgm": 19,
        "fga": 64,
        "ftm": 13,
        "fta": 15,
        "tpm": 7,
        "reb": 13,
        "ast": 5,
        "stl": 2,
        "blk": 3,
        "to": 10,
        "pts": 58
      },
      "games": [
        "401909836",
        "401909843",
        "401909853"
      ],
      "nbaGames": [
        "401909836",
        "401909843",
        "401909853"
      ],
      "nbaTeam": "Charlotte Hornets"
    },
    {
      "name": "OG Anunoby",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 101,
      "stats": {
        "fgm": 14,
        "fga": 34,
        "ftm": 18,
        "fta": 22,
        "tpm": 6,
        "reb": 18,
        "ast": 10,
        "stl": 1,
        "blk": 1,
        "to": 7,
        "pts": 52
      },
      "games": [
        "401909089",
        "401909095",
        "401909863"
      ],
      "nbaGames": [
        "401909089",
        "401909095",
        "401909863"
      ],
      "nbaTeam": "New York Knicks"
    },
    {
      "name": "Alperen Sengun",
      "team": "pelafustanes",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 99,
      "stats": {
        "fgm": 25,
        "fga": 47,
        "ftm": 14,
        "fta": 18,
        "tpm": 5,
        "reb": 27,
        "ast": 19,
        "stl": 1,
        "blk": 1,
        "to": 10,
        "pts": 69
      },
      "games": [
        "401909840",
        "401909096",
        "401909856"
      ],
      "nbaGames": [
        "401909840",
        "401909096",
        "401909856"
      ],
      "nbaTeam": "Houston Rockets"
    },
    {
      "name": "Jayson Tatum",
      "team": "shockers",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 75,
      "stats": {
        "fgm": 20,
        "fga": 49,
        "ftm": 6,
        "fta": 6,
        "tpm": 3,
        "reb": 13,
        "ast": 18,
        "stl": 3,
        "blk": 0,
        "to": 4,
        "pts": 49
      },
      "games": [
        "401909088",
        "401909095"
      ],
      "nbaGames": [
        "401909088",
        "401909095"
      ],
      "nbaTeam": "Boston Celtics"
    },
    {
      "name": "Scottie Barnes",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 91,
      "stats": {
        "fgm": 20,
        "fga": 57,
        "ftm": 9,
        "fta": 9,
        "tpm": 2,
        "reb": 23,
        "ast": 13,
        "stl": 6,
        "blk": 3,
        "to": 12,
        "pts": 51
      },
      "games": [
        "401909837",
        "401909846",
        "401909864"
      ],
      "nbaGames": [
        "401909837",
        "401909846",
        "401909864"
      ],
      "nbaTeam": "Toronto Raptors"
    },
    {
      "name": "Karl-Anthony Towns",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 94,
      "stats": {
        "fgm": 23,
        "fga": 37,
        "ftm": 12,
        "fta": 17,
        "tpm": 5,
        "reb": 36,
        "ast": 8,
        "stl": 2,
        "blk": 3,
        "to": 12,
        "pts": 63
      },
      "games": [
        "401909089",
        "401909095",
        "401909863"
      ],
      "nbaGames": [
        "401909089",
        "401909095",
        "401909863"
      ],
      "nbaTeam": "New York Knicks"
    },
    {
      "name": "Tari Eason",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 61,
      "stats": {
        "fgm": 13,
        "fga": 25,
        "ftm": 7,
        "fta": 7,
        "tpm": 0,
        "reb": 10,
        "ast": 0,
        "stl": 5,
        "blk": 1,
        "to": 2,
        "pts": 33
      },
      "games": [
        "401909840",
        "401909096",
        "401909856"
      ],
      "nbaGames": [
        "401909840",
        "401909096",
        "401909856"
      ],
      "nbaTeam": "Houston Rockets"
    },
    {
      "name": "Shai Gilgeous-Alexander",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 107,
      "stats": {
        "fgm": 32,
        "fga": 72,
        "ftm": 12,
        "fta": 14,
        "tpm": 7,
        "reb": 14,
        "ast": 12,
        "stl": 5,
        "blk": 5,
        "to": 4,
        "pts": 83
      },
      "games": [
        "401909090",
        "401909094",
        "401909865"
      ],
      "nbaGames": [
        "401909090",
        "401909094",
        "401909865"
      ],
      "nbaTeam": "Oklahoma City Thunder"
    },
    {
      "name": "Jaren Jackson Jr.",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 94,
      "stats": {
        "fgm": 20,
        "fga": 39,
        "ftm": 14,
        "fta": 18,
        "tpm": 5,
        "reb": 17,
        "ast": 6,
        "stl": 1,
        "blk": 5,
        "to": 12,
        "pts": 59
      },
      "games": [
        "401909838",
        "401909849",
        "401909861"
      ],
      "nbaGames": [
        "401909838",
        "401909849",
        "401909861"
      ],
      "nbaTeam": "Utah Jazz"
    },
    {
      "name": "Jalen Suggs",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 100,
      "stats": {
        "fgm": 10,
        "fga": 28,
        "ftm": 3,
        "fta": 4,
        "tpm": 1,
        "reb": 15,
        "ast": 17,
        "stl": 6,
        "blk": 1,
        "to": 9,
        "pts": 24
      },
      "games": [
        "401909834",
        "401909845",
        "401909863"
      ],
      "nbaGames": [
        "401909834",
        "401909845",
        "401909863"
      ],
      "nbaTeam": "Orlando Magic"
    },
    {
      "name": "Dyson Daniels",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 87,
      "stats": {
        "fgm": 21,
        "fga": 34,
        "ftm": 6,
        "fta": 11,
        "tpm": 1,
        "reb": 21,
        "ast": 10,
        "stl": 13,
        "blk": 1,
        "to": 3,
        "pts": 49
      },
      "games": [
        "401909834",
        "401909843",
        "401909856"
      ],
      "nbaGames": [
        "401909834",
        "401909843",
        "401909856"
      ],
      "nbaTeam": "Atlanta Hawks"
    },
    {
      "name": "Herbert Jones",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 51,
      "stats": {
        "fgm": 4,
        "fga": 9,
        "ftm": 0,
        "fta": 0,
        "tpm": 2,
        "reb": 6,
        "ast": 1,
        "stl": 2,
        "blk": 0,
        "to": 3,
        "pts": 10
      },
      "games": [
        "401909839",
        "401909849",
        "401909859"
      ],
      "nbaGames": [
        "401909839",
        "401909849",
        "401909859"
      ],
      "nbaTeam": "New Orleans Pelicans"
    },
    {
      "name": "Amen Thompson",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 108,
      "stats": {
        "fgm": 19,
        "fga": 39,
        "ftm": 13,
        "fta": 15,
        "tpm": 2,
        "reb": 31,
        "ast": 14,
        "stl": 4,
        "blk": 2,
        "to": 5,
        "pts": 53
      },
      "games": [
        "401909840",
        "401909096",
        "401909856"
      ],
      "nbaGames": [
        "401909840",
        "401909096",
        "401909856"
      ],
      "nbaTeam": "Houston Rockets"
    },
    {
      "name": "Cameron Boozer",
      "team": "shockers",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 101,
      "stats": {
        "fgm": 14,
        "fga": 49,
        "ftm": 14,
        "fta": 15,
        "tpm": 6,
        "reb": 35,
        "ast": 15,
        "stl": 2,
        "blk": 2,
        "to": 8,
        "pts": 48
      },
      "games": [
        "401909838",
        "401909850",
        "401909867"
      ],
      "nbaGames": [
        "401909838",
        "401909850",
        "401909867"
      ],
      "nbaTeam": "Memphis Grizzlies"
    },
    {
      "name": "Daniel Gafford",
      "team": "shockers",
      "gp": 2,
      "nbaGp": 3,
      "minutes": 45,
      "stats": {
        "fgm": 6,
        "fga": 10,
        "ftm": 2,
        "fta": 4,
        "tpm": 0,
        "reb": 12,
        "ast": 3,
        "stl": 4,
        "blk": 4,
        "to": 4,
        "pts": 14
      },
      "games": [
        "401909840",
        "401909858"
      ],
      "nbaGames": [
        "401909840",
        "401909844",
        "401909858"
      ],
      "nbaTeam": "Dallas Mavericks"
    },
    {
      "name": "Paolo Banchero",
      "team": "pilsens",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 67,
      "stats": {
        "fgm": 16,
        "fga": 23,
        "ftm": 14,
        "fta": 20,
        "tpm": 3,
        "reb": 13,
        "ast": 15,
        "stl": 2,
        "blk": 0,
        "to": 8,
        "pts": 49
      },
      "games": [
        "401909834",
        "401909845"
      ],
      "nbaGames": [
        "401909834",
        "401909845"
      ],
      "nbaTeam": "Orlando Magic"
    },
    {
      "name": "Jalen Brunson",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 103,
      "stats": {
        "fgm": 25,
        "fga": 64,
        "ftm": 14,
        "fta": 20,
        "tpm": 4,
        "reb": 10,
        "ast": 11,
        "stl": 2,
        "blk": 3,
        "to": 8,
        "pts": 68
      },
      "games": [
        "401909089",
        "401909095",
        "401909863"
      ],
      "nbaGames": [
        "401909089",
        "401909095",
        "401909863"
      ],
      "nbaTeam": "New York Knicks"
    },
    {
      "name": "Jaylen Brown",
      "team": "pilsens",
      "gp": 4,
      "nbaGp": 4,
      "minutes": 148,
      "stats": {
        "fgm": 31,
        "fga": 73,
        "ftm": 13,
        "fta": 18,
        "tpm": 8,
        "reb": 23,
        "ast": 19,
        "stl": 5,
        "blk": 2,
        "to": 10,
        "pts": 83
      },
      "games": [
        "401909089",
        "401909093",
        "401909855",
        "401909866"
      ],
      "nbaGames": [
        "401909089",
        "401909093",
        "401909855",
        "401909866"
      ],
      "nbaTeam": "Philadelphia 76ers"
    },
    {
      "name": "Anthony Edwards",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 94,
      "stats": {
        "fgm": 31,
        "fga": 70,
        "ftm": 11,
        "fta": 14,
        "tpm": 13,
        "reb": 15,
        "ast": 10,
        "stl": 6,
        "blk": 1,
        "to": 10,
        "pts": 86
      },
      "games": [
        "401909091",
        "401909845",
        "401909864"
      ],
      "nbaGames": [
        "401909091",
        "401909845",
        "401909864"
      ],
      "nbaTeam": "Minnesota Timberwolves"
    },
    {
      "name": "Jalen Johnson",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 95,
      "stats": {
        "fgm": 24,
        "fga": 54,
        "ftm": 15,
        "fta": 18,
        "tpm": 2,
        "reb": 30,
        "ast": 30,
        "stl": 5,
        "blk": 1,
        "to": 7,
        "pts": 65
      },
      "games": [
        "401909834",
        "401909843",
        "401909856"
      ],
      "nbaGames": [
        "401909834",
        "401909843",
        "401909856"
      ],
      "nbaTeam": "Atlanta Hawks"
    },
    {
      "name": "Jaylen Wells",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 86,
      "stats": {
        "fgm": 16,
        "fga": 26,
        "ftm": 6,
        "fta": 10,
        "tpm": 7,
        "reb": 14,
        "ast": 6,
        "stl": 6,
        "blk": 0,
        "to": 2,
        "pts": 45
      },
      "games": [
        "401909838",
        "401909850",
        "401909867"
      ],
      "nbaGames": [
        "401909838",
        "401909850",
        "401909867"
      ],
      "nbaTeam": "Memphis Grizzlies"
    },
    {
      "name": "Keldon Johnson",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 65,
      "stats": {
        "fgm": 11,
        "fga": 20,
        "ftm": 2,
        "fta": 3,
        "tpm": 1,
        "reb": 16,
        "ast": 5,
        "stl": 3,
        "blk": 0,
        "to": 3,
        "pts": 25
      },
      "games": [
        "401909090",
        "401909096",
        "401909858"
      ],
      "nbaGames": [
        "401909090",
        "401909096",
        "401909858"
      ],
      "nbaTeam": "San Antonio Spurs"
    },
    {
      "name": "Dillon Brooks",
      "team": "pilsens",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 61,
      "stats": {
        "fgm": 10,
        "fga": 23,
        "ftm": 3,
        "fta": 4,
        "tpm": 2,
        "reb": 6,
        "ast": 5,
        "stl": 0,
        "blk": 0,
        "to": 4,
        "pts": 25
      },
      "games": [
        "401909841",
        "401909860"
      ],
      "nbaGames": [
        "401909841",
        "401909860"
      ],
      "nbaTeam": "Phoenix Suns"
    },
    {
      "name": "Sandro Mamukelashvili",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 67,
      "stats": {
        "fgm": 7,
        "fga": 13,
        "ftm": 5,
        "fta": 8,
        "tpm": 2,
        "reb": 12,
        "ast": 4,
        "stl": 2,
        "blk": 1,
        "to": 0,
        "pts": 21
      },
      "games": [
        "401909092",
        "401909851",
        "401909861"
      ],
      "nbaGames": [
        "401909092",
        "401909851",
        "401909861"
      ],
      "nbaTeam": "Los Angeles Lakers"
    },
    {
      "name": "Dylan Harper",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 96,
      "stats": {
        "fgm": 24,
        "fga": 50,
        "ftm": 8,
        "fta": 9,
        "tpm": 4,
        "reb": 15,
        "ast": 9,
        "stl": 2,
        "blk": 0,
        "to": 4,
        "pts": 60
      },
      "games": [
        "401909090",
        "401909096",
        "401909858"
      ],
      "nbaGames": [
        "401909090",
        "401909096",
        "401909858"
      ],
      "nbaTeam": "San Antonio Spurs"
    },
    {
      "name": "Caleb Wilson",
      "team": "pilsens",
      "gp": 3,
      "nbaGp": 3,
      "minutes": 103,
      "stats": {
        "fgm": 24,
        "fga": 59,
        "ftm": 15,
        "fta": 19,
        "tpm": 4,
        "reb": 24,
        "ast": 4,
        "stl": 6,
        "blk": 4,
        "to": 12,
        "pts": 67
      },
      "games": [
        "401909837",
        "401909848",
        "401909857"
      ],
      "nbaGames": [
        "401909837",
        "401909848",
        "401909857"
      ],
      "nbaTeam": "Chicago Bulls"
    },
    {
      "name": "Nikola Jokić",
      "team": "pilsens",
      "gp": 2,
      "nbaGp": 2,
      "minutes": 79,
      "stats": {
        "fgm": 17,
        "fga": 42,
        "ftm": 10,
        "fta": 12,
        "tpm": 4,
        "reb": 22,
        "ast": 15,
        "stl": 3,
        "blk": 4,
        "to": 8,
        "pts": 48
      },
      "games": [
        "401909094",
        "401909859"
      ],
      "nbaGames": [
        "401909094",
        "401909859"
      ],
      "nbaTeam": "Denver Nuggets"
    },
    {
      "name": "Kon Knueppel",
      "team": "shockers",
      "gp": null,
      "minutes": null,
      "stats": null,
      "games": []
    },
    {
      "name": "AJ Dybantsa",
      "team": "pilsens",
      "gp": null,
      "minutes": null,
      "stats": null,
      "games": []
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
      "id": "401909091",
      "date": "2026-10-21T23:30Z",
      "name": "Minnesota Timberwolves at Miami Heat",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909091",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909091"
    },
    {
      "id": "401909092",
      "date": "2026-10-22T02:00Z",
      "name": "Golden State Warriors at Los Angeles Lakers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909092",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909092"
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
    },
    {
      "id": "401909095",
      "date": "2026-10-23T23:00Z",
      "name": "New York Knicks at Boston Celtics",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909095",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909095"
    },
    {
      "id": "401909096",
      "date": "2026-10-24T01:30Z",
      "name": "Houston Rockets at San Antonio Spurs",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909096",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909096"
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
      "id": "401909843",
      "date": "2026-10-23T23:00Z",
      "name": "Atlanta Hawks at Charlotte Hornets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909843",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909843"
    },
    {
      "id": "401909844",
      "date": "2026-10-23T23:00Z",
      "name": "Dallas Mavericks at Indiana Pacers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909844",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909844"
    },
    {
      "id": "401909845",
      "date": "2026-10-23T23:00Z",
      "name": "Minnesota Timberwolves at Orlando Magic",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909845",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909845"
    },
    {
      "id": "401909846",
      "date": "2026-10-23T23:00Z",
      "name": "Toronto Raptors at Washington Wizards",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909846",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909846"
    },
    {
      "id": "401909847",
      "date": "2026-10-24T00:00Z",
      "name": "Detroit Pistons at Miami Heat",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909847",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909847"
    },
    {
      "id": "401909848",
      "date": "2026-10-23T20:00Z",
      "name": "Chicago Bulls at Milwaukee Bucks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909848",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909848"
    },
    {
      "id": "401909849",
      "date": "2026-10-24T01:30Z",
      "name": "New Orleans Pelicans at Utah Jazz",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909849",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909849"
    },
    {
      "id": "401909850",
      "date": "2026-10-24T02:00Z",
      "name": "Memphis Grizzlies at Golden State Warriors",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909850",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909850"
    },
    {
      "id": "401909851",
      "date": "2026-10-24T02:00Z",
      "name": "LA Clippers at Los Angeles Lakers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909851",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909851"
    },
    {
      "id": "401909852",
      "date": "2026-10-24T02:00Z",
      "name": "Portland Trail Blazers at Sacramento Kings",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909852",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909852"
    },
    {
      "id": "401909853",
      "date": "2026-10-24T22:00Z",
      "name": "Miami Heat at Charlotte Hornets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909853",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909853"
    },
    {
      "id": "401909854",
      "date": "2026-10-24T23:30Z",
      "name": "Brooklyn Nets at Cleveland Cavaliers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909854",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909854"
    },
    {
      "id": "401909855",
      "date": "2026-10-24T23:30Z",
      "name": "Milwaukee Bucks at Philadelphia 76ers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909855",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909855"
    },
    {
      "id": "401909856",
      "date": "2026-10-25T00:30Z",
      "name": "Houston Rockets at Atlanta Hawks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909856",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909856"
    },
    {
      "id": "401909857",
      "date": "2026-10-25T00:00Z",
      "name": "Washington Wizards at Chicago Bulls",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909857",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909857"
    },
    {
      "id": "401909858",
      "date": "2026-10-25T00:00Z",
      "name": "San Antonio Spurs at Dallas Mavericks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909858",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909858"
    },
    {
      "id": "401909859",
      "date": "2026-10-25T01:00Z",
      "name": "New Orleans Pelicans at Denver Nuggets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909859",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909859"
    },
    {
      "id": "401909860",
      "date": "2026-10-25T02:00Z",
      "name": "Golden State Warriors at Phoenix Suns",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909860",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909860"
    },
    {
      "id": "401909861",
      "date": "2026-10-25T21:00Z",
      "name": "Los Angeles Lakers at Utah Jazz",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909861",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909861"
    },
    {
      "id": "401909863",
      "date": "2026-10-25T23:00Z",
      "name": "Orlando Magic at New York Knicks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909863",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909863"
    },
    {
      "id": "401909864",
      "date": "2026-10-25T23:00Z",
      "name": "Toronto Raptors at Minnesota Timberwolves",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909864",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909864"
    },
    {
      "id": "401909865",
      "date": "2026-10-25T23:00Z",
      "name": "LA Clippers at Oklahoma City Thunder",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909865",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909865"
    },
    {
      "id": "401909866",
      "date": "2026-10-25T23:30Z",
      "name": "Detroit Pistons at Philadelphia 76ers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909866",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909866"
    },
    {
      "id": "401909867",
      "date": "2026-10-26T01:00Z",
      "name": "Memphis Grizzlies at Sacramento Kings",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909867",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909867"
    }
  ],
  "watchlist": [
    {
      "name": "Cooper Flagg",
      "nbaTeam": "Dallas Mavericks",
      "gp": 2,
      "games": [
        "401909840",
        "401909844"
      ],
      "minutes": 50,
      "stats": {
        "fgm": 14,
        "fga": 23,
        "ftm": 15,
        "fta": 17,
        "tpm": 3,
        "reb": 10,
        "ast": 8,
        "stl": 6,
        "blk": 2,
        "to": 7,
        "pts": 46
      },
      "tier": "A+"
    },
    {
      "name": "Franz Wagner",
      "nbaTeam": "Orlando Magic",
      "gp": 3,
      "games": [
        "401909834",
        "401909845",
        "401909863"
      ],
      "minutes": 99,
      "stats": {
        "fgm": 25,
        "fga": 57,
        "ftm": 10,
        "fta": 15,
        "tpm": 3,
        "reb": 25,
        "ast": 19,
        "stl": 2,
        "blk": 0,
        "to": 12,
        "pts": 63
      },
      "tier": "A"
    },
    {
      "name": "Nickeil Alexander-Walker",
      "nbaTeam": "Atlanta Hawks",
      "gp": 3,
      "games": [
        "401909834",
        "401909843",
        "401909856"
      ],
      "minutes": 89,
      "stats": {
        "fgm": 20,
        "fga": 43,
        "ftm": 12,
        "fta": 16,
        "tpm": 11,
        "reb": 12,
        "ast": 12,
        "stl": 6,
        "blk": 1,
        "to": 5,
        "pts": 63
      },
      "tier": "A"
    },
    {
      "name": "Zach LaVine",
      "nbaTeam": "Sacramento Kings",
      "gp": 3,
      "games": [
        "401909842",
        "401909852",
        "401909867"
      ],
      "minutes": 113,
      "stats": {
        "fgm": 29,
        "fga": 59,
        "ftm": 20,
        "fta": 23,
        "tpm": 9,
        "reb": 11,
        "ast": 10,
        "stl": 4,
        "blk": 1,
        "to": 10,
        "pts": 87
      },
      "tier": "B"
    },
    {
      "name": "Duncan Robinson",
      "nbaTeam": "Detroit Pistons",
      "gp": 3,
      "games": [
        "401909088",
        "401909847",
        "401909866"
      ],
      "minutes": 88,
      "stats": {
        "fgm": 16,
        "fga": 34,
        "ftm": 12,
        "fta": 15,
        "tpm": 15,
        "reb": 6,
        "ast": 7,
        "stl": 3,
        "blk": 0,
        "to": 5,
        "pts": 59
      },
      "tier": null
    },
    {
      "name": "Brook Lopez",
      "nbaTeam": "LA Clippers",
      "gp": 3,
      "games": [
        "401909842",
        "401909851",
        "401909865"
      ],
      "minutes": 70,
      "stats": {
        "fgm": 20,
        "fga": 31,
        "ftm": 8,
        "fta": 10,
        "tpm": 6,
        "reb": 16,
        "ast": 3,
        "stl": 1,
        "blk": 5,
        "to": 4,
        "pts": 54
      },
      "tier": null
    },
    {
      "name": "Wendell Carter Jr.",
      "nbaTeam": "Orlando Magic",
      "gp": 3,
      "games": [
        "401909834",
        "401909845",
        "401909863"
      ],
      "minutes": 93,
      "stats": {
        "fgm": 19,
        "fga": 25,
        "ftm": 9,
        "fta": 10,
        "tpm": 4,
        "reb": 26,
        "ast": 3,
        "stl": 3,
        "blk": 3,
        "to": 4,
        "pts": 51
      },
      "tier": null
    }
  ]
},
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
  },
{
  "id": "semana-2-final-2026-11-01",
  "status": "final",
  "season": "2026–27",
  "sourceMode": "espn",
  "from": "2026-10-26",
  "through": "2026-11-01",
  "updatedDate": "2026-11-02",
  "updatedAt": "2026-11-02T16:03:27.476Z",
  "sourceSnapshot": "./assets/cortes/espn/20261102T160327.476Z.json",
  "source": "Totales finales oficiales de ESPN Fantasy. Las cifras individuales son una reconstrucción con actas NBA: sus sumas reproducen las 36 cifras del cierre, incluidos ambos porcentajes calculados con tiros convertidos e intentados. No se dispone del detalle oficial de alineaciones históricas; la coincidencia numérica no determina el motivo de cada diferencia entre NBA y fantasy.",
  "computationNote": "PJ NBA incluye todas las actuaciones de la semana. En Mequetrefes, Luka Dončić, OG Anunoby, Payton Pritchard y Malik Monk tienen actas NBA que no entran en la combinación que reproduce el cierre; en Hipopotamos ocurre con Toumani Camara y Ace Bailey. No se atribuye un motivo de alineación a esas diferencias. Los jugadores sin actuación localizada figuran con cero partidos.",
  "teamTotals": {
    "hipopotamos": {
      "fgp": 0.48155738,
      "ftp": 0.74789916,
      "tpm": 62,
      "reb": 260,
      "ast": 115,
      "stl": 36,
      "blk": 41,
      "to": 70,
      "pts": 621
    },
    "shockers": {
      "fgp": 0.4875717,
      "ftp": 0.80473373,
      "tpm": 48,
      "reb": 243,
      "ast": 149,
      "stl": 40,
      "blk": 24,
      "to": 81,
      "pts": 694
    },
    "pilsens": {
      "fgp": 0.4790287,
      "ftp": 0.79674797,
      "tpm": 51,
      "reb": 215,
      "ast": 155,
      "stl": 35,
      "blk": 20,
      "to": 85,
      "pts": 583
    },
    "pelafustanes": {
      "fgp": 0.47148289,
      "ftp": 0.80147059,
      "tpm": 88,
      "reb": 252,
      "ast": 137,
      "stl": 43,
      "blk": 29,
      "to": 82,
      "pts": 693
    }
  },
  "players": [
    {
      "name": "Shai Gilgeous-Alexander",
      "team": "shockers",
      "espnId": 4278073,
      "nbaTeamId": 25,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 89,
      "stats": {
        "fgm": 28,
        "fga": 57,
        "ftm": 12,
        "fta": 14,
        "tpm": 5,
        "reb": 13,
        "ast": 8,
        "stl": 2,
        "blk": 2,
        "to": 7,
        "pts": 73
      },
      "games": [
        "401909873",
        "401909891",
        "401909902"
      ],
      "nbaGames": [
        "401909873",
        "401909891",
        "401909902"
      ],
      "nbaStats": {
        "pts": 73,
        "reb": 13,
        "ast": 8,
        "stl": 2,
        "blk": 2,
        "to": 7,
        "min": 89,
        "fgm": 28,
        "fga": 57,
        "tpm": 5,
        "tpa": 17,
        "ftm": 12,
        "fta": 14
      }
    },
    {
      "name": "Jayson Tatum",
      "team": "shockers",
      "espnId": 4065648,
      "nbaTeamId": 2,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 139,
      "stats": {
        "fgm": 34,
        "fga": 76,
        "ftm": 46,
        "fta": 55,
        "tpm": 7,
        "reb": 23,
        "ast": 28,
        "stl": 1,
        "blk": 3,
        "to": 12,
        "pts": 121
      },
      "games": [
        "401909278",
        "401909870",
        "401909877",
        "401909903"
      ],
      "nbaGames": [
        "401909278",
        "401909870",
        "401909877",
        "401909903"
      ],
      "nbaStats": {
        "pts": 121,
        "reb": 23,
        "ast": 28,
        "stl": 1,
        "blk": 3,
        "to": 12,
        "min": 139,
        "fgm": 34,
        "fga": 76,
        "tpm": 7,
        "tpa": 24,
        "ftm": 46,
        "fta": 55
      }
    },
    {
      "name": "Scottie Barnes",
      "team": "shockers",
      "espnId": 4433134,
      "nbaTeamId": 28,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 106,
      "stats": {
        "fgm": 41,
        "fga": 71,
        "ftm": 15,
        "fta": 22,
        "tpm": 1,
        "reb": 17,
        "ast": 14,
        "stl": 7,
        "blk": 2,
        "to": 11,
        "pts": 98
      },
      "games": [
        "401909281",
        "401909885",
        "401909906"
      ],
      "nbaGames": [
        "401909281",
        "401909885",
        "401909906"
      ],
      "nbaStats": {
        "pts": 98,
        "reb": 17,
        "ast": 14,
        "stl": 7,
        "blk": 2,
        "to": 11,
        "min": 106,
        "fgm": 41,
        "fga": 71,
        "tpm": 1,
        "tpa": 7,
        "ftm": 15,
        "fta": 22
      }
    },
    {
      "name": "Karl-Anthony Towns",
      "team": "shockers",
      "espnId": 3136195,
      "nbaTeamId": 18,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 96,
      "stats": {
        "fgm": 27,
        "fga": 50,
        "ftm": 7,
        "fta": 7,
        "tpm": 7,
        "reb": 45,
        "ast": 11,
        "stl": 1,
        "blk": 1,
        "to": 13,
        "pts": 68
      },
      "games": [
        "401909280",
        "401909878",
        "401909886"
      ],
      "nbaGames": [
        "401909280",
        "401909878",
        "401909886"
      ],
      "nbaStats": {
        "pts": 68,
        "reb": 45,
        "ast": 11,
        "stl": 1,
        "blk": 1,
        "to": 13,
        "min": 96,
        "fgm": 27,
        "fga": 50,
        "tpm": 7,
        "tpa": 18,
        "ftm": 7,
        "fta": 7
      }
    },
    {
      "name": "Jaren Jackson Jr.",
      "team": "shockers",
      "espnId": 4277961,
      "nbaTeamId": 26,
      "gp": 1,
      "nbaGp": 1,
      "minutes": 10,
      "stats": {
        "fgm": 2,
        "fga": 5,
        "ftm": 2,
        "fta": 3,
        "tpm": 0,
        "reb": 3,
        "ast": 2,
        "stl": 0,
        "blk": 0,
        "to": 0,
        "pts": 6
      },
      "games": [
        "401909875"
      ],
      "nbaGames": [
        "401909875"
      ],
      "nbaStats": {
        "pts": 6,
        "reb": 3,
        "ast": 2,
        "stl": 0,
        "blk": 0,
        "to": 0,
        "min": 10,
        "fgm": 2,
        "fga": 5,
        "tpm": 0,
        "tpa": 2,
        "ftm": 2,
        "fta": 3
      }
    },
    {
      "name": "Amen Thompson",
      "team": "shockers",
      "espnId": 4684740,
      "nbaTeamId": 10,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 128,
      "stats": {
        "fgm": 26,
        "fga": 47,
        "ftm": 9,
        "fta": 14,
        "tpm": 0,
        "reb": 15,
        "ast": 12,
        "stl": 6,
        "blk": 0,
        "to": 6,
        "pts": 61
      },
      "games": [
        "401909283",
        "401909874",
        "401909887",
        "401909902"
      ],
      "nbaGames": [
        "401909283",
        "401909874",
        "401909887",
        "401909902"
      ],
      "nbaStats": {
        "pts": 61,
        "reb": 15,
        "ast": 12,
        "stl": 6,
        "blk": 0,
        "to": 6,
        "min": 128,
        "fgm": 26,
        "fga": 47,
        "tpm": 0,
        "tpa": 3,
        "ftm": 9,
        "fta": 14
      }
    },
    {
      "name": "Dyson Daniels",
      "team": "shockers",
      "espnId": 4869342,
      "nbaTeamId": 1,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 115,
      "stats": {
        "fgm": 10,
        "fga": 29,
        "ftm": 3,
        "fta": 5,
        "tpm": 0,
        "reb": 14,
        "ast": 19,
        "stl": 8,
        "blk": 1,
        "to": 3,
        "pts": 23
      },
      "games": [
        "401909874",
        "401909881",
        "401909893",
        "401909898"
      ],
      "nbaGames": [
        "401909874",
        "401909881",
        "401909893",
        "401909898"
      ],
      "nbaStats": {
        "pts": 23,
        "reb": 14,
        "ast": 19,
        "stl": 8,
        "blk": 1,
        "to": 3,
        "min": 115,
        "fgm": 10,
        "fga": 29,
        "tpm": 0,
        "tpa": 5,
        "ftm": 3,
        "fta": 5
      }
    },
    {
      "name": "Kon Knueppel",
      "team": "shockers",
      "espnId": 5061575,
      "nbaTeamId": 30,
      "gp": 0,
      "nbaGp": 0,
      "minutes": 0,
      "stats": {
        "fgm": 0,
        "fga": 0,
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
      "games": [],
      "nbaGames": [],
      "nbaStats": {
        "fgm": 0,
        "fga": 0,
        "ftm": 0,
        "fta": 0,
        "tpm": 0,
        "reb": 0,
        "ast": 0,
        "stl": 0,
        "blk": 0,
        "to": 0,
        "pts": 0
      }
    },
    {
      "name": "Cameron Boozer",
      "team": "shockers",
      "espnId": 5041935,
      "nbaTeamId": 29,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 85,
      "stats": {
        "fgm": 18,
        "fga": 36,
        "ftm": 14,
        "fta": 14,
        "tpm": 8,
        "reb": 28,
        "ast": 19,
        "stl": 0,
        "blk": 2,
        "to": 10,
        "pts": 58
      },
      "games": [
        "401909875",
        "401909895",
        "401909899"
      ],
      "nbaGames": [
        "401909875",
        "401909895",
        "401909899"
      ],
      "nbaStats": {
        "pts": 58,
        "reb": 28,
        "ast": 19,
        "stl": 0,
        "blk": 2,
        "to": 10,
        "min": 85,
        "fgm": 18,
        "fga": 36,
        "tpm": 8,
        "tpa": 18,
        "ftm": 14,
        "fta": 14
      }
    },
    {
      "name": "Tari Eason",
      "team": "shockers",
      "espnId": 4433192,
      "nbaTeamId": 10,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 109,
      "stats": {
        "fgm": 13,
        "fga": 33,
        "ftm": 7,
        "fta": 8,
        "tpm": 4,
        "reb": 33,
        "ast": 7,
        "stl": 3,
        "blk": 8,
        "to": 6,
        "pts": 37
      },
      "games": [
        "401909283",
        "401909874",
        "401909887",
        "401909902"
      ],
      "nbaGames": [
        "401909283",
        "401909874",
        "401909887",
        "401909902"
      ],
      "nbaStats": {
        "pts": 37,
        "reb": 33,
        "ast": 7,
        "stl": 3,
        "blk": 8,
        "to": 6,
        "min": 109,
        "fgm": 13,
        "fga": 33,
        "tpm": 4,
        "tpa": 14,
        "ftm": 7,
        "fta": 8
      }
    },
    {
      "name": "Fred VanVleet",
      "team": "shockers",
      "espnId": 2991230,
      "nbaTeamId": 10,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 91,
      "stats": {
        "fgm": 15,
        "fga": 38,
        "ftm": 8,
        "fta": 9,
        "tpm": 7,
        "reb": 15,
        "ast": 16,
        "stl": 3,
        "blk": 0,
        "to": 5,
        "pts": 45
      },
      "games": [
        "401909283",
        "401909874",
        "401909887"
      ],
      "nbaGames": [
        "401909283",
        "401909874",
        "401909887"
      ],
      "nbaStats": {
        "pts": 45,
        "reb": 15,
        "ast": 16,
        "stl": 3,
        "blk": 0,
        "to": 5,
        "min": 91,
        "fgm": 15,
        "fga": 38,
        "tpm": 7,
        "tpa": 22,
        "ftm": 8,
        "fta": 9
      }
    },
    {
      "name": "Paul Reed",
      "team": "shockers",
      "espnId": 4278562,
      "nbaTeamId": 8,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 95,
      "stats": {
        "fgm": 20,
        "fga": 31,
        "ftm": 7,
        "fta": 8,
        "tpm": 3,
        "reb": 17,
        "ast": 4,
        "stl": 6,
        "blk": 2,
        "to": 7,
        "pts": 50
      },
      "games": [
        "401909279",
        "401909878",
        "401909883"
      ],
      "nbaGames": [
        "401909279",
        "401909878",
        "401909883"
      ],
      "nbaStats": {
        "pts": 50,
        "reb": 17,
        "ast": 4,
        "stl": 6,
        "blk": 2,
        "to": 7,
        "min": 95,
        "fgm": 20,
        "fga": 31,
        "tpm": 3,
        "tpa": 5,
        "ftm": 7,
        "fta": 8
      }
    },
    {
      "name": "Jonathan Kuminga",
      "team": "shockers",
      "espnId": 4433247,
      "nbaTeamId": 16,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 130,
      "stats": {
        "fgm": 21,
        "fga": 50,
        "ftm": 6,
        "fta": 10,
        "tpm": 6,
        "reb": 20,
        "ast": 9,
        "stl": 3,
        "blk": 3,
        "to": 1,
        "pts": 54
      },
      "games": [
        "401909284",
        "401909869",
        "401909888",
        "401909901"
      ],
      "nbaGames": [
        "401909284",
        "401909869",
        "401909888",
        "401909901"
      ],
      "nbaStats": {
        "pts": 54,
        "reb": 20,
        "ast": 9,
        "stl": 3,
        "blk": 3,
        "to": 1,
        "min": 130,
        "fgm": 21,
        "fga": 50,
        "tpm": 6,
        "tpa": 19,
        "ftm": 6,
        "fta": 10
      }
    },
    {
      "name": "Nikola Jokić",
      "team": "pilsens",
      "espnId": 3112335,
      "nbaTeamId": 7,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 106,
      "stats": {
        "fgm": 24,
        "fga": 44,
        "ftm": 9,
        "fta": 10,
        "tpm": 1,
        "reb": 27,
        "ast": 31,
        "stl": 5,
        "blk": 3,
        "to": 13,
        "pts": 58
      },
      "games": [
        "401909286",
        "401909876",
        "401909889"
      ],
      "nbaGames": [
        "401909286",
        "401909876",
        "401909889"
      ],
      "nbaStats": {
        "pts": 58,
        "reb": 27,
        "ast": 31,
        "stl": 5,
        "blk": 3,
        "to": 13,
        "min": 106,
        "fgm": 24,
        "fga": 44,
        "tpm": 1,
        "tpa": 7,
        "ftm": 9,
        "fta": 10
      }
    },
    {
      "name": "Anthony Edwards",
      "team": "pilsens",
      "espnId": 4594268,
      "nbaTeamId": 16,
      "gp": 1,
      "nbaGp": 1,
      "minutes": 41,
      "stats": {
        "fgm": 19,
        "fga": 34,
        "ftm": 4,
        "fta": 6,
        "tpm": 5,
        "reb": 4,
        "ast": 4,
        "stl": 2,
        "blk": 2,
        "to": 4,
        "pts": 47
      },
      "games": [
        "401909869"
      ],
      "nbaGames": [
        "401909869"
      ],
      "nbaStats": {
        "pts": 47,
        "reb": 4,
        "ast": 4,
        "stl": 2,
        "blk": 2,
        "to": 4,
        "min": 41,
        "fgm": 19,
        "fga": 34,
        "tpm": 5,
        "tpa": 15,
        "ftm": 4,
        "fta": 6
      }
    },
    {
      "name": "Jalen Johnson",
      "team": "pilsens",
      "espnId": 4701230,
      "nbaTeamId": 1,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 134,
      "stats": {
        "fgm": 21,
        "fga": 53,
        "ftm": 15,
        "fta": 18,
        "tpm": 6,
        "reb": 33,
        "ast": 25,
        "stl": 1,
        "blk": 4,
        "to": 15,
        "pts": 63
      },
      "games": [
        "401909874",
        "401909881",
        "401909893",
        "401909898"
      ],
      "nbaGames": [
        "401909874",
        "401909881",
        "401909893",
        "401909898"
      ],
      "nbaStats": {
        "pts": 63,
        "reb": 33,
        "ast": 25,
        "stl": 1,
        "blk": 4,
        "to": 15,
        "min": 134,
        "fgm": 21,
        "fga": 53,
        "tpm": 6,
        "tpa": 17,
        "ftm": 15,
        "fta": 18
      }
    },
    {
      "name": "Jaylen Brown",
      "team": "pilsens",
      "espnId": 3917376,
      "nbaTeamId": 20,
      "gp": 2,
      "nbaGp": 2,
      "minutes": 72,
      "stats": {
        "fgm": 13,
        "fga": 28,
        "ftm": 9,
        "fta": 12,
        "tpm": 1,
        "reb": 14,
        "ast": 6,
        "stl": 3,
        "blk": 1,
        "to": 8,
        "pts": 36
      },
      "games": [
        "401909884",
        "401909897"
      ],
      "nbaGames": [
        "401909884",
        "401909897"
      ],
      "nbaStats": {
        "pts": 36,
        "reb": 14,
        "ast": 6,
        "stl": 3,
        "blk": 1,
        "to": 8,
        "min": 72,
        "fgm": 13,
        "fga": 28,
        "tpm": 1,
        "tpa": 5,
        "ftm": 9,
        "fta": 12
      }
    },
    {
      "name": "Dylan Harper",
      "team": "pilsens",
      "espnId": 5037871,
      "nbaTeamId": 24,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 106,
      "stats": {
        "fgm": 19,
        "fga": 41,
        "ftm": 9,
        "fta": 10,
        "tpm": 4,
        "reb": 18,
        "ast": 20,
        "stl": 4,
        "blk": 0,
        "to": 6,
        "pts": 51
      },
      "games": [
        "401909879",
        "401909890",
        "401909901"
      ],
      "nbaGames": [
        "401909879",
        "401909890",
        "401909901"
      ],
      "nbaStats": {
        "pts": 51,
        "reb": 18,
        "ast": 20,
        "stl": 4,
        "blk": 0,
        "to": 6,
        "min": 106,
        "fgm": 19,
        "fga": 41,
        "tpm": 4,
        "tpa": 9,
        "ftm": 9,
        "fta": 10
      }
    },
    {
      "name": "AJ Dybantsa",
      "team": "pilsens",
      "espnId": 5142718,
      "nbaTeamId": 27,
      "gp": 2,
      "nbaGp": 2,
      "minutes": 57,
      "stats": {
        "fgm": 13,
        "fga": 23,
        "ftm": 8,
        "fta": 9,
        "tpm": 2,
        "reb": 9,
        "ast": 3,
        "stl": 1,
        "blk": 0,
        "to": 3,
        "pts": 36
      },
      "games": [
        "401909277",
        "401909882"
      ],
      "nbaGames": [
        "401909277",
        "401909882"
      ],
      "nbaStats": {
        "pts": 36,
        "reb": 9,
        "ast": 3,
        "stl": 1,
        "blk": 0,
        "to": 3,
        "min": 57,
        "fgm": 13,
        "fga": 23,
        "tpm": 2,
        "tpa": 7,
        "ftm": 8,
        "fta": 9
      }
    },
    {
      "name": "Caleb Wilson",
      "team": "pilsens",
      "espnId": 5095151,
      "nbaTeamId": 4,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 101,
      "stats": {
        "fgm": 21,
        "fga": 49,
        "ftm": 8,
        "fta": 14,
        "tpm": 10,
        "reb": 16,
        "ast": 11,
        "stl": 4,
        "blk": 5,
        "to": 5,
        "pts": 60
      },
      "games": [
        "401909278",
        "401909870",
        "401909886"
      ],
      "nbaGames": [
        "401909278",
        "401909870",
        "401909886"
      ],
      "nbaStats": {
        "pts": 60,
        "reb": 16,
        "ast": 11,
        "stl": 4,
        "blk": 5,
        "to": 5,
        "min": 101,
        "fgm": 21,
        "fga": 49,
        "tpm": 10,
        "tpa": 24,
        "ftm": 8,
        "fta": 14
      }
    },
    {
      "name": "Sandro Mamukelashvili",
      "team": "pilsens",
      "espnId": 4278580,
      "nbaTeamId": 13,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 98,
      "stats": {
        "fgm": 18,
        "fga": 37,
        "ftm": 4,
        "fta": 4,
        "tpm": 5,
        "reb": 20,
        "ast": 6,
        "stl": 3,
        "blk": 3,
        "to": 4,
        "pts": 45
      },
      "games": [
        "401909285",
        "401909880",
        "401909892",
        "401909906"
      ],
      "nbaGames": [
        "401909285",
        "401909880",
        "401909892",
        "401909906"
      ],
      "nbaStats": {
        "pts": 45,
        "reb": 20,
        "ast": 6,
        "stl": 3,
        "blk": 3,
        "to": 4,
        "min": 98,
        "fgm": 18,
        "fga": 37,
        "tpm": 5,
        "tpa": 16,
        "ftm": 4,
        "fta": 4
      }
    },
    {
      "name": "Jaylen Wells",
      "team": "pilsens",
      "espnId": 5112087,
      "nbaTeamId": 29,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 77,
      "stats": {
        "fgm": 11,
        "fga": 23,
        "ftm": 2,
        "fta": 2,
        "tpm": 4,
        "reb": 6,
        "ast": 0,
        "stl": 1,
        "blk": 0,
        "to": 1,
        "pts": 28
      },
      "games": [
        "401909875",
        "401909895",
        "401909899"
      ],
      "nbaGames": [
        "401909875",
        "401909895",
        "401909899"
      ],
      "nbaStats": {
        "pts": 28,
        "reb": 6,
        "ast": 0,
        "stl": 1,
        "blk": 0,
        "to": 1,
        "min": 77,
        "fgm": 11,
        "fga": 23,
        "tpm": 4,
        "tpa": 15,
        "ftm": 2,
        "fta": 2
      }
    },
    {
      "name": "Keldon Johnson",
      "team": "pilsens",
      "espnId": 4395723,
      "nbaTeamId": 24,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 69,
      "stats": {
        "fgm": 10,
        "fga": 21,
        "ftm": 5,
        "fta": 7,
        "tpm": 0,
        "reb": 16,
        "ast": 2,
        "stl": 1,
        "blk": 0,
        "to": 1,
        "pts": 25
      },
      "games": [
        "401909879",
        "401909890",
        "401909901"
      ],
      "nbaGames": [
        "401909879",
        "401909890",
        "401909901"
      ],
      "nbaStats": {
        "pts": 25,
        "reb": 16,
        "ast": 2,
        "stl": 1,
        "blk": 0,
        "to": 1,
        "min": 69,
        "fgm": 10,
        "fga": 21,
        "tpm": 0,
        "tpa": 2,
        "ftm": 5,
        "fta": 7
      }
    },
    {
      "name": "Dillon Brooks",
      "team": "pilsens",
      "espnId": 3155526,
      "nbaTeamId": 21,
      "gp": 2,
      "nbaGp": 2,
      "minutes": 54,
      "stats": {
        "fgm": 13,
        "fga": 26,
        "ftm": 8,
        "fta": 12,
        "tpm": 7,
        "reb": 6,
        "ast": 7,
        "stl": 4,
        "blk": 1,
        "to": 1,
        "pts": 41
      },
      "games": [
        "401909286",
        "401909873"
      ],
      "nbaGames": [
        "401909286",
        "401909873"
      ],
      "nbaStats": {
        "pts": 41,
        "reb": 6,
        "ast": 7,
        "stl": 4,
        "blk": 1,
        "to": 1,
        "min": 54,
        "fgm": 13,
        "fga": 26,
        "tpm": 7,
        "tpa": 16,
        "ftm": 8,
        "fta": 12
      }
    },
    {
      "name": "Domantas Sabonis",
      "team": "pilsens",
      "espnId": 3155942,
      "nbaTeamId": 23,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 115,
      "stats": {
        "fgm": 17,
        "fga": 28,
        "ftm": 6,
        "fta": 8,
        "tpm": 0,
        "reb": 43,
        "ast": 23,
        "stl": 3,
        "blk": 1,
        "to": 11,
        "pts": 40
      },
      "games": [
        "401909879",
        "401909894",
        "401909899"
      ],
      "nbaGames": [
        "401909879",
        "401909894",
        "401909899"
      ],
      "nbaStats": {
        "pts": 40,
        "reb": 43,
        "ast": 23,
        "stl": 3,
        "blk": 1,
        "to": 11,
        "min": 115,
        "fgm": 17,
        "fga": 28,
        "tpm": 0,
        "tpa": 1,
        "ftm": 6,
        "fta": 8
      }
    },
    {
      "name": "Darius Garland",
      "team": "pilsens",
      "espnId": 4396907,
      "nbaTeamId": 12,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 90,
      "stats": {
        "fgm": 18,
        "fga": 46,
        "ftm": 11,
        "fta": 11,
        "tpm": 6,
        "reb": 3,
        "ast": 17,
        "stl": 3,
        "blk": 0,
        "to": 13,
        "pts": 53
      },
      "games": [
        "401909284",
        "401909892",
        "401909905"
      ],
      "nbaGames": [
        "401909284",
        "401909892",
        "401909905"
      ],
      "nbaStats": {
        "pts": 53,
        "reb": 3,
        "ast": 17,
        "stl": 3,
        "blk": 0,
        "to": 13,
        "min": 90,
        "fgm": 18,
        "fga": 46,
        "tpm": 6,
        "tpa": 18,
        "ftm": 11,
        "fta": 11
      }
    },
    {
      "name": "Luka Dončić",
      "team": "pelafustanes",
      "espnId": 3945274,
      "nbaTeamId": 13,
      "gp": 2,
      "nbaGp": 3,
      "minutes": 72,
      "stats": {
        "fgm": 24,
        "fga": 50,
        "ftm": 20,
        "fta": 21,
        "tpm": 14,
        "reb": 22,
        "ast": 11,
        "stl": 6,
        "blk": 3,
        "to": 10,
        "pts": 82
      },
      "games": [
        "401909285",
        "401909906"
      ],
      "nbaGames": [
        "401909285",
        "401909880",
        "401909906"
      ],
      "nbaStats": {
        "pts": 123,
        "reb": 27,
        "ast": 20,
        "stl": 6,
        "blk": 4,
        "to": 12,
        "min": 109,
        "fgm": 36,
        "fga": 72,
        "tpm": 20,
        "tpa": 43,
        "ftm": 31,
        "fta": 34
      }
    },
    {
      "name": "Giannis Antetokounmpo",
      "team": "pelafustanes",
      "espnId": 3032977,
      "nbaTeamId": 14,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 101,
      "stats": {
        "fgm": 36,
        "fga": 60,
        "ftm": 9,
        "fta": 18,
        "tpm": 3,
        "reb": 50,
        "ast": 24,
        "stl": 1,
        "blk": 3,
        "to": 8,
        "pts": 84
      },
      "games": [
        "401909282",
        "401909871",
        "401909881"
      ],
      "nbaGames": [
        "401909282",
        "401909871",
        "401909881"
      ],
      "nbaStats": {
        "pts": 84,
        "reb": 50,
        "ast": 24,
        "stl": 1,
        "blk": 3,
        "to": 8,
        "min": 101,
        "fgm": 36,
        "fga": 60,
        "tpm": 3,
        "tpa": 8,
        "ftm": 9,
        "fta": 18
      }
    },
    {
      "name": "Donovan Mitchell",
      "team": "pelafustanes",
      "espnId": 3908809,
      "nbaTeamId": 5,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 126,
      "stats": {
        "fgm": 28,
        "fga": 60,
        "ftm": 16,
        "fta": 17,
        "tpm": 10,
        "reb": 17,
        "ast": 20,
        "stl": 5,
        "blk": 1,
        "to": 10,
        "pts": 82
      },
      "games": [
        "401909869",
        "401909882",
        "401909893",
        "401909900"
      ],
      "nbaGames": [
        "401909869",
        "401909882",
        "401909893",
        "401909900"
      ],
      "nbaStats": {
        "pts": 82,
        "reb": 17,
        "ast": 20,
        "stl": 5,
        "blk": 1,
        "to": 10,
        "min": 126,
        "fgm": 28,
        "fga": 60,
        "tpm": 10,
        "tpa": 27,
        "ftm": 16,
        "fta": 17
      }
    },
    {
      "name": "Alperen Sengun",
      "team": "pelafustanes",
      "espnId": 4871144,
      "nbaTeamId": 10,
      "gp": 2,
      "nbaGp": 2,
      "minutes": 70,
      "stats": {
        "fgm": 17,
        "fga": 32,
        "ftm": 10,
        "fta": 14,
        "tpm": 1,
        "reb": 18,
        "ast": 18,
        "stl": 6,
        "blk": 2,
        "to": 8,
        "pts": 45
      },
      "games": [
        "401909874",
        "401909902"
      ],
      "nbaGames": [
        "401909874",
        "401909902"
      ],
      "nbaStats": {
        "pts": 45,
        "reb": 18,
        "ast": 18,
        "stl": 6,
        "blk": 2,
        "to": 8,
        "min": 70,
        "fgm": 17,
        "fga": 32,
        "tpm": 1,
        "tpa": 3,
        "ftm": 10,
        "fta": 14
      }
    },
    {
      "name": "Brandon Miller",
      "team": "pelafustanes",
      "espnId": 4433287,
      "nbaTeamId": 30,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 144,
      "stats": {
        "fgm": 42,
        "fga": 98,
        "ftm": 13,
        "fta": 16,
        "tpm": 16,
        "reb": 30,
        "ast": 11,
        "stl": 8,
        "blk": 4,
        "to": 9,
        "pts": 113
      },
      "games": [
        "401909277",
        "401909868",
        "401909883",
        "401909897"
      ],
      "nbaGames": [
        "401909277",
        "401909868",
        "401909883",
        "401909897"
      ],
      "nbaStats": {
        "pts": 113,
        "reb": 30,
        "ast": 11,
        "stl": 8,
        "blk": 4,
        "to": 9,
        "min": 144,
        "fgm": 42,
        "fga": 98,
        "tpm": 16,
        "tpa": 45,
        "ftm": 13,
        "fta": 16
      }
    },
    {
      "name": "OG Anunoby",
      "team": "pelafustanes",
      "espnId": 3934719,
      "nbaTeamId": 18,
      "gp": 2,
      "nbaGp": 3,
      "minutes": 65,
      "stats": {
        "fgm": 11,
        "fga": 26,
        "ftm": 7,
        "fta": 8,
        "tpm": 3,
        "reb": 10,
        "ast": 4,
        "stl": 1,
        "blk": 0,
        "to": 3,
        "pts": 32
      },
      "games": [
        "401909280",
        "401909886"
      ],
      "nbaGames": [
        "401909280",
        "401909878",
        "401909886"
      ],
      "nbaStats": {
        "pts": 45,
        "reb": 17,
        "ast": 6,
        "stl": 3,
        "blk": 2,
        "to": 5,
        "min": 101,
        "fgm": 16,
        "fga": 41,
        "tpm": 4,
        "tpa": 15,
        "ftm": 9,
        "fta": 10
      }
    },
    {
      "name": "Payton Pritchard",
      "team": "pelafustanes",
      "espnId": 4066354,
      "nbaTeamId": 2,
      "gp": 3,
      "nbaGp": 4,
      "minutes": 81,
      "stats": {
        "fgm": 21,
        "fga": 40,
        "ftm": 10,
        "fta": 10,
        "tpm": 10,
        "reb": 6,
        "ast": 13,
        "stl": 4,
        "blk": 1,
        "to": 7,
        "pts": 62
      },
      "games": [
        "401909278",
        "401909870",
        "401909877"
      ],
      "nbaGames": [
        "401909278",
        "401909870",
        "401909877",
        "401909903"
      ],
      "nbaStats": {
        "pts": 69,
        "reb": 13,
        "ast": 16,
        "stl": 5,
        "blk": 2,
        "to": 8,
        "min": 108,
        "fgm": 24,
        "fga": 51,
        "tpm": 10,
        "tpa": 29,
        "ftm": 11,
        "fta": 11
      }
    },
    {
      "name": "Alex Sarr",
      "team": "pelafustanes",
      "espnId": 5160992,
      "nbaTeamId": 27,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 81,
      "stats": {
        "fgm": 12,
        "fga": 22,
        "ftm": 6,
        "fta": 9,
        "tpm": 3,
        "reb": 18,
        "ast": 3,
        "stl": 4,
        "blk": 3,
        "to": 5,
        "pts": 33
      },
      "games": [
        "401909277",
        "401909868",
        "401909882"
      ],
      "nbaGames": [
        "401909277",
        "401909868",
        "401909882"
      ],
      "nbaStats": {
        "pts": 33,
        "reb": 18,
        "ast": 3,
        "stl": 4,
        "blk": 3,
        "to": 5,
        "min": 81,
        "fgm": 12,
        "fga": 22,
        "tpm": 3,
        "tpa": 10,
        "ftm": 6,
        "fta": 9
      }
    },
    {
      "name": "Matas Buzelis",
      "team": "pelafustanes",
      "espnId": 4711294,
      "nbaTeamId": 4,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 75,
      "stats": {
        "fgm": 13,
        "fga": 30,
        "ftm": 9,
        "fta": 12,
        "tpm": 7,
        "reb": 11,
        "ast": 6,
        "stl": 2,
        "blk": 1,
        "to": 8,
        "pts": 42
      },
      "games": [
        "401909278",
        "401909870",
        "401909886"
      ],
      "nbaGames": [
        "401909278",
        "401909870",
        "401909886"
      ],
      "nbaStats": {
        "pts": 42,
        "reb": 11,
        "ast": 6,
        "stl": 2,
        "blk": 1,
        "to": 8,
        "min": 75,
        "fgm": 13,
        "fga": 30,
        "tpm": 7,
        "tpa": 15,
        "ftm": 9,
        "fta": 12
      }
    },
    {
      "name": "Bobby Portis",
      "team": "pelafustanes",
      "espnId": 3064482,
      "nbaTeamId": 14,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 64,
      "stats": {
        "fgm": 11,
        "fga": 29,
        "ftm": 1,
        "fta": 2,
        "tpm": 6,
        "reb": 24,
        "ast": 7,
        "stl": 2,
        "blk": 4,
        "to": 5,
        "pts": 29
      },
      "games": [
        "401909282",
        "401909871",
        "401909881"
      ],
      "nbaGames": [
        "401909282",
        "401909871",
        "401909881"
      ],
      "nbaStats": {
        "pts": 29,
        "reb": 24,
        "ast": 7,
        "stl": 2,
        "blk": 4,
        "to": 5,
        "min": 64,
        "fgm": 11,
        "fga": 29,
        "tpm": 6,
        "tpa": 15,
        "ftm": 1,
        "fta": 2
      }
    },
    {
      "name": "Malik Monk",
      "team": "pelafustanes",
      "espnId": 4066262,
      "nbaTeamId": 23,
      "gp": 1,
      "nbaGp": 3,
      "minutes": 14,
      "stats": {
        "fgm": 1,
        "fga": 3,
        "ftm": 6,
        "fta": 6,
        "tpm": 0,
        "reb": 0,
        "ast": 3,
        "stl": 2,
        "blk": 0,
        "to": 2,
        "pts": 8
      },
      "games": [
        "401909899"
      ],
      "nbaGames": [
        "401909879",
        "401909894",
        "401909899"
      ],
      "nbaStats": {
        "pts": 13,
        "reb": 3,
        "ast": 10,
        "stl": 2,
        "blk": 0,
        "to": 4,
        "min": 35,
        "fgm": 3,
        "fga": 13,
        "tpm": 1,
        "tpa": 6,
        "ftm": 6,
        "fta": 6
      }
    },
    {
      "name": "Jalen Smith",
      "team": "pelafustanes",
      "espnId": 4397189,
      "nbaTeamId": 4,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 77,
      "stats": {
        "fgm": 11,
        "fga": 28,
        "ftm": 2,
        "fta": 3,
        "tpm": 5,
        "reb": 29,
        "ast": 7,
        "stl": 0,
        "blk": 5,
        "to": 3,
        "pts": 29
      },
      "games": [
        "401909278",
        "401909870",
        "401909886"
      ],
      "nbaGames": [
        "401909278",
        "401909870",
        "401909886"
      ],
      "nbaStats": {
        "pts": 29,
        "reb": 29,
        "ast": 7,
        "stl": 0,
        "blk": 5,
        "to": 3,
        "min": 77,
        "fgm": 11,
        "fga": 28,
        "tpm": 5,
        "tpa": 17,
        "ftm": 2,
        "fta": 3
      }
    },
    {
      "name": "Aaron Wiggins",
      "team": "pelafustanes",
      "espnId": 4397183,
      "nbaTeamId": 1,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 98,
      "stats": {
        "fgm": 21,
        "fga": 48,
        "ftm": 0,
        "fta": 0,
        "tpm": 10,
        "reb": 17,
        "ast": 10,
        "stl": 2,
        "blk": 2,
        "to": 4,
        "pts": 52
      },
      "games": [
        "401909874",
        "401909881",
        "401909893",
        "401909898"
      ],
      "nbaGames": [
        "401909874",
        "401909881",
        "401909893",
        "401909898"
      ],
      "nbaStats": {
        "pts": 52,
        "reb": 17,
        "ast": 10,
        "stl": 2,
        "blk": 2,
        "to": 4,
        "min": 98,
        "fgm": 21,
        "fga": 48,
        "tpm": 10,
        "tpa": 27,
        "ftm": 0,
        "fta": 0
      }
    },
    {
      "name": "Victor Wembanyama",
      "team": "hipopotamos",
      "espnId": 5104157,
      "nbaTeamId": 24,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 100,
      "stats": {
        "fgm": 45,
        "fga": 80,
        "ftm": 11,
        "fta": 14,
        "tpm": 7,
        "reb": 31,
        "ast": 11,
        "stl": 6,
        "blk": 13,
        "to": 3,
        "pts": 108
      },
      "games": [
        "401909879",
        "401909890",
        "401909901"
      ],
      "nbaGames": [
        "401909879",
        "401909890",
        "401909901"
      ],
      "nbaStats": {
        "pts": 108,
        "reb": 31,
        "ast": 11,
        "stl": 6,
        "blk": 13,
        "to": 3,
        "min": 100,
        "fgm": 45,
        "fga": 80,
        "tpm": 7,
        "tpa": 21,
        "ftm": 11,
        "fta": 14
      }
    },
    {
      "name": "Cade Cunningham",
      "team": "hipopotamos",
      "espnId": 4432166,
      "nbaTeamId": 8,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 103,
      "stats": {
        "fgm": 23,
        "fga": 55,
        "ftm": 16,
        "fta": 20,
        "tpm": 7,
        "reb": 19,
        "ast": 19,
        "stl": 2,
        "blk": 2,
        "to": 8,
        "pts": 69
      },
      "games": [
        "401909279",
        "401909878",
        "401909883"
      ],
      "nbaGames": [
        "401909279",
        "401909878",
        "401909883"
      ],
      "nbaStats": {
        "pts": 69,
        "reb": 19,
        "ast": 19,
        "stl": 2,
        "blk": 2,
        "to": 8,
        "min": 103,
        "fgm": 23,
        "fga": 55,
        "tpm": 7,
        "tpa": 22,
        "ftm": 16,
        "fta": 20
      }
    },
    {
      "name": "Deni Avdija",
      "team": "hipopotamos",
      "espnId": 4683021,
      "nbaTeamId": 22,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 95,
      "stats": {
        "fgm": 22,
        "fga": 43,
        "ftm": 21,
        "fta": 32,
        "tpm": 6,
        "reb": 18,
        "ast": 18,
        "stl": 2,
        "blk": 1,
        "to": 6,
        "pts": 71
      },
      "games": [
        "401909880",
        "401909895",
        "401909896"
      ],
      "nbaGames": [
        "401909880",
        "401909895",
        "401909896"
      ],
      "nbaStats": {
        "pts": 71,
        "reb": 18,
        "ast": 18,
        "stl": 2,
        "blk": 1,
        "to": 6,
        "min": 95,
        "fgm": 22,
        "fga": 43,
        "tpm": 6,
        "tpa": 15,
        "ftm": 21,
        "fta": 32
      }
    },
    {
      "name": "Derrick White",
      "team": "hipopotamos",
      "espnId": 3078576,
      "nbaTeamId": 2,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 111,
      "stats": {
        "fgm": 15,
        "fga": 33,
        "ftm": 7,
        "fta": 7,
        "tpm": 5,
        "reb": 15,
        "ast": 17,
        "stl": 7,
        "blk": 1,
        "to": 11,
        "pts": 42
      },
      "games": [
        "401909278",
        "401909870",
        "401909877",
        "401909903"
      ],
      "nbaGames": [
        "401909278",
        "401909870",
        "401909877",
        "401909903"
      ],
      "nbaStats": {
        "pts": 42,
        "reb": 15,
        "ast": 17,
        "stl": 7,
        "blk": 1,
        "to": 11,
        "min": 111,
        "fgm": 15,
        "fga": 33,
        "tpm": 5,
        "tpa": 16,
        "ftm": 7,
        "fta": 7
      }
    },
    {
      "name": "Jaden McDaniels",
      "team": "hipopotamos",
      "espnId": 4431671,
      "nbaTeamId": 16,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 144,
      "stats": {
        "fgm": 32,
        "fga": 59,
        "ftm": 5,
        "fta": 7,
        "tpm": 6,
        "reb": 22,
        "ast": 18,
        "stl": 3,
        "blk": 1,
        "to": 6,
        "pts": 75
      },
      "games": [
        "401909284",
        "401909869",
        "401909888",
        "401909901"
      ],
      "nbaGames": [
        "401909284",
        "401909869",
        "401909888",
        "401909901"
      ],
      "nbaStats": {
        "pts": 75,
        "reb": 22,
        "ast": 18,
        "stl": 3,
        "blk": 1,
        "to": 6,
        "min": 144,
        "fgm": 32,
        "fga": 59,
        "tpm": 6,
        "tpa": 18,
        "ftm": 5,
        "fta": 7
      }
    },
    {
      "name": "VJ Edgecombe",
      "team": "hipopotamos",
      "espnId": 5124612,
      "nbaTeamId": 20,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 102,
      "stats": {
        "fgm": 13,
        "fga": 33,
        "ftm": 1,
        "fta": 1,
        "tpm": 4,
        "reb": 23,
        "ast": 7,
        "stl": 2,
        "blk": 1,
        "to": 5,
        "pts": 31
      },
      "games": [
        "401909280",
        "401909884",
        "401909897"
      ],
      "nbaGames": [
        "401909280",
        "401909884",
        "401909897"
      ],
      "nbaStats": {
        "pts": 31,
        "reb": 23,
        "ast": 7,
        "stl": 2,
        "blk": 1,
        "to": 5,
        "min": 102,
        "fgm": 13,
        "fga": 33,
        "tpm": 4,
        "tpa": 14,
        "ftm": 1,
        "fta": 1
      }
    },
    {
      "name": "Naz Reid",
      "team": "hipopotamos",
      "espnId": 4396971,
      "nbaTeamId": 30,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 109,
      "stats": {
        "fgm": 19,
        "fga": 57,
        "ftm": 8,
        "fta": 11,
        "tpm": 5,
        "reb": 34,
        "ast": 4,
        "stl": 4,
        "blk": 2,
        "to": 12,
        "pts": 51
      },
      "games": [
        "401909277",
        "401909868",
        "401909883",
        "401909897"
      ],
      "nbaGames": [
        "401909277",
        "401909868",
        "401909883",
        "401909897"
      ],
      "nbaStats": {
        "pts": 51,
        "reb": 34,
        "ast": 4,
        "stl": 4,
        "blk": 2,
        "to": 12,
        "min": 109,
        "fgm": 19,
        "fga": 57,
        "tpm": 5,
        "tpa": 23,
        "ftm": 8,
        "fta": 11
      }
    },
    {
      "name": "Cason Wallace",
      "team": "hipopotamos",
      "espnId": 4683692,
      "nbaTeamId": 25,
      "gp": 0,
      "nbaGp": 0,
      "minutes": 0,
      "stats": {
        "fgm": 0,
        "fga": 0,
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
      "games": [],
      "nbaGames": [],
      "nbaStats": {
        "fgm": 0,
        "fga": 0,
        "ftm": 0,
        "fta": 0,
        "tpm": 0,
        "reb": 0,
        "ast": 0,
        "stl": 0,
        "blk": 0,
        "to": 0,
        "pts": 0
      }
    },
    {
      "name": "Toumani Camara",
      "team": "hipopotamos",
      "espnId": 4431736,
      "nbaTeamId": 22,
      "gp": 2,
      "nbaGp": 3,
      "minutes": 50,
      "stats": {
        "fgm": 9,
        "fga": 15,
        "ftm": 0,
        "fta": 0,
        "tpm": 7,
        "reb": 3,
        "ast": 2,
        "stl": 3,
        "blk": 2,
        "to": 2,
        "pts": 25
      },
      "games": [
        "401909880",
        "401909895"
      ],
      "nbaGames": [
        "401909880",
        "401909895",
        "401909896"
      ],
      "nbaStats": {
        "pts": 39,
        "reb": 7,
        "ast": 2,
        "stl": 5,
        "blk": 2,
        "to": 3,
        "min": 81,
        "fgm": 13,
        "fga": 24,
        "tpm": 11,
        "tpa": 22,
        "ftm": 2,
        "fta": 2
      }
    },
    {
      "name": "P.J. Washington",
      "team": "hipopotamos",
      "espnId": 4278078,
      "nbaTeamId": 6,
      "gp": 3,
      "nbaGp": 3,
      "minutes": 102,
      "stats": {
        "fgm": 14,
        "fga": 39,
        "ftm": 6,
        "fta": 6,
        "tpm": 7,
        "reb": 28,
        "ast": 3,
        "stl": 2,
        "blk": 2,
        "to": 5,
        "pts": 41
      },
      "games": [
        "401909283",
        "401909871",
        "401909891"
      ],
      "nbaGames": [
        "401909283",
        "401909871",
        "401909891"
      ],
      "nbaStats": {
        "pts": 41,
        "reb": 28,
        "ast": 3,
        "stl": 2,
        "blk": 2,
        "to": 5,
        "min": 102,
        "fgm": 14,
        "fga": 39,
        "tpm": 7,
        "tpa": 23,
        "ftm": 6,
        "fta": 6
      }
    },
    {
      "name": "Tyrese Haliburton",
      "team": "hipopotamos",
      "espnId": 4396993,
      "nbaTeamId": 11,
      "gp": 1,
      "nbaGp": 1,
      "minutes": 35,
      "stats": {
        "fgm": 8,
        "fga": 17,
        "ftm": 2,
        "fta": 3,
        "tpm": 4,
        "reb": 6,
        "ast": 9,
        "stl": 1,
        "blk": 1,
        "to": 1,
        "pts": 22
      },
      "games": [
        "401909872"
      ],
      "nbaGames": [
        "401909872"
      ],
      "nbaStats": {
        "pts": 22,
        "reb": 6,
        "ast": 9,
        "stl": 1,
        "blk": 1,
        "to": 1,
        "min": 35,
        "fgm": 8,
        "fga": 17,
        "tpm": 4,
        "tpa": 10,
        "ftm": 2,
        "fta": 3
      }
    },
    {
      "name": "Walker Kessler",
      "team": "hipopotamos",
      "espnId": 4433136,
      "nbaTeamId": 13,
      "gp": 4,
      "nbaGp": 4,
      "minutes": 121,
      "stats": {
        "fgm": 20,
        "fga": 29,
        "ftm": 10,
        "fta": 16,
        "tpm": 0,
        "reb": 45,
        "ast": 4,
        "stl": 4,
        "blk": 11,
        "to": 7,
        "pts": 50
      },
      "games": [
        "401909285",
        "401909880",
        "401909892",
        "401909906"
      ],
      "nbaGames": [
        "401909285",
        "401909880",
        "401909892",
        "401909906"
      ],
      "nbaStats": {
        "pts": 50,
        "reb": 45,
        "ast": 4,
        "stl": 4,
        "blk": 11,
        "to": 7,
        "min": 121,
        "fgm": 20,
        "fga": 29,
        "tpm": 0,
        "tpa": 0,
        "ftm": 10,
        "fta": 16
      }
    },
    {
      "name": "Ace Bailey",
      "team": "hipopotamos",
      "espnId": 4873138,
      "nbaTeamId": 26,
      "gp": 2,
      "nbaGp": 3,
      "minutes": 74,
      "stats": {
        "fgm": 15,
        "fga": 28,
        "ftm": 2,
        "fta": 2,
        "tpm": 4,
        "reb": 16,
        "ast": 3,
        "stl": 0,
        "blk": 4,
        "to": 4,
        "pts": 36
      },
      "games": [
        "401909875",
        "401909890"
      ],
      "nbaGames": [
        "401909875",
        "401909890",
        "401909896"
      ],
      "nbaStats": {
        "pts": 45,
        "reb": 23,
        "ast": 4,
        "stl": 2,
        "blk": 7,
        "to": 7,
        "min": 111,
        "fgm": 19,
        "fga": 38,
        "tpm": 5,
        "tpa": 18,
        "ftm": 2,
        "fta": 2
      }
    }
  ],
  "games": [
    {
      "id": "401909869",
      "date": "2026-10-26T23:00Z",
      "name": "Cleveland Cavaliers / Minnesota Timberwolves",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909869",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909869"
    },
    {
      "id": "401909868",
      "date": "2026-10-26T23:00Z",
      "name": "Charlotte Hornets / Washington Wizards",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909868",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909868"
    },
    {
      "id": "401909870",
      "date": "2026-10-26T23:30Z",
      "name": "Boston Celtics / Chicago Bulls",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909870",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909870"
    },
    {
      "id": "401909871",
      "date": "2026-10-26T23:30Z",
      "name": "Miami Heat / Dallas Mavericks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909871",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909871"
    },
    {
      "id": "401909873",
      "date": "2026-10-27T00:00Z",
      "name": "Oklahoma City Thunder / Phoenix Suns",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909873",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909873"
    },
    {
      "id": "401909872",
      "date": "2026-10-27T00:00Z",
      "name": "Milwaukee Bucks / Indiana Pacers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909872",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909872"
    },
    {
      "id": "401909874",
      "date": "2026-10-27T00:30Z",
      "name": "Houston Rockets / Atlanta Hawks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909874",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909874"
    },
    {
      "id": "401909875",
      "date": "2026-10-27T01:00Z",
      "name": "Utah Jazz / Memphis Grizzlies",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909875",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909875"
    },
    {
      "id": "401909876",
      "date": "2026-10-27T02:00Z",
      "name": "Denver Nuggets / Golden State Warriors",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909876",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909876"
    },
    {
      "id": "401909877",
      "date": "2026-10-27T23:30Z",
      "name": "Boston Celtics / Brooklyn Nets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909877",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909877"
    },
    {
      "id": "401909878",
      "date": "2026-10-28T00:00Z",
      "name": "New York Knicks / Detroit Pistons",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909878",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909878"
    },
    {
      "id": "401909879",
      "date": "2026-10-28T00:00Z",
      "name": "San Antonio Spurs / Sacramento Kings",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909879",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909879"
    },
    {
      "id": "401909880",
      "date": "2026-10-28T03:00Z",
      "name": "Los Angeles Lakers / Portland Trail Blazers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909880",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909880"
    },
    {
      "id": "401909881",
      "date": "2026-10-28T23:00Z",
      "name": "Atlanta Hawks / Miami Heat",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909881",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909881"
    },
    {
      "id": "401909883",
      "date": "2026-10-28T23:00Z",
      "name": "Detroit Pistons / Charlotte Hornets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909883",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909883"
    },
    {
      "id": "401909884",
      "date": "2026-10-28T23:00Z",
      "name": "Indiana Pacers / Philadelphia 76ers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909884",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909884"
    },
    {
      "id": "401909882",
      "date": "2026-10-28T23:00Z",
      "name": "Cleveland Cavaliers / Washington Wizards",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909882",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909882"
    },
    {
      "id": "401909885",
      "date": "2026-10-28T23:30Z",
      "name": "Toronto Raptors / Orlando Magic",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909885",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909885"
    },
    {
      "id": "401909886",
      "date": "2026-10-29T00:00Z",
      "name": "Chicago Bulls / New York Knicks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909886",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909886"
    },
    {
      "id": "401909887",
      "date": "2026-10-29T00:00Z",
      "name": "Milwaukee Bucks / Houston Rockets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909887",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909887"
    },
    {
      "id": "401909888",
      "date": "2026-10-29T00:00Z",
      "name": "Minnesota Timberwolves / Golden State Warriors",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909888",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909888"
    },
    {
      "id": "401909889",
      "date": "2026-10-29T00:00Z",
      "name": "New Orleans Pelicans / Denver Nuggets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909889",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909889"
    },
    {
      "id": "401909890",
      "date": "2026-10-29T01:00Z",
      "name": "Utah Jazz / San Antonio Spurs",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909890",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909890"
    },
    {
      "id": "401909891",
      "date": "2026-10-29T01:30Z",
      "name": "Dallas Mavericks / Oklahoma City Thunder",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909891",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909891"
    },
    {
      "id": "401909892",
      "date": "2026-10-29T02:30Z",
      "name": "LA Clippers / Los Angeles Lakers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909892",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909892"
    },
    {
      "id": "401909893",
      "date": "2026-10-30T00:00Z",
      "name": "Atlanta Hawks / Cleveland Cavaliers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909893",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909893"
    },
    {
      "id": "401909894",
      "date": "2026-10-30T00:00Z",
      "name": "New Orleans Pelicans / Sacramento Kings",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909894",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909894"
    },
    {
      "id": "401909895",
      "date": "2026-10-30T02:00Z",
      "name": "Portland Trail Blazers / Memphis Grizzlies",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909895",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909895"
    },
    {
      "id": "401909277",
      "date": "2026-10-30T23:00Z",
      "name": "Washington Wizards / Charlotte Hornets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909277",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909277"
    },
    {
      "id": "401909278",
      "date": "2026-10-30T23:30Z",
      "name": "Boston Celtics / Chicago Bulls",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909278",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909278"
    },
    {
      "id": "401909281",
      "date": "2026-10-30T23:30Z",
      "name": "Toronto Raptors / Orlando Magic",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909281",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909281"
    },
    {
      "id": "401909280",
      "date": "2026-10-30T23:30Z",
      "name": "Philadelphia 76ers / New York Knicks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909280",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909280"
    },
    {
      "id": "401909279",
      "date": "2026-10-30T23:30Z",
      "name": "Brooklyn Nets / Detroit Pistons",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909279",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909279"
    },
    {
      "id": "401909283",
      "date": "2026-10-31T00:00Z",
      "name": "Dallas Mavericks / Houston Rockets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909283",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909283"
    },
    {
      "id": "401909284",
      "date": "2026-10-31T00:00Z",
      "name": "Minnesota Timberwolves / LA Clippers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909284",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909284"
    },
    {
      "id": "401909282",
      "date": "2026-10-31T00:00Z",
      "name": "Miami Heat / Indiana Pacers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909282",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909282"
    },
    {
      "id": "401909286",
      "date": "2026-10-31T02:00Z",
      "name": "Phoenix Suns / Denver Nuggets",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909286",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909286"
    },
    {
      "id": "401909285",
      "date": "2026-10-31T02:00Z",
      "name": "Golden State Warriors / Los Angeles Lakers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909285",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909285"
    },
    {
      "id": "401909896",
      "date": "2026-10-31T19:00Z",
      "name": "Utah Jazz / Portland Trail Blazers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909896",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909896"
    },
    {
      "id": "401909897",
      "date": "2026-10-31T22:00Z",
      "name": "Charlotte Hornets / Philadelphia 76ers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909897",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909897"
    },
    {
      "id": "401909898",
      "date": "2026-10-31T23:00Z",
      "name": "New Orleans Pelicans / Atlanta Hawks",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909898",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909898"
    },
    {
      "id": "401909899",
      "date": "2026-11-01T00:00Z",
      "name": "Memphis Grizzlies / Sacramento Kings",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909899",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909899"
    },
    {
      "id": "401909901",
      "date": "2026-11-01T00:00Z",
      "name": "San Antonio Spurs / Minnesota Timberwolves",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909901",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909901"
    },
    {
      "id": "401909900",
      "date": "2026-11-01T00:00Z",
      "name": "Milwaukee Bucks / Cleveland Cavaliers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909900",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909900"
    },
    {
      "id": "401909902",
      "date": "2026-11-01T00:30Z",
      "name": "Houston Rockets / Oklahoma City Thunder",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909902",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909902"
    },
    {
      "id": "401909903",
      "date": "2026-11-01T20:30Z",
      "name": "Orlando Magic / Boston Celtics",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909903",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909903"
    },
    {
      "id": "401909905",
      "date": "2026-11-02T01:30Z",
      "name": "Golden State Warriors / LA Clippers",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909905",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909905"
    },
    {
      "id": "401909906",
      "date": "2026-11-02T02:00Z",
      "name": "Los Angeles Lakers / Toronto Raptors",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909906",
      "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909906"
    }
  ],
  "excludedNbaGames": {
    "pelafustanes": [
      [
        "Luka Doncic",
        "401909880"
      ],
      [
        "OG Anunoby",
        "401909878"
      ],
      [
        "Payton Pritchard",
        "401909903"
      ],
      [
        "Malik Monk",
        "401909879"
      ],
      [
        "Malik Monk",
        "401909894"
      ]
    ],
    "hipopotamos": [
      [
        "Toumani Camara",
        "401909896"
      ],
      [
        "Ace Bailey",
        "401909896"
      ]
    ]
  },
  "sourceImages": []
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

/* Movimientos confirmados ----------------------------------------------- */
transactionReports: [
  {
    "id": "waivers-2026-10-26",
    "date": "2026-10-26",
    "displayTime": "4:00 p. m.",
    "timeZoneShown": false,
    "sourceImage": "./assets/movimientos/waivers-2026-10-26.png",
    "source": "Captura de ESPN Fantasy – Recent Activity aportada por el participante. Se transcriben diez altas desde waivers y sus bajas asociadas, todas con fecha 26 de octubre y hora mostrada 4:00 p. m.; la captura no especifica zona horaria. Las pujas suman $104, según la unidad indicada por ESPN. No se conocen el presupuesto inicial ni los saldos restantes. Las etiquetas de franquicia de la captura se conservan como datos de esa fuente; las actas NBA se documentan por separado.",
    "transactions": [
      {
        "id": "waiver-20261026-01",
        "team": "pilsens",
        "type": "waiver",
        "added": {
          "name": "Darius Garland",
          "nbaLabel": "LAC",
          "position": "PG"
        },
        "dropped": {
          "name": "Paolo Banchero",
          "nbaLabel": "ORL",
          "position": "PF"
        },
        "bid": 2
      },
      {
        "id": "waiver-20261026-02",
        "team": "pilsens",
        "type": "waiver",
        "added": {
          "name": "Domantas Sabonis",
          "nbaLabel": "SAC",
          "position": "C"
        },
        "dropped": {
          "name": "Jalen Brunson",
          "nbaLabel": "NY",
          "position": "PG"
        },
        "bid": 2
      },
      {
        "id": "waiver-20261026-03",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Ace Bailey",
          "nbaLabel": "UTAH",
          "position": "SF"
        },
        "dropped": {
          "name": "Bennett Stirtz",
          "nbaLabel": "OKC",
          "position": "PG"
        },
        "bid": 6
      },
      {
        "id": "waiver-20261026-04",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Walker Kessler",
          "nbaLabel": "LAC",
          "position": "C"
        },
        "dropped": {
          "name": "Onyeka Okongwu",
          "nbaLabel": "ATL",
          "position": "C"
        },
        "bid": 6
      },
      {
        "id": "waiver-20261026-05",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Jonathan Kuminga",
          "nbaLabel": "MIN",
          "position": "PF"
        },
        "dropped": {
          "name": "Herbert Jones",
          "nbaLabel": "NO",
          "position": "SF"
        },
        "bid": 8
      },
      {
        "id": "waiver-20261026-06",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Paul Reed",
          "nbaLabel": "DET",
          "position": "C"
        },
        "dropped": {
          "name": "Daniel Gafford",
          "nbaLabel": "DAL",
          "position": "C"
        },
        "bid": 10
      },
      {
        "id": "waiver-20261026-07",
        "team": "pelafustanes",
        "type": "waiver",
        "added": {
          "name": "Aaron Wiggins",
          "nbaLabel": "ATL",
          "position": "SG"
        },
        "dropped": {
          "name": "Royce O'Neale",
          "nbaLabel": "CHA",
          "position": "SF"
        },
        "bid": 10
      },
      {
        "id": "waiver-20261026-08",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Fred VanVleet",
          "nbaLabel": "HOU",
          "position": "PG"
        },
        "dropped": {
          "name": "Jalen Suggs",
          "nbaLabel": "ORL",
          "position": "PG"
        },
        "bid": 14
      },
      {
        "id": "waiver-20261026-09",
        "team": "pelafustanes",
        "type": "waiver",
        "added": {
          "name": "Jalen Smith",
          "nbaLabel": "CHI",
          "position": "PF"
        },
        "dropped": {
          "name": "Klay Thompson",
          "nbaLabel": "MIA",
          "position": "SG"
        },
        "bid": 15
      },
      {
        "id": "waiver-20261026-10",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Tyrese Haliburton",
          "nbaLabel": "IND",
          "position": "PG"
        },
        "dropped": {
          "name": "Josh Giddey",
          "nbaLabel": "CHI",
          "position": "PG"
        },
        "bid": 31
      }
    ],
    "highlights": [
      {
        "transactionId": "waiver-20261026-10",
        "label": "La mayor puja",
        "reason": "Creación y tiro exterior para Hipopotamos."
      },
      {
        "transactionId": "waiver-20261026-02",
        "label": "Cambio de estructura",
        "reason": "Rebote y pase para el frente interior de Cromwell."
      },
      {
        "transactionId": "waiver-20261026-04",
        "label": "Refuerzo defensivo",
        "reason": "Protección del aro junto a Wembanyama."
      }
    ],
    "nbaFrom": "2026-10-20",
    "nbaThrough": "2026-10-25",
    "nbaPlayers": [
      {
        "name": "Darius Garland",
        "nbaTeam": "LA Clippers",
        "gp": 3,
        "games": [
          "401909842",
          "401909851",
          "401909865"
        ],
        "minutes": 105,
        "stats": {
          "fgm": 27,
          "fga": 55,
          "ftm": 9,
          "fta": 13,
          "tpm": 9,
          "reb": 5,
          "ast": 21,
          "stl": 2,
          "blk": 0,
          "to": 18,
          "pts": 72
        }
      },
      {
        "name": "Domantas Sabonis",
        "nbaTeam": "Sacramento Kings",
        "gp": 3,
        "games": [
          "401909842",
          "401909852",
          "401909867"
        ],
        "minutes": 108,
        "stats": {
          "fgm": 21,
          "fga": 26,
          "ftm": 13,
          "fta": 15,
          "tpm": 1,
          "reb": 52,
          "ast": 21,
          "stl": 3,
          "blk": 0,
          "to": 12,
          "pts": 56
        }
      },
      {
        "name": "Ace Bailey",
        "nbaTeam": "Utah Jazz",
        "gp": 3,
        "games": [
          "401909838",
          "401909849",
          "401909861"
        ],
        "minutes": 75,
        "stats": {
          "fgm": 15,
          "fga": 30,
          "ftm": 1,
          "fta": 2,
          "tpm": 4,
          "reb": 24,
          "ast": 9,
          "stl": 0,
          "blk": 4,
          "to": 4,
          "pts": 35
        }
      },
      {
        "name": "Walker Kessler",
        "nbaTeam": "Los Angeles Lakers",
        "gp": 3,
        "games": [
          "401909092",
          "401909851",
          "401909861"
        ],
        "minutes": 93,
        "stats": {
          "fgm": 23,
          "fga": 28,
          "ftm": 4,
          "fta": 9,
          "tpm": 0,
          "reb": 24,
          "ast": 4,
          "stl": 3,
          "blk": 9,
          "to": 4,
          "pts": 50
        }
      },
      {
        "name": "Jonathan Kuminga",
        "nbaTeam": "Minnesota Timberwolves",
        "gp": 3,
        "games": [
          "401909091",
          "401909845",
          "401909864"
        ],
        "minutes": 83,
        "stats": {
          "fgm": 12,
          "fga": 25,
          "ftm": 5,
          "fta": 10,
          "tpm": 7,
          "reb": 13,
          "ast": 9,
          "stl": 7,
          "blk": 1,
          "to": 1,
          "pts": 36
        }
      },
      {
        "name": "Paul Reed",
        "nbaTeam": "Detroit Pistons",
        "gp": 3,
        "games": [
          "401909088",
          "401909847",
          "401909866"
        ],
        "minutes": 66,
        "stats": {
          "fgm": 14,
          "fga": 23,
          "ftm": 3,
          "fta": 5,
          "tpm": 2,
          "reb": 25,
          "ast": 7,
          "stl": 1,
          "blk": 3,
          "to": 5,
          "pts": 33
        }
      },
      {
        "name": "Aaron Wiggins",
        "nbaTeam": "Atlanta Hawks",
        "gp": 3,
        "games": [
          "401909834",
          "401909843",
          "401909856"
        ],
        "minutes": 83,
        "stats": {
          "fgm": 18,
          "fga": 31,
          "ftm": 5,
          "fta": 7,
          "tpm": 10,
          "reb": 9,
          "ast": 3,
          "stl": 5,
          "blk": 1,
          "to": 3,
          "pts": 51
        }
      },
      {
        "name": "Fred VanVleet",
        "nbaTeam": "Houston Rockets",
        "gp": 2,
        "games": [
          "401909840",
          "401909096"
        ],
        "minutes": 62,
        "stats": {
          "fgm": 6,
          "fga": 18,
          "ftm": 3,
          "fta": 4,
          "tpm": 5,
          "reb": 5,
          "ast": 16,
          "stl": 6,
          "blk": 1,
          "to": 0,
          "pts": 20
        }
      },
      {
        "name": "Jalen Smith",
        "nbaTeam": "Chicago Bulls",
        "gp": 3,
        "games": [
          "401909837",
          "401909848",
          "401909857"
        ],
        "minutes": 67,
        "stats": {
          "fgm": 16,
          "fga": 31,
          "ftm": 7,
          "fta": 8,
          "tpm": 4,
          "reb": 24,
          "ast": 3,
          "stl": 3,
          "blk": 1,
          "to": 3,
          "pts": 43
        }
      },
      {
        "name": "Tyrese Haliburton",
        "nbaTeam": "Indiana Pacers",
        "gp": 3,
        "games": [
          "401909839",
          "401909844",
          "401909862"
        ],
        "minutes": 97,
        "stats": {
          "fgm": 24,
          "fga": 45,
          "ftm": 11,
          "fta": 12,
          "tpm": 6,
          "reb": 12,
          "ast": 29,
          "stl": 4,
          "blk": 2,
          "to": 8,
          "pts": 65
        }
      }
    ],
    "games": [
      {
        "id": "401909088",
        "name": "Boston Celtics at Detroit Pistons",
        "date": "2026-10-20T19:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909088",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909088"
      },
      {
        "id": "401909091",
        "name": "Minnesota Timberwolves at Miami Heat",
        "date": "2026-10-21T23:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909091",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909091"
      },
      {
        "id": "401909092",
        "name": "Golden State Warriors at Los Angeles Lakers",
        "date": "2026-10-22T02:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909092",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909092"
      },
      {
        "id": "401909096",
        "name": "Houston Rockets at San Antonio Spurs",
        "date": "2026-10-24T01:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909096",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909096"
      },
      {
        "id": "401909834",
        "name": "Atlanta Hawks at Orlando Magic",
        "date": "2026-10-21T23:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909834",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909834"
      },
      {
        "id": "401909837",
        "name": "Chicago Bulls at Toronto Raptors",
        "date": "2026-10-21T23:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909837",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909837"
      },
      {
        "id": "401909838",
        "name": "Utah Jazz at Memphis Grizzlies",
        "date": "2026-10-22T00:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909838",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909838"
      },
      {
        "id": "401909839",
        "name": "Indiana Pacers at New Orleans Pelicans",
        "date": "2026-10-22T00:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909839",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909839"
      },
      {
        "id": "401909840",
        "name": "Dallas Mavericks at Houston Rockets",
        "date": "2026-10-22T00:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909840",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909840"
      },
      {
        "id": "401909842",
        "name": "Sacramento Kings at LA Clippers",
        "date": "2026-10-22T02:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909842",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909842"
      },
      {
        "id": "401909843",
        "name": "Atlanta Hawks at Charlotte Hornets",
        "date": "2026-10-23T23:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909843",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909843"
      },
      {
        "id": "401909844",
        "name": "Dallas Mavericks at Indiana Pacers",
        "date": "2026-10-23T23:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909844",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909844"
      },
      {
        "id": "401909845",
        "name": "Minnesota Timberwolves at Orlando Magic",
        "date": "2026-10-23T23:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909845",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909845"
      },
      {
        "id": "401909847",
        "name": "Detroit Pistons at Miami Heat",
        "date": "2026-10-24T00:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909847",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909847"
      },
      {
        "id": "401909848",
        "name": "Chicago Bulls at Milwaukee Bucks",
        "date": "2026-10-23T20:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909848",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909848"
      },
      {
        "id": "401909849",
        "name": "New Orleans Pelicans at Utah Jazz",
        "date": "2026-10-24T01:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909849",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909849"
      },
      {
        "id": "401909851",
        "name": "LA Clippers at Los Angeles Lakers",
        "date": "2026-10-24T02:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909851",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909851"
      },
      {
        "id": "401909852",
        "name": "Portland Trail Blazers at Sacramento Kings",
        "date": "2026-10-24T02:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909852",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909852"
      },
      {
        "id": "401909856",
        "name": "Houston Rockets at Atlanta Hawks",
        "date": "2026-10-25T00:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909856",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909856"
      },
      {
        "id": "401909857",
        "name": "Washington Wizards at Chicago Bulls",
        "date": "2026-10-25T00:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909857",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909857"
      },
      {
        "id": "401909861",
        "name": "Los Angeles Lakers at Utah Jazz",
        "date": "2026-10-25T21:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909861",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909861"
      },
      {
        "id": "401909862",
        "name": "Indiana Pacers at Brooklyn Nets",
        "date": "2026-10-25T22:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909862",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909862"
      },
      {
        "id": "401909864",
        "name": "Toronto Raptors at Minnesota Timberwolves",
        "date": "2026-10-25T23:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909864",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909864"
      },
      {
        "id": "401909865",
        "name": "LA Clippers at Oklahoma City Thunder",
        "date": "2026-10-25T23:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909865",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909865"
      },
      {
        "id": "401909866",
        "name": "Detroit Pistons at Philadelphia 76ers",
        "date": "2026-10-25T23:30Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909866",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909866"
      },
      {
        "id": "401909867",
        "name": "Memphis Grizzlies at Sacramento Kings",
        "date": "2026-10-26T01:00Z",
        "url": "https://www.espn.com/nba/boxscore/_/gameId/401909867",
        "dataUrl": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909867"
      }
    ]
  },
  {
    "id": "waivers-2026-11-02",
    "date": "2026-11-02",
    "highlightNote": "Selección editorial por importe de la puja y peso del cambio de plantilla.",
    "timeZoneShown": false,
    "sourceImage": "./assets/cortes/ofertas-2026-11-02.png",
    "source": "Free Agent Offers Report de ESPN Fantasy aportado por el participante. Fecha seleccionada: lunes 2 de noviembre de 2026, ocho altas procesadas. Se transcriben las 18 ofertas visibles, con ocho incorporaciones y sus bajas asociadas. Las pujas ganadoras suman $96; no se dispone del presupuesto inicial ni de los saldos. La captura no muestra hora ni zona horaria. Las etiquetas NBA corresponden a esa fuente. Las causas de las ofertas fallidas se conservan sin inferir qué baja estaba asociada a ellas.",
    "transactions": [
      {
        "id": "waiver-20261102-01",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Cooper Flagg",
          "nbaLabel": "DAL",
          "position": "SF"
        },
        "dropped": {
          "name": "Karl-Anthony Towns",
          "nbaLabel": "NY",
          "position": "C"
        },
        "bid": 52
      },
      {
        "id": "waiver-20261102-02",
        "team": "pilsens",
        "type": "waiver",
        "added": {
          "name": "Franz Wagner",
          "nbaLabel": "ORL",
          "position": "SF"
        },
        "dropped": {
          "name": "Darius Garland",
          "nbaLabel": "LAC",
          "position": "PG"
        },
        "bid": 15
      },
      {
        "id": "waiver-20261102-03",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Christian Braun",
          "nbaLabel": "DEN",
          "position": "SG"
        },
        "dropped": {
          "name": "Cason Wallace",
          "nbaLabel": "OKC",
          "position": "SG"
        },
        "bid": 9
      },
      {
        "id": "waiver-20261102-04",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Yaxel Lendeborg",
          "nbaLabel": "GS",
          "position": "SF"
        },
        "dropped": {
          "name": "Kon Knueppel",
          "nbaLabel": "CHA",
          "position": "SF"
        },
        "bid": 7
      },
      {
        "id": "waiver-20261102-05",
        "team": "pilsens",
        "type": "waiver",
        "added": {
          "name": "Tyrese Maxey",
          "nbaLabel": "PHI",
          "position": "PG"
        },
        "dropped": {
          "name": "Anthony Edwards",
          "nbaLabel": "MIN",
          "position": "SG"
        },
        "bid": 5
      },
      {
        "id": "waiver-20261102-06",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Ajay Mitchell",
          "nbaLabel": "OKC",
          "position": "PG"
        },
        "dropped": {
          "name": "VJ Edgecombe",
          "nbaLabel": "PHI",
          "position": "SG"
        },
        "bid": 5
      },
      {
        "id": "waiver-20261102-07",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Devin Booker",
          "nbaLabel": "PHX",
          "position": "PG"
        },
        "dropped": {
          "name": "Tyrese Haliburton",
          "nbaLabel": "IND",
          "position": "PG"
        },
        "bid": 2
      },
      {
        "id": "waiver-20261102-08",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Jarrett Allen",
          "nbaLabel": "CLE",
          "position": "C"
        },
        "dropped": {
          "name": "Jaren Jackson Jr.",
          "nbaLabel": "UTAH",
          "position": "C"
        },
        "bid": 1
      }
    ],
    "offers": [
      {
        "order": 1,
        "team": "shockers",
        "claim": {
          "name": "Cooper Flagg",
          "nbaLabel": "DAL",
          "position": "SF"
        },
        "bid": 52,
        "result": "added",
        "transactionId": "waiver-20261102-01"
      },
      {
        "order": 2,
        "team": "pilsens",
        "claim": {
          "name": "Cooper Flagg",
          "nbaLabel": "DAL",
          "position": "SF"
        },
        "bid": 35,
        "result": "unsuccessful",
        "reasonCode": "already-added",
        "reason": "El jugador ya había sido incorporado por otro equipo."
      },
      {
        "order": 3,
        "team": "hipopotamos",
        "claim": {
          "name": "Cooper Flagg",
          "nbaLabel": "DAL",
          "position": "SF"
        },
        "bid": 17,
        "result": "unsuccessful",
        "reasonCode": "already-added",
        "reason": "El jugador ya había sido incorporado por otro equipo."
      },
      {
        "order": 4,
        "team": "pilsens",
        "claim": {
          "name": "Franz Wagner",
          "nbaLabel": "ORL",
          "position": "SF"
        },
        "bid": 15,
        "result": "added",
        "transactionId": "waiver-20261102-02"
      },
      {
        "order": 5,
        "team": "pilsens",
        "claim": {
          "name": "Pascal Siakam",
          "nbaLabel": "IND",
          "position": "PF"
        },
        "bid": 10,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 6,
        "team": "hipopotamos",
        "claim": {
          "name": "Christian Braun",
          "nbaLabel": "DEN",
          "position": "SG"
        },
        "bid": 9,
        "result": "added",
        "transactionId": "waiver-20261102-03"
      },
      {
        "order": 7,
        "team": "shockers",
        "claim": {
          "name": "Christian Braun",
          "nbaLabel": "DEN",
          "position": "SG"
        },
        "bid": 1,
        "result": "unsuccessful",
        "reasonCode": "already-added",
        "reason": "El jugador ya había sido incorporado por otro equipo."
      },
      {
        "order": 8,
        "team": "shockers",
        "claim": {
          "name": "Yaxel Lendeborg",
          "nbaLabel": "GS",
          "position": "SF"
        },
        "bid": 7,
        "result": "added",
        "transactionId": "waiver-20261102-04"
      },
      {
        "order": 9,
        "team": "pilsens",
        "claim": {
          "name": "Tyrese Maxey",
          "nbaLabel": "PHI",
          "position": "PG"
        },
        "bid": 5,
        "result": "added",
        "transactionId": "waiver-20261102-05"
      },
      {
        "order": 10,
        "team": "hipopotamos",
        "claim": {
          "name": "Ajay Mitchell",
          "nbaLabel": "OKC",
          "position": "PG"
        },
        "bid": 5,
        "result": "added",
        "transactionId": "waiver-20261102-06"
      },
      {
        "order": 11,
        "team": "hipopotamos",
        "claim": {
          "name": "Immanuel Quickley",
          "nbaLabel": "TOR",
          "position": "PG"
        },
        "bid": 5,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 12,
        "team": "pilsens",
        "claim": {
          "name": "Devin Booker",
          "nbaLabel": "PHX",
          "position": "PG"
        },
        "bid": 2,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 13,
        "team": "hipopotamos",
        "claim": {
          "name": "Devin Booker",
          "nbaLabel": "PHX",
          "position": "PG"
        },
        "bid": 2,
        "result": "added",
        "transactionId": "waiver-20261102-07"
      },
      {
        "order": 14,
        "team": "hipopotamos",
        "claim": {
          "name": "Jrue Holiday",
          "nbaLabel": "POR",
          "position": "PG"
        },
        "bid": 2,
        "result": "unsuccessful",
        "reasonCode": "acquisition-limit",
        "reason": "Se excedería el límite de incorporaciones del cruce."
      },
      {
        "order": 15,
        "team": "hipopotamos",
        "claim": {
          "name": "Jared McCain",
          "nbaLabel": "OKC",
          "position": "SG"
        },
        "bid": 2,
        "result": "unsuccessful",
        "reasonCode": "acquisition-limit",
        "reason": "Se excedería el límite de incorporaciones del cruce."
      },
      {
        "order": 16,
        "team": "shockers",
        "claim": {
          "name": "Anthony Black",
          "nbaLabel": "ORL",
          "position": "PG"
        },
        "bid": 1,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 17,
        "team": "shockers",
        "claim": {
          "name": "Ayo Dosunmu",
          "nbaLabel": "MIN",
          "position": "SG"
        },
        "bid": 1,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 18,
        "team": "shockers",
        "claim": {
          "name": "Jarrett Allen",
          "nbaLabel": "CLE",
          "position": "C"
        },
        "bid": 1,
        "result": "added",
        "transactionId": "waiver-20261102-08"
      }
    ],
    "highlights": [
      {
        "transactionId": "waiver-20261102-01",
        "label": "La puja más alta",
        "reason": "Shockers paga $52 por Flagg y libera a Towns. Supera los $35 de Pilsens y los $17 de Hipopotamos."
      },
      {
        "transactionId": "waiver-20261102-02",
        "label": "La segunda inversión",
        "reason": "Wagner llega a Cromwell por $15; Garland sale. Es la segunda puja ganadora más alta del registro."
      },
      {
        "transactionId": "waiver-20261102-05",
        "label": "Cambio de estrella",
        "reason": "Maxey entra por $5 y Edwards pasa a waivers. Pilsens cambia una de las figuras de su plantel."
      },
      {
        "transactionId": "waiver-20261102-07",
        "label": "El fichaje de $2",
        "reason": "Hipopotamos incorpora a Booker y corta a Haliburton. El registro confirma el intercambio de plaza por $2."
      }
    ]
  },
  {
    "id": "waivers-2026-11-09",
    "date": "2026-11-09",
    "timeZoneShown": false,
    "sourceImage": "./assets/cortes/ofertas-2026-11-09.png",
    "source": "Free Agent Offers Report de ESPN Fantasy aportado por el participante. Fecha seleccionada: lunes 9 de noviembre de 2026. Se transcriben las 15 ofertas visibles, con nueve altas, seis ofertas fallidas y $24 en pujas ganadoras. La captura no muestra hora ni zona horaria. Las etiquetas NBA y las causas de las ofertas fallidas corresponden al registro. No se infieren las bajas asociadas a solicitudes fallidas.",
    "transactions": [
      {
        "id": "waiver-20261109-01",
        "team": "pilsens",
        "type": "waiver",
        "added": {
          "name": "Paul George",
          "nbaLabel": "BOS",
          "position": "SF"
        },
        "dropped": {
          "name": "AJ Dybantsa",
          "nbaLabel": "WSH",
          "position": "SF"
        },
        "bid": 6
      },
      {
        "id": "waiver-20261109-02",
        "team": "pilsens",
        "type": "waiver",
        "added": {
          "name": "Davion Mitchell",
          "nbaLabel": "MIA",
          "position": "PG"
        },
        "dropped": {
          "name": "Sandro Mamukelashvili",
          "nbaLabel": "LAL",
          "position": "C"
        },
        "bid": 5
      },
      {
        "id": "waiver-20261109-03",
        "team": "pilsens",
        "type": "waiver",
        "added": {
          "name": "Pascal Siakam",
          "nbaLabel": "IND",
          "position": "PF"
        },
        "dropped": {
          "name": "Jaylen Brown",
          "nbaLabel": "PHI",
          "position": "SF"
        },
        "bid": 5
      },
      {
        "id": "waiver-20261109-04",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Bam Adebayo",
          "nbaLabel": "MIA",
          "position": "C"
        },
        "dropped": {
          "name": "Jarrett Allen",
          "nbaLabel": "CLE",
          "position": "C"
        },
        "bid": 2
      },
      {
        "id": "waiver-20261109-05",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Stephen Curry",
          "nbaLabel": "GS",
          "position": "PG"
        },
        "dropped": {
          "name": "Deni Avdija",
          "nbaLabel": "POR",
          "position": "SF"
        },
        "bid": 2
      },
      {
        "id": "waiver-20261109-06",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Jabari Smith Jr.",
          "nbaLabel": "HOU",
          "position": "PF"
        },
        "dropped": {
          "name": "Naz Reid",
          "nbaLabel": "CHA",
          "position": "C"
        },
        "bid": 2
      },
      {
        "id": "waiver-20261109-07",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Donovan Clingan",
          "nbaLabel": "POR",
          "position": "C"
        },
        "dropped": {
          "name": "Cameron Boozer",
          "nbaLabel": "MEM",
          "position": "PF"
        },
        "bid": 1
      },
      {
        "id": "waiver-20261109-08",
        "team": "hipopotamos",
        "type": "waiver",
        "added": {
          "name": "Kris Dunn",
          "nbaLabel": "LAC",
          "position": "PG"
        },
        "dropped": {
          "name": "Toumani Camara",
          "nbaLabel": "POR",
          "position": "SF"
        },
        "bid": 1
      },
      {
        "id": "waiver-20261109-09",
        "team": "shockers",
        "type": "waiver",
        "added": {
          "name": "Collin Murray-Boyles",
          "nbaLabel": "TOR",
          "position": "PF"
        },
        "dropped": {
          "name": "Tari Eason",
          "nbaLabel": "HOU",
          "position": "SF"
        },
        "bid": 0
      }
    ],
    "offers": [
      {
        "order": 1,
        "team": "pilsens",
        "claim": {
          "name": "Paul George",
          "nbaLabel": "BOS",
          "position": "SF"
        },
        "bid": 6,
        "result": "added",
        "transactionId": "waiver-20261109-01"
      },
      {
        "order": 2,
        "team": "pilsens",
        "claim": {
          "name": "Ty Jerome",
          "nbaLabel": "MEM",
          "position": "SG"
        },
        "bid": 5,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 3,
        "team": "pilsens",
        "claim": {
          "name": "Davion Mitchell",
          "nbaLabel": "MIA",
          "position": "PG"
        },
        "bid": 5,
        "result": "added",
        "transactionId": "waiver-20261109-02"
      },
      {
        "order": 4,
        "team": "pilsens",
        "claim": {
          "name": "Pascal Siakam",
          "nbaLabel": "IND",
          "position": "PF"
        },
        "bid": 5,
        "result": "added",
        "transactionId": "waiver-20261109-03"
      },
      {
        "order": 5,
        "team": "shockers",
        "claim": {
          "name": "Bam Adebayo",
          "nbaLabel": "MIA",
          "position": "C"
        },
        "bid": 2,
        "result": "added",
        "transactionId": "waiver-20261109-04"
      },
      {
        "order": 6,
        "team": "hipopotamos",
        "claim": {
          "name": "Stephen Curry",
          "nbaLabel": "GS",
          "position": "PG"
        },
        "bid": 2,
        "result": "added",
        "transactionId": "waiver-20261109-05"
      },
      {
        "order": 7,
        "team": "hipopotamos",
        "claim": {
          "name": "Jabari Smith Jr.",
          "nbaLabel": "HOU",
          "position": "PF"
        },
        "bid": 2,
        "result": "added",
        "transactionId": "waiver-20261109-06"
      },
      {
        "order": 8,
        "team": "pilsens",
        "claim": {
          "name": "Zion Williamson",
          "nbaLabel": "NO",
          "position": "PF"
        },
        "bid": 1,
        "result": "unsuccessful",
        "reasonCode": "acquisition-limit",
        "reason": "Se excedería el límite de incorporaciones del cruce."
      },
      {
        "order": 9,
        "team": "shockers",
        "claim": {
          "name": "Zion Williamson",
          "nbaLabel": "NO",
          "position": "PF"
        },
        "bid": 1,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 10,
        "team": "shockers",
        "claim": {
          "name": "Donovan Clingan",
          "nbaLabel": "POR",
          "position": "C"
        },
        "bid": 1,
        "result": "added",
        "transactionId": "waiver-20261109-07"
      },
      {
        "order": 11,
        "team": "hipopotamos",
        "claim": {
          "name": "Kris Dunn",
          "nbaLabel": "LAC",
          "position": "PG"
        },
        "bid": 1,
        "result": "added",
        "transactionId": "waiver-20261109-08"
      },
      {
        "order": 12,
        "team": "shockers",
        "claim": {
          "name": "Miles Bridges",
          "nbaLabel": "PHX",
          "position": "SF"
        },
        "bid": 0,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 13,
        "team": "shockers",
        "claim": {
          "name": "Ayo Dosunmu",
          "nbaLabel": "MIN",
          "position": "SG"
        },
        "bid": 0,
        "result": "unsuccessful",
        "reasonCode": "already-dropped",
        "reason": "Un jugador involucrado ya había sido cortado."
      },
      {
        "order": 14,
        "team": "shockers",
        "claim": {
          "name": "Collin Murray-Boyles",
          "nbaLabel": "TOR",
          "position": "PF"
        },
        "bid": 0,
        "result": "added",
        "transactionId": "waiver-20261109-09"
      },
      {
        "order": 15,
        "team": "shockers",
        "claim": {
          "name": "Wendell Carter Jr.",
          "nbaLabel": "ORL",
          "position": "C"
        },
        "bid": 0,
        "result": "unsuccessful",
        "reasonCode": "acquisition-limit",
        "reason": "Se excedería el límite de incorporaciones del cruce."
      }
    ],
    "highlights": [
      {
        "transactionId": "waiver-20261109-05",
        "label": "El mejor tirador",
        "reason": "Hipopotamos ficha al líder histórico de triples de la NBA por $2 y libera la plaza de Deni Avdija."
      },
      {
        "transactionId": "waiver-20261109-04",
        "label": "El nuevo eje interior",
        "reason": "Shockers paga $2 por Adebayo y corta a Jarrett Allen. Bam amplía el repertorio del equipo en rebote, campo y defensa."
      },
      {
        "transactionId": "waiver-20261109-01",
        "label": "La mayor puja",
        "reason": "Pilsens paga $6 y deja ir a AJ Dybantsa. George viene de 12 triples y siete robos en tres partidos NBA."
      },
      {
        "transactionId": "waiver-20261109-03",
        "label": "El cambio de jerarquía",
        "reason": "Siakam llega a Cromwell por $5 a cambio de la plaza de Jaylen Brown. La apuesta agrega otra vía de ataque interior."
      }
    ],
    "highlightNote": "Stephen Curry encabeza la tanda. Bam Adebayo representa a Shockers y Cromwell aporta dos de los cambios destacados. Mequetrefes no registra altas en este reporte."
  }
],

/* Planteles y perfiles por fecha: conservar el contexto histórico. */
rosterSnapshots: [
  {
    "date": "2026-10-20",
    "source": "Fichas iniciales de los equipos.",
    "teams": [
      {
        "id": "shockers",
        "roster": [
          "Shai Gilgeous-Alexander",
          "Scottie Barnes",
          "Jayson Tatum",
          "Jaren Jackson Jr.",
          "Karl-Anthony Towns",
          "Amen Thompson",
          "Kon Knueppel",
          "Dyson Daniels",
          "Cameron Boozer",
          "Daniel Gafford",
          "Herbert Jones",
          "Jalen Suggs",
          "Tari Eason"
        ],
        "leaders": [
          "Shai Gilgeous-Alexander",
          "Jayson Tatum",
          "Karl-Anthony Towns"
        ],
        "strength": "Gilgeous-Alexander, Tatum y Towns ofrecen distintas vías para construir PTS, FT% y 3PM. Barnes y Amen Thompson amplían las opciones de creación y rebote; Daniels, Jones y Jackson Jr. dan argumentos para disputar STL y BLK.",
        "challenge": "Perseguir REB y BLK con los interiores puede cambiar el perfil de FT%. AST y TO deben leerse juntos: acumular creación no garantiza eficiencia. FG% dependerá de cómo se reparta el volumen de tiro."
      },
      {
        "id": "pilsens",
        "roster": [
          "Jalen Brunson",
          "Dylan Harper",
          "Jaylen Brown",
          "Keldon Johnson",
          "Nikola Jokić",
          "Anthony Edwards",
          "Paolo Banchero",
          "AJ Dybantsa",
          "Caleb Wilson",
          "Sandro Mamukelashvili",
          "Jalen Johnson",
          "Jaylen Wells",
          "Dillon Brooks"
        ],
        "leaders": [
          "Nikola Jokić",
          "Anthony Edwards",
          "Jalen Brunson"
        ],
        "strength": "Jokić ofrece un eje para proyectar REB y AST sin depender exclusivamente de los bases. Brunson, Edwards y Brown aportan alternativas en PTS y 3PM. Banchero y Jalen Johnson suman creación desde el frente de ataque.",
        "challenge": "La construcción parece más cómoda en ataque que en BLK. Debe comprobar su respuesta en STL y vigilar TO al reunir varios generadores. FG% y FT% dependerán del volumen y las alineaciones."
      },
      {
        "id": "hipopotamos",
        "roster": [
          "Cade Cunningham",
          "Derrick White",
          "Deni Avdija",
          "Naz Reid",
          "Victor Wembanyama",
          "VJ Edgecombe",
          "Jaden McDaniels",
          "Josh Giddey",
          "Cason Wallace",
          "Bennett Stirtz",
          "Onyeka Okongwu",
          "Toumani Camara",
          "P.J. Washington"
        ],
        "leaders": [
          "Victor Wembanyama",
          "Cade Cunningham",
          "Derrick White"
        ],
        "strength": "Wembanyama es el eje del planteamiento en BLK y REB. Cunningham y Giddey permiten proyectar una disputa en AST. White, McDaniels y Wallace ofrecen alternativas para orientar las alineaciones hacia la defensa y STL.",
        "challenge": "La carga de creación exige controlar TO. El aporte de 3PM y PTS más allá de sus figuras será una pregunta central. FG% y FT% requerirán seguimiento por volumen de intentos."
      },
      {
        "id": "pelafustanes",
        "roster": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Brandon Miller",
          "Giannis Antetokounmpo",
          "Alperen Sengun",
          "Payton Pritchard",
          "OG Anunoby",
          "Alex Sarr",
          "Matas Buzelis",
          "Bobby Portis",
          "Malik Monk",
          "Royce O'Neale",
          "Klay Thompson"
        ],
        "leaders": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Giannis Antetokounmpo"
        ],
        "strength": "Dončić y Mitchell permiten construir una propuesta en PTS, AST y 3PM. Antetokounmpo y Sengun dan peso al juego interior y REB. Anunoby y Sarr aportan alternativas para buscar STL y BLK.",
        "challenge": "La convivencia de varios jugadores con el balón obliga a vigilar TO. La apuesta interior puede tensionar FT%, mientras sumar especialistas en triples puede modificar FG%. Elegir qué categorías priorizar será determinante."
      }
    ]
  },
  {
    "date": "2026-10-26",
    "source": "Captura de ESPN Fantasy – Recent Activity del 26 de octubre.",
    "teams": [
      {
        "id": "shockers",
        "roster": [
          "Shai Gilgeous-Alexander",
          "Scottie Barnes",
          "Jayson Tatum",
          "Jaren Jackson Jr.",
          "Karl-Anthony Towns",
          "Amen Thompson",
          "Kon Knueppel",
          "Dyson Daniels",
          "Cameron Boozer",
          "Paul Reed",
          "Jonathan Kuminga",
          "Fred VanVleet",
          "Tari Eason"
        ],
        "leaders": [
          "Shai Gilgeous-Alexander",
          "Jayson Tatum",
          "Karl-Anthony Towns"
        ],
        "strength": "Gilgeous-Alexander, Tatum y Towns ofrecen recursos en anotación y porcentajes. VanVleet amplía la creación; Daniels y Kuminga aportan alternativas en robos. Reed agrega profundidad interior junto a Towns y Jackson Jr.",
        "challenge": "La llegada de VanVleet debe equilibrar creación y eficiencia de tiro. El nuevo reparto de minutos interiores tras la salida de Gafford exige seguir REB y BLK; el tiro exterior continúa siendo una categoría a mejorar."
      },
      {
        "id": "pilsens",
        "roster": [
          "Domantas Sabonis",
          "Dylan Harper",
          "Jaylen Brown",
          "Keldon Johnson",
          "Nikola Jokić",
          "Anthony Edwards",
          "Darius Garland",
          "AJ Dybantsa",
          "Caleb Wilson",
          "Sandro Mamukelashvili",
          "Jalen Johnson",
          "Jaylen Wells",
          "Dillon Brooks"
        ],
        "leaders": [
          "Nikola Jokić",
          "Anthony Edwards",
          "Domantas Sabonis"
        ],
        "strength": "Jokić y Sabonis permiten construir alrededor del rebote y el pase desde el juego interior. Garland añade creación y tiro exterior; Edwards, Brown y Jalen Johnson sostienen una ofensiva con varias vías de producción.",
        "challenge": "La salida de Brunson y Banchero cambia el reparto de anotación. Sabonis amplía REB y AST, pero la respuesta en BLK continúa pendiente; Garland exige especial atención a TO."
      },
      {
        "id": "hipopotamos",
        "roster": [
          "Cade Cunningham",
          "Derrick White",
          "Deni Avdija",
          "Naz Reid",
          "Victor Wembanyama",
          "VJ Edgecombe",
          "Jaden McDaniels",
          "Tyrese Haliburton",
          "Cason Wallace",
          "Ace Bailey",
          "Walker Kessler",
          "Toumani Camara",
          "P.J. Washington"
        ],
        "leaders": [
          "Victor Wembanyama",
          "Cade Cunningham",
          "Tyrese Haliburton"
        ],
        "strength": "Wembanyama y Kessler refuerzan la protección del aro y el rebote. Cunningham y Haliburton amplían la creación; White, McDaniels y Wallace ofrecen alternativas en defensa y robos. Bailey agrega una apuesta de desarrollo a la rotación.",
        "challenge": "La presencia de dos interiores con volumen cerca del aro exige vigilar FT%. La creación de Cunningham y Haliburton debe acompañarse de control de pérdidas; la anotación de la segunda línea sigue siendo importante."
      },
      {
        "id": "pelafustanes",
        "roster": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Brandon Miller",
          "Giannis Antetokounmpo",
          "Alperen Sengun",
          "Payton Pritchard",
          "OG Anunoby",
          "Alex Sarr",
          "Matas Buzelis",
          "Bobby Portis",
          "Malik Monk",
          "Aaron Wiggins",
          "Jalen Smith"
        ],
        "leaders": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Giannis Antetokounmpo"
        ],
        "strength": "Dončić y Mitchell sostienen PTS, AST y 3PM, con Antetokounmpo y Sengun como apoyos interiores. Aaron Wiggins suma una opción exterior y Jalen Smith amplía la rotación de rebote, junto a Sarr y Portis.",
        "challenge": "La mejora de la segunda línea debe acompañarse de control de pérdidas y mejores porcentajes. La salida de Klay Thompson obliga a redistribuir sus triples; no toda la anotación nueva sustituye el mismo perfil."
      }
    ]
  },
  {
    "date": "2026-11-02",
    "source": "Planteles tras las ocho altas y bajas confirmadas en el reporte de ofertas de ESPN del 2 de noviembre de 2026. Las ofertas fallidas no alteran las plantillas.",
    "teams": [
      {
        "id": "shockers",
        "roster": [
          "Shai Gilgeous-Alexander",
          "Scottie Barnes",
          "Jayson Tatum",
          "Jarrett Allen",
          "Cooper Flagg",
          "Amen Thompson",
          "Yaxel Lendeborg",
          "Dyson Daniels",
          "Cameron Boozer",
          "Paul Reed",
          "Jonathan Kuminga",
          "Fred VanVleet",
          "Tari Eason"
        ],
        "leaders": [
          "Shai Gilgeous-Alexander",
          "Jayson Tatum",
          "Cooper Flagg"
        ],
        "strength": "Gilgeous-Alexander y Tatum conservan el liderazgo. Flagg ocupa la plaza de Towns; Allen refuerza el juego interior y Lendeborg amplía la rotación exterior junto a Barnes, Daniels y Amen Thompson.",
        "challenge": "La salida de Towns cambia el reparto de rebotes y porcentajes. Allen debe sostener presencia interior tras el corte de Jackson Jr.; Flagg y Lendeborg añaden un nuevo reparto de creación y pérdidas que habrá que seguir."
      },
      {
        "id": "pilsens",
        "roster": [
          "Domantas Sabonis",
          "Dylan Harper",
          "Jaylen Brown",
          "Keldon Johnson",
          "Nikola Jokić",
          "Tyrese Maxey",
          "Franz Wagner",
          "AJ Dybantsa",
          "Caleb Wilson",
          "Sandro Mamukelashvili",
          "Jalen Johnson",
          "Jaylen Wells",
          "Dillon Brooks"
        ],
        "leaders": [
          "Nikola Jokić",
          "Tyrese Maxey",
          "Domantas Sabonis"
        ],
        "strength": "Jokić y Sabonis sostienen el pase y el rebote interior. Maxey ocupa la plaza de Edwards y Wagner la de Garland: la nueva rotación reúne creación desde el perímetro y el alero, con Brown y Jalen Johnson como apoyos.",
        "challenge": "Los cambios de Edwards por Maxey y de Garland por Wagner exigen comprobar cómo se distribuyen triples, asistencias y eficiencia. La respuesta en tapones y el control de pérdidas continúan siendo áreas importantes."
      },
      {
        "id": "hipopotamos",
        "roster": [
          "Cade Cunningham",
          "Derrick White",
          "Deni Avdija",
          "Naz Reid",
          "Victor Wembanyama",
          "Ajay Mitchell",
          "Jaden McDaniels",
          "Devin Booker",
          "Christian Braun",
          "Ace Bailey",
          "Walker Kessler",
          "Toumani Camara",
          "P.J. Washington"
        ],
        "leaders": [
          "Victor Wembanyama",
          "Cade Cunningham",
          "Devin Booker"
        ],
        "strength": "Wembanyama y Kessler conservan el núcleo de protección del aro. Cunningham y Booker encabezan la creación exterior, con Avdija como apoyo; Braun y Ajay Mitchell amplían las opciones de rotación.",
        "challenge": "Booker sustituye a Haliburton, mientras Braun y Ajay Mitchell ocupan las plazas de Wallace y Edgecombe. Hay que seguir el nuevo reparto de asistencias y anotación, junto al control de pérdidas y los tiros libres de los interiores."
      },
      {
        "id": "pelafustanes",
        "roster": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Brandon Miller",
          "Giannis Antetokounmpo",
          "Alperen Sengun",
          "Payton Pritchard",
          "OG Anunoby",
          "Alex Sarr",
          "Matas Buzelis",
          "Bobby Portis",
          "Malik Monk",
          "Aaron Wiggins",
          "Jalen Smith"
        ],
        "leaders": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Giannis Antetokounmpo"
        ],
        "strength": "Dončić y Mitchell sostienen PTS, AST y 3PM, con Antetokounmpo y Sengun como apoyos interiores. Aaron Wiggins suma una opción exterior y Jalen Smith amplía la rotación de rebote, junto a Sarr y Portis.",
        "challenge": "La mejora de la segunda línea debe acompañarse de control de pérdidas y mejores porcentajes. La salida de Klay Thompson obliga a redistribuir sus triples; no toda la anotación nueva sustituye el mismo perfil."
      }
    ]
  },
  {
    "date": "2026-11-09",
    "source": "Planteles tras las nueve altas del reporte de ofertas de ESPN Fantasy del lunes 9 de noviembre de 2026. Las bajas se aplican solo a las solicitudes ganadoras.",
    "teams": [
      {
        "id": "shockers",
        "roster": [
          "Shai Gilgeous-Alexander",
          "Scottie Barnes",
          "Jayson Tatum",
          "Bam Adebayo",
          "Cooper Flagg",
          "Amen Thompson",
          "Yaxel Lendeborg",
          "Dyson Daniels",
          "Donovan Clingan",
          "Paul Reed",
          "Jonathan Kuminga",
          "Fred VanVleet",
          "Collin Murray-Boyles"
        ],
        "leaders": [
          "Shai Gilgeous-Alexander",
          "Jayson Tatum",
          "Cooper Flagg"
        ],
        "strength": "Gilgeous-Alexander, Tatum y Flagg sostienen la creación. Bam Adebayo y Donovan Clingan amplían los recursos interiores, con Murray-Boyles como otra opción de rotación junto a Barnes, Daniels y Amen Thompson.",
        "challenge": "El recambio interior modifica las fuentes de rebotes y tapones. Shockers necesita conservar su ventaja en robos y elevar la eficiencia de campo, la categoría que cedió ante Mequetrefes."
      },
      {
        "id": "pilsens",
        "roster": [
          "Domantas Sabonis",
          "Dylan Harper",
          "Pascal Siakam",
          "Keldon Johnson",
          "Nikola Jokić",
          "Tyrese Maxey",
          "Franz Wagner",
          "Paul George",
          "Caleb Wilson",
          "Davion Mitchell",
          "Jalen Johnson",
          "Jaylen Wells",
          "Dillon Brooks"
        ],
        "leaders": [
          "Nikola Jokić",
          "Tyrese Maxey",
          "Pascal Siakam"
        ],
        "strength": "Jokić y Sabonis conservan la creación interior. Siakam amplía las opciones de ataque desde el ala pívot, George aporta tiro y manos en el perímetro y Davion Mitchell agrega otra vía de pase.",
        "challenge": "Salen Brown, Dybantsa y Mamukelashvili. Cromwell necesita repartir la anotación que aportaba Brown y sostener la defensa interior mientras integra tres perfiles nuevos."
      },
      {
        "id": "hipopotamos",
        "roster": [
          "Cade Cunningham",
          "Derrick White",
          "Stephen Curry",
          "Jabari Smith Jr.",
          "Victor Wembanyama",
          "Ajay Mitchell",
          "Jaden McDaniels",
          "Devin Booker",
          "Christian Braun",
          "Ace Bailey",
          "Walker Kessler",
          "Kris Dunn",
          "P.J. Washington"
        ],
        "leaders": [
          "Victor Wembanyama",
          "Cade Cunningham",
          "Stephen Curry"
        ],
        "strength": "Wembanyama y Kessler sostienen el aro. Curry se suma a Cunningham y Booker para ampliar el tiro y la creación exterior. Jabari Smith Jr. aporta alcance desde el puesto de ala pívot y Kris Dunn suma una opción defensiva en el perímetro.",
        "challenge": "La salida de Avdija reduce la creación desde el alero. Las de Reid y Camara cambian el reparto de rebotes y defensa. Integrar a Curry exige repartir la pelota y sostener el equilibrio que llevó al equipo al primer lugar."
      },
      {
        "id": "pelafustanes",
        "roster": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Brandon Miller",
          "Giannis Antetokounmpo",
          "Alperen Sengun",
          "Payton Pritchard",
          "OG Anunoby",
          "Alex Sarr",
          "Matas Buzelis",
          "Bobby Portis",
          "Malik Monk",
          "Aaron Wiggins",
          "Jalen Smith"
        ],
        "leaders": [
          "Luka Dončić",
          "Donovan Mitchell",
          "Giannis Antetokounmpo"
        ],
        "strength": "Dončić y Mitchell sostienen PTS, AST y 3PM, con Antetokounmpo y Sengun como apoyos interiores. Aaron Wiggins suma una opción exterior y Jalen Smith amplía la rotación de rebote, junto a Sarr y Portis.",
        "challenge": "La mejora de la segunda línea debe acompañarse de control de pérdidas y mejores porcentajes. La salida de Klay Thompson obliga a redistribuir sus triples; no toda la anotación nueva sustituye el mismo perfil."
      }
    ]
  }
],

/* Equipos actuales ------------------------------------------------------ */
teams: [
  {
    "id": "shockers",
    "name": "Penalolen Shockers",
    "short": "SHK",
    "city": "Peñalolén",
    "owner": "Patricio Uribe",
    "ownerNote": "Creador y comisionado",
    "initials": "PS",
    "colors": [
      "#3d8bff",
      "#c9d3e0"
    ],
    "logo": "./assets/penalolen-shockers.webp",
    "leaders": [
      "Shai Gilgeous-Alexander",
      "Jayson Tatum",
      "Cooper Flagg"
    ],
    "roster": [
      "Shai Gilgeous-Alexander",
      "Scottie Barnes",
      "Jayson Tatum",
      "Bam Adebayo",
      "Cooper Flagg",
      "Amen Thompson",
      "Yaxel Lendeborg",
      "Dyson Daniels",
      "Donovan Clingan",
      "Paul Reed",
      "Jonathan Kuminga",
      "Fred VanVleet",
      "Collin Murray-Boyles"
    ],
    "strength": "Gilgeous-Alexander, Tatum y Flagg sostienen la creación. Bam Adebayo y Donovan Clingan amplían los recursos interiores, con Murray-Boyles como otra opción de rotación junto a Barnes, Daniels y Amen Thompson.",
    "challenge": "El recambio interior modifica las fuentes de rebotes y tapones. Shockers necesita conservar su ventaja en robos y elevar la eficiencia de campo, la categoría que cedió ante Mequetrefes.",
    "rosterUpdatedDate": "2026-11-09",
    "rosterReportId": "waivers-2026-11-09"
  },
  {
    "id": "pilsens",
    "name": "Cromwell Pilsens",
    "short": "CRP",
    "city": "Cromwell, Nueva Zelanda",
    "owner": "Diego Alvarez, “el Rubio”",
    "ownerNote": "",
    "initials": "CP",
    "colors": [
      "#f5a623",
      "#20304e"
    ],
    "logo": "./assets/cromwell-pilsens.webp",
    "leaders": [
      "Nikola Jokić",
      "Tyrese Maxey",
      "Pascal Siakam"
    ],
    "roster": [
      "Domantas Sabonis",
      "Dylan Harper",
      "Pascal Siakam",
      "Keldon Johnson",
      "Nikola Jokić",
      "Tyrese Maxey",
      "Franz Wagner",
      "Paul George",
      "Caleb Wilson",
      "Davion Mitchell",
      "Jalen Johnson",
      "Jaylen Wells",
      "Dillon Brooks"
    ],
    "strength": "Jokić y Sabonis conservan la creación interior. Siakam amplía las opciones de ataque desde el ala pívot, George aporta tiro y manos en el perímetro y Davion Mitchell agrega otra vía de pase.",
    "challenge": "Salen Brown, Dybantsa y Mamukelashvili. Cromwell necesita repartir la anotación que aportaba Brown y sostener la defensa interior mientras integra tres perfiles nuevos.",
    "rosterUpdatedDate": "2026-11-09",
    "rosterReportId": "waivers-2026-11-09"
  },
  {
    "id": "hipopotamos",
    "name": "Los Hipopotamos Chuchetumare",
    "short": "LHC",
    "city": "Santiago",
    "owner": "Cristóbal Uribe",
    "ownerNote": "",
    "initials": "LHC",
    "colors": [
      "#7b3fd1",
      "#f2ba33"
    ],
    "logo": "./assets/los-hipopotamos-chuchetumare.webp?v=2",
    "leaders": [
      "Victor Wembanyama",
      "Cade Cunningham",
      "Stephen Curry"
    ],
    "roster": [
      "Cade Cunningham",
      "Derrick White",
      "Stephen Curry",
      "Jabari Smith Jr.",
      "Victor Wembanyama",
      "Ajay Mitchell",
      "Jaden McDaniels",
      "Devin Booker",
      "Christian Braun",
      "Ace Bailey",
      "Walker Kessler",
      "Kris Dunn",
      "P.J. Washington"
    ],
    "strength": "Wembanyama y Kessler sostienen el aro. Curry se suma a Cunningham y Booker para ampliar el tiro y la creación exterior. Jabari Smith Jr. aporta alcance desde el puesto de ala pívot y Kris Dunn suma una opción defensiva en el perímetro.",
    "challenge": "La salida de Avdija reduce la creación desde el alero. Las de Reid y Camara cambian el reparto de rebotes y defensa. Integrar a Curry exige repartir la pelota y sostener el equilibrio que llevó al equipo al primer lugar.",
    "rosterUpdatedDate": "2026-11-09",
    "rosterReportId": "waivers-2026-11-09"
  },
  {
    "id": "pelafustanes",
    "name": "Mequetrefes",
    "short": "MQT",
    "city": "Santiago",
    "owner": "Carlos Sanchez, “el Chino”",
    "ownerNote": "",
    "initials": "MQ",
    "colors": [
      "#ff2a2a",
      "#3a0d0d"
    ],
    "logo": "./assets/mequetrefes.webp",
    "leaders": [
      "Luka Dončić",
      "Donovan Mitchell",
      "Giannis Antetokounmpo"
    ],
    "roster": [
      "Luka Dončić",
      "Donovan Mitchell",
      "Brandon Miller",
      "Giannis Antetokounmpo",
      "Alperen Sengun",
      "Payton Pritchard",
      "OG Anunoby",
      "Alex Sarr",
      "Matas Buzelis",
      "Bobby Portis",
      "Malik Monk",
      "Aaron Wiggins",
      "Jalen Smith"
    ],
    "strength": "Dončić y Mitchell sostienen PTS, AST y 3PM, con Antetokounmpo y Sengun como apoyos interiores. Aaron Wiggins suma una opción exterior y Jalen Smith amplía la rotación de rebote, junto a Sarr y Portis.",
    "challenge": "La mejora de la segunda línea debe acompañarse de control de pérdidas y mejores porcentajes. La salida de Klay Thompson obliga a redistribuir sus triples; no toda la anotación nueva sustituye el mismo perfil.",
    "rosterUpdatedDate": "2026-10-26",
    "rosterReportId": "waivers-2026-10-26"
  }
],

/* Calendario y resultados -----------------------------------------------
   Usar las fechas oficiales de ESPN: la primera fecha es abreviada. */
schedule: [
  {
    "week": 1,
    "label": "Semana 1",
    "start": "2026-10-20",
    "end": "2026-10-25",
    "featured": "w1-m1",
    "matchups": [
      {
        "id": "w1-m1",
        "teams": [
          "hipopotamos",
          "pelafustanes"
        ],
        "status": "final",
        "source": "Resultado definitivo de ESPN Fantasy aportado por el participante.",
        "sourceImage": "./assets/cortes/semana-1-final-hipopotamos.png",
        "stats": {
          "hipopotamos": {
            "fgp": 0.4475,
            "ftp": 0.7021,
            "tpm": 59,
            "reb": 207,
            "ast": 127,
            "stl": 32,
            "blk": 32,
            "to": 70,
            "pts": 483
          },
          "pelafustanes": {
            "fgp": 0.4416,
            "ftp": 0.8118,
            "tpm": 58,
            "reb": 180,
            "ast": 99,
            "stl": 26,
            "blk": 17,
            "to": 89,
            "pts": 574
          }
        },
        "updatedDate": "2026-10-26",
        "reportId": "semana-1-final-2026-10-25"
      },
      {
        "id": "w1-m2",
        "teams": [
          "pilsens",
          "shockers"
        ],
        "status": "final",
        "source": "Resultado definitivo de ESPN Fantasy aportado por el participante.",
        "sourceImage": "./assets/cortes/semana-1-final-shockers.png",
        "stats": {
          "pilsens": {
            "fgp": 0.4565,
            "ftp": 0.7484,
            "tpm": 54,
            "reb": 200,
            "ast": 133,
            "stl": 42,
            "blk": 16,
            "to": 76,
            "pts": 642
          },
          "shockers": {
            "fgp": 0.4509,
            "ftp": 0.8167,
            "tpm": 34,
            "reb": 233,
            "ast": 117,
            "stl": 53,
            "blk": 27,
            "to": 78,
            "pts": 536
          }
        },
        "updatedDate": "2026-10-26",
        "reportId": "semana-1-final-2026-10-25"
      }
    ]
  },
  {
    "week": 2,
    "label": "Semana 2",
    "start": "2026-10-26",
    "end": "2026-11-01",
    "featured": "w2-m1",
    "matchups": [
      {
        "id": "w2-m1",
        "teams": [
          "hipopotamos",
          "shockers"
        ],
        "status": "final",
        "stats": {
          "hipopotamos": {
            "fgp": 0.48155738,
            "ftp": 0.74789916,
            "tpm": 62,
            "reb": 260,
            "ast": 115,
            "stl": 36,
            "blk": 41,
            "to": 70,
            "pts": 621
          },
          "shockers": {
            "fgp": 0.4875717,
            "ftp": 0.80473373,
            "tpm": 48,
            "reb": 243,
            "ast": 149,
            "stl": 40,
            "blk": 24,
            "to": 81,
            "pts": 694
          }
        },
        "updatedAt": "2026-11-02T16:03:27.476Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=1",
        "sourceSnapshot": "./assets/cortes/espn/20261102T160327.476Z.json"
      },
      {
        "id": "w2-m2",
        "teams": [
          "pilsens",
          "pelafustanes"
        ],
        "status": "final",
        "stats": {
          "pilsens": {
            "fgp": 0.4790287,
            "ftp": 0.79674797,
            "tpm": 51,
            "reb": 215,
            "ast": 155,
            "stl": 35,
            "blk": 20,
            "to": 85,
            "pts": 583
          },
          "pelafustanes": {
            "fgp": 0.47148289,
            "ftp": 0.80147059,
            "tpm": 88,
            "reb": 252,
            "ast": 137,
            "stl": 43,
            "blk": 29,
            "to": 82,
            "pts": 693
          }
        },
        "updatedAt": "2026-11-02T16:03:27.476Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=3",
        "sourceSnapshot": "./assets/cortes/espn/20261102T160327.476Z.json"
      }
    ]
  },
  {
    "week": 3,
    "label": "Semana 3",
    "start": "2026-11-02",
    "end": "2026-11-08",
    "featured": "w3-m1",
    "matchups": [
      {
        "id": "w3-m1",
        "teams": [
          "pilsens",
          "hipopotamos"
        ],
        "status": "final",
        "stats": {
          "pilsens": {
            "fgp": 0.48399247,
            "ftp": 0.80254777,
            "tpm": 54,
            "reb": 241,
            "ast": 169,
            "stl": 48,
            "blk": 8,
            "to": 85,
            "pts": 694
          },
          "hipopotamos": {
            "fgp": 0.48414023,
            "ftp": 0.79695431,
            "tpm": 63,
            "reb": 263,
            "ast": 157,
            "stl": 50,
            "blk": 33,
            "to": 93,
            "pts": 800
          }
        },
        "updatedAt": "2026-11-09T13:41:12.988Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=3&seasonId=2027&teamId=4",
        "sourceSnapshot": "./assets/cortes/espn/20261109T134112.988Z.json"
      },
      {
        "id": "w3-m2",
        "teams": [
          "shockers",
          "pelafustanes"
        ],
        "status": "final",
        "stats": {
          "shockers": {
            "fgp": 0.41330645,
            "ftp": 0.82634731,
            "tpm": 55,
            "reb": 232,
            "ast": 182,
            "stl": 40,
            "blk": 25,
            "to": 95,
            "pts": 603
          },
          "pelafustanes": {
            "fgp": 0.45366795,
            "ftp": 0.75824176,
            "tpm": 78,
            "reb": 222,
            "ast": 170,
            "stl": 33,
            "blk": 28,
            "to": 84,
            "pts": 686
          }
        },
        "updatedAt": "2026-11-09T13:41:12.988Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=3&seasonId=2027&teamId=3",
        "sourceSnapshot": "./assets/cortes/espn/20261109T134112.988Z.json"
      }
    ]
  },
  {
    "week": 4,
    "label": "Semana 4",
    "start": "2026-11-09",
    "end": "2026-11-15",
    "featured": "w4-m2",
    "matchups": [
      {
        "id": "w4-m1",
        "teams": [
          "shockers",
          "pilsens"
        ],
        "status": "partial",
        "stats": {
          "shockers": {
            "fgp": 0.5,
            "ftp": 0.84444444,
            "tpm": 15,
            "reb": 78,
            "ast": 39,
            "stl": 14,
            "blk": 11,
            "to": 18,
            "pts": 165
          },
          "pilsens": {
            "fgp": 0.49132948,
            "ftp": 0.80434783,
            "tpm": 24,
            "reb": 74,
            "ast": 56,
            "stl": 10,
            "blk": 2,
            "to": 16,
            "pts": 231
          }
        },
        "updatedAt": "2026-11-11T12:29:54.358Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=4&seasonId=2027&teamId=1",
        "sourceSnapshot": "./assets/cortes/espn/20261111T122954.358Z.json"
      },
      {
        "id": "w4-m2",
        "teams": [
          "hipopotamos",
          "pelafustanes"
        ],
        "status": "partial",
        "stats": {
          "hipopotamos": {
            "fgp": 0.53548387,
            "ftp": 0.80769231,
            "tpm": 20,
            "reb": 68,
            "ast": 43,
            "stl": 9,
            "blk": 13,
            "to": 21,
            "pts": 228
          },
          "pelafustanes": {
            "fgp": 0.47933884,
            "ftp": 0.76,
            "tpm": 20,
            "reb": 54,
            "ast": 37,
            "stl": 9,
            "blk": 4,
            "to": 15,
            "pts": 155
          }
        },
        "updatedAt": "2026-11-11T12:29:54.358Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=4&seasonId=2027&teamId=4",
        "sourceSnapshot": "./assets/cortes/espn/20261111T122954.358Z.json"
      }
    ]
  }
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
    'Criterio de desempate entre equipos con el mismo porcentaje de categorías ganadas.',
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
  "id": "waivers-9-noviembre-curry-hipopotamos",
  "date": "2026-11-09",
  "category": "Trades",
  "readingMinutes": 5,
  "title": "El mejor tirador de la historia llega a Hipopotamos por $2",
  "excerpt": "Stephen Curry toma la plaza de Deni Avdija y se junta con Wembanyama, Cunningham y Booker. Bam Adebayo cambia el juego interior de Shockers. Cromwell ficha a Paul George y Pascal Siakam en una tanda de nueve altas por $24.",
  "teams": [
    "hipopotamos",
    "shockers",
    "pilsens",
    "pelafustanes"
  ],
  "transactionReportId": "waivers-2026-11-09",
  "rulesLink": true,
  "image": {
    "src": "./assets/editorial/waivers-curry-2026-11-09.webp",
    "small": "./assets/editorial/waivers-curry-2026-11-09-640.webp",
    "width": 1280,
    "height": 720,
    "alt": "Stephen Curry sostiene el gesto de lanzamiento mientras la pelota vuela hacia el aro.",
    "caption": "Stephen Curry, protagonista del mercado de Papafritas. Ilustración editorial."
  },
  "source": "Altas, bajas y precios transcritos del Free Agent Offers Report de ESPN Fantasy del 9 de noviembre de 2026. Las cifras individuales citadas corresponden a actuaciones NBA del 2 al 8 de noviembre. Las pujas son unidades del presupuesto fantasy. Las seis solicitudes fallidas quedan fuera del gasto.",
  "sources": [
    {
      "title": "ESPN Fantasy · Captura del reporte de ofertas",
      "url": "./assets/cortes/ofertas-2026-11-09.png"
    },
    {
      "title": "Registro de las 15 ofertas y nueve altas",
      "url": "./assets/cortes/ofertas-2026-11-09.json"
    },
    {
      "title": "NBA · Curry y el récord histórico de triples",
      "url": "https://api-hub.nba.com/news/nba-players-with-multiple-3-point-scoring-titles"
    },
    {
      "title": "Warriors · Los 29 puntos de Curry ante Miami",
      "url": "https://www.nba.com/warriors/game/0022600188-heat-vs-warriors-san-francisco-ca-11-05-2026/event-details"
    },
    {
      "title": "ESPN · Acta NBA Warriors–Suns",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909919"
    },
    {
      "title": "ESPN · Acta NBA Warriors–Magic",
      "url": "https://www.espn.com/nba/boxscore/_/gameId/401909942"
    },
    {
      "title": "Papafritas · El cómputo y las actas del cierre anterior",
      "url": "./assets/cortes/semana-4-fuentes-2026-11-09.json"
    },
    {
      "title": "ESPN Fantasy · El mercado del 2 de noviembre",
      "url": "./assets/cortes/ofertas-2026-11-02.json"
    },
    {
      "title": "ESPN · Actuaciones NBA de Bam Adebayo",
      "url": "https://www.espn.com/nba/player/gamelog/_/id/4066261/bam-adebayo"
    },
    {
      "title": "ESPN · Actuaciones NBA de Donovan Clingan",
      "url": "https://www.espn.com/nba/player/gamelog/_/id/5105565/donovan-clingan"
    },
    {
      "title": "ESPN · Actuaciones NBA de Paul George",
      "url": "https://www.espn.com/nba/player/gamelog/_/id/4251/paul-george"
    },
    {
      "title": "ESPN · Actuaciones NBA de Pascal Siakam",
      "url": "https://www.espn.com/nba/player/gamelog/_/id/3149673/pascal-siakam"
    }
  ],
  "body": [
    [
      "p",
      "El lunes pasado, Tobi consiguió a Devin Booker por $2. Este lunes repitió el monto y se llevó al líder histórico de triples de la NBA. Stephen Curry llega a Hipopotamos en lugar de Deni Avdija y le da al puntero de Papafritas una combinación que hace una semana solo cabía en el 2K. Wembanyama protege el aro, Cunningham reparte y Booker y Curry obligan a repartir la atención por fuera."
    ],
    [
      "transaction-highlights",
      "waivers-2026-11-09"
    ],
    [
      "h2",
      "Curry reabre la discusión del último tiro"
    ],
    [
      "p",
      "Curry venía de 104 puntos y 16 triples en tres partidos NBA, con 26 de 27 en libres. Contra Miami hizo 29 puntos y seis triples. Su llegada añade tiro a un equipo que ya convirtió 63 triples y anotó 800 puntos en la semana 3. Mequetrefes, el rival de turno, venía de 78 triples. Cristóbal se refuerza justo en la columna donde el Chino tenía un argumento para la revancha."
    ],
    [
      "p",
      "También hay un costo. Avdija aportó 86 puntos, 23 rebotes y 29 asistencias en el cómputo del último cruce. Jabari Smith Jr., que llega por $2 en la plaza de Naz Reid, ayuda a cubrir tamaño y tiro. Kris Dunn, por $1 en lugar de Toumani Camara, ofrece otra fuente de presión sobre la pelota. Hipopotamos gastó $5 en los tres movimientos y tendrá que redistribuir el pase que salía del alero."
    ],
    [
      "p",
      "Booker, que ya había negociado dos casilleros, pidió una reunión por el último tiro. Tobi sugirió resolverla con el método que el Chino propuso en 2023 para zanjar lo de Jordan y LeBron. Una cancha de pádel y el ganador se lleva el argumento. Curry pidió conocer primero la distancia desde el fondo de la pista. Wembanyama se ofreció de juez de silla. Booker impugnó el reglamento antes del primer saque."
    ],
    [
      "sources",
      [
        2,
        3,
        4,
        5,
        6
      ]
    ],
    [
      "h2",
      "El Pato le entrega la pintura a Bam"
    ],
    [
      "p",
      "Shockers ficha a Bam Adebayo por $2 y libera a Jarrett Allen. Bam viene de 87 puntos, 37 rebotes y siete robos en cuatro partidos NBA. Donovan Clingan entra por Cameron Boozer a $1 después de una semana NBA de 45 rebotes y nueve tapones. Collin Murray-Boyles completa el recambio a $0 por Tari Eason. El Pato rehace tres plazas interiores después de perder un 5–4 que se decidió en tapones."
    ],
    [
      "p",
      "En la presentación, Pinki preguntó si Bam iba a poder con el peso de ser el sucesor de Glen Davis en los afectos del perrito Choko. El Pato precisó que Glen conserva su cargo honorario y que la discusión relevante está en la cancha. Para el próximo domingo espera que los encargados de traer el agua también puedan proteger el aro. Bam pidió que le mostraran primero la pizarra."
    ],
    [
      "sources",
      [
        8,
        9
      ]
    ],
    [
      "h2",
      "George llega con la puja más alta y Siakam ocupa la plaza de Brown"
    ],
    [
      "p",
      "Paul George costó $6, la mayor oferta ganadora de la tanda, y entra por AJ Dybantsa. Sus 12 triples en 24 intentos y siete robos en tres partidos NBA recientes apuntan a dos categorías donde Pilsens cedió ante Hipopotamos. Siakam llega por $5 y desplaza a Jaylen Brown, que venía de 104 puntos NBA. Pascal había quedado en una oferta fallida el lunes anterior y esta vez sí entra. Aporta otra vía de ataque junto a Jokić y Sabonis, con 43 puntos y cero pérdidas en sus dos partidos NBA de la semana anterior. Davion Mitchell completa la inversión de $16 en la plaza de Sandro Mamukelashvili."
    ],
    [
      "p",
      "El Rubio encargó una cortina para presentar al nuevo Cromwell. Quería el reggae que Tobi le debe desde 2024, pero con la condición de que se pudiera cambiar el nombre de los fichajes antes del estribillo. George preguntó si el estreno estaba confirmado. Siakam, que ya había visto su nombre en un intento fallido, dijo que prefería esperar a aparecer en la planilla. Jokić pidió que le avisaran cuando terminaran de discutir la música."
    ],
    [
      "sources",
      [
        0,
        1,
        7,
        10,
        11
      ]
    ],
    [
      "h2",
      "El Chino conserva el camarín y toma nota"
    ],
    [
      "p",
      "Mequetrefes llega a la revancha sin altas en este reporte. Mantiene al equipo que le dio vuelta a Shockers y tiene a Curry al frente desde el otro banco. El Chino pidió que el debate del GOAT quedara fuera de la previa, tal como había propuesto Pinki en 2024. Después mandó a reservar una cancha por si había que apelar. En la lista de asistentes dejó la fecha sin cerrar. Todavía quedaban juntas por negociar."
    ],
    [
      "transaction-table",
      "waivers-2026-11-09"
    ],
    [
      "offers-table",
      "waivers-2026-11-09"
    ]
  ]
},
{
  "id": "previa-semana-4-las-revanchas",
  "date": "2026-11-09",
  "category": "Previas",
  "readingMinutes": 4,
  "title": "La semana de las revanchas abre con el líder contra el Chino",
  "excerpt": "Hipopotamos y Mequetrefes cruzan el 1.º y el 2.º de la tabla. Shockers vuelve a encontrarse con Cromwell tras el 4–5 del debut. Jokić, Barnes y Allen figuran cuestionables para el lunes, y Brandon Miller está descartado.",
  "teams": [
    "hipopotamos",
    "pelafustanes",
    "shockers",
    "pilsens"
  ],
  "fantasySnapshot": {
    "week": 4,
    "weekLabel": "Semana 4",
    "start": "2026-11-09",
    "end": "2026-11-15",
    "matchups": [
      {
        "id": "w4-m1",
        "teams": [
          "shockers",
          "pilsens"
        ],
        "status": "scheduled"
      },
      {
        "id": "w4-m2",
        "teams": [
          "hipopotamos",
          "pelafustanes"
        ],
        "status": "scheduled"
      }
    ]
  },
  "sources": [
    {
      "title": "ESPN Fantasy · Cruces y planteles verificados el lunes",
      "url": "./assets/cortes/semana-4-fuentes-2026-11-09.json"
    },
    {
      "title": "NBA · Parte de lesiones del lunes, 14:45 de Chile",
      "url": "https://ak-static.cms.nba.com/referee/injury/Injury-Report_2026-11-09_12_45PM.pdf"
    },
    {
      "title": "NBA · Agenda del lunes 9",
      "url": "https://www.nba.com/games?date=2026-11-09"
    },
    {
      "title": "NBA · Agenda del martes 10",
      "url": "https://www.nba.com/games?date=2026-11-10"
    },
    {
      "title": "ESPN Fantasy · Cierre oficial del 2 al 8 de noviembre",
      "url": "./assets/cortes/espn/20261109T134112.988Z.json"
    }
  ],
  "source": "Cruces oficiales de ESPN Fantasy del 9 al 15 de noviembre. Planteles consultados el lunes a las 15:01 de Chile. Estados del parte NBA de las 14:45 de Chile para los partidos indicados.",
  "body": [
    [
      "p",
      "Se cumplió la primera vuelta de enfrentamientos y a los cuatro les toca volver a la escena del debut. Hipopotamos llega con 17–10 en categorías y Mequetrefes con 14–13. Shockers parte en 13–14 y Pilsens en 10–17. Los duelos son los mismos que en octubre. El mercado les cambió las rotaciones y, a juzgar por cómo se saludaron el lunes, también la memoria."
    ],
    [
      "h2",
      "Hipopotamos–Mequetrefes abre la pelea de arriba"
    ],
    [
      "matchup-cut",
      "w4-m2"
    ],
    [
      "p",
      "El 7–2 de Hipopotamos en la primera fecha dejó una cuenta rara. Mequetrefes anotó 574 puntos contra 483 y ganó los libres, pero cedió las otras siete columnas. En la tercera semana el Chino mejoró el control, con 84 pérdidas y 28 tapones. Para darle pelea al líder necesita sostener ambos números, disputar el campo y aprovechar que sus 78 triples superaron los 63 del último corte de Cristóbal."
    ],
    [
      "p",
      "Brandon Miller está descartado para el lunes ante Cleveland por la lesión de cadera. El Chino mirará a Aaron Wiggins y a Payton Pritchard para sostener el tiro mientras espera el próximo parte. Hipopotamos viene de 800 puntos, 263 rebotes y 33 tapones. Booker y Wembanyama tienen un duelo NBA entre Phoenix y San Antonio a las 23:00 de Chile y comparten lado en fantasy. Antes, a las 21:00, los Lakers visitan Atlanta. Si juegan Dončić y Kessler, sus números empujarán en direcciones opuestas. Christian Braun figura cuestionable para Denver–Houston."
    ],
    [
      "p",
      "Cristóbal quiso dejar el 7–2 del estreno en la pizarra para el saludo. El Chino aceptó, con una condición. Dejar también escrito el 5–4 del último domingo y guardar espacio debajo."
    ],
    [
      "sources",
      [
        0,
        1,
        2,
        4
      ]
    ],
    [
      "h2",
      "Shockers–Pilsens tiene otra cuenta por cobrar"
    ],
    [
      "matchup-cut",
      "w4-m1"
    ],
    [
      "p",
      "Cromwell ganó 5–4 en el estreno y tiene una ruta parecida para la revancha. Viene de 169 asistencias, 85 pérdidas y un 48,399% de campo. Shockers registró 182 asistencias y 40 robos, pero su 41,33% de campo le abrió la puerta a Mequetrefes. La pelea por creación y eficiencia puede pesar tanto como la anotación de Shai, Tatum, Maxey y Brown."
    ],
    [
      "p",
      "El lunes a las 22:30 de Chile se juega Denver–Houston, con Jokić cuestionable por el codo derecho. Shockers tiene a Barnes cuestionable para Toronto–Memphis y a Allen en la misma condición para Cleveland–Charlotte. El martes a las 22:00, Boston visita a Philadelphia. Tatum y los dos anotadores de Cromwell tendrán una cita NBA que atraviesa el cruce fantasy. Si el Rubio consigue que Wagner y Sabonis sostengan el pase mientras sus tiradores ganan campo, el recuerdo del 5–4 del debut puede durar algo más que una cargada."
    ],
    [
      "p",
      "Patricio pidió que nadie llevara sobres al vestuario. El Rubio llegó con una carpeta. La abrió y tenía adentro una sola hoja con los porcentajes sin redondear."
    ],
    [
      "sources",
      [
        0,
        1,
        2,
        3,
        4
      ]
    ]
  ]
},
{
  "id": "mercado-semana-4-gafford-klay-y-los-cupos",
  "date": "2026-11-09",
  "category": "Trades",
  "readingMinutes": 4,
  "title": "El Rubio busca tapones y el Chino vuelve a mirar a Klay",
  "excerpt": "Daniel Gafford, Klay Thompson, Jamal Shead y Matisse Thybulle ofrecen respuestas distintas para los cuatro equipos. El mercado se mueve entre los tapones que faltaron y las plazas que nadie quiere ceder.",
  "teams": [
    "pilsens",
    "pelafustanes",
    "shockers",
    "hipopotamos"
  ],
  "rulesLink": true,
  "image": {
    "src": "./assets/editorial/mercado-tablero-2026-11-09.webp",
    "small": "./assets/editorial/mercado-tablero-2026-11-09-640.webp",
    "width": 1280,
    "height": 720,
    "alt": "Cuatro manos se disputan una ficha en una mesa con una pizarra de básquet y papas fritas.",
    "caption": "Ilustración editorial"
  },
  "sources": [
    {
      "title": "Planteles y actas NBA de los candidatos",
      "url": "./assets/cortes/semana-4-fuentes-2026-11-09.json"
    },
    {
      "title": "ESPN Fantasy · Cierre oficial del 2 al 8 de noviembre",
      "url": "./assets/cortes/espn/20261109T134112.988Z.json"
    },
    {
      "title": "NBA · Parte de lesiones del lunes, 14:45 de Chile",
      "url": "https://ak-static.cms.nba.com/referee/injury/Injury-Report_2026-11-09_12_45PM.pdf"
    },
    {
      "title": "ESPN Fantasy · Movimientos del 2 de noviembre",
      "url": "./assets/cortes/ofertas-2026-11-02.json"
    }
  ],
  "source": "Las cifras corresponden a partidos NBA del 2 al 8 de noviembre. Los candidatos no figuran en los cuatro planteles al corte del lunes a las 15:01 de Chile. Las incorporaciones dependen de waivers, elegibilidad y cupos. No hay altas confirmadas en esta nota.",
  "body": [
    [
      "p",
      "El lunes aparecieron cuatro nombres en la pizarra de mercado. A los diez minutos faltaba el de Gafford. El Rubio aseguró que lo había borrado por un error de ortografía y lo volvió a escribir en una hoja que dobló cuatro veces. Franz Wagner, el premium de la semana pasada, pidió que esta vez el precio incluyera estacionamiento. Maxey solo quiso saber si el nuevo venía a tapar tiros o a pedirlos."
    ],
    [
      "h2",
      "Cromwell puede empezar por Gafford"
    ],
    [
      "p",
      "Hipopotamos sumó 33 tapones. Cromwell terminó con ocho. Daniel Gafford, cortado por Shockers en octubre, viene de ocho bloqueos y 19 de 26 de campo en cuatro partidos NBA con Dallas. Tiene un uso concreto al lado de los interiores que ya reparten el juego. Sus 17 rebotes y la ausencia de triples delimitan lo que ofrece. Karl-Anthony Towns traería otra clase de ayuda, con 41 rebotes en tres partidos y cero bloqueos en la semana. Para el Rubio, Gafford apunta mejor al agujero de este domingo y figura sin tier en el anexo publicado. Towns, A+, exigiría liberar un cupo."
    ],
    [
      "h2",
      "El Chino dejó el cartel de Klay guardado"
    ],
    [
      "p",
      "Klay Thompson hizo 21 triples, 83 puntos y 29 de 58 de campo en cuatro partidos NBA. Mequetrefes lo soltó por Jalen Smith, que acaba de aportar cinco tapones en la semana del 5–4. Con Brandon Miller fuera para el lunes, el Chino tiene motivos para volver a mirar al tirador y otros tantos para mantener a Smith. Bobby Portis es una plaza que se puede discutir después de sus ocho puntos en el cómputo del cierre. El utilero encontró el cartel de Klay detrás del nuevo. El Chino pidió que lo dejara ahí por si había que ahorrar en impresión."
    ],
    [
      "h2",
      "Shockers tiene dos maneras de responder"
    ],
    [
      "p",
      "Ayo Dosunmu quedó en una oferta fallida el 2 de noviembre. Viene de 92 puntos, nueve triples y 17 de 18 libres en cuatro partidos NBA, con 33 de 65 de campo. Ayudaría a atacar la eficiencia que cedió Shockers. Como ocupa tier B, la idea requiere abrir uno de los tres cupos ya usados. Jamal Shead ofrece una prueba distinta, con 28 asistencias y cinco pérdidas en tres partidos y sin tier en el anexo. Tiene menos impacto anotador, pero es una opción para cubrir creación si la ingle de Barnes le recorta partidos. Flagg dejó escrito que su sobre ya venía con asistencias incluidas. Patricio contestó que ahora estaban comprando profundidad."
    ],
    [
      "h2",
      "Hipopotamos puede comprar otro par de manos"
    ],
    [
      "p",
      "Matisse Thybulle sumó nueve robos, tres tapones y tres pérdidas en cuatro partidos NBA. Su 5 de 17 de campo exige medir el costo en una categoría que Hipopotamos ganó por un suspiro. Con 800 puntos recientes, Cristóbal puede buscar un especialista para noches en que necesita defender robos. Christian Braun figura cuestionable para el lunes y la plaza de un alero de bajo volumen merece seguimiento. Booker se ofreció a recibir a Thybulle. Esta vez el utilero le entregó una sola llave."
    ],
    [
      "sources",
      [
        0,
        1,
        2,
        3
      ]
    ]
  ]
},
{
  "id": "cierre-semana-3-hipopotamos-pilsens",
  "date": "2026-11-09",
  "category": "Crónicas",
  "readingMinutes": 3,
  "title": "Booker trae la cuenta y Wembanyama cierra el aro",
  "excerpt": "Hipopotamos hizo 800 puntos y le ganó 6–3 a Cromwell. Booker cumplió en la línea, Ajay Mitchell sorprendió y un margen de 0,015 puntos porcentuales en tiros de campo dejó al Rubio buscando otra hoja de cálculo.",
  "teams": [
    "hipopotamos",
    "pilsens"
  ],
  "fantasySnapshot": {
    "week": 3,
    "weekLabel": "Semana 3",
    "start": "2026-11-02",
    "end": "2026-11-08",
    "updatedAt": "2026-11-09T13:41:12.988Z",
    "sourceSnapshot": "./assets/cortes/espn/20261109T134112.988Z.json",
    "matchups": [
      {
        "id": "w3-m1",
        "teams": [
          "pilsens",
          "hipopotamos"
        ],
        "status": "final",
        "stats": {
          "pilsens": {
            "fgp": 0.48399247,
            "ftp": 0.80254777,
            "tpm": 54,
            "reb": 241,
            "ast": 169,
            "stl": 48,
            "blk": 8,
            "to": 85,
            "pts": 694
          },
          "hipopotamos": {
            "fgp": 0.48414023,
            "ftp": 0.79695431,
            "tpm": 63,
            "reb": 263,
            "ast": 157,
            "stl": 50,
            "blk": 33,
            "to": 93,
            "pts": 800
          }
        },
        "updatedAt": "2026-11-09T13:41:12.988Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=3&seasonId=2027&teamId=4",
        "sourceSnapshot": "./assets/cortes/espn/20261109T134112.988Z.json"
      }
    ]
  },
  "sources": [
    {
      "title": "ESPN Fantasy · Cierre oficial del 2 al 8 de noviembre",
      "url": "./assets/cortes/espn/20261109T134112.988Z.json"
    },
    {
      "title": "ESPN Fantasy · Parcial del domingo a las 08:46 de Chile",
      "url": "./assets/cortes/espn/20261108T114602.527Z.json"
    },
    {
      "title": "Actas NBA y contraste con el cómputo fantasy",
      "url": "./assets/cortes/semana-4-fuentes-2026-11-09.json"
    }
  ],
  "source": "Totales finales oficiales de ESPN Fantasy. Las cifras individuales de Hipopotamos provienen de la combinación de actas NBA que reproduce las nueve categorías del cierre. Las actuaciones individuales de Cromwell se citan como producción NBA.",
  "body": [
    [
      "p",
      "La discusión del último tiro duró una semana. Devin Booker llegó por $2 preguntando quién se quedaba con la última pelota y acabó haciendo una parte del trabajo mucho menos glamorosa. Metió sus 27 libres. Cuando el utilero le pidió que eligiera entre los dos casilleros que había reclamado al llegar, Booker dejó las zapatillas en uno y pegó el 27/27 en el otro. Cristóbal se lo dejó hasta el lunes."
    ],
    [
      "matchup-cut",
      "w3-m1"
    ],
    [
      "h2",
      "Un aro cerrado y dos categorías al filo"
    ],
    [
      "p",
      "Wembanyama sostuvo el 6–3 con 123 puntos, 56 rebotes y 14 tapones. Walker Kessler agregó 51 rebotes y siete bloqueos. Entre ambos sumaron 21 tapones, trece más que todo Pilsens. El resultado colectivo fue 33–8 en esa columna y 263–241 en rebotes. Ajay Mitchell, el fichaje de $5 que llegó detrás de los titulares del mercado, anotó 90 puntos con cuatro pérdidas. Su volumen ayudó a que el ataque llegara a 800 frente a 694."
    ],
    [
      "p",
      "Cromwell todavía mandaba 45–39 en robos en el corte del domingo por la mañana. Hipopotamos añadió once y cerró arriba 50–48. También se llevó los triples, 63–54, y el porcentaje de campo, 48,414% contra 48,399%. El Rubio quiso leer ese último número con un decimal. Se le acabó el argumento cuando Jokić le preguntó qué hacían entonces con los otros cinco casilleros."
    ],
    [
      "sources",
      [
        0,
        1,
        2
      ]
    ],
    [
      "h2",
      "La creación de Pilsens aguantó"
    ],
    [
      "p",
      "Cromwell ganó asistencias 169–157, libres por 80,25% a 79,70% y pérdidas con 85 frente a 93. En las actas NBA de la semana, Jaylen Brown anotó 104 puntos y Tyrese Maxey sumó 89 con 22 de 24 en libres. Franz Wagner repartió 32 asistencias. El Rubio ya tiene argumentos para defender el recambio y un problema claro bajo el aro. Keldon Johnson, con 10 de 30 de campo y un triple en cuatro partidos NBA, dejó abierta la discusión sobre el uso de una plaza de rotación."
    ],
    [
      "p",
      "Hipopotamos queda primero por categorías, 17–10. Cromwell cae a 10–17 después de dos derrotas seguidas. Jokić dejó la pizarra con una sola instrucción para la revancha de esta semana. Al próximo que vea una bandeja rival, que haga algo más que avisar."
    ],
    [
      "sources",
      [
        0,
        2
      ]
    ]
  ]
},
{
  "id": "cierre-semana-3-mequetrefes-shockers",
  "date": "2026-11-09",
  "category": "Crónicas",
  "readingMinutes": 3,
  "title": "Tres tapones y un sobre de $52",
  "excerpt": "Mequetrefes amaneció abajo el domingo y le dio vuelta el cruce a Shockers por 5–4. Dončić puso 135 puntos, los interiores recuperaron los tapones y Flagg dejó claro que la derrota no se explica por su fichaje.",
  "teams": [
    "pelafustanes",
    "shockers"
  ],
  "fantasySnapshot": {
    "week": 3,
    "weekLabel": "Semana 3",
    "start": "2026-11-02",
    "end": "2026-11-08",
    "updatedAt": "2026-11-09T13:41:12.988Z",
    "sourceSnapshot": "./assets/cortes/espn/20261109T134112.988Z.json",
    "matchups": [
      {
        "id": "w3-m2",
        "teams": [
          "shockers",
          "pelafustanes"
        ],
        "status": "final",
        "stats": {
          "shockers": {
            "fgp": 0.41330645,
            "ftp": 0.82634731,
            "tpm": 55,
            "reb": 232,
            "ast": 182,
            "stl": 40,
            "blk": 25,
            "to": 95,
            "pts": 603
          },
          "pelafustanes": {
            "fgp": 0.45366795,
            "ftp": 0.75824176,
            "tpm": 78,
            "reb": 222,
            "ast": 170,
            "stl": 33,
            "blk": 28,
            "to": 84,
            "pts": 686
          }
        },
        "updatedAt": "2026-11-09T13:41:12.988Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=3&seasonId=2027&teamId=3",
        "sourceSnapshot": "./assets/cortes/espn/20261109T134112.988Z.json"
      }
    ]
  },
  "sources": [
    {
      "title": "ESPN Fantasy · Cierre oficial del 2 al 8 de noviembre",
      "url": "./assets/cortes/espn/20261109T134112.988Z.json"
    },
    {
      "title": "ESPN Fantasy · Parcial del domingo a las 08:46 de Chile",
      "url": "./assets/cortes/espn/20261108T114602.527Z.json"
    },
    {
      "title": "Actas NBA y contraste con el cómputo fantasy",
      "url": "./assets/cortes/semana-4-fuentes-2026-11-09.json"
    }
  ],
  "source": "Totales definitivos y parcial del domingo obtenidos de ESPN Fantasy. Las cifras individuales se reconstruyeron con actas NBA y reproducen las nueve categorías de ambos equipos.",
  "body": [
    [
      "p",
      "El domingo temprano, Patricio tenía el 5–4 y una ventaja de 24–22 en tapones. El Chino miró esa columna y fue a buscar a sus interiores. Al cierre, Mequetrefes había añadido seis bloqueos frente a uno de Shockers. Se quedó con la categoría por 28–25 y con la serie por 5–4. El sobre de la puja por Cooper Flagg siguió sobre la mesa de Shockers. Nadie se atrevió a usarlo de posavasos."
    ],
    [
      "matchup-cut",
      "w3-m2"
    ],
    [
      "h2",
      "Dončić puso la diferencia y la segunda línea cerró la puerta"
    ],
    [
      "p",
      "Dončić firmó 135 puntos y 17 triples en tres partidos. Donovan Mitchell añadió 104 puntos y 15 triples, y Giannis Antetokounmpo, 106 puntos, 54 rebotes y siete tapones. Entre Giannis, Alperen Sengun y Jalen Smith hubo 18 bloqueos. Smith aportó cinco de ellos en las dos actuaciones que entran en la reconstrucción del cómputo. Aaron Wiggins hizo 11 triples y perdió cuatro pelotas. El Chino tuvo anotación de sobra y, cuando el cierre se puso incómodo, encontró manos en la segunda línea."
    ],
    [
      "p",
      "Mequetrefes terminó arriba en campo, 45,37% a 41,33%, triples, 78–55, tapones, pérdidas, 84 a 95, y puntos, 686–603. Brandon Miller, que venía de encender Santa María, se quedó en 35 puntos y 12 de 43 de campo. Los 8 puntos de Bobby Portis en el cómputo dejaron otra conversación abierta en un banco que esta semana puede necesitar más tiro."
    ],
    [
      "sources",
      [
        0,
        1,
        2
      ]
    ],
    [
      "h2",
      "Flagg pagó parte de la cuenta"
    ],
    [
      "p",
      "Shai Gilgeous-Alexander sumó 143 puntos, Cooper Flagg 82 y 30 asistencias, y Jayson Tatum convirtió sus 23 libres. Dyson Daniels hizo 44 rebotes, 31 asistencias y once robos. Shockers ganó libres, rebotes, asistencias y robos. En campo pesaron el 25 de 67 de Flagg y el 11 de 39 de Cameron Boozer, entre otras noches difíciles. Yaxel Lendeborg sí encontró utilidad con cinco tapones. Jarrett Allen aportó uno en el cómputo reconstruido."
    ],
    [
      "p",
      "A Flagg le dejaron el casillero de Towns y la cuenta de $52. El novato respondió colgando sus 30 asistencias en la puerta, justo debajo del precio. Tatum le puso una cinta arriba para que el papel aguantara. Mequetrefes sale segundo con 14–13 en categorías y Shockers queda 13–14. La discusión sobre quién se queda con el vestuario tendrá otra semana de plazo."
    ],
    [
      "sources",
      [
        0,
        2
      ]
    ]
  ]
},
{
  "id": "waivers-2-noviembre-flagg-booker-vestuario",
  "date": "2026-11-03",
  "category": "Trades",
  "readingMinutes": 6,
  "title": "Flagg por $52 y Booker por $2: el mercado sacude los vestuarios",
  "excerpt": "Ocho altas confirmadas y $96 en pujas: Shockers gana la carrera por Flagg, Pilsens incorpora a Wagner y Maxey, e Hipopotamos ficha a Booker. Con los fichajes llegan despedidas, egos y cuentas pendientes en los vestuarios de Papafritas League.",
  "teams": [
    "shockers",
    "pilsens",
    "hipopotamos",
    "pelafustanes"
  ],
  "transactionReportId": "waivers-2026-11-02",
  "rulesLink": true,
  "image": {
    "src": "./assets/editorial/waivers-vestuario-2026-11-02.webp",
    "small": "./assets/editorial/waivers-vestuario-2026-11-02-640.webp",
    "width": 1280,
    "height": 720,
    "alt": "Ilustración de Cooper Flagg y Devin Booker en los vestuarios de Papafritas League, con dos jugadores que se marchan al fondo.",
    "caption": "Flagg y Booker, nuevas caras del mercado de Papafritas League. Ilustración editorial."
  },
  "source": "Ofertas, importes, incorporaciones y bajas: captura de ESPN Fantasy del lunes 2 de noviembre de 2026 aportada por el participante. Publicación del 3 de noviembre. Los $96 corresponden solo a las ocho pujas ganadoras; las fallidas no se cuentan como gasto.",
  "sources": [
    {
      "title": "ESPN Fantasy · Captura completa de las ofertas",
      "url": "./assets/cortes/ofertas-2026-11-02.png"
    },
    {
      "title": "Transcripción de las 18 ofertas y ocho altas",
      "url": "./assets/cortes/ofertas-2026-11-02.json"
    },
    {
      "title": "Cierre de la semana 2 · Actas y cómputo fantasy",
      "url": "./assets/cortes/semana-2-final-reconstruccion-2026-11-02.json"
    },
    {
      "title": "Adquisiciones del 26 de octubre",
      "url": "#nota/waivers-26-octubre-haliburton-sabonis-kessler"
    }
  ],
  "body": [
    [
      "p",
      "Cooper Flagg tuvo tres pretendientes y una oferta que rompió la fila: los $52 de Penalolen Shockers dejaron atrás los $35 de Cromwell Pilsens y los $17 de Hipopotamos. El reporte de waivers del lunes 2 de noviembre terminó con ocho incorporaciones y $96 en pujas ganadoras. Los movimientos ya cambiaron los planteles y dejaron los camarines con bastante más ruido que antes."
    ],
    [
      "transaction-highlights",
      "waivers-2026-11-02"
    ],
    [
      "h2",
      "Shockers paga fuerte y Towns entrega su plaza"
    ],
    [
      "p",
      "Flagg entra por Karl-Anthony Towns, una salida que cambia una pieza importante del equipo de Patricio. Towns acababa de aportar 45 rebotes en el triunfo del clásico familiar. La inversión supera en $17 a la segunda oferta por Flagg y concentra $52 de los $60 que Shockers gastó en esta tanda. Es el movimiento que marca el pulso del mercado."
    ],
    [
      "p",
      "El resto de la cuenta tiene dos incorporaciones: Yaxel Lendeborg por $7, con Kon Knueppel de salida, y Jarrett Allen por $1, en reemplazo de Jaren Jackson Jr. Shockers cambia tres plazas después de ganar. El precio de Allen queda en el extremo opuesto al de Flagg, pero su llegada también modifica la estructura interior del plantel."
    ],
    [
      "h2",
      "Pilsens cambia estrellas; Hipopotamos consigue a Booker"
    ],
    [
      "p",
      "Cromwell no se quedó con Flagg, pero terminó el proceso con Franz Wagner por $15 y Tyrese Maxey por $5. Las bajas asociadas fueron Darius Garland y Anthony Edwards. Son $20 para cambiar dos nombres de peso en el perímetro y el alero del Rubio. Su intento por Pascal Siakam, de $10, figura fallido porque un jugador involucrado ya había sido cortado."
    ],
    [
      "p",
      "Hipopotamos cerró tres altas por $16: Christian Braun por $9 en lugar de Cason Wallace, Ajay Mitchell por $5 en lugar de VJ Edgecombe y Devin Booker por $2 en lugar de Tyrese Haliburton. Braun también recibió una oferta de Shockers por $1. En el caso de Booker, Pilsens presentó otros $2, pero esa oferta aparece fallida por un jugador involucrado ya cortado."
    ],
    [
      "p",
      "La salida de Haliburton tiene un antecedente que explica el peso del cambio: Hipopotamos había pagado $31 por incorporarlo el 26 de octubre. Una semana después, su plaza pasó a Booker por $2. Es una diferencia entre dos operaciones concretas, no una devolución de dinero ni una medida del presupuesto que queda disponible."
    ],
    [
      "sources",
      [
        0,
        1,
        2,
        3
      ]
    ],
    [
      "transaction-table",
      "waivers-2026-11-02"
    ],
    [
      "h2",
      "Las ofertas que quedaron en el camino"
    ],
    [
      "p",
      "El sistema frenó las solicitudes de Hipopotamos por Jrue Holiday y Jared McCain, ambas de $2, por el límite de incorporaciones del cruce. Los intentos por Quickley, Anthony Black y Ayo Dosunmu también quedaron sin alta: ESPN señala que un jugador involucrado ya había sido cortado. Mequetrefes no aparece entre las 18 ofertas visibles de este reporte."
    ],
    [
      "offers-table",
      "waivers-2026-11-02"
    ],
    [
      "h2",
      "Vestuario Papafritas: despedidas y luchas por el mando"
    ],
    [
      "h2",
      "Towns se lleva el bolso; los amigos se quedan"
    ],
    [
      "p",
      "Towns descubre la llegada de Flagg cuando encuentra una caja vacía bajo su casillero. No le molestan los $52: le duele que nadie le haya avisado antes de empezar a despegar su nombre. Tatum le guarda el asiento de siempre durante unos segundos; Barnes lo acompaña hasta la puerta. Hay bromas que esta vez no salen."
    ],
    [
      "p",
      "«Pensé que los rebotes también compraban un poco de cariño», dice Towns mientras cierra el bolso. Flagg espera al otro lado con una sonrisa que todavía no sabe dónde poner. Nadie le discute el talento, pero acaba de llegar al casillero de un amigo. Su primer desafío en Shockers será bastante menos televisivo que una volcada: lograr que la sobremesa deje de quedarse en silencio cuando se sienta."
    ],
    [
      "h2",
      "Haliburton: «Me lesioné, no renuncié al equipo»"
    ],
    [
      "p",
      "Haliburton no hace una despedida suave. Deja las zapatillas sobre la banca y pide que alguien le explique cuándo una lesión se convirtió en una carta de salida. «Me lesioné, no renuncié al equipo», protesta. Recuerda los $31 de la semana anterior como quien encuentra una foto de unas vacaciones felices justo después de una ruptura. La directiva responde hablando de categorías; él estaba hablando de lealtad."
    ],
    [
      "p",
      "La tensión sube cuando ve el precio del reemplazo. Dos dólares. En su versión de los hechos, no perdió el puesto ante una superoferta: lo cambiaron por menos de lo que cuesta discutir un café. Sale convencido de que la vuelta contra Hipopotamos ya tiene una fecha marcada, aunque todavía no tenga otro casillero. Es el tipo de despedida que promete un segundo capítulo."
    ],
    [
      "h2",
      "Booker llega barato; su ego pide un casillero doble"
    ],
    [
      "p",
      "Booker entra preguntando dónde queda su lugar y quién decide el último tiro. Cunningham levanta la mirada. Wembanyama señala una silla libre, no un trono. La bienvenida se enfría antes de que termine de apoyar el bolso: nadie cuestiona su talento, pero ya parece haber reservado dos casilleros, uno para él y otro para su autoestima."
    ],
    [
      "p",
      "«Primero aprende los nombres; después hablamos del último tiro», le suelta Cunningham. Booker sonríe como si la frase también fuera parte de su presentación. Hipopotamos acaba de conseguir un nombre grande por $2; integrarlo al grupo sale bastante más caro. En una esquina todavía están borrando el nombre de Haliburton. No ayuda entrar pidiendo que suban el volumen de la música."
    ],
    [
      "h2",
      "Pilsens: Maxey descubre que Wagner costó el triple"
    ],
    [
      "p",
      "En Cromwell, el Rubio presenta a Wagner y Maxey bajo un cartel que dice «reconstrucción express». Habla de equilibrio, ambición y un proyecto cuidadosamente diseñado. Todo marcha bien hasta que alguien pregunta por los $35 que ofreció por Flagg. El Rubio da vuelta el cartel: atrás dice «mirar hacia adelante». La primera norma del nuevo vestuario queda establecida antes del entrenamiento."
    ],
    [
      "p",
      "Maxey encuentra las dos boletas pegadas en la pizarra: Wagner, $15; Maxey, $5. «¿Él viene con estacionamiento y yo tengo que traer la camiseta?», pregunta Maxey, todavía con el bolso al hombro. Wagner responde que las tarifas premium no se explican: se respetan. Maxey le ofrece una solución: si costó el triple, que también haga el triple de los relevos defensivos. Se acaba el aplauso de bienvenida."
    ],
    [
      "p",
      "La pelea se traslada al primer ejercicio. Wagner pide organizar la jugada; Maxey pide la pelota. Ambos miran al Rubio, que descubre demasiado tarde que fichar a dos creadores también puede crear dos candidatos a jefe. Sabonis se ofrece como mediador hasta que le piden elegir un bando. «Yo doy asistencias, no certificados de superioridad», contesta. A partir de ahí, cada pase tiene una pequeña lectura política."
    ],
    [
      "p",
      "Jokić corta la reunión sin levantarse de su asiento: «El que esté solo recibe la pelota. El resto puede discutir la boleta después». Nadie se atreve a preguntarle cuánto costó su opinión. Por diez minutos, Pilsens parece haber encontrado una jerarquía razonable. Entonces Maxey bautiza a Wagner como «el premium» y Wagner empieza a llamar a Maxey «la oferta». El Rubio solicita que esos apodos no lleguen al grupo de WhatsApp. Llegan antes que él."
    ],
    [
      "p",
      "Las despedidas tampoco ayudan. Garland deja una nota en el casillero: «La contraseña del parlante se la explican al fichaje de $15». Edwards manda un mensaje desde su recuperación: «Para cambiar mi nombre de la lista fueron bastante rápidos». El Rubio lo lee, escribe una respuesta larga, la borra y manda un pulgar arriba. Ese emoji consigue lo que ningún rival había logrado todavía: unir a los recién llegados y los que se fueron en una misma queja contra la directiva."
    ],
    [
      "h2",
      "El Chino mira desde la mesa de al lado"
    ],
    [
      "p",
      "En Mequetrefes, el Chino pasa la lista sin estrenar un solo nombre de este reporte. Dončić lee lo de los $52 y Miller pregunta si ahora habrá que saludar a Flagg con tratamiento de gerente. Giannis sigue con lo suyo. Desde esa mesa, los movimientos ajenos parecen una buena teleserie; el problema de Papafritas es que el domingo siempre termina poniendo a los espectadores dentro del capítulo."
    ]
  ]
},
{
  "id": "cierre-semana-2-shockers-mequetrefes",
  "date": "2026-11-02",
  "category": "Crónicas",
  "readingMinutes": 5,
  "title": "Shockers se queda con el clásico; Mequetrefes hace temblar Santa María",
  "excerpt": "Shockers le arrebató los puntos a Hipopotamos y cerró un 5–4 de pulso firme. Mequetrefes ganó 7–2 con Brandon Miller encendido y una batalla de libres que cambió de dueño. Dos triunfos, cuatro equipos con balance 1–1 y una tabla que se decide categoría a categoría.",
  "teams": [
    "shockers",
    "hipopotamos",
    "pelafustanes",
    "pilsens"
  ],
  "reportId": "semana-2-final-2026-11-01",
  "fantasySnapshot": {
    "week": 2,
    "weekLabel": "Semana 2",
    "start": "2026-10-26",
    "end": "2026-11-01",
    "updatedAt": "2026-11-02T16:03:27.476Z",
    "sourceSnapshot": "./assets/cortes/espn/20261102T160327.476Z.json",
    "matchups": [
      {
        "id": "w2-m1",
        "teams": [
          "hipopotamos",
          "shockers"
        ],
        "status": "final",
        "stats": {
          "hipopotamos": {
            "fgp": 0.48155738,
            "ftp": 0.74789916,
            "tpm": 62,
            "reb": 260,
            "ast": 115,
            "stl": 36,
            "blk": 41,
            "to": 70,
            "pts": 621
          },
          "shockers": {
            "fgp": 0.4875717,
            "ftp": 0.80473373,
            "tpm": 48,
            "reb": 243,
            "ast": 149,
            "stl": 40,
            "blk": 24,
            "to": 81,
            "pts": 694
          }
        },
        "updatedAt": "2026-11-02T16:03:27.476Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=1",
        "sourceSnapshot": "./assets/cortes/espn/20261102T160327.476Z.json"
      },
      {
        "id": "w2-m2",
        "teams": [
          "pilsens",
          "pelafustanes"
        ],
        "status": "final",
        "stats": {
          "pilsens": {
            "fgp": 0.4790287,
            "ftp": 0.79674797,
            "tpm": 51,
            "reb": 215,
            "ast": 155,
            "stl": 35,
            "blk": 20,
            "to": 85,
            "pts": 583
          },
          "pelafustanes": {
            "fgp": 0.47148289,
            "ftp": 0.80147059,
            "tpm": 88,
            "reb": 252,
            "ast": 137,
            "stl": 43,
            "blk": 29,
            "to": 82,
            "pts": 693
          }
        },
        "updatedAt": "2026-11-02T16:03:27.476Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=3",
        "sourceSnapshot": "./assets/cortes/espn/20261102T160327.476Z.json"
      }
    ]
  },
  "rulesLink": true,
  "source": "Crónica del cierre del 26 de octubre al 1 de noviembre. Resultados definitivos de ESPN consultados el 2 de noviembre a las 13:03, hora de Chile. Actuaciones individuales reconstruidas y contrastadas con actas NBA; se usa el cómputo que reproduce el marcador fantasy, no toda la producción NBA de cada jugador. Las valoraciones son editoriales.",
  "sources": [
    {
      "title": "ESPN Fantasy · Cierre oficial de la semana 2",
      "url": "./assets/cortes/espn/20261102T160327.476Z.json"
    },
    {
      "title": "Actas NBA y reconstrucción de las cifras individuales",
      "url": "./assets/cortes/semana-2-final-reconstruccion-2026-11-02.json"
    },
    {
      "title": "Planteles, lesiones y agenda de la semana 3",
      "url": "./assets/cortes/semana-3-previa-mercado-2026-11-02.json"
    },
    {
      "title": "ESPN · Lesiones NBA",
      "url": "https://www.espn.com/nba/injuries"
    },
    {
      "title": "Timberwolves · Operación de Anthony Edwards",
      "url": "https://www.nba.com/timberwolves/news/anthony-edwards-injury-update-7"
    }
  ],
  "body": [
    [
      "p",
      "El viernes, Hipopotamos defendía cuatro puntos de ventaja. El lunes, Shockers podía guardar la calculadora y cobrar el clásico familiar: 5–4, con la anotación ya de su lado. En Santa María, Mequetrefes sostuvo un 7–2 que parece el mismo del parcial, pero cambió por dentro: perdió el porcentaje de campo y conquistó los libres. La segunda semana dejó una advertencia para todos: en Papafritas, un marcador amplio también puede esconder una noche de nervios."
    ],
    [
      "h2",
      "El clásico familiar: Shockers ganó donde dolía"
    ],
    [
      "matchup-cut",
      "w2-m1"
    ],
    [
      "p",
      "Los 694 puntos de Shockers contra 621 de Hipopotamos explican el vuelco principal respecto del viernes. Patricio ganó además el porcentaje de campo, 48,76% contra 48,16%; los libres, 80,47% contra 74,79%; las asistencias, 149–115; y los robos, 40–36. No necesitó derribar el muro rival en tapones. Encontró cinco puertas por otro lado y pasó por ellas."
    ],
    [
      "p",
      "Jayson Tatum fue la gran firma del ataque: 121 puntos, 28 asistencias y 46 libres convertidos. Scottie Barnes agregó 98 puntos, siete robos y un eficiente 41/71 de campo. Esa combinación de volumen y acierto le dio a Shockers un piso que Hipopotamos no pudo alcanzar. La anotación cambió de manos durante el fin de semana y dejó de ser una moneda al aire: terminó con 73 puntos de diferencia."
    ],
    [
      "p",
      "El reparto también tuvo obreros decisivos. Dyson Daniels produjo ocho robos y 19 asistencias con solo tres pérdidas; Paul Reed aportó 50 puntos, seis robos y 20/31 de campo. Tari Eason sumó 33 rebotes y ocho tapones, aunque esa categoría siguió lejos del alcance de Shockers. El equipo ganó con sus figuras, pero sus especialistas ayudaron a cerrar categorías que una sola estrella no podía asegurar."
    ],
    [
      "p",
      "Hipopotamos conservó cuatro fortalezas: triples, 62–48; rebotes, 260–243; tapones, 41–24; y menos pérdidas, 70–81. Victor Wembanyama estuvo a la altura de su jerarquía, con 108 puntos, 13 bloqueos y apenas tres pérdidas. Walker Kessler añadió 45 rebotes y 11 tapones. Entre ambos sostuvieron el aro; les faltó compañía suficiente para ganar una quinta categoría."
    ],
    [
      "p",
      "La derrota tampoco borra los 75 puntos de Jaden McDaniels ni los 69 de Cade Cunningham, pero obliga a mirar la eficiencia de la segunda línea. Naz Reid terminó con 19/57 de campo y 12 pérdidas. En una categoría que se perdió por 0,60 puntos porcentuales, ese acierto pesa. Las bajas del perímetro redujeron alternativas; aun así, Shockers ganó el derecho a celebrar por lo que produjo en las categorías que decidió atacar."
    ],
    [
      "player-report",
      "shockers"
    ],
    [
      "player-report",
      "hipopotamos"
    ],
    [
      "sources",
      [
        0,
        1
      ]
    ],
    [
      "h2",
      "Santa María: Miller prendió la mecha"
    ],
    [
      "matchup-cut",
      "w2-m2"
    ],
    [
      "p",
      "Mequetrefes golpeó con 88 triples contra 51 y 693 puntos frente a 583. También se quedó con rebotes, 252–215; robos, 43–35; tapones, 29–20; y pérdidas, 82–85. La séptima categoría llegó desde la línea: 80,15% contra 79,67%. Menos de medio punto porcentual separó a los equipos en libres. El 7–2 tuvo una frontera mucho más estrecha de lo que sugiere el resultado."
    ],
    [
      "p",
      "Brandon Miller fue el nombre más encendido del Chino: 113 puntos, 16 triples, ocho robos y cuatro tapones. Giannis Antetokounmpo dio otra clase de sostén, con 84 puntos, 50 rebotes y 24 asistencias. Luka Dončić aportó 82 puntos y 14 triples en las dos actas cuya suma entra en el cierre fantasy. Su total NBA fue mayor; cargarlo completo a este cruce habría inflado su aporte real al marcador."
    ],
    [
      "p",
      "Payton Pritchard añadió 62 puntos y diez triples en el cómputo reconstruido. Mequetrefes repartió el daño exterior y resistió incluso el 9/18 en libres de Giannis: el resto del equipo compensó ese lastre hasta terminar por encima del 80%. Fue una victoria construida con varias manos, y una respuesta contundente al 2–7 de la primera semana."
    ],
    [
      "p",
      "Cromwell ganó campo, 47,90% contra 47,15%, y asistencias, 155–137. Nikola Jokić dejó 58 puntos y 31 asistencias; Domantas Sabonis, 43 rebotes y 23 pases de gol. Esa sociedad sostuvo el juego interior y la circulación, pero no alcanzó para contestar los 37 triples de diferencia. Edwards produjo 47 puntos el lunes antes de quedar fuera por la operación de rodilla; su ausencia posterior fue una pérdida de recursos, no una decepción de rendimiento."
    ],
    [
      "p",
      "En la rotación del Rubio quedaron señales para revisar: Jaylen Wells acumuló 28 puntos y ninguna asistencia en tres partidos; Keldon Johnson, 25 puntos y ningún triple en otros tres. Son roles distintos a los de una estrella, pero un equipo que necesita remontar categorías debe exigir una utilidad concreta a cada plaza. Cromwell no perdió por un solo nombre: perdió profundidad de respuesta."
    ],
    [
      "player-report",
      "pelafustanes"
    ],
    [
      "player-report",
      "pilsens"
    ],
    [
      "sources",
      [
        0,
        1,
        4
      ]
    ],
    [
      "h2",
      "La tabla: todos con una victoria, nadie con permiso para dormirse"
    ],
    [
      "p",
      "Los cuatro equipos quedan con una serie ganada y otra perdida. La clasificación por categorías mantiene arriba a Hipopotamos, 11–7; Shockers y Mequetrefes comparten el 9–9, mientras Pilsens queda 7–11. El clásico familiar cambió de dueño, Santa María tuvo una respuesta del Chino y la liga sigue sin escapados. Las cargadas ya tienen respaldo; para sostenerlas otra semana habrá que volver a jugar."
    ]
  ]
},
{
  "id": "previa-semana-3-pilsens-hipopotamos-shockers-mequetrefes",
  "date": "2026-11-02",
  "category": "Previas",
  "readingMinutes": 4,
  "title": "Jokić contra el muro; Shockers y Mequetrefes llegan separados por un punto",
  "excerpt": "Pilsens busca reacción ante Hipopotamos. Shockers y Mequetrefes, ganadores del domingo, cruzan dos ataques que anotaron 694 y 693 puntos la semana pasada. Edwards sigue fuera y el parte médico vuelve a ser parte del tablero.",
  "teams": [
    "pilsens",
    "hipopotamos",
    "shockers",
    "pelafustanes"
  ],
  "reportId": "semana-2-final-2026-11-01",
  "rulesLink": true,
  "fantasySnapshot": {
    "week": 3,
    "weekLabel": "Semana 3",
    "start": "2026-11-02",
    "end": "2026-11-08",
    "matchups": [
      {
        "id": "w3-m1",
        "teams": [
          "pilsens",
          "hipopotamos"
        ],
        "status": "scheduled"
      },
      {
        "id": "w3-m2",
        "teams": [
          "shockers",
          "pelafustanes"
        ],
        "status": "scheduled"
      }
    ]
  },
  "source": "Cruces del 2 al 8 de noviembre confirmados por el participante. Comparaciones basadas en el cierre definitivo de la semana 2; no representan un resultado ni una proyección numérica de la semana 3. Planteles consultados el lunes 2 a las 13:03 y lesiones de ESPN actualizadas a las 13:05, hora de Chile. Agenda NBA contrastada para la nueva semana; participación y alineación pendientes de confirmación en cada jornada.",
  "sources": [
    {
      "title": "ESPN Fantasy · Cierre oficial de la semana 2",
      "url": "./assets/cortes/espn/20261102T160327.476Z.json"
    },
    {
      "title": "Actas NBA y reconstrucción de las cifras individuales",
      "url": "./assets/cortes/semana-2-final-reconstruccion-2026-11-02.json"
    },
    {
      "title": "Planteles, lesiones y agenda de la semana 3",
      "url": "./assets/cortes/semana-3-previa-mercado-2026-11-02.json"
    },
    {
      "title": "ESPN · Lesiones NBA",
      "url": "https://www.espn.com/nba/injuries"
    },
    {
      "title": "Timberwolves · Operación de Anthony Edwards",
      "url": "https://www.nba.com/timberwolves/news/anthony-edwards-injury-update-7"
    }
  ],
  "body": [
    [
      "p",
      "La semana tres pone al líder por categorías frente al equipo que necesita recuperar terreno, y enfrenta a los dos que llegan de ganar. Pilsens–Hipopotamos tiene el atractivo de Jokić ante una estructura que cerró con 41 tapones. Shockers–Mequetrefes ofrece otra provocación: sus ataques produjeron 694 y 693 puntos en la semana anterior. Ese punto no abre el marcador nuevo; sí alcanza para vender la entrada."
    ],
    [
      "h2",
      "Pilsens–Hipopotamos: el pase contra la muralla"
    ],
    [
      "matchup-cut",
      "w3-m1"
    ],
    [
      "p",
      "Cromwell necesita una respuesta después del 2–7. Su mejor argumento reciente está en las 155 asistencias y el 79,67% en libres: dos áreas en las que superó lo producido por Hipopotamos, que terminó con 115 y 74,79%. Jokić y Sabonis ofrecen la posibilidad de construir desde el pase interior. La cuestión es encontrar una quinta categoría sin gastar toda la energía intentando ganar por fuerza donde el rival está mejor armado."
    ],
    [
      "p",
      "Cristóbal llega con 260 rebotes, 62 triples y 41 tapones como antecedentes. Wembanyama y Kessler hicieron 24 bloqueos entre ambos; el conjunto completo de Pilsens registró 20. Eso orienta la pelea, aunque no la resuelve de antemano. Para el Rubio, acercarse en campo, robos y control de pérdidas puede ser más productivo que convertir cada noche en un desafío personal al aro de Wembanyama."
    ],
    [
      "p",
      "La salud vuelve a estrechar el margen de Cromwell: Edwards continúa fuera tras la artroscopia y Jalen Johnson está cuestionable para el lunes por el tobillo izquierdo. Hipopotamos mantiene la baja de Cason Wallace y llega con menos recursos en el perímetro. El pase de Cunningham y la eficiencia de los secundarios pueden terminar pesando tanto como las acciones espectaculares de los interiores. Una ausencia recorta opciones; no adjudica categorías."
    ],
    [
      "sources",
      [
        0,
        2,
        3,
        4
      ]
    ],
    [
      "h2",
      "Shockers–Mequetrefes: dos ganadores que no pueden vivir del domingo"
    ],
    [
      "matchup-cut",
      "w3-m2"
    ],
    [
      "p",
      "Patricio y el Chino llegan empatados 9–9 en la tabla por categorías y con la confianza de su primer triunfo. La semana anterior dejó 694 puntos para Shockers y 693 para Mequetrefes, pero perfiles diferentes: el primero repartió 149 asistencias; el segundo convirtió 88 triples. La amenaza de Tatum y Barnes encuentra enfrente a Miller, Dončić, Mitchell y Giannis. Hay nombres para un cartel grande; la serie volverá a decidirse en nueve columnas pequeñas."
    ],
    [
      "p",
      "Para Shockers, el desafío es sostener porcentajes y creación sin descuidar el rebote. Mequetrefes terminó la semana con 252 capturas y 29 tapones, por encima de los 243 y 24 de Patricio. A la vez, los libres estuvieron casi a la par: 80,47% y 80,15%. Una categoría que parecía problemática para el Chino respondió bien, pero depender de que el resto compense cada noche los fallos de Giannis sigue siendo una apuesta exigente."
    ],
    [
      "p",
      "Shockers continúa sin Jackson Jr. y Knueppel está descartado para el lunes por el isquiotibial izquierdo. Mequetrefes tiene a Alex Sarr cuestionable por la rodilla izquierda; Jalen Smith figura como probable pese al esguince en un dedo. Son estados para el inicio de semana, no sentencias para el domingo. Miller llega encendido, aunque repetir 16 triples y ocho robos no puede tratarse como una cuota fija."
    ],
    [
      "sources",
      [
        0,
        1,
        2,
        3
      ]
    ],
    [
      "h2",
      "Tres citas para marcar en el calendario"
    ],
    [
      "p",
      "El lunes 2 y el miércoles 4, Oklahoma City y Cleveland se cruzan dos veces: Gilgeous-Alexander y Mitchell tendrán enfrentamientos NBA que se reflejan en bandos opuestos de esta serie fantasy, si participan y son alineados. Es un comienzo de semana con termómetro propio para Shockers y Mequetrefes."
    ],
    [
      "p",
      "El domingo 8, Lakers–Pistons está programado a las 20:00 de Chile. Dončić puede influir en la serie del Chino, mientras Cunningham y Kessler pertenecen a Hipopotamos en el otro cruce. Dos horas después aparece Boston–Milwaukee en la agenda de Tatum. Son citas programadas: los partes y las alineaciones de ese día definirán quién llega a ese último tramo."
    ],
    [
      "p",
      "Hasta entonces, Cromwell tiene que convertir urgencia en precisión; Hipopotamos, defender su primer lugar después de perder un clásico. Shockers y Mequetrefes buscarán demostrar que el triunfo del domingo fue un comienzo. Los cuatro tienen argumentos. La tabla todavía no le cree demasiado a ninguno."
    ],
    [
      "sources",
      [
        2
      ]
    ]
  ]
},
{
  "id": "mercado-semana-3-flagg-especialistas-lesiones",
  "date": "2026-11-02",
  "category": "Trades",
  "readingMinutes": 5,
  "title": "Flagg vuelve al radar; las lesiones ponen a trabajar al mercado",
  "excerpt": "Cooper Flagg ofrece argumentos en varias categorías, pero los cupos mandan. Allen y Dosunmu aparecen como alternativas para Shockers; Diabate y Spencer abren otras rutas. El mercado de esta semana exige encaje, salud y menos movimientos por calentura.",
  "teams": [
    "pilsens",
    "shockers",
    "hipopotamos",
    "pelafustanes"
  ],
  "rulesLink": true,
  "image": {
    "src": "./assets/editorial/mercado-lesiones-2026-11-02.webp",
    "small": "./assets/editorial/mercado-lesiones-2026-11-02-640.webp",
    "width": 1280,
    "height": 720,
    "alt": "Ilustración de una camiseta vacía y una ficha de reemplazo en un tablero de planteles de básquet.",
    "caption": "Las bajas obligan a buscar reemplazos con una función concreta. Ilustración editorial creada con ImageGen; no representa una operación realizada."
  },
  "source": "Análisis editorial al 2 de noviembre de 2026. No hay ofertas confirmadas ni negociaciones acreditadas para las propuestas de esta nota. Candidatos contrastados con los 52 jugadores de los planteles consultados y con actas NBA del 26 de octubre al 1 de noviembre. Sus cifras son NBA completas, no puntos fantasy adjudicados a un equipo de esta liga. Disponibilidad en waivers, cupos, franquicia NBA y parte médico deben revisarse antes de una incorporación. No se registra ni se ejecuta ningún movimiento.",
  "sources": [
    {
      "title": "ESPN Fantasy · Cierre oficial de la semana 2",
      "url": "./assets/cortes/espn/20261102T160327.476Z.json"
    },
    {
      "title": "Actas NBA y reconstrucción de las cifras individuales",
      "url": "./assets/cortes/semana-2-final-reconstruccion-2026-11-02.json"
    },
    {
      "title": "Planteles, lesiones y agenda de la semana 3",
      "url": "./assets/cortes/semana-3-previa-mercado-2026-11-02.json"
    },
    {
      "title": "ESPN · Lesiones NBA",
      "url": "https://www.espn.com/nba/injuries"
    },
    {
      "title": "Timberwolves · Operación de Anthony Edwards",
      "url": "https://www.nba.com/timberwolves/news/anthony-edwards-injury-update-7"
    },
    {
      "title": "Papafritas League · Reglamento y tiers",
      "url": "#reglas"
    }
  ],
  "body": [
    [
      "p",
      "El lunes de mercado llega con necesidades bastante más concretas que una lista de nombres famosos. Cromwell necesita recursos sin Edwards; Shockers debe cubrir la ausencia de Jackson Jr.; Hipopotamos perdió creación en el perímetro y Mequetrefes tiene una rotación que puede afinar después de ganar. El mejor refuerzo será el que acerque una quinta categoría. Ganar la conversación del grupo no entrega puntos extra."
    ],
    [
      "p",
      "No hay ofertas confirmadas para los escenarios de esta nota. Son rutas de análisis, no información de negociaciones en marcha. Los candidatos no aparecen en los planteles contrastados a las 13:03 del lunes; antes de pujar hay que comprobar si siguen disponibles y cuál es su estado médico."
    ],
    [
      "h2",
      "Flagg trae argumentos; el cupo A+ sigue teniendo dueño"
    ],
    [
      "p",
      "Cooper Flagg cerró tres partidos NBA con 88 puntos, 25 asistencias, siete robos y cuatro tapones. Lanzó 35/65 de campo: su atractivo está en empujar varias categorías desde una misma plaza. También dejó un 4/20 en triples, un recordatorio de que su perfil no arregla todas las necesidades a la vez."
    ],
    [
      "p",
      "Los cuatro equipos tienen completos sus dos cupos A+. En Pilsens, abrir espacio para Flagg exigiría una salida en la pareja Jalen Johnson–Sabonis; una duda de tobillo de Johnson no basta por sí sola para justificar regalar su valor. En Mequetrefes, el costo sería tocar a Mitchell o Sengun. El interés tiene sentido como revisión de estructura; una mejora automática no está demostrada."
    ],
    [
      "p",
      "Franz Wagner merece una lectura menos entusiasta que la etiqueta de estrella: produjo 28 asistencias en tres partidos, pero también 17/49 de campo y 14 pérdidas. Puede servir a quien necesite creación desde un cupo A; no conviene perseguirlo ignorando esos costos. En Mequetrefes, desplazar a un Miller que viene de 113 puntos y 16 triples exigiría una razón mucho más fuerte que el nombre del reemplazo."
    ],
    [
      "sources",
      [
        2
      ]
    ],
    [
      "h2",
      "Shockers: Allen para el aro, Dosunmu para la energía"
    ],
    [
      "p",
      "Jarrett Allen ofrece una alternativa de tier A para estudiar ante la baja de Jackson Jr. Su semana NBA dejó 40 rebotes, siete tapones y solo tres pérdidas en cuatro partidos, con 23/37 de campo. Un cambio entre ambos respetaría el cupo A y no repetiría una franquicia NBA entre los jugadores con tier de Shockers al corte. La contrapartida está en los libres, 10/14: mejorar el juego interior puede apretar una fortaleza del equipo."
    ],
    [
      "p",
      "Ayo Dosunmu presenta otra ruta, esta vez B: 68 puntos, nueve triples y ocho robos en cuatro encuentros, con 27/50 de campo. Puede estudiarse como alternativa a Knueppel si se prioriza producción inmediata. Kuminga comparte Minnesota, pero está sin tier en el anexo y queda exento de la restricción por franquicia. Eso hace compatible este escenario con la regla documentada; no confirma una incorporación."
    ],
    [
      "sources",
      [
        2,
        5
      ]
    ],
    [
      "h2",
      "Pilsens: una plaza útil puede valer más que otro apellido"
    ],
    [
      "p",
      "Moussa Diabate, sin tier en el anexo, acumuló 46 rebotes y seis tapones en cuatro partidos NBA. Es un perfil para comparar con la plaza de Wells si el Rubio quiere acercarse a la presencia interior de Hipopotamos. No sustituye el volumen exterior de Edwards, pero sí responde a una necesidad visible del cruce. Sus libres, 6/8, y su ausencia de triples obligan a aceptar un cambio de perfil."
    ],
    [
      "p",
      "Tyrese Maxey también atrae con 92 puntos y diez triples en tres partidos, pero no es un reemplazo directo que pueda sumarse sin más: es S, donde Pilsens ya tiene a Jokić y Edwards, y juega en Philadelphia, la franquicia de Brown, que tiene tier A. Habría que resolver ambos límites. La operación más vistosa también puede ser la que más desarme al equipo."
    ],
    [
      "sources",
      [
        2,
        5
      ]
    ],
    [
      "h2",
      "Hipopotamos y Mequetrefes: creación sin romper la cuenta de pérdidas"
    ],
    [
      "p",
      "Cam Spencer ofrece un caso para mirar con atención: 26 asistencias y una sola pérdida en tres partidos NBA, aunque con apenas 66 minutos totales. Está sin tier en el anexo. Hipopotamos podría comparar ese perfil con la plaza de Cason Wallace mientras siga fuera; Mequetrefes, con la de Monk, que tuvo 13 puntos en 35 minutos NBA durante la semana. La idea es recuperar circulación con un lugar de rotación. Ese extraordinario balance de asistencias y pérdidas no debe darse por repetible."
    ],
    [
      "p",
      "Una apuesta de más volumen para Hipopotamos es Darius Acuff Jr.: 91 puntos, 15 triples y 24 asistencias en tres partidos NBA, acompañados de 12 pérdidas. Es B y exigiría liberar uno de esos tres cupos. Naz Reid, tras su 19/57 de campo y cuatro asistencias, es una plaza que se puede comparar si se busca cambiar rebote por creación. El precio también incluye renunciar a sus 34 capturas: ninguna mejora llega sin una factura."
    ],
    [
      "p",
      "Antes de convertir cualquiera de estas ideas en un alta, quedan tres comprobaciones deportivas: salud, espacio en el tier y compatibilidad de franquicia. La liga permite tres adquisiciones semanales y no tiene una excepción de IR documentada que autorice a ignorar esos límites. Hay motivos para moverse; también para elegir bien el primer paso. El mercado recién abre la conversación."
    ],
    [
      "sources",
      [
        2,
        5
      ]
    ]
  ]
},
{
  "id": "clasicos-al-limite-viernes-30-octubre",
  "date": "2026-10-30",
  "category": "Crónicas",
  "partial": true,
  "readingMinutes": 5,
  "title": "Mequetrefes aprieta el puño; el clásico familiar queda a cuatro puntos",
  "excerpt": "Mequetrefes manda 7–2 y Cromwell debe buscar la reacción sin Edwards, operado de la rodilla. Hipopotamos sostiene un 5–4 ante Shockers: las bajas y cuatro puntos de diferencia marcan un cierre sin margen para distraerse.",
  "teams": [
    "pelafustanes",
    "pilsens",
    "hipopotamos",
    "shockers"
  ],
  "rulesLink": true,
  "fantasySnapshot": {
    "week": 2,
    "weekLabel": "Semana 2",
    "start": "2026-10-26",
    "end": "2026-11-01",
    "updatedAt": "2026-10-30T16:31:48.753Z",
    "sourceSnapshot": "./assets/cortes/espn/20261030T163148.753Z.json",
    "matchups": [
      {
        "id": "w2-m1",
        "teams": [
          "hipopotamos",
          "shockers"
        ],
        "status": "partial",
        "stats": {
          "hipopotamos": {
            "fgp": 0.48701299,
            "ftp": 0.71014493,
            "tpm": 44,
            "reb": 160,
            "ast": 77,
            "stl": 22,
            "blk": 23,
            "to": 41,
            "pts": 393
          },
          "shockers": {
            "fgp": 0.50179211,
            "ftp": 0.83673469,
            "tpm": 27,
            "reb": 154,
            "ast": 92,
            "stl": 23,
            "blk": 16,
            "to": 45,
            "pts": 389
          }
        },
        "updatedAt": "2026-10-30T16:31:48.753Z",
        "sourceMode": "espn"
      },
      {
        "id": "w2-m2",
        "teams": [
          "pilsens",
          "pelafustanes"
        ],
        "status": "partial",
        "stats": {
          "pilsens": {
            "fgp": 0.47651007,
            "ftp": 0.8,
            "tpm": 30,
            "reb": 145,
            "ast": 103,
            "stl": 21,
            "blk": 16,
            "to": 56,
            "pts": 378
          },
          "pelafustanes": {
            "fgp": 0.49211356,
            "ftp": 0.73333333,
            "tpm": 52,
            "reb": 150,
            "ast": 84,
            "stl": 28,
            "blk": 18,
            "to": 46,
            "pts": 419
          }
        },
        "updatedAt": "2026-10-30T16:31:48.753Z",
        "sourceMode": "espn"
      }
    ]
  },
  "source": "Marcadores parciales de ESPN Fantasy del 30 de octubre de 2026 a las 13:31, hora de Chile, comparados con el jueves 29. Planteles contrastados a las 13:41. Previa corregida con la lista de lesiones de ESPN actualizada a las 14:00 del viernes, el parte NBA de las 06:00 ET y comunicados sobre bajas prolongadas. Se retiran las apariciones atribuidas a Edwards y el recuento bruto de partidos como medida de disponibilidad. Los partes del sábado y domingo aún requieren actualización; no figurar en la lista no garantiza jugar. Los totales fantasy conservan su corte original.",
  "sources": [
    {
      "title": "ESPN Fantasy · Totales del corte del viernes",
      "url": "./assets/cortes/espn/20261030T163148.753Z.json"
    },
    {
      "title": "ESPN Fantasy · Corte del jueves 29",
      "url": "./assets/cortes/espn/20261029T124922.782Z.json"
    },
    {
      "title": "ESPN Fantasy · Clásico Santa María",
      "url": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=3"
    },
    {
      "title": "ESPN Fantasy · Clásico familiar",
      "url": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=1"
    },
    {
      "title": "Calendario y planteles contrastados para este fin de semana",
      "url": "./assets/cortes/semana-2-fin-de-semana-2026-10-30.json"
    },
    {
      "title": "ESPN NBA · 30 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261030"
    },
    {
      "title": "ESPN NBA · 31 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261031"
    },
    {
      "title": "ESPN NBA · 1 de noviembre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261101"
    },
    {
      "title": "Timberwolves · Edwards operado el 29 de octubre",
      "url": "https://www.nba.com/timberwolves/news/anthony-edwards-injury-update-7"
    },
    {
      "title": "NBA · Parte oficial del viernes, 06:00 ET",
      "url": "https://ak-static.cms.nba.com/referee/injury/Injury-Report_2026-10-30_06_00AM.pdf"
    },
    {
      "title": "ESPN · Estado de lesiones de los planteles al corte",
      "url": "./assets/cortes/semana-2-lesiones-2026-10-30.json"
    },
    {
      "title": "NBA · Baja de Jaren Jackson Jr.",
      "url": "https://www.nba.com/news/jaren-jackson-jr-torn-mcl-october-2026"
    },
    {
      "title": "NBA · Lesiones de Oklahoma City",
      "url": "https://www.nba.com/news/oklahoma-city-thunder-jalen-williams-cason-wallace-injuries"
    }
  ],
  "body": [
    [
      "p",
      "Papafritas League llega al viernes con dos clásicos y ninguna licencia para celebrar antes de tiempo. Mequetrefes tiene el marcador más contundente; Hipopotamos, la ventaja más delicada. Entre ambos escenarios hay un punto en común: los márgenes que parecen secundarios pueden terminar contando la historia del domingo. Las cargadas tendrán que esperar un poco."
    ],
    [
      "h2",
      "Santa María: un 7–2 con letra chica"
    ],
    [
      "matchup-cut",
      "w2-m2"
    ],
    [
      "p",
      "Mequetrefes está imponiendo condiciones ante Cromwell Pilsens. Sus 52 triples contra 30 y sus 419 puntos frente a 378 le dan volumen y capacidad de presión. También manda en robos, 28–21, y cuida mejor la pelota: 46 pérdidas contra 56. El equipo del Chino llega al tramo decisivo con siete categorías de su lado y una respuesta convincente al 2–7 del debut."
    ],
    [
      "p",
      "Pero el 7–2 no tiene siete candados. Los rebotes están 150–145 y los tapones, 18–16. Cromwell necesita recuperar apenas esos dos frentes para transformar una desventaja amplia en un 4–5. Si además revierte el porcentaje de campo, hoy 47,65% contra 49,21%, podría pasar al frente, siempre que conserve sus ventajas en libres y asistencias. Es un camino estrecho; sigue siendo un camino."
    ],
    [
      "p",
      "La tarea del Rubio es elegir bien dónde gastar sus recursos. Sus 103 asistencias contra 84 y el 80% en libres frente al 73,33% rival sostienen las dos categorías que todavía controla. Perseguir los 22 triples de diferencia como única apuesta puede dispersar el esfuerzo. Rebote, protección del aro y eficiencia ofrecen una conversación más cercana con este marcador. Para Mequetrefes, defender esas dos ventajas mínimas puede valer más que otra exhibición ofensiva."
    ],
    [
      "p",
      "La remontada de Cromwell debe plantearse sin Anthony Edwards, operado de la rodilla derecha el jueves y fuera de acción. Sus citas ante Clippers y Spurs no son recursos para este cierre. Además, Jaylen Brown está cuestionable para el viernes por molestias en la rodilla izquierda. El Rubio pierde una de sus mayores fuentes de puntos y triples, y tampoco puede dar por segura la ayuda de Brown: recuperar rebotes, tapones y eficiencia cobra todavía más sentido."
    ],
    [
      "p",
      "Mequetrefes también tiene motivos para mirar el parte: Alperen Sengun está cuestionable por molestias lumbares y Jalen Smith por un esguince en un dedo de la mano izquierda. Ambas dudas corresponden al viernes. Si Sengun no juega, defender los cinco rebotes de ventaja será una tarea más exigente para el resto del plantel. El 7–2 permite respirar; no permite desatender la alineación."
    ],
    [
      "sources",
      [
        0,
        2,
        8,
        9,
        10
      ]
    ],
    [
      "h2",
      "Clásico familiar: cuatro puntos y la calculadora encendida"
    ],
    [
      "matchup-cut",
      "w2-m1"
    ],
    [
      "p",
      "Hipopotamos gana 5–4 a Penalolen Shockers, pero basta mirar el 393–389 en puntos para entender la tensión. El jueves, Shockers llevaba once de ventaja en anotación; ahora el líder del debut aparece cuatro arriba y esa categoría ha cambiado de dueño. Un adelantamiento de Patricio en puntos devolvería el 5–4 a su lado si el resto se mantiene igual. En este clásico, una buena noche no solo engorda el box score: puede cambiar al equipo que encabeza la serie."
    ],
    [
      "p",
      "Cristóbal tiene respaldo en triples, 44–27, y tapones, 23–16. En rebotes se sostiene por seis, 160–154, y en pérdidas por cuatro, 41–45. Shockers responde con mejores porcentajes, 50,18% de campo y 83,67% en libres, y con 92 asistencias frente a 77. Su ventaja en robos es mínima: 23–22. Hipopotamos necesita recuperar un robo para empatar esa columna y dos para ponerse arriba, si el resto se mantiene. Nadie tiene espacio para distraerse con una sola columna."
    ],
    [
      "p",
      "El fin de semana exige una lectura fina de las posesiones. Hipopotamos necesita proteger rebotes y puntos sin regalar el control de pérdidas. Shockers debe sostener sus robos y buscar el vuelco en una de esas categorías cercanas. Los libres ofrecen hoy un margen considerable para Patricio; el porcentaje de campo es más sensible a una noche de volumen y poco acierto. La foto favorece a Hipopotamos. El partido sigue teniendo dos manos sobre el volante."
    ],
    [
      "p",
      "Las bajas también pesan en el clásico familiar. Shockers no tendrá a Jaren Jackson Jr., lesionado de la rodilla, y Kon Knueppel está descartado para el viernes; su situación del sábado necesita un nuevo parte. Patricio pierde una opción importante para discutir los tapones y llega con menos alternativas de las que sugiere el calendario. Hipopotamos, por su parte, tiene fuera a Cason Wallace por lesión de hombro. Con las rotaciones recortadas, los aportes de quienes sí puedan jugar tendrán más peso sobre esos cuatro puntos de diferencia."
    ],
    [
      "sources",
      [
        0,
        1,
        3,
        9,
        10,
        11,
        12
      ]
    ],
    [
      "h2",
      "La agenda: viernes de figuras, sábado de presión y domingo de cierre"
    ],
    [
      "p",
      "El viernes deja dos focos centrales: Nikola Jokić ante Phoenix y Cade Cunningham en Brooklyn. Ninguno figura en la lista de lesiones consultada. Con Edwards fuera y Brown en duda, Cromwell depende más de la producción de Jokić, que tiene esta única cita antes del cierre. Hipopotamos busca que Cunningham le ayude a sostener la anotación sin disparar las pérdidas. Aquí una gran noche puede cambiar una categoría; una estrella ausente no suma por aparecer en la agenda."
    ],
    [
      "p",
      "El sábado, Minnesota visita San Antonio sin Edwards como opción para Cromwell. Victor Wembanyama aparece en la agenda de Hipopotamos, mientras Shai Gilgeous-Alexander tiene Oklahoma City–Houston para Shockers. En Santa María, Domantas Sabonis tiene Sacramento–Memphis como única cita del fin de semana y como posible ocasión para recortar los rebotes. Sus equipos aún no habían presentado los partes del sábado en el informe consultado: esos nombres orientan la previa, pero su participación debe confirmarse."
    ],
    [
      "p",
      "El domingo quedan solo cuatro partidos NBA. Derrick White y Walker Kessler aparecen entre los nombres a seguir de Hipopotamos; Jayson Tatum y Scottie Barnes, entre los de Shockers. Kessler está disponible en el parte del viernes, pese a llevar una férula en un dedo de la mano izquierda: esa autorización corresponde a ese partido y habrá que revisar el domingo. Para Santa María, la agenda señala a Darius Garland y Sandro Mamukelashvili en Cromwell, y a Luka Dončić y Payton Pritchard en Mequetrefes. Ninguno de estos nombres tiene una baja registrada para el viernes; los partes del cierre todavía pueden cambiar el panorama."
    ],
    [
      "p",
      "Por eso, el total bruto de encuentros de las franquicias no sirve para repartir ventajas entre estos planteles. Las bajas ya confirmadas reducen las opciones, las dudas del viernes siguen abiertas y los partes de los próximos días aún deben actualizarse. Las decisiones de alineación determinarán qué producción entra en ESPN Fantasy. La agenda importa; para pronosticar este cierre, primero hay que saber quién puede pisar la cancha."
    ],
    [
      "sources",
      [
        4,
        5,
        6,
        7,
        9,
        10
      ]
    ],
    [
      "p",
      "El domingo 1 de noviembre cerrará estas series. Hasta entonces, Mequetrefes debe defender las costuras de su 7–2 y Cromwell necesita convertir margen de reacción en categorías recuperadas. Hipopotamos y Shockers tienen un clásico familiar abierto de par en par. Por ahora manda la calculadora; el derecho a cargar al rival todavía está en juego."
    ]
  ]
},
{
  "id": "waivers-26-octubre-haliburton-sabonis-kessler",
  "date": "2026-10-26",
  "category": "Trades",
  "readingMinutes": 4,
  "title": "Haliburton encabeza los waivers; Sabonis y Kessler destacan por su encaje",
  "excerpt": "Diez incorporaciones y $104 en pujas mueven los cuatro planteles. Hipopotamos realiza la mayor inversión, Cromwell cambia su estructura por $4 y Shockers y Mequetrefes refuerzan la rotación.",
  "teams": [
    "hipopotamos",
    "pilsens",
    "shockers",
    "pelafustanes"
  ],
  "transactionReportId": "waivers-2026-10-26",
  "rulesLink": true,
  "image": {
    "src": "./assets/editorial/waivers-2026-10-26.webp",
    "small": "./assets/editorial/waivers-2026-10-26-640.webp",
    "width": 1280,
    "height": 720,
    "alt": "Ilustración editorial de Domantas Sabonis, Tyrese Haliburton y Walker Kessler, protagonistas de las adquisiciones por waivers.",
    "caption": "Sabonis, Haliburton y Kessler encabezan el análisis de las incorporaciones. Ilustración editorial."
  },
  "source": "Movimientos confirmados en la captura de ESPN Fantasy del 26 de octubre de 2026. La selección de fichajes destacados es una valoración editorial por jerarquía, encaje y producción reciente. Las cifras individuales corresponden a partidos NBA del 20 al 25 de octubre, anteriores a estas adquisiciones; no modifican los resultados fantasy ya cerrados. Los importes son las pujas mostradas por ESPN.",
  "sources": [
    {
      "title": "ESPN · Boston Celtics at Detroit Pistons · 20 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909088"
    },
    {
      "title": "ESPN · Minnesota Timberwolves at Miami Heat · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909091"
    },
    {
      "title": "ESPN · Golden State Warriors at Los Angeles Lakers · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909092"
    },
    {
      "title": "ESPN · Houston Rockets at San Antonio Spurs · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909096"
    },
    {
      "title": "ESPN · Atlanta Hawks at Orlando Magic · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909834"
    },
    {
      "title": "ESPN · Chicago Bulls at Toronto Raptors · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909837"
    },
    {
      "title": "ESPN · Utah Jazz at Memphis Grizzlies · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909838"
    },
    {
      "title": "ESPN · Indiana Pacers at New Orleans Pelicans · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909839"
    },
    {
      "title": "ESPN · Dallas Mavericks at Houston Rockets · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909840"
    },
    {
      "title": "ESPN · Sacramento Kings at LA Clippers · 21 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909842"
    },
    {
      "title": "ESPN · Atlanta Hawks at Charlotte Hornets · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909843"
    },
    {
      "title": "ESPN · Dallas Mavericks at Indiana Pacers · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909844"
    },
    {
      "title": "ESPN · Minnesota Timberwolves at Orlando Magic · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909845"
    },
    {
      "title": "ESPN · Detroit Pistons at Miami Heat · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909847"
    },
    {
      "title": "ESPN · Chicago Bulls at Milwaukee Bucks · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909848"
    },
    {
      "title": "ESPN · New Orleans Pelicans at Utah Jazz · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909849"
    },
    {
      "title": "ESPN · LA Clippers at Los Angeles Lakers · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909851"
    },
    {
      "title": "ESPN · Portland Trail Blazers at Sacramento Kings · 23 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909852"
    },
    {
      "title": "ESPN · Houston Rockets at Atlanta Hawks · 24 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909856"
    },
    {
      "title": "ESPN · Washington Wizards at Chicago Bulls · 24 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909857"
    },
    {
      "title": "ESPN · Los Angeles Lakers at Utah Jazz · 25 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909861"
    },
    {
      "title": "ESPN · Indiana Pacers at Brooklyn Nets · 25 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909862"
    },
    {
      "title": "ESPN · Toronto Raptors at Minnesota Timberwolves · 25 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909864"
    },
    {
      "title": "ESPN · LA Clippers at Oklahoma City Thunder · 25 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909865"
    },
    {
      "title": "ESPN · Detroit Pistons at Philadelphia 76ers · 25 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909866"
    },
    {
      "title": "ESPN · Memphis Grizzlies at Sacramento Kings · 25 oct",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909867"
    }
  ],
  "body": [
    [
      "p",
      "Los waivers dejaron de ser una lista de posibilidades y pasaron a cambiar los planteles. Los diez movimientos de la captura suman $104 en pujas: Hipopotamos invirtió $43, Shockers $32, Mequetrefes $25 y Cromwell Pilsens $4. La mayor apuesta fue Tyrese Haliburton, por $31. Por encaje y producción reciente, Domantas Sabonis y Walker Kessler también merecen un lugar destacado."
    ],
    [
      "transaction-highlights",
      "waivers-2026-10-26"
    ],
    [
      "team-heading",
      "hipopotamos"
    ],
    [
      "h2",
      "Haliburton toma el mando de las compras; Kessler refuerza la identidad"
    ],
    [
      "p",
      "El líder incorporó a Haliburton por $31 y dejó a Josh Giddey en waivers. El base de Indiana abrió la temporada con 65 puntos, 29 asistencias, seis triples y 24/45 de campo en tres partidos. Es una apuesta por sostener la creación junto a Cade Cunningham y ganar amenaza de tiro. Giddey había aportado 25 asistencias al primer cruce: sale una pieza útil, no un puesto vacío. Haliburton registró ocho pérdidas NBA en ese tramo; sumar otro generador también exige cuidar posesiones."
    ],
    [
      "p",
      "Kessler llegó por $6 en lugar de Onyeka Okongwu. Sus nueve tapones y 24 rebotes en tres partidos ofrecen un complemento claro para Wembanyama. El 23/28 de campo también ayuda a entender el atractivo, aunque el 4/9 en libres recuerda el costo potencial en otra categoría. La tercera incorporación fue Ace Bailey por $6, con la salida de Bennett Stirtz. Bailey acumuló 35 puntos, 24 rebotes y cuatro tapones en tres encuentros: una apuesta con participación reciente para profundizar la rotación."
    ],
    [
      "sources",
      [
        2,
        6,
        7,
        11,
        15,
        16,
        20,
        21
      ]
    ],
    [
      "team-heading",
      "pilsens"
    ],
    [
      "h2",
      "Sabonis y Garland: una transformación por $4"
    ],
    [
      "p",
      "Diego Alvarez movió dos piezas importantes: Jalen Brunson salió para incorporar a Sabonis por $2; Banchero dejó su lugar a Darius Garland, también por $2. Sabonis es una de las adquisiciones de mayor impacto potencial del listado. En tres partidos NBA reunió 52 rebotes, 21 asistencias y 56 puntos, con 21/26 de campo. Junto a Jokić y Jalen Johnson, puede reforzar una estructura de pase y rebote que ya tiene varias vías de producción."
    ],
    [
      "p",
      "Garland añade otra clase de creación: 72 puntos, nueve triples y 21 asistencias en tres actuaciones. La contrapartida son sus 18 pérdidas. Cromwell ganó esa categoría por apenas dos en el debut, así que ese volumen merece seguimiento. La salida de Brunson, que aportó 68 puntos al cierre, y de Banchero cambia el reparto de responsabilidades. El precio fue bajo; la decisión deportiva es considerable. Además, ambos jugadores liberados pasan a waivers y se convierten en nombres a observar para el resto de la liga."
    ],
    [
      "sources",
      [
        9,
        16,
        17,
        23,
        25
      ]
    ],
    [
      "team-heading",
      "shockers"
    ],
    [
      "h2",
      "VanVleet, Kuminga y Reed: ajustes en tres funciones"
    ],
    [
      "p",
      "Shockers utilizó tres incorporaciones. Fred VanVleet llegó por $14 en lugar de Jalen Suggs; Jonathan Kuminga, por $8 en el puesto de Herbert Jones; Paul Reed, por $10 tras la salida de Daniel Gafford. VanVleet destaca por las 16 asistencias, seis robos y ninguna pérdida en sus dos partidos NBA iniciales. Su 6/18 de campo impide presentar el movimiento como una mejora garantizada de eficiencia, pero ofrece una vía para ordenar la creación."
    ],
    [
      "p",
      "Kuminga aportó siete triples, siete robos y una sola pérdida en tres encuentros, mientras Reed sumó 25 rebotes y tres tapones en el mismo número de actuaciones. Son perfiles que pueden ampliar la rotación de Patricio Uribe. El desafío consiste en traducirlos en minutos contabilizados sin perder las funciones defensivas que ofrecían Jones y Gafford."
    ],
    [
      "sources",
      [
        0,
        1,
        3,
        8,
        12,
        13,
        22,
        24
      ]
    ],
    [
      "team-heading",
      "pelafustanes"
    ],
    [
      "h2",
      "Smith y Wiggins apuntan a una segunda línea más productiva"
    ],
    [
      "p",
      "Mequetrefes pagó $15 por Jalen Smith, la segunda puja más alta de la captura, y liberó a Klay Thompson. Smith acumuló 43 puntos, 24 rebotes y cuatro triples en tres partidos NBA. El cambio puede reforzar el rebote, aunque Klay había aportado siete triples al cómputo fantasy: esas funciones no se sustituyen de forma idéntica."
    ],
    [
      "p",
      "Aaron Wiggins llegó por $10 en lugar de Royce O'Neale. Sus 51 puntos, diez triples y cinco robos, con 18/31 de campo en tres actuaciones, ofrecen argumentos para mejorar la producción exterior. Después de un debut en el que las estrellas cargaron con buena parte del ataque, Carlos Sanchez busca más aportes desde la rotación. La inversión apunta a repartir esa carga, sin resolver por sí sola el problema de las pérdidas."
    ],
    [
      "sources",
      [
        4,
        5,
        10,
        14,
        18,
        19
      ]
    ],
    [
      "transaction-table",
      "waivers-2026-10-26"
    ],
    [
      "p",
      "Haliburton concentra la inversión; Sabonis modifica el frente interior de Cromwell y Kessler refuerza una identidad defensiva ya reconocible en Hipopotamos. El resto de las incorporaciones se medirá por su capacidad de convertir participación en categorías. Estas cifras son antecedentes NBA: ninguno de los refuerzos añade puntos retroactivos al cierre de la primera semana."
    ]
  ]
},
{
  "id": "previa-clasicos-santa-maria-familiar",
  "date": "2026-10-26",
  "category": "Previas",
  "readingMinutes": 3,
  "title": "Semana de clásicos: Santa María mide fuerzas y la familia disputa el liderato",
  "excerpt": "Cromwell y Mequetrefes se encuentran en el clásico Santa María; Hipopotamos y Shockers protagonizan el clásico familiar. Dos duelos con estrellas, necesidades distintas y categorías que prometen una pelea estrecha.",
  "teams": [
    "pilsens",
    "pelafustanes",
    "hipopotamos",
    "shockers"
  ],
  "reportId": "semana-1-final-2026-10-25",
  "rulesLink": true,
  "source": "Previa editorial al 26 de octubre de 2026. Emparejamientos y nombres de los clásicos confirmados por el participante. Las estadísticas pertenecen exclusivamente al cierre de la primera semana; no son resultados ni proyecciones numéricas de la próxima fecha. No se han comunicado fechas exactas ni alineaciones confirmadas para estos cruces.",
  "sources": [
    {
      "title": "NBA · Situación de Banchero",
      "url": "https://www.nba.com/news/paolo-banchero-ankle-sprain"
    },
    {
      "title": "Associated Press / ABC7 · Suggs salió lesionado ante Nueva York",
      "url": "https://abc7ny.com/post/wagner-magic-use-big-fourth-quarter-drop-knicks-0-3-111-102-victory/19979581/"
    }
  ],
  "body": [
    [
      "p",
      "La próxima fecha de Papafritas League tendrá algo más que categorías en disputa. El clásico Santa María enfrentará a Cromwell Pilsens con Mequetrefes, mientras el clásico familiar reunirá a Los Hipopotamos Chuchetumare y Penalolen Shockers. Los números del debut ayudan a identificar fortalezas y urgencias; cada cruce tendrá su propia historia."
    ],
    [
      "h2",
      "Clásico Santa María: el ataque de Cromwell y la respuesta de Mequetrefes"
    ],
    [
      "p",
      "Cromwell llega segundo, con récord de 5–4–0, después de sobrevivir a la reacción de Shockers. Mequetrefes abre desde el cuarto lugar, con 2–7–0, pero con una ofensiva capaz de cambiar el panorama. El duelo reúne al equipo más anotador del estreno, con 642 puntos, y al conjunto de Luka Dončić, autor de 103 puntos y 15 triples en el cómputo fantasy. La clasificación marca una diferencia inicial; el talento disponible permite esperar competencia."
    ],
    [
      "p",
      "Anthony Edwards y Jaylen Brown aportaron 169 puntos entre ambos al triunfo de Cromwell. Jalen Johnson añadió un factor menos vistoso y muy importante: 30 asistencias y 30 rebotes. Con Banchero fuera, sostener la creación y la eficiencia exigirá más de ese núcleo. Nikola Jokić, que abrió con 17/42 de campo en dos partidos, tiene margen para elevar el rendimiento. La continuidad de Jaylen Wells y el aporte de Dylan Harper pueden evitar que toda la carga recaiga sobre las figuras."
    ],
    [
      "sources",
      [
        0
      ]
    ],
    [
      "p",
      "Mequetrefes tiene una vía para incomodar: Dončić y Donovan Mitchell desde el perímetro, Giannis Antetokounmpo y Alperen Sengun por dentro. En el debut terminó con más triples que Cromwell, 58 frente a 54, y mejor porcentaje de libres, 81,18% frente a 74,84%. Son antecedentes favorables para disputar esas categorías, siempre sujetos al volumen y los partidos que cuenten esta vez."
    ],
    [
      "p",
      "La gran tarea de Carlos Sanchez será controlar las pérdidas y mejorar la selección de tiro. Sus 89 pérdidas y el 19/64 de Brandon Miller limitaron un ataque productivo. Cromwell tampoco tiene una categoría de seguridad en el cuidado del balón: la ganó por apenas dos pérdidas. Si Mequetrefes consigue mejores posesiones sin sacrificar triples, el clásico puede resolverse en eficiencia, asistencias y detalles de rotación. Los apellidos impresionan; las pérdidas también suman, aunque nadie las presuma."
    ],
    [
      "h2",
      "Clásico familiar: la defensa de Hipopotamos contra la profundidad de Shockers"
    ],
    [
      "p",
      "Hipopotamos entra como líder, con 7–2–0. Shockers llega tercero, con 4–5–0, y el antecedente de haber reducido una desventaja importante. El cruce entre Cristóbal y Patricio Uribe encuentra dos identidades claras: Wembanyama y Cunningham sostienen una estructura fuerte en tapones y creación; Gilgeous-Alexander, Towns y Daniels ofrecen anotación, rebote y presión defensiva desde funciones diferentes."
    ],
    [
      "p",
      "El enfrentamiento interior promete ser central. Wembanyama sumó 12 tapones y 33 rebotes; Towns respondió en su propio cruce con 36 rebotes y 23/37 de campo. Jaren Jackson Jr. y Daniel Gafford dan a Shockers recursos para discutir los bloqueos, mientras Naz Reid añade a Hipopotamos una amenaza exterior desde la rotación interior. Sus 12 triples, junto con los nueve de Toumani Camara, ayudaron a construir los 59 del equipo. Shockers cerró con 34: el tiro exterior aparece como una prueba importante para Patricio."
    ],
    [
      "p",
      "En el perímetro habrá otra disputa: Cade Cunningham y Josh Giddey reunieron 49 asistencias para Hipopotamos, pero Dyson Daniels produjo 13 robos para Shockers. La capacidad de crear sin entregar posesiones será clave. También habrá que seguir a Jalen Suggs, que salió ante Nueva York por una lesión de rodilla; esta previa no dispone de un plazo de regreso confirmado. Su situación condiciona una rotación a la que aportó 17 asistencias y seis robos durante la primera semana."
    ],
    [
      "sources",
      [
        1
      ]
    ],
    [
      "p",
      "Shockers tiene argumentos para presionar en rebotes, robos y libres; Hipopotamos buscará sostener su tiro exterior, creación y protección del aro. La recuperación de Scottie Barnes y Cameron Boozer en el acierto, y la capacidad de Wembanyama de mejorar su 19/52, pueden inclinar porcentajes muy disputados. El líder tendrá que defender su posición frente a un rival con recursos para obligarlo a ganar cada categoría con trabajo."
    ]
  ]
},
{
  "date": "2026-10-26",
  "teams": [
    "hipopotamos",
    "pelafustanes",
    "pilsens",
    "shockers"
  ],
  "reportId": "semana-1-final-2026-10-25",
  "rulesLink": true,
  "id": "cierre-semana-1-hipopotamos-pilsens",
  "category": "Crónicas",
  "readingMinutes": 4,
  "title": "Hipopotamos golpea primero; Cromwell resiste hasta el 5–4",
  "excerpt": "Hipopotamos cerró un 7–2 construido entre defensa, creación y un triple de diferencia. Cromwell ganó 5–4 con el peso de Edwards, Jalen Johnson y una segunda línea decisiva. Así terminó la primera semana.",
  "source": "Crónica del cierre del 20 al 25 de octubre de 2026. Cifras contabilizadas por ESPN Fantasy en las capturas entregadas, contrastadas con actas NBA. Las diferencias entre partidos NBA y cómputo fantasy se detallan en las tablas. Las valoraciones son editoriales; no se atribuyen negociaciones ni movimientos de plantilla.",
  "body": [
    [
      "p",
      "La primera semana dejó dos ganadores y una advertencia: en Papafritas League, la distancia del marcador puede esconder una pelea mucho más estrecha. Hipopotamos pasó del 4–4–1 del corte del viernes al 7–2 definitivo sobre Mequetrefes. Cromwell Pilsens, que entonces mandaba 7–2, terminó imponiéndose 5–4 a Penalolen Shockers. No hay que inventar un lanzamiento sobre la bocina para encontrar tensión: bastan un triple y dos pérdidas."
    ],
    [
      "team-heading",
      "hipopotamos"
    ],
    [
      "p",
      "Cristóbal Uribe ganó siete categorías sin necesitar la mayor anotación. Victor Wembanyama sostuvo el techo defensivo con 12 tapones y 33 rebotes; Cade Cunningham añadió 64 puntos, 24 asistencias y seis bloqueos. Las 25 asistencias de Josh Giddey también importaron, aunque sus 17 puntos y 7/26 de campo dejaron una actuación ofensiva discreta. Hipopotamos terminó arriba en rebotes, asistencias, robos, tapones y control de pérdidas."
    ],
    [
      "p",
      "La diferencia estuvo también en los acompañantes. Naz Reid aportó 60 puntos y 12 triples; Toumani Camara sumó nueve aciertos exteriores, con 13/21 de campo y una sola pérdida. Jaden McDaniels combinó 46 puntos, 20 rebotes, cinco tapones y 20/35 en tiros. Esa eficiencia ayudó a compensar el 19/52 de Wembanyama. El balance acabó en 59–58 en triples y 44,75%–44,16% de campo: dos categorías estrechas que dieron amplitud al resultado."
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
      "Mequetrefes tuvo al máximo anotador del cruce. Luka Dončić produjo 103 puntos, 15 triples y 24 asistencias; Giannis Antetokounmpo agregó 85 puntos con 32/56 de campo, y Alperen Sengun firmó 69 puntos, 27 rebotes y 19 asistencias. Con ese núcleo, el equipo de Carlos Sanchez ganó puntos por 574–483 y tiros libres por 81,18%–70,21%. Hubo potencia suficiente para competir; faltó convertirla en más categorías."
    ],
    [
      "p",
      "El costo apareció en las 89 pérdidas, 21 de Dončić, y en varios porcentajes bajos. Brandon Miller hizo 58 puntos, pero necesitó 64 lanzamientos para convertir 19; Malik Monk quedó en seis puntos y 3/14, mientras Payton Pritchard registró 5/14. Son rendimientos a revisar, sin convertir una semana en sentencia. Klay Thompson, en cambio, contribuyó con siete triples al cómputo fantasy. El 2–7 exige corregir el equilibrio, sin desconocer lo que sí entregaron las figuras."
    ],
    [
      "player-report",
      "pelafustanes"
    ],
    [
      "team-heading",
      "pilsens"
    ],
    [
      "p",
      "Cromwell ganó con más recursos que una sola estrella. Anthony Edwards encabezó la producción con 86 puntos y 13 triples; Jaylen Brown añadió 83 puntos y Jalen Brunson, 68. Jalen Johnson fue fundamental para la creación: reunió 65 puntos, 30 rebotes y 30 asistencias. Ese aporte pesó en el 133–117 de pases de canasta y en una ofensiva que terminó con 642 puntos y 54 triples, frente a 536 y 34 de Shockers."
    ],
    [
      "p",
      "La sorpresa más valiosa fue Jaylen Wells: 45 puntos, siete triples, seis robos, 16/26 de campo y apenas dos pérdidas. Dylan Harper aportó otros 60 puntos. En un cruce decidido por 76–78 en pérdidas y 45,65%–45,09% de campo, esas actuaciones eficientes tuvieron valor competitivo. Paolo Banchero dejó 49 puntos y 16/23 antes de cerrar la semana con dos partidos contabilizados. Nikola Jokić quedó en 48 puntos y 17/42 en sus dos actuaciones; esta vez sus compañeros cargaron con buena parte del ataque."
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
      "El equipo de Patricio Uribe recortó la desventaja del viernes y terminó a una categoría de invertir el desenlace. Shai Gilgeous-Alexander lideró con 83 puntos, cinco robos, cinco tapones y solo cuatro pérdidas. Karl-Anthony Towns aportó 63 puntos, 36 rebotes y 23/37 de campo. Dyson Daniels fue el especialista más influyente: 13 robos y 21/34 en tiros, decisivos en el 53–42 de recuperaciones. Shockers también ganó rebotes, tapones y tiros libres."
    ],
    [
      "p",
      "La recuperación de Tari Eason merece atención: del mínimo protagonismo del primer corte pasó a cerrar con 33 puntos, cinco robos y 61 minutos. Amen Thompson agregó 53 puntos y 31 rebotes. El problema estuvo en el tiro: Scottie Barnes terminó con 20/57, Cameron Boozer con 14/49 y Jalen Suggs con 10/28. Boozer compensó parcialmente con 35 rebotes y 15 asistencias, pero la falta de acierto pesó en una categoría resuelta por poco más de medio punto porcentual. La defensa acercó el partido; el ataque dejó pendiente el último paso."
    ],
    [
      "player-report",
      "shockers"
    ],
    [
      "h2",
      "Una tabla que premia cada categoría"
    ],
    [
      "p",
      "Hipopotamos inicia primero con 7–2–0, seguido por Cromwell con 5–4–0, Shockers con 4–5–0 y Mequetrefes con 2–7–0. Ese es el récord por categorías de ESPN, distinto del balance de cruces semanales. La próxima decisión de cada dueño pasa por identificar qué margen puede corregir: no todos necesitan otra estrella para ganar una categoría más."
    ]
  ]
},
{
  "date": "2026-10-26",
  "teams": [
    "hipopotamos",
    "pelafustanes",
    "pilsens",
    "shockers"
  ],
  "reportId": "semana-1-final-2026-10-25",
  "rulesLink": true,
  "id": "mercado-tras-semana-1-flagg-wagner",
  "image": {
    "src": "./assets/editorial/market-flagg-wagner.webp",
    "small": "./assets/editorial/market-flagg-wagner-640.webp",
    "width": 1280,
    "height": 640,
    "alt": "Ilustración de Cooper Flagg y Franz Wagner sobre un tablero de análisis de posibles refuerzos.",
    "caption": "Flagg y Wagner, dos perfiles bajo observación. Ilustración editorial."
  },
  "category": "Trades",
  "readingMinutes": 4,
  "title": "Flagg despierta interés; Wagner gana peso en un mercado con condiciones",
  "excerpt": "La baja de Banchero cambia el escenario en Orlando y pone a Franz Wagner bajo otra luz. Flagg atrae miradas, mientras varios especialistas ofrecen respuestas concretas a las carencias que dejó la primera semana.",
  "source": "Análisis editorial al 26 de octubre de 2026. El interés de varios equipos en Flagg fue comunicado por un participante; no hay ofertas ni negociaciones confirmadas. Estadísticas NBA del 20 al 25 de octubre, distintas del cómputo fantasy cuando corresponda. Los candidatos no figuran en los planteles documentados: su disponibilidad real en ESPN debe comprobarse. No se registra ninguna alta, baja o trade.",
  "sources": [
    {
      "title": "ESPN · Dallas–Houston, 21 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909840"
    },
    {
      "title": "ESPN · Dallas–Indiana, 23 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909844"
    },
    {
      "title": "NBA · Parte sobre el hombro de Flagg, 24 de octubre",
      "url": "https://www.nba.com/news/mavericks-cooper-flagg-out-left-shoulder-sprain"
    },
    {
      "title": "NBA · Parte de Banchero, 24 de octubre",
      "url": "https://www.nba.com/news/paolo-banchero-ankle-sprain"
    },
    {
      "title": "ESPN · Atlanta–Orlando, 21 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909834"
    },
    {
      "title": "ESPN · Minnesota–Orlando, 23 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909845"
    },
    {
      "title": "ESPN · Orlando–Nueva York, 25 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909863"
    },
    {
      "title": "Orlando Magic · Crónica del triunfo en Nueva York",
      "url": "https://www.nba.com/magic/news/orlando-magic-overcome-10-point-fourth-quarter-deficit-to-take-down-defending-champs-20261025"
    },
    {
      "title": "ESPN · Atlanta–Charlotte, 23 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909843"
    },
    {
      "title": "ESPN · Houston–Atlanta, 24 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909856"
    },
    {
      "title": "ESPN · Sacramento–Clippers, 21 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909842"
    },
    {
      "title": "ESPN · Portland–Sacramento, 23 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909852"
    },
    {
      "title": "ESPN · Memphis–Sacramento, 25 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909867"
    },
    {
      "title": "ESPN · Boston–Detroit, 20 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909088"
    },
    {
      "title": "ESPN · Miami–Detroit, 23 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909847"
    },
    {
      "title": "ESPN · Detroit–Philadelphia, 25 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909866"
    },
    {
      "title": "ESPN · Clippers–Lakers, 23 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909851"
    },
    {
      "title": "ESPN · Clippers–Oklahoma City, 25 de octubre",
      "url": "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909865"
    }
  ],
  "body": [
    [
      "p",
      "El primer cierre dejó necesidades identificables: más eficiencia para Hipopotamos, defensa y control para Mequetrefes, protección interior para Cromwell y tiro exterior para Shockers. Según la información entregada a esta redacción, varios equipos miran con interés a Cooper Flagg. No hay ofertas confirmadas, pero sí motivos deportivos para revisar su encaje y el de otros candidatos."
    ],
    [
      "h2",
      "Flagg: el talento interesa, el hombro obliga a esperar"
    ],
    [
      "p",
      "Flagg acumuló 46 puntos, diez rebotes, ocho asistencias, seis robos y dos tapones en dos partidos con Dallas, con 14/23 de campo y 15/17 en libres. Esa combinación permite ayudar en varias categorías sin depender del triple. Pero faltó el sábado por un esguince leve de hombro izquierdo; su disponibilidad inmediata requiere seguimiento."
    ],
    [
      "p",
      "En Hipopotamos podría ampliar la anotación y las recuperaciones. La cuenta es exigente: es A+ y los dos cupos están ocupados por Giddey y Avdija. Habría que mover a uno de ellos; cambiar a Giddey también implica arriesgar las 25 asistencias que aportó al cierre. En Mequetrefes, abrirle espacio exigiría desprenderse de Mitchell o Sengun, ambos de buen rendimiento. El interés tiene sentido; una mejora automática no está demostrada."
    ],
    [
      "sources",
      [
        0,
        1,
        2
      ]
    ],
    [
      "h2",
      "Wagner toma protagonismo; Cromwell enfrenta una decisión distinta"
    ],
    [
      "p",
      "Orlando confirmó un esguince alto en el tobillo derecho de Banchero. No hay fecha de regreso confirmada. Su ausencia abre más responsabilidad para Franz Wagner: es una proyección de uso, no una garantía de mejores porcentajes. El alemán cerró tres partidos con 63 puntos, 25 rebotes y 19 asistencias. Ante Nueva York firmó 23 puntos, 13 rebotes y nueve asistencias; anotó 21 puntos en el último cuarto."
    ],
    [
      "p",
      "Wagner es A. Para Mequetrefes, una eventual salida de Brandon Miller abriría un cupo compatible con buscar más rebote y creación desde el alero. La cautela también tiene números: Wagner lanzó 25/57 de campo, 10/15 en libres y perdió 12 balones durante la semana. En Cromwell, Banchero ya ocupa un cupo A y la franquicia Orlando entre los jugadores con tier. Sumar a Wagner manteniendo a Banchero no cumple esa restricción; no hay una excepción de IR confirmada que permita asumir lo contrario."
    ],
    [
      "sources",
      [
        3,
        4,
        5,
        6,
        7
      ]
    ],
    [
      "team-heading",
      "hipopotamos"
    ],
    [
      "p",
      "La alternativa más sencilla de explorar es Wendell Carter Jr., sin tier en el anexo. Sus tres partidos dejaron 51 puntos, 26 rebotes, 19/25 de campo y 9/10 en libres. Ese perfil complementa a Wembanyama y puede aportar eficiencia donde el equipo aún tiene margen. Bennett Stirtz, con 14 minutos y dos puntos contabilizados, sería una plaza a revisar si esa participación reducida continúa. La muestra es breve: Carter ofrece una vía de aporte, no una promesa de repetir el 76% de acierto."
    ],
    [
      "sources",
      [
        4,
        5,
        6
      ]
    ],
    [
      "team-heading",
      "pelafustanes"
    ],
    [
      "p",
      "Nickeil Alexander-Walker presentó argumentos: 63 puntos, 11 triples y seis robos en tres partidos, con 20/43 de campo y cinco pérdidas. Es A y podría entrar por Miller si se busca más equilibrio exterior; no añadirlo por encima del límite. Para atacar los 17 tapones del cierre, Brook Lopez ofrece otra vía: 54 puntos, seis triples y cinco bloqueos, con 20/31 de campo, en tres partidos. Está sin tier y merece comparación con el aporte de Monk, que quedó en seis puntos fantasy. Son ajustes posibles; Miller conserva un techo que una mala semana no borra."
    ],
    [
      "sources",
      [
        4,
        8,
        9,
        10,
        16,
        17
      ]
    ],
    [
      "team-heading",
      "pilsens"
    ],
    [
      "p",
      "La lesión de Banchero obliga a estudiar cobertura sin regalar un activo valioso. Lopez también encaja aquí: sus tapones y tiro exterior pueden complementar un equipo que ganó en ataque pero perdió bloqueos 16–27. Dillon Brooks, con 25 puntos y ningún robo ni tapón contabilizado, sería una plaza de rotación a evaluar si se prioriza ese cambio de perfil. Carter ofrece otra opción interior. Al estar ambos sin tier, la regla por franquicia no impide incorporar a Carter junto a Banchero; sí siguen vigentes los límites generales de plantilla y adquisiciones."
    ],
    [
      "sources",
      [
        4,
        5,
        6,
        10,
        16,
        17
      ]
    ],
    [
      "team-heading",
      "shockers"
    ],
    [
      "p",
      "Duncan Robinson ofrece una respuesta directa a los 34 triples del cierre: convirtió 15 y sumó 59 puntos en tres partidos con Detroit. Está sin tier. Compararlo con la plaza de Herbert Jones supone elegir más tiro a cambio de su perfil defensivo. Una apuesta de mayor volumen es Zach LaVine: 87 puntos, nueve triples y 29/59 de campo en tres encuentros con Sacramento. Es B, por lo que requiere liberar uno de esos tres cupos; mover a Boozer tendría como costo renunciar a sus 35 rebotes y 15 asistencias fantasy. Ninguna incorporación cubre todo a la vez."
    ],
    [
      "sources",
      [
        10,
        11,
        12,
        13,
        14,
        15
      ]
    ],
    [
      "h2",
      "El cupo también tiene precio"
    ],
    [
      "p",
      "Los cuatro equipos tienen completos sus cupos S, A+, A y B. Antes de actuar, hay que comprobar disponibilidad en ESPN, liberar el tier correspondiente y revisar la franquicia NBA: solo puede haber un jugador con tier de cada una. Los jugadores sin tier están exentos de esa última restricción. Con tres adquisiciones semanales, el mejor movimiento será el que acerque una categoría sin abrir un problema mayor en otra."
    ]
  ]
},
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
  { id: 'analisis-draft-2026',
    image: {
      "src": "./assets/editorial/draft-strategy.webp",
      "small": "./assets/editorial/draft-strategy-640.webp",
      "width": 1280,
      "height": 720,
      "alt": "Ilustración de una mesa de draft con fichas de jugadores, cuatro columnas de selección y una pizarra de básquet.",
      "caption": "El draft también se decide al administrar los cupos. Ilustración editorial."
    },
    date: '2026-10-21', category: 'Previas',
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
  { id: 'ranking-pretemporada',
    image: {
      "src": "./assets/editorial/power-ranking.webp",
      "small": "./assets/editorial/power-ranking-640.webp",
      "width": 1280,
      "height": 720,
      "alt": "Ilustración de cuatro figuras de básquet en plataformas ascendentes que representan el power ranking de pretemporada.",
      "caption": "El equilibrio de los planteles bajo evaluación. Ilustración editorial."
    },
    date: '2026-10-20', category: 'Power Ranking',
    title: 'El equilibrio toma la primera posición.',
    excerpt: 'Shockers encabeza una evaluación provisional que mira las nueve categorías. El talento individual abre la discusión; la construcción del plantel la ordena.',
    teams: ['shockers', 'pilsens', 'hipopotamos', 'pelafustanes'], rankingId: 'pretemporada-2026',
    body: [
      ['p', 'Esta es una opinión editorial entre los cuatro equipos documentados. No representa una clasificación oficial, una simulación ni probabilidades de campeonato. Es la primera edición: no existen variaciones respecto de una entrega anterior.']
    ] }
]
};
