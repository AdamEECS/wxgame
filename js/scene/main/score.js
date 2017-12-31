export default class Score {
    constructor(game) {
        this.game = game
        this.numberList = []
        for (var i = 0; i < 10; i ++) {
            var number = game.textureByName(`score${i}`)
            this.numberList.push(number)
        }
        this.showList = []
        let w = window.innerWidth
        let h = window.innerHeight
        this.x = Math.floor((w / 2))
        this.y = Math.floor((h / 8))
        this.show = 0
    }
    static new(game) {
        return new this(game)
    } 
    draw () {
        var context = this.game.context
        for (var i = 0; i < this.showList.length; i ++) {
            var p = this.showList[i]
            var x = this.x + i * 25
            var y = this.y
            context.drawImage(p, x, y)
        }
    }
    update() {
        // 地面移动      
        this.matchNumber()
    }

    matchNumber() {
        var s = this.show + ''
        this.showList = []
        for (var i of s) {
            this.showList.push(this.numberList[parseInt(i)])
        }
    }

}