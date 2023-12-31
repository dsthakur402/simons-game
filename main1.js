gameSeq = [];
userSeq = [];

let btns = ["yellow", "red", "green", "blue"];

let level = 0;
let started = false;

let h4 = document.querySelector("h4");

document.addEventListener("keypress", function() {
    if( started == false){
        started = true;
        levelUp();
    }   
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function (){
        btn.classList.remove("gameFlash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h4.innerText = `level: ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randColor = btns[random];
    let randBtn = document.querySelector(`.${randColor}`);

    gameFlash(randBtn);
    gameSeq.push(randColor);

}

function reset(){
    started=false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}

function checkAns(idx){
    if( userSeq[idx] === gameSeq[idx] ){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h4.innerHTML = `Game Over! your score is ${level} <br> press any key to replay`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}