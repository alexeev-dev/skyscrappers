import load from './core/loader'
import initGame from './game'

let readyTextures;

if (typeof FBInstant !== 'undefined') {
  FBInstant.initializeAsync()
    .then(function() {
      playerInfo.name = FBInstant.player.getName();
      playerInfo.photo = FBInstant.player.getPhoto();
      playerInfo.id = FBInstant.player.getID();
      playerInfo.locale = FBInstant.getLocale();
  })
}


load([
  'images/bg.png',
  'images/box.png',
  'images/star.png',
  'images/next.png',
  'images/ground.png',
  'images/player.png',
  'images/ground.png',
  'images/gameOver.png',
  'images/run-1.png',
  'images/run-2.png',
  'images/run-3.png',
  'images/run-4.png',
  'images/run-5.png',
  'images/header.png',
  'images/sbox.png',
  'images/sstar.png'
], function (textures) {
  readyTextures = textures
  if (typeof FBInstant !== 'undefined') {
    FBInstant.startGameAsync().then(function() {
      initGame(textures)
    });
  } else {
    initGame(textures)
  }
}, function (progress) {
  if (typeof FBInstant !== 'undefined') {
    FBInstant.setLoadingProgress(progress)
  }
})
