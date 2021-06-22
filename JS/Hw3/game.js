let answer=0;
let min=0;
let max=100;
let guess_number = document.getElementById("guess_number");

const  no = document.getElementById("X");
const yes = document.getElementById("V");
const status = document.getElementById("status");
const hint = document.getElementById("hint");

const keyin_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "X", 0, "V"];
let keyin_button = document.getElementById("keyin_button");

const btn_start = document.getElementById("start");
const btn_restart = document.getElementById("restart");

window.onload = go();

function go(){
    btn_restart.disabled = true;
}

start.addEventListener('click', function(){
    btn_start.disabled=true;
    btn_restart.disabled = false;
    min=0;
    max=100;
    answer = 0;
    while(answer <= 0){
        answer = Math.floor(Math.random()*100);
    }
    keyin_array.forEach(function(item){
        let button = document.getElementById(item);
        button.disabled = false;
    });
    guess_number.value = "";
    status.innerText="0 < input < 100";
    hint.innerHTML="Game_Start";

});

restart.addEventListener('click', function(){
    btn_start.disabled= false;
    btn_restart.disabled = true;
    keyin_array.forEach(function(item){
        let button = document.getElementById(item);
        button.disabled = true;
    });
    guess_number.value = "";
    status.innerText="0 < input < 100";
    hint.innerHTML="新局:請按(遊戲開始)";
});

for(let i=0;i<10;i++){
    let button = document.getElementById(i);
    button.addEventListener('click', function(){
        if(guess_number.value.length<2){
            guess_number.value += i;
        }
    });
}

no.addEventListener('click', function(){
    guess_number.value = "";
});

yes.addEventListener('click', function(){
    let input = Number(guess_number.value);

    if(input == "") {
        hint.innerHTML="未輸入任何數字";
        guess_number.value = "";
    }

    else if(input<= min || input>=max){
        hint.innerHTML = "猜" + input + ".. 超出範圍了~";
        guess_number.value = "";
    }

    else if(input == answer){
        status.innerHTML = min + " < (" + input + ") < " + max;
        hint.innerHTML = "猜" + input + ".. 恭喜過關!";
        guess_number.value = "";
    }

    else if( input > answer){
        max = input;
        status.innerHTML = min + " < input < " + max;
        hint.innerHTML = "猜" + input + ".. 太大了~";
        guess_number.value = "";
    }

    else if( input < answer ) {
        min = input;
        status.innerHTML = min + " < input < " + max;
        hint.innerHTML = "猜" + input + ".. 太小了~";
        guess_number.value = "";
    }
});


