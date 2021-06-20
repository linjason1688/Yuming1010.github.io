let count=1;
let intervalId;

var btn1 = document.getElementById("btn1");
btn1.addEventListener('click',function(event){
    container.innerHTML="";
    let pokemons='';
    for(let i=1; i<=151; i++){
        let fileName = i.toString().padStart(3,'0');
        let pathfile = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
        let pokemonImg = `<img src='${pathfile}'>`;
        pokemons += pokemonImg;
        count++;
    }
    container.innerHTML = pokemons;
});

var btn2 = document.getElementById("btn2");
btn2.addEventListener('click', function(event){
    container.innerHTML = "";
    count = 1;
    clearInterval(IntervalId);
    btn5.disabled = false;
    btn6.disabled = false;
});

var btn3 = document.getElementById("btn3");
btn3.addEventListener('click', function(event){
    if(count > 151) { return; }
    else {
        let fileName = count.toString().padStart(3,'0');
        let pathfile = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
        let img = document.createElement('img');
        img.setAttribute('src', pathfile);
        container.appendChild(img);
        count++;
    }
});

var btn4 = document.getElementById("btn4");
btn4.addEventListener('click', function(event){
    if(container.lastChild){
        container.removeChild(container.lastChild);
        count--;
    }
});

var btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function(){
    btn5.disabled = true;
    btn6.disabled = false;
    IntervalId = setInterval(function(){
        if(count > 151) { return; }
        else {
            let fileName = count.toString().padStart(3,'0');
            let pathfile = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png`;
            let img = document.createElement('img');
            img.setAttribute('src', pathfile);
            container.appendChild(img);
            count++;
        }
    }, 500 );
});

var btn6 = document.getElementById('btn6');
btn6.addEventListener('click', function(){
    btn5.disabled = false;
    btn6.disabled = true;
    clearInterval(IntervalId);
});