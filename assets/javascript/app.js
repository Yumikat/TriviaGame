//Variables
var timeremaining = 120;
var correctGuesses = 0;
var incorrectGuesses = 0;
var unansweredQuestions = 0;
var intervalId;
var answersChosen = [];
var correctAnswers = ["jrrTolkien", "howardShore", "mountDoom", "Smeagol", 
"Westland", "Boromir", "andySerkis", "Ent", "Boromir", "rawFish"];


function scoring() {
    for (var i = 0; i < 10; i++) {
    if (answersChosen[i] === correctAnswers[i]){
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }
}
}
// (answersChosen[i] !== correctAnswers[i])
// var questions = [
//     { q: "Who wrote the 'Lord of the Rings' triology books?", a: "J. R. R. Tolkien" }
//     { q: "Who composed the music for the LOTR movies?", a: "Howard Shore" }
//     { q: "Where is the fellowship of the ring heading to?", a: "Mount Doom" }
//     { q: "What does Gollum go by, before he encountered the ring?", a: "Smeagol" }
//     { q: "Which of the following is NOT a forest in LOTR?", a: "Westland" }
//     { q: "Which character dies in the fellowship?", a: "Boromir" }
//     { q: "Which actor play/voices Gollum?", a: "Andy Serkis" }
//     { q: "What are the old, living beings called in Fangorn forest?", a: "Ent" }
//     { q: "Who said the famous line, 'One does not simply walk into Mordor'?", a: "Boromir" }
//     { q: "What is Gollum's favorite food?", a: "Raw fish" }
// ];

startTimer();

// function renderQuestion() {
//     if (questionIndex <= (questions.length - 1)) {
//         document.querySelector("#question").innerHTML = questions[questionIndex].q;
//     }
// }

$("#timer").text(timeremaining);

function startTimer() {
    intervalId = setInterval(countDown, 1000);
}

function countDown() {
    if (timeremaining > 0) {
        timeremaining--;
        $("#timer").text(timeremaining);
        if (timeremaining === 0) {
            alert("Game's Up!");
            stopTimer();
            return;
        }
    }
}

function scorePage () {
    $("#quiz-page").empty();
    $("#quiz-page").html("<h3> Correct answers: " + correctGuesses + "<br><h3> Unanswered questions: " + unansweredQuestions + "<br> Incorrect answers: " + incorrectGuesses);
}

function stopTimer() {
    timeremaining = 0;
    getValues();
    scorePage();
}

$("#submit").on("click", function () {
    getValues();
    scorePage();
})

function getValues() {
    // $(document).ready(function () {
    //     $("input[type='submit']").click(function () {
            if($("#one").checked) {
                var radioValue = $("input[name='questionOne']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#two").checked) {var radioValue = $("input[name='questionTwo']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#three").checked) {var radioValue = $("input[name='questionThree']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#four").checked) {var radioValue = $("input[name='questionFour']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#five").checked) {var radioValue = $("input[name='questionFive']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#six").checked) {var radioValue = $("input[name='questionSix']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#seven").checked) {var radioValue = $("input[name='questionSeven']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#eight").checked) {var radioValue = $("input[name='questionEight']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#nine").checked) {var radioValue = $("input[name='questionNine']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            if($("#ten").checked) {var radioValue = $("input[name='questionTen']:checked").val();
            answersChosen.push(radioValue);}
            else {
                unansweredQuestions++;
                incorrectGuesses--;
            }
            scoring();
            console.log("Answers chosen", answersChosen);
            console.log("Correct answers", correctAnswers);
            console.log("Correct: "+ correctGuesses);
            console.log("Unanswered: " + unansweredQuestions);
            console.log("Incorrect: " + incorrectGuesses);
        }


//         )
//     })
// }
// });
// $("#answers").onsubmit = function () {
//     var val = getRadioVal(this, 'questionOne');
//     console.log(val);
// }

// $('input[name=questionOne]').on('submit', function(){ 
//     console.log($('input[name=questionOne]:checked').val());
// });

// $(document).ready(function(){
//     $("input[type='button']").click(function(){
//         var radioValue = $("input[name='questionOne']:checked").val();
//         console.log(radioValue);
//     });

// });

// $(".answer-options").submit(function() {

//     // get selected value
//     var selected = $("input[type='radio'][name='questionOne']:checked");

//     // check if an option was selected
//     if (selected.length > 0) {
//         console.log(selected);    
//         }
//     });