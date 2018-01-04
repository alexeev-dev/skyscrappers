import Sprite from '../core/sprite'
import {
  ANIMATION_NONE,
  ANIMATION_WALK,
  DIRECTION_LEFT,
  DIRECTION_RIGHT
} from '../const'

const animationFrames = [
  'images/run-1.png',
  'images/run-2.png',
  'images/run-3.png',
  'images/run-4.png',
  'images/run-5.png'
]

function calcFrameIndex(frame, ratio, size) {
  return Math.floor(frame / ratio) % size
}

function animationFrame(frame, animation) {
  if (animation === ANIMATION_NONE) {
    return 'images/player.png'
  } else {
    return animationFrames[calcFrameIndex(frame, 2, 5)]
  }
}

function playerSprite(frame, {posx, posy, direction, animation}) {
  return new Sprite(
    animationFrame(frame, animation),
    [posx, posy],
    [65, 131],
    direction === DIRECTION_LEFT ? [-1, 1] : [1, 1]
  )
}

export default playerSprite
