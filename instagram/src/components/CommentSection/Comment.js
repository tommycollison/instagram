import React from 'react';

function Comment(props) { 
    return (
        <div className="comment">
            <p><strong>{props.comment.username}</strong></p>
            <p>{props.comment.text}</p>
        </div>
    )
}

export default Comment;
