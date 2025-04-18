import { Button } from '../button/button.component';
import './product-card.component.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img
        src={imageUrl}
        alt={`${name}`}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={addProductToCart}
      >
        {' '}
        Add to Cart
      </Button>
    </div>
  );
};
