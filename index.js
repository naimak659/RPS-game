let elementImages = [
  { img: "images/scissor.png", key: "Scissor" },
  { img: "images/paper.png", key: "Paper" },
  { img: "images/paper.png", key: "Paper" },
  { img: "images/rock.png", key: "Rock" },
  { img: "images/scissor.png", key: "Scissor" },
  { img: "images/rock.png", key: "Rock" },
  { img: "images/scissor.png", key: "Scissor" },
  { img: "images/paper.png", key: "Paper" },
  { img: "images/paper.png", key: "Paper" },
  { img: "images/rock.png", key: "Rock" },
  { img: "images/scissor.png", key: "Scissor" },
  { img: "images/rock.png", key: "Rock" },
];

const winnerCard = document.getElementById("card");
const winLossCount = document.querySelector(".winLossCount ");
const winner = document.querySelector(".winner ");
const loss = document.querySelector(".loss ");
const userResult = document.getElementById("user-img");
const computerResult = document.getElementById("computer-img");
const userCard = document.getElementById("user__selector");
const userInput = document.querySelectorAll("#user-input");
const userInputImg = document.querySelectorAll("#user-input img");
const computerResultName = document.querySelector(".computerResult_name");
const userResultName = document.querySelector(".userResult_name");
const restartBtn = document.querySelector(".restart__btn");

let winCount = 0;
let lossCount = 0;

userInputImg.forEach((input, i) => {
  input.addEventListener("click", (e) => {
    clikedImg(input);
  });
});
// user selected img function
function clikedImg(x) {
  let playerInput = x.getAttribute("src");
  let name = x.getAttribute("key");
  userResult.setAttribute("src", `${playerInput}`);
  userResult.setAttribute("key", `${name}`);

  userResultName.textContent = name;
  computerInput();
  // userCard.classList.replace("grid", "hidden");
  winnerCard.classList.remove("hidden");
  winnerCard.classList.add("grid");
}

// computer randomly selected img funtion
function computerInput() {
  let random = Math.floor(Math.random() * elementImages.length);
  let computerName = `${elementImages[random].key}`;
  computerResult.setAttribute("src", `${elementImages[random].img}`);
  computerResult.setAttribute("key", `${elementImages[random].key}`);
  computerResultName.textContent = computerName;
  winnePlayer();
}

// winner
function winnePlayer() {
  let You = userResult.getAttribute("key");
  let Opponent = computerResult.getAttribute("key");
  // check win and loss count
  if (You == Opponent) {
    return;
  } else if (
    (You == "Rock" && Opponent == "Paper") ||
    (You == "Paper" && Opponent == "Scissor") ||
    (You == "Scissor" && Opponent == "Rock")
  ) {
    lossCount = lossCount + 1;
    return (loss.innerHTML = `loss: ${lossCount}`);
  } else {
    winCount = winCount + 1;
    return (winner.innerHTML = `Win: ${winCount}`);
  }
}

// restart
restartBtn.addEventListener("click", () => {
  winnerCard.classList.remove("grid");
  winnerCard.classList.add("hidden");
  winCount = 0;
  lossCount = 0;
  winner.innerHTML = `Win: ${winCount}`;
  loss.innerHTML = `loss: ${lossCount}`;
});

// console.log(computerResult);
// console.log(userResult);
// console.log(userInput[1]);