import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  ANIMATION_NONE,
  ANIMATION_WALK
} from './constants.js'
// Начальное состояние игры
const initialState = {
  ground: [1585, 1585, 1585, 1585, 1585, 1585, 1585, 1585],
  boxes: [],
  player: {
    posx: 540,
    posy: 1450,
    direction: DIRECTION_RIGHT,
    animation: ANIMATION_NONE
  },
  frame: 0
}
// Шаблон появления коробочек
const boxesPattern = [
  [0, 1, 4],
  [1, 2, 5, 7],
  [0, 2, 3, 6],
  [3, 4, 6],
  [5, 7]
]
// Вычисляет новое положение коробки
const calcNextBox = (box, ground) => {
  if (box.isFly) {
    const groundLevel = ground[box.hpos]
    const vpos = box.vpos + box.speed
    const isFell = vpos >= groundLevel
    return [{
      hpos: box.hpos,
      vpos: isFell ? groundLevel : vpos,
      speed: isFell ? 0 : box.speed + 3,
      isFly: !isFell
    }, isFell]
  } else {
    return [box, false]
  }
}
// Вычисляет новое положение коробок, а так же список упавших коробок
const calcNextBoxes = (boxes, ground) => {
  let nextBoxes = [], fellBoxes = []
  boxes.forEach((box, i) => {
    const [nextBox, isFell] = calcNextBox(box, ground)
    nextBoxes.push(nextBox)
    if (isFell) {
      fellBoxes.push(box.hpos)
    }
  })
  return [nextBoxes, fellBoxes]
}
// Вычисляет новое состояние поверхности
const calcNextGround = (ground, fellBoxes) => {
  const nextGround = ground.concat()
  fellBoxes.forEach((hpos) => {
    nextGround[hpos] -= 119
  })
  return nextGround
}
// Вычисляет индекс для поверхности
const calcGroundIndex = (posx) => Math.min(Math.floor((posx - 64) / 119), 7)
// Вычисляет новое местонахождение игрока
const calcNextPlayerPosX = (player, ground, input) => {
  if (input.isLeftDown) {
    const posx = player.posx - 15
    if ((player.posy - ground[calcGroundIndex(posx)] > 120) || posx < 64) {
      return player.posx
    } else {
      return posx
    }
  } else if (input.isRightDown) {
    const posx = player.posx + 15
    if ((player.posy - ground[calcGroundIndex(posx)] > 120) || posx > 1016) {
      return player.posx
    } else {
      return posx
    }
  } else {
    return player.posx
  }
}
// Вычисляет вертикальное положение игрока
const calcNextPlayerPosY = (posx, ground) => ground[calcGroundIndex(posx)]
// Вычисляет направление игрока
const calcNextPlayerDirection = (direction, input) => (
  input.isLeftDown ? DIRECTION_LEFT : input.isRightDown ? DIRECTION_RIGHT : direction
)
// Вычисляет новое состояние анимации
const calcNextAnimation = (input) => (
  input.isLeftDown || input.isRightDown ? ANIMATION_WALK : ANIMATION_NONE
)
// Вычисляет новое состояние игрока
const calcNextPlayer = (player, ground, input) => {
  const posx = calcNextPlayerPosX(player, ground, input)
  return {
    posx,
    posy: calcNextPlayerPosY(posx, ground),
    direction: calcNextPlayerDirection(player.direction, input),
    animation: calcNextAnimation(input)
  }
}
// Создаёт коробочки
const makeBoxes = (next) => {
  return boxesPattern[next].map(hpos => {
    return {
      hpos,
      vpos: 100,
      speed: 30,
      isFly: true
    }
  })
}
// Объединяет коробочки
const appendBoxes = (frame, boxes) => {
  if (frame % 180 === 0) {
    const next = Math.floor(frame / 180)
    return boxes.concat(makeBoxes(next % 5))
  } else {
    return boxes
  }
}
// Вычисляет новое состояние игры
const calcNextState = (prevState, gameInput) => {
  if (typeof prevState === 'undefined') {
    return initialState
  } else {
    const [nextBoxes, fellBoxes] = calcNextBoxes(prevState.boxes, prevState.ground)
    const nextGround = calcNextGround(prevState.ground, fellBoxes)
    const nextPlayer = calcNextPlayer(prevState.player, nextGround, gameInput)
    return {
      ground: nextGround,
      boxes: appendBoxes(prevState.frame, nextBoxes),
      player: nextPlayer,
      frame: prevState.frame + 1
    }
  }
}

export default calcNextState
