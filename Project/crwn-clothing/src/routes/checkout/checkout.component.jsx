import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutCard } from '../../components/checkout-card/checkout-card.component';

export const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutCard
            key={cartItem.id}
            cartItem={cartItem}
          />
        );
      })}
    </div>
  );
};
