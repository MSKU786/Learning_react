import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import './checkout-card.styles.scss';

export const CheckoutCard = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  const { removeItemInCart, updateQuantityInCart } = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={name}
        />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => updateQuantityInCart(cartItem, 'add')}
        >
          +
        </div>
        {quantity}
        <div
          className="arrow"
          onClick={() => updateQuantityInCart(cartItem, 'remove')}
        >
          -
        </div>
      </span>
      <span className="price">${quantity * price}</span>
      <span
        className="remove-button"
        onClick={() => removeItemInCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};
