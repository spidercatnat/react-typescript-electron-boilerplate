import React from 'react';
import { subscribe } from '../../pubsub';

interface ComposedProps {
    data: string,
    topic: String
}

interface UncomposedProps {
    topic: String
}

const QR = ({ topic }: UncomposedProps) => subscribe(({ data, topic }: ComposedProps) => (
    <img src={data} />
), topic)

export { QR }