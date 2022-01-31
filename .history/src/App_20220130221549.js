import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.pClick = this.pClick.bind(this);
    this.state = {
      name: 'leonardo',
      age: '22',
      lastName: 'queiros leao',
    }
  }
  pClick() {
    this.setState({ name: 'Era Leonardo, agora é Leonidas',
  age: '23'});
  }
  aClick(){
    this.setState({ age: '23'+'1'})
  }
  render() {
    let { name } = this.state;
    let { age } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.pClick}>
            {name + age}
          </p>
          <a onClick={this.aClick}
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}


export default App;