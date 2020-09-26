<!-- HTML/CSS Section -->

1. Start with creating the css framework for the game
2. Create a section for the title
3. Create a section for the current round
4. Create a section for the current score and previous round scores
5. Create a section with the option to restart the game

<!-- Game Outline -->
<!-- V2 Preference: Start on a different page that explains the rules and has a start button. When 'Start' is clicked, navigate to the game page -->

1. There are 10 questions per round
2. 20 seconds to answer each question (may need to shorten if too easy)
3. First round includes multiple choice questions to guess which artist sang the song (1 points per question)
<!-- V2 Preferences: Try to build out 2 additonal rounds if time permits -->
4. Second round includes 'typing' game to finish the lyric (3 points per question)
5. Third round includes general music trivia with varying types of questions - true/false, multiple choice, type the answer, etc (5 points per question)
    <!-- V2 Preference: scan through questions with a slowing down interval to get a random question  -->
6. If the correct answer is selected, change the choice div that was clicked to green
7. If the incorrect answer is selected, change the choice div that was clicked to red
8. Once a question has been asked remove it from the remaining available questions (maybe create a new array or remove it from the existing array of questions)
9. Go through each question, updating the score by 1, 3 or 5 if correct answer is selected
10. Complete the round and show the player's score before moving to the next set of questions
11. After all 3 rounds, show player's final score
 <!-- V2 Preference: Have a list of top scores - add each players's final score to the list (maybe make an array and sort after a game is over to have highest 5 scores show) -->


<!-- Game Play -->
1. Start the score at 0
2. Start the round at 1
3. Start the available questions at 10
4. Show what question the player is on (ie. Question 3 of 10)
5. Create an interval for each round of points (ie. max points for round 1 = 1)
6. If the correct answer is selected, change the choice div that was clicked to green and add to score based on round's max point interval
7. Lower available questions by 1
8. If the incorrect answer is selected, change the choice div that was clicked to red, show the correct choice in green and do not change score
9. Lower available questions by 1
10. If an answer has been selected by the player, prevent the player from making another choice
11. If an answer has been selected before time runs out, stop the clock
12. SetTimeout before moving on to the next question (reset the clock)
13. Show player their score at the end of each round
