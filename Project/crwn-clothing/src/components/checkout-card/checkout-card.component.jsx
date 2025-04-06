import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

export const CheckoutCard = ({ cartItem }) => {
  console.log(cartItem);
  const { id, name, imageUrl, price, quantity } = cartItem;
  const product = { id, name, imageUrl, price };
  const { removeItemInCart, updateQuantityInCart } = useContext(CartContext);
  return (
    <div>
      <div>
        <span>
          <img
            src={imageUrl}
            alt={name}
          />
        </span>
        <span>{name}</span>
        <span>
          <div onClick={() => updateQuantityInCart(product, 'add')}>+</div>
          {quantity}
          <div onClick={() => updateQuantityInCart(product, 'remove')}>-</div>
        </span>
        <span>${quantity * price}</span>
        <span onClick={() => removeItemInCart(product)}>Remove</span>
      </div>
    </div>
  );
};
