//on page load

$("#button").on("click", function() {
    $("#button").toggle();
    $("#content").toggle();
    startTimer();

});


//Timer function

var timer;
var timeRemaining = 30;

function startTimer() {
    timer= setInterval(count, 1000);
    $("#time").text(timeRemaining);
}

function stopTimer() {
    clearInterval(timer);
}

function count() {
    timeRemaining--;
    $("#time").text(timeRemaining);
    if (timeRemaining === 0) {
        gameOver();
    }
}



var correct = 0;
var incorrect = 0;
var unanswered = 0;

function gameOver() {
    stopTimer();
    $("#content").toggle();
    $("#results").html("Time's up!");
    if ($("input[type=radio][name=q1]:checked").val() === "t" ) {
        correct ++;
    } 

    else if ($("input[type=radio][name=q1]:checked").val() === "f" ) {
        incorrect ++;
    } 

    else {
        unanswered++;
    }

    if ($("input[type=radio][name=q2]:checked").val() === "t" ) {
        correct ++;
    } 

    else if ($("input[type=radio][name=q2]:checked").val() === "f" ) {
        incorrect ++;
    } 

    else {
        unanswered++;
    }

        if ($("input[type=radio][name=q3]:checked").val() === "t" ) {
        correct ++;
    } 

    else if ($("input[type=radio][name=q3]:checked").val() === "f" ) {
        incorrect ++;
    } 

    else {
        unanswered++;
    }
    //If answer answer to q1 is correct, add 1 to correct. repeat x3. 
    //If answer to q1 is incorrect, add 1 to incorrect. repeat x3.
    //If answer t q1 is blank, add 1 to unanswered. repeat x3.
    $("#results").append("<br>" + "Correct: " + correct);
    $("#results").append("<br>" + "Incorrect: " + incorrect);
    $("#results").append("<br>" + "Unanswered: " + unanswered);
}
 
$("#doneButton").on("click", function() {
    $("input[type=radio][name=q1]:checked").val();
    $("input[type=radio][name=q2]:checked").val();
    $("input[type=radio][name=q3]:checked").val();
    gameOver ();

});





