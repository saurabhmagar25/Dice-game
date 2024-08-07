var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var diceimage1="images/dice"+randomNumber1+".png";
var diceimage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceimage1)
document.querySelectorAll("img")[2].setAttribute("src",diceimage2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is winner";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 is winner";

}
else{
    document.querySelector("h1").innerHTML="it's a tie";
}