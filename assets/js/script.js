// BONUS: consider making a randomizer function that cycles through quetions so that questions can be scoped locally (i.e. made private). how to get it to not repeat questions twice? track questions that were answered correctly. make a var currentQuestion and then when it is answered correctly, it is removed from questionBank, else if no questions are left: do nothing. (dot)SPLICE!!!
// BONUS: add a counter to question numbers so each question is counter +=1! this way it won't print question# but count on its own (in case questions are randomized)

const questionBank = [
    {
        question: "Inside the HTML document, where do you place your JavaScript code?",
        responses: ["in the <head> element", "in the <link> element", "in the <footer> element", "in the <script> element"],
        answer: "in the <script> element",
        // give a set timer to receive feedback then unpause timer and next question
        correctFeedback: "Nice job! JavaScript is placed inside the <script> element of the HTML Document.",
        incorrectFeedback: "JavaScript is stored in a <script> element in HTML."
    },
    // {
    //     question: "What operator is used to assign a value to a declared variable?",
    //     responses: ["question mark (?)", "double equality (==)", "single equality (=)", "colon (:)"],
    //     answer: "single equality (=)",
    //     correctFeedback: "Awesome! The correct way to assign a variable is with an equal sign (=).",
    //     incorrectFeedback: "Variables can be assigned a value with an equal sign (=)."
    // },
    // {
    //     question: "What are the six primitive data types in JavaScript?",
    //     responses: ["sentence, float, data, bigInt, symbol, undefined", "sentence, int, truthy, bigInt, symbol, undefined", "string, number, boolean, bigInt, symbol, undefined", "string, num, falsy, bigInt, symbol, undefined"],
    //     answer: "string, number, boolean, bigInt, symbol, undefined",
    //     correctFeedback: "Stellar! JavaScript has a total of six primitive data types: string, number, boolean, bigInt, symbol, undefined.",
    //     incorrectFeedback: "JS's six primitive data types are: string, number, boolean, bigInt, symbol, undefined."
    // },
    // {
    //     question: "What is the difference between && and || ?",
    //     responses: ["The logical operator && returns true if ONE expression is true while the logical operator || returns true if BOTH expressions return true.", "The logical operator && returns true if BOTH expressions are true while the logical operator || returns true if ONE expression or the other returns true.", "The logical operator && returns true if BOTH expressions are true while the logical operator || returns false if ONE expression or the other returns true.", "The logical operator && returns true if NONE of the expressions are true while the logical operator || returns true if ONE expression or the other returns true."],
    //     answer: "The logical operator && returns true if BOTH expressions are true while the logical operator || returns true if ONE expression or the other returns true.",
    //     correctFeedback: "High-five! The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    //     incorrectFeedback: "AND (&&) means both expressions are true while OR (||) means only one expression is true."
    // }
];

// JS Activity 7: shows how to create HTML element tags with text and attach as children in document.

// access to HTML sections

var startButton = document.querySelector(".start-button");
var openingPage = document.querySelector("#opening-page");
var quizPage = document.querySelector("#quiz-page");
var leaderboardPage = document.querySelector("#leaderboard-page");
var page = document.querySelector(".page"); // all page types

function makeInactive(page) { // parameter allows running on different page types
    const dataAttribute = page.getAttribute("data-view");
    if (dataAttribute === "active") {
        page.setAttribute("data-view", "inactive");
        page.style.visibility = "hidden";
        page.style.display = "none";
    }
}

function makeActive(page) { // parameter allows running on different page types
    const dataAttribute = page.getAttribute("data-view");
    if (dataAttribute === "inactive") {
        page.setAttribute("data-view", "active");
        page.style.visibility = "visible";
        page.style.display = "block";
    }
}

// default view of page with only OPENING as ACTIVE
function opener() {
    makeActive(openingPage);
    makeInactive(quizPage);
    makeInactive(leaderboardPage);
}
opener();

// timer countdown
function timeRemaining() { // only visible after clicking Start Button
    var timerEl = document.querySelector(".time-remaining");
    var secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // create function for lose case to call in this line
            var timerDone = document.querySelector(".time-remaining");
            timerDone.textContent = "Time is up!"; // replaces countdown and "time left" text
        }
    }, 1000);
}

// use for loop to insert question properties based on questionBank array. if correct, show win text and +1 on array index location. if incorrect, show lose text and +1 on array index location.
function insertQuestion() {
    // access HTML question section
    var question = document.querySelector(".question");
    var responseBox = document.querySelector(".responses");
    var responseOptions
    // for (var q = 0; q < questionBank.length; q++) {
        question.textContent = (questionBank[0].question);

        for (var r = 0; r < questionBank[0].responses.length; r++) {
            responseOptions = document.createElement("button");
            responseBox.append(responseOptions);
            responseOptions.textContent = (questionBank[0].responses[r]); // r counts index number of responses, so each response gets printed in each button
            responseOptions.addEventListener("click", function(event) {
                // switch to next question
                // else leaderboard page?
            });
        }
         // only one button is created with all object properties attached
        
        // responseOptions.textContent = (question[questionBank].answer); // sets content of buttons to object responses (BROKEN: responses not defined?)
    // }
    // const userChoice = document.getElementById(".responses").value;
    // if (userChoice === question[questionBank].answer) {
    //     console.log("user clicked correct answer");
    //     // need to add more to this IF
    // }
    // question.textContent = question1.question; // make this into an array question bank that grabs the object properties
}

// call insertQuestion and other things? maybe use eventListener in an IF STATEMENT to verify if user selects correct response
function quiz() {
    insertQuestion();
}

// connects audio to JS
const boop = document.getElementById("boop");
boop.volume = 0.2;

// START triggers game, timer, and show/hide pages
startButton.addEventListener("click", function(event) {
    console.log("here is the start button in action");
    boop.play();
    // var page = event.target;
    // const dataAttribute = page.getAttribute("data-view");
    timeRemaining();
    quiz();
    makeInactive(openingPage);
    makeActive(quizPage);
    makeInactive(leaderboardPage);
});