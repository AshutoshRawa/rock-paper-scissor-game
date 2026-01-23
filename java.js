let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.getElementById("msg");

const userScorePara = document.getElementById("user-score");
const computerScorePara = document.getElementById("computer-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

};

const drawGame = () =>{
    // console.log("Its a draw");
    msg.innerText = "Its a Draw!";
};

const showWinner = (userWin) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        // console.log("you Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }else{
        computerscore++;
        computerScorePara.innerText = computerscore;
        // console.log("you lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};
const playGame=(userChoice) => {
    console.log("user choice = ", userChoice);
    const ComputerChoice = genComputerChoice();
    console.log("Computer choice = ",ComputerChoice );

    if(userChoice === ComputerChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = ComputerChoice === "paper" ? false: true;
        } else if(userChoice === "paper"){
            userWin = ComputerChoice === "scissors" ? false: true;  
        } else{
            userWin = ComputerChoice === "rock" ? false : true;
        }
        showWinner(userWin)

    }

};
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
