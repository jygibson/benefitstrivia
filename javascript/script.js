// //nothing runs until html finishes loaded
$(document).ready(function () {
    console.log("this blows");
    //     //event: user presses start button
    var integer = 20;
    var intervalId;
    var correctAnswer = 0;
    var wrongAnswer = 0;

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

    // $("#right").text(correctAnswer)
    // $("#wrong").text(wrongAnswer)

    $("#button2").on("click", function () {
        $("input[type=radio]:checked").each(function () {
            console.log($(this).val())
            if ($(this).val() === "correct") {
                correctAnswer++;
            }
            else if ($(this).val() === "wrong") {
                wrongAnswer++;
            }
            var blank = (5 - (correctAnswer + wrongAnswer))
            $("#right").text(correctAnswer)
            $("#wrong").text(wrongAnswer)
            $("#blank").text(blank)


            //click event on done button, create a function to evaluate all the questions at the end
            //call stop function within this function
            // user input checked whatever should say .val()


        });
    })
});