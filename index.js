var express = require('express');
var http = require('http');
var mosca = require('mosca');

var app = express();
var server = http.createServer(app);

var pubsubsettings = {
    type: 'mongo',
    url: 'mongodb://tonyz:abc123456789@ds253871.mlab.com:53871/mqttbrokermosca',
    pubsubCollection: 'mqtt',
    mongo: {}
};

var server = new mosca.Server({
    backend: pubsubsettings,
    persistence: {
        factory: mosca.persistence.Mongo,
        url: 'mongodb://tonyz:abc123456789@ds253871.mlab.com:53871/mqttbrokermosca'
    }
}, function() {
    server.attachHttpServer(app);
});

server.on('ready', function() {
    console.log('Mosca is running');
});
