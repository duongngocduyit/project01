var io = require('socket.io').listen(1234);
var listSocket = [];
io.sockets.on('connection', function (socket) {
   socket.emit('resquetUsername');
   
   socket.on('login', function (data) {
 		listSocket[data.toString()] = socket;
		console.log('hello world!');
 		socket.set('nickname',data);
	});
  	socket.on('post', function (from,data,friend) {
  		listSocket[friend.toString()].emit('chat',from,data);
 	});
});

