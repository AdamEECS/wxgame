import SceneImage from '../../guagame/scene_image'

export default class Pipes {
    constructor(game) {
        this.game = game
    }
    static new(game) {
        return new this(game)
    }
    
    update() {
        for (var p of this.pipes){
            p.x -= 5
            if (p.x < - 100) {
                p.x += this.pipeGap * this.columsOfPipe
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