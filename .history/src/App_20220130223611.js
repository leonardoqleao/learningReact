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
  aClick=(oi)=>{ //here is using 'event', but, i can use any name = 'oi'
    oi.preventDefault();
    const {age} = this.state;
    this.setState({ age: age + 11 })
  }
  divClick = (event)=>{
    event.preventDefault();
    import './astyal.js';
    export default astyal
  }
  render() {
    let { name } = this.state;
    let { age } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {name + parseInt(age)}
          <a onClick={this.aClick} href="https://www.astyal.com">
            Learn React
          </a>

        </header>

      </div>
    )
  }
}


export default App;
