# 04 Web APIs: Code Quiz

## Work Description
<pre>

128. Within the function I used a do..while loop in order to make sure the input was a number and between the

  For this project the goal was to create an interactive webpage which hosted a coding quiz with 5 questions.
For each run of the quiz the user is given 90 seconds which appears at the top right of the screen. Once the
user clicks the 'Start Quiz' button the first question pops up and the countdown begins at the top right. If
the user gets an answer wrong a line of text will pop up below saying "Wrong! Try Again" and the countdown
will decrease by 15 seconds.

  The next question will not appear until the person chooses the right answer. I felt that by requiring the
user to get the correct answer to continue we would get a wider variety of scores. It creates a bit higher
stakes of a game as this means reaching the end of the quiz could actually be difficult depending on the
questions.

  Once all 5 questions are answered or if they run out of time before finishing the questions the screen will
change to show their score and allow them to input their initials. The time left on the clock is what is going to be their score and once they hit submit they will see a list of the top 4 highscores from their browser.
The buttons at the bottom give them the opportunity to return to the beginning of the quiz or the clear the
high score which will also return them to the beginning of the quiz.

  At any time in the game the user can use the "View HighScore" button at the top left to stop the clock and
view the list of highscores however they would be unable to return to their quiz if they had started one.

</pre>
## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## ScreenShot of my Program

The following photo shows the webpage in full however only portions of the screen will show in the actual webpage:

![ScreenShot of My Program](./Assets/screenshot.png)

https://polsen-92.github.io/Coding_Quiz/