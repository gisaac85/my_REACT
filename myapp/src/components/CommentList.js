import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component {

    render() {
        const comments = [
            {
                'user': 'Gaorieh',
                'comment': 'Great content'
            }, {
                'user': 'John',
                'comment': 'Great stylish'

            }, {
                'user': 'Jitel',
                'comment': 'Awesome!'

            }
        ];
        const commentElement = comments.map((element, index) => (

            <CommentItem user={element.user} comment={element.comment} />
        ));

        return (
            <div>
                {commentElement}

            </div>
        )

    }
};

export default CommentList;