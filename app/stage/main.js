import boxSprite from './box'
import playerSprite from './player'

function calcStage(gameState) {
  const {boxes, player, frame} = gameState
  return [
    boxes.map(boxSprite),
    playerSprite(frame, player)
  ]
}

export default calcStage
