import SceneImage from '../../guagame/scene_image'

export default class Grounds {
    constructor(game) {
        this.game = game
        this.numberOfgrounds = 6
        this.grounds = []
        for (var i = 0; i < this.numberOfgrounds; i++) {
            var g = SceneImage.new(game, 'ground')
            g.x = i * g.w
            g.y = window.innerHeight - g.h
            this.grounds.push(g)
        }
    }
    static new(game) {
        return new this(game)
    } 
    draw () {
        var context= this.game.context
        for (var p of this.grounds) {
            context.drawImage(p.texture, p.x, p.y)
        }   
    }
    update() {
        // 地面移动      
        var offset= -5
        for (var g of this.grounds) {
            g.x += offset
            if (g.x < -400) {
                g.x = window.innerWidth
            }
        }
    }

}