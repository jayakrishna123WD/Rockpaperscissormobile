//setup
const a = document.getElementById('sgame');
const nextpage = document.getElementById('nextpage1');
const nextpage2 = document.getElementById('nextpage2');
const changeopponent = document.getElementById('change');
const game = document.getElementById('game');
const rock = document.getElementById('rock');
const paper = document.getElementById('pap');
const scissors = document.getElementById('scis');
const restart = document.getElementById('restart');
const endgame = document.getElementById('endgame');
const winner = document.getElementById('winnername');
const opponame = document.getElementById('opponentname');
const opposcore = document.getElementById('opponenetscore');
const yourname = document.getElementById('yourname');
const ygamescore = document.getElementById('yourgamescore');
const pl1img = document.getElementById('fplayer1');
const pl2img = document.getElementById('fplayer2');
const winnerimg = document.getElementById('wins');
const oponentemoji = document.getElementById('oppemo');
const youremoji = document.getElementById('youremo');
const outtext = document.getElementById('outcome');

//screens
const homepage = document.getElementById('homepage');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const description = document.getElementById('description');
const gamescreen = document.getElementById('gamescreen');
const resultpage = document.getElementById('resultpage');

player1.style.display = 'none';
player2.style.display = 'none';
description.style.display = 'none';
gamescreen.style.display = 'none';
resultpage.style.display = 'none';
nextpage.style.display = 'none';
nextpage2.style.display = 'none';

//players name
const ch = document.getElementById('chiru');
const aa = document.getElementById('alluarjun');
const bk = document.getElementById('balakrishna');
const ng = document.getElementById('nagarjuna');
const nn = document.getElementById('nani');
const nt = document.getElementById('ntr');
const pk = document.getElementById('pawankalyan');
const vk = document.getElementById('venkatesh');

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".a").classList.add("loaded");
    }, 1500)
});

startgame.addEventListener('click', () => {
    homepage.style.display = 'none';
    player1.style.display = 'unset';
});

ch.addEventListener('click', () => {
    ch.classList = 'common';
    aa.classList.remove('common');
    bk.classList.remove('common');
    ng.classList.remove('common');
    pl1img.src = ch.src;
    yourname.innerText = 'Chiranjeevi';
    nextpage.style.display = 'block';
});

aa.addEventListener('click', () => {
    aa.classList = 'common';
    ch.classList.remove('common');
    bk.classList.remove('common');
    ng.classList.remove('common');
    pl1img.src = aa.src;
    yourname.innerText = 'AlluArjun';
    nextpage.style.display = 'block';
});

bk.addEventListener('click', () => {
    bk.classList = 'common';
    aa.classList.remove('common');
    ch.classList.remove('common');
    ng.classList.remove('common');
    pl1img.src = bk.src;
    yourname.innerText = 'BalaKrishna';
    nextpage.style.display = 'block';
});

ng.addEventListener('click', () => {
    ng.classList = 'common';
    aa.classList.remove('common');
    ch.classList.remove('common');
    bk.classList.remove('common');
    pl1img.src = ng.src;
    yourname.innerText = 'Nagarjuna';
    nextpage.style.display = 'block';
});

nn.addEventListener('click', () => {
    nn.classList = 'common';
    nt.classList.remove('common');
    pk.classList.remove('common');
    vk.classList.remove('common');
    pl2img.src = nn.src;
    opponame.innerText = 'Nani';
    nextpage2.style.display = 'block';
});

nt.addEventListener('click', () => {
    nt.classList = 'common';
    nn.classList.remove('common');
    pk.classList.remove('common');
    vk.classList.remove('common');
    pl2img.src = nt.src;
    opponame.innerText = 'NTR';
    nextpage2.style.display = 'block';
});

pk.addEventListener('click', () => {
    pk.classList = 'common';
    nn.classList.remove('common');
    nt.classList.remove('common');
    vk.classList.remove('common');
    pl2img.src = pk.src;
    opponame.innerText = 'PawanKalyan';
    nextpage2.style.display = 'block';
});

vk.addEventListener('click', () => {
    vk.classList = 'common';
    nn.classList.remove('common');
    nt.classList.remove('common');
    pk.classList.remove('common');
    pl2img.src = vk.src;
    opponame.innerText = 'Venkatesh';
    nextpage2.style.display = 'block';
});

