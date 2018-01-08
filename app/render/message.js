import renderSprite from '../core/sprite'

const MESSAGE_TEXTURE = 'images/gameOver.png'

function renderMessage(ctx, textures) {
  renderSprite(ctx, textures[MESSAGE_TEXTURE], 138, 654)
}

export default renderMessage
