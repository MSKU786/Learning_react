import { Component } from 'react';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log('card list render');
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <div
              className=""
              card-container
            >
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size180*180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
