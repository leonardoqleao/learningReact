import './App.css';
import { Component } from 'react';

class Astyal extends Component {
  state = {
    posts: [{
      id: 1,
      title: 'O titulo 1',
      body: 'O corpo 1',
    },
    {
      id: 2,
      title: 'O titulo 2',
      body: 'O corpo 2',
    },
    {
      id: 3,
      title: 'O titulo 3',
      body: 'O corpo 3',
    },
  ],
  };
  render() {
    const {post} = this. state;
    return (

      <div className="App">
        {post.map(post => <h1>{post.title}</h1>)}
      </div>
    )
  }
}
export default Astyal;
