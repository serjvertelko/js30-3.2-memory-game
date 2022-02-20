const startGameBtn = document.querySelector(".start-btn"),
    scoreGameBtn = document.querySelector(".score-btn"),
    newGameBlock = document.querySelector(".new__game-block"),
    scoreGameBlock = document.querySelector(".score__game-block");






let minScore = 0;
let secScore = 1;
let headerSec = document.querySelector(".heder__timer-sec");
let headerMin = document.querySelector(".heder__timer-min");
let startgameInterval;




startGameBtn.addEventListener("click", () => {
    startGame();
})

scoreGameBtn.addEventListener("click", () => {
    stopGame();

})


function func() {

    let resultSec = secScore++;
    headerSec.innerHTML = resultSec;
    if (resultSec == 60) {
        secScore = 1
        minScore++
        headerMin.innerHTML = minScore;
    }
}

function startGame() {
    secScore = 1;
    newGameBlock.classList.add("block");
    startgameInterval = setInterval(func, 1000)
    scoreGameBlock.classList.remove("active");
}




function stopGame() {
    scoreGameBlock.classList.add("active");
    clearInterval(startgameInterval);

}



