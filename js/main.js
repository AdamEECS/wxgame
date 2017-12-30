import GuaGame from './guagame/gua_game'
import SceneTitle from './scene/title/scene_title'
import {log, randomBetween, deleteFromElements, rectInterMiddle, rectIntersects} from './guagame/utils'
window.log = log
window.randomBetween = randomBetween
window.deleteFromElements = deleteFromElements
window.rectInterMiddle = rectInterMiddle
window.rectIntersects = rectIntersects

export default function(){
    var images = {
        bgDay: 'images/FlappyBird/bg_day.png',
        bgNight: 'images/FlappyBird/bg_night.png',
        ground: 'images/FlappyBird/land.png',
        b1: 'images/FlappyBird/bird0_0.png',
        b2: 'images/FlappyBird/bird0_1.png',
        b3: 'images/FlappyBird/bird0_2.png',
        pipe: 'images/FlappyBird/pipe_up.png',
        over: 'images/FlappyBird/text_game_over.png',
        score0: 'images/FlappyBird/font_048.png',
        score1: 'images/FlappyBird/font_049.png',
        score2: 'images/FlappyBird/font_050.png',
        score3: 'images/FlappyBird/font_051.png',
        score4: 'images/FlappyBird/font_052.png',
        score5: 'images/FlappyBird/font_053.png',
        score6: 'images/FlappyBird/font_054.png',
        score7: 'images/FlappyBird/font_055.png',
        score8: 'images/FlappyBird/font_056.png',
        score9: 'images/FlappyBird/font_057.png',
        title: 'images/FlappyBird/title.png',
    }
    var game = GuaGame.instance(30, images, function (g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
}