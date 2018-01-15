import {initUI} from './ui/main'
import {initGameplay} from './gameplay/main'

export function initState() {
  return {
    ui: initUI(),
    gameplay: initGameplay()
  }
}

export function calcNextState(state, input, delta) {

}
