/**
 * TODO: 
 * - Pass reference to subscription from lookup table to unsubscribe.
 * - Allow subscription to multiple Observables
 * - Add lifecycle hook(s) to only re-render when topics/locally relevant props change
 */

import React, { Component, cloneElement, Children } from 'react'
import { filter, shareReplay } from 'rxjs/operators'
import { Props, State } from '../constants/types';
import { messageService } from '.';
export * from '../constants/topics'

class Subscriber extends Component<Props, State> {
    state = { data: null }
    subscription: any
    unsubscribe: any
    componentDidMount() {
        this.subscription = messageService
            .getMessage()
            .pipe(
                shareReplay(),
                filter((f: any) => f.topic === this.props.topic),
                /**
                 * If you want an array of the entire history, uncomment:
                 *  scan((acc: any, curr: any) => [...acc, curr], [])
                 *  and access items in subscribe() with msg.pop()
                 */
            ).subscribe((msg: any) => {
                 this.setState({ data: msg.data })
            })
        this.unsubscribe = () => this.subscription.unsubscribe();
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { state: { data }, props: { children } } = this;
        return Children.map(children, (child) => cloneElement(child, { ...this.props, data }))
    }
}
export { Subscriber }