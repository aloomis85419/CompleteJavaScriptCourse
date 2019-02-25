/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
Referencing objects in the html and css documents and modifying them. DOM modifications
*/
var scores,roundScore,activePlayer,sixesSeen,gamePlaying,winScore;
gamePlaying = true;
winScore = prompt("Enter the score limit:");
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = "none";
document.querySelector('.dice2').style.display = "none";

var player1ScoreDOM = document.getElementById("score-0");
player1ScoreDOM.textContent = "0";
var player2ScoreDOM = document.getElementById("score-1");
player2ScoreDOM.textContent = "0";
var player1RoundScoreDOM = document.getElementById("current-0");
player1RoundScoreDOM.textContent = '0';
var player2RoundScoreDOM = document.getElementById("current-1");
player2RoundScoreDOM.textContent = '0';

//Second way of adding a function to handle events. Uses an anonymous function.
document.querySelector('.btn-roll').addEventListener('click',function(){
    //1. Random Number
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6)+1;
        var dicetwo = Math.floor(Math.random()*6)+1;
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';
        var diceDOMTWO = document.querySelector('.dice2');
        diceDOMTWO.style.display = 'block';
        diceDOMTWO.src = 'dice-'+dicetwo+'.png';
        //3. Update the round score if the rolled number was not a 1.
        if(dice != 1 && dicetwo != 1){
           roundScore += (dice + dicetwo);
            if(activePlayer === 1){
                player1RoundScoreDOM.textContent = roundScore;
            }
            else{
                player2RoundScoreDOM.textContent = roundScore;
            }
        }
        else{
            roundScore = 0;
            if(activePlayer === 1){
                player1RoundScoreDOM.textContent = roundScore;
                activePlayer = 0;
            }
            else{
                player2RoundScoreDOM.textContent = roundScore;
                activePlayer = 1;
            }
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    if(activePlayer === 1){
        activePlayer = 0;
        player1ScoreDOM.textContent = parseInt(player1ScoreDOM.textContent)+roundScore;
        roundScore = 0;
        player1RoundScoreDOM.textContent = roundScore;
    }
    else{
        activePlayer = 1;
        player2ScoreDOM.textContent = parseInt(player2ScoreDOM.textContent)+roundScore;
        roundScore = 0;
        player2RoundScoreDOM.textContent = roundScore;
    }
    isGameEnd();
    }
});

document.querySelector(".btn-new").addEventListener('click',function(){
    document.querySelector('.dice').style.display = "none";
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    player1ScoreDOM.textContent = "0";
    player2ScoreDOM.textContent = "0";
    player1RoundScoreDOM.textContent = '0';
    player2RoundScoreDOM.textContent = '0';
    gamePlaying = true;
    winScore = prompt("Whats the max score for this new game?");
});

//Course instructor reccomended using a state variable basically this would end the game by setting it to false and the game wont continue while it is false. Int this game this would end the game and make it so that only pressing a new game button would start a new game.
function isGameEnd(){
    if(parseInt(player1ScoreDOM.textContent) >= winScore){
        document.querySelector('#name-0').textContent = "Player 1 wins!";
        alert("Player 1 wins!");
        gamePlaying = false;
    }
    else if(parseInt(player2ScoreDOM.textContent) >= winScore){
        document.querySelector('#name-1').textContent = "Player 2 wins!";
        alert("Player 2 wins!");
        gamePlaying = false;
    }
}


/*first way of adding a function to handle events
function btn(){

}

document.querySelector('.btn-roll').addEventListener('click',btn)
*/

//setting a value in a css class using javascript that is referenced by the dice element in the html
//document.querySelector('.dice').style.display = 'none';

///gets the text content of the html element with id="current-0"
//document.querySelector("#current-0").textContent;

//Inserts italicized dice value
//document.querySelector("#current-"+activePlayer).innerHTML = "<em>"+dice+"</em>";

//document.querySelector("#current-"+activePlayer).textContent = dice;

//var x = document.querySelector("#score-0").textContent = dice;

