var scoreDice

var current1
var current2
var scorePlayer1
var scorePlayer2
var turn1

// initialisation du jeu

document.getElementById('btn_new_game').addEventListener('click', function launchNewGame() {
    current1 = 0;
    current2 = 0;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    turn1 = true;


    document.getElementById('dice').style.display = 'none';
    document.getElementById('score_player_1').textContent = '0';
    document.getElementById('score_player_2').textContent = '0';
    document.getElementById('score_current_1').textContent = '0';
    document.getElementById('score_current_2').textContent = '0';
    document.getElementById('btn_player_2').style.display = 'none';
    document.getElementById('btn_hold').style.display = 'block';
    document.getElementById('btn_roll_dice').style.display = 'block';


})

// faire rouler le dé

var resultDice

document.getElementById('btn_roll_dice').addEventListener('click',function rollingDice() {
    
    resultDice = ((Math.floor(Math.random() * 6))+1);
    document.getElementById('dice').style.display = 'block';

if (turn1) {
    if (resultDice != 1) {
        current1 += resultDice;
        document.getElementById('score_current_1').textContent = current1;
        document.getElementById("dice").innerHTML="<img src=\"img/dice_"+resultDice+".jpg\" height=\"120px\">";
    }
    else
    {
        current1 = 0;
        document.getElementById('score_current_1').textContent = current1;
        document.getElementById("dice").innerHTML="<img src=\"img/dice_1.jpg\" height=\"120px\">";
        turn1 = false;
        document.getElementById('btn_player_1').style.display = 'none';
        document.getElementById('btn_player_2').style.display = 'block';
    }
 }
 else {
    if (resultDice != 1) {
        current2 += resultDice;
        document.getElementById('score_current_2').textContent = current2;
        document.getElementById("dice").innerHTML="<img src=\"img/dice_"+resultDice+".jpg\" height=\"120px\">";
    }
    else
    {
        current2 = 0;
        document.getElementById('score_current_2').textContent = current2;
        document.getElementById("dice").innerHTML="<img src=\"img/dice_1.jpg\" height=\"120px\">";
        turn1 = true;
        document.getElementById('btn_player_1').style.display = 'block';
        document.getElementById('btn_player_2').style.display = 'none';
    }
 }
 }
 )

// fin du game



// boutton hold

document.getElementById('btn_hold').addEventListener('click',function holdScore(){
     if (turn1) {
        scorePlayer1 += current1;
        document.getElementById('score_player_1').textContent = scorePlayer1;
        turn1 = false;
        document.getElementById('btn_player_1').style.display = 'none';
        document.getElementById('btn_player_2').style.display = 'block';
        document.getElementById('score_current_1').textContent = '0';
        

    }
    else {
        scorePlayer2 += current2;
        document.getElementById('score_player_2').textContent = scorePlayer2;
        turn1 = true;
        document.getElementById('btn_player_1').style.display = 'block';
        document.getElementById('btn_player_2').style.display = 'none';
        document.getElementById('score_current_2').textContent = '0';
    }
   if (scorePlayer1 >= 100 || scorePlayer2 >= 100) {
    document.getElementById('btn_hold').style.display = 'none';
    document.getElementById('btn_roll_dice').style.display = 'none';
   }
   {
   }
    current1 = 0;
    current2 = 0;
}
 )


