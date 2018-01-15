function getClientPos(e) {
  var pageX, pageY;

  if (e.touches) {
    pageX = e.touches[0].pageX
    pageY = e.touches[0].pageY
  } else {
    pageX = e.pageX
    pageY = e.pageY
  }

  return [pageX, pageY]
}

function initInput(input) {
  const middle = document.body.clientWidth / 2
  const game = document.getElementById('game')
  window.addEventListener('mousedown', event => {
    if (event.pageX < middle) {
      input.isLeftDown = true
    } else {
      input.isRightDown = true
    }
  })

  window.addEventListener('mouseup', event => {
    input.isLeftDown = false
    input.isRightDown = false
  })

  game.addEventListener('touchstart', event => {
    const [pageX] = getClientPos(event)
    if (pageX < middle) {
      input.isLeftDown = true
    } else {
      input.isRightDown = true
    }
  }, false)

  game.addEventListener('touchend', event => {
    input.isLeftDown = false
    input.isRightDown = false
  }, false)
}

export default initInput
