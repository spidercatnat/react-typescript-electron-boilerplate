import React from 'react';
import { Button } from 'antd'
import { withRouter } from 'react-router-dom';
import { contextualize } from '../../context';

const Nav = withRouter(
    contextualize(
        (props: any) => {
            return (
                <>
                    <Button type='primary' block onClick={() => props.history.push('/')}>All</Button>
                    <Button type='primary' block onClick={() => props.history.push('/alert')}>Alert</Button>
                    <Button type='primary' block onClick={() => props.history.push('/info')}>Info</Button>
                    <Button type='primary' block onClick={() => props.history.push('/warning')}>Warning</Button>
                </>
            )
        }
    )
)


export { Nav }