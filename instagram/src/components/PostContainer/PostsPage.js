import React, {Component} from 'react';
import './PostsPage.css'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import PostHeader from './../src/components/PostHeader/PostHeader';

function PostsPage(props) {
    return (
        <div>
        {this.state.posts.map(post => { return (
            <div className="NewPostsPageContent">
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
            </div> // closes NewPostsPageContent
                )
            })}
                 
        </div>
    )}

export default PostsPage