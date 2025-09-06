let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msgg = document.querySelector('#msg');
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const chaneMode = document.querySelector('#ChangeMode');

chaneMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        chaneMode.innerHTML = '<img src="img/dark.png" alt="" height="32px" width="32px">';
        document.body.style.backgroundImage = "url('img/dark-background.jpg')";
        document.body.style.color = "white";
    } else {
        chaneMode.innerHTML = '<img src="img/light.jpg" alt="" height="32px" width="32px">';
        document.body.style.backgroundImage = "url('img/white-background.jpg')";
        document.body.style.color = "black";
    }
});

const generateCompchoice = () => {
    const options = ['ROCK', 'PAPER', 'SCISSORE'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const showWinner = (userWin , userChoice, compChoice) => {
    if (userWin) {
        console.log("user wins");
        userScore++;
        userScore_span.innerText = userScore;
        msgg.innerText = `User wins ! ${userChoice} beats ${compChoice}`;
        msgg.style.backgroundColor = "green";
    } else {
        console.log("computer wins");
        compScore++;
        compScore_span.innerText = compScore;
        msgg.innerText = `Computer wins ! ${compChoice} beats ${userChoice}`;
        msgg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("choice was clicked = ", userChoice);
    const compChoice = generateCompchoice();
    console.log("computer choice is = ", compChoice);

    if (userChoice === compChoice) {
        console.log("It's a tie");
        msgg.innerText = "It's a tie ! Play again.";
        msgg.style.backgroundColor = "black";
    } else {
        let userWin = true;
        if ((userChoice === 'ROCK' && compChoice === 'PAPER') ||
            (userChoice === 'PAPER' && compChoice === 'SCISSORE') ||
            (userChoice === 'SCISSORE' && compChoice === 'ROCK')) {
            userWin = false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach(choice => choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playgame(userChoice);
}));