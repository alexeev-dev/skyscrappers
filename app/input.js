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

  window.addEventListener('touchstart', event => {
    const [pageX] = getClientPos(event)
    if (pageX < middle) {
      input.isLeftDown = true
    } else {
      input.isRightDown = true
    }
  })

  window.addEventListener('touchend', event => {
    input.isLeftDown = false
    input.isRightDown = false
  })
}

export default initInput
