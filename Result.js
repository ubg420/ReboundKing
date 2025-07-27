phina.define("Result", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit({
        width: 0,
        height: 0,
      });

      this.x = 0;
      this.y = 0;

      var tweet = Sprite('Tweet',200,70).addChildTo(this);

      var url = "http://cachacacha.com/GAME/ReboundKing/";
      this.score = GameMain.score;


      this.scorelabel = Label(this.score + "点").addChildTo(this);
      this.scorelabel.setPosition(SCREEN_WIDTH / 2, 130);
      this.scorelabel.fill = 'brack'; // 色を変更
      this.scorelabel.strokeWidth = 8;
      this.scorelabel.fontSize = 150; // フォントサイズを変更
      this.scorelabel.tweener



      this.CreateResulttext();

      var gameovertext= Label(this.ResultText).addChildTo(this);
      gameovertext.setPosition(GameMain.gridX.center(30),GameMain.gridY.center());
      gameovertext.fill = 'brack'; // 色を変更
      gameovertext.strokeWidth = 8;
      gameovertext.fontSize = 180; // フォントサイズを変更
      gameovertext.tweener
        .clear()
        .wait(1000)
        .by({x:-4000}, 3000)
        .call(function(){
          gameovertext.remove();
        })



      var Tweettxt = encodeURIComponent("Score "  + this.score  + "点 " + this.ResultText + " " + url + "  #ババアが全身でシュートを邪魔するゲーム #かちゃコム");

      tweet.x = 500;
      tweet.y = -100;
      tweet.tweener
      .clear()
      .wait(1000)
      .to({y:400}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      tweet.setInteractive(true);
      // タッチ終了時に発火
      tweet.onclick = function() {
        // 自身を削除
        window.open("http://twitter.com/intent/tweet?text=" + Tweettxt);
      };

      var retry = Sprite('Retry',200,70).addChildTo(this);
      retry.x = 760;
      retry.y = -100;
      retry.tweener
      .clear()
      .wait(1100)
      .to({y:400}, 1300,"easeOutQuart");
      // タッチ判定を有効に
      retry.setInteractive(true);
      // タッチ終了時に発火
      retry.onclick = function() {
        // 自身を削除
        GameMain.Retry();

      };



      var cachacacha = Sprite('cachacacha').addChildTo(this);
      cachacacha.x = SCREEN_WIDTH  /2;
      cachacacha.y = SCREEN_HEIGHT - 200;

      // タッチ判定を有効に
      cachacacha.setInteractive(true);
      // タッチ終了時に発火
      cachacacha.onclick = function() {
        // 自身を削除
        window.open("http://www.cachacacha.com/");
      };

    },

    update: function(app) {

    },

    CreateResulttext: function(app){
      if(this.score < 10000){
        this.ResultText = "キィィーー！！くやしいザマス！！";
      }
      if(this.score > 10000){
        this.ResultText = "もの足りないザマス！！";
      }
      if(this.score > 30000){
        this.ResultText = "このぐらいにしといてあげるザマス";
      }
      if(this.score > 50000){
        this.ResultText = "私にかかればこんなものザ～マス";
      }
      if(this.score > 70000){
        this.ResultText = "愉快ザマス～～～～！！";
      }
      if(this.score >= 100000){
        this.ResultText = "オーッホッホッホッホッホッホッホ！！";
      }




    },

});
