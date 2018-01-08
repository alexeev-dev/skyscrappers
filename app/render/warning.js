import renderSprite from '../core/sprite'

const WARNING_BOX_TEXTURE = 'images/next.png'

function renderWarning(ctx, {next, scaledFrames}, textures) {
  const frame = Math.floor(scaledFrames)
  const subframe = (frame + 100) % 180
  const opacity = (subframe < 30 ? subframe / 30
    : subframe > 149 ? 1 - (subframe - 149) / 30 : 1)
  next.forEach(hpos => {
    renderSprite(
      ctx,
      textures[WARNING_BOX_TEXTURE],
      124 + hpos * 119, 339,
      60, 119,
      1, 1, opacity
    )
  })
}

export default renderWarning
