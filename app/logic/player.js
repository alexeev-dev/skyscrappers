import {
  DIRECTION_LEFT, DIRECTION_RIGHT,
  ANIMATION_NONE, ANIMATION_WALK
} from '../const'

function groundIndex(posx) {
  return Math.min(Math.floor((posx - 64) / 119), 7)
}

function isTooHighWall(posx, posy, ground) {
  return posy - ground[groundIndex(posx)] > 120
}

function calcPosX({posx, posy}, ground, input) {
  if (input.isLeftDown) {
    const posxNext = posx - 15
    if (isTooHighWall(posxNext - 35, posy, ground) || posxNext < 99) {
      return posx
    } else {
      return posxNext
    }
  } else if (input.isRightDown) {
    const posxNext = posx + 15
    if (isTooHighWall(posxNext + 35, posy, ground) || posxNext > 981) {
      return posx
    } else {
      return posxNext
    }
  } else {
    return posx
  }
}

function calcPosY(posx, posy, ground) {
  const posyNext = Math.min(
    ground[groundIndex(posx + 35)],
    ground[groundIndex(posx - 35)],
    ground[groundIndex(posx)]
  )
  return posyNext - posy < 120 ? posyNext : posy
}

function calcDirection({isLeftDown, isRightDown}, direction) {
  return isLeftDown ? DIRECTION_LEFT : isRightDown ? DIRECTION_RIGHT : direction
}

function calcAnimation({isLeftDown, isRightDown}) {
  return isLeftDown || isRightDown ? ANIMATION_WALK : ANIMATION_NONE
}

function updatePlayer(boxes, ground, input, {player}) {
  const posx = calcPosX(player, ground, input)
  return {
    posx,
    posy: calcPosY(posx, player.posy, ground),
    direction: calcDirection(input, player.direction),
    animation: calcAnimation(input)
  }
}

export default updatePlayer
