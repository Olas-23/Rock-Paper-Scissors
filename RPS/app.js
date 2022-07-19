$(document).ready(function () {
  $("#scoreboard").hide();
  $("button").click(function () {
    $(".h1").text("MAKE YOUR MOVE");
    $("button").hide();
    $("#scoreboard").show();
    startGame();
  });
});

var userScore = 0;
var computerScore = 0;

function startGame() {

  // USER MAKES A SELECTION
  $(".icon").click(function () {
    var clickedButton = $(this).attr("id");
    $("#" + clickedButton).addClass("chosen");

    $(".icon").off("click");
    $("button").show();
    $("button").text("Play Again!");



    // COMPUTER CHOSES RANDOMLY
    var randomPick = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * 3);
    $("#" + randomPick[random]).addClass("computer-chosen");

    // LOGIC FOR THE GAME
    // DRAW
    if (clickedButton === randomPick[random]) {
      $(".h1").text("IT'S A DRAW");
    }
    // YOU WIN
    else if (clickedButton === "rock" && randomPick[random] === "scissors") {
      $(".h1").text("ROCK BEATS SCISSORS, YOU WIN");
      win();
    } else if (clickedButton === "scissors" && randomPick[random] === "paper") {
      $(".h1").text("SCISSORS BEATS PAPER, YOU WIN");
      win();
    } else if (clickedButton === "paper" && randomPick[random] === "rock") {
      $(".h1").text("PAPER BEATS ROCK, YOU WIN");
      win();
    }
    // COMPUTER WIN
    else if (randomPick[random] === "rock" && clickedButton === "scissors") {
      $(".h1").text("ROCK BEATS SCISSORS, COMPUTER WIN");
      computerWin();
    } else if (randomPick[random] === "scissors" && clickedButton === "paper") {
      $(".h1").text("SCISSORS BEATS PAPER, COMPUTER WIN");
      computerWin();
    } else if (randomPick[random] === "paper" && clickedButton === "rock") {
      $(".h1").text("PAPER BEATS ROCK, COMPUTER WIN");
      computerWin();
    }


    $("button").click(function () {
      $(".icon").on("click");
      $(".icon").css("background-color", "");
      $("#" + clickedButton).removeClass("chosen");
      $("#" + randomPick[random]).removeClass("computer-chosen");

    });
  });
}

function win() {
  userScore++;
  $("h2.yourScore").text(userScore);
}

function computerWin() {
  computerScore++;
  $("h2.computerScore").text(computerScore);
}