import moveBoxes from './boxes'
import updateGround from './ground'
import updatePlayer from './player'

function calcNextState(input, prevState, deltaTime) {
  const [boxes, fell] = moveBoxes(prevState)
  const ground = updateGround(fell, prevState)
  const player = updatePlayer(boxes, ground, input, prevState)
  const frame = prevState.frame + 1
  return {frame, boxes, ground, player}
}

export default calcNextState
