import GuaScene from '../../guagame/gua_scene'
import SceneImage from '../../guagame/scene_image'
import Background from '../../scene/main/background'
import Birds from '../../scene/main/birds'
import Pipes from '../../scene/main/pipes'
import Score from '../../scene/main/score'
import Grounds from '../../scene/main/grounds'

export default class Scene extends GuaScene {
    constructor(game) {
        super(game)
        // 背景
        let bg = Background.new(game, 'bgDay')
        this.addElement(bg)        
        
        // 小鸟
        let bird = Birds.new(this.game)
        bird.hover = false
        this.bird = bird
        this.addElement(bird)

        // 加入水管
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe) 
        // 地面  
        let grounds = Grounds.new(game)
        this.grounds = grounds
        this.addElement(this.grounds)
        // 分数
        let score = Score.new(game)
        this.score = score
        this.addElement(score)
        this.scoreNumber = 0
        this.setupInputs()
         
    }
    update() {
        super.update()
        let self = this        
        let game = self.game
        if (this.bird.hit) {
            let s = SceneEnd.new(game)
            s.score.show = self.scoreNumber
            game.canvas.removeEventListener('touchstart', self.touchHandler)
            game.replaceScene(s)
        }
        let pipes = this.pipe.pipes
        for (let i = 0; i < pipes.length / 2; i ++){
            let p1 = pipes[i * 2]
            let p2 = pipes[i * 2 + 1]
            if (rectInterMiddle(this.bird, p1, p2)) {
                p1.throughed = p2.throughed = true
                this.scoreNumber ++
                this.score.show = this.scoreNumber
            }
        }
    }
    setupInputs() {
        let self = this
        let game = self.game
        self.touchHandler = event => {
            let b = self.bird
            b.jump()
        }
        game.canvas.addEventListener('touchstart', self.touchHandler)
    }
    draw() {
        super.draw()
    }

}

