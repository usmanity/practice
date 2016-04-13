$(document).ready(function(){
  var canvas = $("#paper")[0];
  paper.setup(canvas);
  var path = paper.Path();
  var tool = new paper.Tool();
  tool.onMouseDown = function(event) {
    path.strokeColor = 'blue';
    path.add(event.point);
    paper.view.draw();
  }
  tool.onMouseDrag  = function(event) {
    path.add(event.point);
  }
});
