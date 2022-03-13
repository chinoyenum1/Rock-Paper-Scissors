game();

function game() {
    let playerWinsRound = 0;
    let computerWinsRound = 0;

    let round = 1;
    while (round <= 5) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        if(result === "player wins") playerWinsRound++;
        if(result === "computer win") computerWinsRound++;
        round++;
    }

    displayResult(playerWinsRound, computerWinsRound);
}


function displayResult(playerWinsRound, computerWinsRound) {
    console.log(`Player Win: ${playerWinsRound}`);
    console.log(`Computer Win: ${computerWinsRound}`);

    if (playerWinsRound > computerWinsRound) {
        console.log(`CONGRTULATIONS PLAYER, YOU WON!!!!`);
    } else if (playerWinsRound < computerWinsRound) {
        console.log(`SO SORRY PLAYER, YOU LOST. COMPUTER WINS!!!!`);
    } else {
        console.log(`IT'S A TIE, PLAY ANOTHER ROUND`);
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
        default:
            alert("Not a valid entry");
            break;
    }
    return pick;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        console.log("It's a Draw! Play again");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Oops! Paper wraps Rock. You Lose");
        return "computer win";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("Hurray! Rock curshes Scissors. You Win");
            return "player wins";
            } else if (playerSelection === "paper" && computerSelection === "rock"){
                console.log("Hurray! Paper wraps Rock. You Win");
                return "player wins";
                }else if (playerSelection === "paper" && computerSelection === "scissors") {
                    console.log("Oops! Scissors cuts Paper. You Lose");
                    return "computer win";
                    }else if (playerSelection === "scissors" && computerSelection === "rock") {
                     console.log("Oops! Rock crushes Scissors. You Lose");
                     return "computer win";
                        }else if (playerSelection === "scissors" && computerSelection === "paper") {
                            console.log("Hurray! Scissors cuts Paper. You Win");
                            return "player wins";
                            }

    
}

function playerPlay() {
    let entry = prompt("Enter Selection (rock, paper or scissors)");
    entry = entry.toLowerCase();
 
    let pick = checkEntry(entry)
    while (pick == false) {
        alert("Please enter one of 'rock', 'paper' or 'scissors'");
        entry = prompt("Enter Selection (rock, paper or scissors)");
        entry = entry.toLowerCase();
        pick = checkEntry(entry)
    }
    return entry;
}

function checkEntry(word) {
    if(word == "rock" || word == "paper" || word == "scissors"){
        return true;
    }else
        return false
}



// console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);


//console.log(computerPlay());