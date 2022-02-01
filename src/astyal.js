import logo from './astyal.svg';
import './App.css';
import { Component } from 'react';

class Astyal extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           Essa é uma mudança contecendo na 
          <a href="https://www.astyal.com">
          </a>
          <button>
            página toda

          </button>

        </header>

      </div>
    )
  }
}
export default Astyal;
