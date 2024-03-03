const colors = ["green", "yellow", "blue", "red"];
var sequence = [];
var userSequence = [];
var level = 0;
var started = false;

function nextSequence() {
  level++;
  $("h1").text("Level " + level);
  randomColor = colors[Math.floor(Math.random() * 4)];
  //flash Animation
  $("#" + randomColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomColor);
  sequence.push(randomColor);
}

function checkAnswer(currentLevel) {
  if (userSequence[currentLevel] == sequence[currentLevel]) {
    if (userSequence.length == sequence.length) {
      setTimeout(nextSequence(), 4000);
      userSequence = [];
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
    $("h1").text("Game Over! Press Any key to Restart");
  }
}

function startOver() {
  level = 0;
  sequence = [];
  userSequence = [];
  started = false;
}

$(".btn").click(function () {
  btnId = $(this).attr("id");
  userSequence.push(btnId);
  checkAnswer(userSequence.length - 1);
  playSound(btnId);
  animatePress(btnId);
});

$(document).keydown(function () {
  if (!started) {
    $("h1").text("Level " + level);
    started = true;
    nextSequence();
  }
});

function playSound(name) {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(name) {
  $("." + name).addClass("pressed");
  setTimeout(() => {
    $("." + name).removeClass("pressed");
  }, 200);
}
