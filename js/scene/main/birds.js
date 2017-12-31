import GuaAnimation from '../../guagame/gua_animation'

export default class Birds extends GuaAnimation {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        var action = []
        for (var i = 1; i < 4; i++) {
                var name = `b${i}`
                var t = this.game.textureByName(name)
                action.push(t)
        }
        let ground = this.game.textureByName('ground')
        this.animations['fly'] = action
        this.animationName = 'fly'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.hBottom = window.innerHeight - ground.height - 33
        this.initPosition()
        this.frameIndex = 0
        this.frameCount = this.actionNumber()
        // 重力和加速度
        this.gy = 5
        this.vy = 0
        this.rotation = 0
        this.flipX = false
        this.hover = true
        this.hit = false
    }
    jump() {
        this.vy = -5
        this.rotation = -35
    }
    initPosition() {
        let w = window.innerWidth
        let h = window.innerHeight
        let x = Math.floor(w / 2 - this.w / 2) 
        let y = Math.floor(h / 2 )
        this.x = x
        this.y = y
    }
    update() {
        // 更新受力
        super.update()
        if (this.hover){
            return
        }
        this.y += this.vy
        this.vy += this.gy * 0.05
        let h = this.hBottom
        let top = -10
        let left = -10
        let right = window.innerWidth
        // 上下边界控制
        if (this.y > h) {
            this.y = h
            this.rotation = 0
        } else if (this.y < top){
            this.y = top
        }
        // 左右边界控制
        if (this.x > right) {
            this.x = right
        } else if (this.x < left) {
            this.x = left
        }
        // 更新角度
        if (this.rotation < 35) {
            this.rotation += 2
        }

        this.checkCollide()
        
    }
    checkCollide() {
        let pipes = this.game.scene.pipe.pipes
        let a = this
        for (let i = 0; i < pipes.length; i ++) {
            let b = pipes[i]
            if(rectIntersects(b, a) || rectIntersects(a, b)){
                this.hit = true
            }
        }
    }
    
}