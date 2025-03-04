import { Component } from 'react';
import './cardList.css';
import Card from '../card/card';
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log('card list render');
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <Card
              id={id}
              name={name}
              email={email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
