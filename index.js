var randomNumber1;
randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randoomPic1 = "images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src" , randoomPic1);


var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randoomPic2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src" , randoomPic2);

if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent = "Player 1 is WINNER";
else if ( randomNumber2 > randomNumber1)
    document.querySelector("h1").textContent = "Player 2 is WINNER";
else
    document.querySelector("h1").textContent = "DRAW";
