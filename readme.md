# App Title: Got the Beat!

### App Demo: https://camillebrown.github.io/GOT-THE-BEAT-GAME/.

---

## Concept:

This will be a trivia game where the user will answer 30 multiple choice questions across 3 rounds. Each round gets harder than the previous so the points per round increases as you move further along in the game. Between each round, the user sees their score for the round along with rules/instructions for the upcoming round. Once the questions have all been answered, the user finds out their final score. The highest score is 900 points.

## Technologies Used:

* HTML
* CSS
* JavaScript
* FontAwesome Icon Gallery

##### Credits:

    Fontawesome.com
    mockflow.com
    grid.layoutit.com

## Approach:

#### Overview

#### Game Components
	*Static Game page with Start Modal Overlay
	*Game Initialization
	*Round One
    *End Round One Modal Overlay
	*Round Two
    *End Round Two Modal Overlay
    *Round Three
	*Game Completion + Final Score
	*Restart/Play Again Logic

#### Wireframe

<img src="https://res.cloudinary.com/davhuurp0/image/upload/v1601737000/Screen_Shot_2020-10-03_at_7.53.35_AM_fwbuxa.png" width="80%" >

Color Pallet:

```
    #f7f7f7
    #3cdaca
    #2E86C1
    #3fcece
    #000000
    #ffffff
```

#### User stories

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

#### Development Plan

I started with the Wireframe & CSS Framework so I could visualize the game and stabilize positioning of html components for each JS manipulation. From there, I began using JS DOM Manipulation to create an array of questions for round one and build out the functionality for answering questions both correctly and incorrectly. Once this was created with a working prototype, I duplicated this process for rounds 2 and 3 with changes to scoring and question group. Finally I updated the CSS to be presentable and create a clear theme.

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

#### MVP

* MVP One: Basic HTML/CSS Framework
* MVP Two: Round One Logic Working
    * Correct and incorrect answer populates in the DOM
* MVP Three: Round One Score Keeping Working
* MVP Four: End Game Logic Working

#### Stretch Goals

* Stretch Goals One: Modals created for answer results and round transition headlines
* Stretch Goals Two: Round 2 & 3 Logic Working
* Stretch Goals Three: Upgraded CSS
* Stretch Goals Four: Add in a countdown timer (not completed)

## Challenges:

I had issues implementing the logic to navigate between rounds of the game and to adjust the group of questions for each round. To fix, I wrote out the user story again for this process and pseudocoded the user story. Then I broke down the conditionals before coding within the conditionals in order to understand the basic logic. I also explained the process to a friend to ensure it made sense to a user before jumping into the code. This made the process to be faster and easier to code.

### App Demo: https://camillebrown.github.io/GOT-THE-BEAT-GAME/.