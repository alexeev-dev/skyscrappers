import {buttons} from './main'
import {testButtonUp} from './utils'

export const SCREEN_MAIN = 'SCREEN_MAIN'
export const SCREEN_GAMEPLAY = 'SCREEN_GAMEPLAY'

function updateScreen(ui, input) {
  const {play} = ui.mainScreen
  if (ui.screen === SCREEN_MAIN && play && testButtonUp(buttons.play, input)) {
    return SCREEN_GAMEPLAY
  } else {
    return ui.screen
  }
}

export default updateScreen
