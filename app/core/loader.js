function load(images, callback, progress) {
  const total = images.length
  const loaded = {}
  
  let current = 0

  function onLoad(src, image) {
    current++
    loaded[src] = image
    if (typeof progress === 'function') {
      progress((current / total) * 100)
    }
    if (current === total && typeof callback === 'function') {
      callback(loaded)
    }
  }

  images.forEach(function (src) {
    const image = new Image()
    image.addEventListener('load', function () {
      onLoad(src, image)
    })
    image.src = src
  })
}

export default load
