var crypto = require('crypto');

for (var i = 0; i < 1000; i++) {
    var hash = crypto.createHash('sha256').digest('hex');
    console.log(hash);
}

process.exit();
