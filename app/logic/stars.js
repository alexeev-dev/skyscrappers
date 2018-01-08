function isAlive({vpos, hpos, pickFrame, birthFrame}, ground, frame) {
  const deathFrame = pickFrame !== -1 ? pickFrame + 30 : birthFrame + 200
  return vpos <= ground[hpos] && frame < deathFrame
}

function isInStar(left, posx) {
  return left < posx && posx < left + 74
}

function isPicked(star, {posx, posy}) {
  const leftBorder = 86 + star.hpos * 119
  if (star.vpos === posy) {
    if (isInStar(leftBorder, posx - 65) || isInStar(leftBorder, posx + 65)) {
      window.score.stars += 1
      return true
    }
  }
  return false
}

function updateStar(star, player, frame) {
  if (star.pickFrame === -1 && isPicked(star, player)) {
    return {
      hpos: star.hpos,
      vpos: star.vpos,
      birthFrame: star.birthFrame,
      pickFrame: frame
    }
  } else {
    return star
  }
}

function updateStars(stars, player, ground, frame) {
  return stars.filter(star => isAlive(star, ground, frame))
    .map(star => updateStar(star, player, frame))
}

export default updateStars
