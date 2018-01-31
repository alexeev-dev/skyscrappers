export function isInRect([rx, ry, rw, rh], [x, y]) {
  return (
    rx < x && x < rx + rw && ry < y && y < ry + rh
  )
}

export function mapToScreen(x, y, w) {
  const k = 1080 / w
  return [Math.round(x * k), Math.round(y * k)]
}
