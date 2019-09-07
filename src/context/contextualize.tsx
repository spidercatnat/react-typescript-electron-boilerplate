import React, { ElementType } from 'react';
import { Consumer } from '.';

const contextualize = (Comp: ElementType) => (
  (props: any) => (
    <Consumer>
      <Comp {...props} />
    </Consumer>
  )
);

export { contextualize };
