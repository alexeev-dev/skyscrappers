import {initialState, calcNextState} from './logic/main'
import calcStage from './stage/main'
import renderStage from './core/stage'
import Sprite from './core/sprite'
import initInput from './input'
// Подготовка движка браузера для анимаций
// https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

function gameLoop(game) {
  const state = calcNextState(game.input, game.state, 0)
  const stage = calcStage(state)
  game.fg.clearRect(0, 0, 1080, 1920)
  renderStage(game.fg, stage, game.textures)
  game.state = state
  requestAnimationFrame(function () {
    gameLoop(game)
  })
}

function initGame(textures) {
  const game = {
    textures,
    state: initialState,
    bg: document.getElementById('bg').getContext('2d'),
    fg: document.getElementById('fg').getContext('2d'),
    input: {
      isLeftDown: false,
      isRightDown: false
    }
  }
  // Отрисовываем статичный фон
  renderStage(game.bg, [
    new Sprite('images/bg.png'),
    new Sprite('images/ground.png', [0, 1377])
  ], textures)
  // Инициализация подсистем ввода
  initInput(game.input)

  const gameEl = document.getElementById('game');
  gameEl.addEventListener('click', function() {
    gameEl.mozRequestFullScreen()
  })
  
  // Запуск главного цикла игры
  requestAnimationFrame(function () {
    gameLoop(game)
  })
}

export default initGame
