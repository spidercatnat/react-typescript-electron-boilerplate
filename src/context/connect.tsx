import React, { ElementType } from 'react';
import { Consumer } from '.';

const connect = (Comp: ElementType) => (
  (props: any) => (
    <Consumer>
      <Comp {...props} />
    </Consumer>
  )
);

export { connect };
