function moveBox(box, ground) {
  if (box.isFly) {
    const {hpos, vpos, speed, isFly} = box
    const groundLevel = ground[hpos]
    const vposNext = vpos + speed
    const isFell = vposNext >= groundLevel
    return [{
      hpos, vpos: isFell ? groundLevel : vposNext,
      speed: isFell ? 0 : speed + 3,
      isFly: !isFell
    }, isFell]
  } else {
    return [box, false]
  }
}

function moveBoxes(prevState) {
  const {boxes, ground} = prevState
  return boxes.reduce(function (result, box) {
    const [boxNext, isFell] = moveBox(box, ground)
    result[0].push(boxNext)
    if (isFell) {
      result[1].push(boxNext.hpos)
    }
    return result
  }, [[],[]])
}

export default moveBoxes
