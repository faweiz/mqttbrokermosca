var mosca = require('mosca');
var mqttServer = new mosca.Server({
    port:1883;
});

mqttServer.on("clientConnected", function(client){
    console.log("client connected", client.id);
});

mqttServer.on('ready', function(){
    console.log("MQTT is running...");
});
