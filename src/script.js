"use strict";

// TODO - write your code here.

//randomDamage
let randomDamage = () => { return Math.floor(Math.random() * 10) + 1}

//randNum
let chooseOption = (opt1, opt2) => { 
    let randNum = Math.floor(Math.random() * 2) -1;
    return randNum === 0 ? opt2 : (randNum = 1) ? opt1 : opt2;
}

//attackPlayer
let attackPlayer = function (health) {
    return health - randomDamage();
}

//logHealth
let logHealth = (player, health) => {
    console.log(player + " health: " + health);
    return;
}

//logDeath
let logDeath = (winner, loser) => {
    console.log(winner + " defeated " + loser);
    return;
}

//isDead
let isDead = (health) => Boolean(health <= 0);

//FIGHT
function fight(player1, player2, player1Health, player2Health) {
    while(true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
        if (isDead(player2Health)) {
            logDeath(player1, player2);
            break;
            }
    } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health)) {
            logDeath(player2, player1);
            break;
            }
        }
    }
}

fight("Mitch", "Adam", 100, 100)