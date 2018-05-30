import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import PostBody from './components/PostBody';
import CommentList from './components/CommentList';
import Counter from './components/Counter';
import Clock from './components/Clock';

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
                <Counter />
                <Clock />
            </div>

        );
    }

}

export default App;
