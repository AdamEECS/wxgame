export default class GuaScene {
    constructor(game) {
        this.game = game
        // this.debugModelEnabled = true
        this.elements = []
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    addElement(ele) {
        this.elements.push(ele)
    }

    draw() {
        for (var e of this.elements) {
            // log(this.elements)
            e.draw()
        }
    }
    update() {
        // if (this.debugModelEnabled) {
        //     for (var e of this.elements) {
        //         e.debug && e.debug()
        //     }
        // }
        for (var e of this.elements) {
            e.update()
        }
    }
}
