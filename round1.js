//Determine all of the variables you will need in the game

let score = 0
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#scoring')
const questionNum = document.querySelector('.question-number')
const gameDIV = document.querySelector('.game')
let correctAnswerDIV = document.querySelector('.correct')
let incorrectAnswerDIV = document.querySelector('.incorrect')

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []
const score_pointsR1 = 1
const max_questions = 10

document.addEventListener('DOMContentLoaded', () => {
    //might need to change this to when start button is clicked
    //begin the question spin

});

question.addEventListener('transitionend', ()=>{
    //begin the clock countdown for the question to be answered
})


//Start out with your questions
// Make an array of objects with all of the questions, answer options and the correct answer
//==============ROUND 1: GUESS THE ARTIST===========//
const round1Qs = [
    {
        question:'\n "Californication"',
        option1: 'Red Hot Chili Peppers',
        option2: 'Foo Fighters',
        option3: 'AC/DC',
        option4: 'The Ramones',
        correctAnswer: 1,
    },
    {
        question:'\n "Stir Fry"',
        option1: 'Trippie Red',
        option2: 'Future',
        option3: 'Migos',
        option4: '2 Chainz',
        correctAnswer: 3,
    },
    {
        question:'\n "California Love"',
        option1: 'Nas',
        option2: 'Biggie Smalls',
        option3: 'Jay-Z',
        option4: 'Tupac',
        correctAnswer: 4,
    },
    {
        question:'\n "Jolene"',
        option1: 'Carrie Underwood',
        option2: 'Shania Twain',
        option3: 'Dolly Parton',
        option4: 'Kelly Clarkson',
        correctAnswer: 3,
    },
    {
        question:'\n "U Don\'t Have to Call"',
        option1: 'Aaliyah',
        option2: 'Usher',
        option3: 'Beyoncé',
        option4: 'Chris Brown',
        correctAnswer: 2,
    },
    {
        question:'\n "Country Girl(Shake It For Me)"',
        option1: 'Keith Urban',
        option2: 'Brad Paisley',
        option3: 'Blake Shelton',
        option4: 'Luke Bryan',
        correctAnswer: 4,
    },
    {
        question:'\n "No Scrubs"',
        option1: 'TLC',
        option2: 'Destiny\'s Child',
        option3: 'SZA',
        option4: 'Rihanna',
        correctAnswer: 1,
    },
    {
        question:'\n "Cry Me A River"',
        option1: 'Robin Thicke',
        option2: 'Justin Timberlake',
        option3: 'Ed Sheeran',
        option4: 'Sam Smith',
        correctAnswer: 2,
    },
    {
        question:'\n"Thank U, Next"',
        option1: 'Bebe Rexha',
        option2: 'Dua Lipa',
        option3: 'Billie Eilish',
        option4: 'Ariana Grande',
        correctAnswer: 4,
    },
    {
        question:'\n "Stairway to Heaven"',
        option1: 'Pink Floyd',
        option2: 'Rolling Stones',
        option3: 'Led Zeppelin',
        option4: 'Metallica',
        correctAnswer: 3,
    }
]

//Create a function to start the game
const startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...round1Qs]
    getNewQuestion()
}

// const countdown = () => {
//     let timeLeft = 10
//     const timeLeftDisplay = document.querySelector('#time')

//     setInterval(()=> {
//         if(timeLeft < 0 || gameDIV.contains(correctAnswerDIV) || gameDIV.contains(incorrectAnswerDIV)){
//             clearInterval(timeLeft = -1)
//             return
//         }
//         if (timeLeft === 0){
//             setTimeout (()=>{
//                 let timeUp = document.createElement('h2')
//                 timeUp.style.color = 'red'
//                 timeUp.innerText = 'TIME\'S UP!!'
//                 timeUp.style.fontFamily = 'Luckiest Guy'
//                 timeUp.style.fontSize = '70px'
//                 timeUp.classList.add('time-up')
//                 timeUp.style.textAlign = 'center'
//                 gameDIV.insertBefore(timeUp, gameDIV.children[2]);
//                 const correctAnswer = currentQuestion.correctAnswer
//                 const correctAnswerDIV = document.getElementById(`${correctAnswer}`)
//                 correctAnswerDIV.parentElement.classList.add('correct')
//                 choices.forEach(choice =>{
//                     choice.removeEventListener('click', checkAnswer)
//                 })
//             },500)
//             setTimeout(() => {
//                 const correctAnswer = currentQuestion.correctAnswer
//                 const correctAnswerDIV = document.getElementById(`${correctAnswer}`)
//                 correctAnswerDIV.parentElement.classList.remove('correct')
//                 getNewQuestion()
//             }, 5000);
//         }
//         timeLeftDisplay.innerText = timeLeft
//         timeLeft -=1
//     }, 1000)
// }


const getNewQuestion = () => {
    // let timeUp = document.querySelector('.time-up')
    // if (gameDIV.contains(timeUp)){
    //     gameDIV.removeChild(timeUp, gameDIV.children[2]);
    // }
    // countdown()
    if (availableQuestions.length === 0 || questionCounter > max_questions) {
        stopGame()
    }
    questionCounter++
    questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
    const questionIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = `Which artist performed the song ${currentQuestion.question}?`
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

    choices.forEach(choice =>{
        choice.addEventListener('click', checkAnswer)
    })

    availableQuestions.splice(questionIndex, 1)
    console.log(availableQuestions)
    acceptingAnswers = true
}

const checkAnswer = () => {
    if(!acceptingAnswers) return
    acceptingAnswers === false
    const selectedChoice = event.target
    let selectedChoiceID = parseInt(selectedChoice.id)
    const correctAnswer = currentQuestion.correctAnswer
    const correctAnswerDIV = document.getElementById(`${correctAnswer}`)
    if(selectedChoiceID === correctAnswer) {
        selectedChoice.parentElement.classList.add('correct')
        score += score_pointsR1
        scoreText.innerText = score
    } else {
        selectedChoice.parentElement.classList.add('incorrect')
        correctAnswerDIV.parentElement.classList.add('correct')
    }

    setTimeout(()=>{
        selectedChoice.parentElement.classList.remove('incorrect')
        correctAnswerDIV.parentElement.classList.remove('correct')
        getNewQuestion()
    },2100)
}

startGame()
