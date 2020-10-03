//Determine all of the variables you will need in the game

let score = 0
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#scoring')
const questionNum = document.querySelector('.question-number')
const gameDIV = document.querySelector('#game')
const modal = document.querySelector('.modal-overlay')
let modalClose = document.querySelector('.modal-close')
let iconSymbol = document.querySelector('.icon-symbol')
let modalTitle = document.querySelector('.modal-title')
let modalText = document.querySelector('.modal-content')
let modalEnd = document.querySelector('.modal-end')
let roundTitle = document.querySelector('.round-title')


let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestionsR1 = []
let availableQuestionsR2 = []
let availableQuestionsR3 = []
const score_pointsR1 = 10
const score_pointsR2 = 30
const score_pointsR3 = 50
let max_questions = 10
let currentRound = 1
let roundStarted = false


//Start out with your questions
// Make an array of objects with all of the questions, answer options and the correct answer


//==============ROUND 1: GUESS THE ARTIST===========//
const round1Qs = [
    {
        question:'Which artist performed the song \n "Californication"?',
        option1: 'Red Hot Chili Peppers',
        option2: 'Foo Fighters',
        option3: 'AC/DC',
        option4: 'The Ramones',
        correctAnswer: 1,
    },
    {
        question:'Which artist performed the song \n "Stir Fry"?',
        option1: 'Trippie Red',
        option2: 'Future',
        option3: 'Migos',
        option4: '2 Chainz',
        correctAnswer: 3,
    },
    {
        question:'Which artist performed the song \n "California Love"?',
        option1: 'Nas',
        option2: 'Biggie Smalls',
        option3: 'Jay-Z',
        option4: 'Tupac',
        correctAnswer: 4,
    },
    {
        question:'Which artist performed the song \n "Jolene"?',
        option1: 'Carrie Underwood',
        option2: 'Shania Twain',
        option3: 'Dolly Parton',
        option4: 'Kelly Clarkson',
        correctAnswer: 3,
    },
    {
        question:'Which artist performed the song \n "U Don\'t Have to Call"?',
        option1: 'Aaliyah',
        option2: 'Usher',
        option3: 'Beyoncé',
        option4: 'Chris Brown',
        correctAnswer: 2,
    },
    {
        question:'Which artist performed the song \n "Country Girl(Shake It For Me)"?',
        option1: 'Keith Urban',
        option2: 'Brad Paisley',
        option3: 'Blake Shelton',
        option4: 'Luke Bryan',
        correctAnswer: 4,
    },
    {
        question:'Which artist performed the song \n "No Scrubs"?',
        option1: 'TLC',
        option2: 'Destiny\'s Child',
        option3: 'SZA',
        option4: 'Rihanna',
        correctAnswer: 1,
    },
    {
        question:'Which artist performed the song \n "Cry Me A River"?',
        option1: 'Robin Thicke',
        option2: 'Justin Timberlake',
        option3: 'Ed Sheeran',
        option4: 'Sam Smith',
        correctAnswer: 2,
    },
    {
        question:'Which artist performed the song \n"Thank U, Next"?',
        option1: 'Bebe Rexha',
        option2: 'Dua Lipa',
        option3: 'Billie Eilish',
        option4: 'Ariana Grande',
        correctAnswer: 4,
    },
    {
        question:'Which artist performed the song \n "Stairway to Heaven"?',
        option1: 'Pink Floyd',
        option2: 'Rolling Stones',
        option3: 'Led Zeppelin',
        option4: 'Metallica',
        correctAnswer: 3,
    }
]

