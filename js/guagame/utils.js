
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.h) {
        if (b.x > o.x && b.x < o.x + o.w) {
            return true
        }
    }
    return false
}
/**
 * 现专用于 穿越水管
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 */
var rectInterMiddle = function(a, b, c) {
    var o = a
    if (!b.throughed && !c.throughed) {
        if (o.x > b.x && o.y > b.y) {
            if (o.x > c.x && o.y < c.y) {
                return true
            }
        }
    }
    return false
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

var deleteFromElements = function(sceneItem) {
    var elements = sceneItem.game.scene.elements
    elements.splice(elements.indexOf(sceneItem), 1)
}

export {
    log, bindEvent, bindAll, deleteFromElements, randomBetween, rectInterMiddle,
    rectIntersects,
}