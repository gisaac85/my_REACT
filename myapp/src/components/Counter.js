import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };
    constructor() {
        super();
        console.log('constructor');
        console.log(this.state);

    };
    handleIncreaseCount = () => this.setState({ count: this.state.count + 1 });
    handleDecreaseCount = () => this.setState({ count: this.state.count - 1 });

    componentWillMount() {
        console.log('component will mount');
        console.log(this.state);
    }
    render() {
        console.log('render');
        console.log(this.state);

        return (
            <div className="panel"><h1>
                Counter
          <span className='header-count'> | {this.state.count}</span>
            </h1>
                <button onClick={this.handleIncreaseCount}>
                    Increase
        </button>
                <button onClick={this.handleDecreaseCount}>
                    Decrease
        </button></div>
        );
    }
    componentDidMount() {
        console.log('component did mount');
        console.log(this.state);
    }
    componentDidUpdate() {
        console.log('component did update');
        console.log(this.state);
    }

};

export default Counter;