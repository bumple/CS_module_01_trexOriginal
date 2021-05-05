class Trees {
    constructor(x) {
        this.x = x
        this.bgArr = []
        this.img = new Image()
        this.img.src = "images/tree3.png"
        this.bgArr[0] = {
            x: 0,
        }
    }

    draw() {
        for (let i = 0; i < this.bgArr.length; i++) {
            ctx.drawImage(this.img, this.bgArr[i].x, -50)
            this.bgArr[i].x -= 2;
            if (this.bgArr[i].x === -2) {
                this.bgArr.push({
                    x: canvas.width,
                })

            }
        }
    }
}