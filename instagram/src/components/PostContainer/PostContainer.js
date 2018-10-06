import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';
import './PostContainer.css'
import PostHeader from './../PostHeader/PostHeader';

function PostContainer(props) {
    return (
    <div className="postContainer">
    <div className="postHeader">
    <PostHeader 
        thumbnail={props.thumbnail}
        username={props.username} />
    <div className="post">
        <img src={props.image} alt="post" />
    </div>
    <CommentSection comments={props.post.comments} />
    </div>
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