const round2Qs = [
    {
        artist: 'Lizzo',
        question:'"Why are men great til they __________?"',
        option1: 'forget how to be great',
        option2: 'gotta be great',
        option3: 'gotta act great',
        option4: 'try to regulate',
        correctAnswer: 2,
    },
    {
        artist: 'Diana Ross',
        question:'"I\'m coming out, I want the world to know __________"',
        option1: 'Got to let it show',
        option2: 'That I am on a roll',
        option3: 'That it\'s my time to go',
        option4: 'Got to take it slow',
        correctAnswer: 1,
    },
    {
        artist: 'Queen',
        question:'"Are you gonna let it all hang out? Fat bottomed girls __________"',
        option1: 'You are the reason while I smile',
        option2: 'You make my whole wide world go \'round',
        option3: 'You turn my whole world upside down',
        option4: 'You make the rockin\' world go \'round',
        correctAnswer: 4,
    },
    {
        artist: 'Drake',
        question:'"You used to call me on my cell phone __________"',
        option1: 'Late after I got back home',
        option2: 'Now you never call at all',
        option3: 'Late night when you need my love',
        option4: 'Every day when I was home',
        correctAnswer: 3,
    },
    {
        artist: 'Katy Perry',
        question:'"You just gotta ignite the light, And let it shine __________"',
        option1: 'Just one more night',
        option2: 'Just own the night',
        option3: 'Just take your time',
        option4: 'Just come alive',
        correctAnswer: 2,
    },
    {
        artist: 'Prince',
        question:'"Maybe I\'m just like my father, too bold. Maybe you\'re just like my mother __________"',
        option1: 'She\'s never told a lie',
        option2: 'She\s always on my mind',
        option3: 'She\s always good and kind',
        option4: 'She\'s never satisfied',
        correctAnswer: 4,
    },
    {
        artist: 'Billy Joel',
        question:'"Well, we\'re all in the mood for a melody __________"',
        option1: 'And you\'ve got us feelin\' alright',
        option2: 'And you\'ve got us cryin\' tonight',
        option3: 'And you\'ve got us singin\' alright',
        option4: 'And you\'ve got us lovin\' tonight',
        correctAnswer: 1,
    },
    {
        artist: 'Erykah Badu',
        question:'"So can I get a window seat, __________"',
        option1: 'I want to be able to see',
        option2: 'Don\'t want nobody next to me',
        option3: 'It is the only way to sleep',
        option4: 'Don\'t want to have to squeeze',
        correctAnswer: 2,
    },
    {
        artist: 'The Beatles',
        question:'"Yesterday, all my troubles seemed so far away __________"',
        option1: 'Now I can\'t find the words to say',
        option2: 'Now they just won\'t go away',
        option3: 'Now I don\'t know what to say',
        option4: 'Now it looks as though they\'re here to stay',
        correctAnswer: 4,
    },
    {
        artist: 'Garth Brooks',
        question:'"Cause I\'ve got friends in low places __________"',
        option1: 'Where the beer is wasted',
        option2: 'Where the bourbon drowns',
        option3: 'Where the whiskey drowns',
        option4: 'Think I\'ll slip on down ',
        correctAnswer: 3,
    }
]

const round3Qs = [
    {
        question:'Which band\'s debut album was entitled "Appetite for Destruction"?',
        option1: 'Aerosmith',
        option2: 'Guns N\' Roses',
        option3: 'Nirvana',
        option4: 'Iron Maiden',
        correctAnswer: 2,
    },
    {
        question:'What year did MTV make its debut??',
        option1: '1981',
        option2: '1989',
        option3: '1980',
        option4: '1995',
        correctAnswer: 1,
    },
    {
        question:'Who was the first female singer to be inducted into the Rock and Roll Hall of Fame?',
        option1: 'Etta James',
        option2: 'Janis Joplin',
        option3: 'Gladys Knight',
        option4: 'Aretha Franklin',
        correctAnswer: 4,
    },
    {
        question:'The 2017 album “DAMN.” was released by which artist?',
        option1: 'J Cole',
        option2: 'Lil Wayne',
        option3: 'Kendrick Lamar',
        option4: 'Travis Scott',
        correctAnswer: 3,
    },
    {
        question:'What band has Patrick Stump as lead vocalist and rhythm guitarist?',
        option1: 'My Chemical Romance',
        option2: 'Fall Out Boy',
        option3: 'Green Day',
        option4: 'Panic! At the Disco',
        correctAnswer: 2,
    },
    {
        question:'Which tireless country singer played the most live shows in the 2000s?',
        option1: 'Miranda Lambert',
        option2: 'Eric Church',
        option3: 'Tim McGraw',
        option4: 'Kenny Chesney',
        correctAnswer: 4,
    },
    {
        question:'Which singer featured on Mark Ronson’s 2014 number one song “Uptown Funk”?',
        option1: 'Bruno Mars',
        option2: 'Adam Levine',
        option3: 'The Weeknd',
        option4: 'Shawn Mendes',
        correctAnswer: 1,
    },
    {
        question:'Released in 1998 and becoming a world-wide smash hit, what was Britney’s Spears debut single?',
        option1: 'Lucky',
        option2: 'Baby, One More Time',
        option3: '(You Drive Me) Crazy',
        option4: 'Oops!... I Did It Again',
        correctAnswer: 2,
    },
    {
        question:'Which single by Rihanna stayed at the top of the Billboard Hot 100 for the last 8 weeks of 2011?',
        option1: 'Stay (ft. Mikky Ekko)',
        option2: 'What\'s My Name',
        option3: 'Diamonds',
        option4: 'We Found Love',
        correctAnswer: 4,
    },
    {
        question:'In 2004, who won the Record of the Year Grammy for "Clocks"?',
        option1: 'Imagine Dragons',
        option2: 'U2',
        option3: 'Coldplay',
        option4: 'The Chainsmokers ',
        correctAnswer: 3,
    }
]

