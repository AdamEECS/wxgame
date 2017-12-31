import GuaScene from '../../guagame/gua_scene'
import SceneImage from '../../guagame/scene_image'
import Grounds from '../../scene/main/grounds'
import Background from '../../scene/main/background'
import Birds from '../../scene/main/birds'

export default class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        // 背景
        let bg = Background.new(game, 'bgDay')
        this.addElement(bg)          
        this.initTitle()
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
    initTitle() {
        let title = SceneImage.new(this.game, 'title')
        let w = window.innerWidth
        let h = window.innerHeight
        title.x = Math.floor((w - title.w) / 2)
        title.y = Math.floor((h / 3))
        this.addElement(title)
    }
    setupInputs() {
        var game = this.game
        let handler = event => {
            let s = SceneMain.new(game)
            game.replaceScene(s)
            game.canvas.removeEventListener('touchstart', handler)
        }
        game.canvas.addEventListener('touchstart', handler)
    }
    draw() {
        super.draw()
        let w = Math.floor(window.innerWidth / 2 - 40)
        let h = Math.floor(window.innerHeight / 2 - 30)
        this.game.context.fillText(`点击 开始游戏`, w, h)
    }
}
