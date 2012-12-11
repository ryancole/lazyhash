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

### compare(input, salt, key, callback)