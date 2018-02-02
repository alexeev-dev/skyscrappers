import updateScreen, {SCREEN_MAIN} from './screens'
import updateMainScreen from './main'
import updateCommon from './common'
import updateGameplay from './gameplay'
import updateSound from './sound'
import updateResult from './result'

export function initUI() {
  return {
    screen: SCREEN_MAIN,
    mainScreen: {
      addPerson: false,
      addPlace: false,
      choosePerson: false,
      choosePlace: false,
      challenge: false,
      play: false
    },
    common: {
      pause: false,
      question: false,
      score: {
        boxes: 0,
        stars: 0
      }
    },
    gameplay: {
      left: false,
      right: false,
      score: 0
    },
    soundMenu: {
      isOpen: false,
      sound: true,
      music: true
    },
    result: {
      isOpen: false,
      close: false,
      continue: false
    }
  }
}

export function uiNext(ui, fell, picked, input, delta) {
  return {
    screen: updateScreen(ui, input),
    mainScreen: updateMainScreen(ui, input),
    common: updateCommon(ui, input, fell, picked),
    gameplay: updateGameplay(ui, input, fell),
    soundMenu: updateSound(ui, input),
    result: updateResult(ui, input)
  }
}
