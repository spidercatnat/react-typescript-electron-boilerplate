import React from 'react';
import { contextualize } from '../context';
import { Comp } from '../components';

const Home = contextualize(
    (props: any) => {
        const { AlertTopic, InfoTopic, WarningTopic } = props.topics;
        return (
            <div>
                <Comp topic={AlertTopic} />
                <Comp topic={InfoTopic} />
                <Comp topic={WarningTopic} />
            </div>
        )
    }
)

export { Home }