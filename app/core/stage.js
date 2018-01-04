class Stage {
  constructor(canvas, stage) {
    this.stage = stage
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    Object.freeze(this)
  }

  addChild(sprite) {
    this.children.push(sprite)
  }

  render() {
    const rootCollection = this.stage.map(sprite => sprite.render())
    this.renderCollection(rootCollection)
  }

  renderSprite(sprite) {
    const {ctx} = this
    ctx.save()
    ctx.translate(sprite.position[0], sprite.position[1])
    ctx.rotate(sprite.rotation)
    ctx.translate(-sprite.anchor[0], -sprite.anchor[1])
    ctx.drawImage(sprite.texture, 0, 0)
    ctx.restore()
  }

  renderCollection(collection) {
    collection.forEach(item => {
      if (Array.isArray(item)) {
        this.renderCollection(item)
      } else {
        this.renderSprite(item)
      }
    })
  }
}

export default Stage
