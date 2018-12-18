import React, {Component} from 'react';
import Decrementor from './Decrementor';
import CounterDisplay from './CounterDisplay';
import Incrementor from './Incrementor';

class Counter extends Component {
    render() {
        const {decrement, current, increment} = this.props;
        return (
            <div>
                <Decrementor decrease={decrement}/>
                <CounterDisplay current={current} />
                <Incrementor increase={increment} />
            </div>
        );
    }
}

export default Counter;