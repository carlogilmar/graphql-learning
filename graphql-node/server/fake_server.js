global.fetch = require("node-fetch");
const express = require('express'); // Require express module
const bodyParser = require('body-parser');
const app = express(); // Create an express application

app.get('/', function (req, res) {
  apply('encendido', 'lecture_fakee');
  res.send('Hello World!');
});

app.listen(3500, ()=> {
	console.log("Server Running on Port 3500, have a nice day!");
});


//===============

let apply = function(state, lecture_state){

 let jarvis_states = new Map([
               ['encendido', make_fake_device_control_request],
               ['abrir', make_fake_device_control_request],
               ['apagado', make_fake_device_control_request]],
               ['cerrar', make_fake_device_control_request]
             );

 let validation_tuple = [jarvis_states.has(state), lecture_state === 'lectura']

 let executions = {};
 executions[[true, true]] = "Estado correcto y estado de lectura también ";
 executions[[false, true]] = make_fake_device_recolector_request;
 executions[[true, false]] = jarvis_states.get(state)
 executions[[false, false]] = "No hay estado ni estado de lectura, qué aplica?";

 executions[validation_tuple]()
}

// Request '/device/control'
let fake_device_control_request = function(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("200");
    }, 300);
  });
}

let make_fake_device_control_request = async function() {
    const res = await fake_device_control_request(1); // set("1")
    if(res === "200"){
      console.log("Device Control Request OK");
    } else {
      console.log("Device Control Request ERROR");
    }
}

// Request '/device/recolector'
let fake_device_recolector_request = function() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("200");
    }, 300);
  });
}

let make_fake_device_recolector_request = async function() {
    const res = await fake_device_recolector_request();
    if(res === "200"){
      console.log("Device Recolector Request OK");
    } else {
      console.log("Device Recolector Request ERROR");
    }
}
