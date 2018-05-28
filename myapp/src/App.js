import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        const classNumber = 14;

        const element = React.createElement(
            'h1',
            { className: 'greeting' },
            'Hello, world! from Class14'
        );


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo
                    } className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Welcome to React
                    </h1>
                </header >
                <p className="App-intro">
                    To get started,edit < code > src / App.js
                </code>
                    and save to reload.
            </p>
                <h1>
                    Hello Class {classNumber}
                </h1>
                <div>
                    {element}

                </div>

            </div>

        );
    }

}

export default App;
