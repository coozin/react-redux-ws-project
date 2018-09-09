import React from 'react';

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';


const socket = SockJS('wss://api.bitfinex.com/ws/2');
const ws = Stomp.over(socket);

class WebSocket extends React.Component {

  state = {
    ws,
    timeStamp: Date.now(),
    maxReconnect: 1,
  };

  componentDidMount() {
    this.setupWebSocket();
  }

  setupWebSocket = () => {
    const webSoc = this.state.ws;
    webSoc.connect({}, this.connect);
    webSoc.message = (body) => this.setState({ timeStamp: Date.now() });
    webSoc.error = (err) => {
      if (this.state.maxReconnect > 0) {
        this.setState({ maxReconnect: this.state.maxReconnect - 1 }, this.connect);
      }
    };
  }
 
  connect = () => {
    const channels = webSocketUrls[this.props.name];
    this.setState({ maxReconnect: this.props.maxReconnect });
    channels.forEach((channel) => {
      const webSoc=this.state.ws;
      webSoc.subscribe(channel.route, channel.callback);
      webSoc.send(
        registration.route,
        { timeStamp: this.state.timeStamp.toString() },
        'timeStamp'
      );
    });
  }

  render () {
    return <span />;
  }
}
WebSocket.defaultProps = {
  name: 'something',
  maxReconnect: 5,
};