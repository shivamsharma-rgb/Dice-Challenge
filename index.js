let randomNumber1=Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src","dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src","dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🏴‍☠️ Player 1 Wins!";  
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins! 🏴‍☠️";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}
