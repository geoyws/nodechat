var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

io.on('connection', function(socket) {
  console.log('A user connected.');
  socket.on('chatmsg', function(msg) {
    console.log('Message: ' + msg);
  });
  socket.on('disconnect', function() {
    console.log('A user disconnected.');
  });
});

/*
io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    console.log('Message: ' + msg);
  });
});
*/

http.listen(3000, function() {
  console.log('listening on *:3000');
});



