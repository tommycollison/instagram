import React from 'react';

const PostHeader = (props) => {
    return (
        <div>
            <img src={props.thumbnail} alt="foo" />
            <p className="username">{props.username}</p>
        </div>
    )
}


export default PostHeader;