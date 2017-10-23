const http = require('http').createServer(router),
      fs = require('fs'),
      ws = require('ws');


// Websocket server => Listen and serve the websocket server
const wss = new ws.Server({ port: 9001 });
const dir = __dirname;

http.listen(9000);

function router(req, resp, route = req.url) {
  if (route == '/') {
    return serveIndex(req,resp);
  }
}

const page = {
  index:  fs.readFileSync(dir+'/index.html'),
};

const serveIndex = (req, resp) => {
  resp.writeHeader(200, {'Content-Type': 'text/html'});
  resp.write(page.index);
  resp.end();
};

/*
// Send and receiving text data
wss.on('connection', function connection(ws){
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send("something");
});
*/


// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    // Receiving the box which is checked
        console.log(data);

  });
});
