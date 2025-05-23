import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/cardList';
import SearchBox from './components/search-box/searchBox';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     let searchField = e.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       let monsterLowerCase = monster.name.toLowerCase();
//       return monsterLowerCase.includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h2 className="app-title">Monsters Rolodex</h2>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters..."
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  const onSearchChange = (e) => {
    let searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      let monsterLowerCase = monster.name.toLowerCase();
      return monsterLowerCase.includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h2 className="app-title">Monsters Rolodex</h2>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
