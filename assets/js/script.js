// BONUS: consider making a randomizer function that cycles through quetions so that questions can be scoped locally (i.e. made private). how to get it to not repeat questions twice?
// BONUS: add a counter to question numbers so each question is counter +=1! this way it won't print question# but count on its own (in case questions are randomized)

const questionBank = [question1, question2, question3, question4];

var question1 = {
    question: "Inside the HTML document, where do you place your JavaScript code?",
    responseA: "in the <head> element",
    responseB: "in the <link> element",
    responseC: "in the <footer> element",
    responseD: "in the <script> element", // true
    // question1.response4 = true;
    correctFeedback: "Nice job! JavaScript is placed inside the <script> element of the HTML Document.",
    incorrectFeedback: "JavaScript is stored in a <script> element in HTML."
}
var question2 = {
    question: "What operator is used to assign a value to a declared variable?",
    responseA: "question mark (?)",
    responseB: "double equality (==)",
    responseC: "single equality (=)", // true
    responseD: "colon (:)",
    correctFeedback: "Awesome! The correct way to assign a variable is with an equal sign (=).",
    incorrectFeedback: "Variables can be assigned a value with an equal sign (=)."
}
var question3 = {
    question: "What are the six primitive data types in JavaScript?",
    responseA: "sentence, float, data, bigInt, symbol, undefined",
    responseB: "sentence, int, truthy, bigInt, symbol, undefined",
    responseC: "string, number, boolean, bigInt, symbol, undefined", // true
    responseD: "string, num, falsy, bigInt, symbol, undefined",
    correctFeedback: "Stellar! JavaScript has a total of six primitive data types: string, number, boolean, bigInt, symbol, undefined.",
    incorrectFeedback: "JS's six primitive data types are: string, number, boolean, bigInt, symbol, undefined."
}
var question4 = {
    question: "What is the difference between && and || ?",
    responseA: "The logical operator && returns true if ONE expression is true while the logical operator || returns true if BOTH expressions return true.",
    responseB: "The logical operator && returns true if BOTH expressions are true while the logical operator || returns true if ONE expression or the other returns true.", // true
    responseC: "The logical operator && returns true if BOTH expressions are true while the logical operator || returns false if ONE expression or the other returns true.",
    responseD: "The logical operator && returns true if NONE of the expressions are true while the logical operator || returns true if ONE expression or the other returns true.",
    correctFeedback: "High-five! The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    incorrectFeedback: "AND (&&) means both expressions are true while OR (||) means only one expression is true."
}

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
    // possibly put for loop in IF
    for (var i = 0; i < questionBank.length; i++) {
        
    }
    // question.textContent = question1.question; // make this into an array question bank that grabs the object properties
    var responsesBox = document.querySelector(".responses");
    
    var responseA = document.querySelector(".response-A");
    responseA = question1.responseA
    
    var responseB = document.querySelector(".response-B");
    
    var responseC = document.querySelector(".response-C");
    
    var responseD = document.querySelector(".response-D");

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