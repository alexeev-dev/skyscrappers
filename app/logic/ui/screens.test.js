import updateScreen, {SCREEN_MAIN, SCREEN_GAMEPLAY} from './screens'

const initial = SCREEN_MAIN

test('Переключение экрана на игровой', () => {
  const ui = {
    screen: initial,
    mainScreen: {
      play: true
    }
  }
  const input = {
    width: 1080,
    pageX: 497,
    pageY: 1004,
    isMouseDown: false
  }
  expect(updateScreen(ui, input)).toEqual(SCREEN_GAMEPLAY)
})
