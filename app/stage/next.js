import Sprite from '../core/sprite'

function nextSprite(hpos, frame) {
  const subframe = (frame + 100) % 180
  const opacity = (subframe < 30 ? subframe / 30
    : subframe > 149 ? 1 - (subframe - 149) / 30 : 1)
  return new Sprite(
    'images/next.png',
    [124 + hpos * 119, 219],
    [60, 119]
  ).withOpacity(opacity)
}

export default nextSprite
