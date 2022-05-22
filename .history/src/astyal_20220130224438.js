import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class astyal extends Component() {
  render(){
    return (

      <div className="App">
        <header className='App-header'>
        </header>
        <nav className="App-nav">
          <a className="App-link" href="https://www.astyal.com" target="_blank" rel="noopener noreferrer" >
            <img src={logo} className="App-logo" alt="logo" />
          </a>

          <p>
            <a className='App-astyal' href="https://www.astyal.com">
              <code></code>
            </a>
          </p>

        </nav>
        <footer className="App-footer">
          <div className="App-footer-div">
            Olá, bem vindo a solução Astyal, fique a vontade para navegar em nosso site e entrar em contato conosco.
          </div>
        </footer>

      </div>
    );
    }
}
export default astyal;
