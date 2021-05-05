class Player {
    constructor(x, y, width, height, color, speedX, speedY) {
        this.x = x
        this.y = y
        this.dX = width
        this.dY = height
        this.speedX = speedX
        this.speedY = speedY
        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x + this.speedX, this.y + this.speedY, this.dX, this.dY)
        this.setRandomcolor()
    }

    setRandomcolor() {
        this.color = "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
    
    move() {
        if (rightPressed) {
            this.speedX += 7;
            if (this.x + this.dX + this.speedX > canvas.width) {
                this.x = canvas.width - this.dX - this.speedX;
            }
        }
        if (leftPressed) {
            this.speedX -= 7;
            if (this.x < 0) {
                this.x = 0;
            }
        }

        if (upPressed && jumpStatus === false) {
            this.speedY -= 60
            jumpStatus = true;
            jumpSoure.play();
        }

        this.speedY += 3;// gravity
        this.y += this.speedY;
        this.speedY *= 0.9;// friction

        if (this.y > 520 && jumpStatus === false) {
            this.y = 520;
            this.speedY = 0
        }
        if (this.x + this.speedX < 0) {
            this.x = 0
            this.speedX = 0


        }
        // if (this.x +this.dX+this.speedX > canvas.width){
        //     this.x = canvas.width - this.dX - this.speedX
        //     this.speedX = 0
        // }
        if (this.y + this.speedY >= 520) {
            jumpStatus = false
        }
    }
}
