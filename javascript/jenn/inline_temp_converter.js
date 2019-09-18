function farenheitToCelsius(faren) {
    return ((faren - 32) * 5/9).toFixed(1);
}

function printCurrent(temp, degree) {
    var deg = degree || 'C';
    console.log(`${temp} º${deg}`);
}


printCurrent( farenheitToCelsius(61), 'C' );

printCurrent( farenheitToCelsius(104) );
