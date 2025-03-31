import { Button } from '../button/button.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { CartItem } from '../cart-item/cart-item.component';
export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
          />
        ))}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};
