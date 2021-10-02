
//coading challange 1

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


// let [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// const allplayer = [...player1, ...player2];
// console.log(allplayer);

// const playersFinal = [...player1, 'thiago', 'coutinho', 'perisic'];
// console.log(playersFinal);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//     console.log(players);
//     console.log(`${players.length} Goals were scored`);
// }

// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win!');
// team1 > team2 && console.log('Team 2 is more likely to win!');

//challange 2:

// for (const [i, element] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${element}`);
// }

// const value = Object.values(game.odds);
// console.log(value);

// let sum = 0;
// for (const el of value) sum += el;
// const average = sum / value.length;
// console.log(`Average of Odds = ${average}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory of ${game[team]}`;
//     console.log(`odd of ${teamStr}:${odd}`);
// }


//challange 3:

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


const events = [...new Set(gameEvents.values())];

console.log(events);

gameEvents.delete(64);

console.log(`A event happened on average every ${90 / gameEvents.size} Minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`A event happened on average every ${time / gameEvents.size} Minutes`);
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'first' : 'second';
    console.log(`[${half} half] ${min} : ${event}`);
}
//challange 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;

    const entry = text.split('\n');
    let newEntries = [];
    for (const [i,e] of entry.entries()) {
        const [first, second] = e.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

        console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);

    }


});
