// BONUS: consider making a randomizer function that cycles through quetions so that questions can be scoped locally (i.e. made private). how to get it to not repeat questions twice? track questions that were answered correctly. make a var currentQuestion and then when it is answered correctly, it is removed from questionBank, else if no questions are left: do nothing. (dot)SPLICE!!!
// BONUS: add a counter to question numbers so each question is counter +=1! this way it won't print question# but count on its own (in case questions are randomized)

const questionBank = [
    {
        question: "Inside the HTML document, where do you place your JavaScript code?",
        responses: ["in the HEAD element", "in the LINK element", "in the FOOTER element", "in the SCRIPT element"],
        answer: "in the SCRIPT element",
        // give a set timer to receive feedback then unpause timer and next question
        correctFeedback: "Nice job! JavaScript is placed inside the SCRIPT element of the HTML Document.",
        incorrectFeedback: "JavaScript is stored in a SCRIPT element in HTML."
    },
    {
        question: "What operator is used to assign a value to a declared variable?",
        responses: ["question mark (?)", "double equality (==)", "single equality (=)", "colon (:)"],
        answer: "single equality (=)",
        correctFeedback: "Awesome! The correct way to assign a variable is with an equal sign (=).",
        incorrectFeedback: "Variables can be assigned a value with an equal sign (=)."
    },
    {
        question: "What are the six primitive data types in JavaScript?",
        responses: ["sentence, float, data, bigInt, symbol, undefined", "sentence, int, truthy, bigInt, symbol, undefined", "string, number, boolean, bigInt, symbol, undefined", "string, num, falsy, bigInt, symbol, undefined"],
        answer: "string, number, boolean, bigInt, symbol, undefined",
        correctFeedback: "Stellar! JavaScript has a total of six primitive data types: string, number, boolean, bigInt, symbol, undefined.",
        incorrectFeedback: "JS's six primitive data types are: string, number, boolean, bigInt, symbol, undefined."
    },
    {
        question: "What is the difference between && and || ?",
        responses: ["The logical operator && returns true if ONE expression is true while the logical operator || returns true if BOTH expressions return true.", "The logical operator && returns true if BOTH expressions are true while the logical operator || returns true if ONE expression or the other returns true.", "The logical operator && returns true if BOTH expressions are true while the logical operator || returns false if ONE expression or the other returns true.", "The logical operator && returns true if NONE of the expressions are true while the logical operator || returns true if ONE expression or the other returns true."],
        answer: "The logical operator && returns true if BOTH expressions are true while the logical operator || returns true if ONE expression or the other returns true.",
        correctFeedback: "High-five! The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
        incorrectFeedback: "AND (&&) means both expressions are true while OR (||) means only one expression is true."
    }
];

// access to HTML sections
var startButton = document.querySelector(".start-button");
var openingPage = document.querySelector("#opening-page");
var quizPage = document.querySelector("#quiz-page");
var leaderboardPage = document.querySelector("#leaderboard-page");
var page = document.querySelector(".page"); // all page types
var questionBankIndex = 0;
var correctCount = 0;
var secondsLeft;
var responseOptions;
var question;
var responseBox;

function makeInactive(page) { // parameter allows running on different page types
    const dataAttribute = page.getAttribute("data-view");
    if (dataAttribute === "active") {
        page.setAttribute("data-view", "inactive");
        page.style.visibility = "hidden";
        page.style.display = "none";
    }
};

function makeActive(page) { // parameter allows running on different page types
    const dataAttribute = page.getAttribute("data-view");
    if (dataAttribute === "inactive") {
        page.setAttribute("data-view", "active");
        page.style.visibility = "visible";
        page.style.display = "block";
    }
};

// default view of page with only OPENING as ACTIVE
function opener() {
    makeActive(openingPage);
    makeInactive(quizPage);
    makeInactive(leaderboardPage);
};
opener();

// function leaderBoard() {

// };

// timer countdown
function timeRemaining() { // only visible after clicking Start Button
    var timerEl = document.querySelector(".time-remaining");
    secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            var timerDone = document.querySelector(".time-remaining");
            timerDone.textContent = "Time is up!"; // replaces countdown and "time left" text
        }
    }, 1000);
}

// empties question text, removes response buttons
function removeQuestion() {
    question.replaceChildren();
    responseBox.replaceChildren();
    // if (questionBank.length === questionBankIndex) {
    //     leaderBoard();
    // } else {
    //     insertQuestion();
    // }
    insertQuestion();
};

function insertQuestion() {
    // access HTML question section
    question = document.querySelector(".question");
    responseBox = document.querySelector(".responses");
    var responseOptions
    question.textContent = (questionBank[questionBankIndex].question);
    for (let r = 0; r < questionBank[questionBankIndex].responses.length; r++) {
        responseOptions = document.createElement("button");
        responseBox.append(responseOptions);
        responseOptions.textContent = (questionBank[questionBankIndex].responses[r]); // r counts index number of responses, so each response gets printed in each button
    }

    // triggers next question by incrementing questionBankIndex +1
    responseBox.addEventListener("click", function(event) {
        var userChoice = event.target.textContent;
        if (userChoice === questionBank[questionBankIndex].answer) {
            correctCount ++;
        }
        if (userChoice !== questionBank[questionBankIndex].answer) {
            secondsLeft --; // counting incorrectly?
        }
    })
    questionBankIndex ++;
    removeQuestion();
};

// START triggers game, timer, and show/hide pages
startButton.addEventListener("click", function(event) {
    // connects audio to JS
    const boop = document.getElementById("boop");
    boop.volume = 0.2;
    boop.play();
    insertQuestion();
    timeRemaining();
    makeInactive(openingPage);
    makeActive(quizPage);
    makeInactive(leaderboardPage);
});