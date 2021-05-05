class Pipe1 {
    constructor(n) {
        this.bgArr = []
        this.img = new Image()
        this.img.src = "images/pipeSouth.png"
        this.bgArr[0] = {
            x: canvas.width,
            y: 500
        }
        this.height = this.img.height
        this.scoreSoure = new Audio()
        this.scoreSoure.src = "sounds/score.mp3"
        this.n = n
        this.speed = this.n*100 + 100
    }

    setN(n){
        this.n = n
    }

    draw() {

        for (let i = 0; i < this.bgArr.length; i++) {
            ctx.drawImage(this.img, this.bgArr[i].x, this.bgArr[i].y);
            this.bgArr[i].x -= 10;
            if (this.bgArr[i].x === this.speed) {
                this.bgArr.push({
                    x: canvas.width,
                    y: canvas.height - 300 + Math.floor(Math.random() * 50)
                })
            }
            if (this.bgArr[i].x === 0) {
                score++;
                this.scoreSoure.play()
                // this.bgArr.shift()
            }
            // collision
            if (player.x +player.speedX + player.dX > this.bgArr[i].x
                && player.x + player.speedX < this.bgArr[i].x + this.img.width
                && player.y + player.dY + player.speedY> this.bgArr[i].y -  10
            ) {
                statusCollision = true
            }

        }
    }
}

//
// if (rect1.x < rect2.x + rect2.width &&
//     rect1.x + rect1.width > rect2.x &&
//     rect1.y < rect2.y + rect2.height &&
//     rect1.height + rect1.y > rect2.y)
//
//
//
//

