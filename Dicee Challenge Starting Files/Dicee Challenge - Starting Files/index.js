function diceFunction() {
  let rand1 = Math.ceil(Math.random() * 6);
  let rand2 = Math.ceil(Math.random() * 6);

  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + rand1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + rand2 + ".png");

  let h1 = document.querySelector("h1");

  if (rand1 > rand2) {
    h1.textContent = "🚩Player 1 Won!";
  } else if (rand1 == rand2) {
    h1.textContent = "Draw";
  } else {
    h1.textContent = "Player 2 Won!🚩";
  }
}

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  diceFunction();
}
