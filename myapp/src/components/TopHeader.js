import React, { Component } from 'react';
import logo from '../logo.svg';

class TopHeader extends Component {

    render() {

        return (
            <header className="App-header">
                <img src={logo}
                    className="App-logo" alt="logo" />
                <h1 className="App-title">
                    React Class14 Blog
                </h1>
            </header >
        );
    }

};

export default TopHeader;