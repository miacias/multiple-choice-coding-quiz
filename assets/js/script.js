const questionBank = [
    {
        question: "Inside the HTML document, where do you place your JavaScript code?",
        responses: ["in the HEAD element", "in the LINK element", "in the FOOTER element", "in the SCRIPT element"],
        answer: "in the SCRIPT element",
        // create a pause to receive feedback then unpause with next question
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
    },
    {
        question: "How do we declare a conditional statement in JavaScript?",
        responses: ["for loop", "while loop", "if...else", "difference...between"],
        answer: "if...else",
        correctFeedback: "Amazing! This is something you will use every day as a JavaScript developer.",
        incorrectFeedback: "if... else is how we declare a conditional statement."
    },
    {
        question: "From the given array, which index is the letter \'b\' on? [\'a\', \'b\', \'c\', \'d\']?",
        responses: ["3", "1", "0", "2"],
        answer: "1",
        correctFeedback: "Rock on! Arrays start at index 0, so that would make 'b' at index 1.",
        incorrectFeedback: "Arrays start counting at index 0, so that would make 'b' at index 1."
    },
    {
        question: "How do we stop a loop from repeating indefinitely?",
        responses: ["A loop will stop executing when the condition is true.", "A loop will stop executing when the condition is false.", "When we have iterated through half of the condition.", "We have to explicitly end the loop with the break keyword."],
        answer: "A loop will stop executing when the condition is false.",
        correctFeedback: "Fantastic! JavaScript loops will stop executing when the condition is false.",
        incorrectFeedback: "JavaScript loops will stop executing when the condition is false. Have a look at the documentation to solidify your knowledge of loops."
    },
    {
        question: "Which statement below is FALSE about functions in JavaScript?",
        responses: ["Functions can be reused throughout your code.", "Functions can receive arguments that can alter the output of a function.", "A function must always be assigned an identifier.", "Functions are able to be recursive."],
        answer: "A function must always be assigned an identifier.",
        correctFeedback: "You're doing great! Functions without identifiers are called anonymous functions, which are used quite frequently used in JavaScript. Make sure you are familiar with functions and how they work.",
        incorrectFeedback: "Functions without identifiers are called anonymous functions, which are used quite frequently used in JavaScript. Make sure you are familiar with functions and how they work."
    },
    {
        question: "What are the two types of scope JavaScript uses?",
        responses: ["Surrounding and Inner", "Outside and Inside", "Broad and Local", "Global and Local"],
        answer: "Global and Local",
        correctFeedback: "Nice job! Global items are not in a block of code whereas local items are hidden within blocks of code like a function",
        incorrectFeedback: "JavaScript has two forms of scope, global and local. Have a look at the documentation on scope because it is something that will continuously during your JavaScript journey."
    },
    {
        question: "Which two array methods would allow me to remove the last element of my array and to also be able to add a new element to the beginning of my array?",
        responses: ["pop() and unshift()", "concat() and shift()", "push() and sort()", "forEach() and pop()"],
        answer: "pop() and unshift()",
        correctFeedback: "Awesome!",
        incorrectFeedback: "The pop array method removes the last element of an array and the unshift method adds an element to beginning of the array."
    },
    {
        question: "How do we access a value stored in an object?",
        responses: ["Period notation, Square bracket notation", "Dot notation, Bracket notation", "Dot notation, Curl bracket notation", "Equal notation, Abstract notation"],
        answer: "Dot notation, Curl bracket notation",
        correctFeedback: "Yes!",
        incorrectFeedback: "Nice try! We have two ways of accessing data inside of an object, dot notation and bracket notation. Have a look at the documentation on objects."
    },
    {
        question: "What is an object method?",
        responses: ["A function associated with an object", "A function that takes an object for an argument", "Keys in an object that have a number assigned to it", "An array saved inside of an object"],
        answer: "A function associated with an object",
        correctFeedback: "Good job! An object method is just an object with an available function associated with it. Like arrays, objects have methods that can be used to help us interact with them.",
        incorrectFeedback: "An object method is just an object with an available function associated with it. Like arrays, objects have methods that can be used to help us interact with them."
    },
    {
        question: "What is the purpose of the \'This\' operator?",
        responses: ["Allows us to specify certain variables to it which can be used in the global scope.", "Can easily store global variables for when we need access to them.", "Refers to the object it is in and changes based on which object it is in when being called.", "Lets us make a reference to our window gives us access to special object methods."],
        answer: "Refers to the object it is in and changes based on which object it is in when being called.",
        correctFeedback: "Rock on!",
        incorrectFeedback: "The keyword THIS refers to the object it is in. THIS changes based on which object it is in when being called. The THIS keyword can be tough to understand at first but it is a helpful tool once understood."
    },
    {
        question: "Which is NOT true about JavaScript?",
        responses: ["JavaScript increases interactivity of our websites.", "JavaScript handles numbers better than most programming languages.", "JavaScript lets provide the user immediate feedback upon an action.", "Javascript allows developers to create richer interfaces for the users."],
        answer: "JavaScript handles numbers better than most programming languages.",
        correctFeedback: "You did it! JavaScript is definitely not known for being good with numbers.",
        incorrectFeedback: "JavaScript does a lot of cool things but it is not known for being good with numbers. Have a look around the internet for the pros and cons of JavaScript."
    }
];

