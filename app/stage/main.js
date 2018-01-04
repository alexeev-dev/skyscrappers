import boxSprite from './box'
import playerSprite from './player'
import nextSprite from './next'

function calcStage(gameState) {
  const {boxes, player, frame, next} = gameState
  return [
    next.map(hpos => nextSprite(hpos, frame)),
    boxes.map(boxSprite),
    playerSprite(frame, player)
  ]
}

export default calcStage
