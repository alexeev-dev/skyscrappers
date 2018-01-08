import moveBoxes from './boxes'
import updateGround from './ground'
import updatePlayer from './player'
import updateStars from './stars'
import {addStar, addBoxes, nextBoxPositions} from './generator'
import {
  ANIMATION_NONE,
  ANIMATION_WALK,
  ANIMATION_DEAD,
  DIRECTION_LEFT,
  DIRECTION_RIGHT
} from '../const'

export const initialState = {
  ground: [1585, 1585, 1585, 1585, 1585, 1585, 1585, 1585],
  needStars: false,
  needBoxes: true,
  scaledFrames: 0,
  isRun: true,
  frame: 0,
  boxes: [],
  stars: [],
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

const starCycle = frame => Math.floor(frame) % 100
const boxCycle = frame => Math.floor(frame) % 180

export function calcNextState(input, prevState, deltaTime) {
  const coof = deltaTime / 16
  if (prevState.isRun) {
    const [boxes, fell] = moveBoxes(prevState, coof)
    const ground = updateGround(fell, prevState)
    const player = updatePlayer(boxes, ground, input, coof, prevState)
    const stars = updateStars(prevState.stars, player, ground, prevState.scaledFrames)
    const frame = prevState.frame + 1
    const scaledFrames = prevState.scaledFrames + coof
    const next = nextBoxPositions(Math.floor(scaledFrames) + 100)
    const needBoxes = boxCycle(scaledFrames) >= 40 && boxCycle(prevState.scaledFrames) < 40
    const needStars = starCycle(scaledFrames) >= 50 && starCycle(prevState.scaledFrames) < 50
    const level = player.posy + prevState.scroll
    const scrollStep = level < 1200 ? (1200 - level) / 500 : 0
    return {
      frame,
      needBoxes,
      needStars,
      scaledFrames,
      boxes: addBoxes(Math.floor(scaledFrames), needBoxes, boxes, prevState.scroll),
      stars: addStar(Math.floor(scaledFrames), needStars, stars, ground),
      ground,
      player,
      next,
      scroll: prevState.scroll + scrollStep * coof,
      isRun: !isGameOver(player.animation, player.start, frame)
    }
  } else {
    return prevState
  }
}
