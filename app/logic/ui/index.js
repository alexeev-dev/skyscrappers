import {SCREEN_MAIN} from './screens'

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

function calcNextScreen(ui, input) {
  return SCREEN_MAIN
}

export function uiNext(ui, fell, picked, input, delta) {
  return {
    screen: calcNextScreen(ui, input),
    mainScreen: calcMainScreen(ui)
  }
}
