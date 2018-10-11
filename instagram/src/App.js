import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authenticate/authenticate';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      posts: dummyData,
    };
  }

  render() {
    return (
     <div className="appContainer">
      <PostsPage posts={this.state.posts} />
    </div>)
  }
}

export default Authenticate(App);
