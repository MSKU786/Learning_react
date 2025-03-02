import { Component } from 'react';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log('card list render');
    return (
      <div>
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
