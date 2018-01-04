class Sprite {
  constructor(texture, position, anchor, rotation) {
    this.texture = texture
    this.position = position !== undefined ? position : [0, 0]
    this.anchor = anchor !== undefined ? anchor : [0, 0]
    this.rotation = rotation !== undefined ? rotation : 0
    Object.freeze(this)
  }
}

export default Sprite
