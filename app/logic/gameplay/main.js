import updateStage from './stage'
import {DIRECTION_RIGHT} from './player'

export function initGameplay() {
  return {
    isRun: false,
    frame: 0,
    scroll: 0,
    iteration: 0,
    stage: {
      stars: [],
      boxes: [],
      player: {
        posx: 540,
        posy: 1585,
        isAlive: true,
        deathFrame: -1,
        isWalking: false,
        direction: DIRECTION_RIGHT
      },
      warning: [],
      ground: [1585, 1585, 1585, 1585, 1585, 1585, 1585, 1585]
    }
  }
}

function isGameOver(frame, {deathFrame}) {
  if (deathFrame !== -1 && frame - deathFrame > 30) {
    return true
  } else {
    return false
  }
}

export function gameplayNext(state, input, deltaTime) {
  const delta = deltaTime / 16
  if (state.isRun) {
    const frame = state.frame + delta
    const stage = updateStage(frame, state, input, delta)
    const level = stage.player.posy + state.scroll
    const scroll = level < 1200 ? (1200 - level) / 500 : 0
    return {
      frame,
      stage,
      isRun: !isGameOver(frame, state.stage.player),
      scroll: state.scroll + scroll * delta,
      iteration: state.iteration + 1
    }
  }
}
