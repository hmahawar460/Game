let boxes = document.querySelectorAll(".box");
let reSet = document.querySelector("#re-set");
let newBtn = document.querySelector(".new");
let msgcont = document.querySelector(".new-cont");
let msg = document.querySelector(".h2");

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

let turnO = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        CheckWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const reSetGame = () => {
    turnO = true;
    enableBoxes();
    msgcont.classList.add("hide");
}
const showWinner = (winner) => {
    msg.innerText = `Player ${winner} is the Winner`;
    msgcont.classList.remove("hide");
    disableBoxes();
}

const CheckWinner = () => {
    for( let pattern of winPatterns ){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != "") {
            if(position1 === position2 && position2 === position3) {
                console.log("Winner",position1);
                showWinner(position1);
            }
        }
    }
}
reSet.addEventListener('click',reSetGame);
newBtn.addEventListener('click',reSetGame);
