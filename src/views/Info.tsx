import React from 'react';
import { connect } from '../context';
import { Comp } from '../components';

const Info = connect(
    (props: any) => {
        const { InfoTopic} = props.topics;
        return (
            <>
                Showing Info subscriber:
                <Comp topic={InfoTopic} />
            </>
        )
    }
)

export { Info }