import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() { 
    super();
    this.state = {
      posts: dummyData,
      inputText: '',
    };
  }

  render() {
    return (
     <div className="appContainer">
     <p>Foo</p>
        <SearchBar />
        {this.state.posts.map(post => { return (
      <div>
        <PostContainer post={post} key={post.timestamp}/>
      </div>)
            })}
           
          </div>
    )}
}

export default App;
