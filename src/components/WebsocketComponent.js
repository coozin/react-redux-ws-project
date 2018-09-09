import React from 'react';
import Websocket from 'react-websocket';

class ProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleData(data) {
    console.log('handleData')
    let result = JSON.parse(data);
    console.log(result)
  }

  handleOpen(data) {
    console.log('handleOpen')
    console.log(data)
  }

  render() {
    return (
      <div>
        <Websocket
          url='wss://api.bitfinex.com/ws/2'
          onOpen={this.handleOpen.bind(this)}
          onMessage={this.handleData.bind(this)}
        />
      </div>
    );
  }
}

export default ProductDetail;