import { Button } from '../button/button.component';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};
