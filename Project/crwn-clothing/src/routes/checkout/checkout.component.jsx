import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutCard } from '../../components/checkout-card/checkout-card.component';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

export const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutCard
            key={cartItem.id}
            cartItem={cartItem}
          />
        );
      })}
      <Total>Total: ${totalPrice.toFixed(2)}</Total>
    </CheckoutContainer>
  );
};
