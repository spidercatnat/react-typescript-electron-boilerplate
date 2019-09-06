import React from 'react';
import { connect } from '../context';
import { Comp } from '../components';

const Warning = connect(
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