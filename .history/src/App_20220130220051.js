import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'leonardo',
      age: '22',
      lastName: 'queiros leao',
    }
}

  render(){
    let {name} = this.state;
    var number1 = '87'
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p onClick={() => number1 = 'queiros'}>
            {name + number1}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    )
  }
}


export default App;
