phina.define("Ball", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit();

        this.x = 200;
        this.y = 290;

        this.vx = 0;
        this.vy = 0;
        this.g  = 3;







        this.width = 80;
        this.height = 80;

        this.MoveMode = "Normal"



        var ball = Sprite('Ball').addChildTo(this);



        ball.setSize(80, 80);




        this.scaleX = 1;
        this.scaleY = 1;

        this.setBoundingType("rect");
        this.color = "hsla(133, 100%, 50%, 1)";
        this.ColisionFLG = false;

        //コリジョン
        this.colision = RectangleShape().addChildTo(this);
        this.colision.width = this.width;
        this.colision.height = this.height;
        this.colision.alpha = 0; //コリジョン可視化 = 1

        this.HitFLG = false;


        this.floor = SCREEN_HEIGHT - 120;

        this.targetx = SCREEN_WIDTH / 2;
        this.targety = 200;


        this.tag = "Ball";

        this.HitFLG = false;
        this.GoalFLG = false;


        var rand = Math.floor( Math.random() * 2 );
        switch (rand) {
          case 0:
          this.SetShot2();

            break;
          case 1:
          this.SetShotR();

            break;



          default:

        }



        this.floor = SCREEN_HEIGHT - 120;

    },

    update: function(app) {

    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;


      if(!this.HitFLG){
        this.vy += this.g * this.dt;
        this.x += this.vx;
        this.y += this.vy;
      }
      else{
        this.x += this.vx;
        this.y += this.vy;

      }


      if(this.y < 0){
        this.y = 0;
        this. vy *= - 1;
      }

      if(this.y > this.floor){
        this.y = this.floor;
        this. vy *= - 1;

      }


      if(this.x > SCREEN_WIDTH || this.x < 0){
          this.remove();
      }




    },

    //角度固定
    SetShot (load) {

        rot = -45;	// 弾を発射する角度
        this.g = 9.8;	// 重力加速度
        this.dt = 0.05;	// 微分（動きをゆっくりにするため）

        this.x = 0;
        this.y = 500;

        // 角度からラジアンに変換
        rad = rot * Math.PI / 180;

        // x方向のターゲットとの距離
        subx = this.targetx - this.x;

        // y方向のターゲットとの距離
        suby = this.targety - this.y;

        // 到達時間を求める
        t = -(2 * subx * Math.sin(rad)) / (Math.cos(rad)* this.g
     * this.dt) + (2 * suby / (this.g * this.dt));
        t = Math.sqrt(Math.abs(t));

        this.vx = subx / t;	// x方向の移動量を求める
        this.vy = this.vx / Math.cos(rad) * Math.sin(rad);	// y方向の移動量を求める

    },

    //角度固定
    SetShotR (load) {

        this.vx = -13;	// 弾を発射する角度
        this.g = 19.8;	// 重力加速度
        this.dt = 0.05;	// 微分（動きをゆっくりにするため）

        this.x = SCREEN_WIDTH;
        this.y = 500;

        // x方向のターゲットとの距離
        subx = this.targetx  - this.x;

        // 到達時間（フレーム）
        t = subx / this.vx;

        // y方向のターゲットとの距離
        suby =  this.targety  - this.y;

        // y方向の移動量を求める
        this.vy = (suby - 0.5 * t * t * this.g * this.dt) / t;
    },

    //速度固定(X)
    SetShot2 (load) {

    this.vx = 13;	// 弾を発射する角度
    this.g = 19.8;	// 重力加速度
    this.dt = 0.05;	// 微分（動きをゆっくりにするため）

    this.x = 0;
    this.y = 500;

    // x方向のターゲットとの距離
    subx = this.targetx  - this.x;

    // 到達時間（フレーム）
    t = subx / this.vx;

    // y方向のターゲットとの距離
    suby =  this.targety  - this.y;

    // y方向の移動量を求める
    this.vy = (suby - 0.5 * t * t * this.g * this.dt) / t;

  },


  onClipEvent (enterFrame) {

      this.vy += this.g * this.dt;

      this.x += this.vx;
      this.y += this.vy;

  },


  Hit(vx,vy){
    this.vx = vx * 1.5;
    this.vy = vy * 1.2;
    this.g = 1;
    console.log(vx,vy,this.g);
    this.HitFLG = true;
    var h = HitEffect(this.x,this.y,GameMain.addpoint).addChildTo(EffectGroup)
    this.remove();


  },


  BallHit(vx,vy){
    this.vx *= -1.5;
    this.vy *=  -1.5;
  },

  BallHitCheck: function(){
    //当たり判定

    var og = ObjectGroup.children;
    var self = this;
    og.each(function(Object) {
        if(self.hitTestElement(Object)){

          switch (Object.tag) {
            case "Goal":

                self.Goal();

              break;

          }

        }

    });

  },



  Goal:function(){
    this.vx = 0;
    this.vy =0;
    this.GoalFLG = true;

    var self = this;

    this.tweener
      .clear()
      .by({y:400,alpha:-1}, 400,"easeOutSine")
      .call(function(){
        self.remove();
      })
  },


});
