import logo from './logo.svg';
import astyalLogo from './astyal.svg'
import './App.css';
import astyal from './astyal';
import { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'leonardo',
      age: 22,
      lastName: 'queiros leao',
      logo: logo
    }
  }
  
  pClick = () => {
    this.setState({ name: 'Era Leonardo, agora é Leonidas',
  age: '23'});
  }
  aClick = (oi) => { //here is using 'event', but, i can use any name = 'oi'
    oi.preventDefault();
    const {age} = this.state;
    this.setState({ age: age + 1 })
  }
  bClick = () => {
    let anyLogo = astyalLogo;
    this.state.logo == logo ? this.setState({ logo: anyLogo}) : this.setState({logo: logo})
    
  };
  render() {
    let { name } = this.state;
    let { age } = this.state;
    let { logo } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {name +' '+ parseInt(age)}
          <a onClick={this.aClick} href="https://www.react.com">
            Learn React
          </a>
          <button onClick={this.bClick} className='astyal'>
            oi
          </button>
        </header>
      </div>
    )
  }
}


export default App;
