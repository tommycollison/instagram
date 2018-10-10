import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage'

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
        <PostsPage />
        </div>)
  }
}


export default App;
