/**
 * TODO: 
 * - Pass reference to subscription from lookup table to unsubscribe.
 * - Allow subscription to multiple Observables
 * - Add lifecycle hook(s) to only re-render when topics/locally relevant props change
 */

import { Component, cloneElement, Children } from 'react'
import { connect } from '../context';
import { filter } from 'rxjs/operators'
import { Props, State } from './types';
import { messageService } from '.';
export * from '../constants/topics'

const Subscriber = connect(
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
            console.log(this.props)
            return Children.map(children, (child) => cloneElement(child, { ...this.props, data }))
        }

    }
)

export { Subscriber }