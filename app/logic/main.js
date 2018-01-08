import moveBoxes from './boxes'
import updateGround from './ground'
import updatePlayer from './player'
import {addBoxes, nextBoxPositions} from './generator'
import {
  ANIMATION_NONE,
  ANIMATION_WALK,
  ANIMATION_DEAD,
  DIRECTION_LEFT,
  DIRECTION_RIGHT
} from '../const'

export const initialState = {
  ground: [1585, 1585, 1585, 1585, 1585, 1585, 1585, 1585],
  needBoxes: true,
  scaledFrames: 0,
  isRun: true,
  frame: 0,
  boxes: [],
  player: {
    posx: 540,
    posy: 1585,
    start: 0,
    animation: ANIMATION_NONE,
    direction: DIRECTION_RIGHT
  },
  scroll: 0,
  next: []
}

function isGameOver(animation, start, frame) {
  if (animation === ANIMATION_DEAD) {
    return frame - start > 60
  } else {
    return false
  }
}

export function calcNextState(input, prevState, deltaTime) {
  const coof = deltaTime / 16
  if (prevState.isRun) {
    const [boxes, fell] = moveBoxes(prevState, coof)
    const ground = updateGround(fell, prevState)
    const player = updatePlayer(boxes, ground, input, coof, prevState)
    const frame = prevState.frame + 1
    const scaledFrames = prevState.scaledFrames + coof
    const next = nextBoxPositions(Math.floor(scaledFrames) + 100)
    const needBoxes = Math.floor(scaledFrames) % 180 <= 40 ? true : false
    return {
      frame,
      needBoxes,
      scaledFrames,
      boxes: addBoxes(Math.floor(scaledFrames), prevState.needBoxes, boxes, prevState.scroll),
      ground,
      player,
      next,
      scroll: prevState.scroll + 0.2 * coof,
      isRun: !isGameOver(player.animation, player.start, frame)
    }
  } else {
    return prevState
  }
}
