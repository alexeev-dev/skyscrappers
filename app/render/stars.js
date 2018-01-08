import renderSprite from '../core/sprite'

const STAR_TEXTURE = 'images/star.png'

function calcOpacity(birthFrame, pickFrame, frame) {
  if (pickFrame !== -1) {
    const remain = frame - pickFrame
    return remain > 30 ? 0 : 1 - remain / 30
  } else {
    const remain = (birthFrame + 200) - frame
    return remain > 30 ? 1 : remain / 30
  }
}

function calcScale(pickFrame, frame) {
  if (pickFrame !== -1) {
    const remain = frame - pickFrame
    return remain > 30 ? 3 : 1 + remain / 15
  } else {
    return 1
  }
}

function renderStars(ctx, {stars, scroll, scaledFrames}, textures) {
  stars.forEach(star => {
    const {hpos, vpos, birthFrame, pickFrame} = star
    const scale = calcScale(pickFrame, scaledFrames)
    renderSprite(
      ctx,
      textures[STAR_TEXTURE],
      124 + hpos * 119,
      vpos + scroll - 10,
      37, 71,
      scale, scale,
      calcOpacity(birthFrame, pickFrame, scaledFrames)
    )
  })
}

export default renderStars
