'use strict'
const wifi = require('Wifi');
const WebSocket = require("ws");
const VERSION = "1.0";
const config = JSON.stringify({ "array" :[
   {
       "uid": "1",
       "type": "<http://vocab.peePonic.com/waterPump>",
       "api": [
           {
               "name": "on",
               "bus": "gpio",
               "pin": 4,
               "direction": "out",
               "value": 1
           },
           {
               "name": "off",
               "bus": "gpio",
               "pin": 4,
               "direction": "out",
               "value": 0
           }
       ]
   },

   {
       "uid": "2",
       "type": "<http://vocab.peePonic.com/waterPump>",
       "api": [
           {
               "name": "on",
               "bus": "gpio",
               "pin": 4,
               "direction": "out",
               "value": 1
           },
           {
               "name": "off",
               "bus": "gpio",
               "pin": 4,
               "direction": "out",
               "value": 0
           }
       ]
   },

   {
       "uid": "3",
       "type": "<http://vocab.peePonic.com/airPump>",
       "api": [
           {
               "name": "none"
           }
       ]
   },

   {
       "uid": "4",
       "type": "<http://vocab.peePonic.com/waterSensor>",
       "api": [
           {
               "name": "get",
               "bus": "gpio",
               "pin": "A0"
           }
       ]
   }
]
});

wifi.on("connected", () => {
    console.log('Connected as: ' + wifi.getIP().ip);
    var ws = new WebSocket('192.168.0.104', {
        port: 8080,
        path: '/'
    });

    ws.on("open", () => {
        console.log("WEB SOCKET Opened");
        digitalWrite(D2, HIGH);
        ws.send(config);
    });
    ws.on("message", (msg) => {
        console.log(JSON.parse(msg.toString()));
    });
});

wifi.connect("wificonred", {
    password: "95440279"
}, function(error) {
    if (error) {
        console.error(error);
    }
});

function main() {
    console.log("Started: " + new Date().toString());
}
