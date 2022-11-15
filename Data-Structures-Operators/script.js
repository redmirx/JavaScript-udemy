'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding challange 1

// 1
const [players1, players2] = game.players;

// console.log(players1, players2);

// 2

const [gk, ...fieldPlayers] = players1;

// console.log(fieldPlayers);

// 3

const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// 4

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peristic'];

// console.log(players1Final);

// 5

const { team1, x: draw, team2 } = game.odds;

// console.log(team1, draw, team2);

// 6

// const printGoals = (...players) => {
//   console.log(`${players.length} goal were scored`);
// };

// printGoals('Davies', 'Muller', 'Kimmich', 'Lewandowski');
// printGoals('Davies', 'Lewandowski');
// printGoals(...game.scored);

// 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// Coding challange 2

// 1

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

// 2

// let average = 0;
// for (const odd of Object.values(game.odds)) {
//   average += odd;
// }
// average /= Object.values(game.odds).length;

// console.log(average);

// 3

// for (const [team, score] of Object.entries(game.odds)) {
//   console.log(
//     `\tOdd of${game[team] ? ' victory' : ''} ${game[team] || 'draw'} ${score}`
//   );
// }

// 4 Bonus

// const scores = {};

// for (const [score, player] of game.scored.entries()) {
//   scores[player] ? (scores[player] = 2) : (scores[player] = 1);
// }

// console.log(scores);

// Coding challange 3

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1

const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2

gameEvents.delete(64);
// console.log(gameEvents);

//3

const gameTime = 90;

// console.log(
//   `An event happened, on average, every ${gameTime / gameEvents.size} minutes`
// );

// 4

// for (const [time, event] of gameEvents.entries()) {
//   console.log(
//     `${
//       time > 0 && time < 46
//         ? '[FIRST HALF]'
//         : time > 45 && time <= 92
//         ? '[SECOND HALF]'
//         : null
//     } ${time}: ${event}`
//   );
// }
