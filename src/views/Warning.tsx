import React from 'react';
import { contextualize} from '../context';
import { Comp } from '../components';

const Warning = contextualize(
    (props: any) => {
        const { WarningTopic } = props.topics;
        return (
            <>
                Showing Warning subscriber:
                <Comp topic={WarningTopic} />
            </>
        )
    }
)

export { Warning }