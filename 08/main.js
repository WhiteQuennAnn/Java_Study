// console.log("kuuuuuuuuuuuuuuuu");

const MIN = 0;
const MAX = 100;
const ATTEMPS_NUMBER = 10;

const RANDOM_NUMBER = getRandomNumber;
const PLAYER_NAME = getPlayerName;

function getRandomNumber() {
    const randomNumber = Math.round(Math.random() * 100);
    return randomNumbe;
}

function getPlayerName() {
    const playerName = prompt("How your name?", "");
    return playerName;
}

console.log(RANDOM_NUMBER);
console.log(PLAYER_NAME);

const game = (min, max, attemps, randomNumber, playerName) => {
alert (`Hey ${playerName}!
Zagadal chislo ot ${min} do ${max}
nado ugadat c ${attemps}`);
}
game (MIN, MAX, ATTEMPS_NUMBER, RANDOM_NUMBER, PLAYER_NAME)