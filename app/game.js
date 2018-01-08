import {initialState, calcNextState} from './logic/main'
import renderSprite from './core/sprite'
import renderFrame from './render/main'
import initInput from './input'
// Подготовка движка браузера для анимаций
// https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

let lastTime = 0

function gameLoop(game) {
  const now = Date.now()
  const state = calcNextState(game.input, game.state, now - lastTime)
  renderFrame(game.fg, state, window.score, game.textures)
  game.state = state
  lastTime = Date.now()
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
  window.score = {
    boxes: 0,
    stars: 0
  }
  // Отрисовываем статичный фон
  renderSprite(game.bg, textures['images/bg.png'])
  // Инициализация подсистем ввода
  initInput(game.input)
  /*
  const gameEl = document.getElementById('game');
  gameEl.addEventListener('click', function() {
    gameEl.mozRequestFullScreen()
  })
  */
  // Запуск главного цикла игры
  lastTime = Date.now()
  requestAnimationFrame(function () {
    gameLoop(game)
  })
}

export default initGame
