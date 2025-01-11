let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerO

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true; 
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){//playerO
            box.innerText = "O";
            turnO = false;
        }
        else{//playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};
const showWinner = (Winner) =>{
    msg.innerText = `Congratulations! Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if(post1Val != "" && post2Val != "" && post3Val != ""){
            if(post1Val === post2Val && post2Val === post3Val){
                console.log("winner", post1Val)
                showWinner(post2Val);
            }
        }
    }
};

newgameButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);