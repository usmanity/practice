$(document).ready(function(){
  // var sun = new Circle();
  draw();
});
function draw() {
  var ctx =  document.getElementById('stage').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 1000, 1900);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.translate(150, 150);

  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60) * time.getSeconds() + ((2*Math.PI)/6000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24);
  ctx.rect(10, 10, 10, 10);
  ctx.fill();

  ctx.save();
  ctx.translate(0, 28.5);
  ctx.rect(10, 20, 20, 20);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
  ctx.stroke();
  window.requestAnimationFrame(draw);
}
