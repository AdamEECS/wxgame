import GuaScene from '../../guagame/gua_scene'
import SceneImage from '../../guagame/scene_image'

export default class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        // 背景
        var bg = SceneImage.new(game, 'bgDay')
        this.addElement(bg)          
        
        // 结束标题
        var over = SceneImage.new(this.game, 'over')
        over.x = 50
        over.y = 250
        this.addElement(over)

        // 地面  
        var grounds = Grounds.new(game)
        this.grounds = grounds
        this.addElement(this.grounds)
        // 分数
        var score = Score.new(game)
        this.score = score
        this.addElement(this.score)

        this.setupInputs()
    }
    update() {
        super.update()
        
    }
    setupInputs() {
        var game = this.game
        game.registerAction('s', function(keyStatus) {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        super.draw()
        this.game.context.fillText(`按 s 重新开始游戏`, 90, 430)
    }
}
