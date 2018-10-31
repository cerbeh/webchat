const WebSocketServer = require('websocket').server;
const http = require('http');

const webSocketServerPort = 4001;

const server = http.createServer(function(req, res) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});

server.listen(webSocketServerPort, () => {
  console.log(`${(new Date())} Server is listening on port ${webSocketServerPort}`);
});

wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', function(request) {
  const connection = request.accept(null, request.origin);

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      //process WebSocket message
    }
  });

  connection.on('close', (connection) => {
    // close user connection
  });
});
