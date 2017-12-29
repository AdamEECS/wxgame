import GuaScene from '../../guagame/gua_scene'
import SceneImage from '../../guagame/scene_image'

export default class Scene extends GuaScene {
    constructor(game) {
        super(game)
        // 背景
        var bg = SceneImage.new(game, 'bgDay')
        this.addElement(bg)          
        
        // 小鸟
        var bird = Birds.new(this.game)
        bird.hover = false
        this.bird = bird
        this.addElement(bird)
        // 加入水管
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe) 
        // 地面  
        var grounds = Grounds.new(game)
        this.grounds = grounds
        this.addElement(this.grounds)

        // 分数
        var score = Score.new(game)
        this.score = score
        this.addElement(score)
        this.setupInputs()
        this.scoreNumber = 0
         
    }
    update() {
        super.update()
        var game = this.game
        if (this.bird.hit) {
            var s = SceneEnd.new(game)
            s.score.show = this.scoreNumber
            game.replaceScene(s)
        }
        var pipes = this.pipe.pipes
        for (let i = 0; i < pipes.length / 2; i ++){
            let a = i * 2
            let b = a + 1
            if (rectInterMiddle(this.bird, pipes[a], pipes[b])) {
                this.scoreNumber ++
                this.score.show = this.scoreNumber
            }
        }
    }
    setupInputs() {
        var self = this
        self.game.registerAction('w', function(keyStatus) {
            var b = self.bird
            b.jump()
        })
    }
    draw() {
        super.draw()
    }

}

