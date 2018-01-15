import {SCREEN_MAIN} from './screens'

export function initUI() {
  return {
    screen: SCREEN_MAIN,
    mainScreen: {
      addPerson: false,
      addPlace: false,
      choosePerson: false,
      choosePlace: false,
      challenge: false
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
