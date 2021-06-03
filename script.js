var save = [0,1,2,3,4,5,6,7,8,9]
var score = [0,0]
turn = 1;
function change(i){
    if(save[i]!= i ) return;

    if (turn == 1){
        document.getElementById(i).innerHTML = 'X';
        save[i]='X';
        winner(turn)
        return;
    }

    document.getElementById(i).innerHTML = 'O';
    save[i]='O';
    winner(turn)
}

function winner(win){
    if(save[1]==save[2] && save[2]==save[3] || save[4]==save[5] && save[5]==save[6] ||
       save[7]==save[8] && save[8]==save[9] || save[1]==save[4] && save[4]==save[7] ||
       save[2]==save[5] && save[5]==save[8] || save[3]==save[6] && save[6]==save[9] ||
       save[1]==save[5] && save[5]==save[9] || save[3]==save[5] && save[5]==save[7]){

        document.getElementById('display').innerHTML = '! Player ' + win + ' Is Winner !';
        Disable(0,win);
        return;
    }
    if(save[1]!=1 && save[2]!=2 && save[3]!=3 && save[4]!=4 && save[5]!=5 && save[6]!=6
        && save[7]!=7 && save[8]!=8 && save[9]!=9){

        document.getElementById('display').innerHTML = '! DRAW !';
        Disable(1,win);
        return;
    }
Pturn(win);
}

function reset(choice){
    for(let i=9;i!=0;i--){
        document.getElementById(i).disabled = false;
        document.getElementById(i).innerHTML = '.';
        save[i]=i;
    }

    if(choice==0){
        document.getElementById('next').disabled = true;
        document.getElementById('next').style.backgroundColor = 'white';
        Pturn(turn);
    }

    if(choice == 1){
        document.getElementById('score').innerHTML = 'Player1<0> Player2<0>';
        score = [0,0];
    }
}

function Pturn(player){
    if(player==1){
        turn=2;
        document.getElementById('display').innerHTML = 'Player 2 Turn';
        return;
    }
    turn=1
    document.getElementById('display').innerHTML = 'Player 1 Turn';
}

function Disable(choice,win){
    for(let i=1;i<10;i++){
        document.getElementById(i).disabled = true;
    }

    document.getElementById('next').disabled = false;
    document.getElementById('next').style.backgroundColor = 'red';

    if(choice==0){
        if(win == 1) return document.getElementById('score').innerHTML = 'Player1<'+ ++score[0] +'> Player2<'+ score[1] +'>';
        return document.getElementById('score').innerHTML = 'Player1<'+ score[0] +'> Player2<'+ ++score[1] +'>';
    }
}