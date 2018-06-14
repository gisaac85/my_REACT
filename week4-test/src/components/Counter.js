import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('counter')

@observer
class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncreaseCount = () => this.setState({ count: this.state.count + 1 });
    handleDecreaseCount = () => this.setState({ count: this.state.count - 1 });

    render() {
        const { count, increaseCount, decreaseCount } = this.props.Counter;
        return (
            <div className="panel">
                <h1>Counter
              <span className='header-count'> | {count}</span></h1>

                <button onClick={increaseCount}>
                    Increase
         </button>
                <button onClick={decreaseCount}>
                    Decrease
         </button>
            </div>
        );
    }
    // componentDidMount() {
    //     console.log('component did mount');
    //     console.log(this.state);
    // }
    // componentDidUpdate() {
    //     console.log('component did update');
    //     console.log(this.state);
    // }
    // componentWillMount() {
    //     console.log('component will mount');
    //     console.log(this.state);
    // }
};

export default Counter;