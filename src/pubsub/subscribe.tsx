import React from 'react';
import { Subscriber } from './Subscriber';

export const subscribe = (Comp: React.ElementType, topic: String) => {
    return (
        <Subscriber topic={topic}>
            <Comp />
        </Subscriber>
    )
}
