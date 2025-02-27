import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Sam',
        },
        {
          name: 'Jogo',
        },
        {
          name: 'Sukuna',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => (
          <h1 key={index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
