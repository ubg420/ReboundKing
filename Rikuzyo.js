phina.define("Rikuzyo", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit({
        width: 65,
        height: 100,
        fill: "green",
        stroke: null,

      });

        this.x = SCREEN_WIDTH;
        this.y = 550;

        this.tag = "enemy";

        this.speed = 10;
        this.vx = this.speed;
        this.vy = 1;

        this.sprite = Sprite('Rikuzyo').addChildTo(this);
        this.spriteSS = FrameAnimation('RikuzyoSS');
        this.spriteSS.attachTo(this.sprite);
        this.spriteSS.fit = false;
        this.sprite.setSize(180, 180);

        this.spriteSS.gotoAndPlay('Normal');

        this.setBoundingType("rect");
        this.color = "hsla(133, 100%, 50%, 1)";
        this.ColisionFLG = false;

        //コリジョン
        this.colision = RectangleShape().addChildTo(this);
        this.colision.width = 80;
        this.colision.height = this.height;
        this.colision.alpha = 0.5; //コリジョン可視化 = 1

        this.HitFLG = false;

        this.MoveMode = "Normal";



    },

    update: function(app) {
      this.colision.width = this.width;
      this.colision.height = this.height;

      switch (this.MoveMode) {
        case "Normal":
          this.x -= this.vx;

          break;

      }

    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;

    },

    HitCheck: function(){
      //当たり判定
      /*
      var og = ObjectGroup.children;
      var self = this;
      og.each(function(Object) {
        //  if(clash(self,block)){
          if(self.hitTestElement(Object)){

            switch (Object.tag) {
              case "enemy":
                self.Hit();

                break;

            }

          }

      });
      */
    },

    Hit: function(){


    }

});
