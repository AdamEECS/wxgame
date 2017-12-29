import GuaScene from '../../guagame/gua_scene'
import SceneImage from '../../guagame/scene_image'
import Grounds from '../../scene/main/grounds'
import Birds from '../../scene/main/birds'

export default class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        // 背景
        var bg = SceneImage.new(game, 'bgDay')
        this.addElement(bg)          
        
        // 小鸟
        var bird = Birds.new(this.game)
        this.bird = bird
        
        this.addElement(bird)

        // 地面  
        var grounds = Grounds.new(game)
        this.grounds = grounds
        this.addElement(this.grounds)
        this.setupInputs()
    }
    update() {
        super.update()
        
    }
    setupInputs() {
        var game = this.game
        // game.registerAction('w', function(keyStatus) {
        //     var s = Scene.new(game)
        //     game.replaceScene(s)
        // })
    }
    draw() {
        super.draw()
        this.game.context.fillText(`按 w 开始游戏`, 90, 230)
    }
}
