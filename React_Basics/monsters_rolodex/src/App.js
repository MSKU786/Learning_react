import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
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
    const filteredMonsters = this.state.monsters.filter((monster) => {
      let monsterLowerCase = monster.name.toLowerCase();
      return monsterLowerCase.includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters..."
          onChange={(e) => {
            let searchField = e.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
