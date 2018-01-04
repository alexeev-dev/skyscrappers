import load from './core/loader'
import initGame from './game'

load([
  'images/bg.png',
  'images/box.png',
  'images/next.png',
  'images/ground.png',
  'images/player.png',
  'images/ground.png',
  'images/run-1.png',
  'images/run-2.png',
  'images/run-3.png',
  'images/run-4.png',
  'images/run-5.png'
], initGame, function (progress) {
  console.log(progress + '%')
})
