import GuaScene from '../../guagame/gua_scene'
import SceneImage from '../../guagame/scene_image'
import Background from '../../scene/main/background'
import Score from '../../scene/main/score'
import Grounds from '../../scene/main/grounds'

export default class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        // 背景
        let bg = Background.new(game, 'bgDay')
        this.addElement(bg)         
        
        // 结束标题
        this.initOverTitle()

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
    initOverTitle() {
        let over = SceneImage.new(this.game, 'over')
        let w = window.innerWidth
        let h = window.innerHeight
        over.x = Math.floor((w - over.w) / 2)
        over.y = Math.floor((h / 5))
        this.addElement(over)
    }
    setupInputs() {
        var game = this.game
        let handler = event => {
            let s = SceneTitle.new(game)
            game.replaceScene(s)
            game.canvas.removeEventListener('touchstart', handler)
        }
        game.canvas.addEventListener('touchstart', handler)
    }
    draw() {
        super.draw()
        let w = Math.floor(window.innerWidth / 2 - 40)
        let h = Math.floor(window.innerHeight / 2 - 30)
        this.game.context.fillText(`点击重新开始游戏`, w, h)
    }
}
