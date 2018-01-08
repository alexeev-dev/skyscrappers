import renderSprite from '../core/sprite'
import {
  ANIMATION_NONE,
  ANIMATION_WALK,
  ANIMATION_DEAD,
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
  if (animation === ANIMATION_NONE || animation === ANIMATION_DEAD) {
    return 'images/player.png'
  } else {
    return animationFrames[calcFrameIndex(frame, 2, 5)]
  }
}

function spriteScale(direction, animation, start, frame) {
  const scaleBase = direction === DIRECTION_LEFT ? [-1, 1] : [1, 1]
  if (animation !== ANIMATION_DEAD) {
    return scaleBase
  } else {
    if (frame - start < 30) {
      return [scaleBase[0], 1 - (frame - start) / 30]
    } else {
      return [scaleBase[0], 0]
    }
  }
}

function renderPlayer(ctx, {frame, player, scroll}, textures) {
  const {posx, posy, direction, animation, start} = player
  const [scaleX, scaleY] = spriteScale(direction, animation, start, frame)
  renderSprite(
    ctx,
    textures[animationFrame(frame, animation)],
    posx, posy + scroll,
    65, 131,
    scaleX, scaleY
  )
}

export default renderPlayer