// access to HTML sections
const startButton = document.querySelector(".start-button");
const openingPage = document.querySelector("#opening-page");
const quizPage = document.querySelector("#quiz-page");
const leaderboardPage = document.querySelector("#leaderboard-page");
const page = document.querySelector(".page"); // all page types
var responseBox = document.querySelector(".responses");
const home = document.querySelector(".home");

// recycled variables
var questionBankIndex;
var correctCount;
var secondsLeft;
var timerInterval;
var responseOptions;
var question;

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
        page.style.display = "flex";
    }
};

// default view of page with only OPENING as ACTIVE
function opener() {
    makeActive(openingPage);
    makeInactive(quizPage);
    makeInactive(leaderboardPage);
};
opener();

function quizView() {
    makeInactive(openingPage);
    makeActive(quizPage);
    makeInactive(leaderboardPage);
};

function leaderBoard() {
    makeInactive(quizPage);
    makeActive(leaderboardPage);
    makeInactive(openingPage);
};

var everyone = []; // placeholder for all userData

// compares one object to another by score by referencing everyone[]
function compareNumbers(userDataA, userDataB) {
    return userDataA.score - userDataB.score;
}

var submit = document.querySelector(".submit-initials");
submit.addEventListener("click", function(event) {
    event.preventDefault();
    if (initials.value === "" || !initials.value.match(/^[A-Za-z]*$/)) {
        alert("Please insert letter initials to get on the board!");
        return;
    }
    // var initials = document.querySelector("#initials");
    var userData = {
        initials: initials.value,
        score: correctCount,
    }
    everyone.push(userData);
    var sortBoard = everyone.sort(compareNumbers).reverse();
    // set localStorage
    localStorage.setItem("board", JSON.stringify(sortBoard)); // saves sorted data as string
    var finalBoard = document.querySelector(".user-scores");
    finalBoard.replaceChildren();
    // get localStorage and put into HTML via for loop
    var board = JSON.parse(localStorage.getItem("board")); // designates localStorage as original data format (array of objects) from its stringified stored form
    for (let s = 0; s < board.length; s++) {
        var individualScores = document.createElement("div");
        finalBoard.append(individualScores);
        individualScores.textContent = "Player " + board[s].initials + " Score: " + board[s].score; // success!
    }
})

home.addEventListener("click", function() {
    question.replaceChildren();
    responseBox.replaceChildren();
    opener();
})

var clear = document.querySelector(".reset-board");
clear.addEventListener("click", function() {
    localStorage.clear();
    var finalBoard = document.querySelector(".user-scores");
    finalBoard.replaceChildren();
})

// timer countdown
function quizTimer() { // only visible after clicking Start Button
    var timerEl = document.querySelector(".time-remaining");
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time left: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up!");
            leaderBoard();
        }
    }, 1000);
}

// empties question text, removes response buttons
function removeQuestion() {
    question.replaceChildren();
    responseBox.replaceChildren();
    insertQuestion();
};

function insertQuestion() {
    // access HTML question section
    question = document.querySelector(".question");
    responseBox = document.querySelector(".responses");
    question.textContent = (questionBank[questionBankIndex].question);
    for (let r = 0; r < questionBank[questionBankIndex].responses.length; r++) {
        responseOptions = document.createElement("button");
        responseBox.append(responseOptions);
        // r counts index number of responses, so each response gets printed in each button
        responseOptions.textContent = (questionBank[questionBankIndex].responses[r]);
    }
    responseBox.addEventListener("click", function answerChecker (event) {
        event.stopPropagation(); // prevents container <div> screen space from being included in the listener
        event.preventDefault(); // for Button to prevent page refresh
        var userChoice = event.target.textContent;
        if (userChoice === questionBank[questionBankIndex].answer) {
            correctCount ++;
        } else {
            secondsLeft --;
        }
        if (questionBankIndex < questionBank.length - 1) {
            questionBankIndex ++;
            // pause quiz, show feedback for a moment, remove feedback and unpause quiz
            console.log(questionBankIndex);
            removeQuestion();
        } else if (questionBankIndex === questionBank.length - 1) {
            leaderBoard();
            clearInterval(timerInterval);
        }
        // stops listener so that when it is called again, it will not double the ++ and -- counters infinitely (+1, +2, +4, +8 etc)
        this.removeEventListener("click", answerChecker);
        })
};

// START triggers game, timer, and show/hide pages
startButton.addEventListener("click", function(event) {
    correctCount = 0;
    questionBankIndex = 0;
    clearInterval(timerInterval); // backup clear just in case user refreshes page and cancels quiz
    secondsLeft = 60;
    // connects audio to JS
    const boop = document.getElementById("boop");
    boop.volume = 0.2;
    boop.play();
    insertQuestion();
    quizTimer();
    quizView();
});