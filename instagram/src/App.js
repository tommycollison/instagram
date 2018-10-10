import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'

class App extends Component {
  constructor() { 
    super();
    this.state = {
      posts: dummyData,
    };
  }

  render() {

    if (!this.state.posts.length) { 
      return <p className="appContainer">fetching pictures of food</p>
    }

    return (
     <div className="appContainer">
      <PostsPage posts={this.state.posts} />
    </div>)
  }
}


export default App;
