
var crypto = require('crypto');

exports.create = function create (input, callback) {

    crypto.randomBytes(32, function (err, salt) {

        // error on failure
        if (err) return callback(err);

        crypto.pbkdf2(input, salt, 1, 32, function (err, key) {

            // error on failure
            if (err) return callback(err);

            // key and salt on success
            return callback(null, { salt: salt, key: key });

        });

    });

};

exports.compare = function compare (input, salt, key, callback) {

    crypto.pbkdf2(input, salt, 1, 32, function (err, derivedkey) {

        // error on failure
        if (err) return callback(err);

        // result otherwise
        return callback(null, key.toString() == derivedkey.toString());

    });

};