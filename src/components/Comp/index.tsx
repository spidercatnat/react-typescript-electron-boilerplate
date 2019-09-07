import React from 'react';
import { subscribe } from '../../pubsub';

interface ComposedProps {
    data?: String,
    topic?: String
}

interface UncomposedProps {
    topic: String
}

const Comp = ({ topic }: UncomposedProps) => subscribe(
    ({ data, topic }: ComposedProps) => (
        <div>{data ? data : `${topic} has no actvity yet`}</div>
    ), topic)

export { Comp }