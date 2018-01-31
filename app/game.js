import {initState, calcNextState} from './logic'
import renderFrame from './render'
import initInput from './input'

const requestAnimationFrame = (
  window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
)

function getGameCanvas() {
  return {
    bg: document.getElementById('bg').getContext('2d'),
    fg: document.getElementById('fg').getContext('2d')
  }
}

class Skyscrapper {
  constructor(textures) {
    this.lastTime = 0
    this.textures = textures
    this.state = initState(this)
    this.input = initInput(this)
    this.canvas = getGameCanvas()
    this.handleBoxFell = this.handleBoxFell.bind(this)
    this.handleStarPickup = this.handleStarPickup.bind(this)
    this.events = {
      boxFell: this.handleBoxFell,
      starPicked: this.handleStarPickup
    }
  }

  run() {
    this.lastTime = Date.now()
    requestAnimationFrame(() => {
      this.loop()
    })
  }

  trigger(event, data) {
    if (typeof this.events[event] === 'function') {
      this.events[event](data)
    }
  }

  handleBoxFell() {
    const {score} = this.state.ui.gameplay
    this.state.ui.gameplay.score = score + 1
  }

  handleStarPickup() {
    const {stars} = this.state.ui.common.score
    this.state.ui.common.score.stars = stars + 1
  }

  loop() {
    const {state: prevState, input, canvas, textures, lastTime} = this
    const state = calcNextState(prevState, input, Date.now() - lastTime)
    renderFrame(state, canvas, textures)
    this.state = state
    this.lastTime = Date.now()
    requestAnimationFrame(() => {
      this.loop()
    })
  }
}

export default Skyscrapper
