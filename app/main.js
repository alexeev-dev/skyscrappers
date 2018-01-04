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
      /*
      var entryPointData = FBInstant.getEntryPointData();
      if (entryPointData) {
        forceRematch = entryPointData['force_rematch'];
      }

      FBInstant.player.getDataAsync(['score'])
      .then(function(data){
        if (typeof data['score'] !== 'undefined') {
          playerInfo.winStreak = data['score'];
        }
      });
      */
    console.log(readyTextures)
    initGame(readyTextures)
  })
}


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
], function (textures) {
  readyTextures = textures
  if (typeof FBInstant === 'undefined') {
    initGame(textures)
  }
}, function (progress) {
  if (typeof FBInstant !== 'undefined') {
    FBInstant.setLoadingProgress(progress)
    console.log('all ok...')
  }
})
