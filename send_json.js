var net = require('net');
var JsonSocket = require('json-socket');

var porttolisten = 51427;
var myHost = '10.10.10.6';

var mySocket = new JsonSocket(new net.Socket());
// create socket


sendperiodicdata();


// additional function to have better readability
// function to send data
function sendperiodicdata() {
    mySocket.connect(porttolisten, myHost);
    mySocket.on('connect', senddata);
}

function senddata() {
    var temperaturValue = rndValue(10, 15);
    var humidityValue = rndValue(45, 60);
    mySocket.sendMessage({ temperatur: temperaturValue, humidity: humidityValue });
    console.log("message send");
    mySocket.end();
}


// generate random values for testing between low and high

function rndValue(start, end) {
    return Math.floor(Math.random() * (start - end + 1) + end);
}