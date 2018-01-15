import renderSprite from '../core/sprite'

const BOX_TEXTURE = 'images/box.png'
const AIR_TEXTURE = 'images/air.png'

function renderBoxes(ctx, {boxes, scroll}, textures) {
  boxes.forEach(box => {
    const {hpos, vpos, isFly} = box
    renderSprite(
      ctx,
      textures[BOX_TEXTURE],
      124 + hpos * 119,
      vpos + scroll,
      60, 119
    )
    if (isFly) {
      renderSprite(
        ctx,
        textures[AIR_TEXTURE],
        131 + hpos * 119,
        vpos + scroll,
        53, 797
      )
    }
  })
}

export default renderBoxes
