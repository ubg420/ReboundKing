phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';

    GameMain = this;
/*
    this.bg = Sprite("Back").addChildTo(this);
    this.bg.setSize(SCREEN_WIDTH,SCREEN_HEIGHT)
    this.bg.setPosition(this.gridX.center(),this.gridY.center());
*/
    TextGroup = DisplayElement().addChildTo(this);

    ObjectGroup  = DisplayElement().addChildTo(this);
    EffectGroup = DisplayElement().addChildTo(this);


    this.Player = Player().addChildTo(this);

    var ball = Ball().addChildTo(ObjectGroup);

    var self = this;

    this.timer = 1;
    var flickable = Flickable().attachTo(this);
    // 横のみ許可
    flickable.horizontal = false;
    flickable.vertical = false;
    flickable.onflickstart = function(e) {
      switch (self.Player.MoveMode) {
        case "Normal":
          // キャンセル
          this.cancel();

          var angle = e.direction.toAngle().toDegree()|0;

          var top_u = 280;
          var top_l = 260;
          var left = 170;
          var right = 360

          //上
          if (left < angle && angle < right) {
            self.Player.Jump(Math.floor(angle));
          }
          else{
          //  self.Player.JumpCansel();
          }


        // 角度を表示
          break;

        case "Jump":
            this.cancel();

            var angle = e.direction.toAngle().toDegree()|0;

        //    self.Player.Attack(Math.floor(angle));
        // 角度を表示
          break;

        default:
      }
    };


    this.GameOverFLG = false;



/*
    this.goal = Sprite('Goal').addChildTo(this);
    this.goal.setSize(100, 180);
    this.goal.setPosition(this.gridX.center(),this.gridY.center(-2));
    this.goal.setSize(120,100);
*/
    this.goal = Goal().addChildTo(this);



    var floor = RectangleShape().addChildTo(this);
    floor.width = SCREEN_WIDTH;
    floor.height = 100;
    floor.fill = "#000";
    floor.setPosition(this.gridX.center(),this.gridY.center(8));


    this.goalcount = 5;


    this.timer2 = 40000
    this.timerLabel = Label(this.goalcount).addChildTo(this);
    this.timerLabel.setPosition(this.gridX.center(5),this.gridY.center(-6));
    this.timerLabel.fill = 'brack'; // 色を変更
    this.timerLabel.strokeWidth = 8;
    this.timerLabel.fontSize = 80; // フォントサイズを変更


    this.combotext= Label("").addChildTo(this);
    this.combotext.setPosition(this.gridX.center(),this.gridY.center());
    this.combotext.fill = 'brack'; // 色を変更
    this.combotext.strokeWidth = 8;
    this.combotext.fontSize = 380; // フォントサイズを変更
    this.combotext.alpha = 0.3



    this.combo = 1;
    this.point = 100;
    this.score = 0;

    this.timeRemit = 1000;

    this.cheencnt = 0;


    this.timer3 = 0;

  },

  update: function(app){



    this.timer3 += app.deltaTime;
    if(this.timer3 > 1000){
      this.timeRemit-= 25;
      this.timer3 = 0;
      if(this.timeRemit < 200){
        this.timeRemit =200;
      }
    }

    if(this.timer > this.timeRemit){
      var ball = Ball().addChildTo(ObjectGroup);

      this.timer = 0;
    }


    if(this.timer2 < 0){

      if(this.GameOverFLG == false){
        this.timerLabel.text =""
        this.GameOver()
        this.timer = 1;
      }

    }else{
      this.timer2 -= app.deltaTime;
      this.timerLabel.text = (this.timer2/1000).toFixed(2);
      this.timer += app.deltaTime;


    }

  },

  onpointend: function(){
    switch (this.Player.MoveMode) {
      case "Normal":
        this.Player.Catch();

        break;
      default:

    }
  },


  GameOver: function(){

    this.GameOverFLG = true;


    var gameovertext= Label("試合終了ーーー！！！").addChildTo(this);
    gameovertext.setPosition(this.gridX.center(15),this.gridY.center());
    gameovertext.fill = 'brack'; // 色を変更
    gameovertext.strokeWidth = 8;
    gameovertext.fontSize = 180; // フォントサイズを変更

    gameovertext.tweener
      .clear()
      .by({x:-3000}, 2000)
      .call(function(){
    //    this.AttackFLG = false;
      })


    var result = Result().addChildTo(this);
  },

  Retry: function(){




    this.exit("Main");
  },


  Goal:function(){


    if(this.GameOverFLG == false){

      this.goalcount++;
      this.combo = 1;
      this.combotext.text = "";

      var gameovertext= Label("ゴーール!!!").addChildTo(TextGroup);
      gameovertext.setPosition(this.gridX.center(15),this.gridY.center());
      gameovertext.fill = 'brack'; // 色を変更
      gameovertext.strokeWidth = 8;
      gameovertext.fontSize = 180; // フォントサイズを変更

      gameovertext.tweener
        .clear()
        .by({x:-3000}, 1000)
        .call(function(){
          gameovertext.remove();
        })


    }

  },

  Hit:function(){

    this.cheencnt++;
    this.addpoint = (this.point *this.combo) * this.cheencnt;
    this.score += this.addpoint;

    if(this.combo > 2){
      this.combotext.text = this.combo + "連"
    }

    if(this.combo % 5 == 0){
      var gameovertext= Label("オホホホホホホー!!").addChildTo(TextGroup);

      if(this.combo % 10 == 0){
        gameovertext.text = "ウォッホホホーッ！！オ゛ェッ!!"
      }



      gameovertext.setPosition(this.gridX.center(20),this.gridY.center(-5));
      gameovertext.fill = 'brack'; // 色を変更
      gameovertext.strokeWidth = 8;
      gameovertext.fontSize = 180; // フォントサイズを変更

      gameovertext.tweener
        .clear()
        .by({x:-4000}, 2000)
        .call(function(){
          gameovertext.remove();
        })
    }



    this.combo++;

  },


  CheenEnd:function(){
      this.cheencnt = 0;

  }

});
