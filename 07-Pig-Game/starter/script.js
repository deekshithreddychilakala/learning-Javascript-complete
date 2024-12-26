'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let activePlayer = 0;
let currentScore = 0;

const scores = [0, 0];
let playing = true;

const initializeGame = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    playing = true;
    diceEl.classList.add('hidden');
    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active', 'player--winner');
    player0El.classList.remove('player--winner');
};


const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // document.getElementById(`player--${activePlayer}`).classList.remove()
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// rolling the dice
btnRollEl.addEventListener('click', function () {
    if (playing) {
        // Generate a random dice roll from 1 to 6.
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display the dice.
        const diceImage = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');
        diceEl['src'] = diceImage;

        // check for rolled 1
        if (dice !== 1) {
            // Add the dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch to next player.
            switchPlayer();
        }
    }
});


btnHoldEl.addEventListener('click', function () {
    if (playing) {
        // add current score to active player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // (`score${activePlayer}El`).textContent = scores[activePlayer];

        // check if score >= 100
        if (scores[activePlayer] >= 100) {
            // finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            diceEl.classList.add('hidden');
        } else {
            // switch player
            switchPlayer();
        }
    }
});

btnNewEl.addEventListener('click', initializeGame);

initializeGame();