import {groundIndex} from './ground'
import {
  DIRECTION_LEFT, DIRECTION_RIGHT,
  ANIMATION_NONE, ANIMATION_WALK, ANIMATION_DEAD
} from '../const'

function isTooHighWall(posx, posy, ground) {
  return posy - ground[groundIndex(posx)] > 120
}

function calcPosX({posx, posy}, ground, input, coof) {
  if (input.isLeftDown) {
    const posxNext = posx - 15 * coof
    if (isTooHighWall(posxNext - 35, posy, ground) || posxNext < 99) {
      return posx
    } else {
      return posxNext
    }
  } else if (input.isRightDown) {
    const posxNext = posx + 15 * coof
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

function isPlayerMeetBox(posx, posy, box) {
  if (posy - box.vpos < 120) {
    const leftBorder = 64 + box.hpos * 119
    const rightBorder = leftBorder + 119
    const leftEdgeIn = leftBorder < (posx - 35) && (posx - 35) < rightBorder
    const rightEdgeIn = leftBorder < (posx + 35) && (posx + 35) < rightBorder
    return leftEdgeIn || rightEdgeIn
  } else {
    return false
  }
}

function calcAnimation({isLeftDown, isRightDown}, posx, posy, boxes) {
  const dangerBoxes = boxes.filter(box => box.isFly)
  const isGameOver = dangerBoxes.some(box => isPlayerMeetBox(posx, posy, box))
  if (isGameOver) {
    return ANIMATION_DEAD
  } else {
    return isLeftDown || isRightDown ? ANIMATION_WALK : ANIMATION_NONE
  }
}

function updatePlayer(boxes, ground, input, coof, {frame, player}) {
  if (player.animation !== ANIMATION_DEAD) {
    const posx = calcPosX(player, ground, input, coof)
    const posy = calcPosY(posx, player.posy, ground)
    const animation = calcAnimation(input, posx, posy, boxes)
    return {
      posx, posy,
      animation,
      direction: calcDirection(input, player.direction),
      start: frame
    }
  } else {
    return player
  }
}

export default updatePlayer
