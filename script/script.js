const startGameBtn = document.querySelector(".start-btn"),
    scoreGameBtn = document.querySelector(".score-btn"),
    newGameBlock = document.querySelector(".new__game-block"),
    scoreGameBlock = document.querySelector(".score__game-block"),
    memoryCard = document.querySelectorAll(".memory-card"),
    frontCard = document.querySelectorAll(".front-card");






let minScore = 0;
let secScore = 1;
let headerSec = document.querySelector(".heder__timer-sec");
let headerMin = document.querySelector(".heder__timer-min");
let startgameInterval,
    hasFlippedCard = false,
    lockBoard = false,
    firstCard, secondCard,
    coin = 0,
    totalCoin = 5;

 randomCard()
 function randomCard() {
     memoryCard.forEach(card => {
         let ramdomPos = Math.floor(Math.random() * 12);
         card.style.order = ramdomPos;
     });
 }

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
    memoryCard.forEach(item => {
        item.classList.remove("open");
    })


}

function openCard(elem) {
    console.log(this.dataset.set)
    if (lockBoard) return;
    this.classList.toggle("open")
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
    console.log(coin)
}
function checkForMatch() {
    if (firstCard.dataset.set === secondCard.dataset.set) {
        disableCards();
        coin++
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', openCard);
    secondCard.removeEventListener('click', openCard);
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('open');
        secondCard.classList.remove('open');
        lockBoard = false;
    }, 1500);
}

memoryCard.forEach(item => {
    item.addEventListener("click", openCard);
    frontCard.forEach(elem => {
        elem.classList.toggle("open");
    })
})
memoryCard.forEach(item => {
    item.addEventListener("click", result())
})
function result() {
    if (coin === totalCoin) {
        stopGame()
        console.log("контроль")
    }
}
