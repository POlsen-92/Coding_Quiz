//Get Elements by ID
    var countdown = document.getElementById('countdown')
    var questions = document.getElementById('questions')
    var h2El = document.querySelector('h2')
    var a1 = document.getElementById('a1')
    var a2 = document.getElementById('a2')
    var a3 = document.getElementById('a3')
    var a4 = document.getElementById('a4')
    var score = document.getElementById('score')

//Sections of webpage
    var startQuiz = document.getElementById('start-quiz')
    var results = document.querySelector('.results')
    var answers = document.getElementById('answers')
    var done = document.getElementById('done')
    var scores = document.getElementById('scores')

//Access Button Elements
    var scorebtn = document.getElementById('scorebtn') 
    var startbtn = document.querySelector("#startbtn")
    var ansbtn = document.querySelector(".ansbtn")
    var subbtn = document.querySelector("#submitbtn")
    var backbtn = document.querySelector("#backbtn")
    var clearbtn = document.querySelector("#clearbtn")

    
    //High Score Ranks
    var hs1 = document.getElementById("hs1")
    var hs2 = document.getElementById("hs2")
    var hs3 = document.getElementById("hs3")
    var hs4 = document.getElementById("hs4")
    
    //Setting Needed Variables
    var counter = 0 //question array counter
    var secondsLeft = 90;
    var timerTrigger = true; 
    var savedScore;
    var savedInitials;
    var addScores;
    //

//Begin quiz with only the start quiz attribute appearing
        startQuiz.setAttribute("style", "display: ")
        questions.setAttribute("style", "display:none")
        done.setAttribute("style", "display:none")
        scores.setAttribute("style", "display:none")


var retrievedData = localStorage.getItem("highScore") //retrieves scores from local storage

if (retrievedData) { //ensures that prior scores are added to scoreboard after page reloads
    addScores = true;
}

//if there is data to retrieve it will be set to the highscorearray or the highscorearray will be empty
const highScoreArray = retrievedData ? JSON.parse(retrievedData) : [];  

//Sets scores from local storage to highscore list
renderHighScores() 


// TODO: Add timer to top right. Begin timer at 90 seconds and decrease by 1 every second. Wrong answers to the questions must result in a decrease by 15 seconds. Upon finishing the last question the timer will stop and be logged as the score
//TODO: If the timer makes it to zero at any question then the questions section will be hidden and the done section will appear with a score of 0. Will still ask for initials 

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            countdown.textContent = secondsLeft; //Updates written seconds left in page
            if (timerTrigger === false) {
                countdown.textContent = secondsLeft;
                score.textContent = secondsLeft;
                clearInterval(timerInterval)
            }
        } else {
            // Stops execution of action at set interval
            timerTrigger = false;
            secondsLeft = 0;
            countdown.textContent = secondsLeft;
            score.textContent = secondsLeft;
            clearInterval(timerInterval)
            questions.setAttribute("style", "display:none")
            questions.setAttribute("style", "display:none")
            done.setAttribute("style", "display:none")
            done.setAttribute("style", "display: ")
        }
    }, 1000);
}


//TODO: Add functionality to scorebtn which will result in showing "scores" div while hiding the rest. set attribute to change displays to hidden from initial.

scorebtn.addEventListener("click", function() {
    timerTrigger = false;
    startQuiz.setAttribute("style", "display:none")
    questions.setAttribute("style", "display:none")
    done.setAttribute("style", "display:none")
    scores.setAttribute("style", "display: ")
})


// TODO: Start Button in first page. Results in change of set attribute to hidden for "start-quiz" and "questions" becomes visible

startbtn.addEventListener("click", function() {
    startQuiz.setAttribute("style", "display:none")
    questions.setAttribute("style", "display: ")
    secondsLeft = 90;
    setTime();
    setQuestion();
})


// TODO: First question is displayed. With the click of the correct answer the next question and set of answers will be displayed along with a "correct!" notice appearing at the bottom of the box. 

var questionsArray = [
    {
        question: "Multiple Inheritance means",
        a: "one class inheriting from more super classes",
        b: "more classes inheriting from one super class",
        c: "more classes inheriting from more super classes",
        d: "None of the above",
        correct: "one class inheriting from more super classes"
    },
    {
        question: "Which statement is not true in java language?",
        a: "A public member of a class can be accessed in all the packages.",
        b: "A private member of a class cannot be accessed by the methods of the same class.",
        c: "A private member of a class cannot be accessed from its derived class.",
        d: "A protected member of a class can be accessed from its derived class.",
        correct: "A private member of a class cannot be accessed by the methods of the same class."
    },
    {
        question: "To prevent any method from overriding, we declare the method as,",
        a: "static",
        b: "const",
        c: "final",
        d: "abstract",
        correct: "final"
    },
    {
        question: "The fields in an interface are implicitly specified as",
        a: "static only",
        b: "protected",
        c: "private",
        d: "both static and final",
        correct: "both static and final"
    },
    {
        question: "Which of the following is not true?",
        a: "An interface can extend another interface.",
        b: "A class which is implementing an interface must implement all the methods of the interface.",
        c: "An interface can implement another interface.",
        d: "An interface is a solution for multiple inheritance in java.",
        correct: "An interface can implement another interface."
    }
]

