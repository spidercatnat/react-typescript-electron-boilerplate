import React, { Component } from 'react';
import { Context } from '.';

class Provider extends Component {
  state = { foo: 'bar' };
  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
