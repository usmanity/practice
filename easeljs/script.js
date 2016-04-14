$(document).ready(function(){
  var stage = new createjs.Stage('demo');
  circle = new createjs.Shape();
  circle.graphics.beginFill('gray').drawCircle(0, 0, 4);
  circle.x = circle.y = 50;
  stage.addChild(circle);
  stage.update();
  createjs.Ticker.addEventListener('tick', handleTick);
  function handleTick() {
    circle.x = circle.x * 1.1;
    if (circle.x > stage.canvas.width) {
      circle.x = 2;
    }
    stage.update();
  }
});
