let score = 0
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#scoring')
const questionNum = document.querySelector('.question-number')

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []
const score_points = 1
const max_questions = 10

//Start out with your questions
// Make an array of objects with all of the questions, answer options and the correct answer
//==============ROUND 1: GUESS THE ARTIST===========//
const round1Qs = [
    {
        question:'Which artist wrote the song "Californication"?',
        option1: 'Red Hot Chili Peppers',
        option2: 'Foo Fighters',
        option3: 'AC/DC',
        option4: 'The Ramones',
        correctAnswer: 1,
    },
    {
        question:'Which artist wrote the song "Stir Fry"?',
        option1: 'Trippie Red',
        option2: 'Biggie Smalls',
        option3: 'Migos',
        option4: '2 Chainz',
        correctAnswer: 3,
    },
    {
        question:'Which artist wrote the song "California Love"?',
        option1: 'Future',
        option2: 'Run DMC',
        option3: 'Jay-Z',
        option4: 'Tupac',
        correctAnswer: 4,
    },
    {
        question:'Which artist wrote the song "Jolene"?',
        option1: 'Carrie Underwood',
        option2: 'Shania Twain',
        option3: 'Dolly Parton',
        option4: 'Kelly Clarkson',
        correctAnswer: 3,
    },
    {
        question:'Which artist wrote the song "U Don\'t Have to Call"?',
        option1: 'Aaliyah',
        option2: 'Usher',
        option3: 'Beyoncé',
        option4: 'Chris Brown',
        correctAnswer: 2,
    },
    {
        question:'Which artist wrote the song "Country Girl(Shake It For Me)"?',
        option1: 'Keith Urban',
        option2: 'Brad Paisley',
        option3: 'Blake Shelton',
        option4: 'Luke Bryan',
        correctAnswer: 4,
    },
    {
        question:'Which artist wrote the song "No Scrubs"?',
        option1: 'TLC',
        option2: 'Destiny\'s Child',
        option3: 'SZA',
        option4: 'Rihanna',
        correctAnswer: 1,
    },
    {
        question:'Which artist wrote the song "Cry Me A River"?',
        option1: 'Robin Thicke',
        option2: 'Justin Timberlake',
        option3: 'Ed Sheeran',
        option4: 'Sam Smith',
        correctAnswer: 2,   
    },
    {
        question:'Which artist wrote the song "Thank U, Next"?',
        option1: 'Bebe Rexha',
        option2: 'Dua Lipa',
        option3: 'Billie Eilish',
        option4: 'Ariana Grande',
        correctAnswer: 4,   
    },
    {
        question:'Which artist wrote the song "Stairway to Heaven"?',
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
        console.log('finish')
    }
    questionCounter++
    questionNum.innerText = `Question ${questionCounter} of ${max_questions}`
    const questionIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    console.log(currentQuestion)
    question.innerText = currentQuestion.question
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
        choice.addEventListener('click', e => {
            if(!acceptingAnswers) return
            acceptingAnswers = false
            const selectedChoice = event.target
            let selectedChoiceID = parseInt(selectedChoice.id)
            const correctAnswer = currentQuestion.correctAnswer
            const correctAnswerDIV = document.getElementById(`${correctAnswer}`)
            if(selectedChoiceID === correctAnswer) {
                selectedChoice.parentElement.classList.add('correct')
                score += score_points
                scoreText.innerText = score
            } else {
                selectedChoice.parentElement.classList.add('incorrect')
                correctAnswerDIV.parentElement.classList.add('correct')
            }
    
            setTimeout(()=>{
                selectedChoice.parentElement.classList.remove('incorrect')
                correctAnswerDIV.parentElement.classList.remove('correct')
                getNewQuestion()
            },5000)
        })
    })



    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}

startGame()
