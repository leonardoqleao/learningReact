import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'leonardo',
      age: 22,
      lastName: 'queiros leao',
    }
  }
  pClick=()=> {
    this.setState({ name: 'Era Leonardo, agora é Leonidas',
  age: '23'});
  }
  aClick=()=>{
    const {age} = this.state;
    this.setState({ age: age + 1 })
  }
  render() {
    let { name } = this.state;
    let { age } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.pClick}>
            {name + setInt(age)}
          </p>
          <p onClick={this.aClick}
          >
            Learn React
          </p>
        </header>
      </div>
    )
  }
}


export default App;
