// //nothing runs until html finishes loaded
$(document).ready(function () {
    console.log("this blows");
    //     //event: user presses start button
    var integer = 60;
    var intervalId;

    $(".game").toggle();
    $(".timer").toggle();
    $(".timeupPage").toggle();
    $(".submittedPage").toggle();

    $("#button").on("click", beginGame);
    $("#button2").on("click", stop);
    $("#button3").on("click", beginGame);

    function beginGame() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#button").toggle();
        $(".timer").toggle();
        $(".game").toggle();
    }

    function decrement() {
        integer--;
        $("#timer").html(integer);
        if (integer === 0) {
            stop();
        };
    }

    function stop() {
        clearInterval(intervalId);
        $(".game").toggle();
        $(".timeupPage").toggle();
    }

    var correct = 0;
    var wrong = 0;
    var blank = 0;


    console.log(correct);

    var userChoice = $("input[id=answeroption]:checked")
    var correctAnswer = $("input[value=correct]:checked")
    var wrongAnswer = $("input[value=wrong]:checked")

    if (userChoice = correctAnswer) {
        correct++;
        console.log(correct);
    }
    else if (userChoice = wrongAnswer){
        wrong++;
        console.log(wrong);
    }

    $("#right").text(correct)
    $("#wrong").text(wrong)
    $("#blank").text(blank)


    //when start button is pressed, question and answer choices load, start button disappears, and timer begins counting down
    //the user selects their answer (need to take data from user choice and compare to correct answer)
    //if answer is correct, the right answer page loads. after 5 seconds, it automatically loads the next question
    //if answer is incorrect, the wrong answer page loads. after 5 seconds, it automatically loads the next question
    //at the end of the questions, the end page will load. it contains # of correct answers and # of incorrect answers.
    //has a start over button that begins the quiz over, but does not reload the DOM

})
