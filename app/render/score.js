import renderSprite from '../core/sprite'

const images = {
  header: 'images/header.png',
  box: 'images/sbox.png',
  star: 'images/sstar.png'
}

function renderScore(ctx, score, textures) {
  ctx.save()
  ctx.translate(217, 30)
  ctx.drawImage(textures[images.header], 0, 0)
  ctx.translate(90, 26)
  ctx.drawImage(textures[images.box], 0, 4)
  ctx.translate(15, 0)
  ctx.fillStyle = '#ffda00'
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)'
  ctx.lineWidth = 2
  ctx.font = 'bold 60px sans-serif'
  ctx.fillText(`${score.boxes}`, 80, 60)
  ctx.strokeText(`${score.boxes}`, 80, 60)
  ctx.translate(250, 0)
  ctx.drawImage(textures[images.star], 0, 0)
  ctx.translate(15, 0)
  ctx.fillText(`${score.stars}`, 80, 60)
  ctx.strokeText(`${score.stars}`, 80, 60)
  ctx.restore()
}

export default renderScore
