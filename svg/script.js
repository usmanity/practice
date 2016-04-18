// window.setTimeout(function(){
//   window.location = location;
// }, 5000);

$(document).ready(function(){
  var svg = Snap('#svg');
  var one = svg.circle(50, 50, 50);

  one.animate({
    fill: 50
  }, 1000);
});
