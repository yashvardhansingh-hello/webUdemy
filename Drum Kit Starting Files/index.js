var wordSoundFile = {
  w: "./sounds/crash.mp3",
  a: "./sounds/kick-bass.mp3",
  s: "./sounds/snare.mp3",
  d: "./sounds/tom-1.mp3",
  j: "./sounds/tom-2.mp3",
  k: "./sounds/tom-3.mp3",
  l: "./sounds/tom-4.mp3",
};

//Sound through Keyboard Press
document.addEventListener("keydown", function (event) {
  if (event.key in wordSoundFile) {
    makeSound(event.key);
    buttonAnimation(event.key);
  }
});

//Sound through Mouse Click
for (let index = 0; index < 7; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      makeSound(this.innerHTML);
      buttonAnimation(this.innerHTML);
    });
}

//Sound Generator
function makeSound(key) {
  let audio = new Audio(wordSoundFile[key]);
  audio.play();
}

//Button Animation
function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 400);
}
