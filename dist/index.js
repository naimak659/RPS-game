let elementImages = [
  { img: "/images/scissor.png", key: "Scissor" },
  { img: "/images/paper.png", key: "Paper" },
  { img: "/images/rock.png", key: "Rock" },
];

const winnerCard = document.getElementById("card");
const winner = document.querySelector(".winner p");
const userResult = document.getElementById("user-img");
const computerResult = document.getElementById("computer-img");
const userCard = document.getElementById("user__selector");
const userInput = document.querySelectorAll("#user-input img");
const computerResultName = document.querySelector(".computerResult_name");
const userResultName = document.querySelector(".userResult_name");

userInput.forEach((input, i) => {
  input.addEventListener("click", (e) => {
    clikedImg(input);
  });
});
// user selected img function
function clikedImg(x) {
  let playerInput = x.getAttribute("src");
  let name = x.getAttribute("key");
  userResult.setAttribute("src", `${playerInput}`);
  userResultName.textContent = name;
  computerInput();
  //   userCard.classList.replace("grid", "hidden");
  //   winnerCard.classList.replace("hidden", "grid");
}

// computer randomly selected img funtion
function computerInput() {
  let random = Math.floor(Math.random() * elementImages.length);
  let computerName = `${elementImages[random].key}`;
  computerResult.setAttribute("src", `${elementImages[random].img}`);
  computerResultName.textContent = computerName;
  winnePlayer();
}

// winner
function winnePlayer() {
  let You = userResultName.textContent;
  let Opponent = computerResultName.textContent;

  if (You == Opponent) {
    winner.textContent = "It's a draw";
  } else if ((You || Opponent == "Rock") && (You || Opponent == "Paper")) {
    winner.textContent = `Winner is: ${You == "Paper" ? "You" : "Opponent"}`;
    console.log(`Winner is: ${You == "Paper" ? "You" : "Opponent"}`);
  } else if ((You || Opponent == "Scissor") && (You || Opponent == "Paper")) {
    winner.textContent = `Winner is: ${You == "Scissor" ? "You" : "Opponent"}`;
    console.log(`Winner is: ${You == "Scissor" ? `You` : `Opponent`}`);
  } else if ((You || Opponent == "Scissor") && (You || Opponent == "Rock")) {
    winner.textContent = `Winner is: ${You == "Rock" ? "You" : "Opponent"}`;
    console.log(`Winner is: ${You == "Rock" ? "You" : "Opponent"}`);
  }
  // else if (player == "Rock" && Opponent == "Paper") {
  //     winner.innerHTML = "Winner is: Opponent";
  //   } else if (player == "Rock" && Opponent == "Scissor") {
  //     winner.innerHTML = "Winner is: You";
  //   } else if (player == "Paper" && Opponent == "Scissor") {
  //     winner.innerHTML = "Winner is: Opponent";
  //   } else if (player == "Paper" && Opponent == "Scissor") {
  //     winner.innerHTML = "Winner is: You";
  //   }
}

// console.log(computerResult);
// console.log(userResult);
// console.log(userInput[1]);
