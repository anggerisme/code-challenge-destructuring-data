// ----- Challenge -----

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Gosan",
      "Muller",
      "Garrby",
      "Lewandowski",
    ],

    [
      "Marwin",
      "Nico",
      "Axel",
      "Mahmoud",
      "Manuel",
      "Marcel",
      "Emre can",
      "Carvalho",
      "Hazard",
      "Brandt",
      "Reus",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Garrby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2031",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Memberikan nama untuk masing-masing array yang ada di property players
const [players1, players2] = game.players;
console.log(players1, players2);

//2. Menyimpan suatu nilai dalam array ke dalam variable
const [gk, ...fieldPlayer] = players1;
console.log(gk, fieldPlayer);

//3. Menggabungkan kumpulan array dalam satu variable
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
