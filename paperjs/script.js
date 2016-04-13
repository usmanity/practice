// var path = new Path();
// path.strokeColor = 'black';
// var start = new Point(100, 100);
// path.moveTo(start);
// path.lineTo(start + [ 100, -50 ]);

var path = new Path.Circle({
  center: view.center,
  radius: 30,
  strokeColor: 'blue'
});

function onResize(event) {
  // path.position = view.center;
}
