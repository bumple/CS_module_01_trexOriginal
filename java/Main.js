let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
//----------------------------------------------------------------------
let bgImg = new Image()
bgImg.src = "images/bg.png"
let jumpSoure = new Audio()
jumpSoure.src = "sounds/fly.mp3"
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let jumpStatus = false;
let statusCollision = false;
let score = 0;
let highestArr = loadScoreArray();
let randomColor = Math.floor(Math.random()*16777215).toString(16)
let name = prompt('Nhập tên', 'abc');
let n = +prompt("ĐỘ KHÓ 1->10", 7)

//----------------------------------------------------------------------
let fg = new FG(10, canvas.height - 150)
let bg = new Background(bgImg, 0, 0, canvas.width, canvas.height, canvas.width, 0, -2);
let grass = new Grass(canvas.width / 3, canvas.height - 150 - 20)
let trees = new Trees()
let player = new Player(200, canvas.height - 150 - 50, 50, 50,'"'+ randomColor +'"', 0, 0)
let pipe = new Pipe1(n)
//----------------------------------------------------------------------

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    } else if (e.key === "Up" || e.key === "ArrowUp") {
        upPressed = true
    }
}
function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    } else if (e.key === "ArrowUp" || e.key === "Up") {
        upPressed = false;
    }
}


// SCORE
function drawHighscore(highestArr) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("HI:  " + highestArr[0] + ' - ' + highestArr[1], 8, 50);
    document.getElementById("hi").innerHTML = highestArr[0] + ' - ' + highestArr[1];

}

function saveScoreArray(name, score) {
    let user = [name, score];
    localStorage.setItem('score2', JSON.stringify(user));
}

function loadScoreArray() {
    if (localStorage.hasOwnProperty('score2')) {
        return JSON.parse(localStorage.getItem('score2'));
    } else {
        return [];
    }
}

function drawScore(score) {
    if (score > (+highestArr[1]) || isNaN(highestArr[1])) {
        higher = score;
        saveScoreArray(name, higher);
        highestArr = loadScoreArray();
    }
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 8, 70);
}

// Draw
function draw() {
    bg.draw()
    trees.draw()
    grass.draw()
    player.draw()
    pipe.draw()
    player.move();
    fg.draw();

    drawScore(score)
    drawHighscore(highestArr)


    if (statusCollision) {
        ctx.beginPath();
        ctx.font = "100px Verdana";
        ctx.fillStyle = "#993300";
        ctx.fillText("GameOver", canvas.width / 3 - 50, canvas.height / 4);
        ctx.closePath();
        return
    }
    requestAnimationFrame(draw);
}



// button start
startGame.addEventListener("click", function () {
    draw();
    document.getElementById("startGame").style.display = "none";
})
