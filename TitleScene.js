phina.define('TitleScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';



    this.titlelogo = Sprite('TitleLogo').addChildTo(this);
    this.titlelogo.setSize(1200,600);
    this.titlelogo.setPosition(this.gridX.center(0),this.gridY.center(-3));

    this.titlelogo.scaleX = 0.6;
    this.titlelogo.scaleY = 0.6;

    this.titlelogo.tweener
      .clear()
      .by({y:-10}, 2000)
      .by({y:+10}, 2000)
      .setLoop(true);

      // ラベルを表示
      this.startlabel = Label('タッチではじめる').addChildTo(this);
      this.startlabel.setPosition(this.gridX.center(0),this.gridY.center(6.3));
      this.startlabel.fill = 'brack'; // 色を変更
      this.startlabel.strokeWidth = 8;
      this.startlabel.fontSize = 64; // フォントサイズを変更
      this.startlabel.tweener
        .clear()
        .to({alpha:1,scaleX:1,scaleY:1}, 700,"easeOutSine")
        .wait(400)
        .to({alpha:0,scaleX:0.8,scaleY:0.8}, 700,"easeInSine")
        .setLoop(true);


      // ラベルを表示
      this.title = Label('ババアが全身で\nシュートを邪魔するゲーム').addChildTo(this);
      this.title.setPosition(this.gridX.center(0),this.gridY.center(-5.3));
      this.title.fill = 'brack'; // 色を変更
      this.title.strokeWidth = 8;
      this.title.fontSize = 90; // フォントサイズを変更


      var p = Player().addChildTo(this);



    this.StartFLG = false;

    this.flg = false;



    var goal = Sprite('Goal').addChildTo(this);
    goal.setSize(120, 100);
    goal.x = SCREEN_WIDTH /2;
    goal.y = 270;





    var floor = RectangleShape().addChildTo(this);
    floor.width = SCREEN_WIDTH;
    floor.height = 100;
    floor.fill = "#000";
    floor.setPosition(this.gridX.center(),this.gridY.center(8));
  },

  update: function(app){

  },

  onpointend: function(){

    if(!this.StartFLG){
    //  this.Start();
      this.StartFLG = true;
      this.startlabel.remove();
      this.title.remove();


      // ラベルを表示
      this.startlabel = Label('バスケなんて\n野蛮ザマス').addChildTo(this);
      this.startlabel.setPosition(this.gridX.center(0),this.gridY.center(-5));
      this.startlabel.fill = 'brack'; // 色を変更
      this.startlabel.strokeWidth = 8;
      this.startlabel.fontSize = 84; // フォントサイズを変更
      this.startlabel.alpha = 0;

      var self = this;

      this.startlabel.tweener
        .clear()
        .to({alpha:1,scaleX:1,scaleY:1}, 1000,"easeOutSine")
        .wait(500)
        .to({alpha:0}, 400,"easeOutSine")
        .call(function(){
          self.startlabel.text ="フリックして\nジャンプするザマス"
        })
        .wait(100)
        .to({alpha:1}, 400,"easeOutSine")
        .wait(1500)
        .to({alpha:0}, 400,"easeOutSine")
        .call(function(){
          self.startlabel.text ="ボールに体当たり\nしてやるザマス"
        })
        .wait(100)
        .to({alpha:1}, 400,"easeOutSine")
        .wait(1500)
        .to({alpha:0}, 400,"easeOutSine")
        .call(function(){
          self.startlabel.text ="試合開始"
        })
        .wait(100)
        .to({alpha:1}, 400,"easeOutSine")
        .wait(1000)
        .to({alpha:0}, 400,"easeOutSine")
        .wait(100)
        .wait(500)
        .call(function(){
            self.Start();
        })





      //Debug
      //this.exit();
      //
    }
  },

  Start: function(){
    this.exit();
  },

});
