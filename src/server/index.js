const ws = require('ws')
const w = new ws('wss://api.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'book', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))


/* 
const redux = require('redux')

function orders(state = [], action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return state.concat([action.order])
    default:
      return state
  }
}

const store = redux.createStore(orders, [])

function addOrder(order) {
  return {
    type: 'ADD_ORDER',
    order,
  }
}

store.dispatch(addOrder(msg))

-------------------

const ws = require('ws')
const w = new ws('wss://api.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'book', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))

*/
