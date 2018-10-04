// //nothing runs until html finishes loaded
$(document).ready(function () {
    console.log("testing");
    //     //event: user presses start button
    var integer = 120;
    var intervalId;
    var correctAnswer = 0;
    var wrongAnswer = 0;

    $(".game").toggle();
    $(".timer").toggle();
    $(".timeupPage").toggle();
    $(".submittedPage").toggle();

    $("#button").on("click", beginGame);
    $("#button2").on("click", stop);
    $("#button3").on("click", startOver);


    function beginGame() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#button").toggle();
        $(".timer").toggle();
        $(".game").toggle();

    }

    function startOver() {
        $('.game').find('input:radio').prop('checked', false);
        integer = 120;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#button").show();
        $(".timer").hide();
        $(".game").hide();
        $(".timeupPage").hide();
        correctAnswer = 0;
        wrongAnswer = 0;

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

        })
    }

})
