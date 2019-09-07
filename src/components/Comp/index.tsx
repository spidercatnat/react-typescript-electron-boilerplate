import React from 'react';
import { subscribe } from '../../pubsub';

interface Comp {
    data?: {},
    topic?: {}
}

interface ConnectedComp {
    topic: String
}

const Comp = ({ topic }: ConnectedComp) => subscribe(
    ({ data, topic }: Comp = {}) => (
        <div>{data ? `${data}` : `${topic} has no actvity yet`}</div>
    ), topic)

export { Comp }