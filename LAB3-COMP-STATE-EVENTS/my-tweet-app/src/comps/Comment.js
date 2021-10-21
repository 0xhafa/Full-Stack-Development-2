import React from 'react';
import Like from './Like';
import Timer from './Timer';

class Comment extends React.Component {
    render() { 
        return (
        <div className='CommentLine'>
            <Timer/> {'  '}
            <b>{this.props.commentValue}</b>
            <Like/>
        </div>
        ) 

    }
}
 
export default Comment;