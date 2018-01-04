import Sprite from '../core/sprite'

function boxSprite({hpos, vpos}) {
  return new Sprite(
    'images/box.png',
    [124 + hpos * 119, vpos],
    [60, 119]
  )
}

export default boxSprite
