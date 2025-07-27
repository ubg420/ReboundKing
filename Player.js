phina.define("Player", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit();

        this.x = 1000;
        this.y = 570;

        this.vx = 0;
        this.vy = 0;
        this.g  = 3;

        this.width = 40;
        this.height = 200;

        this.MoveMode = "Normal"

        this.Player = Sprite('Player').addChildTo(this);
        this.Player.setSize(80, 200);


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


        this.floor = SCREEN_HEIGHT - 145;

        this.AttackFLG = false;



    },

    update: function(app) {
      this.colision.width = this.width;
      this.colision.height = this.height;

      switch (this.MoveMode) {
        case "Normal":
      //  this.HitCheck();

          break;


        case "Jump":

          if(this.AttackFLG){
            this.HitCheck();
          }


          this.x += this.vx;
          this.y += this.vy;
      //    this.vy += this.g;
      this.rotation+= 30;

          if(this.y < 0){
            this.y = 0;
            this. vy *= - 1;
          }

          if(this.x < 0){
            this.x = 0;
            this.vx *= - 1;
          }

          if(this.x > SCREEN_WIDTH){
            this.x = SCREEN_WIDTH;
            this.vx *= - 1;

          }



          if(this.y > this.floor){
            this.y = this.floor;
            this.MoveMode = "Normal"
            this.rotation = 0;
            GameMain.CheenEnd();

          }






          break;

        case "Hit":
          this.x += this.vx;
          this.y += this.vy;
          this.vy += this.g;

          break;

      }

    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;

    },

    HitCheck: function(){
      //当たり判定

      var og = ObjectGroup.children;
      var self = this;
      og.each(function(Object) {
          if(self.hitTestElement(Object)){

            switch (Object.tag) {
              case "Ball":


                if(Object.GoalFLG == false){
                  GameMain.Hit();
                  Object.Hit(self.dx,self.dy);
                }

                break;

            }

          }

      });

    },

    Jump: function(rot){

        this.MoveMode = "Jump"
        this.AttackFLG = true;


        var power = 70;


        this.dx = Math.cos( rot * Math.PI / 180 ) * power;
        this.dy = Math.sin( rot * Math.PI / 180 ) * power;
//      this.vy = -dy;
        this.vy = this.dy;
        this.vx = this.dx;

        if(this.vy > -10){
          this.vy = -10;

        }




  //     console.log(Math.floor(dx));


  //      this.MoveMode = "Jump";
  //      this.PlayerSS.gotoAndPlay('Jump');

    },

    Attack: function(rot){

  //      this.MoveMode = "Jump"



        var power = 60;


        this.dx = Math.cos( rot * Math.PI / 180 ) * power;
        this.dy = Math.sin( rot * Math.PI / 180 ) * power;

        console.log(this.dx);

        this.AttackFLG = true;
        var self = this;

        this.tweener
          .clear()
          .by({rotation:360}, 200,"easeOutSine")
          .call(function(){
            this.AttackFLG = false;
          })


//      this.vy = -dy;
//        this.vy = -power;
//        this.vx = dx;

  //     console.log(Math.floor(dx));


  //      this.MoveMode = "Jump";
  //      this.PlayerSS.gotoAndPlay('Jump');

    },


    Hit: function(){
      switch (this.MoveMode) {
        case "Normal":
          this.vx = -10;
          this.vy = -15;
          this.g  = 1;
          this.MoveMode = "Hit";

          break;
        }

    },

    Catch: function(){

    }

});
