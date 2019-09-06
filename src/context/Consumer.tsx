import React, { Component, cloneElement, Children, ReactNode } from 'react'
import { Context } from '.';

class Consumer extends Component<any, any> {
  render() {
    const { props: { children } } = this;
    return (
      <Context.Consumer>
        {(props: any) => Children.map(children, (child: any) => cloneElement(child, { ...props }))}
      </Context.Consumer>
    )
  }
}

export { Consumer };
