/* var mosca = require('mosca');
var settings = {
		port:1883
		}

var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
}); */


/* var express = require('express');
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
 //   backend: pubsubsettings,
    persistence: {
		factory: mosca.persistence.Memory
      //  factory: mosca.persistence.Mongo,
 //       url: 'mongodb://tonyz:abc123456789@ds253871.mlab.com:53871/mqttbrokermosca'
    }
}, function() {
    server.attachHttpServer(app);
});

server.on('ready', function() {
    console.log('Mosca is running');
}); */


const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883

server.listen(port, function () {
  console.log('server started and listening on port ', port)
})
