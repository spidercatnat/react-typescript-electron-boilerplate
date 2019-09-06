/**
 * TODO: 
 * - Pass reference to subscription from lookup table to unsubscribe.
 * - Allow subscription to multiple Observables
 */

import { Component } from 'react'
import { filter } from 'rxjs/operators'
import { Props, State } from './types';
import { messageService } from '../PubSub';
export * from '../constants/topics'

class Subscriber extends Component<Props, State> {

    state = { data: null }

    subscription = messageService
        .getMessage()
        .pipe(filter(f => f.topic === this.props.topic))
        .subscribe((s: any) => this.setState({ data: s.data }))

    unsubscribe = () => this.subscription.unsubscribe();

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { state: { data }, props: { children } } = this;
        return children(data)
    }

}

export { Subscriber }