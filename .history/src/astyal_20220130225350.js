import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class astyal extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {name + parseInt(age)}
          <a onClick={this.aClick} href="https://www.astyal.com">
            Learn React
          </a>
          <button onClick={astyal}>
            Essa é uma mudança acontecendo na pagina toda

          </button>

        </header>

      </div>
    )
  }
}
export default astyal;
