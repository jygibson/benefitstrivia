//nothing runs until html finishes loaded
$(document).ready(function () {

    console.log("this blows")
    var integer = 46;
    var intervalId;

    var triviaData = [{
        question: "Our medical plans are what type of plans?",
        answerList: ["CDHP: Consumer Driven Health Plans", "HDHP: High Deductible Health Plans", " PPO: Preferred Provider Organization", "All of the above"],
        answer: 3,
    },
    {
        question: "What are the benefits of a HDHP?",
        answerList: ["Premiums are much lower", "You are eligible for an Health Savings Account", "HDHPs encourage participants to be more mindful about their health", "You can shop around for less expensive providers and treatments", "all of the above"],
        answer:4,
    },
{
    question:"Pretend you're at the doctor for your annual physical. The receptionist would like you to pay a $20 co-pay.What do you do?",
    answerList:["Pay the $20.00 co-pay.", "Use your HSA to pay the $20.00 co-pay.", "Let the receptionist know that annual physicals are preventive care and covered at 100%."],
    answer: 2,
},
{
    question: "Pretend you're at the doctor for a sick visit. The receptionist wants you to pay a $20.00 co-pay. What do you do?",
    answerList:["Pay the $20.00 co-pay.","Use your HSA to pay the $20.00 co-pay.","Let the receptionist know that you have a high deductible health plan and the charge should be processed through insurance before you are billed." ],
    answer:2,
},
{
    question: "What are the benefits of a Health Savings Account?",
    answerList: ["1. The money goes in pre-tax, which while it makes your take home pay smaller, it's a smaller amount to be taxed.","It's your own savings account, you can keep it forever -- you can use it in retirement too!","Once your balance reaches $1,000, you can invest the money, and all dividends are tax free.","Once you have a balance, it can help ease the pain on your wallet with the larger deductibles.","all of the above!"],
    answer: 4,
}]

    $(".full-game").toggle();

    $("#button").on("click", run);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $(".full-game").toggle();
        $("#button").toggle();
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




})
