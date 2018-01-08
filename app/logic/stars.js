import {groundIndex} from './ground'

function isAlive(star, ground) {
  return star.posy < ground[groundIndex(star.posx)]
}

function updateStar(star, player, frame) {
  
}

function updateStars(stars, player, ground, frame) {
  return stars.filter(star => isAlive(star, ground)).map()
}
