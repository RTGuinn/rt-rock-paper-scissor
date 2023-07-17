// DOM content loading listener
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                alert("You chose Rock!");
            } else {
                let playerChoice = this.getAttribute("data-type");
                alert(`You chose ${playerChoice}`);
            }
        })
    }
})

/**
 * Main game loop, called when script is loaded and after the user
 * has made their choice.
 */
function runGame() {

    // call random computer choice
    let computerChoice = getRandomCard();
}

function playerChoice() {

}

function computerChoice() {

        // generate random card choice for computer
        let getRandomCard = Math.floor(Math.random() * 3);
         
        // map the random number to rock paper scissor selection
            switch (randomCard) {
                case 0: 
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissor";    

            }
}



function compareChoice() {

}

function incrementWin() {

}

function incrementLoss() {

}