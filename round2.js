
//==============ROUND 2: FINISH THE LYRIC===========//

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
