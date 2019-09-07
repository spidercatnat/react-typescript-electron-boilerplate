import React from 'react';
import { Button } from 'antd'
import { withRouter } from 'react-router-dom';
import { contextualize } from '../../context';

const Nav = withRouter(
    contextualize(
        (props: any) => {
            return (
                <div style={{display: 'flex', justifyContent: 'space-around', width: '40vw', padding: '2%'}}>
                    <Button size='large' type='primary' onClick={() => props.history.push('/')}>/</Button>
                    <Button size='large' type='primary' onClick={() => props.history.push('/alert')}>/alert</Button>
                    <Button size='large' type='primary' onClick={() => props.history.push('/info')}>/info</Button>
                    <Button size='large' type='primary' onClick={() => props.history.push('/warning')}>/warning</Button>
                </div>
            )
        }
    )
)


export { Nav }