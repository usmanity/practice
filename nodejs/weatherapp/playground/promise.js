var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Please pass in numbers.');
            }
        }, 2000);
    });
}

asyncAdd(5, 10).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});

asyncAdd('5', 10).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});

// var somePromise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Hey it worked!");
//         reject("whoops, something went wrong");
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success:', message);
// }, (err) => {
//     console.log('Err', err);
// })
