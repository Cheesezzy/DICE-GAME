var randomNumber1 = Math.floor(Math.random() * 6) + 1; // m.r generate random numbers from 0 - 0.9999... m.f makes it a whole number

var randomDiceImage = "dice" + randomNumber1 + ".png";  // dice1 - dice6 .png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1 - images/dice6 .png

var image1 = document.querySelectorAll("img")[0]; // this select the img element in the HTML

image1.setAttribute("src", randomImageSource); //this changes the src in the HTML


// var randomNumber2 = Math.Floor(Math.Random() * 6) + 1;
//
// var randomImageSource2 =  "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // m.r generate random numbers from 0 - 0.9999... m.f makes it a whole number

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


// if player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 WINS"
}
else  {
  document.querySelector("h1").innerHTML = "DRAW !"
}
