class Sprite {
  constructor(texture, position, anchor, scale, rotation, opacity) {
    this.texture = texture
    this.position = position !== undefined ? position : [0, 0]
    this.anchor = anchor !== undefined ? anchor : [0, 0]
    this.scale = scale !== undefined ? scale : [1, 1]
    this.rotation = rotation !== undefined ? rotation : 0
    this.opacity = opacity !== undefined ? opacity : 1
    Object.freeze(this)
  }

  withOpacity(opacity) {
    return new Sprite(
      this.texture,
      this.position,
      this.anchor,
      this.scale,
      this.rotation,
      opacity
    )
  }
}

function renderSprite(
  ctx,
  image,
  x = 0,
  y = 0,
  aX = 0,
  aY = 0,
  sX = 1,
  sY = 1,
  opacity = 1
){
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(sX, sY)
  ctx.translate(-aX, -aY)
  ctx.globalAlpha = opacity
  ctx.drawImage(image, 0, 0)
  ctx.restore()
}

export default renderSprite
