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

const makeMouseDownHandler = (input, middle) => {
  return (event) => {
    const [pageX, pageY] = getClientPos(event)
    input.pageX = pageX
    input.pageY = pageY
    input.isMouseDown = true
    if (pageX < middle) {
      input.isLeftDown = true
    } else {
      input.isRightDown = true
    }
  }
}

const makeMouseUpHandler = (input) => {
  return (event) => {
    input.isMouseDown = false
    input.isLeftDown = false
    input.isRightDown = false
  }
}

function initInput() {
  const width = document.body.clientWidth
  const middle = width / 2
  const game = document.getElementById('game')

  const input = {
    width,
    pageX: 0,
    pageY: 0,
    isLeftDown: false,
    isRightDown: false,
    isMouseDown: false
  }

  const handleMouseDown = makeMouseDownHandler(input, middle)
  const handleMouseUp = makeMouseUpHandler(input)

  game.addEventListener('mousedown', handleMouseDown)
  game.addEventListener('mouseup', handleMouseUp)
  game.addEventListener('touchstart', handleMouseDown, false)
  game.addEventListener('touchend', handleMouseUp, false)

  return input
}

export default initInput
