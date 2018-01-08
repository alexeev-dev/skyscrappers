import renderSprite from '../core/sprite'

const GROUND_TEXTURE = 'images/ground.png'

function renderGround(ctx, {scroll}, textures) {
  const posy = 1377 + Math.floor(scroll)
  renderSprite(ctx, textures[GROUND_TEXTURE], 0, posy)
}

export default renderGround
