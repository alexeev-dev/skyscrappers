function renderSprite(ctx, sprite, textures) {
  if (typeof textures[sprite.texture] !== 'undefined') {
    ctx.save()
    ctx.translate(sprite.position[0], sprite.position[1])
    ctx.rotate(sprite.rotation)
    ctx.scale(sprite.scale[0], sprite.scale[1])
    ctx.translate(-sprite.anchor[0], -sprite.anchor[1])
    ctx.drawImage(textures[sprite.texture], 0, 0)
    ctx.restore()
  }
}

function renderCollection(ctx, collection, textures) {
  collection.forEach(item => {
    if (Array.isArray(item)) {
      renderCollection(ctx, item, textures)
    } else {
      renderSprite(ctx, item, textures)
    }
  })
}

function renderStage(ctx, stage, textures) {
  renderCollection(ctx, stage, textures)
}

export default renderStage
