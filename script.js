
let view = {
    start: document.querySelector(".start"),
    playAgain: document.querySelector(".play-again"),
    message: document.querySelector(".message"),
    playerChoice: document.querySelector(".player-choice"),
    showResult: document.querySelector(".result"),
    playerSelect: document.querySelectorAll(".player-choice img"),
    image1: document.querySelector("#img-1"),
    image2: document.querySelector("#img-2"),
    playerScore: document.querySelector("#player-score"),
    computerScore: document.querySelector("#computer-score"),
    playerwin: 0,
    computerwin: 0,
    render(target, content, attributes){
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);   
        }
        target.textContent = content;
    }
}

view.start.addEventListener("click", (e) => {
    e.preventDefault();
    hide(view.start);
    show(view.playerChoice);
    show(view.showResult);
    view.render(view.message, "Choose your weapon...");
    e.stopPropagation();
});

view.playAgain.addEventListener("click", (e) => {
    e.preventDefault();
    view.render(view.playerScore, "0");
    view.render(view.computerScore, "0");
    view.playerwin = 0;
    view.computerwin = 0;
    view.render(view.message, "Choose your weapon...")
    hide(view.playAgain);
    show(view.playerChoice);
   
    e.stopPropagation();
});

const choiceArray = Array.from(view.playerSelect);
choiceArray.forEach(img => {
    img.addEventListener("click", (e) => {
        playGame(e);
    })
});

function playGame(e){
    let playerSelection = e.target.alt;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    displayResult(playerSelection, computerSelection, result);
}

function displayResult(player, computer, result) {
    

    view.image1.setAttribute("src", checkEntry(player));
    view.image2.setAttribute("src", checkEntry(computer));
    view.render(view.message, result.msg);
    show(view.image1);
    show(view.image2);

   
    switch (result.winner) {
        case "player":
            view.playerwin++;
            view.render(view.playerScore, view.playerwin);
            break;
        case "computer":
            view.computerwin++;
            view.render(view.computerScore, view.computerwin);
            break;
        default:
            break;
    }

    if (view.playerwin == 5) {
        view.render(view.message, "CONGRATULATIONS PLAYER... YOU WON THIS FIESTY ROUND!!!");
        hide(view.image1);
        hide(view.image2);
        hide(view.playerChoice);
        show(view.playAgain);
    } 
    if (view.computerwin == 5) {
        view.render(view.message, "SORRY PLAYER...COMPUTER SEEMS SMARTER ON THIS ROUND!!!");
        hide(view.image1);
        hide(view.image2);
        hide(view.playerChoice);
        show(view.playAgain);
    }
}

function computerPlay() {
    let pick = "";
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            pick = "rock";
            break;
        case 1:
            pick = "paper";
            break;
        case 2:
            pick = "scissors";
            break;
    }
    return pick;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return {winner: "none", msg: "It's a draw. Play again"};
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return {winner: "computer", msg: "Oops! Paper wraps Rock. You Lose 😿😿"};
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return {winner: "player", msg: "Hurray! Rock crushes Scissors. You Win 😆😆"};
            } else if (playerSelection === "paper" && computerSelection === "rock"){
                return {winner: "player", msg: "Hurray! Paper wraps Rock. You Win 😆😆"};
                }else if (playerSelection === "paper" && computerSelection === "scissors") {
                    return {winner: "computer", msg: "Oops! Scissors cuts Paper. You Lose 😿😿"};
                    }else if (playerSelection === "scissors" && computerSelection === "rock") {
                     return {winner: "computer", msg: "Oops! Rock crushes Scissors. You Lose 😿😿"};
                        }else if (playerSelection === "scissors" && computerSelection === "paper") {
                            return {winner: "player", msg: "Hurray! Scissors cuts Paper. You Win 😆😆"};
                            }

    
}

function checkEntry(word) {
    switch (word.toLowerCase()) {
        case "rock":
            return "images/r1.png";
            break;
        case "paper":
            return "images/p1.png";
            break;
        case "scissors":
            return "images/s1.png";
            break;
    }
}

function show(element) {
    element.style.display = "block";
}

function hide(element) {
    element.style.display = "none";
}