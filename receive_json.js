var net = require('net');
var JsonSocket = require('json-socket');

// Azure Connectivity
var clientFromConnectionString = require('azure-iot-device-amqp').clientFromConnectionString;
var azMessage = require('azure-iot-device').Message;

var connectionString = "ConnectionString";
var client = clientFromConnectionString(connectionString);


// Port on which the server listens
var porttolisten = 51427;

function printResultFor(op) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ' status: ' + res.constructor.name);
    };
}
// connect to Azure IOT:
var connectCallback = function(err) {
    if (err) {
        console.log('Could not connect: ' + err);
    } else {
        console.log('Client connected');
        //if a connection occurs -> try to get the message
        //Server start 
        var myServer = net.createServer();
        myServer.listen(porttolisten);

        myServer.on('connection', getmessage);

        function getmessage(socket) {
            mySocket = new JsonSocket(socket);

            mySocket.on('message', sendtoazure)

        }

        function sendtoazure(message) {
            console.log(message);

            var data = JSON.stringify({ deviceId: 'Cisco829', temperatur: message.temperatur, humidity: message.humidity });
            var iotmessage = new azMessage(data);
            console.log("Sending message: " + iotmessage.getData());
            client.sendEvent(iotmessage, printResultFor('send'));
        }
    }


};

client.open(connectCallback);