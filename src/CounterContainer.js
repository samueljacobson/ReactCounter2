import React, {Component} from 'react';
import Counter from './Counter';

class CounterContainer extends Component {
    constructor() {
        super();
        this.state = { current: 0 };
    }
    increment = () => {
        //this.state.current = this.state.current + 1; - can't directly change state
        this.setState({ current: this.state.current + 1 });
    }
    decrement = () => {
        this.setState({ current: this.state.current - 1} );
    }

    render() {
        return (
           <Counter
           decrement={this.decrement}
           current={this.state.current}
           increment={this.increment}
           />
        );
    }
}

export default CounterContainer;