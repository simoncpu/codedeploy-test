'use strict';

exports.handler = (event, context, callback) => {
    const msg = 'Hello world!';
    
    console.log(msg);
    callback(null, msg);
};

