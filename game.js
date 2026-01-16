// Track user and computer scores
let userscore = 0;
let compscore = 0;

// Store if the user wins (boolean)
let userwin = true;

// Select all choice buttons (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Select elements to show messages and scores
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

/**
 * Function: getcompchoice
 * -----------------------
 * Randomly returns one of the computer's choices: "paper", "rock", or "scissor"
 */
const getcompchoice = () => {
    let options = ["paper", "rock", "scissors"];
    const returnindex = Math.floor(Math.random() * 3); // pick random index 0-2
    return options[returnindex];
};

/**
 * Function: showWinner
 * --------------------
 * Updates the message and score depending on whether the user wins or loses.
 * @param {boolean} userwin - true if user wins
 * @param {string} userchoice - what the user chose
 * @param {string} compchoice - what the computer chose
 */
const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        // Increase user score
        userscore++;
        userscorepara.innerText = userscore;

        // Display winning message
        msg.innerText = `You Win. Your ${userchoice} beats ${compchoice} \u{1F604}`;
        msg.style.backgroundColor = "transparent";

        // Green background for win
        msgContainer.style.backgroundColor = "green";
    } else {
        // Increase computer score
        compscore++;
        compscorepara.innerText = compscore;

        // Display losing message
        msg.innerText = `You Lose. ${compchoice} beats your ${userchoice} \u{1F61E}`;
        msg.style.backgroundColor = "transparent";

        // Red background for loss
        msgContainer.style.backgroundColor = "red";
    }
};

/**
 * Function: playgame
 * ------------------
 * Plays one round of the game based on the user's choice
 * @param {string} userchoice - what the user selected
 */
const playgame = (userchoice) => {
    console.log("user choice", userchoice);

    // Generate the computer's choice
    const compchoice = getcompchoice();
    console.log("comp choice", compchoice);

    // If both choices are the same → draw
    if (userchoice === compchoice) {
        console.log("game was draw");
        msg.innerText = "Game was Draw \u{1F91D}";
        msg.style.backgroundColor = "transparent";
        msgContainer.style.backgroundColor = "black";
    } else {
        // Decide winner based on choices
        if (userchoice === "rock") {
            userwin = compchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        } else if (userchoice === "paper") {
            userloss = compchoice === "rock" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }

        // Show the result
        showWinner(userwin, userchoice, compchoice);
    }
};

// Add click event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id"); // get "rock", "paper", or "scissor"
        playgame(userchoice); // start game
    });
});
