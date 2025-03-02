import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/cardList';
import SearchBox from './components/search-box/searchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    let searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      let monsterLowerCase = monster.name.toLowerCase();
      return monsterLowerCase.includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeHolder="Search Monsters..."
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
