/**
 * TODO: 
 * - Pass reference to subscription from lookup table to unsubscribe.
 * - Allow subscription to multiple Observables
 * - Add lifecycle hook(s) to only re-render when topics/locally relevant props change
 */

import { Component, cloneElement, Children } from 'react'
import { filter, shareReplay, scan } from 'rxjs/operators'
import { Props, State } from './types';
import { messageService } from '.';
import { StringDecoder } from 'string_decoder';
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
                 *  and access items in subscrube() with msg.pop()
                 */
            )
            .subscribe((msg: any) => {
                if (msg.topic === this.props.topic) this.setState({ data: msg.data })
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