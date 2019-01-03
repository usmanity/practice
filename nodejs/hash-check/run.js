const fs = require('fs');
const crypto = require('crypto');
var endTime = null;
function runChecker() {
    let startTime = new Date().getTime();
    let hashes = require('./hashes.json');
    let newHash = crypto.randomBytes(6).toString('hex');
    for (var hash in hashes) {
        console.log("checking for", hashes[hash]);
        if (hashes[hash] == newHash) {
            endTime = new Date().getTime() - startTime;
            console.log(`Broke after ${endTime/60} seconds. Hash: ${newHash}`);
            return;
        }
    }
    console.log(`hashes ${hashes}`);
    console.log(`Pushing ${newHash} to file`);
    hashes.push(newHash);
    fs.writeFileSync('hashes.json', JSON.stringify(hashes));
}

while (endTime == null) {
    runChecker();
}
