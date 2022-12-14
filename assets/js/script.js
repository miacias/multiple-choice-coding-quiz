const questionBank = [question1, question2, question3, question4];

var question1 = {
    question: "Inside the HTML document, where do you place your JavaScript code?",
    response1: "in the <head> element",
    response2: "in the <link> element",
    response3: "in the <footer> element",
    response4: "in the <script> element", // true
    correctFeedback: "Nice job! JavaScript is placed inside the <script> element of the HTML Document.",
    incorrectFeedback: "JavaScript is stored in a <script> element in HTML."
}
var question2 = {
    question: "What operator is used to assign a value to a declared variable?",
    response1: "question mark (?)",
    response2: "double equality (==)",
    response3: "single equality (=)", // true
    response4: "colon (:)",
    correctFeedback: "Awesome! The correct way to assign a variable is with an equal sign (=).",
    incorrectFeedback: "Variables can be assigned a value with an equal sign (=)."
}
var question3 = {
    question: "What are the six primitive data types in JavaScript?",
    response1: "sentence, float, data, bigInt, symbol, undefined",
    response2: "sentence, int, truthy, bigInt, symbol, undefined",
    response3: "string, number, boolean, bigInt, symbol, undefined", // true
    response4: "string, num, falsy, bigInt, symbol, undefined",
    correctFeedback: "Stellar! JavaScript has a total of six primitive data types: string, number, boolean, bigInt, symbol, undefined.",
    incorrectFeedback: "JS's six primitive data types are: string, number, boolean, bigInt, symbol, undefined."
}
var question4 = {
    question: "What is the difference between && and || ?",
    response1: "The logical operator && returns true if ONE expression is true while the logical operator || returns true if BOTH expressions return true.",
    response2: "The logical operator && returns true if BOTH expressions are true while the logical operator || returns true if ONE expression or the other returns true.", // true
    response3: "The logical operator && returns true if BOTH expressions are true while the logical operator || returns false if ONE expression or the other returns true.",
    response4: "The logical operator && returns true if NONE of the expressions are true while the logical operator || returns true if ONE expression or the other returns true.",
    correctFeedback: "High-five! The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    incorrectFeedback: "AND (&&) means both expressions are true while OR (||) means only one expression is true."
}

// JS Activity 7: shows how to create HTML element tags with text and attach as children in document.

var startButton = document.querySelector(".start-button");
var openingPage = document.querySelector(".opening-page");
var quizPage = document.querySelector(".quiz-page");
var leaderboardPage = document.querySelector(".leaderboard-page");

function quiz(event) {
    // I want class opening-page to disappear
}


// START triggers game function, timer function, and data-attribute change to hide opening-page
startButton.addEventListener("click", function(event) {
    var element = event.target;
    const state = element.getAttribute("data-state");
    console.log(element.getAttribute("data-state"));
    quiz();
    timeRemaining();
});




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
            timerDone.textContent = "Time is up!"; // replaces countdown timer and "time left" text
        }
    }, 1000);
}