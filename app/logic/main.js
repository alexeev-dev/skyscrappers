import moveBoxes from './boxes'
import updateGround from './ground'
import updatePlayer from './player'
import {
  ANIMATION_NONE,
  ANIMATION_WALK,
  DIRECTION_LEFT,
  DIRECTION_RIGHT
} from '../const'

export const initialState = {
  ground: [1585, 1585, 1585, 1585, 1585, 1585, 1585, 1585],
  frame: 0,
  boxes: [{
    hpos: 0,
    vpos: 100,
    speed: 30,
    isFly: true
  }],
  player: {
    posx: 540,
    posy: 1585,
    animation: ANIMATION_NONE,
    direction: DIRECTION_RIGHT
  }
}

export function calcNextState(input, prevState, deltaTime) {
  const [boxes, fell] = moveBoxes(prevState)
  const ground = updateGround(fell, prevState)
  const player = updatePlayer(boxes, ground, input, prevState)
  const frame = prevState.frame + 1
  return {frame, boxes, ground, player}
}
