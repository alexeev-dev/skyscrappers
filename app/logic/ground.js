function updateGround(fell, prevState) {
  return fell.reduce(function (result, hpos) {
    result[hpos] -= 119
    return result
  }, prevState.ground.concat())
}

export default updateGround
