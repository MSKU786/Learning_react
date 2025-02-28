import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };

    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(
        (users) =>
          this.setState(() => {
            return { monsters: users };
          }),
        () => {
          console.log(this.state);
        }
      );
    console.log('component did mount');
  }

  render() {
    console.log('render');

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters..."
          onChange={(e) => {
            console.log(e);
          }}
        />
        {this.state.monsters.map((monster, index) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
