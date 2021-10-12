/*
GAME Rules:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his round score.
- BUT, If the player rolls a 1, all his ROUND score gets lost. After that, It's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
-The first player to reach 100 points on GLOBAL score wins the game.

Learning points:

-How to create our fundamental games variables.
-How to generate random number
-How to manipulate the DOM
-How to read from the DOM
-How to change css styles.
*/

var scores, roundScore,activePlayer, dice,gamePlaying;

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;

    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}

//roll dic button click
document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlaying)
    {

        //1. Random Number
        dice=Math.floor(Math.random()*6) +1;

        //2. Display the result
        var diceDOM=document.querySelector('.dice');
        console.log(diceDOM);
        diceDOM.style.display='block';
        diceDOM.src='dice-'+ dice + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if(dice !==1)
        {
            //Add current score
            roundScore +=dice;

            document.querySelector('#current-'+activePlayer).textContent =roundScore;

        }
        else
        {
            nextPlayer();
        }
    }


});

//hold button click
document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying)
    {
        //Add Current score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

        //Check if player won the game
        if(scores[activePlayer] >= 100)
        {
            document.querySelector('#name-'+activePlayer).textContent="Winner!";

            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

            gamePlaying=false;
        }
        else{
            //next player
            nextPlayer();
        }
    }
    

});

function nextPlayer()
{
        //now current score will be zero
        roundScore=0;

        //change the player
        activePlayer === 0 ? activePlayer=1 : activePlayer =0;
    
        //to show zero value instead of the undefined value.
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
    
        //change the panel activation and show active player indication.
        //document.querySelector('player-0-panel').classList.remove('active');
        //document.querySelector('player-1-panel').classList.add('active');
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        //diceDOM.style.display='none';
}






