let gameSeq = [];
let userSeq = [];
let colors = ["red", "green", "yellow", "blur"];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("pressed");
        started = true;

        levelUp();

    }
});


let levelUp = function(){
    level++;
    h3.innerText = `Level ${level}`;

    userSeq = [];

    let randIdx = Math.floor(Math.random() * 3);
    let randClass = colors[randIdx];
    let btn = document.querySelector(`.${randClass}`);

    setTimeout(function(){
        btnFlash(btn);
    }, 400);

    gameSeq.push(randClass);
    console.log(gameSeq);

    // h3.innerText = `Level ${level}`;
}

let btnFlash = function(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}

let userFlash = function(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 500);
}


const allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener('click', btnPressed);
}


function btnPressed(){
    console.log(this);
    userFlash(this);

    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

function checkAns(idx){

    if (userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,700);
        }
    }else{
        h3.innerHTML = `GAME OVER, your score was <b>${level}</b> <br>
         press any key to restart`;

         document.querySelector('body').style.backgroundColor = "red";
         setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
         }, 150);
        reset();
    }

}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}