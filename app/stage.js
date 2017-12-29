import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  ANIMATION_NONE,
  ANIMATION_WALK
} from './constants.js'

const animationFrames = [
  'images/run-1.png',
  'images/run-2.png',
  'images/run-3.png',
  'images/run-4.png',
  'images/run-5.png'
]

const appendBoxes = (stage, sprites, boxes) => {
  boxes.forEach(box => {
    const sprite = new PIXI.Sprite(PIXI.loader.resources['images/box.png'].texture)
    sprite.anchor.set(0.5, 1)
    sprite.position.set(124 + box.hpos * 119, box.vpos)
    sprites.push(sprite)
    stage.addChild(sprite)
  })
}

const updateBoxes = (stage, sprites, prevState, nextState) => {
  const diff = nextState.length - prevState.length
  prevState.forEach((box, i) => {
    if (box !== nextState[i]) {
      sprites[i].y = nextState[i].vpos
    }
  })
  if (diff > 0) {
    appendBoxes(stage, sprites, nextState.slice(0 - diff))
  }
}

const calcAnimationFrame = (frame, ratio, size) => {
  return Math.floor(frame / ratio) % size
}

const getAnimationFrame = (frame, animation) => {
  if (animation === ANIMATION_NONE) {
    return PIXI.utils.TextureCache['images/ice-person.png']
  } else {
    return PIXI.utils.TextureCache[
      animationFrames[calcAnimationFrame(frame, 2, 5)]
    ]
  }
}

const updatePlayer = (sprite, frame, nextState) => {
  sprite.position.set(nextState.posx, nextState.posy)
  sprite.scale.set(nextState.direction === DIRECTION_LEFT ? -1 : 1, 1)
  sprite.texture = getAnimationFrame(frame, nextState.animation)
}

const updateStage = (game, nextState) => {
  updateBoxes(game.stage, game.sprites.boxes, game.state.boxes, nextState.boxes)
  updatePlayer(game.sprites.player, nextState.frame, nextState.player)
}

export default updateStage
