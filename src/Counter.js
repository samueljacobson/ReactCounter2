import React, {Component} from 'react';
import Decrementor from './Decrementor';
import CounterDisplay from './CounterDisplay';
import Incrementor from './Incrementor';

class Counter extends Component {
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
            <div>
                <Decrementor decrease={this.decrement}/>
                <CounterDisplay current={this.state.current} />
                <Incrementor increase={this.increment} />
            </div>
        );
    }
}

export default Counter;