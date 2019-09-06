import React from 'react';
import { connect } from '../context';
import { Comp } from '../components';

const Alert = connect(
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