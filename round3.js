//==============ROUND 3: MUSIC TRIVIA===========//

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
