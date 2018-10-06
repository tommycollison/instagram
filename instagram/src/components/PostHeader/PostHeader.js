import React from 'react';
import './PostHeader.css'

const PostHeader = (props) => {
    return (
        <div classname="PostHeaderElements">
            <img className="userPhoto" src={props.thumbnail} alt="foo" />
            <p className="username">{props.username}</p>
        </div>
    )
}


export default PostHeader;