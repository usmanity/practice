// broken booleans

function isCatFed(cat) {
    if (cat.isFed == "true") {
        return true;
    }
}

var cat = {
    weight: 10
};

console.log( isCatFed(cat) )
