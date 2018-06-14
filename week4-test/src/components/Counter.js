import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('counter')

@observer
export default class Counter extends Component {

    render() {
        const { count, increaseCount, decreaseCount } = this.props.counter;
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
}