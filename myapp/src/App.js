import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader';
import PostBody from './components/PostBody';
import CommentList from './components/CommentList';

class App extends Component {

    render() {

        return (
            <div className="App">

                <div className="content-header">
                    <TopHeader />

                    <section className="content">
                        <PostBody />

                    </section>
                    <hr />
                    <CommentList />
                </div>
            </div>

        );
    }

}

export default App;
