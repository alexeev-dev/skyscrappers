function isAlive({vpos, hpos, pickFrame, birthFrame}, ground, frame) {
  const deathFrame = pickFrame !== -1 ? pickFrame + 30 : birthFrame + 200
  return vpos <= ground[hpos] && frame < deathFrame
}

function isInStar(center, posx) {
  return center - 65 < posx && posx < center + 65
}

function isPicked(star, {posx, posy}) {
  const left = 86 + star.hpos * 119
  if (star.vpos === posy) {
    if (isInStar(posx, left - 37) || isInStar(posx, left + 37)) {
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

function updateStars(player, ground, {frame, stage}) {
  const {stars} = stage
  return stars.filter(star => isAlive(star, ground, frame))
    .map(star => updateStar(star, player, frame))
}

export default updateStars
