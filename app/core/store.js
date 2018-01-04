import frames from '../computers/state/frames'
import ground from '../computers/state/ground'
import player from '../computers/state/player'
import boxes from '../computers/state/boxes'

/**
 * Возвращает функцию, которая заменяет методы объекта на результат их вызова
 */

const combine = (items) => {
  return (state, input, deltaTime) => {
    let result = {}
    Object.getOwnPropertyNames(items).forEach(key => {
      result[key] = items[key](state, input, deltaTime)
    })
    return result
  }
}

/**
 * Создаём функцию для вычисления нового состояния игры
 */

const nextState = combine({frames, ground, boxes, player})

/**
 * Хранилище состояния игры
 */

class Store {
  constructor() {
    this.state = nextState()
  }

  calcNextState(input, deltaTime) {
    this.state = nextState(this.state, input, deltaTime)
  }

  getState() {
    return this.state
  }
}

export default Store
