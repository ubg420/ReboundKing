phina.globalize();

var SCREEN_WIDTH    = 1280;
var SCREEN_HEIGHT   = 720;
var Group;
var ObjectGroup;
var EffectGroup;
var TextGroup;
var GameMain;

var ASSETS = {
  image: {
    'Back':'img/Back.png',
    'Player': 'img/babaa2.png',
    'TitleBack':'img/TitleBack.png',
    'TitleLogo':'img/TitleLogo.png',

    'Goal':'img/Goal.png',


    'Dog':'img/Dog.png',
    'Rikuzyo':'img/rikuzyo.png',
    'Ball':'img/Ball.png',
    'Ball2':'img/Ball2.png',


    'cachacacha':'img/logo.png',
    'Retry':'img/Retry.png',
    'Tweet':'img/Tweet.png',

  },
  spritesheet: {
    'DogSS': 'spriteSS/DogSS.ss',
    'RikuzyoSS': 'spriteSS/RikuzyoSS.ss',



  },
  sound: {

  },
};

phina.main(function() {
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
  });
  app.replaceScene(SceneSequence());
  app.run();
});

// SceneSequenceクラス
phina.define("SceneSequence", {
  superClass: "phina.game.ManagerScene",

  // 初期化
  init: function() {
    this.superInit({
      scenes: [

        {
          label: "Loading", // ラベル。参照用
          className: "LoadingScene", // シーンAのクラス名
          nextLabel:"Title",
        },

        {
          label: "Title", // ラベル。参照用
          className: "TitleScene", // シーンAのクラス名
          nextLabel:"Main",
        },

        {
          label: "Main",
          className: "MainScene",
        },

        {
          label: "Load",
          className: "LoadScene",
        },

        {
          label: "Result",
          className: "ResultScene",
        }

      ]
    });
  }
});

phina.define("LoadingScene", {
  superClass: "phina.game.LoadingScene",

  init: function(params) {
    this.superInit({
      assets: ASSETS,
      exitType: "auto",

    });

  }

});

phina.define('ResultScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();
  },
});
