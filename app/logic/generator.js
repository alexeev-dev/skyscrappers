const boxesPattern = [
  [0, 1, 4],
  [1, 2, 5, 7],
  [0, 2, 3, 6],
  [3, 4, 6],
  [5, 7]
]

function makeBox(hpos, scroll) {
  return {
    hpos,
    vpos: 319 - scroll,
    speed: 50,
    isFly: true
  }
}

function makeBoxes(positions, scroll) {
  return positions.map(hpos => makeBox(hpos, scroll))
}

function patternIndex(frame, size) {
  return Math.floor(frame / 180) % size
}

export function nextBoxPositions(frame) {
  return boxesPattern[patternIndex(frame, 5)]
}

export function addBoxes(frame, needBoxes, boxes, scroll) {
  if (needBoxes && frame % 180 > 40) {
    return boxes.concat(makeBoxes(nextBoxPositions(frame), scroll))
  } else {
    return boxes
  }
}
