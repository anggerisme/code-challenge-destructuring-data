# Rekap materi destructuring data

Kita akan mengimplementasikan atas apa yang telah kita pelajari sejauh ini dengan _code challenge_

Berikut objek yang akan menjadi bahan _code challenge_ kita :

```javascript
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
```

### 1. Memberikan nama untuk masing-masing array yang ada di property players

```javascript
const [players1, players2] = game.players;
console.log(players1, players2);
```

> Karena `arrays` yang ada di dalam property `players` ada 2 `arrays` yang terpisah maka kita dapat memberikanya nama, sehingga kita tidak perlu lagi menggunakan indeks untuk memanggilnya

### 2. Menyimpan nilai array ke dalam variable

```javascript
const [gk, ...fieldPlayer] = players1;
console.log(gk, fieldPlayer);
```

> `gk` akan mewakili indeks/order 0 dan `...fieldPlayer` akan menampung sisanya.
