class Grass {
    constructor(x) {
        this.x = x
        this.bgArr = []
        this.img = new Image()
        this.img.src = "images/grass2.png"
        this.bgArr[0] = {
            x: 50,
        }
    }

    draw() {
        for (let i = 0; i < this.bgArr.length; i++) {
            ctx.drawImage(this.img, this.bgArr[i].x, 340,this.img.width,this.img.height/3)
            this.bgArr[i].x -= 5;
            if (this.bgArr[i].x === -5) {
                this.bgArr.push({
                    x: canvas.width,
                })
            }

        }
    }
}