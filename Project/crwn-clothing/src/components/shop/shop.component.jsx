import { useContext } from 'react';
import './shop.component.scss';
import { ProductContext } from '../../contexts/products.context';
import { ProductCard } from '../product-card/product-card.component';

export const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};
