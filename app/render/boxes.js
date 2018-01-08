import renderSprite from '../core/sprite'

const BOX_TEXTURE = 'images/box.png'

function renderBoxes(ctx, {boxes, scroll}, textures) {
  boxes.forEach(box => {
    const {hpos, vpos} = box
    renderSprite(
      ctx,
      textures[BOX_TEXTURE],
      124 + hpos * 119,
      vpos + scroll,
      60, 119
    )
  })
}

export default renderBoxes
