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
      "Karl-Anthony Towns"
    ],
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
    "strength": "Gilgeous-Alexander, Tatum y Towns ofrecen recursos en anotación y porcentajes. VanVleet amplía la creación; Daniels y Kuminga aportan alternativas en robos. Reed agrega profundidad interior junto a Towns y Jackson Jr.",
    "challenge": "La llegada de VanVleet debe equilibrar creación y eficiencia de tiro. El nuevo reparto de minutos interiores tras la salida de Gafford exige seguir REB y BLK; el tiro exterior continúa siendo una categoría a mejorar.",
    "rosterUpdatedDate": "2026-10-26",
    "rosterReportId": "waivers-2026-10-26"
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
      "Anthony Edwards",
      "Domantas Sabonis"
    ],
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
    "strength": "Jokić y Sabonis permiten construir alrededor del rebote y el pase desde el juego interior. Garland añade creación y tiro exterior; Edwards, Brown y Jalen Johnson sostienen una ofensiva con varias vías de producción.",
    "challenge": "La salida de Brunson y Banchero cambia el reparto de anotación. Sabonis amplía REB y AST, pero la respuesta en BLK continúa pendiente; Garland exige especial atención a TO.",
    "rosterUpdatedDate": "2026-10-26",
    "rosterReportId": "waivers-2026-10-26"
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
      "Tyrese Haliburton"
    ],
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
    "strength": "Wembanyama y Kessler refuerzan la protección del aro y el rebote. Cunningham y Haliburton amplían la creación; White, McDaniels y Wallace ofrecen alternativas en defensa y robos. Bailey agrega una apuesta de desarrollo a la rotación.",
    "challenge": "La presencia de dos interiores con volumen cerca del aro exige vigilar FT%. La creación de Cunningham y Haliburton debe acompañarse de control de pérdidas; la anotación de la segunda línea sigue siendo importante.",
    "rosterUpdatedDate": "2026-10-26",
    "rosterReportId": "waivers-2026-10-26"
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
        "status": "partial",
        "stats": {
          "hipopotamos": {
            "fgp": 0.5,
            "ftp": 0.65625,
            "tpm": 27,
            "reb": 86,
            "ast": 50,
            "stl": 12,
            "blk": 14,
            "to": 28,
            "pts": 208
          },
          "shockers": {
            "fgp": 0.5,
            "ftp": 0.80327869,
            "tpm": 9,
            "reb": 81,
            "ast": 43,
            "stl": 5,
            "blk": 9,
            "to": 25,
            "pts": 204
          }
        },
        "updatedAt": "2026-10-28T12:09:50.957Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=1",
        "sourceSnapshot": "./assets/cortes/espn/20261028T120950.957Z.json"
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
            "fgp": 0.51020408,
            "ftp": 0.74468085,
            "tpm": 16,
            "reb": 61,
            "ast": 42,
            "stl": 10,
            "blk": 11,
            "to": 16,
            "pts": 201
          },
          "pelafustanes": {
            "fgp": 0.50326797,
            "ftp": 0.68571429,
            "tpm": 29,
            "reb": 66,
            "ast": 47,
            "stl": 15,
            "blk": 10,
            "to": 27,
            "pts": 207
          }
        },
        "updatedAt": "2026-10-28T12:09:50.957Z",
        "sourceMode": "espn",
        "source": "Totales semanales oficiales de ESPN Fantasy, obtenidos mediante su API de lectura.",
        "sourceUrl": "https://fantasy.espn.com/basketball/boxscore?leagueId=732964684&matchupPeriodId=2&seasonId=2027&teamId=3",
        "sourceSnapshot": "./assets/cortes/espn/20261028T120950.957Z.json"
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
