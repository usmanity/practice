const fs = require('fs');
const crypto = require('crypto');
function runChecker() {
    let hashes = require('./hashes.json');
    let setOfHashes = new Set(hashes);
    let newHash = crypto.randomBytes(3).toString('hex');
    /*
    for (var hash in hashes) {
        console.log("checking for", hashes[hash]);
        if (hashes[hash] == newHash) {
            endTime = new Date().getTime() - startTime;
            console.log(`Broke after ${endTime/60} seconds. Hash: ${newHash}`);
            return;
        }
    }
    console.log(`Pushing ${newHash} to file`);
    hashes.push(newHash);
    fs.writeFileSync('hashes.json', JSON.stringify(hashes));
    */
    if (setOfHashes.has(newHash)) {
        console.log(`Found ${newHash} in file`);
        fs.appendFileSync('./duplicates.txt', `${newHash}, `);
    } else {
        setOfHashes.add(newHash);
        console.log(setOfHashes.size);
        fs.writeFileSync('./hashes.json', JSON.stringify(Array.from(setOfHashes)));
        let updatedHashFile = require('./hashes.json');
    }
}
//
//for (var i = 0; i < 500; i++) {
//    runChecker();
//}
runChecker();
