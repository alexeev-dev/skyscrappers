import boxSprite from './box'
import playerSprite from './player'
import nextSprite from './next'
import Sprite from '../core/sprite'

function gameOverSprite(isRun) {
  return new Sprite('images/gameOver.png', [138, 654])
    .withOpacity(isRun ? 0 : 1)
}

function calcStage(gameState) {
  const {boxes, player, frame, next, isRun} = gameState
  return [
    next.map(hpos => nextSprite(hpos, frame)),
    boxes.map(boxSprite),
    playerSprite(frame, player),
    gameOverSprite(isRun)
  ]
}

export default calcStage
