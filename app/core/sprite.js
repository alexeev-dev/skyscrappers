class Sprite {
  constructor(texture, position, anchor, scale, rotation, opacity) {
    this.texture = texture
    this.position = position !== undefined ? position : [0, 0]
    this.anchor = anchor !== undefined ? anchor : [0, 0]
    this.scale = scale !== undefined ? scale : [1, 1]
    this.rotation = rotation !== undefined ? rotation : 0
    this.opacity = opacity !== undefined ? opacity : 1
    Object.freeze(this)
  }

  withOpacity(opacity) {
    return new Sprite(
      this.texture,
      this.position,
      this.anchor,
      this.scale,
      this.rotation,
      opacity
    )
  }
}

export default Sprite
