import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';
import './PostContainer.css'

function PostContainer(props) {
    return (
    <div className="postContainer">
    <div className="postHeader">
        <img src={props.post.thumbnailURL} alt="" />
        <p>{props.post.username}</p>    
    </div>

    <img src={props.post.imageURL} alt="" />
    <CommentSection comments={props.post.comments} />

    </div>
    )

}

PostContainer.PropTypes = {
    post: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object),
        imageURL: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        thumbnailURL: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }),
}

export default PostContainer;