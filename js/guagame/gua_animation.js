export default class GuaAnimation {
    constructor(game) {
        this.game = game
        this.animations = {}
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    actionNumber() {
        return this.frames().length
    }
    update() {
        // var animations = this.game.scene.animations
        this.changeFrame()
    }
    draw() {
        var context= this.game.context
        context.save()
        var w2 = this.w / 2
        var h2 = this.h / 2
        //转移坐标系
        context.translate(this.x + w2, this.y + h2)
        //翻转
        if (this.flipX) {
            context.scale(-1, 1)          
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()    
    }
    move(x, keyStatus) {
        this.flipX = ( x< 0 )
        this.x += x
        log(keyStatus,this.flipX)
    }
    changeAnimation(name) {
        this.animationName = names
    }
    changeFrame() {
        if (this.frameCount === 0) {
            this.frameCount = this.actionNumber()
            this.frameIndex = (this.frameIndex + 1) % this.frameCount
            this.texture = this.frames()[this.frameIndex]
        } else {
            this.frameCount --
        }

    }
}