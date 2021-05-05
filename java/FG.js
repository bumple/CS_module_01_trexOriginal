
class FG {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.bgArr = []
        this.img = new Image()
        this.img.src = "images/fg.png"
        this.bgArr[0] = {
            x: 10,
        }
    }

    draw(a) {
        for (let i = 0; i < this.bgArr.length; i++) {
            ctx.drawImage(this.img, this.bgArr[i].x,canvas.height-150,this.img.width,150)
            this.bgArr[i].x -= 10;
            if (this.bgArr[i].x === -10) {
                this.bgArr.push({
                    x: canvas.width,
                })

            }
        }
    }
}