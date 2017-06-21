var currentTimeout;

//$('input').on('keyup', _debounce(makeCallToServer, 500));

window.timeouts = {};

$('input').on('keyup', _debounce(makeCallToServer, 500).bind(this, event));

function makeCallToServer(this, event) {
  console.log('call to server made now');
  $('.display').html(event.target.value); // sending to the server & coming back
}

function _debounce(func, delay) {
	var timeout = setTimeout(func, delay);
	if (window.timeouts[timeout]) {
		cleartimeout(window.timeouts[timeout]);
		timeout = setTimeout(func, delay);
    window.timeouts[timeout];
  } else {
    timeout = setTimeout(func, delay);
    window.timeouts[timeout];
  }
  return function() {
  	func.apply(this, val);
  }
}
