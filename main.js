let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "red", "blue"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

document.addEventListener("keypress" , function () {
    if (started == false) {
        // console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    },250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}

function levelup() {
    userSeq = [];
    level++;
    // console.log("level :" + level)
    h4.innerText = `Level ${level}`;


    let randIdx = Math.floor( Math.random() * 4 );
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log("game sequence:", gameSeq);
    gameFlash(randBtn);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h4.innerHTML = `Game Over! <b>your score was ${level}.</b> </br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);  
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log("user sequence:",userSeq)
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click",btnPress);
}