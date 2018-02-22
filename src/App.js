import React, { Component, PureComponent } from 'react';
import posts from './data.json';
import logo from './logo.svg';
import './App.css';

class List extends Component {
// class List extends PureComponent {
  render() {
    const itemNode = this.props.posts.map(item => {
      return (
        <Item post={ item } key={ item._id } />
      )
    })
    return <div>{ itemNode }</div>;
  }
};

class Item extends Component {

	// shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.title !== nextProps.title) {
  //     return true;
  //   }
  //   return false;
  // }

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
			value: '',
    }
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const { posts, value } = this.state;
		const newItem = {
			title: value,
			_id: Date.now(),
		}
		let newArray = posts.slice();
		newArray.unshift(newItem);
		this.setState({
			posts: newArray,
		})
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">High Performance React</h1>
        </header>

				<form onSubmit={this.handleSubmit}>
	        <label>
	          <input type="text" value={this.state.value} onChange={this.handleChange} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>

        <List posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
