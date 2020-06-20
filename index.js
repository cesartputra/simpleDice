

function diceGenerator(){
    var player1 =  Math.floor(Math.random() * 6) + 1;
    var randomDiceImgPlayer1 = "images/dice" + player1 +".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImgPlayer1);

    var player2 =  Math.floor(Math.random() * 6) + 1;
    var randomDiceImgPlayer2 = "images/dice" + player2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomDiceImgPlayer2);

    checkWin(player1, player2);
}

function checkWin(player1, player2){
    if(player1 > player2){
        document.querySelector("h1").textContent = "🎲Player 1 Wins!";
    }
    else if(player1 < player2){
        document.querySelector("h1").textContent = "Player 2 Wins!🎲";
    }
    else if(player1 === player2){
        document.querySelector("h1").textContent = "Draw!";
    }
}

diceGenerator();

