/**
 * TODO: 
 * - Pass reference to subscription from lookup table to unsubscribe.
 * - Allow subscription to multiple Observables
 */

import React, { Component, ReactNode } from 'react'
import { BehaviorSubject } from 'rxjs'
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

const mainSubject: BehaviorSubject<any> = new BehaviorSubject(0)

export const publish = (topic: any, data: any) => {
    mainSubject.next({ topic, data });
}

class Subscriber extends Component<Props, State> {
    subscription: any
    constructor(props: Props) {
        super(props)
        this.state = { data: null }
        this.subscription = mainSubject
            .pipe(filter(f => f.topic === this.props.topic))
            .subscribe((s: any) => {
                this.setState({ data: s.data })
            })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    unsubscribe = () => this.subscription.unsubscribe();
    render() {
        const { state: { data }, props: { children } } = this;
        return children(data)
    }
}

export { Subscriber }