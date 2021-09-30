
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


let [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allplayer = [...player1, ...player2];
console.log(allplayer);

const playersFinal = [...player1, 'thiago', 'coutinho', 'perisic'];
console.log(playersFinal);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} Goals were scored`);
}

printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!');

//challange 2:

for (const [i, element] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${element}`);
}

const value = Object.values(game.odds);
console.log(value);
let sum = 0;
for (const [i, el] of value) {

    sum += el;
    console.log(``);
}
const average = sum / value.length;
console.log(`Average of Odds = ${average}`);

