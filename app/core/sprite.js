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
