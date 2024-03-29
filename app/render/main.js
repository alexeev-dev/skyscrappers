import renderGround from './ground'
import renderBoxes from './boxes'
import renderStars from './stars'
import renderPlayer from './player'
import renderWarning from './warning'
import renderMessage from './message'
import renderScore from './score'

function renderFrame(ctx, state, score, textures) {
  // Очищаем холст от прежнего кадра
  ctx.clearRect(0, 0, 1080, 1920)
  // Отрисовываем поверхность
  if (state.scroll < 543) {
    renderGround(ctx, state, textures)
  }
  // Отрисовываем звёзды
  renderStars(ctx, state, textures)
  // Отрисовываем коробки
  renderBoxes(ctx, state, textures)
  // Отрисовываем персонажа
  renderPlayer(ctx, state, textures)
  // Отрисовываем предупреждения
  renderWarning(ctx, state, textures)
  // Отрисовываем счет
  renderScore(ctx, score, textures)
  // Гейм овер
  if (!state.isRun) {
    renderMessage(ctx, textures)
  }
}

export default renderFrame
