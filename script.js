const character = document.querySelector(".character")
const obstacles = document.querySelector(".obstacles")
const scoreText = document.querySelector(".score")
let score = 0;
let isStarted = false;

document.addEventListener('keydown', (event) => {
    if (event.key === "Space") {
        event.preventDefault();
        jump()
    } else if (event.which === 32) {
        event.preventDefault();
        jump()
    } else if (event.key === "w") {
        event.preventDefault();
        jump()
    }
});

function jump() {
    if (character.classList !== "jump") {
        clearTimeout()
        character.classList.add("jump");
        setTimeout(() => {
            character.classList.remove("jump");
        }, 700);
    }
}

function startMoving() {
    if (obstacles.classList !== "move") {
        obstacles.classList.add("move")
    }
}

function start() {
    if (!isStarted) {
        isStarted = true;
        startMoving();
        scoreCounter();
        checkDead();
    }
}

function scoreCounter() {
    if (!isStarted) {
        return;
    }
    score++;
    scoreText.innerHTML = "Score: " + Math.round(score / 20)
    requestAnimationFrame(scoreCounter)
}

function checkDead() {
    let characterTopPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"))

    let obstaclesLeftPosition = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))

    if (obstaclesLeftPosition <= 92 && obstaclesLeftPosition >= 20 && characterTopPosition >= 65) {
        isStarted = false;
        obstacles.classList.remove("move")
        alert("Game Over!\nYour score: " + Math.round(score / 20))
        score = 0;
    }

    requestAnimationFrame(checkDead)
}