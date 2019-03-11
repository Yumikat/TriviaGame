//Variables
var timeremaining = 120;
var correctGuesses = 0;
var incorrectGuesses = 0;
var answeredQuestions = 0;
var unansweredQuestions = 0;
var intervalId;
var answersChosen = [];
var correctAnswers = [];

function scoring() {
    for (var i = 0; i < 10; i++) {
        if (answersChosen[i] === questions[i].answer) {
            correctGuesses++;
        } else if (answersChosen[i] == null) {
            unansweredQuestions++;
        } else {
            incorrectGuesses++;
        }
    }
}

questions = [
    {
        question: "Who wrote the 'Lord of the Rings' triology books?",
        answers: ["George R.R. Martin", "J.R.R. Tolkien", "Neil Gaiman", "Terry Brooks"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "Who composed the music for the LOTR movies?",
        answers: ["Howard Shore", "John Williams", "Jerry Goldsmith", "Danny Elfman"],
        answer: "Howard Shore"
    },
    {
        question: "Where is the fellowship of the ring heading to?",
        answers: ["Mount Zion", "Mount Doom", "Mount Moria", "Mount Mordor"],
        answer: "Mount Doom"
    },
    {
        question: "What name does Gollum go by, before he encountered the ring?",
        answers: ["Foronir", "Taurin", "Adelard", "Smeagol"],
        answer: "Smeagol"
    },
    {
        question: "Which of the following is NOT a forest in LOTR?",
        answers: ["Lothlorien", "Westland", "Mirkwood", "Fangorn"],
        answer: "Westland"
    },
    {
        question: "Which character dies in the fellowship?",
        answers: ["Boromir", "Gimli", "Legolas", "Aragorn"],
        answer: "Boromir"
    },
    {
        question: "Which actor play/voices Gollum?",
        answers: ["James Cordon", "Mark Hamill", "Andy Serkis", "Jack Black"],
        answer: "Andy Serkis"
    },
    {
        question: "What are the old, living beings called in Fangorn forest?",
        answers: ["Ent", "Groot", "Oakenshield", "Treeguard"],
        answer: "Ent"
    },
    {
        question: "Who said the famous line, 'One does not simply walk into Mordor'?",
        answers: ["Elrond", "Faramir", "Boromir", "Aragorn"],
        answer: "Boromoir"
    },
    {
        question: "What is Gollum's favorite food?",
        answers: ["Elven Bread", "Roasted Pig", "Raw Fish", "Pickled Radish"],
        answer: "Raw Fish"
    }
]

for (var i = 0; i < questions.length; i++) {
    var a = questions[i].answer;
    correctAnswers.push(a);
}

startTimer();
renderQuestion();

function renderQuestion() {
    $("#quiz-display").empty();
    var oForm = $("<form>");
    $("#quiz-display").append(oForm);
    var submit = $("<button>");
    submit.text("Submit").addClass("submit");

    for (var i = 0; i < questions.length; i++) {
        var a = $("<div>").addClass("font").text(questions[i].question);
        oForm.append(a);
        for (var j = 0; j < 4; j++) {
            var b = $("<input>");
            b.attr("type", 'radio').attr("value", questions[i].answers[j]).attr('name', [i]);
            oForm.append(b, questions[i].answers[j]);
        }
        var br = $("<br><br>");
        oForm.append(br);
    }
    $("#quiz-display").append(submit);
}

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

function scorePage() {
    $("#quiz-page").empty();
    $("#quiz-page").html("<h3> Correct answers: " + correctGuesses + "<br><h3> Unanswered questions: " + unansweredQuestions + "<br><h3> Incorrect answers: " + (incorrectGuesses)
    + "<br>" + "<img src='assets/images/download.jpg' />");
}

function stopTimer() {
    timeremaining = 0;
    getValues();
    scorePage();
}

$(".submit").on("click", function () {
    getValues();
    scorePage();
})

function getValues() {
    for (var i = 0; i < questions.length; i++) {
        var radioValue = $("input[name ='" + i + "']:checked").val();
        answersChosen.push(radioValue);
    }

    scoring();
    console.log("Answers chosen:", answersChosen);
    console.log("Correct answers: ", correctAnswers);
    console.log("Correct: " + correctGuesses);
    console.log("Unanswered: " + unansweredQuestions);
    console.log("Incorrect: " + (incorrectGuesses));
}