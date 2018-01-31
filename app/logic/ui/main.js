import {isInRect, mapToScreen} from './utils'
import {SCREEN_MAIN} from './screens'

const buttons = {
  addPerson: [40, 1037, 109, 113],
  addPlace: [950, 1037, 109, 113],
  choosePerson: [154, 896, 209, 220],
  choosePlace: [708, 896, 226, 220],
  challenge: [301, 1259, 480, 151],
  play: [411, 903, 253, 265]
}

function testButton(button, input) {
  if (input.isMouseDown) {
    const {pageX, pageY, width} = input
    const p = mapToScreen(pageX, pageY, width)
    return isInRect(button, p)
  } else {
    return false
  }
}

function updateMainScreen(ui, input) {
  if (ui.screen !== SCREEN_MAIN) {
    return ui.mainScreen
  } else {
    return {
      addPerson: testButton(buttons.addPerson, input),
      addPlace: testButton(buttons.addPlace, input),
      choosePerson: testButton(buttons.choosePerson, input),
      choosePlace: testButton(buttons.choosePlace, input),
      challenge: testButton(buttons.challenge, input),
      play: testButton(buttons.play, input)
    }
  }
}

export default updateMainScreen
