// doesn't work without global WebSocket import

const Sockette = require('sockette');

const ws = new Sockette('wss://api.bitfinex.com/ws/2', {
  timeout: 5e3,
  maxAttempts: 10,
  onopen: e => console.log('Connected!', e),
  onmessage: e => console.log('Received:', e),
  onreconnect: e => console.log('Reconnecting...', e),
  onmaximum: e => console.log('Stop Attempting!', e),
  onclose: e => console.log('Closed!', e),
  onerror: e => console.log('Error:', e)
});

ws.send('Hello, world!');
ws.json({type: 'ping'});
ws.close(); // graceful shutdown

// Reconnect 10s later
setTimeout(ws.reconnect, 10e3);