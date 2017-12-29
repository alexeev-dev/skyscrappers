import 'pixi.js'
import calcNextState from './gameplay'
import updateStage from './stage'

let app = new PIXI.Application({width: 1080, height: 1920, forceCanvas: true})
document.body.appendChild(app.view)

/* Загружаем необходимые ресурсы для игры */
PIXI.loader
  .add('images/bg.png')
  .add('images/box.png')
  .add('images/ground.png')
  .add('images/ice-person.png')
  .add([
    'images/run-1.png',
    'images/run-2.png',
    'images/run-3.png',
    'images/run-4.png',
    'images/run-5.png'
  ])
  .on('progress', loadProgressHandler)
  .load(setup)

function loadProgressHandler(loader, resource) {
  console.log(loader.progress + '%')
}

/* После загрузки отображаем нашу сцену */
function setup() {
  const [bg, ground, player] = [
    new PIXI.Sprite(PIXI.loader.resources['images/bg.png'].texture),
    new PIXI.Sprite(PIXI.loader.resources['images/ground.png'].texture),
    new PIXI.Sprite(PIXI.loader.resources['images/ice-person.png'].texture)
  ]

  ground.position.set(0, 1377)
  player.position.set(540, 1450)
  player.anchor.set(0.5, 1)
  player.scale.set(1, 1)

  app.stage.addChild(bg)
  app.stage.addChild(ground)
  app.stage.addChild(player)

  const game = {
    sprites: {
      bg,
      ground,
      player,
      boxes: []
    },
    input: {
      isLeftDown: false,
      isRightDown: false
    },
    state: calcNextState(),
    stage: app.stage
  }

  console.log(updateStage)

  window.addEventListener('mousedown', event => {
    if (event.pageX < 540) {
      game.input.isLeftDown = true
    } else {
      game.input.isRightDown = true
    }
  })

  window.addEventListener('mouseup', event => {
    game.input.isLeftDown = false
    game.input.isRightDown = false
  })

  app.ticker.add(() => {
    gameLoop(game)
  })
}

/* Выполняется 60FPS */
function gameLoop(game) {
  const nextState = calcNextState(game.state, game.input)
  updateStage(game, nextState)
  game.state = nextState
}