nextpage.addEventListener('click', () => {
    player1.style.display = 'none';
    player2.style.display = 'unset';
});

nextpage2.addEventListener('click', () => {
    player2.style.display = 'none';
    description.style.display = 'unset';
});

changeopponent.addEventListener('click', () => {
    description.style.display = 'none';
    player2.style.display = 'unset';
});

game.addEventListener('click', () => {
    description.style.display = 'none'; 
    gamescreen.style.display = 'unset';
});

var player1score = 0;
var player2score = 0;
var count = 0;

rps = ['&#129704;', '&#128220;', '&#9986;'];
rock.addEventListener('click', () => {
    youremoji.innerHTML = rps[0];
    var option = rps[Math.floor(Math.random()*rps.length)]
    oponentemoji.innerHTML = option;
    if(option == rps[2]){
        player1score++;
    }
    else if(option == rps[1]){
        player2score++;
    }
    count++;
    console.log(count);
    ygamescore.innerText = player1score;
    opposcore.innerText = player2score;
    check(count);
})
paper.addEventListener('click', () => {
    youremoji.innerHTML = rps[1];
    var option = rps[Math.floor(Math.random()*rps.length)];
    oponentemoji.innerHTML = option;
    if(option == rps[0]){
        player1score++;
    }
    else if(option == rps[2]){
        player2score++;
    }
    count++;
    console.log(count);
    ygamescore.innerText = player1score;
    opposcore.innerText = player2score;
    check(count);
})
scissors.addEventListener('click', () => {
    youremoji.innerHTML = rps[2];
    var option = rps[Math.floor(Math.random()*rps.length)];
    oponentemoji.innerHTML = option;
    if(option == rps[1]){
        player1score++;
    }
    else if(option == rps[0]){
        player2score++;
    }
    count++;
    console.log(count);
    ygamescore.innerText = player1score;
    opposcore.innerText = player2score;
    check(count);
})

let players1 = [ch.src, aa.src, bk.src, ng.src];
let players2 = [nn.src, nt.src, pk.src, vk.src];
function check(num){
    if(num == 5){
        gamescreen.style.display = 'none';
        resultpage.style.display = 'block';
        if(player1score > player2score){
            winnerimg.style.display = 'block';
            winnerimg.src = pl1img.src;
            for(let a=0; a<players1.length; a++){
                if(winnerimg.src == players1[a] && a==0){
                    outtext.innerText = 'chiranjeevi wins the Game';
                }
                else if(winnerimg.src == players1[a] && a==1){
                    outtext.innerText = 'AlluArjun wins the Game';
                }
                else if(winnerimg.src == players1[a] && a==2){
                    outtext.innerText = 'Balakrishna wins the Game';
                }
                else if(winnerimg.src == players1[a] && a==3){
                    outtext.innerText = 'nagarjuna wins the Game';
                }
            }
        }
        else if(player1score == player2score){
            outtext.innerText = "Match Tie";
            winnerimg.style.display = 'none';
        }
        else if(player2score > player1score){
            winnerimg.style.display = 'block';
            winnerimg.src = pl2img.src;

            for(let a=0; a<players2.length; a++){
                if(winnerimg.src == players2[a] && a==0){
                    outtext.innerText = 'Nani wins the Game';
                }
                else if(winnerimg.src == players2[a] && a==1){
                    outtext.innerText = 'NTR wins the Game';
                }
                else if(winnerimg.src == players2[a] && a==2){
                    outtext.innerText = 'PawanKalyan wins the Game';
                }
                else if(winnerimg.src == players2[a] && a==3){
                    outtext.innerText = 'Venkatesh wins the Game';
                }
            }
        }
    }
}

restart.addEventListener('click', () => {
    gamescreen.style.display = 'block';
    resultpage.style.display = 'none';
    count = 0;
    player1score = 0;
    player2score = 0;
    ygamescore.innerText = 0;
    opposcore.innerText = 0;  
})

endgame.addEventListener('click', () => {
    resultpage.style.display = 'none';
    homepage.style.display = 'block';
    count = 0;
    player1score = 0;
    player2score = 0;
    ygamescore.innerText = 0;
    opposcore.innerText = 0;
})