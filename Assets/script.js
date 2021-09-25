//Create Elements by ID
var scoreLink = document.getElementById('scoreLink')
var timer = document.getElementById('timer')
var countdown = document.getElementById('countdown')
var startQuiz = document.getElementById('start-quiz')
var questions = document.getElementById('questions')
var h2El = document.querySelector('h2')
var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var a3 = document.getElementById('a3')
var a4 = document.getElementById('a4')
var results = document.getElementById('results')
var answers = document.getElementById('answers')
var done = document.getElementById('done')
var scores = document.getElementById('scores')

//Access Button Elements
var startbtn = document.querySelector("#startbtn")
var ansbtn = document.querySelector(".ansbtn")
var subbtn = document.querySelector("#submitbtn")
var backbtn = document.querySelector("#backbtn")
var clearbtn = document.querySelector("#clearbtn")

//Begin quiz with only the start quiz attribute appearing
    startQuiz.setAttribute("style", "display: ")
    questions.setAttribute("style", "display:none")
    done.setAttribute("style", "display:none")
    scores.setAttribute("style", "display:none")

var counter = 0 //question array counter
var score;
var secondsLeft = 90
 //
 
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            countdown.textContent = secondsLeft; //Updates written seconds left in page
        } else {
            // Stops execution of action at set interval
            countdown.textContent = 0;
            // score = 0;
            clearInterval(timerInterval)
        }
    }, 1000);
}
//TODO: Add functionality to scoreLink which will result in showing "scores" div while hiding the rest. set attribute to change displays to hidden from initial.

scoreLink.addEventListener("click", function() {
    startQuiz.setAttribute("style", "display:none")
    scores.setAttribute("style", "display: ")
})

// TODO: Add timer to top right. Begin timer at 90 seconds and decrease by 1 every second. Wrong answers to the questions must result in a decrease by 15 seconds. Upon finishing the last question the timer will stop and be logged as the score



// TODO: Start Button in first page. Results in change of set attribute to hidden for "start-quiz" and "questions" becomes visible

startbtn.addEventListener("click", function() {
    startQuiz.setAttribute("style", "display:none")
    questions.setAttribute("style", "display: ")
    setTime();
    setQuestion();
})

// TODO: First question is displayed. With the click of the correct answer the next question and set of answers will be displayed along with a "correct!" notice appearing at the bottom of the box. 

var questionsArray = [
    {
        question: "This is the first question",
        a: "is",
        b: "this",
        c: "right",
        d: "?",
        correct: "right"
    },
    {
        question: "This is the Second question",
        a: "is",
        b: "this",
        c: "right",
        d: "?",
        correct: "this"
    },
    {
        question: "This is the Third question",
        a: "is",
        b: "this",
        c: "right",
        d: "?",
        correct: "?"
    },
    {
        question: "This is the Fourth question",
        a: "is",
        b: "this",
        c: "right",
        d: "?",
        correct: "is"
    },
    {
        question: "This is the Fifth question",
        a: "is",
        b: "this",
        c: "right",
        d: "?",
        correct: "this"
    }
]

function setQuestion() {
    h2El.textContent = questionsArray[counter].question;
    a1.textContent = questionsArray[counter].a;
    a2.textContent = questionsArray[counter].b;
    a3.textContent = questionsArray[counter].c;
    a4.textContent = questionsArray[counter].d;
}



//Create a function that will compare the correct answer to the answer in the pushed button and if they are the same it will progress to the next question else it will give a text content of wrong and decrease the timer

answers.addEventListener("click", function(event) {
    if (event.target.textContent === questionsArray[counter].correct){
        results.textContent = "Correct";
        counter++;
        if (counter === questionsArray.length) {
            counter = 0;
            questions.setAttribute("style", "display:none")
            done.setAttribute("style", "display: ")
        } else {
        setQuestion()
        }
    } else {
        results.textContent = "Wrong! Try Again"
    }
})




//TODO:With the click of the wrong answer a "wrong!" notice will appear at the bottom of the box and 15 seconds will be removed from the timer





// TODO: On the last question when the correct answer is clicked the "questions" section will be hidden and "done" will be made visible. The timer will stop and the number that is left will be set as the score. 




//TODO: If the timer makes it to zero at any question then the questions section will be hidden and the done section will appear with a score of 0. Will still ask for initials 






// TODO: Once initials are input the highscores section will become visible and the all done section will be hidden. Top 5 Scores from prior games will be displayed with the highest score appearing at the top and the lowest appearing at the bottom

subbtn.addEventListener("click", function() {
    done.setAttribute("style", "display:none")
    scores.setAttribute("style", "display: ")
})




//TODO: Add functionality where Go Back button restarts the game

backbtn.addEventListener("click", function() {
    startQuiz.setAttribute("style", "display: ")
    scores.setAttribute("style", "display:none") 
})


//TODO: Add functionality where clear highscore removes all high scores from the list





