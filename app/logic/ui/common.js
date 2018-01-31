import {SCREEN_MAIN, SCREEN_GAMEPLAY} from './screens'
import {testButton} from './utils'

const button = [57, 26, 100, 100]

function detectPause(prev, screen, input) {
  if (screen === SCREEN_GAMEPLAY) {
    return testButton(button, input) ? !prev : prev
  } else {
    return prev
  }
}

function detectQuestion(screen, input) {
  if (screen !== SCREEN_GAMEPLAY) {
    return testButton(button, input)
  } else {
    return false
  }
}

function updateCommon(ui, input, fell, picked) {
  const {pause, score} = ui.common
  return {
    pause: detectPause(pause, ui.screen, input),
    question: detectQuestion(ui.screen, input),
    score: {
      boxes: score.boxes + fell,
      stars: score.stars + picked
    }
  }
}

export default updateCommon
