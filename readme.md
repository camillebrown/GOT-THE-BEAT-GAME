# General Assembly - Project 1

#### Project Name: Got the Beat Trivia Game

## Project Overview
This is my first project assignment which included the creation of an accessible game. The below includes explanations of the technologies used, the approach taken, timeline of each steps completion, along with an explanation of the differnt components of the game.

### Description
This will be a trivia game where the user will answer 30 multiple choice questions across 3 rounds. Each round gets harder than the previous so the points per round increases as you move further along in the game. Between each round, the user sees their score for the round along with rules/instructions for the upcoming round. Once the questions have all been answered, the user finds out their final score. The highest score is 900 points.

###Project Schedule table

Project Begin Date: Tuesday, Sept 22

Day | Deliverable
-----------------|----------------------------------------
Day 1: Tuesday   | Game Idea, Wireframe, Plan Outline
Day 2: Wednesday | CSS Grid Framework, HTML Framework, Introductory CSS
Day 3: Friday    | JS Coding Round 1, Working Prototype, Editing, Testing
Day 4: Tuesday   | JS Coding Round 2, Working Prototype, Editing, Testing
Day 5: Wednesday | JS Coding Round 3, Working Prototype, Editing, Testing
Day 6: Friday    | Game Completed, CSS Finalized, ReadMe File Completed
Day 7: Saturday  | Presentation


### Game Components
	*Static Game page with Start Modal Overlay
	*Game Initialization
	*Round One
    *End Round One Modal Overlay
	*Round Two
    *End Round Two Modal Overlay
    *Round Three
	*Game Completion + Final Score
	*Restart/Play Again Logic

### Technologies Being Used:
HTML and CSS Grid for the website and Javascript DOM Manipulation for functional game play.  

Unsolved Problems: I had issues implementing the timer logic to reset after every question and activate a message via DOM Manipulation or overlay display. In order to complete the project on time, I decided to remove this but I plan to go back and add this in to make sure I can have harder game play. I was able to randomize the questions but I will also be going back to try randomizing the answers to each question so they're not in the same position each game.

Explanation to Solve the Problems:  Using setInterval in javascript to create the timer is the best option. I can place an image or video in the background of a div by using HTML and CSS.  The answer fields can be styled using CSS by having radio buttons and changing the color on hover and click. I could store at least 20 questions in the array and then use Math.random for the array length to churn out random questions. I can create a chat scroll using HTML, CSS and Javascript as well.

### Approach Taken
I started with the Wireframe & CSS Framework so I could visualize the game and stabilize positioning of html components for each JS manipulation. From there, I began using JS DOM Manipulation to create an array of questions for round one and build out the functionality for answering questions both correctly and incorrectly. Once this was created with a working prototype, I duplicated this process for rounds 2 and 3 with changes to scoring and question group. Finally I updated the CSS to be presentable and create a clear theme.

#### Game Logic
1. Start the game with a message displaying the game instructions
    * Begin Round 1 with score at 0
    * Randomly populate question from an array
    * Display question player is on
2. Game Play
    * Shuffle through questions for each round
    * Correct answer populates, correct answer div overlay
    * Incorrect answer populates, incorrect answer div overlay
    * Increment score according to each round's rules 
    * Display/update player's current score after each turn & round
3. Game Completion  
    * Display overlay with end game message and final score
    * Create option to play the game again

### MVP
Submitted a running version of game with no modal pop ups for correct and incorrect answers. The questions, answers, buttons and prompts were all created with Javascript.

### Post MVP
Submitted a full running version of the game including all 3 rounds, varying questions, score incrementing, modal overlays and effects, and clean CSS design.

### Deployment
This project is available at: https://camillebrown.github.io/Project1/.
