import React, { Component, ReactNode } from 'react'
import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
export * from '../constants/topics'

interface State {
    data?: any,
    topic?: any
}

interface Props {
    children?: any,
    topic?: any
}

const mainSubject: Subject<any> = new Subject()

export const publish = (topic: any, data: any) => {
    mainSubject.next({ topic, data });
}

class Subscriber extends Component<Props, State> {
    unsub: any
    constructor(props: Props) {
        super(props)
        this.state = { data: null }
        this.unsub = mainSubject
            .pipe(filter(f => f.topic === this.props.topic))
            .subscribe((s: any) => {
                this.setState({ data: s.data })
            })
    }
    componentWillUnmount() {
        this.unsub.unsubscribe()
    }
    render() {
        const { state: { data }, props: { children } } = this;
        return (
            <React.Fragment>
                {children(data)}
            </React.Fragment>
        )
    }
}

export { Subscriber }