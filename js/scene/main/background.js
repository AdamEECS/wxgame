import SceneImage from '../../guagame/scene_image'

export default class Background {
    constructor(game, name) {
        let self = this
        self.game = game
        self.w = window.innerWidth
        self.h = window.innerHeight
        self.texture = game.textureByName(name)
        self.x = 0
        self.y = 0
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    update() {
        
    }
    draw() {
        let self = this
        self.game.context.drawImage(self.texture, self.x, self.y, self.w, self.h)
    }
}