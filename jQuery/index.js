//jQuery Practice
$("h1").addClass("big-title title");
$("button").addClass("btn kode-mono-btn").css("margin", "10px");

//Switching between multiple colors
function titleAnimation() {
  $("h1").attr("class", "big-title2 title");
  setTimeout(function () {
    $("h1").attr("class", "big-title3 title");
  }, 750);
  setTimeout(function () {
    $("h1").attr("class", "big-title title");
  }, 1500);
}

// Title Animation with all Button except the clicked one become small
$("button").click(function (e) {
  titleAnimation();
  $("button").addClass("btn-small");
  $(e.currentTarget).removeClass("btn-small");
});

//Title Change Color on Hover
$("h1").hover(
  //over
  function () {
    $("h1").attr("class", "big-title2 title");
  },
  //out
  function () {
    $("h1").attr("class", "big-title title");
  }
);

//Change Title Text using KeyBoard, Enter to Apply Text and run title animation
var titleTag = "";
$(document).keydown(function (e) {
  if (e.key == "Enter") {
    $("h1").text(titleTag);
    titleTag = "";
    titleAnimation();
  } else {
    titleTag += e.key;
  }
});
