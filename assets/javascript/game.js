window.onload= function (){

var crystal = $('.crystal');
var points = 0;
var wins = 0;
var losses = 0;

var randomNum2 = Math.floor(Math.random()*120)+19;
function reset () {
 points = 0;
randomNum2 = Math.floor(Math.random()*120)+19;
$('#status').text('');
$('.win-lose').html('<h1> Wins: '+ wins + '</h1>'+'<h1> losses: '+ losses + '</h1>')
newGame();
};

function newGame () {
    for (i=0 ; i<4  ; i++){
        var randomNum = Math.floor(Math.random()*12)+1;
         crystal.eq(i).attr('value',randomNum); 
    }
        
            console.log(randomNum2);
            console.log(points);
    $('#score').text('Your score right now:');
    $('#goalNum').text('Your goal number is: ' + randomNum2);

};
function addPoints(){

    points +=parseInt($(this).attr("value"));
    $('#score').text('Your score right now: ' + points);
    $('#goalNum').text('Your goal number is: ' + randomNum2);
    console.log(points);
        if (points === randomNum2){
            wins++;
            alert('You win!');
            reset();
           
        }
        if (points > randomNum2){
            losses++;
            reset();
            alert('Haha i beat you! Lets play again.');

        }
};
crystal.on('click', addPoints);

newGame();
}
