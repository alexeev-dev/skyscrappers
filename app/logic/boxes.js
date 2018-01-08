function moveBox(box, ground, coof) {
  if (box.isFly) {
    const {hpos, vpos, speed, isFly} = box
    const groundLevel = ground[hpos]
    const vposNext = vpos + speed * coof
    const isFell = vposNext >= groundLevel
    if (isFell) {
      window.score.boxes += 1
    }
    return [{
      hpos, vpos: isFell ? groundLevel : vposNext,
      speed: isFell ? 0 : speed,
      isFly: !isFell
    }, isFell]
  } else {
    return [box, false]
  }
}

function moveBoxes(prevState, coof) {
  const {boxes, ground, scroll} = prevState
  return boxes.filter(box => box.vpos + scroll < 2050)
    .reduce(function (result, box) {
      const [boxNext, isFell] = moveBox(box, ground, coof)
      result[0].push(boxNext)
      if (isFell) {
        result[1].push(boxNext.hpos)
      }
      return result
    }, [[],[]])
}

export default moveBoxes
