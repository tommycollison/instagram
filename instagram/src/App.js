import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostHeader from './../src/components/PostHeader/PostHeader'

class App extends Component {
  constructor() { 
    super();
    this.state = {
      posts: dummyData,
      inputText: '',
    };
  }

  render() {

    if (!this.state.posts.length) { 
      return <p className="appContainer">fetching pictures of food</p>
    }

    return (
     <div className="appContainer">
     <p>Foo</p>
        <SearchBar />
          {this.state.posts.map(post => { return (
      <div>
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
      </div>)
            })}
           
          </div>
    )}
}

export default App;
