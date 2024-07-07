let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userVal = document.querySelector("#user-score");
const compVal = document.querySelector("#comp-score");
const reset = document.querySelector("#reset-btn");





const resetGame = () =>{
    userScore = 0;
    compScore = 0;
    userVal.innerText = "0";    
    compVal.innerText = "0";
    msg.innerText = "Play your move.";
    msg.style.backgroundColor = "lightblue";
}
reset.addEventListener("click", resetGame);


const generateCompChoice = () => {
    const randomInx = Math.floor(Math.random() * 3);
    // console.log(randomInx)
    compChoice = choices[randomInx].id;
    console.log(`Comp Choice ${compChoice}`)
    return compChoice;
}

const updateScores = (userWin) =>{
    if(userWin){
        userVal.innerText = userScore;
    }else{
        compVal.innerText = compScore;
    }
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore ++;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        console.log("You Win!");
    }else{
        compScore++;
        msg.innerText = `You Win! ${compChoice} beats Your ${userChoice}.`;
        msg.style.backgroundColor = "maroon";
        console.log("Comp Wins");
    }
    updateScores(userWin);
}



const playGame = (userChoice) => {
    console.log(`Your Choice ${userChoice}`);
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
        msg.innerText = "It's a Draw. Play Again."
        msg.style.backgroundColor = "lightblue";
        console.log("It's a Draw")
    } else {
        let userWin = true;
        if (userChoice === "rock") { userWin = compChoice === "paper" ? false : true }
        else if (userChoice === "paper") { userWin = compChoice === "scissors" ? false : true }
        else { userWin = compChoice === "rock" ? false : true }
        showWinner(userWin, userChoice, compChoice);
    }


    // if (userChoice === "rock" && compChoice === "paper") {
    //     compScore += 1;
    //     console.log("Comp Wins")
    // } else if (userChoice === "scissors" && compChoice === "rock") {
    //     compScore += 1;
    //     console.log("Comp Wins")
    // } else if (userChoice === compChoice) {
    //     console.log("It's a Draw")
    // } else {
    //     userScore += 1;
    //     console.log("You Win!")
    // }
}




choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

