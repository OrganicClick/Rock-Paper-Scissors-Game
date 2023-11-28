var wins = 0;
var ties = 0;
var losses =0;

var options = ["R", "P", "S"]

var playGame = function () {
    var userInput = prompt("Please enter 'R', 'P', or 'S' to play.")
}


let youWin = alert("You win!")

let youTied = alert("You Tied!")

let youLose = alert("You Lose!")

function enemyChoice() {
    var enemyArray = [
        "R",
        "P",
        "S",
];
    var randomItem = enemyArray[Math.floor(Math.random()*enemyArray.length)]
    var decision = enemyArray[randomItem]
    return decision;
}

playGame();