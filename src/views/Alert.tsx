import React from 'react';
import { contextualize } from '../context';
import { Comp } from '../components';

const Alert = contextualize(
    (props: any) => {
        const { AlertTopic } = props.topics;
        return (
            <>
                Showing Alert subscriber:
                <Comp topic={AlertTopic} />
            </>
        )
    }
)

export { Alert }