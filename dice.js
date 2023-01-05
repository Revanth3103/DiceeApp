function rollDice(){
   let randomizer1 = Math.floor(Math.random()*6)+1
   let randomizer2 = Math.floor(Math.random()*6)+1
   document.querySelector(".img1").src = "/Dice Challenge/images/dice" + randomizer1 + ".png"
   document.querySelector(".img2").src = "/Dice Challenge/images/dice" + randomizer2 + ".png"
   determineWinner(randomizer1, randomizer2)
}

function determineWinner(number1, number2){
    if (number1 > number2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!"
    } else if (number1 == number2){
        document.querySelector("h1").innerHTML = "Draw!"
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
    }
}
