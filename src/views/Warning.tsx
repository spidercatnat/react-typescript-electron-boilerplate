import React from 'react';
import { contextualize} from '../context';
import { Comp } from '../components';

const Warning = contextualize(
    (props: any) => {
        const { WarningTopic } = props.topics;
        return (
            <>
                <Comp topic={WarningTopic} />
            </>
        )
    }
)

export { Warning }