//Applies questionsArray to the questions in the quiz
function setQuestion() {
    h2El.textContent = questionsArray[counter].question;
    a1.textContent = questionsArray[counter].a;
    a2.textContent = questionsArray[counter].b;
    a3.textContent = questionsArray[counter].c;
    a4.textContent = questionsArray[counter].d;
}


//Create a function that will compare the correct answer to the answer in the pushed button and if they are the same it will progress to the next question else it will give a text content of wrong and decrease the timer

// TODO: On the last question when the correct answer is clicked the "questions" section will be hidden and "done" will be made visible. The timer will stop and the number that is left will be set as the score. 

answers.addEventListener("click", function(event) {
    if (event.target.textContent === questionsArray[counter].correct){
        results.textContent = "Correct";
        counter++;
        if (counter === questionsArray.length) {
            timerTrigger = false;
            counter = 0;
            questions.setAttribute("style", "display:none")
            done.setAttribute("style", "display: ")
            console.log(timerTrigger)
        } else {
        setQuestion()
        }
    } else {//TODO:With the click of the wrong answer a "wrong!" notice will appear at the bottom of the box and 15 seconds will be removed from the timer
        results.textContent = "Wrong! Try Again"
        secondsLeft -= 15;
    }
})


// TODO: Once initials are input the highscores section will become visible and the all done section will be hidden. Top 5 Scores from prior games will be displayed with the highest score appearing at the top and the lowest appearing at the bottom. Scores with initials will be added to local storage via the highScoreArray and then pulled from local storage into the retrievedHighScore array using the renderHighScores function

console.log(highScoreArray)

JSON.stringify(highScoreArray)

var highScore = (savedScore, savedInitials) => {
    return {
        savedScore: savedScore,
        savedInitials: savedInitials
    }
}

subbtn.addEventListener("click", function(event) {
    event.preventDefault()
    addScores = true;

    var initials = document.getElementById('initials').value;
    var highScore = {
        savedScore: secondsLeft,
        savedInitials: initials.trim()
    }

    highScoreArray.push(highScore)
    localStorage.setItem("highScore", JSON.stringify(highScoreArray));
    done.setAttribute("style", "display:none")
    scores.setAttribute("style", "display: ")
    retrievedData = localStorage.getItem("highScore")
    renderHighScores()
})

//TODO: Pull Array from local Storage, rank highscores and present in list

function renderHighScores() {
    if (addScores) {
        var retrievedHighScore = JSON.parse(retrievedData)
        retrievedHighScore.sort((a,b) => b.savedScore - a.savedScore)
        if (retrievedHighScore[0]) {
            hs1.textContent = `${retrievedHighScore[0].savedInitials} - ${retrievedHighScore[0].savedScore}`
        }
        if (retrievedHighScore[1]) {
            hs2.textContent = `${retrievedHighScore[1].savedInitials} - ${retrievedHighScore[1].savedScore}`
        }
        if (retrievedHighScore[2]) {
            hs3.textContent = `${retrievedHighScore[2].savedInitials} - ${retrievedHighScore[2].savedScore}`
        }
        if (retrievedHighScore[3]) {
            hs4.textContent = `${retrievedHighScore[3].savedInitials} - ${retrievedHighScore[3].savedScore}`
        }
    } else {
        hs1.textContent = ' ';
        hs2.textContent = ' ';
        hs3.textContent = ' ';
        hs4.textContent = ' ';
    }
}


//TODO: Add functionality where Go Back button restarts the game

backbtn.addEventListener("click", function() {
    startQuiz.setAttribute("style", "display: ")
    scores.setAttribute("style", "display:none") 
    secondsLeft = 90;
    countdown.textContent = "";
    timerTrigger = true;
    document.getElementById('initials').value = '';
})


//TODO: Add functionality where clear highscore removes all high scores from the list

clearbtn.addEventListener("click", function() {
    localStorage.clear();
    startQuiz.setAttribute("style", "display: ")
    scores.setAttribute("style", "display:none") 
    secondsLeft = 90;
    countdown.textContent = "";
    timerTrigger = true;
    addScores = false;
    renderHighScores();
    document.getElementById('initials').value = '';
})