//Create a function to start  Round 1 of the game
const startGame = () => {
    questionCounter = 0
    score = 0
    getNewQuestion()
}


//Get a new questions for the round 1Qs after each turn
const getNewQuestion = () => {
    if (currentRound === 1 && roundStarted === false) {
        availableQuestions = [...round1Qs]
        roundTitle.innerText = 'Round 1: Guess the Artist'
        questionCounter++
        //Show the user what question they are on
        questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
        //Get a random question from the array
        const questionIndex = Math.floor(Math.random()* availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex]
        question.innerText = currentQuestion.question
        //remove the question from the array in order to not have it repeat
        availableQuestions.splice(questionIndex, 1)
        //For each choice identify the number and populate the choices in each of the containers
        choices.forEach(choice =>{
            let choiceID = parseInt(choice.id)
            if(choiceID === 1){
                choice.innerText = currentQuestion.option1
            }else if(choiceID === 2){
                choice.innerText = currentQuestion.option2
            }else if(choiceID === 3){
                choice.innerText = currentQuestion.option3
            }else if(choiceID === 4){
                choice.innerText = currentQuestion.option4
            }
        })
        //add an event listener to each choice to check the answer
        choices.forEach(choice =>{
            choice.addEventListener('click', checkAnswer)
        })
        acceptingAnswers = true
        roundStarted = true
    } else if (currentRound === 1 && roundStarted === true) {
        availableQuestions = availableQuestions
        if (availableQuestions.length === 0 || questionCounter > max_questions) {
            currentRound = 2
            roundStarted = false
            roundTitle.innerText = 'Round 2: Finish the Lyrics'
            setTimeout(()=>{
                modal.style.visibility = 'visible'
                modal.style.opacity = '1'
                iconSymbol.className = 'far fa-edit'
                iconSymbol.style.color = '#009ACD'
                modalTitle.innerText = `ROUND TWO!`
                modalTitle.style.color = '#009ACD'
                modalText.innerText = `You have ${score} points. \n This round you will be finishing the lyrics of popular songs. You get 30 points for each correct answer.`
                modalClose.innerText = 'Let\'s Go!'
                modalClose.addEventListener('click', ()=>{
                    modal.style.visibility = 'hidden'
                    modal.style.opacity = '0'
                    // getNewQuestion()
                },13000)
            })
        } else {
            roundTitle.innerText = 'Round 1: Guess the Artist'
            questionCounter++
            //Show the user what question they are on
            questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
            //Get a random question from the array
            const questionIndex = Math.floor(Math.random()* availableQuestions.length)
            currentQuestion = availableQuestions[questionIndex]
            question.innerText = currentQuestion.question
            //remove the question from the array in order to not have it repeat
            availableQuestions.splice(questionIndex, 1)
            //For each choice identify the number and populate the choices in each of the containers
            choices.forEach(choice =>{
                let choiceID = parseInt(choice.id)
                if(choiceID === 1){
                    choice.innerText = currentQuestion.option1
                }else if(choiceID === 2){
                    choice.innerText = currentQuestion.option2
                }else if(choiceID === 3){
                    choice.innerText = currentQuestion.option3
                }else if(choiceID === 4){
                    choice.innerText = currentQuestion.option4
                }
            })
            //add an event listener to each choice to check the answer
            choices.forEach(choice =>{
                choice.addEventListener('click', checkAnswer)
            })
            acceptingAnswers = true
            roundStarted = true
        }
    }
    if (currentRound === 2 && roundStarted === false){
        availableQuestions = [...round2Qs]
        max_questions = 20
        roundTitle.innerText = 'Round 2: Finish the Lyrics'
        questionCounter++
        //Show the user what question they are on
        questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
        //Get a random question from the array
        const questionIndex = Math.floor(Math.random()* availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex]
        question.innerText = currentQuestion.question
        let artist = document.createElement('h3')
        artist.style.marginBottom = '10px'
        artist.innerText = `${currentQuestion.artist} once said...`
        artist.classList.add('artist')
        gameDIV.insertBefore(artist, question);
        //For each choice identify the number and populate the choices in each of the containers
        choices.forEach(choice =>{
            let choiceID = parseInt(choice.id)
            if(choiceID === 1){
                choice.innerText = currentQuestion.option1
            }else if(choiceID === 2){
                choice.innerText = currentQuestion.option2
            }else if(choiceID === 3){
                choice.innerText = currentQuestion.option3
            }else if(choiceID === 4){
                choice.innerText = currentQuestion.option4
            }
        })
        //add an event listener to each choice to check the answer
        choices.forEach(choice =>{
            choice.addEventListener('click', checkAnswer)
        })
        //remove the question from the array in order to not have it repeat
        availableQuestions.splice(questionIndex, 1)
        acceptingAnswers = true
        roundStarted = true
    } else if (currentRound === 2 && roundStarted === true) {
        availableQuestions = availableQuestions
        max_questions = 20
        if (availableQuestions.length === 0 || questionCounter > max_questions) {
            currentRound = 3
            roundStarted = false
            document.querySelector('.artist').remove()
            setTimeout(()=>{
                modal.style.visibility = 'visible'
                modal.style.opacity = '1'
                iconSymbol.className = 'far fa-question-circle'
                iconSymbol.style.color = '#009ACD'
                modalTitle.innerText = `ROUND THREE!`
                modalTitle.style.color = '#009ACD'
                modalText.innerText = `GREAT JOB! You have ${score} points. \n This round you will be answering music trivia questions. You get 50 points for each correct answer.`
                modalClose.innerText = 'Let\'s Go!'
                modalClose.addEventListener('click', ()=>{
                modal.style.visibility = 'hidden'
                modal.style.opacity = '0'
                },13000)
            })
        } else {
            questionCounter++
            roundTitle.innerText = 'Round 2: Finish the Lyrics'
            //Show the user what question they are on
            questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
            //Get a random question from the array
            const questionIndex = Math.floor(Math.random()* availableQuestions.length)
            currentQuestion = availableQuestions[questionIndex]
            question.innerText = currentQuestion.question
            let artist = document.querySelector('.artist')
            artist.innerText = `${currentQuestion.artist} once said...`
            gameDIV.insertBefore(artist, question);
            //remove the question from the array in order to not have it repeat
            availableQuestions.splice(questionIndex, 1)
            //For each choice identify the number and populate the choices in each of the containers
            choices.forEach(choice =>{
                let choiceID = parseInt(choice.id)
                if(choiceID === 1){
                    choice.innerText = currentQuestion.option1
                }else if(choiceID === 2){
                    choice.innerText = currentQuestion.option2
                }else if(choiceID === 3){
                    choice.innerText = currentQuestion.option3
                }else if(choiceID === 4){
                    choice.innerText = currentQuestion.option4
                }
            })
            //add an event listener to each choice to check the answer
            choices.forEach(choice =>{
                choice.addEventListener('click', checkAnswer)
            })
            acceptingAnswers = true
            roundStarted = true
        }
    }  
    if (currentRound === 3 && roundStarted === false){
        availableQuestions = [...round3Qs]
        console.log(availableQuestions)
        max_questions = 30
        roundTitle.innerText = 'Round 3: Music Trivia'
        questionCounter++
        //Show the user what question they are on
        questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
        //Get a random question from the array
        const questionIndex = Math.floor(Math.random()* availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex]
        question.innerText = currentQuestion.question
        //For each choice identify the number and populate the choices in each of the containers
        choices.forEach(choice =>{
            let choiceID = parseInt(choice.id)
            if(choiceID === 1){
                choice.innerText = currentQuestion.option1
            }else if(choiceID === 2){
                choice.innerText = currentQuestion.option2
            }else if(choiceID === 3){
                choice.innerText = currentQuestion.option3
            }else if(choiceID === 4){
                choice.innerText = currentQuestion.option4
            }
        })
        //add an event listener to each choice to check the answer
        choices.forEach(choice =>{
            choice.addEventListener('click', checkAnswer)
        })
        //remove the question from the array in order to not have it repeat
        availableQuestions.splice(questionIndex, 1)
        acceptingAnswers = true
        roundStarted = true
    } else if (currentRound === 3 && roundStarted === true) {
        availableQuestions = availableQuestions
        console.log(availableQuestions)
        max_questions = 30
        if (availableQuestions.length === 0 || questionCounter > max_questions) {
            stopGame()
        } else {
            questionCounter++
            roundTitle.innerText = 'Round 3: Music Trivia'
            //Show the user what question they are on
            questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
            //Get a random question from the array
            const questionIndex = Math.floor(Math.random()* availableQuestions.length)
            currentQuestion = availableQuestions[questionIndex]
            question.innerText = currentQuestion.question
            //remove the question from the array in order to not have it repeat
            availableQuestions.splice(questionIndex, 1)
            //For each choice identify the number and populate the choices in each of the containers
            choices.forEach(choice =>{
                let choiceID = parseInt(choice.id)
                if(choiceID === 1){
                    choice.innerText = currentQuestion.option1
                }else if(choiceID === 2){
                    choice.innerText = currentQuestion.option2
                }else if(choiceID === 3){
                    choice.innerText = currentQuestion.option3
                }else if(choiceID === 4){
                    choice.innerText = currentQuestion.option4
                }
            })
            //add an event listener to each choice to check the answer
            choices.forEach(choice =>{
                choice.addEventListener('click', checkAnswer)
            })
            acceptingAnswers = true
            roundStarted = true
        }
    }
}

