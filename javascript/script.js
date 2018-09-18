// //nothing runs until html finishes loaded
$(document).ready(function () {
    console.log("this blows");
    //     //event: user presses start button
    var integer = 61;
    var intervalId

    $(".questions").toggle();
    $(".timer").toggle();

    $("#button").on("click", beginGame);

    function beginGame() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#button").toggle();
        $(".timer").toggle();
        $(".questions").toggle();
    }

    function decrement() {
        integer--;
        $("#timer").html(integer);
        if (integer === 0) {
            stop();
            alert("times up bitch")
        };
    }

    function stop() {
        clearInterval(intervalId);
    }

    //when start button is pressed, question and answer choices load, start button disappears, and timer begins counting down
    //the user selects their answer (need to take data from user choice and compare to correct answer)
    //if answer is correct, the right answer page loads. after 5 seconds, it automatically loads the next question
    //if answer is incorrect, the wrong answer page loads. after 5 seconds, it automatically loads the next question
    //at the end of the questions, the end page will load. it contains # of correct answers and # of incorrect answers.
    //has a start over button that begins the quiz over, but does not reload the DOM

})
