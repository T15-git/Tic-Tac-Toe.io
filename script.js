var save = []
var turn = 1;

function change(i){
    if (turn == 1){
        document.getElementById(i).innerHTML = 'X';
        turn++;
        save[i]
        document.getElementById('display').innerHTML = 'Player 2 Turn';
        return;
    }

    document.getElementById(i).innerHTML = 'O';
    turn--;
    document.getElementById('display').innerHTML = 'Player 1 Turn';
}