//Create a function to check the answer
const checkAnswer = () => {
    //if answer already selected break
    if(!acceptingAnswers) return
    acceptingAnswers === false
    //prevent new answers from being clicked
    //grab the target of the click (which answer)
    const selectedChoice = event.target
    let selectedChoiceID = parseInt(selectedChoice.id)
    const correctAnswer = currentQuestion.correctAnswer
    //if it's correct run the correct function to populate correct modal
    if(selectedChoiceID === correctAnswer) {
        correct()
        if(currentRound === 1){
            score += score_pointsR1  
        } else if (currentRound === 2){
            score += score_pointsR2
        } else if (currentRound === 3){
            score += score_pointsR3
        }
        scoreText.innerText = score
        return
    //otherwise run the incorrect function to populate incorrect    
    } else {
        incorrect()
    }
}


const correct = () => {
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
    iconSymbol.className = 'far fa-check-circle'
    iconSymbol.style.color = '#32CD32'
    modalTitle.innerText = 'CORRECT'
    modalTitle.style.color = '#32CD32'
    modalText.innerText = 'Great Job! You are right. \n Let\'s go to the next question.'
    modalClose.addEventListener('click', ()=>{
        modal.style.visibility = 'hidden'
        modal.style.opacity = '0'
    })
    localStorage.setItem('mostRecentScore', score)
    setTimeout(getNewQuestion,1500)
}


const incorrect = () => {
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
    iconSymbol.className = 'far fa-times-circle'
    iconSymbol.style.color = 'red'
    modalTitle.innerText = 'INCORRECT'
    modalTitle.style.color = 'red'
    modalText.innerText = 'Better luck next time. \n Let\'s go to the next question.'
    modalClose.addEventListener('click', ()=>{
        modal.style.visibility = 'hidden'
        modal.style.opacity = '0'
    })
    setTimeout(getNewQuestion,1000)
}

startGame()


const stopGame =  () => {
    localStorage.setItem('mostRecentScore', score)
    const finalScore = document.querySelector('#finalscore')
    const mostRecentScore = JSON.parse(localStorage.getItem('mostRecentScore'))
    finalScore.innerText = mostRecentScore
    modalEnd.style.visibility = 'visible'
    modalEnd.style.opacity = '1'
}


// Track any event listeners
// Allow user to end the game early using the end game button
let endGameBtn = document.querySelector('#end')
endGameBtn.addEventListener('click', stopGame)


// Allow user to restart the game using the restart button
let startGameBtn = document.querySelector('#start')
startGameBtn.addEventListener('click', ()=>{
    window.location = 'index.html'
})