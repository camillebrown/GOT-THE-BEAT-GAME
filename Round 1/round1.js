//Determine all of the variables you will need in the game

let score = 0
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#scoring')
const questionNum = document.querySelector('.question-number')
const gameDIV = document.querySelector('.game')
const modal = document.querySelector('.modal-overlay')
let modalClose = document.querySelector('.modal-close')
let iconSymbol = document.querySelector('.icon-symbol')
let modalTitle = document.querySelector('.modal-title')
let modalText = document.querySelector('.modal-content')
let modalEnd = document.querySelector('.modal-end')



let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []
const score_pointsR1 = 10
const max_questions = 10


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


const getNewQuestion = () => {
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
    acceptingAnswers = true
}

const checkAnswer = () => {
    if(!acceptingAnswers) return
    acceptingAnswers === false
    const selectedChoice = event.target
    let selectedChoiceID = parseInt(selectedChoice.id)
    const correctAnswer = currentQuestion.correctAnswer
    if(selectedChoiceID === correctAnswer) {
        correct()
        score += score_pointsR1
        scoreText.innerText = score
        return
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
    setTimeout(getNewQuestion,2000)
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
    setTimeout(getNewQuestion,2000)
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

let endGameBtn = document.querySelector('#end')
endGameBtn.addEventListener('click', stopGame)

let startGameBtn = document.querySelector('#start')
startGameBtn.addEventListener('click', ()=>{
    window.location = '/Round 1/round1.html'
})

