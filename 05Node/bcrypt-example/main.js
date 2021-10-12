const bcrypt = require('bcrypt');

let hash = null;
// first, we create a hash
bcrypt.hash('myPassword', 10, function(err, result) {
    // store hash in database
    hash = result;
    bcrypt.compare('myPassword', hash, function(err, res) {
        if(res) {
            // Passwords match
            console.log('passwords match');
        } else {
            // Passwords don't match
            console.log('passwords do not match');
        } 
      });    
});