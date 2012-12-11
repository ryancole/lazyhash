A simple wrapper around node's built-in pbkdf2 functionality.

## Example

```javascript
var lazyhash = require('lazyhash');

// create a hash of some text
lazyhash.create('test', function (err, result) {
    
    // check some text against a key and salt
    lazyhash.compare('test', result.salt, result.key, function (err, equal) {

        console.log(equal);

    });

});
```

## API

### create(input, callback)

    input: the text you want to hash
    callback(err, result): result is an object containing the salt and derived key

### compare(input, salt, key, callback)

    input: the text you want to hash and compare to key
    salt: the salt used when generating key
    key: the key, for which salt was used, to compare to input's key
    callback(err, equal): equal is a boolean, true if the keys match otherwise false

## Requirements

This assumes node version >= 0.9.x. Whichever node version changed the crypto lib to return buffers. This code assumes buffers are returned. I built this against node 0.9.3.