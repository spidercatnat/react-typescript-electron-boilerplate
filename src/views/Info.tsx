import React from 'react';
import { contextualize } from '../context';
import { Comp } from '../components';

const Info = contextualize(
    (props: any) => {
        const { InfoTopic } = props.topics;
        return (
            <>
                <Comp topic={InfoTopic} />
            </>
        )
    }
)

export { Info }