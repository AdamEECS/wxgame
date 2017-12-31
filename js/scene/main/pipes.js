import SceneImage from '../../guagame/scene_image'

export default class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 120
        this.pipeGap = 200
        this.columsOfPipe = 3
        // this.hit = false
        this.throughs = false
        for (var i = 0; i < this.columsOfPipe; i++) {
            var p1 = SceneImage.new(game, 'pipe')
            p1.flipY = true
            p1.throughed = false  // 作穿越判定
            p1.x = 2 * window.innerWidth + i * this.pipeGap
            var p2 = SceneImage.new(game, 'pipe')
            p2.throughed = false
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    
    resetPipesPosition(p1, p2) {
        let h = Math.floor(window.innerHeight / 4)
        p1.y = randomBetween(-h, 0)
        p2.y = p1.y + p1.h + this.pipeSpace

    }
    update() {
        for (var p of this.pipes){
            p.x -= 4
            if (p.x < - 100) {
                p.x += this.pipeGap * this.columsOfPipe
                p.throughed = false
            }
        }
    }
    draw () {
        var context= this.game.context
        for (var p of this.pipes) {
            context.save()
            var w2 = p.w / 2
            var h2 = p.h / 2
            //转移坐标系
            context.translate(p.x + w2, p.y + h2)
            //翻转
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)                
            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)
            context.restore() 
        }   
    }
}