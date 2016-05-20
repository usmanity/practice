// window.setTimeout(function(){
//   window.location = location;
// }, 5000);

$(document).ready(function(){
  var svg = Snap('#svg');
  var one = svg.circle(250, 50, 0);

  Snap.animate(0 , 10, function(val) {
    one.attr({
      r: val + 20,
      y: val + 100
    })
  }, 1000);

  $('h1').click(function(event){
    one.animate({r: 20}, 1000);
  });
  $('#right').click(function(event){
    one.animate({cx: 200}, 1000);
  });
  $('#down').click(function(event){
    one.animate({cy: 200}, 1000);
  });
  $(".here").click(function(event){
    var offsets = $(event.target).offset();
    one.animate({cy: offsets.top, cx: offsets.left}, 1000);
  })
});
