class Background {
    constructor(img, x, y, weight, height, xArr, yArr,tien) {
        this.x = x
        this.y = y
        this.weigth = weight
        this.height = height
        this.bgArr = []
        this.img = img
        this.xArr = xArr
        this.yArr = yArr
        this.tien = tien
        this.bgArr[0] = {
            x: 0,
            y: 0
        }
    }

    draw() {

        for (let i = 0; i < this.bgArr.length; i++) {
            ctx.drawImage(this.img, this.bgArr[i].x, this.y, this.weigth, this.height)
            this.bgArr[i].x--
            if (this.bgArr[i].x === this.tien) {
                this.bgArr.push({
                    x: this.xArr,
                    y: this.yArr
                })
            }
        }

    }
}