import React, { Component } from 'react';

class PostBody extends Component {

    render() {
        const classNumber = 14;
        const title = (<h2>First Post</h2>);
        const dateOfPost = new Date().toLocaleString();
        const content = "Today We will start our first React class";

        return (
            <div>
                {title}
                < h4 > {dateOfPost}</h4 >
                <p>{content}</p>
            </div>
        );

    }
};

export default PostBody;