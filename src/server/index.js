const ws = require('ws')
const w = new ws('wss://api.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'book', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))