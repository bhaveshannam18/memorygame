


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPatterns = [];




var level = 0;

var started = false;

$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



// $(".btn").click(function(event){
//
//   nextSequence();
// });


//console.log(gamePattern);



$(".btn").click(function(event){

  var userChosenColur = this.id;
  userClickedPatterns.push(userChosenColur);
  playSound(userChosenColur);
  animatePress(userChosenColur);
  checkAnswer(userClickedPatterns.length-1);
});




function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPatterns[currentLevel]) {

      console.log("success");

      if (userClickedPatterns.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.


      startOver();
    }

}


function nextSequence() {
   userClickedPatterns = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.




  playSound(randomChosenColour);
  console.log(gamePattern);

}

// function checkAnswer(){
//   for(var i=0;i<=gamePattern.length-1;i++)
//   {
//     if(gamePattern[i] = userClickedPatterns[i]){
//       console.log("success");
//       userClickedPatterns = [];
//       setTimeout(function(){
//         nextSequence();
//       },1000);
//     } else{
//       console.log("wrong");
//     }
//   }
// }


function startOver(){
  level = 0;



 gamePattern = [];

  started = false;
}

function playSound(name){
    // $(document).on("click keypress",function(){
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
    // })

}


function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
}, 100);

}
