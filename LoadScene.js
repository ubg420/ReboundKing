phina.define('LoadScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';

      var self = this;


      ObjectGroup.children.clear();
      TextGroup.children.clear();
      EffectGroup.children.clear();
      GameMain.children.clear();

      GameMain.remove();

      var p = Player().addChildTo(this);
      p.setPosition(self.gridX.center(9),self.gridY.center());
      p.tweener
        .clear()
        .to({x:self.gridX.center(-9),rotation:360}, 1300)
        .call(function(){
            self.exit("Main");
        })





  },

  update: function(app){

  },



});
