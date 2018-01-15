import load from './core/loader'
import Skyscrapper from './game'

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
  'images/places/summer-bg.png',
  'images/places/summer-ground.png',
  'images/intro/shadow.png',
  'images/intro/logo.png',
  'images/intro/person-button.png',
  'images/intro/person-button-down.png',
  'images/intro/place-button.png',
  'images/intro/place-button-down.png',
  'images/intro/person-1.png',
  'images/intro/person-2.png',
  'images/intro/person-3.png',
  'images/intro/person-4.png',
  'images/intro/person-5.png',
  'images/intro/person-6.png',
  'images/intro/person-7.png',
  'images/intro/person-8.png',
  'images/intro/person-9.png',
  'images/intro/person-10.png',
  'images/intro/summer.png',
  'images/intro/night.png',
  'images/intro/winter.png',
  'images/intro/add-person.png',
  'images/intro/add-person-down.png',
  'images/intro/add-place.png',
  'images/intro/add-place-down.png',
  'images/ui/header.png',
  'images/ui/header-box.png',
  'images/ui/header-star.png',
  'images/ui/question.png',
  'images/ui/question-down.png',
  'images/ui/sound.png',
  'images/ui/sound-down.png',
  'images/ui/sound-menu-bg.png',
  'images/ui/sound-off.png',
  'images/ui/sound-on.png',
  'images/ui/music-off.png',
  'images/ui/music-on.png',
  'images/intro/fb-logo.png',
  'images/intro/challenge.png',
  'images/intro/challenge-down.png'
], function (textures) {
  const game = new Skyscrapper(textures)
  if (typeof FBInstant !== 'undefined') {
    FBInstant.startGameAsync().then(function() {
      game.run()
    });
  } else {
    game.run()
  }
}, function (progress) {
  if (typeof FBInstant !== 'undefined') {
    FBInstant.setLoadingProgress(progress)
  }
})
