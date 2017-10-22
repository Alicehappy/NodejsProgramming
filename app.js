const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:9001');

ws.on('open', function open() {
<<<<<<< HEAD
  const array = new Float32Array(5);

  for (var i=0; i<array.length; ++i) {
    array[i] = i/2;
  }

  ws.send(array);
=======
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
>>>>>>> 0abb86cb4b2b77dc7b9175965253e766567bd247
});
