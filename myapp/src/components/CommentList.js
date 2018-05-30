import React, { Component } from 'react';

class CommentList extends Component {

    render() {
        const comment = (
            <div>
                <div className="comment">
                    <span>
                        <strong>Gaorieh said:
                        </strong>
                        Great content</span>
                </div>
                <div className="comment">
                    <span>
                        <strong>John said:
                        </strong>
                        Great stylish</span>
                </div>
            </div>
        );
        return (
            <div>{comment}</div>)

    }
};

export default CommentList;