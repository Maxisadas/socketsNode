// COmando para establecer la conexion

var socket = io();

// para escuchar sucesos del servidor

var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log("Conectado al servidor");

});

socket.on('disconnect', function() {

    console.log("Se ha perdido la conexion con el servidor")

});

$('button').on('click', function() {

    socket.emit("siguienteTicket", null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});

socket.on('estadoActual', function(mensaje) {

    label.text(mensaje.actual);

});