import {initUI} from './ui'
import {initGameplay, gameplayNext} from './gameplay'

export function initState() {
  return {
    ui: initUI(),
    gameplay: initGameplay()
  }
}

export function calcNextState(state, input, delta) {
  const [gameplay, fell, picked] = gameplayNext(state.gameplay, input, delta)
  return {
    gameplay,
    ui: uiNext(state.ui, fell, picked, input, delta)
  }
}
