$(document).ready(function() {
  const o = "o";

  const x = "x";

  let turn = 0;

  $("#board li").on("click", function() {
    if ($(this).hasClass("disable")) {
      alert("Already filled");
    } else if (turn % 2 == 0) {
      $(this).text("o");

      $(this).addClass("o disable");

      turn++;
    } else if (turn % 2 == 1) {
      $(this).text("x");

      $(this).addClass("x disable");

      turn++;
    }

    if (turn == 9) {
      alert("Tie Game");

      $.fn.reset();
    }
  });

  $.fn.reset = function() {
    $("#board li").text("+");

    $("#board li").removeClass("o");

    $("#board li").removeClass("x");

    $("#board li").removeClass("disable");

    turn = 0;
  };

  $("#reset").on("click", function() {
    $.fn.reset();
  });
});
