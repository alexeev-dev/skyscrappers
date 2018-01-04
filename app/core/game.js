import {BgStage, FgStage} from './stages'
import GameInput from './input'
import StateStorage from './storage'
class Game {
  constructor() {
    this.input = new GameInput()
    this.state = new MainState()
    this.bgStage = new BgStage(this.state)
  }

  loop(deltaTime) {
    const {input, state, stage} = this
    state.calcNext(input, deltaTime)
    stage.render()
  }
}

const skyScrappers = new Game({
  input: new SkyScrappersInput(),
  state: new SkyScrappersState()
})
