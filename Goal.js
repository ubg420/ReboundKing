phina.define("Goal", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit();

        this.x = SCREEN_WIDTH /2;
        this.y = 270;

        this.vx = 0;
        this.vy = 0;
        this.g  = 3;




        this.width = 30;
        this.height = 30;

        this.MoveMode = "Normal"




        var goal = Sprite('Goal').addChildTo(this);
        goal.setSize(120, 100);

        this.tag = "Goal";


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


        this.floor = SCREEN_HEIGHT - 120;

    },

    update: function(app) {

      this.BallHitCheck();
    },

    BallHitCheck: function(){
      //当たり判定

      var og = ObjectGroup.children;
      var self = this;
      og.each(function(Object) {
          if(self.hitTestElement(Object)){

            switch (Object.tag) {
              case "Ball":

                  if(!Object.GoalFLG){


                    if(Object.vy > 0){
                      Object.Goal();
                      GameMain.Goal();
                    }
                  }


                break;

            }

          }

      });

    },

});
