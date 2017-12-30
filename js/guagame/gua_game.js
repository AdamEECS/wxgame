export default class GuaGame {
    constructor(fps, images, runCallback) {
        // TODO 当前版本不支持设置帧率
        // wx.setPreferredFramesPerSecond(fps)  
        let self = this
        self.images = images
        self.runCallback = runCallback
        self.scene = null
        self.actions = {}
        self.keydowns = {}
        self.canvas = canvas
        self.context = self.canvas.getContext('2d')
        self.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }
    // update
    update() {
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    //
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        // events
        var g = this
        var actions = Object.keys(g.actions)
        // log(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            var status = g.keydowns[key]
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        window.requestAnimationFrame(
            g.runloop.bind(g),
            g.canvas
        )
    }
    textureByName(name) {
        var g = this
        var img = g.images[name]
        log('img', img)
        return img
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        window.requestAnimationFrame(
            g.runloop.bind(g),
            g.canvas
        )
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)
    }

    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                g.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }
}
