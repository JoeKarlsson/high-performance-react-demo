import React, { Component } from 'react';
import posts from './data.json';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  render() {
    const itemNode = this.props.posts.map(item => {
			console.log('item', item);
      return (
        <Item post={item} key={item._id} />
      )
    })
    return <div>{ itemNode }</div>;
  }
};

class Item extends React.Component {
  render() {
    return (
      <div>
        <h3>{ this.props.post.title }</h3>
      </div>
    )
  }
};

class App extends Component {
	constructor() {
    super();
    this.state = {
      posts,
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">High Performance React</h1>
        </header>
        <List posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
