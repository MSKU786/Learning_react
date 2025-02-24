import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      name: 'Manish',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>Hi {this.state.name}</p>
          <button
            onClick={(e) => {
              this.setState({ name: 'Andrea' });
            }}
          >
            Change RName
          </button>
        </header>
      </div>
    );
  }
}

export default App;
