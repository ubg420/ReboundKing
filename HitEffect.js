phina.define("HitEffect", {
    superClass: "DisplayElement",
    init: function(X,Y,score) {
      this.superInit({
        width: 550,
        height: 550,
        fill: "green",
        stroke: null,

      });

      var scale = 5;

      this.x = X;
      this.y = Y;

      var shape = CircleShape().addChildTo(this);
      // 位置を指定
      shape.fill = 'rgba(0,0,0,0)';
      shape.stroke = 'red';
      shape.strokeWidth = 2 * scale;
      shape.radius  = 180;
      shape.tweener
      .clear()
      .to({alpha:0,scaleX:scale,scaleY:scale}, 500,"easeOutCubic")
      .to({alpha:0}, 200,"easeOutQuint")
      .call(function(){
        shape.remove();
      })


      var scorelabel= Label(score).addChildTo(this);
      scorelabel.fill = 'red'; // 色を変更
      scorelabel.strokeWidth = 8;
      scorelabel.fontSize = 80; // フォントサイズを変更

      scorelabel.tweener
        .clear()
        .by({alpha: -1}, 400)
        .call(function(){
          scorelabel.remove();
        })


        if(GameMain.cheencnt > 1){
          var shape = CircleShape().addChildTo(this);
          // 位置を指定
          shape.fill = 'rgba(0,0,0,0)';
          shape.stroke = 'yellow';
          shape.strokeWidth = 2 * scale;
          shape.radius  = 180;
          shape.tweener
          .clear()
          .to({alpha:0,scaleX:scale,scaleY:scale}, 800,"easeOutCubic")
          .to({alpha:0}, 200,"easeOutQuint")
          .call(function(){
            shape.remove();
          })

        }


        this.timer = 0;

    },

    update: function(app) {

      if(this.timer == 40){
        this.remove();
      }
      this.timer++;
    },



});
