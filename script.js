let userInput = prompt("Please enter 'R', 'P', or 'S' to play.")

let youWin = alert("You win!")

let youTied = alert("You Tied!")

let youLose = alert("You Lose!")
    

var enemyArray = [
    "R",
    "P",
    "S",
];

var randomItem = 
enemyArray[Math.floor(Math.random()*enemyArray.length)]

