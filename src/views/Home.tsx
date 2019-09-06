import React from 'react';
import { connect } from '../context';
import { Comp } from '../components';

const Home = connect(
    (props: any) => {
        const { AlertTopic, InfoTopic, WarningTopic } = props.topics;
        return (
            <>
                <Comp topic={AlertTopic} />
                <Comp topic={InfoTopic} />
                <Comp topic={WarningTopic} />
            </>
        )
    }
)

export { Home }