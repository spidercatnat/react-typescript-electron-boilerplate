import React, { Component } from 'react';
import { messageService } from '../pubsub';
import { topics } from '../constants';
import { Context } from '.';

class Provider extends Component {
  state = { foo: 'bar' };
  componentDidMount() {
    const { AlertTopic, WarningTopic, InfoTopic } = topics;
    setTimeout(() => messageService.sendMessage(AlertTopic, `${AlertTopic} got a message!`), 2000)
    setTimeout(() => messageService.sendMessage(WarningTopic, `${WarningTopic} got a message!`), 4000)
    setTimeout(() => messageService.sendMessage(InfoTopic, `${InfoTopic} got a message!`), 6000)
    setTimeout(() => messageService.sendMessage(InfoTopic, `${InfoTopic} got a 2nd message!`), 8000)

  }
  render() {
    return (
      <Context.Provider value={{ ...this.state, topics }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
