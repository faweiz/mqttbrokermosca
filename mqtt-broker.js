var http     = require('http');
var httpServ = http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello World! This is MQTT Broker over websocket');
		res.end();
	}).listen(8080);
var mosca    = require('mosca');
var mqttServ = new mosca.Server({});

// attach http server to mosca
mqttServ.attachHttpServer(httpServ);


// fired when the mqtt server is ready
mqttServ.on('ready', setup);
function setup() {
  console.log('Mosca server is up and running...');
}

// fired when a client is connected
mqttServ.on('clientConnected', function(client) {
    console.log('Client Connected: ', client.id);
});
/*
// Sending data from mosca to clients
var message = {
  topic: '/hello/client',
  payload: 'abcde', // or a Buffer
  qos: 0, // 0, 1, or 2
  retain: false // or true
};
mqttServ.publish(message, function() {
  console.log('done!');
});
*/
// fired when a message is received
mqttServ.on('published', function(packet, client) {
  console.log('Published: ', packet.payload);
});

// fired when a client disconnects
mqttServ.on('clientDisconnected', function(client) {
	console.log('Client Disconnected:', client.id);
});
