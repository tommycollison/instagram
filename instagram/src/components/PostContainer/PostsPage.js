import React from 'react';
import './PostsPage.css'
import PostContainer from './../PostContainer/PostContainer';
import PostHeader from './../PostHeader/PostHeader';
import SearchBar from './../SearchBar/SearchBar';

function PostsPage(props) {
    return (
        <div className="appContainer">
           <SearchBar />
           {props.posts.map(post => { return (
            <div className="postContainer">
              <PostHeader />
              <PostContainer 
                post={post}
                comments={post.comments}
                username={post.username}
                key={post.timestamp}
                thumbnail={post.thumbnailUrl}
                image={post.imageUrl}
                likes={post.likes}
             />
            </div> 
           )})}
                 
        </div>
    )}

export default PostsPage;