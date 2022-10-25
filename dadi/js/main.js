/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */



function roll_dice(){
    const dice1= Math.floor((Math.random() * 6) + 1);
    const dice2= Math.floor((Math.random() * 6) + 1);
    document.getElementById("firstDice").innerHTML= dice1
    document.getElementById("secondDice").innerHTML= dice2
    if (dice1>dice2) {
        document.getElementById("result").innerHTML="HAI VINTO!"
    }
    else if(dice1==dice2){
        document.getElementById("result").innerHTML="PAREGGIO!"
    }
    else{
        document.getElementById("result").innerHTML="HAI PERSO!"
    }
}

document.getElementById("roll_dice").onclick= function(){
    roll_dice()
}