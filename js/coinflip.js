const startButton = document.querySelector("#startbutton");
const tailsButton = document.querySelector("#tails");
const headsButton = document.querySelector("#heads");
const displayElement = document.querySelector("#display");
var winsCount = 0;
var losesCount = 0;
var coinsCount = 1;
var balance = 0;
const winsDisplay = document.querySelector("#wins");
const losesDisplay = document.querySelector("#loses");
const coinDisplay = document.querySelector("#coins");
const balanceDisplay = document.querySelector("#balance");

tailsButton.addEventListener("click", startGame);
headsButton.addEventListener("click", startGame);

function startGame(event) {
    var choice;
    if (event.target === headsButton) {
        choice = "Heads";
    } else {
        choice = "Tails";
    }
    var result = (Math.random() < 0.5) ? "Heads" : "Tails";

    if (result === choice) {
        displayElement.innerHTML = "YOU WON!";
        winsCount += 1;
        balance += 1;
        winsDisplay.innerHTML = winsCount;
        balanceDisplay.innerHTML = balance;
    } else {
        displayElement.innerHTML = "YOU LOST!";
        losesCount += 1;
        balance -= 1;
        losesDisplay.innerHTML = losesCount;
        balanceDisplay.innerHTML = balance;
    }
}